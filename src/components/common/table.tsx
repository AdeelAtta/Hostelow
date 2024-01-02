import Header from "./header";
import TableRow from "./table/table-row";



interface TableProps {
    tableData: TableData
}

const Table: React.FC<TableProps> = ({ tableData }) => {


    // Create Rows
    const createRows = () => {
        const noOfColumns = tableData.header.length;

        const rows =
            tableData.body.length > 0 && tableData.body.map((row, index) => {
                return (
                    <TableRow key={index} indexKey={index} row={row} noOfColumns={noOfColumns} disable={true} />
                )
            })

        return rows;

    }

    const createHeader = () => {

        const head = tableData.header.length > 0 && tableData.header.map((column: TableColumn, index) => <th key={column.text} className="whitespace-nowrap px-4 py-2 font-bold text-white">{column.text}</th>)
    
        return <tr>{head}</tr>
    }

    return <>
            <div className=" rounded-t-lg overflow-x-scroll h-[500px]"> 
                <table className="min-w-full divide-y-2 ">
                    <thead className="ltr:text-left rtl:text-right bg-gradient-to-r from-yellow-700 to-yellow-600 text-white">
                       {createHeader()}
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600 text-center min-h-[400px]">
                        {createRows()}
                    </tbody>
                </table>
            </div>
    </>

}

export default Table



