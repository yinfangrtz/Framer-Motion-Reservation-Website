import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { 
    opacity: 0, 
    x: '-100vw',
    transition: {
      staggerChildren: 0.5,
    } 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    }
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ position, setShowModal }) => {
  // useEffect lifecycle hook, array with only setShowModal as dep 
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank You For Request a Booking ! </h2>
      <motion.p variants={childVariants}>You ordered a {position.base} in:</motion.p>
      <motion.p variants={childVariants}>
        {position.cities.map(city => <div key={city} >{city}</div>)}
      </motion.p>    
    </motion.div>
  )
}

export default Order;