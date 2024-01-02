import Table from "@/components/common/table";
import { useEffect, useState } from "react";

import {hostelsData} from '@/utils/menuData'

const PropertyManagement = () => {

    const [tableData, setTableData] = useState<TableData | any>(null);
    const [propertyData,setPropertyData] = useState<any>(null);


    const transformData = (data:any[]) => {
        const header = [
            { text:`Thumbnail` },
            { text:`Title` },
            { text:`Description` },
            { text:`Price` },
            { text:`Location` },
            { text:`Rating` },
            { text:`Date Added` },
            { text:`Amenities` },
            { text:`Action` }
        ]

        const rows = []

        data.map((property:any,index) => {

            const {thumbnail,title,desc,price,location,rating,amenities} = property;

            rows.push([{imgUrl:thumbnail},
                        {text:title},
                        {text:desc},
                        {text:price},
                        {text:location},
                        {text:rating},
                        {text:`view`}



            ])




        })
        console.log(data);

        return {
            header: header
        }
    }

    useEffect(()=>{
        const fetchHostelData = async() => {

            try{
                let response = hostelsData;
                setPropertyData(response);
                const tableData = transformData(response);

            }catch(err){
                console.error(err);
            }

        }
        fetchHostelData()
    },[])

    return <>
        {tableData && <Table tableData={tableData} />}
    </>

}

export default PropertyManagement;