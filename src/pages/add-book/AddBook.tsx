import AddBookForm from "./components/AddBookForm";

export default function AddBook() {
    return (
        <div className="max-w-3xl mx-auto w-11/12 mt-5  md:mt-10">
            <div className="border p-4 rounded-lg">
                <h1 className="text-3xl font-semibold text-center">Add Book</h1>
                <p className="text-lg text-center text-slate-500 mb-5">A valuable book can change one's life</p>
                <AddBookForm />
            </div>
        </div>
    )
}
