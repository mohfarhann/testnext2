"use client"

import React from "react";
import { Button, Link } from "@nextui-org/react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-black mb-2 md:mb-8">
            BK8 – Situs Judi Online Terbaik di Indonesia
          </h1>
        </div>
        <div className="text-center">
          <p className="md:text-2xl md:mb-8">
            Nikmati berbagai permainan judi online seperti slot, taruhan bola, dan
            live casino. Daftar sekarang dan dapatkan welcome bonus hingga Rp
            20.000.000!
          </p>
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="w-8/12">
            <Button as={Link} color="warning" href="http://hokiselalu.us/daftar" variant="solid" className="w-full">
              <p className="text-white">Daftar Sekarang</p>
            </Button>
          </div>
          <div className="w-4/12">
            <Button as={Link} color="primary" href="http://hokiselalu.us/daftar" variant="light" className="w-full">
              <p className="text-blue-600">Login</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
