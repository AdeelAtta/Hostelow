import Table from "@/components/common/table";
import { useEffect, useState } from "react";

import { hostelsData } from '@/utils/menuData'
import { RiDeleteBinLine } from "react-icons/ri";
import { VscSaveAs } from "react-icons/vsc";
import { MdRoomPreferences } from "react-icons/md";
import { TbTournament } from "react-icons/tb";



const PropertyManagement = () => {

    const [tableData, setTableData] = useState<TableData | any>(null);
    const [propertyData, setPropertyData] = useState<any>(null);


    const transformData = (data: any[]) => {
        const header = [
            // { text: `Thumbnail` },
            { text: `Title` },
            { text: `Description` },
            { text: `Price` },
            { text: `Rating` },
            { text: `Location` },
            { text: `No of Rooms` },
            { text: `Date Added` },
            { text: `Action` }
        ]

        const rows: any[] = []

        data.map((property: any, index) => {

            const { thumbnail, title, desc, price, location, rating, amenities,date,rooms } = property;

            rows.push([
                // { imgUrl: thumbnail },
                { text: `${title}`, type: `none`, name: `title` },
                { text: `${desc}`, type: `none`, name: `desc` },
                { text: `${price}`, type: `none`, name: `price` },
                { text: `${rating}`, type: `none`, name: `rating` },
                { text: `${location}`, type: `none`, name: `location` },
                { text: `${rooms}`, type: `none`, name: `rooms` },
                { text: `${date.slice(0,10)}`, type: `none`, name: `date` },
                {
                    text: ``, type: "Manage", features: [
                        {
                            icon: <VscSaveAs className={`hover:scale-110 transition-all`} />
                            , text: `Update`, type: `button`, name: `Update`, button: () => { }
                        },
                        {
                            icon: <MdRoomPreferences className={`hover:scale-110 transition-all`} />
                            , text: `Add Rooms`, type: `button`, name: `Amentities`, button: () => { }
                        },
                        {
                            icon: <TbTournament className={`hover:scale-110 transition-all`} />
                            , text: `Add Amentities`, type: `button`, name: `Amentities`, button: () => { }
                        },
                        {
                            icon: <RiDeleteBinLine className={`hover:scale-110 transition-all`} />
                            , text: `Delete`, type: `button`, name: `Delete`, button: () => { }
                        },
                    ]
                },
            ])




        })


        return {
            header: header,
            body: rows
        }
    }

    useEffect(() => {
        const fetchHostelData = async () => {

            try {
                let response = hostelsData;
                setPropertyData(response);
                const data = transformData(response);
                setTableData(data)
            } catch (err) {
                console.error(err);
            }

        }
        fetchHostelData()
    }, [])

    return <div className=" divide-gray-200 bg-white text-sm dark:divide-gray-700 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 my-8 h-auto">
        {tableData && <Table tableData={tableData} />}
    </div>

}

export default PropertyManagement;