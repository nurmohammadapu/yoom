import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <SignUp/>
    </div>
  )
}

export default SignUpPage
