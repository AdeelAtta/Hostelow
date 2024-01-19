import Confirmation from "@/components/common/modals/confirmation";
import Modal from "@/components/common/modals/modal";
import SideModal from "@/components/common/modals/side-modal";
import Table from "@/components/common/table";
import Button from "@/components/forms/form-elements/button";
import AddNewRoom from "@/components/forms/manage-room-forms/add-new-room";
import AddUpdateRoomAmenities from "@/components/forms/manage-room-forms/add-update-room-amentities";
import AddUpdateRoomImages from "@/components/forms/manage-room-forms/add-update-room-images";
import UpdateRoomData from "@/components/forms/manage-room-forms/update-room-data";
import { userData } from "@/redux/slices/user-slice";
import { TableData } from "@/types/types";
import { deleteData, getData } from "@/utils/api";
import { useEffect, useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbTournament } from "react-icons/tb";
import { VscSaveAs } from "react-icons/vsc";
import { useSelector } from "react-redux";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";


const RoomsManagement: React.FC<any> = ({ hostelList }) => {

    const user = useSelector(userData)

    const [hostels, setHostels] = useState([])
    const [hostelId, setHostelId] = useState<any>(``)

    const [roomsData, setRoomsData] = useState([])
    const [tableData, setTableData] = useState<TableData>()


    const [isModal, setIsModal] = useState(false);
    const [isSideModal, setIsSideModal] = useState(false);
    const [currentModalData, setCurrentModalData] = useState<any>({ route: ``, data: null })

    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
        setHostels(hostelList)
    }, [hostelList])

    const handleDeleteProperty = async (roomId: string) => {

        try {
            let data = {
                id: roomId
                // userId: `${user._id}`
            }
            const response = await toast.promise(deleteData(`hostel/deleteRoom`, data,`${user.access.token}`), {
                pending:`Deleting...`,
            })

            if(response.message){
                // setIsRefresh(!isRefresh)
                toast.success(response.message);
            }

        } catch (err) {
            console.error(err)
        }

    }

    const transformData = (data: any[]) => {
        const header = [
            { text: `Room Type` },
            { text: `Availability(Total)` },
            { text: `Occupied` },
            { text: `Price` },

            { text: `Action` }
        ]

        const rows: any[] = []

        data.map((room: any) => {

            const { type, occupancy, price, availability } = room;

            rows.push([
                // { imgUrl: thumbnail },
                { text: `${type}`, type: `none`, name: `type` },
                { text: `${availability}`, type: `none`, name: `availability` },
                { text: `${occupancy}`, type: `none`, name: `occupancy` },
                { text: `${price}`, type: `none`, name: `price` },
                // { text: `${discountPrice}`, type: `none`, name: `discountPrice` },
                // { text: `${location}`, type: `none`, name: `location` },
                // { text: `${rooms}`, type: `none`, name: `rooms` },
                // { text: `${date.slice(0, 10)}`, type: `none`, name: `date` },
                {
                    text: ``, type: "Manage", features: [
                        {
                            icon: <VscSaveAs className={`hover:scale-110 transition-all`} />
                            , text: `Update Data`, type: `button`, name: `Update`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `update`, data: room })); setIsSideModal(true) }
                        },
                        {
                            icon: <IoImagesOutline className={`hover:scale-110 transition-all`} />
                            , text: `Update Images`, type: `button`, name: `addRooms`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `Update Images`, data: room })); setIsSideModal(true) }
                        },
                        {
                            icon: <TbTournament className={`hover:scale-110 transition-all`} />
                            , text: `Add Amenities`, type: `button`, name: `Amenities`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `Add Amenities`, data: room })); setIsSideModal(true) }
                        },
                        {
                            icon: <RiDeleteBinLine className={`hover:scale-110 transition-all`} />
                            , text: `Delete`, type: `button`, name: `Delete`, button: () => { setCurrentModalData((prev: any) => ({ ...prev, route: `delete`, data: room })); setIsModal(true); }
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

    const renderModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            case `add`: return <AddNewRoom hostelList={hostelList} closeModal={() => { setIsRefresh(!isRefresh); setIsModal(false) }} />
            case `delete`: return <Confirmation text={`Are you Sure you want to Delete  ? `} closeModal={()=>setIsModal(false)} handleConfirm={()=>{handleDeleteProperty(`${currentModalData?.data?._id}`); setIsRefresh(!isRefresh);setIsModal(false);}}/>
            default: return <h1>ModalData</h1>
        }
    }

    const renderSideModalData = () => {
        switch (currentModalData.route.toLowerCase()) {
            case `update`: return <UpdateRoomData hostelList={hostelList} room={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            case `update images`: return <AddUpdateRoomImages room={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            case `add amenities`: return <AddUpdateRoomAmenities room={currentModalData.data} closeModal={() => { setIsRefresh(!isRefresh); setIsSideModal(false) }} />
            // case `delete`: return <div>Delete</div>
            default: return <h1>SideModalData</h1>
        }
    }

    useEffect(() => {

        const getRooms = async () => {

            try {
                let response:any = await getData(`hostel/allRooms/${hostelId}`, `${user.access.token}`)
                setRoomsData(response.rooms)
                const data = transformData(response.rooms)
                setTableData(data);

            } catch (err) {
                console.error(err);
            }

        }

        hostelId.length > 0 && getRooms()

    }, [hostelId,isRefresh])



    return <>
    <ToastContainer />
        <div className="w-full">
            <div className="w-full flex justify-center items-center gap-10 ">
                <div className="ml-auto">
                    <label htmlFor="hostel">Select Hostel:</label>
                    <Select
                        name="hostel"
                        id="hostel"
                        options={hostels ?? []}
                        className="basic-multi-select min-w-[300px]"
                        classNamePrefix="select hostel"
                        onChange={(e: any) => setHostelId(e.value)}
                    />
                </div>
                <Button otherProps={{style:{marginLeft:0,marginTop:`30px`}}}  onClick={() => (setCurrentModalData({ route: `add`, data: null }), setIsModal(true))}>Add New Room + </Button>
            </div>
            {(isRefresh || !isRefresh) && tableData && <Table tableData={tableData} />}
        </div>
        <SideModal title={``} closeModal={() => setIsSideModal(false)} isModal={isSideModal}  >
            {renderSideModalData()}
        </SideModal>

        <Modal title={``} closeModal={() => setIsModal(false)} isModal={isModal}>
            {renderModalData()}
        </Modal>
    </>
}

export default RoomsManagement;