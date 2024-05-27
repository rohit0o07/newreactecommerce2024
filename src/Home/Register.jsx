import React from 'react'

const SubTitle = "Save the Day";
const title = (
    <h2 className='title'>Join on Day long free workshop for <b>Advance<span>Mastering</span></b>on Sales</h2>
)
const desc = "Limited Time offer!Hurry up"

const Register = () => {
  return (
    <section className='register-section padding-tb pb-0'>
        <div className='container'>
            <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                        <span className='subtitle'>{SubTitle}</span>
                            {title}
                            <p>{desc}</p>
                    </div>
                </div>
                <div className='col1'>
                    <div className='section-wrapper'>
                        <h4>Register Now!</h4>
                        <form className='register-form'>
                            <input type="text" placeholder='Username' name='name' className='reg-input' />
                            <input type="email" placeholder='Email' name='email' className='reg-input' />
                            <input type="number" placeholder='Phone' name='number' className='reg-input' />
                        <button type='submit' className='lab-btn'>Register Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
