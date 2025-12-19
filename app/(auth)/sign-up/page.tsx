'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

type Inputs = {
  example: string
  exampleRequired: string
}

export default function SignUp({}: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues:{
    fullName: '',
    email: '',
    password: '',
    country: "India",
    investmentGoals:'Growth',
    riskTolerance:'Medium',
    preferredIndustry:'Technology'
  }, mode: 'onBlur'
  })
  const onSubmit = async(data:SignUpFormData) => {
try {
    console.log('Sign up data:', data);
} catch (error) {
    console.log('Sign up error:', error);
}
  }

  return (

<>
<h1 className='form-title'>Sign Up & Personalize </h1>
<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
<Button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
    {isSubmitting ? 'Creating Account...' : 'Start Your Investing Journey'}
</Button>
</form>




</>


)
}