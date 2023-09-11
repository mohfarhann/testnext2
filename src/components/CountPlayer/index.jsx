import { useState, useEffect } from "react";

const Index = ({ initialPlayerCount }) => {
  const [playerCount, setPlayerCount] = useState(initialPlayerCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount((prevCount) => prevCount + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h3 className="text-2xl font-bold">
      {playerCount.toLocaleString("id-ID")}{" "}
      <span className="text-base font-normal text-gray-500">Pemain</span>
    </h3>
  );
};

// Fungsi ini akan dijalankan di sisi server untuk mengambil initialPlayerCount
export async function getServerSideProps() {
  // Misalnya, Anda mengambil initialPlayerCount dari database atau sumber data lainnya
  const initialPlayerCount = 30000; // Ganti dengan cara sesuai kebutuhan Anda

  return {
    props: {
      initialPlayerCount,
    },
  };
}

export default Index;
