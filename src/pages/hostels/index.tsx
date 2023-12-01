import React from 'react'
import Image from 'next/image';

import LoginForm from '@/components/LoginForm'
import SigninSignupForm from '@/components/sections/signin-signup-form';
import Aside from '@/components/common/aside';
import Content from '@/components/common/content';

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

        <h1>Content</h1>
        
      </Content>
    </main>
  </>
  )
}

export default Hostels