import React from 'react'
import { useState } from 'react'

const User = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    
  return (
    <div>User Component</div>
  )
}

export default User