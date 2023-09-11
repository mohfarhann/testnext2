"use client";

import React, { useState, useEffect } from "react";

const Index = () => {
  const [playerCount, setPlayerCount] = useState(
    parseInt(localStorage.getItem("playerCount") || 30000)
  );

  useEffect(() => {
    if(typeof window !== 'undefined'){
      localStorage.setItem('playerCount', playerCount.toString())
    }

    const interval = setInterval(() => {
      setPlayerCount((prevCount) => prevCount + 1)
    }, 4000)

    return () => clearInterval(interval)
  }, [playerCount])
  
  return (
    <h3 className="text-2xl font-bold">
      {playerCount.toLocaleString('id-ID')} <span className="text-base font-normal text-gray-500">Pemain</span>
    </h3>
  );
};

export default Index;
