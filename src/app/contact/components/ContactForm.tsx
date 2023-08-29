'use client'
import { useState } from 'react'
import { Listbox, Switch } from '@headlessui/react'
import { FaChevronDown, FaPaperPlane, FaUser } from 'react-icons/fa'
import logo from '../../../../public/noble.png'
import Image from 'next/image'
import moment from 'moment'

const services = [
  { id: 1, name: 'Dumpster Rental', unavailable: false },
  { id: 2, name: 'Home Renovation Services', unavailable: false },
  { id: 3, name: 'Junk Removal', unavailable: false },
  { id: 4, name: 'Other...', unavailable: false },
]

function ContactForm() {
  const [selectedService, setSelectedService] = useState(services[0])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    serviceCategory: '',
  })

  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const [enabled, setEnabled] = useState(false)
  const [submit, setSubmit] = useState(false)

  const handleSubmit = () => {
    setSubmit(true)
  }

  return (
    <>
      {submit ? <h1>Form Submitted</h1> : null}
      <h1 className='text-[3.5em] p-2 border-b-2 border-orange-300'>
        Contact Us
      </h1>
      <div className='flex flex-col justify-between '>
        <div className='flex items-center max-w-md md:max-w-xl'>
          <Image src={logo} height={48} className='rounded-full mx-4' />
          <div>
            <p className='bg-gray-400 p-3 text-lg rounded-lg mt-4'>
              Hi, This is Noble Hauling. How can we assist you today?
            </p>
            <p className='font-light opacity-50'>
              Sent Today at {moment().format('LT')}
            </p>
          </div>
        </div>
        <div>
          <div className='flex flex-col justify-center'>
            <div className='flex items-start ml-auto mr-0 mt-4'>
              <div className='bg-blue-300 p-4 rounded-lg bg-opacity-80'>
                <iframe
                  src='https://docs.google.com/forms/d/e/1FAIpQLSfQQqGxirG4806zaFRZDcNGJvbk2p97MWwBt-vfJylcwLAqGQ/viewform?embedded=true'
                  width='500'
                  height='750'
                  frameborder='0'
                  marginheight='0'
                  marginwidth='0'>
                  Loading…
                </iframe>
              </div>
              {/* <form
                method='post'
                action='mailto:s.papineau92@gmail.com'
                className='mt-4 mr-0 ml-auto border-2  bg-blue-500 rounded-xl p-3 text-black grid grid-cols-2 gap-4 md:w-1/2'>
                <input
                  className='rounded-md p-4 col-span-2 md:col-span-1'
                  placeholder='First Name'
                  onChange={handleChange}
                  value={formData.firstName}
                  id='firstName'
                />
                <input
                  className='rounded-md p-4 col-span-2 md:col-span-1'
                  placeholder='Last Name'
                />
                <div className='flex items-center col-span-2'>
                  <input
                    className='rounded-md p-4 col-span-1 mr-2'
                    type='tel'
                    placeholder='Phone Number'
                  />
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                      enabled ? 'bg-green-400' : 'bg-slate-400'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}>
                    <span className='sr-only'>Enable notifications</span>
                    <span
                      className={`${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                  <span className='mx-2 font-medium'>Opt-in for texting</span>
                </div>

                <input
                  className='rounded-md p-4 mt-2 col-span-2'
                  type='email'
                  placeholder='Email Address'
                />
                <span className='col-span-1 text-xl border-b-2 border-orange-400'>
                  Services
                </span>
                <Listbox value={selectedService} onChange={setSelectedService}>
                  <Listbox.Button className='bg-white w-1/2 text-black p-3 col-span-2 inline-flex  justify-between items-center rounded-md'>
                    <span className='mx-4'>{selectedService.name}</span>
                    <span>
                      <FaChevronDown />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className='bg-white p-3'>
                    {services.map((service) => (
                      <Listbox.Option
                        key={service.id}
                        value={service}
                        disabled={service.unavailable}
                        className='w-3/4 m-auto cursor-pointer hover:bg-blue-300 rounded-md p-2 hover:text-white transition-all duration-200'>
                        {service.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
                {selectedService.name === 'Other...' ? (
                  <textarea
                    className='h-24 p-1'
                    placeholder='Tell us how Noble Hauling can help!'
                  />
                ) : null}

                <button
                  type='submit'
                  onSubmit={handleSubmit}
                  className='col-span-2 flex items-center justify-between mr-0 ml-auto border-2  p-2 px-4 bg-blue-300 mt-2 rounded-full '>
                  <span className='mx-2'>Send Message</span>
                  <FaPaperPlane />
                </button>
              </form> */}
              <FaUser className='text-[48px] bg-blue-500 rounded-full text-white p-3 mx-4' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
