import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router';

const MAComponent = (props) => {
  let { id } = useParams()
  let history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  const goToMap = () => {
    history.push('/mainmap')
  }

  useEffect(() => {
    console.log(props)
    console.log(id)
  })

  return (
    <div>
      <button onClick={goToHome} style={{ margin: 5 }}>Home</button>
      <button onClick={goToMap} style={{ margin: 5 }}>U.S. Map</button>
      <h1 style={{ color: 'slategrey' }}>Massachusetts</h1>
      {/* <img src={'/amy-klobuchar1-unscreen.png'} alt="amy-klo"/> */}
    </div>
  )
}

export default MAComponent;