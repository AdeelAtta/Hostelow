import { AmenitiesInfo } from "@/utils/data"
import { useEffect, useState } from "react"

const ViewReviews:React.FC<any> = ({review}) =>{


    const [reviews,setReviews] = useState<any>([])
    
    useEffect(()=>{
        if(review){
            
            const entries = Object.entries(review);
            console.log(entries)
            setReviews(entries)
        }

    },[])

    return <>  <div className='relative grid grid-cols-3 gap-5 '>
    {
              reviews && reviews.length > 0 && reviews.map((review: any, index: number) => {
                const amentity = AmenitiesInfo[review[0]]
                if(amentity && review[1] != 0){

                return <>
                  <div className='flex flex-col gap-4 mt-4'>
                    <label htmlFor="file" className='text-[#7D7D7D] text-sm font-md flex items-center gap-2 min-w-fit whitespace-nowrap'>{amentity.icon}{amentity.text}</label>
                    <progress id="file" value={`${review[1]}`} max="10"
                      className={`w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg  [&::-webkit-progress-bar]:bg-slate-300 ${review[1] < 3.3 ? `[&::-webkit-progress-value]:bg-red-500` : review[1] < 6.6 ? `[&::-webkit-progress-value]:bg-yellow-500` : `[&::-webkit-progress-value]:bg-green-500`}  [&::-moz-progress-bar]:bg-violet-400 `}> {review[1] * 10}% </progress>
                  </div>
                </>

                }else {
                    // return   <><div className='flex flex-col gap-4 mt-4'>not found</div></>
                }

              })
            }
            </div>
    </>

}

export default ViewReviews