import { ChangeEvent, FormEvent, useState } from "react"
import Button from "./form-elements/button";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";


type properyProps = {
    title:string,
    desc:string,
    location:string,
    price:string,
    discountPrice:string
}

interface AddUpdatePropertyImagesProps {
    property:properyProps
}

const AddUpdatePropertyImages:React.FC<AddUpdatePropertyImagesProps> = ({property}) => {

    const user = useSelector(userData)
    const [images, setImages] = useState<any>({ image1: ``, image2: ``, image3: ``, image4: ``, image5: `` })


    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault()

        const formFields = Object.keys(images).filter((key: any) => images[key] !== `` && images[key] != undefined && images[key] != null)

        const data = formFields.map((key:any)=>images[key]);
        alert(`images set`)
        // try{

        //     let response = await toast.promise(updateData(``,data,`${user.access.token}`),{

        //     })

        // }catch(err){
        //     console.error(err)
        // }

    }

    const handleFileChange = (e: ChangeEvent<any>) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        if (file) {
            reader.onloadend = function () {
                setImages((prev: any) => ({ ...prev, [e.target.name]: reader.result }))
            }
            reader?.readAsDataURL(file);
        }
    }

    const handeReset = (key: string) => {
        setImages((prev: any) => ({ ...prev, [key]: null }))
    }




    return <form onSubmit={(e: FormEvent) => handleSubmit(e)} action="" className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Update Hostel Images</h1>
        </div>
        <p className="max-w-xl text-lg text-center ">
            Click on any Image to upload new or change.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 ">
            <div className="relative rounded-lg flex border-[1px] border-gray-300 hover:opacity-60 cursor-pointer">
                {images[`image1`] && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handeReset(`image1`)} />}
                <img src={images[`image1`]} alt=" Hostel Main Image" className='w-full min-h-[200px]' />
                <input
                    className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                    type="file"
                    name="image1"
                    onChange={handleFileChange}
                />
            </div>
            <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images[`image2`] && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handeReset(`image2`)} />}
                    <img src={images[`image2`]} alt=" upload Image 2" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center opacity-0 "
                        type="file"
                        name="image2"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images[`image3`] && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handeReset(`image3`)} />}
                    <img src={images[`image3`]} alt="upload Image 3" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                        type="file"
                        name="image3"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images[`image4`] && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handeReset(`image4`)} />}
                    <img src={images[`image4`]} alt=" Hostel Image 4" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                        type="file"
                        name="image4"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images[`image5`] && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handeReset(`image5`)} />}
                    <img src={images[`image5`]} alt=" Upload Image 5" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                        type="file"
                        name="image5"
                        onChange={handleFileChange}
                    />
                </div>
            </div>
        </div>
        <Button
            otherProps={{ style: { width: `100%`, marginTop: `20px` } }}
            type="submit"
        >Save</Button>
    </form>
}
export default AddUpdatePropertyImages