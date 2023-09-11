import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SportsBanner from "@/assets/img/sports/1.jpg";
import { sportGames } from "@/constants";
import {Tabs, Tab, Card, CardBody, Button} from "@nextui-org/react";
import Image from 'next/image'
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
        <Image src={SportsBanner} className="w-full object-cover" />
        <div className="w-full absolute top-0 h-full p-4">
          <div className="w-full md:w-8/12 md:mx-auto md:my-20 md:p-8">
            <h1 className="md:text-6xl text-white">Sportsbook</h1>
            <p className="text-xl text-white mt-2">
              Nikmati kelas online dunia
            </p>
            <p className="text-xl text-white">
              sportsbook odds taruhan olahraga terbaik
            </p>
          </div>
        </div>
      </section>
      <section className={`${wMxAuto}`}>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Dynamic tabs" items={sportGames}>
            {(item) => (
              <Tab key={item.id} title={item.title}>
                <Card  className="shadow-none">
                  <CardBody>
                    <div className="w-full md:w-8/12 md:mx-auto">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-2xl font-bold">{item.title}</h1>
                        <p className="font-semibold">{item.p}</p>
                        <p className="">{item.desc}</p>
                        <Button as={Link} color="warning" href="http://hokiselalu.us/daftar" variant="solid" className="w-full md:w-6/12">
                          <p className="text-white">Main Sekarang</p>
                        </Button>
                      </div>
                    </div>
                    <div className="w-full">
                      <Image src={item.imgUrl} className="w-full object-cover"/>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </section>
      <section className={`${wMxAuto}`}>
        <Footer />
      </section>
    </main>
  );
}
