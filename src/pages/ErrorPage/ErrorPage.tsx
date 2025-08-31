// src/pages/ErrorPage.tsx
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { AlertCircle } from "lucide-react"

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-center px-4">

            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-10 max-w-xl w-full">
                <AlertCircle className="mx-auto text-red-500 w-16 h-16 mb-6" />
                <h1 className="text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
                    Oops! Page not found
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mb-8">
                    The page you are looking for does not exist, might have been removed, or you typed the wrong URL.
                </p>
                <Button variant="outline" size="lg" asChild>
                    <Link to="/">🏠 Go Back Home</Link>
                </Button>
            </div>

            <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} Minimal Library. All rights reserved.
            </p>
        </div>
    )
}
