import React from 'react'
import Input from './form-elements/input'
import Button from '../elements/Button'
import Select from "react-select";

const InvestForm = () => {
    return (
        <div className="w-full bg-white border-2 border-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6">
                <form  >
                <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
                        <Input
                            type="text"
                            name="name"
                            value=''
                            placeholder='Name'
                            onChange={() => { }}
                        />
                         <Input
                            type="number"
                            name="number"
                            value=''
                            placeholder='phone Number'
                            onChange={() => { }}
                        />
                    </div>
                    <div>
                        <Input
                            type="email"
                            name="email"
                            value=''
                            placeholder='Email'
                            onChange={() => { }}
                        />
                    </div>
                    <div className="ml-auto my-5">
                    <Select
                        name="hostel"
                        placeholder="Investment Potential"
                        id="hostel"
                        options={[{key:`2500000`,label:`25 Lac`},{key:`50000000`,label:`50 Lac`},{key:`7500000`,label:`75 Lac`}]}
                        className="basic-multi-select min-w-[300px]"
                        classNamePrefix="select hostel"
                        onChange={(e: any) => {}}
                    />
                </div>
                    <div className='mt-4'>
                        <Button text='Invest Now' type='submit' customeStyle='w-full' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InvestForm
