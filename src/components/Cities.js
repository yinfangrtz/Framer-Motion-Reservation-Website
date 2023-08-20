import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      yoyo: Infinity
    }
  }
}

const Cities = ({ addCities, position }) => {
  let cities = ['Limerick', 'Galway', 'Kilkenny', 'Wexford', 'Bray'];

  return (
    <motion.div className="Cities container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Confirm Your Cities</h3>
      <ul>
        {cities.map(city => {
          let spanClass = position.cities.includes(city) ? 'active' : '';
          return (
            <motion.li key={city} onClick={() => addCities(city)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ city }</span>
            </motion.li>
          )
        })}
      </ul>
      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Cities;