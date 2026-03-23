import DietCalculator from '../../components/coach/DietCalculator';
import { motion } from 'framer-motion';

export default function CoachDietGenerator() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-12 pb-24 min-h-screen px-4 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <DietCalculator />
      </div>
    </motion.div>
  );
}
