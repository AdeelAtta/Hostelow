export interface TableColumn {
    text: string;
}

export interface TableData {
    header: TableColumn[];
    body: {
        type: string;
        text: string;
        name?: string;
        onChange?: (e: any) => void;
        button?: (data: any) => void;
    }[][];
}



export type propertyProps = {
    userId: string
    _id: string,
    slug: string,
    thumbnail: string,
    title: string,
    desc: string,
    location: string,
    price: number,
    discountPrice: number
    amentities: null | any
    rating: number
    reviews: null | any
    rooms: null | any
    date: string
    isPublished: boolean
    reviewCount: number
    gallery?:any[]

}