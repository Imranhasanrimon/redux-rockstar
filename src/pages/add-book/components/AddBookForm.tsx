import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useAddBookMutation } from "@/redux/api/features/bookApi"
import { useEffect, type Dispatch, type SetStateAction } from "react"
import { LoaderCircle } from "lucide-react"
import { toast } from "sonner"
import { formatDate } from "@/utils/formateDate"



const formSchema = z.object({
    title: z.string().min(2, {
        message: "Book title must be at least 2 characters.",
    }),
    author: z.string().min(2, {
        message: "Author name must be at least 2 characters.",
    }),
    genre: z.string().min(2, {
        message: "Select the category of the book",
    }),
    isbn: z.string().min(10, {
        message: "ISBN must be at least 10 characters.",
    }),
    description: z.string().min(5, {
        message: "Description must be at least 5 characters.",
    }),
    copies: z.number().min(1, {
        message: "Copies must be a positive number.",
    }),
    available: z.boolean(),
})

type AddBookFormProps = {
    setOpen?: Dispatch<SetStateAction<boolean>>
}

export default function AddBookForm({ setOpen }: AddBookFormProps) {
    const [addBook, { isLoading, isSuccess, data }] = useAddBookMutation()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            author: "",
            genre: "",
            isbn: "",
            description: "",
            copies: 0,
            available: false
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await addBook({ ...values, available: values.copies > 0 })

    }


    useEffect(() => {
        if (isSuccess) {
            setOpen?.(false);
            form.reset()
            toast("Book has been added", {
                description: formatDate(data.data.createdAt),
                action: {
                    label: "Close",
                    onClick: () => console.log("closed"),
                },
            })
        }
    }, [isSuccess, setOpen]);

    return (
        isLoading ?
            <div className="flex justify-center my-10">
                <LoaderCircle className="animate-spin" size={70} />
            </div>
            : <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Book Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Title Of The Book" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input placeholder="Book Author Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genre</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Genre" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="FICTION">FICTION</SelectItem>
                                        <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isbn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Describe Your Book In A Few Words" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number of Copies</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button variant="secondary" type="submit" className="w-full">Submit</Button>
                </form>
            </Form>
    )
}
