import React from 'react'
import Buttons from '../components/Buttons'
import Input from '../components/Input'

export default function SignUp() {
  return (
   <section className="m-auto w-1/2">
    <form>
      <ul>
          <Input type='text'  place='your username' userid='user'/>
          <Input type='email'  place='your email address' userid='email'/>
          <Input type='password'  place='your password' userid='pswd'/>
      </ul>
      <Buttons status='Sign Up'/>
    </form>
   </section>
  )
}
