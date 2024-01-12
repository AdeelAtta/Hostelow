import React from 'react'
import Logo from '@/assets/common/HostelBazaar.svg'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white relative z-[10]">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <span className="block text-stone-600 " >
              <span className="sr-only">Home</span>
              <Link href={`/`}>
                <Image
                  className='w-min h-auto'
                  src={Logo}
                  height={56}
                  width={56}
                  alt="Hostel Bazaar logo" />
              </Link>
            </span>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link href={`/about`}>
                    <span
                      className="text-stone-700 transition hover:text-gray-500/75"

                    >
                      About
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href={`/hostels`}>
                    <span
                      className="text-stone-700 transition hover:text-gray-500/75"
                    >
                      Hostels
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href={'/popular'}>
                    <span
                      className="text-stone-700 transition hover:text-gray-500/75"
                    >
                      Popular
                    </span>
                  </Link>
                </li>

                {/* <li>
              <span
                className="text-gray-500 transition hover:text-gray-500/75"
               
              >
                Attraction
              </span>
            </li>

            <li>
              <span
                className="text-gray-500 transition hover:text-gray-500/75"
             
              >
                Projects
              </span>
            </li>

            <li>
              <span
                className="text-gray-500 transition hover:text-gray-500/75"
             
              >
                Blog
              </span>
            </li> */}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">

              <div className="hidden sm:flex ">
                <Link href={`/register`}>
                  <span
                    className="rounded-3xl bg-gray-100 px-8 py-2.5 text-sm font-medium text-stone-800">
                    Register
                  </span>
                </Link>
              </div>
              <div className="hidden sm:flex ">
                <Link href={`/login`}>
                  <span
                    className="rounded-3xl bg-stone-800 px-10 py-2.5 text-sm font-medium text-white shadow" >
                    Login
                  </span>
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header