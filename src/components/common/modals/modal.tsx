import React, { ReactNode } from 'react';

interface ModalProps {
    title: string
    isModal: Boolean
    closeModal: () => void
    children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ title, isModal, closeModal, children }) => {


    return (
        isModal && (<>
            <div className="fixed top-0 left-0 w-full h-full bg-[#0000009f] z-[10] backdrop-blur-lg dark:bg-[#5756569f]" onClick={(e) => { e.stopPropagation(); closeModal() }}></div>
            <div
                className="w-full fixed z-[11] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-blue-100 bg-white p-4  sm:p-6 lg:p-8 max-w-md dark:border-gray-700 dark:bg-gray-800 lg:max-w-lg"
                role="alert"
            >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute w-7 h-7  rounded-md rounder-sm hover:scale-[1.04]  cursor-pointer transition-all text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-50 top-4 right-4 " onClick={(e) => { e.stopPropagation(); closeModal() }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                <div className="flex items-center gap-4 my-3">
                    {title.length > 0 && <p className="font-bold sm:text-xl dark:text-gray-50 text-gray-900"> {title}</p>}
                </div>
                {children}
            </div>
        </>)

    )
}


export default Modal;