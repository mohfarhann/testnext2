import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "@nextui-org/react";
import { promotionCard } from "@/constants";
import Link from "next/link";
import {
  calculateRemainingTime,
  useRemainingTime,
} from "@/utils/calculateDate";

export default function Home() {
  const wMxAuto = "w-full md:w-8/12 md:mx-auto mt-8 p-4 md:p-0";
  const endDate = new Date("2023-09-30");

  // Menggunakan hook useRemainingTime
  const remainingTime = useRemainingTime(endDate);
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
      <section className={`${wMxAuto}`}>
        <div className="w-full flex flex-col items-center justify-between gap-2">
          {promotionCard.map((item) => {
            return (
              <Card className="py-4" key={item.id}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-large">{item.title}</h4>
                  <p className="text-tiny uppercase font-bold">{item.desc}</p>
                  <small className="text-red-500">
                    Promosi hanya Bulan Ini
                  </small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={item.imgUrl}
                  />
                </CardBody>
                <CardFooter className="flex flex-row items-center justify-between gap-2 p-4">
                  <div>
                    <h1 className="text-xl">Sisa Waktu:</h1>
                    <p className="text-3xl text-red-500 font-semibold">{remainingTime.days} hari</p>
                  </div>
                  <div>
                    <Button
                      as={Link}
                      color="warning"
                      href="http://hokiselalu.us/daftar"
                      variant="solid"
                      className="w-full"
                    >
                      <p className="text-white">Main Sekarang</p>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
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
