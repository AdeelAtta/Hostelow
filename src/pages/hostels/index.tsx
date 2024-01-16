import React, { ChangeEvent, useEffect, useState } from 'react'
import Aside from '@/components/common/aside';
import HostelCard from '@/components/elements/hostel-card';
import { getData } from '@/utils/api';
import { citiesData } from '@/utils/data';
import Select from "react-select";
import Input from '@/components/forms/form-elements/input';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


type propertyProps = {
  userId: string
  _id: string,
  thumbnail: string
  slug:string
  title: string,
  desc: string,
  location: string,
  price: number,
  discountPrice: number
  amentities: null | any
  rating: number
  reviews: null | any
  rooms: null | any
  date: string
  isPublished: boolean

}


const Hostels = () => {

  const [listStyle, setListStyle] = useState(true);
  const [properties, setProperties] = useState<propertyProps[] | null>(null);

  const [citiesList, setCitiesList] = useState<any[]>([])
  const [filterForm, setFilterForm] = useState<any>({})
  const [starFill, setStarFill] = useState(<FaStar className="text-2xl fill-yellow-500 " />)
  const [star, setStar] = useState(<CiStar className="text-2xl text-yellow-500 " />)

  const handleChange = (e: ChangeEvent<any>) => {

    setFilterForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))

  }


  useEffect(() => {

    const getProperties = async () => {

      try {
        let url = `hostel/gethostels?`
        if (filterForm.location) {
          url += `&location=${filterForm.location}`;
        }
        if (filterForm.min) {
          url += `&min=${filterForm.min}`;
        }
        if (filterForm.max) {
          url += `&max=${filterForm.max}`;
        }


        const response = await getData(url);
        setProperties(response.hostels);

      } catch (err) {
        console.error(err)
      }

    }

    getProperties()
  },[])






  useEffect(() => {

    const list = citiesData.map((city: any) => ({ value: `${city.name}`, label: `${city.name}` }))
    setCitiesList(list);

  }, [])







  return (<>
    <main className='flex border-t-2 border-gray-100 mt-2 max-w-screen-2xl'>
      <Aside>
        <div className='overflow-y-auto'>
          <h4 className='text-2xl font-bold mb-5'>Filters</h4>
          <div className='mb-5'>
            <h4 className='text-md font-semibold pb-2 border-b-2 border-gray-100'>Location</h4>
            <Select
              name="location"
              id="location"
              options={citiesList ?? []}
              className="basic-multi-select w-full mt-3 "
              classNamePrefix="select city"
              onChange={(e: any) => setFilterForm((prev: any) => ({ ...prev, location: `${e.value}` }))}
            />
          </div>
          <h4 className='text-md font-semibold pb-2 border-b-2 border-gray-100'>Promotion & Services</h4>
          <div className='my-5 flex flex-col items-start justify-start gap-2'>
            <span className='text-sm rounded-md border-[2px] border-gray-300 p-2 text-gray-600 font-md cursor-pointer hover:bg-gray-100 transition-all'>Discounted</span>
            <span className='text-sm rounded-md border-[2px] border-gray-300 p-2 text-gray-600 font-md cursor-pointer hover:bg-gray-100 transition-all'>Free Stay</span>
            {/* <span className='text-sm rounded-md border-[2px] border-gray-300 p-2 text-gray-600 font-md cursor-pointer hover:bg-gray-100 transition-all'>Deals</span> */}
          </div>
          <h4 className='text-md font-semibold mb-3 border-b-2 border-gray-100'>Price</h4>
          <div className='flex gap-2 max-w-[320px] mb-5'>
            <Input
              title='Min'
              type={`number`}
              name={'min'}
              placeholder='Minimum price'
              value={filterForm.min}
              onChange={handleChange}
              otherProps={{ min: 0, style: { maxWidth: `150px` } }}

            />
            <Input
              title='Max'
              type={`number`}
              name={'max'}
              placeholder='Maximum price'
              value={filterForm.max}
              onChange={handleChange}
              otherProps={{ min: `${filterForm.min ?? 0}`, style: { maxWidth: `150px` } }}
            />
          </div>
          <h4 className='text-md font-semibold border-b-2 mb-3 border-gray-100'>Rating</h4>
          <div className='mb-5'>
            <ul className='flex flex-col gap-3'>
              <li className='flex gap-2 cursor-pointer' onClick={(e: any) => setFilterForm((prev: any) => ({ ...prev, rating: 5 }))}>
                {starFill}{starFill}{starFill}{starFill}{starFill}
              </li>
              <li className='flex gap-2 cursor-pointer' onClick={(e: any) => setFilterForm((prev: any) => ({ ...prev, rating: 4 }))}>
                {starFill}{starFill}{starFill}{starFill}{star} <span className='text-md font-thin text-gray-300'>and Up</span>
              </li>
              <li className='flex gap-2 cursor-pointer' onClick={(e: any) => setFilterForm((prev: any) => ({ ...prev, rating: 3 }))}>
                {starFill}{starFill}{starFill}{star}{star} <span className='text-md font-thin text-gray-300'>and Up</span>
              </li>
              <li className='flex gap-2 cursor-pointer' onClick={(e: any) => setFilterForm((prev: any) => ({ ...prev, rating: 2 }))}>
                {starFill}{starFill}{star}{star}{star} <span className='text-md font-thin text-gray-300'>and Up</span>
              </li>
              <li className='flex gap-2 cursor-pointer' onClick={(e: any) => setFilterForm((prev: any) => ({ ...prev, rating: 1 }))}>
                {starFill}{star}{star}{star}{star} <span className='text-md font-thin text-gray-300'>and Up</span>
              </li>
            </ul>
          </div>
        </div>
      </Aside>

      <div className='w-full border-2'>
        <section>
          <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-12 lg:px-8">

            <header>
              <p className="mt-4 max-w-md text-gray-500">
                133 searches for </p>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">1 Room Hostels in Jamshoro, Sindh</h2>
            </header>
            <div className=" flex items-center justify-end ">
              <div className="flex order-2 ml-5 rounded border-2 border-gray-100">
                <button onClick={() => setListStyle(false)}
                  className={`inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-200 ${!listStyle && ` bg-gray-300`}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </button>

                <button onClick={() => setListStyle(true)}
                  className={`inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-200 ${listStyle && ` bg-gray-300`}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </button>
              </div>

              <div>
                <label htmlFor="SortBy" className="sr-only">SortBy</label>
                <select id="SortBy" className="border-2 h-10 rounded border-gray-300 text-sm">
                  <option>Sort By</option>
                  <option value="Title, DESC">Title, DESC</option>
                  <option value="Title, ASC">Title, ASC</option>
                  <option value="Price, DESC">Price, DESC</option>
                  <option value="Price, ASC">Price, ASC</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <div className=' hostel-cards flex flex-wrap gap-5'>
          {
            properties && properties.map((property: propertyProps) => {
              return <><HostelCard listStyle={listStyle} property={property} /></>
            })


            // <HostelCard listStyle={listStyle} property={} />
            // <HostelCard listStyle={listStyle} property={} />
            // <HostelCard listStyle={listStyle} property={} />
            // <HostelCard listStyle={listStyle} property={} />

          }


          {/* <HostelCard listStyle={listStyle} property={{}} /> */}

        </div>

        <ol className="my-12 flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>

          <li className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
            2
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </main>
  </>
  )
}

export default Hostels