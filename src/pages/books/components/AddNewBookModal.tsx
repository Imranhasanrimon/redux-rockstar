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

export default function AddNewBookModal() {
    return (
        <Dialog>
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
                <AddBookForm />
            </DialogContent>
        </Dialog>
    )
}
