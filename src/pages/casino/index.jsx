"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CasinoBanner from "@/assets/img/casino/banner/1.jpg";
import Image from "next/image";
import { Card, CardFooter, CardHeader, Button } from "@nextui-org/react";
import { casinoCard } from "@/constants";
import Link from "next/link";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

import { Rubik } from "next/font/google";

// export async function getStaticProps() {
//   const cardItem = casinoCard()
//   return {
//     props: {
//       cardItem
//     }
//   }
// }
export default function Home() {
  const wMxAuto = "w-full md:w-8/12 md:mx-auto p-4 md:p-0";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan pemrosesan data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ganti dengan logika pemrosesan data Anda
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <section className="sticky top-0 z-[70]">
            <Navbar />
          </section>
          <section className="relative mb-12">
            <Image
              src={CasinoBanner}
              className="w-full h-[300px] md:h-full object-cover"
              alt="banner casino"
            />
            <div className="w-full absolute top-0 h-full p-4">
              <div className="w-full md:w-8/12 md:mx-auto my-20 md:p-8">
                <h1 className="text-4xl md:text- text-white font-bold">Live Casino</h1>
                <p className="text-md md:text-xl text-white mt-2">
                  Mainkan permainan yang diselenggarakan oleh Live dealers kami
                </p>
                <p className="text-md md:text-xl text-white">
                  Live Casino Daftar sekarang untuk mendapatkan hadiah tanpa
                  batas Hot
                </p>
              </div>
            </div>
          </section>
          <section className={`${wMxAuto} mt-12`}>
          <h1 className="text-4xl font-bold">Providers</h1>
            <div className="grid grid-cols-2 md:grid md:grid-cols-4 md:grid-flow-row items-center justify-between gap-6 mt-8">
              {casinoCard.map((item) => {
                return (
                  <div className="w-full mt-8" key={item.id}>
                    <Card className="w-full h-full md:h-[460px] col-span-12 sm:col-span-5">
                      <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-red-400 uppercase font-bold">
                          New
                        </p>
                        {/* <h4 className="text-white font-medium text-2xl">
                      {item.title}
                    </h4> */}
                      </CardHeader>
                      <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full object-cover"
                        src={item.imgUrl}
                      />
                      <CardFooter className=" justify-between">
                        <div></div>
                        <Button
                          as={Link}
                          color="warning"
                          href="http://hokiselalu.us/daftar"
                          variant="solid"
                          className="w-full"
                        >
                          <p className="text-white text-base md:text-xl">Main Sekarang</p>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          </section>
          <section className={`${wMxAuto}`}>
            <Footer />
          </section>
        </main>
      )}
    </>
  );
}
