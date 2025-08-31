import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Banner() {
    return (
        <section className="relative w-full bg-slate-100 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-center py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6">

                {/* Heading */}
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-foreground sm:text-5xl md:text-6xl">
                    Minimal Library Management System
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg text-slate-600 dark:text-muted-foreground sm:text-xl">
                    Organize, track, and manage your library books with ease.
                </p>

                {/* CTA */}
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link to="/books">📚 Explore Books</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link to="/create-book">➕ Add Book</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
