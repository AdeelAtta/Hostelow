import { RiDeleteBinLine } from "react-icons/ri";
import { VscSaveAs } from "react-icons/vsc";
import { IoImagesOutline } from "react-icons/io5";
import { TbTournament } from "react-icons/tb";
import { useEffect, useState } from "react";

import Table from "@/components/common/table";
import SideModal from "@/components/common/modals/side-modal";
import Button from "@/components/forms/form-elements/button";

import UpdatePropertyData from "@/components/forms/manage-property-forms/update-property-data";
import AddUpdatePropertyImages from "@/components/forms/manage-property-forms/add-update-property-images";
import AddUpdatePropertyAmenities from "@/components/forms/manage-property-forms/add-update-property-amenities";
import Modal from "@/components/common/modals/modal";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { deleteData, getData, postData } from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import Confirmation from "@/components/common/modals/confirmation";
import { TableData } from "@/types/types";
import AddNewTicket from "../../forms/manage-ticket-forms/add-new-ticket";
import UpdateTicket from "../../forms/manage-ticket-forms/update-ticket-data";
import ViewReviews from "@/components/forms/manage-review-forms/view-reviews";
import Select from "react-select";



const ReviewManagement = () => {

    const user = useSelector(userData)

    const [tableData, setTableData] = useState<TableData | any>(null);
    const [reviewData, setReviewData] = useState<any>(null);
    const [hostelList, setHostelList] = useState<any>([])
    const [hostelId,setHostelId] = useState<string>(``)

    const [isSideModal, setIsSideModal] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false)
    const [currentModalData, setCurrentModalData] = useState<any>({ route: ``, data: null })

    const [isRefresh, setIsRefresh] = useState(false);





    const renderModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            // case `update`: return <ViewReviews review={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsModal(false) }} />
            // case `delete`: return <Confirmation text={`Are you Sure you want to Delete ? `} closeModal={() => {setIsModal(false)}} handleConfirm={() => { handleDeleteProperty(currentModalData.data);  setIsModal(false); }} />
        }
    }

    const renderSideModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            case `update`: return <ViewReviews review={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            // case `update images`: return <AddUpdatePropertyImages property={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            // case `add amenities`: return <AddUpdatePropertyAmenities property={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            // case `delete`: return <div>Delete</div>
        }
    }

    const transformData = (data: any[]) => {
        const header = [
            { text: `Hostel id` },
            { text: `Date Added` },
            // { text: `Ticket Status` },
            // { text: `Ticket Issue` },
            { text: `Action` }
        ]

        const rows: any[] = []

        data.map((reviews: any) => {

            const { hostelId,date} = reviews;

            rows.push([
                // { text: `${hostelName}`, type: `none`, name: `hostelName` },
                { text: `${hostelId}`, type: `none`, name: `hostelId` },
                // { text: `${status}`, type: `none`, name: `status` },
                // { text: `${ticketIssue}`, type: `none`, name: `ticketIssue` },
                { text: `${date.slice(0,10)}`, type: `none`, name: `date` },
                {
                    text: ``, type: "Manage", features: [
                        {
                            icon: `view`
                            , text: `view Data`, type: `button`, name: `Update`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `update`, data: reviews })); setIsSideModal(true) }
                        },
                        // {
                        //     icon: <IoImagesOutline className={`hover:scale-110 transition-all`} />
                        //     , text: `Update Images`, type: `button`, name: `addRooms`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `Update Images`, data: ticket })); setIsSideModal(true) }
                        // },
                        // {
                        //     icon: <RiDeleteBinLine className={`hover:scale-110 transition-all`} />
                        //     , text: `Delete`, type: `button`, name: `Delete`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `delete`, data: ticket })); setIsModal(true); }
                        // },
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
        const fetchReviewsData = async () => {
            try {
                let response = await postData(`hostel/getReviews`, { hostelId: hostelId }, `${user.access.token}`)
                setReviewData(response);

                const data = transformData(response);
                console.log(data)
                setTableData(data)
            } catch (err) {
                console.error(err);
            }

        }
        hostelId && hostelId.length > 0 && fetchReviewsData()
    }, [isRefresh,hostelId])


    useEffect(() => {
        const fetchHostelList = async () => {
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
        fetchHostelList()
    }, [])


    return <>
        <ToastContainer />
        <div className="w-full flex justify-end items-end">
        <div className="ml-auto mb-5">
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