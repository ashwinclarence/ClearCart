import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
function Animations({ children }) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}>
      {children}
    </motion.div>
  )
}

export default Animations
