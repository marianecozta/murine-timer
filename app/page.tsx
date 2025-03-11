"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const getTimeSince = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `${years} anos, ${months} meses, ${weeks} semanas, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
};

const getTimeUntil = (endYear: number) => {
  const now = new Date();
  const end = new Date(endYear, 0, 1);
  const diff = end.getTime() - now.getTime();

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const weeks = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${years} anos, ${months} meses, ${weeks} semanas, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
};

export default function RomanticTimers() {
  const [timeSince, setTimeSince] = useState(getTimeSince("2022-01-23"));
  const [timeUntil, setTimeUntil] = useState(getTimeUntil(2028));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSince(getTimeSince("2022-01-23"));
      setTimeUntil(getTimeUntil(2028));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-800">
      <motion.div
        className="p-6 bg-white rounded-2xl shadow-lg text-center m-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl font-bold text-pink-600">Namorando ❤️</h1>
        <p className="text-lg mt-2">{timeSince}</p>
      </motion.div>

      <motion.div
        className="p-6 bg-white rounded-2xl shadow-lg text-center m-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl font-bold text-blue-600">Noivado 💍</h1>
        <p className="text-lg mt-2">{timeUntil}</p>
      </motion.div>
    </div>
  );
}
