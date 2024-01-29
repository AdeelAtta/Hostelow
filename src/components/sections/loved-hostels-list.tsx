import { getData } from '@/utils/api';
import { useEffect, useState } from 'react';
import { BsHeart } from "react-icons/bs";
// import { BsFillSuitHeartFill } from "react-icons/bs";
import React from 'react'

const LovedHostelsList = () => {


    const [hostels,setHostels] = useState<any[]>([])

    useEffect(()=>{

        const getLovedHostels = async() => {

            try{

                let response:any = await getData(`hostel/fetchHostels`);
                setHostels([...response.hostels])

            }catch(err){
                console.error(err)
            }
        }

        getLovedHostels()
    },[])


    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2
                    className="text-left text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Newely Launched Hostels...
                </h2>
                <div className=' gap-4 overflow-x-auto mt-10 sm:flex'>

                {hostels && hostels.map(hostel => {

                    const {_id,thumbnail,price,location,title} = hostel

                    return <><div key={_id} className="relative block rounded-lg p-4 shadow-sm shadow-indigo-200 border-2">
                    <div className="absolute right-10 top-10  text-white font-bold rounded-md  bg-yellow-400 py-1 px-2" >New Launch</div>
                    {/* <BsFillSuitHeartFill className="absolute right-10 top-10 scale-[2] text-white " /> */}
                    <img
                        alt="Home"
                        src={thumbnail}
                        className="h-56 w-auto rounded-md object-cover"
                    />

                    <div className="mt-2">
                        <dl>
                        <div>
                                <dt className="sr-only">Name</dt>
                                <dd className="font-medium">{title}</dd>
                            </div>
                            <div>
                                <dt className="sr-only">Price</dt>
                                <dd className="text-sm text-gray-500">Rs:{price} / Month</dd>
                            </div>

                            <div>
                                <dt className="sr-only">City</dt>
                                <dd className="font-medium">{location}</dd>
                            </div>
                        </dl>
                    </div>
                </div></>



                })}
                    


                </div>
            </div>
        </section>
    )
}

export default LovedHostelsList


