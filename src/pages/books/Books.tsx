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
            list of books
            <DataTable columns={columns} data={data.data} />
            <div className="mt-10"></div>
            <AddNewBookModal />
        </div>
    )
}
