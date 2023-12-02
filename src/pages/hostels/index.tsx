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
          <section>
            <div className="mx-auto max-w-screen-xl px-4  sm:px-6 sm:py-12 lg:px-8">

              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Search Hostels</h2>
              </header>
              <div className=" flex items-center justify-between">
                <div className="flex rounded border border-gray-100">
                  <button
                    className="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
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

                  <button
                    className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
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