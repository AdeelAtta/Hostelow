import { RiDeleteBinLine } from "react-icons/ri";
import { VscSaveAs } from "react-icons/vsc";
import { IoImagesOutline } from "react-icons/io5";
import { TbTournament } from "react-icons/tb";
import { useEffect, useState } from "react";
import Select from "react-select";


import Table from "@/components/common/table";
import SideModal from "@/components/common/modals/side-modal";
import Button from "@/components/forms/form-elements/button";

import UpdatePropertyData from "@/components/forms/update-property-data";
import AddUpdatePropertyImages from "@/components/forms/add-update-property-images";
import AddUpdatePropertyAmenities from "@/components/forms/add-update-property-amenities";
import Modal from "@/components/common/modals/modal";
import AddNewProperty from "@/components/forms/add-new-property";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { deleteData, getData, postData } from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import Confirmation from "@/components/common/modals/confirmation";
import { TableData } from "@/types/types";



const ReviewManagement = () => {

    const user = useSelector(userData)

    const [tableData, setTableData] = useState<TableData | any>(null);
    const [propertyData, setPropertyData] = useState<any>(null);
    const [hostelList,setHostelList] = useState<any>([])
    const [hostelId, setHostelId] = useState<any>(``)


    const [isSideModal, setIsSideModal] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false)
    const [currentModalData, setCurrentModalData] = useState<any>({ route: ``, data: null })

    const [isRefresh, setIsRefresh] = useState(false);




    const handleDeleteProperty = async (propertyId: string) => {

        try {
            let data = {
                hostelId: propertyId,
                userId: `${user._id}`
            }
            const response = await toast.promise(deleteData(`hostel/deleteHostel`, data, `${user.access.token}`), {
                pending:`Deleting...`,
            })

            if(response.message){
                toast.success(response.message);
                setIsRefresh(!isRefresh)
            }

        } catch (err) {
            console.error(err)
        }

    }




    const renderModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            case `add`: return <AddNewProperty closeModal={() => { setIsRefresh(!isRefresh); setIsModal(false) }} />
            case `delete`: return <Confirmation text={`Are you Sure you want to Delete "${currentModalData.data.title}" ? `} closeModal={()=>setIsModal(false)} handleConfirm={()=>{handleDeleteProperty(currentModalData.data._id); setIsRefresh(!isRefresh);setIsModal(false);}}/>
        }
    }

    const renderSideModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            case `update`: return <UpdatePropertyData property={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            case `update images`: return <AddUpdatePropertyImages property={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            case `add amenities`: return <AddUpdatePropertyAmenities property={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
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

        data.map((review: any) => {

            const { _id, thumbnail, title, desc, price, location, rating, amenities, date, rooms, discountPrice } = review;

            rows.push([
                // { imgUrl: thumbnail },
                { text: `${title}`, type: `none`, name: `title` },
                // { text: `${desc}`, type: `none`, name: `desc` },
                { text: `${rating}`, type: `none`, name: `rating` },
                { text: `${price}`, type: `none`, name: `price` },
                { text: `${discountPrice}`, type: `none`, name: `discountPrice` },
                { text: `${location}`, type: `none`, name: `location` },
                { text: `${rooms}`, type: `none`, name: `rooms` },
                { text: `${date.slice(0, 10)}`, type: `none`, name: `date` },
                {
                    text: ``, type: "Manage", features: [
                        {
                            icon: <VscSaveAs className={`hover:scale-110 transition-all`} />
                            , text: `Update Data`, type: `button`, name: `Update`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `update`, data: review })); setIsSideModal(true) }
                        },
                        {
                            icon: <IoImagesOutline className={`hover:scale-110 transition-all`} />
                            , text: `Update Images`, type: `button`, name: `addRooms`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `Update Images`, data: review })); setIsSideModal(true) }
                        },
                        {
                            icon: <TbTournament className={`hover:scale-110 transition-all`} />
                            , text: `Add Amenities`, type: `button`, name: `Amenities`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `Add Amenities`, data: review })); setIsSideModal(true) }
                        },
                        {
                            icon: <RiDeleteBinLine className={`hover:scale-110 transition-all`} />
                            , text: `Delete`, type: `button`, name: `Delete`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `delete`, data: review })); setIsModal(true); }
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
                let response = await getData(`hostel/gethostels?userId=${user._id}`, `${user.access.token}`)
                setHostelList(response.hostels.map((hostel:any) => {
                    return {value:`${hostel._id}`,label:`${hostel.title}`}
                }
                    ))
            } catch (err) {
                console.error(err);
            }

        }
        fetchHostelData()
    }, [isRefresh])


    useEffect(() => {
        const fetchReviewData = async () => {
            try {
                let response = await postData(`hostel/getReviews`,{hostelId:hostelId}, `${user.access.token}`)
                // setHostelList(response.hostels.map((hostel:any) => {
                //     return {value:`${hostel._id}`,label:`${hostel.title}`}
                // }
                //     ))
                const data = transformData(response.review);
                setTableData(data)
            } catch (err) {
                console.error(err);
            }

        }
        hostelId.length > 0 && fetchReviewData()
    }, [isRefresh,hostelId])

    return <>
        <ToastContainer />
        <div className="w-full flex justify-end items-end">
        <div className="ml-auto">
                    <label htmlFor="hostel">Select Hostel:</label>
                    <Select
                        name="hostel"
                        id="hostel"
                        options={hostelList ?? []}
                        className="basic-multi-select min-w-[300px]"
                        classNamePrefix="select hostel"
                        onChange={(e: any) => setHostelId(e.value)}
                    />
                </div>
            {/* <Button onClick={() => (setCurrentModalData({ route: `add`, data: null }), setIsModal(true))}>Add New Hostel + </Button> */}
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

export default ReviewManagement;