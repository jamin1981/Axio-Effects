import React from 'react';
import { motion } from 'framer-motion';

interface ItemProps {
  icon: string;
}

const Item: React.FC<ItemProps> = ({ icon }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.5, y: -10, margin: "0 8px" }}
            className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center text-xl shadow-lg border border-slate-600 origin-bottom transition-all duration-200"
        >
            {icon}
        </motion.button>
    )
}

const DockMenu = () => {
  const icons = ['🏠', '🔍', '🎵', '💬', '⚙️'];

  return (
    <div className="h-24 flex items-end justify-center gap-2 pb-2">
        <div className="flex gap-2 bg-slate-800/50 backdrop-blur-md p-2 rounded-2xl border border-white/10">
            {icons.map((icon, i) => (
                <Item key={i} icon={icon} />
            ))}
        </div>
    </div>
  );
};

export default DockMenu;