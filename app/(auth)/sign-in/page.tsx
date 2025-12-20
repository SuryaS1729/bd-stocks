'use client'

import { CountrySelectField } from '@/components/forms/CountryFieldSelect'
import FooterLink from '@/components/forms/FooterLink'
import InputField from '@/components/forms/InputField'
import SelectField from '@/components/forms/SelectField'
import { Button } from '@/components/ui/button'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

export default function SignIn({}: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues:{

    email: '',
    password: '',


  }, mode: 'onBlur'
  })
  const onSubmit = async(data:SignInFormData) => {
try {
    console.log('Sign In data:', data);
} catch (error) {
    console.log('Sign In error:', error);
}
  }

  return (

<>
<h1 className='form-title'>Log In your account </h1>
<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

    <InputField 
    name="email" 
    label="Email Address" 
    placeholder="Enter your email address" 
    register={register} 
    error={errors.email} 
    validation={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } }} />
    <InputField 
    name="password" 
    label="Password" 
    type="password" 
    placeholder="Create a password" 
    register={register} 
    error={errors.password} 
    validation={{ required: "Password is required", minLength: { value: 8, message: "Password must be at least 6 characters long" } }} />
   
    
     

    
    
    
    
    <Button type="submit" disabled={isSubmitting} className='yellow-btn w-full mt-5'>
        {isSubmitting ? 'Logging In....' : 'Sign In'}
    </Button>

    <FooterLink text="Don't have an account?" linkText="Sign Up" href="/sign-up"/>
</form>




</>


)
}