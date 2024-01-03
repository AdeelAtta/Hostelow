import Table from "@/components/common/table";
import { useEffect, useState } from "react";

import { hostelsData } from '@/utils/menuData'
import { RiDeleteBinLine } from "react-icons/ri";
import { VscSaveAs } from "react-icons/vsc";
import { MdRoomPreferences } from "react-icons/md";
import { TbTournament } from "react-icons/tb";
import SideModal from "@/components/common/side-modal";



const PropertyManagement = () => {

    const [tableData, setTableData] = useState<TableData | any>(null);
    const [propertyData, setPropertyData] = useState<any>(null);


    const [isModal, setIsModal] = useState<boolean>(false);

    const [currentModal, setCurrentModal] = useState<any>({ route: ``, data: null })



    const renderModalData = () => {
        switch (currentModal.route.toLowerCase()) {
            case `update`: return <div>Update Data</div>
            case `add room`: return <div>Add Rooms</div>
            case `add amentities`: return <div>Amentities Data</div>
            case `delete`: return <div>Delete</div>
        }

    }

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

        data.map((property: any) => {

            const { thumbnail, title, desc, price, location, rating, amenities, date, rooms } = property;

            rows.push([
                // { imgUrl: thumbnail },
                { text: `${title}`, type: `none`, name: `title` },
                { text: `${desc}`, type: `none`, name: `desc` },
                { text: `${price}`, type: `none`, name: `price` },
                { text: `${rating}`, type: `none`, name: `rating` },
                { text: `${location}`, type: `none`, name: `location` },
                { text: `${rooms}`, type: `none`, name: `rooms` },
                { text: `${date.slice(0, 10)}`, type: `none`, name: `date` },
                {
                    text: ``, type: "Manage", features: [
                        {
                            icon: <VscSaveAs className={`hover:scale-110 transition-all`} />
                            , text: `Update`, type: `button`, name: `Update`, button: () => {setCurrentModal((prev:any) => ({...prev, route: `update`, data: property }));setIsModal(true)}
                        },
                        {
                            icon: <MdRoomPreferences className={`hover:scale-110 transition-all`} />
                            , text: `Add Rooms`, type: `button`, name: `Amentities`, button: () => {setCurrentModal((prev:any) => ({...prev, route: `Add Room`, data: property }));setIsModal(true)}
                        },
                        {
                            icon: <TbTournament className={`hover:scale-110 transition-all`} />
                            , text: `Add Amentities`, type: `button`, name: `Amentities`, button: () => {setCurrentModal((prev:any) => ({...prev, route: `Add Amentities`, data: property }));setIsModal(true)}
                        },
                        {
                            icon: <RiDeleteBinLine className={`hover:scale-110 transition-all`} />
                            , text: `Delete`, type: `button`, name: `Delete`, button: () => {setCurrentModal((prev:any) => ({...prev, route: `delete`, data: property }));setIsModal(true)}
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

    return <>
        {tableData && <Table tableData={tableData} />}
        <SideModal
            closeModal={() => setIsModal(false)}
            isModal={isModal}
            title={`${currentModal.route}`}
        >

            {renderModalData()}

        </SideModal>
    </>

}

export default PropertyManagement;