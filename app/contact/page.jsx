"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/Card";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { User, Mail, Send, Loader } from "lucide-react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const [successMessage, setSuccessMessage] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const validateFields = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateFields();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setIsLoading(true);
            await handleSendEmail();
            setIsLoading(false);
            setSuccessMessage("Message sent successfully!");
            setTimeout(() => {
              setSuccessMessage("");
          }, 5000);
        }
    };

    const handleInputChange = (field, value) => {
        if (errors[field]) {
            setErrors({ ...errors, [field]: undefined });
        }
        switch (field) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "message":
                setMessage(value);
                break;
            default:
                break;
        }
    };

    const handleSendEmail = async () => {
        const res = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await res.json();
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-200 to-teal-300 text-foreground">
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
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M0,100 C30,80 70,80 100,100 L100,0 L0,0 Z"
                        fill="rgba(16, 185, 129, 0.05)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.1,
                        }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
                <motion.h1
                    id="about"
                    className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Me
                </motion.h1>

                <motion.div
                    id="contact"
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Card className="bg-white bg-opacity-70 backdrop-blur-lg overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-2xl text-emerald-700">
                                Get in Touch
                            </CardTitle>
                            <CardDescription className="text-emerald-600">
                                Have a question or want to work together?
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {successMessage && (
                                <div
                                    className="bg-emerald-100 border-l-4 border-emerald-500 text-emerald-700 p-4 mb-4"
                                    role="alert"
                                >
                                    <p className="font-bold">Success</p>
                                    <p>{successMessage}</p>
                                </div>
                            )}
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="name"
                                            className="text-sm font-medium text-emerald-700"
                                        >
                                            Name
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="name"
                                                placeholder="Your Name"
                                                value={name}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                className={`pl-10 bg-white bg-opacity-50 ${
                                                    errors.name
                                                        ? "border-red-500"
                                                        : "border-emerald-300"
                                                } focus:border-emerald-500 focus:ring-emerald-500`}
                                            />
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
                                        </div>
                                        {errors.name && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="email"
                                            className="text-sm font-medium text-emerald-700"
                                        >
                                            Email
                                        </label>
                                        <div className="relative">
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                                value={email}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                className={`pl-10 bg-white bg-opacity-50 ${
                                                    errors.email
                                                        ? "border-red-500"
                                                        : "border-emerald-300"
                                                } focus:border-emerald-500 focus:ring-emerald-500`}
                                            />
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium text-emerald-700"
                                    >
                                        Message
                                    </label>
                                    <div className="relative">
                                        <div className="relative">
                                            <Textarea
                                                id="message"
                                                placeholder="Your Message..."
                                                value={message}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "message",
                                                        e.target.value
                                                    )
                                                }
                                                className={`bg-white bg-opacity-50 ${
                                                    errors.message
                                                        ? "border-red-500"
                                                        : "border-emerald-300"
                                                } focus:border-emerald-500 focus:ring-emerald-500`}
                                                rows="5"
                                            />
                                        </div>
                                    </div>
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                                <Button
                                    type="submit"
                                    className="bg-emerald-600 text-white px-4 py-2 flex items-center space-x-2 hover:bg-emerald-700 transition"
                                >
                                    
                                    {isLoading ? (
                                        <Loader className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <Send className="w-5 h-5" />
                                    )}
                                    <span>Send Message</span>
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
