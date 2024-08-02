import React, { useContext } from 'react'
import myContext from '../userContext'

const Login = () => {
 
  return (
    <div>Login
      { console.log(useContext(myContext))}

  <a href='/' className='bg-red-300'>Home page</a>
    </div>
  )
}

export default Login