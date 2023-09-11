// utils/calculateRemainingTime.js
import { differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { useState, useEffect } from 'react';

export const useRemainingTime = (endDate) => {
  // State untuk menyimpan sisa waktu
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime(endDate));

  // Fungsi untuk mengupdate sisa waktu setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateRemainingTime(endDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  return remainingTime;
};

export const calculateRemainingTime = (endDate) => {
  // Mendapatkan tanggal hari ini
  const currentDate = new Date();

  // Menghitung selisih bulan antara tanggal hari ini dan endDate
  const remainingMonths = differenceInMonths(endDate, currentDate);

  // Menghitung selisih hari antara tanggal hari ini dan endDate
  const remainingDays = differenceInDays(endDate, currentDate);

  const remainingHours = Math.min(differenceInHours(endDate, currentDate), 24); // Batasan 24 jam

  // Menghitung selisih menit antara tanggal hari ini dan endDate
  const remainingMinutes = Math.min(differenceInMinutes(endDate, currentDate), 60); // Batasan 60 menit
  
  // Menghitung selisih detik antara tanggal hari ini dan endDate
  const remainingSeconds = differenceInSeconds(endDate, currentDate);

  return {
    months: remainingMonths,
    days: remainingDays,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
};
