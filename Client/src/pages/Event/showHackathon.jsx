import React from 'react'
import { BellRing, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import hackImg from '../../assets/hack.jpg'
import { TbListDetails } from 'react-icons/tb'

function showHackathon() {
  return (
    <div className='col-span-2 min-h-[90vh] rounded-xl bg-muted/50 p-4'>
      <Card>
        <CardHeader>
          <CardTitle>Innovate Hackathon</CardTitle>
          <CardDescription>Organized by Raisoni Skill Tech University</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <img src={hackImg} alt='' className='h-25 w-25' />
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button className=''>
            <TbListDetails /> View Details
          </Button>
          <Button className=''>
            <Check /> Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default showHackathon