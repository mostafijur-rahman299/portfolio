"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import * as cv from "@techstark/opencv-js";
import { DocumentScanner } from "../components/DocumentScanner";
import Image1 from "@/public/TestImages/image1.png";
import Image2 from "@/public/TestImages/image2.png";
import Image3 from "@/public/TestImages/image3.png";
import Image4 from "@/public/TestImages/image4.png";
import Image6 from "@/public/TestImages/image6.png";

const Test = () => {
    const Images = [
        {
            element: Image1,
            name: "Document Image",
            id: "document-image",
        },
        { element: Image2, name: "Test 2 Image", id: "test2-image" },
        { element: Image3, name: "Test 3 Image", id: "test3-image" },
        { element: Image4, name: "Test 4 Image", id: "test4-image" },
        { element: Image6, name: "Test 6 Image", id: "test6-image" },
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-20">
            {Images.map((image, index) => (
                <ImageCard image={image} index={index} key={index} />
            ))}
        </div>
    );
};

export default Test;

function ImageCard({ image, index }) {
    const [points, setPoints] = useState(null);
    const [activePoints, setActivePoints] = useState(null); // For smooth updates
    const canvasRef = useRef(null);
    const canvasRef2 = useRef(null);
    const [draggingMode, setDraggingMode] = useState(null); // 'middle' or corner index
    const dragStartRef = useRef({}); // Store initial drag positions

    // Initialize canvas and default bounding box
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }, [image]);

    const handleDetectEdges = useCallback((imageId) => {
        const documentScanner = new DocumentScanner(cv);
        const imgElement = document.getElementById(imageId);
        const detectedPoints = documentScanner.detect(imgElement);

        const initialPoints = detectedPoints || [
            { x: 50, y: 50 },
            { x: 150, y: 50 },
            { x: 150, y: 150 },
            { x: 50, y: 150 },
        ];

        drawPolyline(imgElement, initialPoints);
        setPoints(initialPoints);
    }, []);

    const drawPolyline = useCallback((imgElement, polylinePoints) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        try {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

            // Draw polyline
            ctx.beginPath();
            ctx.moveTo(polylinePoints[0].x, polylinePoints[0].y);
            polylinePoints.forEach((point) => ctx.lineTo(point.x, point.y));
            ctx.closePath();
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw corners
            polylinePoints.forEach((point) => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
                ctx.fillStyle = "blue";
                ctx.fill();
            });

            // Highlight dragging point
            if (draggingMode !== null && draggingMode !== "middle") {
                const activePoint = polylinePoints[draggingMode];
                ctx.beginPath();
                ctx.arc(activePoint.x, activePoint.y, 8, 0, Math.PI * 2);
                ctx.fillStyle = "green";
                ctx.fill();
            }
        } catch (error) {
            console.error("Error drawing polyline:", error);
        }
    }, [draggingMode]);

    const handleMouseDown = (e, imageId) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const polylinePoints = points;

        // Check for corner resize
        const cornerIndex = polylinePoints.findIndex(
            (point) => Math.abs(point.x - x) < 10 && Math.abs(point.y - y) < 10
        );

        if (cornerIndex !== -1) {
            setDraggingMode(cornerIndex);
            dragStartRef.current = { x, y, points: polylinePoints };
            return;
        }

        // Check for middle drag
        const [minX, maxX] = [
            Math.min(...polylinePoints.map((p) => p.x)),
            Math.max(...polylinePoints.map((p) => p.x)),
        ];
        const [minY, maxY] = [
            Math.min(...polylinePoints.map((p) => p.y)),
            Math.max(...polylinePoints.map((p) => p.y)),
        ];

        if (x > minX && x < maxX && y > minY && y < maxY) {
            setDraggingMode("middle");
            dragStartRef.current = { x, y, points: polylinePoints };
        }
    };

    const handleMouseMove = (e, imageId) => {
        if (draggingMode === null) return;

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const { points: startPoints, x: startX, y: startY } = dragStartRef.current;
        const dx = x - startX;
        const dy = y - startY;

        let updatedPoints;

        if (draggingMode === "middle") {
            updatedPoints = startPoints.map((point) => ({
                x: point.x + dx,
                y: point.y + dy,
            }));
        } else {
            updatedPoints = [...startPoints];
            updatedPoints[draggingMode] = { x, y };
        }

        setActivePoints(updatedPoints);
        drawPolyline(document.getElementById(imageId), updatedPoints);
    };

    const handleMouseUp = (imageId) => {
        if (activePoints) {
            setPoints(activePoints);
        }
        setActivePoints(null);
        setDraggingMode(null);
    };

    const handleCrop = (imageId) => {
        if (!points) return;

        const documentScanner = new DocumentScanner(cv);
        const imgElement = document.getElementById(imageId);
        const croppedImage = documentScanner.crop(imgElement, points);
        const canvas = canvasRef2.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(croppedImage, 0, 0, canvas.width, canvas.height);
    };

    return (
        <div className="flex items-center justify-center gap-10" key={index}>
            <div className="flex flex-col items-center justify-center">
                <Image
                    src={image.element}
                    alt={image.name}
                    id={image.id}
                    width={200}
                    height={200}
                />
                <button onClick={() => handleDetectEdges(image.id)}>
                    Detect Edges
                </button>
            </div>

            <div className="flex flex-col items-center justify-center">
                <canvas
                    ref={canvasRef}
                    id={`${image.id}-polyline`}
                    width={200}
                    height={300}
                    onMouseDown={(e) => handleMouseDown(e, image.id)}
                onMouseMove={(e) => handleMouseMove(e, image.id)}
                    onMouseUp={() => handleMouseUp(image.id)}
                ></canvas>
                <button onClick={() => handleCrop(image.id)}>Crop</button>
            </div>
            <canvas
                ref={canvasRef2}
                id={`${image.id}-cropped`}
                width={200}
                height={300}
                onMouseDown={(e) => handleMouseDown(e, image.id)}
            onMouseMove={(e) => handleMouseMove(e, image.id)}
                onMouseUp={() => handleMouseUp(image.id)}
            ></canvas>
        </div>
    );
}
