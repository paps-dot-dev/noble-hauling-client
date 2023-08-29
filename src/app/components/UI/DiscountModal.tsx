'use client'
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Listbox } from '@headlessui/react'
import { FaArrowDown, FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'
import logo from '../../../../public/noble.png'
export default function DiscountModal() {
  const services = [
    { id: 1, name: 'Dumpster Rental' },
    { id: 2, name: 'Home Renovation Services' },
    {
      id: 3,
      name: 'Junk Removal',
    },
    {
      id: 4,
      name: 'Other...',
    },
  ]

  const [selectedService, setSelectedService] = useState(services[0])
  const [formData, setFormData] = useState({
    name: '',
    projectDate: '',
    serviceInterest: [],
    projectDetails: '',
    phoneNumber: '',
    emailAddress: '',
  })

  interface formData {
    [name: string]: string
    [projectDate: string]: string
    [serviceInterest: string]: Array<String>
    [projectDetails: string]: string
    [phoneNumber: string]: string
    [emailAddress: string]: string
  }

  let [isOpen, setIsOpen] = useState(false)

  const inputClass = 'p-3 text-lg mb-2 rounded-lg'

  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  //   useEffect(() => {
  //     setTimeout(() => setIsOpen(true), 100000)
  //   }, [])

  return (
    <Dialog
      className='fixed top-1/2 w-2/4 left-1/4 bg-gradient-to-r from-sky-400 to-blue-500 z-30 p-5 rounded-xl'
      open={isOpen}
      onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <div className='flex justify-between'>
          <Dialog.Title className='text-3xl font-semibold'>
            How can we help you?
          </Dialog.Title>
          <Image src={logo} height={56} />
        </div>
        <Dialog.Description className='mb-4'>
          Give us some information on your next project, and we'll give you 15%
          off!
        </Dialog.Description>

        <form className='flex flex-row justify-between text-black'>
          <div className='flex flex-col w-1/2'>
            <input
              className={inputClass}
              type='text'
              value={formData.name}
              placeholder='Customer Name'
              onChange={handleChange}
              id='name'
            />
            <input
              className={inputClass}
              type='text'
              value={formData.emailAddress}
              placeholder='Email Address'
              onChange={handleChange}
              id='emailAddress'
            />
            <input
              className={inputClass}
              type='tel'
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder='Enter Phone Number'
              id='phoneNumber'
            />
            <label className='font-semibold'>
              Estimated or Known Project Date
            </label>
            <input
              className={inputClass}
              type='date'
              value={formData.projectDate}
              onChange={handleChange}
              id='projectDate'
            />
          </div>
          <div className='flex flex-col w-1/3'>
            <span className='text-black font-semibold'>Interested in:</span>
            <Listbox value={selectedService} onChange={setSelectedService}>
              <Listbox.Button className='bg-white h-[64px] rounded-md'>
                {selectedService.name}
                <FaChevronDown className='inline ml-4' />
              </Listbox.Button>
              <Listbox.Options className='bg-white mt-2 rounded-md text-center'>
                {services.map((service) => (
                  <Listbox.Option
                    className='w-full py-3 font-semibold hover:bg-orange-300'
                    key={service.id}
                    value={service}>
                    {service.name}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <textarea
              id='projectDetails'
              value={formData.projectDetails}
              placeholder='Briefly describe your project.'
              onChange={handleChange}
              className='h-1/2 mt-2 rounded-md p-2'
            />
          </div>
        </form>
        <div className='flex w-1/2 ml-auto justify-end'>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
          <button
            className='bg-green-400 p-2 py-4 m-4 rounded-md shadow-md hover:opacity-50 w-[144px]'
            onClick={() => setIsOpen(false)}>
            Get My Discount
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}
