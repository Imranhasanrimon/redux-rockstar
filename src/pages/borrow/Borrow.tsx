import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LoaderCircle } from "lucide-react"
import { useGetBookQuery } from "@/redux/api/features/bookApi"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"

// shadcn form components
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useBorrowABookMutation } from "@/redux/api/features/borrowApi"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"
import { toast } from "sonner"
import { formatDate } from "@/utils/formateDate"

const borrowSchema = z.object({
    dueDate: z.date().optional(),
    quantity: z
        .number()
        .min(1, "At least 1 copy")
    // .max(5, "You can’t borrow more than 5 at a time"), 
})

type BorrowForm = z.infer<typeof borrowSchema>

export default function Borrow() {
    const { bookId } = useParams<{ bookId: string }>()
    const navigate = useNavigate()
    const { data, isLoading, isError } = useGetBookQuery(bookId!)

    const [borrowABook, { isLoading: isBorrowing, isSuccess, data: borrowData }] = useBorrowABookMutation()

    const form = useForm<BorrowForm>({
        resolver: zodResolver(borrowSchema),
        defaultValues: {
            dueDate: undefined,
            quantity: 1,
        },
    })

    useEffect(() => {
        if (isSuccess) {
            form.reset()
            toast("Book has been borrowed", {
                description: formatDate(borrowData.data.createdAt),
                action: {
                    label: "Close",
                    onClick: () => console.log("closed"),
                },
            });

            navigate("/borrow-summary")
        }
    }, [isSuccess, navigate, borrowData, form]);

    if (isLoading || isBorrowing) {
        return (
            <div className="h-[90vh] flex justify-center items-center">
                <LoaderCircle size={70} className="animate-spin text-primary" />
            </div>
        )
    }

    if (isError || !data?.data) {
        return (
            <div className="flex flex-col items-center justify-center h-[90vh]">
                <h2 className="text-2xl font-bold text-red-600">Book not found</h2>
                <Button onClick={() => navigate("/books")} className="mt-4">
                    Back to Books
                </Button>
            </div>
        )
    }

    const book = data.data

    const onSubmit = async (values: BorrowForm) => {
        try {
            const borrowPayload = {
                book: book._id,
                dueDate: values.dueDate ? values.dueDate.toISOString() : null,
                quantity: values.quantity,
            }

            await borrowABook(borrowPayload).unwrap()


        } catch (error) {
            console.error(error)
            toast("❌ Borrow failed. Try again.", {
                description: "Please fill out all the input fields.",
                action: {
                    label: "Close",
                    onClick: () => console.log("closed"),
                },
            });
        }
    }



    return (
        <div className="max-w-3xl mx-auto py-10 px-6">
            <Card className="rounded-2xl shadow-md">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <span className="text-xl md:text-3xl">{book.title}</span>
                        <span
                            className={cn(
                                "text-sm px-3 py-1 rounded-full",
                                book.available
                                    ? "bg-green-500/20 text-green-600"
                                    : "bg-red-500/20 text-red-600"
                            )}
                        >
                            {book.available ? "Available" : "Unavailable"}
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p>
                        <strong>Author:</strong> {book.author}
                    </p>
                    <p>
                        <strong>Genre:</strong> {book.genre}
                    </p>
                    <p>
                        <strong>Available Copies:</strong> {book.copies}
                    </p>
                    <p className="text-slate-600">{book.description}</p>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6 mt-6"
                        >
                            <FormField
                                control={form.control}
                                name="quantity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Quantity</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                min={1}
                                                max={book.copies}
                                                {...field}
                                                onChange={(e) => field.onChange(Number(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dueDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Return Date (optional)</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                variant="outline"
                                type="submit"
                                disabled={!book.available}
                                className="w-full"
                            >
                                {book.available ? "Borrow Now" : "Not Available"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
