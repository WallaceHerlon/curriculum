import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'

const ContactMe = () => {
    return (
        <div className='mx-8 px-8 relative border-orange border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
            <h3 className='absolute bg-orange text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contato</h3>
            <p className='text-center md:text-left'>
                <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
                <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
                <FiLink className='text-5xl md:text-6xl inline-block mr-6' />
                <br />
                <span className='inline-block mt-4'>Email: wherlon@hotmail.com</span>
            </p>
        </div>
    )
}

export default ContactMe