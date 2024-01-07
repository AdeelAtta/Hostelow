import { RiDeleteBinLine } from "react-icons/ri";
import { VscSaveAs } from "react-icons/vsc";
import { IoImagesOutline } from "react-icons/io5";
import { TbTournament } from "react-icons/tb";
import { useEffect, useState } from "react";

import Table from "@/components/common/table";
import SideModal from "@/components/common/modals/side-modal";
import Button from "@/components/forms/form-elements/button";

import UpdatePropertyData from "@/components/forms/update-property-data";
import { hostelsData } from '@/utils/menuData'
import AddUpdatePropertyImages from "@/components/forms/add-update-property-images";
import AddUpdatePropertyAmenities from "@/components/forms/add-update-property-amenities";
import Modal from "@/components/common/modals/modal";
import AddNewProperty from "@/components/forms/add-new-property";



const PropertyManagement = () => {

    const [tableData, setTableData] = useState<TableData | any>(null);
    const [propertyData, setPropertyData] = useState<any>(null);

    const [isSideModal, setIsSideModal] = useState<boolean>(false);
    const [isModal,setIsModal] = useState<boolean>(false)
    const [currentModalData, setCurrentModalData] = useState<any>({ route: ``, data: null })


    const renderModalData = () => {
        switch(currentModalData.route.toLowerCase()){
            case `add`: return <AddNewProperty />
        }
    }

    const renderSideModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            case `update`: return <UpdatePropertyData property={currentModalData.data} />
            case `update images`: return <AddUpdatePropertyImages property={currentModalData.data} />
            case `add amenities`: return <AddUpdatePropertyAmenities property={currentModalData.data} />
            case `delete`: return <div>Delete</div>
        }
    }

    const transformData = (data: any[]) => {
        const header = [
            // { text: `Thumbnail` },
            { text: `Title` },
            // { text: `Description` },
            { text: `Rating` },
            { text: `Price` },
            { text: `Discounted` },
            { text: `Location` },
            { text: `Rooms` },
            { text: `Date Added` },
            { text: `Action` }
        ]

        const rows: any[] = []

        data.map((property: any) => {

            const { thumbnail, title, desc, price, location, rating, amenities, date, rooms } = property;

            rows.push([
                // { imgUrl: thumbnail },
                { text: `${title}`, type: `none`, name: `title` },
                // { text: `${desc}`, type: `none`, name: `desc` },
                { text: `${rating}`, type: `none`, name: `rating` },
                { text: `${price}`, type: `none`, name: `price` },
                { text: `${price}`, type: `none`, name: `Discounted price` },
                { text: `${location}`, type: `none`, name: `location` },
                { text: `${rooms}`, type: `none`, name: `rooms` },
                { text: `${date.slice(0, 10)}`, type: `none`, name: `date` },
                {
                    text: ``, type: "Manage", features: [
                        {
                            icon: <VscSaveAs className={`hover:scale-110 transition-all`} />
                            , text: `Update Data`, type: `button`, name: `Update`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `update`, data: property })); setIsSideModal(true) }
                        },
                        {
                            icon: <IoImagesOutline className={`hover:scale-110 transition-all`} />
                            , text: `Update Images`, type: `button`, name: `addRooms`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `Update Images`, data: property })); setIsSideModal(true) }
                        },
                        {
                            icon: <TbTournament className={`hover:scale-110 transition-all`} />
                            , text: `Add Amenities`, type: `button`, name: `Amenities`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `Add Amenities`, data: property })); setIsSideModal(true) }
                        },
                        {
                            icon: <RiDeleteBinLine className={`hover:scale-110 transition-all`} />
                            , text: `Delete`, type: `button`, name: `Delete`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `delete`, data: property })); setIsSideModal(true) }
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

        <div className="w-full flex justify-end items-end">
            <Button onClick={() => (setCurrentModalData({route:`add`,data:null}),setIsModal(true))}>Add New Hostel + </Button>
        </div>


        {tableData && <Table tableData={tableData} />}


        <SideModal title={``} closeModal={() => setIsSideModal(false)} isModal={isSideModal}  >
            {renderSideModalData()}
        </SideModal>

        <Modal title={``} closeModal={() => setIsModal(false)} isModal={isModal}>
        {renderModalData()}
        </Modal>
    </>

}

export default PropertyManagement;