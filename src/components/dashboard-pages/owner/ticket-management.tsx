import { RiDeleteBinLine } from "react-icons/ri";
import { VscSaveAs } from "react-icons/vsc";
import { IoImagesOutline } from "react-icons/io5";
import { TbTournament } from "react-icons/tb";
import { useEffect, useState } from "react";

import Table from "@/components/common/table";
import SideModal from "@/components/common/modals/side-modal";
import Button from "@/components/forms/form-elements/button";

import Modal from "@/components/common/modals/modal";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { deleteData, getData, postData } from "@/utils/api";
import { ToastContainer, toast } from "react-toastify";
import Confirmation from "@/components/common/modals/confirmation";
import { TableData } from "@/types/types";
import AddNewTicket from "@/components/forms/manage-ticket-forms/add-new-ticket";
import UpdateTicket from "@/components/forms/manage-ticket-forms/update-ticket-data";
import Select from "react-select";


const TicketsManagement:React.FC<any> = () => {

    const user = useSelector(userData)

    const [tableData, setTableData] = useState<TableData | any>(null);
    const [propertyData, setTicketData] = useState<any>(null);
    const [hostelList, setHostelList] = useState<any>([])
    const [hostelId,setHostelId] = useState<string>(``)

    const [isSideModal, setIsSideModal] = useState<boolean>(false);
    const [isModal, setIsModal] = useState<boolean>(false)
    const [currentModalData, setCurrentModalData] = useState<any>({ route: ``, data: null })

    const [isRefresh, setIsRefresh] = useState(false);




    const handleDeleteProperty = async (item: any) => {

        try {
            let data = {
                ticketId: item._id,
            }
            const response = await toast.promise(deleteData(`hostel/ticket`, data, `${user.access.token}`), {
                pending: `Deleting...`,
            })

            if (response.message) {
                toast.success(response.message);
                setIsRefresh(!isRefresh)
            }

        } catch (err) {
            console.error(err)
        }

    }




    const renderModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            case `add`: return <AddNewTicket closeModal={() => { setIsRefresh(!isRefresh); setIsModal(false) }} />
            case `delete`: return <Confirmation text={`Are you Sure you want to Delete ? `} closeModal={() => setIsModal(false)} handleConfirm={() => { handleDeleteProperty(currentModalData.data);  setIsModal(false); }} />
        }
    }

    const renderSideModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            case `update`: return <UpdateTicket ticket={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            // case `update images`: return <AddUpdatePropertyImages property={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            // case `add amenities`: return <AddUpdatePropertyAmenities property={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            case `delete`: return <div>Delete</div>
        }
    }

    const transformData = (data: any[]) => {
        const header = [
            { text: `Hostel Id` },
            { text: `Ticket Status` },
            { text: `Ticket Issue` },
            { text: `Date Added` },
            { text: `Action` }
        ]

        const rows: any[] = []

        data.map((ticket: any) => {

            const { _id, hostelId, ticketIssue, status } = ticket;

            rows.push([
                { text: `${hostelId}`, type: `none`, name: `hostelId` },
                { text: `${status}`, type: `none`, name: `status` },
                { text: `${ticketIssue}`, type: `none`, name: `ticketIssue` },
                { text: `1/25/2024`, type: `none`, name: `date` },
                {
                    text: ``, type: "Manage", features: [
                        {
                            icon: <VscSaveAs className={`hover:scale-110 transition-all`} />
                            , text: `Update Data`, type: `button`, name: `Update`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `update`, data: ticket })); setIsSideModal(true) }
                        },
                        // {
                        //     icon: <IoImagesOutline className={`hover:scale-110 transition-all`} />
                        //     , text: `Update Images`, type: `button`, name: `addRooms`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `Update Images`, data: ticket })); setIsSideModal(true) }
                        // },
                        {
                            icon: <RiDeleteBinLine className={`hover:scale-110 transition-all`} />
                            , text: `Delete`, type: `button`, name: `Delete`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `delete`, data: ticket })); setIsModal(true); }
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
        const fetchTicketsData = async () => {
            try {
                let response = await postData(`hostel/fetchTicket`, { 
                    hostelId: hostelId
                }, `${user.access.token}`)
                setTicketData(response.data);

                const data = transformData(response.data);
                setTableData(data)
            } catch (err) {
                console.error(err);
            }

        }
        hostelId && hostelId.length > 0 && fetchTicketsData()
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
        <div className="ml-auto">
                    <label htmlFor="hostel">Select Hostel:</label>
                    <Select
                        name="hostel"
                        id="hostel"
                        placeholder="Select Hostel"
                        options={hostelList ?? []}
                        className="basic-multi-select min-w-[300px]"
                        classNamePrefix="select hostel"
                        onChange={(e: any) => setHostelId(e.value)}
                    />
                </div>
            {/* <Button onClick={() => (setCurrentModalData({ route: `add`, data: null }), setIsModal(true))}>Add Ticket </Button> */}
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

export default TicketsManagement;