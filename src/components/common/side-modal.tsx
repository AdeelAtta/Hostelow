import React, { ReactNode } from 'react';

interface ModalProps {
    title: string
    isModal: Boolean
    closeModal: () => void
    children: ReactNode
}

const SideModal: React.FC<ModalProps> = ({ title, isModal, closeModal, children }) => {


    return (
        isModal && (<>
            <div className="fixed top-0 left-0 w-full h-full bg-[#0000009f] z-[10]  dark:bg-[#5756569f]" onClick={(e) => { e.stopPropagation(); closeModal() }}></div>
            <div className="fixed min-h-screen max-h-screen min-w-[320px] max-w-[1024px] z-[11] top-0 -right-3 rounded-sm border border-blue-100 bg-white p-4  sm:p-6 lg:p-8 dark:border-gray-700 dark:bg-gray-800 md:max-w-lg lg:max-w-lg overflow-y-scroll transition-all">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute w-7 h-7  rounded-md rounder-sm hover:scale-[1.04]  cursor-pointer transition-all text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-50 top-4 left-4 " onClick={(e) => { e.stopPropagation(); closeModal() }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                <div className="flex items-center gap-4 mt-10">
                    {title.length > 0 && <p className="font-bold sm:text-xl dark:text-gray-50 text-gray-900"> {title}</p>}
                </div>
                {children}
            </div>
        </>)

    )
}


export default SideModal;