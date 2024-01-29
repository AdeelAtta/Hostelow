import { useState } from "react"
import Button from "../elements/Button"

const PaymentForm = () => {
    const [method, setMethod] = useState<string>()
    const handleClick = (e: string) => {
        setMethod(e)
    }
    return (
        <section>
            {
                method ? (
                    method === "bank" ? (
                        <div>
                            <div className='relative'>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">Name on card</label>
                                <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. Rashid , Adeel ..." required />
                            </div>
                            <div className='relative'>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">Card number</label>
                                <input type="password" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="** ** ** **" required />
                            </div>
                            <div className='relative flex flex-col md:flex-row gap-3'>
                                <div className='flex-1'>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">Valid Until</label>
                                    <input type="date" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mm/yy" required />
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium ">CVC</label>
                                    <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*" required />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h1>other</h1>
                    )
                ) : (
                    <ul className="space-y-4">
                        <li className="border-2 px-4 py-2 rounded cursor-pointer hover:bg-gray-300" onClick={() => handleClick("bank")}>
                            <span className="text-xl">Bank</span>
                        </li>
                        <li className="border-2 px-4 py-2 rounded cursor-pointer hover:bg-gray-300" onClick={() => handleClick("easypaisa")}>
                            <span className="text-xl">Easypaisa</span>
                        </li>
                        <li className="border-2 px-4 py-2 rounded cursor-pointer hover:bg-gray-300" onClick={() => handleClick("jazzcash")}>
                            <span className="text-xl">JazzCash</span>
                        </li>
                    </ul>
                )
            }
        </section>
    )
}

export default PaymentForm
