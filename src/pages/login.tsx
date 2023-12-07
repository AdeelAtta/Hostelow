import React from 'react'

import LoginForm from '@/components/forms/login-form'
import SigninSignupForm from '@/components/sections/signin-signup-form';

const login = () => {
  return (
    <SigninSignupForm title='Login' para='Please login to your account'>
      <LoginForm />
    </SigninSignupForm>
  )
}

export default login