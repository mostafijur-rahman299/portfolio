import { Github, Linkedin, Twitter } from "lucide-react";


export function Footer() {
    return (
        <footer className="bg-indigo-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
                            Mostafijur Rahman
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            Full-Stack Developer & Tech Innovator
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
                        <p className="text-sm text-gray-400">
                            &copy; 2023 All Rights Reserved
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <Twitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
