// src/components/layout/Footer.tsx
import { Link } from "react-router-dom"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-700 bg-background">
            <div className="mx-auto max-w-7xl w-11/12 py-12 grid gap-10 md:grid-cols-4">

                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Minimal Library Management System helps you manage books, borrowing,
                        and tracking with a clean and efficient workflow. Built with
                        <span className="font-medium text-foreground"> React, Redux, and MongoDB</span>.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link to="/books" className="hover:text-foreground transition">Books</Link></li>
                        <li><Link to="/borrow-summary" className="hover:text-foreground transition">Borrow Summary</Link></li>
                        <li><Link to="/create-book" className="hover:text-foreground transition">Add Book</Link></li>
                        <li><Link to="/about" className="hover:text-foreground transition">About Project</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a
                                href="https://github.com/Imranhasanrimon/redux-rockstar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition"
                            >
                                GitHub Repository
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://redux-toolkit.js.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition"
                            >
                                Redux Toolkit Docs
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://react.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition"
                            >
                                React Docs
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact / Socials */}
                <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Contact</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                            <Mail size={16} />
                            <a href="mailto:yourmail@example.com" className="hover:text-foreground transition">
                                mail@example.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Github size={16} />
                            <a
                                href="https://github.com/Imranhasanrimon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition"
                            >
                                GitHub
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Linkedin size={16} />
                            <a
                                href="https://linkedin.com/in/imranhasanrimon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-foreground transition"
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-700 mt-8 py-4">
                <p className="text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Minimal Library Management System. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
