import React from 'react'

export default function Register() {
  return (
    <div>
        <form action="" method="post">
            <input type="text" name="firstName" id="firstName" />
            <input type="text" name="lastName" id="lastName" />
            <input type="email" name="email" id="email" />
            <input type="password" name="password" id="password" />
        </form>
    </div>
  )
}
