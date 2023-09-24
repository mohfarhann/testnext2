import { useState, useEffect } from "react";

const Index = () => {
  const [playerCount, setPlayerCount] = useState( parseInt(localStorage.getItem("playerCount") || 29981)
  );

  useEffect(() => {
    const intervals = [
      { duration: 3000, limit: 1 }, // Setiap 3 detik selama maksimum 1 pemain
      { duration: 180000, limit: 1000 }, // Setiap 3 menit selama maksimum 1 pemain
      { duration: 600000, limit: 100}, // Setiap 10 menit selama maksimum 1pemain
    ];

    let intervalIndex = 0;
    let currentInterval;

    const increasePlayerCount = () => {
      setPlayerCount((prevCount) => prevCount + 1);
    };

    const startNextInterval = () => {
      const { duration, limit } = intervals[intervalIndex];
      if (playerCount < limit) {
        currentInterval = setInterval(increasePlayerCount, duration);
        intervalIndex = (intervalIndex + 1) % intervals.length;
      }
    };

    startNextInterval();

    return () => {
      if (currentInterval) {
        clearInterval(currentInterval);
      }
    };
  }, [playerCount]);

  return (
    <h3 className="text-2xl font-bold">
      {playerCount.toLocaleString("id-ID")}{" "}
      <span className="text-base font-normal text-gray-500">Pemain</span>
    </h3>
  );
};

export default Index;
