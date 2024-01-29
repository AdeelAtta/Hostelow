import { useState } from "react"
import { IoWalletSharp } from "react-icons/io5";

const PaymentForm = (props: any) => {
    const [method, setMethod] = useState<string>()
    const handleClick = (e: string) => {
        setMethod(e)
    }
    const data = props.data;
    console.log(data);

    return (
        <section>
            {
                method ? (
                    method === "bank" ? (
                        <div className="w-full max-w-lg mx-auto p-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-lg font-medium mb-6">Payment Information</h2>
                                <form>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                                            <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                                            <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                            <input type="text" name="cvv" id="cvv" placeholder="000" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label htmlFor="card-holder" className="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
                                            <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" />
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <button type="submit" className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        // <div>
                        //     <div className='relative'>
                        //         <label htmlhtmlFor="first_name" className="block mb-2 text-sm font-medium ">Name on card</label>
                        //         <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. Rashid , Adeel ..." required />
                        //     </div>
                        //     <div className='relative'>
                        //         <label htmlhtmlFor="first_name" className="block mb-2 text-sm font-medium ">Card number</label>
                        //         <input type="password" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="** ** ** **" required />
                        //     </div>
                        //     <div className='relative flex flex-col md:flex-row gap-3'>
                        //         <div className='flex-1'>
                        //             <label htmlhtmlFor="first_name" className="block mb-2 text-sm font-medium ">Valid Until</label>
                        //             <input type="date" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mm/yy" required />
                        //         </div>
                        //         <div className='flex-1'>
                        //             <label htmlhtmlFor="first_name" className="block mb-2 text-sm font-medium ">CVC</label>
                        //             <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*" required />
                        //         </div>
                        //     </div>
                        // </div>
                    ) : (
                        <h1>other</h1>
                    )
                ) : (
                    <ul className="space-y-4">
                        <span>{data.firstName}</span>
                        <li className="border-2 px-4 py-2 rounded cursor-pointer hover:bg-gray-300 flex items-center gap-x-4" onClick={() => handleClick("bank")}>
                            <span className="text-xl"><IoWalletSharp /></span>
                            <span className="text-xl">Bank</span>
                        </li>
                        <li className="border-2 px-4 py-2 rounded cursor-pointer hover:bg-gray-300 flex items-center gap-x-4" onClick={() => handleClick("easypaisa")}>
                            <span className="text-xl"><IoWalletSharp /></span>
                            <span className="text-xl">Easypaisa</span>
                        </li>
                        <li className="border-2 px-4 py-2 rounded cursor-pointer hover:bg-gray-300 flex items-center gap-x-4" onClick={() => handleClick("jazzcash")}>
                            <span className="text-xl"><IoWalletSharp /></span>
                            <span className="text-xl">JazzCash</span>
                        </li>
                    </ul>
                )
            }
        </section>
    )
}

export default PaymentForm
