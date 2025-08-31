// src/components/layout/Footer.tsx
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-700 bg-background">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">

                {/* Left side */}
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Minimal Library Management System. All rights reserved.
                </p>

                {/* Right side */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <Link to="/books" className="hover:text-foreground transition">
                        Books
                    </Link>
                    <Link to="/borrow-summary" className="hover:text-foreground transition">
                        Borrow Summary
                    </Link>
                    <a
                        href="https://github.com/your-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}
