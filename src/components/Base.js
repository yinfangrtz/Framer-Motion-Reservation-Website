import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    y: '100vw' 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const nextVariants = {
  hidden: { 
    x: '-100vw' //with vw, need ''. if only 100, without ''
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 }
  } 
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 10px rgb(255,255,255)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      yoyo: Infinity
    }
  }
}

const Base = ({ addBase, position }) => {
  const bases = ['Individual Position', 'Two-person Position', 'Group Reservation'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Confirm Your Attendance</h3>
      <ul>
        {bases.map(base => {
          let spanClass = position.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {position.base && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/cities">
            <motion.button
              variants={buttonVariants}
               whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base;