import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img className="app__navbar-img" src={images.thomas} alt="logo"/>
      </div>
      <ul className="app__navbar-links">
        {['Home', 'About', 'Skills', 'Work', 'Testimonials', 'Contact'].map((item, index) => (
          <li className="app__flex p-text" key={index}>
            <div />
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>
        {Toggle && (
          <motion.div 
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'ease-out' }}
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul className="app__navbar-links">
                {['Home', 'About', 'Skills', 'Work', 'Testimonials', 'Contact'].map((item, index) => (
                  <li className="app__flex p-text" key={index}>
                    <a href={`#${item.toLowerCase()}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
        )}
      
      </div>

    </nav>
  )
}

export default Navbar;