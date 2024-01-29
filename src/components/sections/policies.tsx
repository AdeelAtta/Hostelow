import { MdOutlineDoubleArrow } from "react-icons/md";
const Policies = () => {
    return (
        <div className="flex flex-col gap-y-2 md:gap-y-4 border-2 border-y-0 p-4 md:p-8 space-y-4">
            <h3 className='font-bold text-2xl'>Policies</h3>
            <details
                className="group border-s-4 border-green-500 bg-gray-50 px-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                        Hostel Policy
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>
                <ul className='space-y-4'>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            All guests must be at least 18 years of age to be able to check in at any of our hostels.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            The Hosteller is a chain of backpacker hostels and is well suited for young backpacking travellers. As a brand, we do not recommend families and do not allow all those below 18 years of age to stay with us
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            Payment modes accepted at our hostels: Cash, Debit card, Credit card and UPIs.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            We cannot guarantee accommodation in the same dorm room in the case of 3 or 4 people travelling together. That will strictly be subject to availability until the time of check-in.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            Should any action by a guest be deemed inappropriate by the hostel or if any inappropriate behaviour is brought to the attention of the hostel, the hostel reserves the right to take action against the guest. Rest assured, proper investigations will be undertaken by the administration to ensure that the affair is dealt with in complete fairness.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            Right to admission is reserved.
                        </p>
                    </li>
                </ul>
            </details>

            <details
                className="group border-s-4 border-green-500 bg-gray-50 px-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                        Booking Policy
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>
                <ul className='space-y-4'>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            All guests must be at least 18 years of age to be able to check in at any of our hostels.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            All cancellations, if informed 7 days prior to the check-in date, shall be eligible for a 100% refund. In case cancellations happen within 7 days of the check-in date, there wouldn&quot;t be ANY refund and will attract 100% cancellation charges. If the guest doesn&quot;t show up they will be charged the total price of the reservation.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            All amendments, if informed 7 days prior to the check-in date, shall be eligible for a free amendment. Amendments cannot be done within 7 days of the check-in date. The reservation amendment can only be done once.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            The reservations made for hostel stays cannot be shifted from one location to another. If the reservation is eligible for free cancellation, then we&quot;ll assist in cancelling the reservation and initiate a refund for the same from our end. The guest can then proceed to make the reservation for the desired location.
                        </p>
                    </li>
                </ul>
            </details>

            <details
                className="group border-s-4 border-green-500 bg-gray-50 px-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h2 className="text-lg font-medium text-gray-900">
                        Cancellation Policy
                    </h2>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                </summary>

                <ul className='space-y-4'>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            Any and all cancellation requests are attended to by the central reservations team. To cancel your booking, kindly write to them at booking@thehosteller.com. Please make sure to mention your reservation ID and all relevant details in the same email.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            All cancellations, if informed 7 days prior to the check-in date, shall be eligible for a 100% refund. In case cancellations happen within 7 days of the check-in date, there wouldn’t be ANY refund and will attract 100% cancellation charges. If the guest doesn’t show up they will be charged the total price of the reservation.
                        </p>
                    </li>
                    <li className='flex items-center gap-x-4'>
                        <span><MdOutlineDoubleArrow /></span>
                        <p className="leading-relaxed text-gray-700">
                            For all communications related to cancellations, write to us on booking@thehosteller.com with details such as Booking ID and Guest name.
                        </p>
                    </li>
                </ul>
            </details>
        </div>
    )
}

export default Policies
