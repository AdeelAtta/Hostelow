import React from 'react'

import SigninSignupForm from '@/components/sections/signin-signup-form';
import RegisterForm from '@/components/RegisterForm';

const register = () => {
  return (
    <SigninSignupForm title='Create New Account' para='Please Fill the details to create your account'>
      <RegisterForm />
    </SigninSignupForm>
  )
}

export default register