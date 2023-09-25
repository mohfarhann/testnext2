"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SportsBanner from "@/assets/img/sports/1.jpg";
import { sportGames } from "@/constants";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

export default function Home() {
  const wMxAuto = "w-full md:w-8/12 md:mx-auto p-4 md:p-0 ";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan pemrosesan data
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Ganti dengan logika pemrosesan data Anda
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
          <section className="relative">
            <Image
              src={SportsBanner}
              className="w-full h-[300px] md:h-full object-cover"
            />
            <div className="w-full absolute top-0 h-full p-4">
              <div className="w-full md:w-8/12 md:mx-auto my-20 md:p-8">
                <h1 className="text-4xl md:text-6xl text-white">Sportsbook</h1>
                <p className="text-md md:text-xl text-white mt-2">
                  Nikmati kelas online dunia
                </p>
                <p className="text-md md:text-xl text-white">
                  sportsbook odds taruhan olahraga terbaik
                </p>
              </div>
            </div>
          </section>
          <section className={`${wMxAuto} mt-12`}>
            <div className="flex w-full flex-col">
              <div className="flex flex-col items-center justify-center">
                <Tabs aria-label="Dynamic tabs" items={sportGames} className="w-10/12 md:w-full mx-auto">
                  {(item) => (
                    <Tab key={item.id} title={item.title}>
                      <Card className="shadow-none">
                        <CardBody>
                          <div className="w-full md:w-8/12 md:mx-auto">
                            <div className="flex flex-col items-center justify-center gap-2">
                              <h1 className="text-2xl font-bold">
                                {item.title}
                              </h1>
                              <p className="font-semibold">{item.p}</p>
                              <p className="">{item.desc}</p>
                              <Button
                                as={Link}
                                color="warning"
                                href="http://hokiselalu.us/daftar"
                                variant="solid"
                                className="w-full md:w-6/12"
                              >
                                <p className="text-white">Main Sekarang</p>
                              </Button>
                            </div>
                          </div>
                          <div className="w-full h-[180px] md:h-[500px]">
                            <Image
                              src={item.imgUrl}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  )}
                </Tabs>
              </div>
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
