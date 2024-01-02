interface TableColumn {
    text: string;
}

interface TableData {
    header: TableColumn[];
    body: {
        type: string;
        text: string;
        name?: string;
        onChange?: (e: any) => void;
        button?: (data: any) => void;
    }[][];
}