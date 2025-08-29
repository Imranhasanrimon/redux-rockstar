import { useGetBooksQuery } from "@/redux/api/features/bookApi";
import AddNewBookModal from "./components/AddNewBookModal";
import { DataTable } from "./components/DataTable";
import { columns } from "./components/Columns";


export default function Books() {
    const { data, isLoading } = useGetBooksQuery(undefined);

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1 className="text-3xl my-5 text-center font-semibold">List of Books ({data.data.length})</h1>
            <div className="my-5 flex items-center justify-center animate-pulse">
                <AddNewBookModal />
            </div>
            <DataTable columns={columns} data={data.data} />
        </div>
    )
}
