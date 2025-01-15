"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import * as cv from "@techstark/opencv-js";
import { DocumentScanner } from "./components/DocumentScanner";
import Image1 from "../../public/TestImages/image1.png";
import Image2 from "../../public/TestImages/image2.png";

const Test = () => {
    const Images = [
        {
            element: Image1,
            name: "Document Image",
            id: "document-image",
        },
        { element: Image2, name: "Test 2 Image", id: "test2-image" },
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
    const [points, setPoints] = useState({});
    const canvasRef = useRef(null);
    const [draggingPointIndex, setDraggingPointIndex] = useState(null);

    const handleCrop = (imageId) => {
        let croppedPoints = points[imageId];
        if (!croppedPoints) {
            croppedPoints = handleAutoDetect(imageId);
        }

        const documentScanner = new DocumentScanner(cv);
        const imgElement = document.getElementById(imageId);
        const croppedImage = documentScanner.crop(imgElement, croppedPoints);
        const canvas = document.getElementById(`${imageId}-cropped`);
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous cropped image
        ctx.drawImage(croppedImage, 0, 0);
    };

    const handleAutoDetect = (imageId) => {
        const documentScanner = new DocumentScanner(cv);
        const imgElement = document.getElementById(imageId);
        const detectedPoints = documentScanner.detect(imgElement);
        setPoints((prevPoints) => ({
            ...prevPoints,
            [imageId]: detectedPoints,
        }));
        return detectedPoints;
    };

    const handleDetectEdges = (imageId) => {
        let points = handleAutoDetect(imageId);
        drawPolyline(document.getElementById(imageId), points);
    };

    const drawPolyline = (imgElement, points) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawing
        ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height); // Corrected line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        points.forEach((point) => {
            ctx.lineTo(point.x, point.y);
        });
        ctx.closePath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw the draggable points (vertices)
        points.forEach((point, index) => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = index === draggingPointIndex ? "blue" : "green";
            ctx.fill();
        });
    };

    const handleMouseDown = (e, imageId) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Find the closest point to start dragging or resizing
        const closestPointIndex = points[imageId]?.findIndex(
            (point) => Math.abs(point.x - x) < 10 && Math.abs(point.y - y) < 10 // 10px threshold
        );

        if (closestPointIndex >= 0) {
            setDraggingPointIndex(closestPointIndex); // Start dragging or resizing
        }
    };

    const handleMouseMove = (e, imageId) => {
        if (draggingPointIndex === null) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const updatedPoints = [...points[imageId]];
        updatedPoints[draggingPointIndex] = {
            ...updatedPoints[draggingPointIndex],
            x,
            y,
        };

        setPoints((prevPoints) => ({
            ...prevPoints,
            [imageId]: updatedPoints,
        }));

        drawPolyline(document.getElementById(imageId), updatedPoints);
    };

    const handleMouseUp = () => {
        setDraggingPointIndex(null); // Stop dragging
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
                {/* <button onClick={() => handleCrop(image.id)}>
                            Crop With Auto Detect
                        </button> */}
            </div>

            {/* <canvas
                        ref={canvasRef}
                        id={`${image.id}-cropped`}
                        width={300}
                        height={300}
                        onMouseDown={(e) => handleMouseDown(e, image.id)}
                        onMouseMove={(e) => handleMouseMove(e, image.id)}
                        onMouseUp={handleMouseUp}
                    ></canvas> */}

            <canvas
                ref={canvasRef}
                id={`${image.id}-polyline`}
                width={200}
                height={300}
                onMouseDown={(e) => handleMouseDown(e, image.id)}
                onMouseMove={(e) => handleMouseMove(e, image.id)}
                onMouseUp={handleMouseUp}
            ></canvas>
        </div>
    );
}
