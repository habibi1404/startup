import React from 'react'
import Buttons from '../components/Buttons'
import Input from '../components/Input'

export default function Login() {
  return (
    <section className='m-auto w-1/2'>
    <form>
      <ul>
      <Input type='text'  place='your username' userid='user'/>
      <Input type='password'  place='your password' userid='pswd'/>
      </ul>
        
        
      <Buttons status= 'Log In'/>

    </form>
   </section>
  )
}
