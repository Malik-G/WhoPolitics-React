import React, { useEffect, useRef } from 'react'
import { useParams, useHistory } from 'react-router';
import { gsap, Power2, Power4 } from 'gsap';
import './MNComponent.css'

const MNComponent = (props) => {
  let { id } = useParams()
  let history = useHistory()
  let container = useRef(null);
  let heroImg = useRef(null);

  const goToHome = () => {
    history.push('/')
  }

  const goToMap = () => {
    history.push('/mainmap')
  }

  useEffect(() => {
    console.log(props)
    console.log(id)
    const t1 = gsap.timeline()
    t1.to(container, { opacity: 1, duration: 3 })
  })

  return (
    <div id="container" style={{ opacity: 0 }} ref={el => container = el}>
      <button onClick={goToHome} style={{ margin: 5 }}>Home</button>
      <button onClick={goToMap} style={{ margin: 5 }}>U.S. Map</button>
      <h1 style={{ color: 'slategrey' }}>Minnesota</h1>
      <img ref={el => heroImg = el} src='/mn_capitol.jpg' alt="cap" />
      <h1>Federal Reps</h1>
      <h1>State Reps</h1>
      <h1>County Reps</h1>
      {/* <img src={'/amy-klobuchar1-unscreen.png'} alt="amy-klo"/> */}
    </div>
  )
}

export default MNComponent;