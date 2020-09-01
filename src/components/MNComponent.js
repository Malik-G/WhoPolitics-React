import React, { useEffect, useRef } from 'react'
import { useParams, useHistory } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import { gsap, Power2, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './MNComponent.css'
gsap.registerPlugin(ScrollTrigger);

const MNComponent = (props) => {
  let { id } = useParams()
  let history = useHistory()
  let container = useRef(null);
  let heroImg = useRef(null);

  // const goToHome = () => {
  //   history.push('/')
  // }

  // const goToMap = () => {
  //   history.push('/mainmap')
  // }
  ScrollTrigger.refresh(true)

  useEffect(() => {
    console.log(props)
    console.log(id)
    console.log(gsap.utils.toArray(".rep-grid"))
    // const t1 = gsap.timeline()
    // const t2 = gsap.timeline()
    // const t3 = gsap.timeline()
    //t1.to(container, { opacity: 1, duration: 2 })
    // t2
    //   //.from(".us-senate-container", { xPercent: -100 })
    //   .from("#p1", { opacity: 0, duration: .2 })
    //   .from("#p2", { opacity: 0, duration: .2 }, "+=.2")
    //   .from("#p3", { opacity: 0, duration: .2 }, "+=.2")
    //   .from("#p4", { opacity: 0, duration: .2 }, "+=.2")
    //   //.to(".us-senate-container", { xPercent: -100 }, "+=2")
    // //.from(".us-house-container", { opacity: 0, top: '10%', xPercent: -100})
    // t3.from(".us-house-container", { opacity: 0, xPercent: 100 })
    // ScrollTrigger.batch(".rep-container", {
    //   onEnter: batch => gsap.to(batch, {
    //     // start: "top +=10%",
    //     // end: "bottom bottom",
    //     scrub: true,
    //     // opacity: 0.0,
    //     pin: true,
    //     markers: true,
    //     // overwrite: true
    //   })
    // })
    // ScrollTrigger.refresh(true)

    ScrollTrigger.create({
      trigger: "#us-senate-container",
      start: "top +=10%",
      // end: "bottom +=10%",
      scrub: true,
      pin: true,
      // markers: true,
    })

    // ScrollTrigger.create({
    //   trigger: "#us-house-container",
    //start: "top +=10%",
    // end: "bottom +=10%",
    // scrub: true,
    //  pin: true,
    // markers: true,
    // })

  })

  return (
    <div id="container" ref={el => container = el}>
      <nav className="nav-container">
        <h1 >Minnesota</h1>
        <div id="nav-btn-container">
          <div className="state-nav-btn"><Link className="nav-link" to="/">Home</Link></div>
          <div className="state-nav-btn"><Link className="nav-link" to="/mainmap">U.S. Map</Link></div>
        </div>
      </nav>

      <div id="hero-container">
        <img id="hero-img" ref={el => heroImg = el} src='/mn_capitol.jpg' alt="cap" />
      </div>

      <div id="us-senate-container" className="rep-container">
        <h1 className="state-header">U.S. Senate</h1>
        <div className="rep-grid senate-grid">
          <div>
            <img className="rep-img" src="/Amy_Klobuchar.jpg" alt="u.s. sentate"></img>
            <p>Amy Klobuchar</p>
          </div>
          <div>
            <img className="rep-img" src="/Tina_Smith.jpg" alt="u.s. sentate" />
            <p>Tina Smith</p>
          </div>
          <p id="p1">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eum aut placeat sint indeserunt saepe, beatae iste quisquam exercitationem illum.
          Facere nemo eligendi sit obcaecati excepturi praesentium aliquid quae! Rem!
          </p>
          <p id="p2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eum aut placeat sint indeserunt saepe, beatae iste quisquam exercitationem illum.
          Facere nemo eligendi sit obcaecati excepturi praesentium aliquid quae! Rem!
          </p>
        </div>
      </div>

      <div id="us-house-container" className="rep-container">
        <h1 className="state-header">U.S. House of Representatives</h1>
        <div className="rep-grid house-grid">
          <img className="us-rep-img" src="/mn_us_house/Jim_Hagedorn.jpg" alt="u.s. house" />
          <img className="us-rep-img" src="/mn_us_house/Angie_Craig.jpg" alt="u.s. house" />
          <img className="us-rep-img" src="/mn_us_house/Dean_Phillips.jpg" alt="u.s. house" />
          <img className="us-rep-img" src="/mn_us_house/Betty_McCollum.jpg" alt="u.s. house" />
          <img className="us-rep-img" src="/mn_us_house/Ilhan_Omar.jpg" alt="u.s. house" />
          <img className="us-rep-img" src="/mn_us_house/Tom_Emmer.jpg" alt="u.s. house" />
          <img className="us-rep-img" src="/mn_us_house/Collin_Peterson.jpg" alt="u.s. house" />
          <img className="us-rep-img" src="/mn_us_house/Pete_Stauber.jpg" alt="u.s. house" />
        </div>
      </div>

      <div id="executive-container" className="rep-container">
        <h1 className="state-header" style={{ color: "white" }}>Executive</h1>
        <div className="rep-img-grid">
          <img className="rep-img" src="/Tim_Walz.jpg" alt="gov" />
        </div>
      </div>

      <div id="judicial-container" className="rep-container">
        <h1 className="state-header" style={{ color: "white" }}>Judicial</h1>
        <div className="rep-img-grid">
          <img className="rep-img" src="/" alt="judge" />
        </div>
      </div>

      <div id="legislative-container" className="rep-container">
        <h1 className="state-header" style={{ color: "white" }}>Legislative</h1>
        <div className="rep-img-grid">
          <img className="rep-img" src="/" alt="legis" />
        </div>
      </div>

    </div>
  )
}

export default MNComponent;