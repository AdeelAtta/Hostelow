import Button from '@/components/elements/Button';
import React, { ReactNode, useState } from 'react';

interface ConfirmationProps {
  text:string
  closeModal:()=>void
  handleConfirm:()=>void
}

const Confirmation: React.FC<ConfirmationProps> = ({ text, closeModal, handleConfirm }) => {






    return (<>
            <div className='mt-14 mb-14 text-xl'>{text}</div>
            <div className=' w-full flex items-end justify-end gap-5'>
         
          <Button type="button" customeStyle={` mr-0`}  handleClick={()=>handleConfirm()} text="Confirm" />
          <Button type="button" customeStyle={`ml-0 mr-0 bg-red-500`} handleClick={()=>closeModal()} text="Cancel" />

          
        </div>
        </>


    )
}


export default Confirmation;