import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import UpdateBookForm from "@/pages/add-book/components/UpdateBookForm"
import type { Book } from "@/redux/types"
import { Edit } from "lucide-react"
import { useState, type Dispatch, type SetStateAction } from "react"

export type UpdateBookModalProps = {
    book: Book;
    setOpen?: Dispatch<SetStateAction<boolean>>
}
export default function UpdateBookModal({ book }: UpdateBookModalProps) {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost"><Edit /></Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Book</DialogTitle>
                    <DialogDescription>
                        Please provide all valid information regarding your book.
                    </DialogDescription>
                </DialogHeader>
                <UpdateBookForm book={book} setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    )
}
