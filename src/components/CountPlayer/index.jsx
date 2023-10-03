import React, { useState, useEffect, useRef } from 'react';

const Index = () => {
  const playerCountRef = useRef(
    parseInt(localStorage.getItem('playerCount') || 29981)
  );
  const [displayCount, setDisplayCount] = useState(playerCountRef.current);
  const intervalIndexRef = useRef(0);
  const currentTimeoutRef = useRef();

  useEffect(() => {
    localStorage.setItem('playerCount', playerCountRef.current.toString());
  }, [displayCount]);

  useEffect(() => {
    const intervals = [
      { duration: 3000, increment: 1 }, // 3 detik
      { duration: 10000, increment: 1 }, // 10 detik
      { duration: 2000, increment: 1 }, // 2 detik
      { duration: 45000, increment: 1 }, // 45 detik
      { duration: 180000, increment: 1 }, // 3 menit
      { duration: 600000, increment: 1 }, // 10 menit
      { duration: 120000, increment: 2 }, // 2 menit
    ];

    const increasePlayerCount = () => {
      playerCountRef.current += intervals[intervalIndexRef.current].increment;
      setDisplayCount(playerCountRef.current);
      intervalIndexRef.current =
        (intervalIndexRef.current + 1) % intervals.length;
      currentTimeoutRef.current = setTimeout(
        increasePlayerCount,
        intervals[intervalIndexRef.current].duration
      );
    };

    currentTimeoutRef.current = setTimeout(
      increasePlayerCount,
      intervals[intervalIndexRef.current].duration
    );

    return () => {
      clearTimeout(currentTimeoutRef.current);
    };
  }, []);

  return (
    <h3 className="text-2xl font-bold">
      {displayCount.toLocaleString('id-ID')}{' '}
      <span className="text-base font-normal text-gray-500">Pemain</span>
    </h3>
  );
};

export default Index;