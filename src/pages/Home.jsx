import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <motion.div 
      initial={{ 
        y: 30,
        opacity: 0.5
      }}
      animate={{ 
        y: 0,
        opacity: 1
      }}
      transition={{ duration: 0.5 }} 
        className="h-screen flex flex-col items-center mt-2"
      >
      <Carousel />
    </motion.div>
  );
}

export default Home;