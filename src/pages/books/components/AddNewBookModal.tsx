import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import AddBookForm from "@/pages/add-book/components/AddBookForm"
import { useState } from "react"

export default function AddNewBookModal() {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Add New Book</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add A New Book</DialogTitle>
                    <DialogDescription>
                        Please provide all valid information regarding your book.
                    </DialogDescription>
                </DialogHeader>
                <AddBookForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}
