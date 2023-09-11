import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SlotsBanner from "@/assets/img/slot/banner/1.jpg";
import Image from "next/image";
import { Card, CardFooter, CardHeader, Button } from "@nextui-org/react";
import { slotCard } from "@/constants";
import Link from "next/link";

export default function Home() {
  const wMxAuto = "w-full md:w-8/12 md:mx-auto mt-8 p-4 md:p-0";
  return (
    <main>
      <div className="w-full bg-blue-800 sticky top-0">
        <div className="flex flex-row items-center justify-center gap-2 text-center p-2">
          <Link
            href="http://hokiselalu.us/daftar"
            className="font-base text-xs md:text-xl md:font-bold text-white"
          >
            Daftar sekarang dan dapatkan Welcome Bonus Rp.20.000.000!
          </Link>
        </div>
      </div>
      <Navbar />
      <section className="relative">
        <Image src={SlotsBanner} className="w-full object-cover" />
        <div className="w-full absolute top-0 h-full p-4">
          <div className="w-full md:w-8/12 md:mx-auto md:my-20 md:p-8">
            <h1 className="md:text-6xl text-white">Slot</h1>
            <p className="text-xl text-white mt-2">
              Permainan merupakan takdir kita
            </p>
            <p className="text-xl text-white">
              Daftar sekarang untuk mendapatkan hadiah tanpa batas
            </p>
          </div>
        </div>
      </section>
      <section className={`${wMxAuto}`}>
        <h1 className="text-4xl font-bold">Providers</h1>
        <div className="flex flex-col md:grid md:grid-cols-4 md:grid-flow-row items-center justify-between gap-4 mt-8">
          {slotCard.map((item) => {
            return (
              <div className="w-full" key={item.id}>
                <Card className="w-full h-[460px] col-span-12 sm:col-span-5">
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
                      <p className="text-white">Main Sekarang</p>
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
  );
}
