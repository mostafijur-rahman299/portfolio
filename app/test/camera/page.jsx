"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import * as cv from "@techstark/opencv-js";

const CameraDocumentScanner = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isScanning, setIsScanning] = useState(false);

    // Start the camera and adjust canvas size
    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "environment" },
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;

                    // Set canvas size to match video feed
                    videoRef.current.onloadedmetadata = () => {
                        const videoWidth = videoRef.current.videoWidth;
                        const videoHeight = videoRef.current.videoHeight;

                        if (canvasRef.current) {
                            canvasRef.current.width = videoWidth;
                            canvasRef.current.height = videoHeight;
                        }
                    };
                }
            } catch (err) {
                console.error("Error accessing the camera:", err);
            }
        };

        startCamera();

        return () => {
            if (videoRef.current?.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, []);

    // Function to draw a polyline on the canvas
    const drawPolyline = (ctx, points) => {
        if (!ctx || !points || points.length < 4) return;

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.forEach((point) => ctx.lineTo(point.x, point.y));
        ctx.closePath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw corners
        points.forEach((point) => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = "blue";
            ctx.fill();
        });
    };

    // Real-time edge detection and polyline drawing
    const detectEdges = useCallback(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas) return;

        const ctx = canvas.getContext("2d");
        const processFrame = () => {
            if (!isScanning) return;

            try {
                // Draw the video frame onto the canvas
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                // Perform OpenCV processing
                const src = cv.imread(canvas);
                const dst = new cv.Mat();
                const gray = new cv.Mat();
                const blurred = new cv.Mat();
                const edges = new cv.Mat();

                // Convert the image to grayscale
                cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

                // Apply Gaussian blur
                cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);

                // Detect edges using Canny
                cv.Canny(blurred, edges, 50, 150);

                // Find contours
                const contours = new cv.MatVector();
                const hierarchy = new cv.Mat();
                cv.findContours(edges, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

                // Draw the largest contour as a polyline
                let maxArea = 0;
                let largestContour = null;

                for (let i = 0; i < contours.size(); i++) {
                    const contour = contours.get(i);
                    const area = cv.contourArea(contour);
                    if (area > maxArea) {
                        maxArea = area;
                        largestContour = contour;
                    }
                }

                if (largestContour) {
                    const points = cv.approxPolyDP(largestContour, 0.02 * cv.arcLength(largestContour, true), true);
                    const polylinePoints = [];
                    for (let i = 0; i < points.rows; i++) {
                        const [x, y] = points.intPtr(i);
                        polylinePoints.push({ x, y });
                    }
                    drawPolyline(ctx, polylinePoints);
                }

                // Clean up
                src.delete();
                dst.delete();
                gray.delete();
                blurred.delete();
                edges.delete();
                contours.delete();
                hierarchy.delete();
            } catch (error) {
                console.error("Error processing frame:", error);
            }

            requestAnimationFrame(processFrame);
        };

        processFrame();
    }, [isScanning]);

    const handleStartScan = () => {
        setIsScanning(true);
        detectEdges();
    };

    const handleStopScan = () => {
        setIsScanning(false);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
            {/* Video Feed */}
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="rounded-md shadow-md"
                style={{ width: "300px", height: "400px" }}
            ></video>

            {/* Canvas for drawing */}
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 rounded-md"
                style={{ pointerEvents: "none" }}
            ></canvas>

            {/* Buttons */}
            <div className="flex gap-4">
                <button
                    onClick={handleStartScan}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Start Scanning
                </button>
                <button
                    onClick={handleStopScan}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                    Stop Scanning
                </button>
            </div>
        </div>
    );
};

export default CameraDocumentScanner;
