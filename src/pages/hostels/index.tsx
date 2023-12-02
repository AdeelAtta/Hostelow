import React from 'react'
import Image from 'next/image';

import LoginForm from '@/components/LoginForm'
import SigninSignupForm from '@/components/sections/signin-signup-form';
import Aside from '@/components/common/aside';
import Content from '@/components/common/content';
import HostelCard from '@/components/elements/hostel-card';

const Hostels = () => {
  return (<>
    <main className='flex border-t-2 border-gray-100 mt-2'>
      <Aside>

        <details
          className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
        >    <summary
          className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
        >
            <span className="text-sm font-medium"> Popular Filters </span>

            <span className="transition ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>
          <ul className="space-y-1 border-t border-gray-200 p-4">
            <li>
              <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  id="FilterInStock"
                  className="h-5 w-5 rounded border-gray-300"
                />

                <span className="text-sm font-medium text-gray-700">
                  Budget Rooms
                </span>
              </label>
            </li>

            <li>
              <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  id="FilterPreOrder"
                  className="h-5 w-5 rounded border-gray-300"
                />

                <span className="text-sm font-medium text-gray-700">
                  Food Included
                </span>
              </label>
            </li>

            <li>
              <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  id="FilterOutOfStock"
                  className="h-5 w-5 rounded border-gray-300"
                />

                <span className="text-sm font-medium text-gray-700">
                  Free Laundry
                </span>
              </label>
            </li>
          </ul>
        </details>

      </Aside>
      <Content>
        <div className="w-full h-full ">
          <div className='top-bar'></div>
          <div className=' hostel-cards flex flex-wrap gap-6'>

            <HostelCard />
            <HostelCard />
            <HostelCard />
            <HostelCard />
            <HostelCard />




          </div>
          <ol className="flex justify-center gap-1 text-xs font-medium">
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

      </Content>
    </main>
  </>
  )
}

export default Hostels