import React from 'react';
import Title from './Title';
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa";


function Contact(){
    return (
        <div className='flex items-center justify-center flex-col text-center mb-10 mx-auto items-center'>
            <Title>Contact</Title>
            <div className='flex justify-center items-center'>
                <h1 className='inline-block px-5 py-2 border-2 border-stone-900 rounded-md overflow-hidden'>
                    <FaEnvelope className='text-2xl w-full'/> <a 
                        className='text-2xl'
                    > vluis@ad.unc.edu </a>
                </h1>

                <div className='p-4 flex justify-center items-center'>
                    <h1 className='inline-block px-9 py-2 border-2 border-stone-900 rounded-md overflow-hidden'>
                        <FaLinkedin className='text-2xl w-full'/> <a 
                            href='https://www.linkedin.com/in/luis-villa-2a4386213'
                            target="_blank"
                            className='text-2xl text-blue-600 hover:underline underline-offset-2 decoration-2'
                            rel='noreferrer noopener'
                        >LinkedIn</a>
                    </h1>
                </div>
                
                {/* <div className='flex justify-center items-center'>
                    <h1 className='inline-block px-9 py-2 border-2 border-stone-900 rounded-md overflow-hidden'>
                        <FaPaperclip className='text-2xl w-full'/> <a 
                            href={pdf}
                            target="_blank"
                            className='text-2xl hover:underline underline-offset-2 decoration-2'
                            rel='noreferrer noopener'
                        >Resume</a>
                    </h1>
                </div> */}

            </div>
        </div>
    )
}

export default Contact;