// src/pages/books/BookDetails.tsx
import { useParams, Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, User, Calendar, Hash, LoaderCircle } from "lucide-react"
import { formatDate } from "@/utils/formateDate"
import { useGetBookQuery } from "@/redux/api/features/bookApi"
import UpdateBookModal from "../books/components/UpdateBookModal"

export default function BookDetails() {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading, isError } = useGetBookQuery(id)

    if (isLoading) {
        return <div className="flex justify-center  my-10">
            <LoaderCircle className="animate-spin" size={70} />
        </div>
    }

    if (isError || !data?.data) {
        return <p className="text-center text-red-500 py-10">Failed to load book details.</p>
    }

    const book = data.data

    return (
        <div className="max-w-3xl mx-auto w-11/12 py-10">
            <Card className="rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{book.title}</span>
                        <Badge variant={book.available ? "default" : "destructive"}>
                            {book.available ? "Available" : "Unavailable"}
                        </Badge>
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                    {/* Author */}
                    <p className="flex items-center gap-2 text-base text-muted-foreground">
                        <User size={18} /> Author: {book.author}
                    </p>

                    {/* Genre */}
                    <p className="flex items-center gap-2 text-base text-muted-foreground">
                        <BookOpen size={18} /> Genre: {book.genre}
                    </p>

                    {/* ISBN */}
                    <p className="flex items-center gap-2 text-base text-muted-foreground">
                        <Hash size={18} /> ISBN: {book.isbn}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-foreground leading-relaxed">
                        {book.description}
                    </p>

                    {/* CreatedAt */}
                    <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={16} /> Added: {formatDate(book.createdAt)}
                    </p>

                    {/* Copies */}
                    <div className="flex justify-between items-center border-t border-slate-200 dark:border-slate-700 pt-4">
                        <span className="text-sm text-muted-foreground">Copies: {book.copies}</span>

                        <div className="flex gap-3">
                            <Button asChild size="sm">
                                <Link to={`/borrow/${book._id}`}>Borrow</Link>
                            </Button>
                            <Button asChild size="sm" variant="outline">
                                <Link to="/books">Back to Books</Link>
                            </Button>
                        </div>
                    </div>
                    {/* <UpdateBookModal book={book} /> */}
                </CardContent>
            </Card>
        </div>
    )
}
