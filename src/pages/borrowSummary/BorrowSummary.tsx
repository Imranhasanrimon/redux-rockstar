import { LoaderCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useBorrowSummaryQuery } from "@/redux/api/features/borrowApi"

export default function BookSummary() {
    const { data, isLoading, isError, refetch } = useBorrowSummaryQuery(undefined)

    if (isLoading) {
        return (
            <div className="h-[90vh] flex justify-center items-center">
                <LoaderCircle size={70} className="animate-spin text-primary" />
            </div>
        )
    }

    if (isError || !data?.data) {
        return (
            <div className="flex flex-col items-center justify-center h-[90vh]">
                <h2 className="text-2xl font-bold text-red-600">Failed to load summary</h2>
                <Button onClick={() => refetch()} className="mt-4">
                    Retry
                </Button>
            </div>
        )
    }
    if (!data?.data || data.data.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[90vh]">
                <h2 className="text-2xl font-bold text-slate-600">No Orders Found</h2>
                <Button variant="outline" onClick={() => refetch()} className="mt-4">
                    Refresh
                </Button>
            </div>
        )
    }
    return (
        <div className="max-w-3xl mx-auto w-11/12 py-8">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl md:text-2xl text-center font-semibold">Borrowed Books Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-1/12">#</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>ISBN</TableHead>
                                <TableHead className="text-right">Total Quantity</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.data.map((item: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell className="font-medium">{item.book.title}</TableCell>
                                    <TableCell>{item.book.isbn}</TableCell>
                                    <TableCell className="text-right">{item.totalQuantity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
