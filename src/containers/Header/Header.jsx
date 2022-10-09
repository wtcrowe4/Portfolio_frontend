import React from 'react'
import './Header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
    }
  }
}


const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info">
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: '20px' }}>
                <p className="p-text">Hey, my name is</p>
                <h1 className="h1-text">Thomas.</h1>
                <p className="p-text">Welcome to my portfolio page.</p>
                {/* <p className="p-text">I'm a full-stack developer.</p> */}
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <span>👨‍💻</span>
              <h4 className="h4-text">Full-Stack Developer</h4>
            </div>
          </div>
        </motion.div>
        <motion.div whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren:3 }}
        className="app__header-img">
          <img style={{ borderRadius: 150 }} src={images.profile} alt="profile" />
          <motion.img 
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            src={images.circle} alt="circle"
            className="overlay_circle" />
          
        </motion.div>
        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles">
            {[images.git, images.redux, images.sass].map((img, index) => (
              <div className="circle-cmp app__flex" key={index}>
                <img src={img} alt="circle" />
              </div>
            ))}
        </motion.div>

    
    
    </div>
  )
}

export default Header;