import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Button from "./form-elements/button";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { userData } from "@/redux/slices/user-slice";
import { useSelector } from "react-redux";
import { getData, postData, updateData } from "@/utils/api";


type propertyProps = {
    userId:string
    _id:string,
    thumbnail: string
    title:string,
    desc:string,
    location:string,
    price:number,
    discountPrice:number
    amentities:null | any
    rating:number
    reviews:null | any
    rooms:null | any
    date:string
    isPublished:boolean

}

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


        const getHostelById = async()=>{


            try{
                let response = await getData(`hostel/getHostelById?id=${property._id}`,`${user.access.token}`);
                if(response.gallery){
                    setImages(response.gallery);
                }

            }catch(err){
                console.log(err)
            }
        }

        getHostelById();

    },[property._id])



    return <form onSubmit={(e: FormEvent) => handleSubmit(e)} action="" className="space-y-4 mx-auto max-w-lg">
        <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-black dark:text-gray-300">Update Hostel Images {property._id}</h1>
        </div>
        <p className="max-w-xl text-lg text-center ">
            Click on any Image to upload new or change.
        </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 lg:gap-8 ">
            <div className="relative rounded-lg flex border-[1px] border-gray-300 hover:opacity-60 cursor-pointer">
                {images.img0 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img0`)} />}
                <img src={images.img0} alt=" Hostel Main Image" className='w-full min-h-[200px]' />
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
                    <img src={images.img1} alt=" upload Image 2" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center opacity-0 "
                        type="file"
                        name="img1"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images.img2 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img2`)} />}
                    <img src={images.img2} alt="upload Image 3" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                        type="file"
                        name="img2"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images.img3 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img3`)} />}
                    <img src={images.img3} alt=" Hostel Image 4" className='w-full ' />
                    <input
                        className="z-[10] w-full absolute rounded-lg h-full text-center flex items-center pt-10 opacity-0 "
                        type="file"
                        name="img3"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="relative rounded-lg flex border-[1px] border-gray-300 max-h-[150px] hover:opacity-60 cursor-pointer">
                    {images.img4 && <IoClose className="z-[11] absolute right-0 text-red-600 text-3xl transition-all text-semibold" onClick={() => handleReset(`img4`)} />}
                    <img src={images.img4} alt=" Upload Image 5" className='w-full ' />
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