import React from 'react'

const Home = ({loginUser}) => {
  return (
    <div>This is Home
    {
      loginUser && <h2>Hello {loginUser.name}</h2>
    }
    </div>
  )
}

export default Home