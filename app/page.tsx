import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Button>
        Welcome to the Home Page
      </Button>
    </div>
  )
}