import React, { useContext } from 'react';
// import images
import WomanImg from '../img/contact/woman.png';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

  return (
  <motion.section 
    initial={{opacity: 0, y: '100%'}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity: 0, y: '100%'}}
    transition={transition1}
    className='md:section bg-white'>
    <div className="container mx-auto-h-full h-screen">
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start pt-36 gap-x-8 text-center
      lg:text-left'>
        {/* bg */}
        <motion.div
          initial={{opacity: 0, y: '100%'}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: '100%'}}
          transition={transition1}
        className='hidden lg:flex bg-[#eef7f9]
        absolute bottom-0 left-0 right-0 top-72 -z-10'>
        </motion.div>
        {/* text & form */}
        <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='lg:flex-1 lg:pt-32 px-5 md:p-20'>
          <h1 className='h1'>Contact me</h1>
          <p className='mb-12'>I would love to get suggestions from you.</p>
          {/* form */}
          <form
            action="https://getform.io/f/19890081-7383-4319-832f-c7a6294b1408"
            method="POST"
            className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input className="outline=none border-b
              border-b-primary h-[60px] bg-transparent
               font-secondary w-full pl-3
               placeholder:text-[#757879] "
              type="text"
              name="name"
              placeholder='Your name'/>
               <input className="outline=none border-b
              border-b-primary h-[60px] bg-transparent
               font-secondary w-full pl-3
               placeholder:text-[#757879] "
              type="text"
              name="email"
              placeholder='Your email address'
              required
              />
            </div>
            <input className="outline=none border-b
              border-b-primary h-[60px] bg-transparent
               font-secondary w-full pl-3
               placeholder:text-[#757879] "
              type="text"
              name="message"
              placeholder='Your message'
              required
              />
              <button className='btn mb-[30px] mx-auto
              lg:mx-0 self-start'>
                Send it
              </button>
          </form>
        </div>
        {/* image */}
        <motion.div 
          initial={{opacity: 0, y: '100%'}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: '100%'}}
          transition={{transition: transition1, duration: 1.5}}
          className='lg:flex-1'>
          <img src={WomanImg} alt="" />
        </motion.div>
      </div>
    </div>
  </motion.section>
  );
};

export default Contact;
