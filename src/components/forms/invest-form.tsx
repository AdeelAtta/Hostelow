import React from 'react'
import Input from './form-elements/input'
import Button from '../elements/Button'

const InvestForm = () => {
    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6">
                <form action="#">
                    <div>
                        <Input
                            type="text"
                            name="name"
                            value=''
                            placeholder='Name'
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
                    <div>
                        <Input
                            type="number"
                            name="number"
                            value=''
                            placeholder='Number'
                            onChange={() => { }}
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
