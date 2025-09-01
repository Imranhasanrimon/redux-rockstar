import { useGetBooksQuery } from "@/redux/api/features/bookApi";
import AddNewBookModal from "./components/AddNewBookModal";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/Columns";
import { LoaderCircle } from "lucide-react";


export default function Books() {
    const { data, isLoading } = useGetBooksQuery(undefined);

    if (isLoading) {
        return <div className=" h-[calc(100vh-200px)] flex justify-center items-center">
            <LoaderCircle size={70} className="animate-spin" />
        </div>
    }
    return (
        <div className="max-w-7xl mx-auto w-11/12">
            <h1 className="text-3xl my-5 text-center font-semibold">List of Books ({data.data.length})</h1>
            <div className="my-5 flex items-center justify-center animate-pulse">
                <AddNewBookModal />
            </div>
            <DataTable columns={columns} data={data.data} />
        </div>
    )
}
