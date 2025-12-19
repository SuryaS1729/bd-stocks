'use client'
import InputField from '@/components/forms/InputField'
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
    <InputField 
    name="fullName" 
    label="Full Name" 
    placeholder="Enter your full name" 
    register={register} 
    error={errors.fullName} 
    validation={{ required: "Full name is required", minLength: { value: 2, message: "Full name must be at least 2 characters long" } }} />
    <InputField name="email" label="Email Address" placeholder="Enter your email address" register={register} error={errors.email} validation={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }} />
    <InputField name="password" label="Password" type="password" placeholder="Create a password" register={register} error={errors.password} validation={{ required: "Password is required", minLength: { value: 8, message: "Password must be at least 6 characters long" } }} />
    <Button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
        {isSubmitting ? 'Creating Account...' : 'Start Your Investing Journey'}
    </Button>
</form>




</>


)
}