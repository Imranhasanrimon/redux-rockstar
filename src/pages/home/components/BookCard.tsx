import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, User, Calendar } from "lucide-react"
import { formatDate } from "@/utils/formateDate"
import { Link } from "react-router-dom"
import type { Book } from "@/redux/types"

interface BookCardProps {
    book: Book
}

export default function BookCard({ book }: BookCardProps) {
    return (
        <Card className="w-full rounded-2xl shadow-md border border-slate-200 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span className="text-xl font-bold">{book.title}</span>
                    <Badge variant={book.available ? "default" : "destructive"}>
                        {book.available ? "Available" : "Unavailable"}
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 flex flex-col flex-1">
                <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <User size={16} /> {book.author}
                </p>
                <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <BookOpen size={16} /> Genre: {book.genre}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 ">
                    {book.description}
                </p>

                <p className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Calendar size={14} /> Added: {formatDate(book.createdAt)}
                </p>

                <div className="flex justify-between items-center pt-2 mt-auto">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                        Copies: {book.copies}
                    </span>
                    <Link to={`/books/${book._id}`}>
                        <Button size="sm" variant="secondary">
                            View Details
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
