import React from "react";
import { motion } from "framer-motion";

export function MotionPath() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <svg
                className="absolute w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M0,0 C20,20 50,20 100,0 L100,100 L0,100 Z"
                    fill="rgba(16, 185, 129, 0.1)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M0,100 C30,80 70,80 100,100 L100,0 L0,0 Z"
                    fill="rgba(16, 185, 129, 0.05)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />
            </svg>
        </div>
    );
}
