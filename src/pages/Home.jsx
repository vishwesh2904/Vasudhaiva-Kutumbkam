import { motion } from 'framer-motion';

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-100 to-orange-200 text-center"
  >
    <img src="/logo.png" alt="logo" className="w-32 h-32 mb-4" />
    <h1 className="text-4xl font-bold text-orange-800">Vasudhaiva Kutumbkam</h1>
    <p className="text-xl mt-2 text-orange-700">Journey of Truth</p>
  </motion.div>
);

export default Home;
