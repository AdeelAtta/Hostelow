import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Button from "../form-elements/button";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { getData, postData, updateData } from "@/utils/api";
import { propertyProps } from "@/types/types";




interface AddUpdatePropertyImagesProps {
    property:propertyProps
    closeModal:()=>void
}
let initial = { hostelId:``,img0: ``, img1: ``, img2: ``, img3: ``, img4: ``,others:[] }

const AddUpdatePropertyImages:React.FC<AddUpdatePropertyImagesProps> = ({property,closeModal}) => {

    const user = useSelector(userData)
    const [images, setImages] = useState<any>({...initial})

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault()

        // const formFields = Object.keys(images).filter((key: any) =>  images[key] != undefined && images[key] != null)

        const data = {
            ...images,
            hostelId: property._id
        }

        try{


            let response = await toast.promise(postData(`hostel/addGallery`,data,`${user.access.token}`),{

            })

            if(response.message){

                closeModal()
            }

        }catch(err){
            console.error(err)
        }

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

    const handleReset = (key: string) => {
        setImages((prev: any) => ({ ...prev, [key]: null }))
    }


    useEffect(()=>{


        const getHostelBySlug = async()=>{


            try{
                let response = await getData(`hostel/getHostels?slug=${property.slug}`,`${user.access.token}`);
                if(response.hostels[0].gallery){
                    setImages(response.hostels[0].gallery);
                }

            }catch(err){
                console.error(err)
            }
        }

        getHostelBySlug();

    },[property._id])



    return <form onSubmit={(e: FormEvent) => handleSubmit(e)} action="" className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Update Hostel Images</h1>
        </div>
        <p className="max-w-xl text-lg text-center ">
            Click on any Image to upload new or change.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 ">
            <div className="relative rounded-lg flex border-[1px] border-gray-300 hover:opacity-60 cursor-pointer">
                {images.img0 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img0`)} />}
                <img src={images.img0 ? images.img0 : `/assets/hostel_large.png`} alt=" Hostel Main Image" className='w-full min-h-[200px]' />
                <input
                    className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                    type="file"
                    name="img0"
                    onChange={handleFileChange}
                />
            </div>
            <div className="grid grid-cols-4 gap-4 md:grid-cols-2">
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images.img1 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img1`)} />}
                    <img src={images.img1 ? images.img1 : `/assets/hostel_large.png`} alt=" upload Image 2" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center opacity-0 "
                        type="file"
                        name="img1"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images.img2 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img2`)} />}
                    <img src={images.img2 ? images.img2 : `/assets/hostel_large.png`} alt="upload Image 3" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                        type="file"
                        name="img2"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images.img3 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img3`)} />}
                    <img src={images.img3 ? images.img3 : `/assets/hostel_large.png`} alt=" Hostel Image 4" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                        type="file"
                        name="img3"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images.img4 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img4`)} />}
                    <img src={images.img4 ? images.img4 : `/assets/hostel_large.png`} alt=" Upload Image 5" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                        type="file"
                        name="img4"
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