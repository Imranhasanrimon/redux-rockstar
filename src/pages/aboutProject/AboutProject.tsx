// src/pages/AboutProject.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutProject() {
    return (
        <div className="max-w-4xl mx-auto w-11/12 px-4 py-10">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">About This Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground">

                    {/* Introduction */}
                    <section>
                        <p className="text-base leading-relaxed">
                            The <span className="text-foreground font-semibold">Minimal Library Management System</span>
                            is a full-stack application designed to manage books, borrowing, and summaries efficiently.
                            It’s a lightweight solution built for learning modern web technologies and handling CRUD
                            operations with clean UI and smooth user experience.
                        </p>
                    </section>

                    {/* Features */}
                    <section>
                        <h3 className="text-lg font-semibold text-foreground mb-2">✨ Key Features</h3>
                        <ul className="space-y-2 text-sm">
                            {[
                                "Book management (Add, Edit, Delete, View)",
                                "Borrow and return flow with availability check",
                                "Borrow summary with aggregated data",
                                "Responsive and modern UI with Tailwind CSS",
                                "Error handling with retry mechanisms",
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-green-5005">✔</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </section>


                    {/* Tech Stack */}
                    <section>
                        <h3 className="text-lg font-semibold text-foreground mb-2">🛠 Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">React</Badge>
                            <Badge variant="secondary">TypeScript</Badge>
                            <Badge variant="secondary">Redux Toolkit</Badge>
                            <Badge variant="secondary">RTK Query</Badge>
                            <Badge variant="secondary">Express.js</Badge>
                            <Badge variant="secondary">MongoDB</Badge>
                            <Badge variant="secondary">Mongoose</Badge>
                            <Badge variant="secondary">Tailwind CSS</Badge>
                        </div>
                    </section>

                    {/* Motivation */}
                    <section>
                        <h3 className="text-lg font-semibold text-foreground mb-2">🚀 Purpose</h3>
                        <p className="text-sm leading-relaxed">
                            This project is part of an academic and professional learning journey.
                            It demonstrates the integration of a modern frontend with a backend API,
                            focusing on scalability, clean design, and user-friendly features.
                            The goal is to showcase real-world application of full-stack development.
                        </p>
                    </section>
                </CardContent>
            </Card>
        </div>
    )
}
