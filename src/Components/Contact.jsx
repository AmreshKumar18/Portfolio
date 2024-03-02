import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact__section'>
      <h1>Contact Us</h1>
      <div className='contact__form'>
        <input type="text" placeholder='Enter Your Name Here...' />
        <input type="email" placeholder='Enter Your Email Here...' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Describe Your Message Here...' />
        <button>Send Message</button>
      </div>
    </div>
    </>
  )
}

export default Contact