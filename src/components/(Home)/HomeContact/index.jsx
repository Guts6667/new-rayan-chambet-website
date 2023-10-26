import Button from '@/components/button'
import React from 'react'

export default function HomeContact() {
  return (
    <section className='flex flex-col gap-24'>
        <h2 className='text-[48px] sm:text-[56px]'>Let's work together</h2>
        <p>Are you ready to transform your digital journey into an unforgettable user experience? Join forces with me, your dedicated Product Manager & Software Engineer, and let's create products that captivate, engage, and leave a lasting impression.</p>
        <Button link='/contact' text='Schedule a consultation' icon={"arrow-right.svg"} classBtn={"group bg-teal-400 hover:bg-none hover:bg-black "} classImg={"group-hover:rotate-[-45deg] transition-all duration-400"} />
    </section>
  )
}
