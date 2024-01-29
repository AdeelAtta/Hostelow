import React, { useEffect, useState } from 'react'
import Logo from '@/assets/common/HostelBazaar.png'
import Image from 'next/image'
import Link from 'next/link'
import { cleanUserData, userData } from '@/redux/slices/user-slice'
import { useDispatch, useSelector } from 'react-redux'
import LogoutButton from './logout-button'
import { FaTimes } from 'react-icons/fa'

const Header = () => {

  const user = useSelector(userData);
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState<any>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    setUserInfo(user)
  }, [user])



  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (<>
    <header className="bg-white relative z-[10] mt-2">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <span className="block text-stone-600 " >
              <span className="sr-only">Home</span>
              <Link href={`/`}>
                <Image
                  className='w-min h-auto min-w-[180px]'
                  src={Logo}
                  height={30}
                  width={220}
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
                  <Link href={'/invest'}>
                    <span
                      className="text-stone-700 transition hover:text-gray-500/75"
                    >
                      Invest
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href={'/joinus'}>
                    <span
                      className="text-stone-700 transition hover:text-gray-500/75"
                    >
                      Hostel Owners
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
            {userInfo && userInfo != null ?
              <div className="sm:flex sm:gap-4">

                <div className="hidden md:flex my-2">
                  <Link href={`/dashboard`}>
                    <span
                      className="rounded-3xl bg-stone-800 px-10 py-2.5 text-sm font-medium text-white shadow" >
                      Dashboard
                    </span>
                  </Link>
                </div>
                <div className="hidden md:flex ">

                  <span onClick={() => { dispatch(cleanUserData()) }}
                    className="cursor-pointer rounded-3xl bg-stone-100 px-10 py-2.5 text-sm font-medium text-stone-800 shadow" >
                    logout
                  </span>
                </div>

              </div>
              :
              <div className="sm:flex md:gap-4">
                <div className="hidden md:flex ">
                  <Link href={`/register`}>
                    <span
                      className="rounded-3xl bg-gray-100 px-8 py-2.5 text-sm font-medium text-stone-800">
                      Register
                    </span>
                  </Link>
                </div>
                <div className="hidden md:flex ">
                  <Link href={`/login`}>
                    <span
                      className="rounded-3xl bg-stone-800 px-10 py-2.5 text-sm font-medium text-white shadow" >
                      Login
                    </span>
                  </Link>
                </div>
              </div>

            }

            <div className="block md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
    <section className={`fixed  min-w-[100%] min-h-[100%] ${!isMobileMenuOpen ? `left-[100%] top-[-50%]` : `left-0 top-0`}   transition-all duration-[300ms] ease-in-out z-50 md:hidden`} >
      <div className='absolute w-full h-full border-2  bg-gray-200 backdrop-blur-md'></div>
      <FaTimes className="text-3xl font-thin  absolute top-6 right-[4%] cursor-pointer text-[#e13451]" onClick={handleMobileMenuToggle} />
      <img src="/assets/common/HostelBazaar.png" className="absolute left-[7%] top-10 w-[30%]" alt="analog mutations" />
   
      <ul className="text-center flex flex-col justify-center items-center gap-5 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[90%]" >
        <li className="text-center scale-[1] hover:scale-[1.2] text-2xl transition-all duration-[300ms] ease-in-out hover:text-[#FF6D3E]">
          <Link href={"/"} onClick={handleMobileMenuToggle}>Home</Link>
        </li>
        <li className="text-center scale-[1] hover:scale-[1.2] text-2xl transition-all duration-[300ms] ease-in-out hover:text-[#FF6D3E]" >
          <Link href={"/about"} onClick={handleMobileMenuToggle}>About</Link>
        </li>
        <li className="text-center scale-[1] hover:scale-[1.2] text-2xl transition-all duration-[300ms] ease-in-out hover:text-[#FF6D3E]">
          <Link href={"/hostels"} onClick={handleMobileMenuToggle}>Hostels</Link>
        </li>
        <li className="text-center scale-[1] hover:scale-[1.2] text-2xl transition-all duration-[300ms] ease-in-out hover:text-[#FF6D3E]" >
          <Link href={"/joinus"} onClick={handleMobileMenuToggle}>Hostel Owners</Link>
        </li>
        <li className="text-center scale-[1] hover:scale-[1.2] text-2xl transition-all duration-[300ms] ease-in-out hover:text-[#FF6D3E]" >
          <Link href={"/invest"} onClick={handleMobileMenuToggle}>Invest</Link>
        </li>
        {userInfo && userInfo != null ?
              <div className="flex items-center justify-center sm:gap-4 w-full mt-5">

                <div className=" md:flex my-2">
                  <Link href={`/dashboard`}>
                    <span
                      className="rounded-3xl bg-stone-800 px-10 py-2.5 text-sm font-medium text-white shadow" >
                      Dashboard
                    </span>
                  </Link>
                </div>
                <div className=" md:flex ">

                  <span onClick={() => { dispatch(cleanUserData()) }}
                    className="cursor-pointer rounded-3xl bg-stone-100 px-10 py-2.5 text-sm font-medium text-stone-800 shadow" >
                    logout
                  </span>
                </div>

              </div>
              :
              <div className=" flex items-center justify-center gap-6 w-full mt-5">
                <div className="md:flex ">
                  <Link href={`/register`}>
                    <span
                      className="rounded-3xl bg-gray-100 px-8 py-2.5 text-sm font-medium text-stone-800">
                      Register
                    </span>
                  </Link>
                </div>
                <div className=" md:flex ">
                  <Link href={`/login`}>
                    <span
                      className="rounded-3xl bg-stone-800 px-10 py-2.5 text-sm font-medium text-white shadow" >
                      Login
                    </span>
                  </Link>
                </div>
              </div>

            }

      </ul>
      
    </section>
  </>


  )
}

export default Header