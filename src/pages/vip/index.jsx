"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VipBanner from "@/assets/img/vip/banner/1.jpg";
import { Card, CardFooter, CardHeader, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import VipBanner2 from "@/assets/img/vip/banner/2.jpg";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";

import BronzeMedal from "@/assets/img/vip/medals/1.png";
import GoldMedal from "@/assets/img/vip/medals/2.png";
import DiamondMedal from "@/assets/img/vip/medals/3.png";
import PlatinumMedal from "@/assets/img/vip/medals/4.png";
import SilverMedal from "@/assets/img/vip/medals/5.png";

export default function Home() {
  const wMxAuto = "w-full md:w-8/12 md:mx-auto  p-4 md:p-0";
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
        <main className="">
          <Navbar />
          <section className="relative mt-8 md:mt-32">
            <Image
              src={VipBanner}
              className="w-full h-[300px] md:h-full object-coverr"
            />
            <div className="w-full absolute top-0 h-full p-4">
              <div className="w-full md:w-10/12 md:mx-auto my-20 md:p-8">
                <h1 className="text-4xl md:text-6xl text-white">
                  Supreme <br /> Ruang VIP
                </h1>
                <p className="text-md md:text-xl text-white mt-2">
                  BK8 akan menunjukkan betapa luarbiasanya menjadi VIP kami,
                  <br /> nantikan sesuatu yang luar biasa
                </p>
              </div>
            </div>
          </section>
          <section className={`${wMxAuto}`}>
            <div className="w-full">
              <Card className="w-full col-span-12 sm:col-span-7">
                <CardHeader className="absolute md:w-6/12 z-10 top-1 flex-col items-start p-8">
                  <p className="text-tiny text-red-500 uppercase font-bold">
                    Jadilah Member VIP BK8
                  </p>
                  <h4 className="text-white/90 font-medium text-xl">
                    Nikmati segala keekslusifan yang hanya ada di BK8! Promosi
                    spesial, Hadiah, dan Rebate - lebih dari yang anda
                    bayangkan.
                  </h4>
                  <br />
                  <p className="text-sm text-white">
                    Sebagai website permainan online yang paling inovatif di
                    Indonesia dan segala kemudahannya, BK8 tidak pernah berhenti
                    memberikan member kami yang terbaik. Dari opsi permainan
                    sampai servis, BK8 selalu memberikan yang terbaik dan
                    terkini.
                  </p>
                  <br />
                  <p className="text-sm text-white">
                    Untuk meningkatkan level, BK8 kini memperkenalkan program
                    VIP paling ekslusif yang bisa dinikmati berbagai kalangan,
                    menjadikan para member setia kami untuk terus bermain di BK8
                    dan menjadi yang terbaik. Lima tingkatan VIP yang kini
                    menjadi tulang punggung BK8 adalah Silver, Gold, Platinum &
                    Diamond. Sebagai member VIP BK8, anda berhak mendapatkan
                    penawaran ekslusif, hadiah, bonus dan tentu saja prioritas
                    servis - semuanya demi kenyamanan bermain member kami.
                    Rebate spesial dan bonus kenaikan tingkat juga akan
                    memberikan anda kenyamanan lebih dalam bermain!
                  </p>
                  <br />
                  <p className="text-sm text-white">
                    Tujuan kami dengan program tingkatan ini adalah membuka
                    peluang untuk semua member agar bisa menikmati keuntungan.
                    Meskipun kami menganjurkan kepada member kami agar terus
                    naik tingkat, namun fokus utama kami adalah kepuasan bermain
                    semua member kami, terutama VIP kami.
                  </p>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src={VipBanner2}
                />
              </Card>
            </div>
          </section>
          <section className={`${wMxAuto}`}>
            <div className="w-full">
              <div className="flex flex-col items-center justify-between gap-4">
                <div className="md:w-6/12 text-center">
                  <h1 className="text-red-500 text-2xl font-bold">
                    Minimum Deposit dalam Sebulan
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center">
                    <Image src={BronzeMedal} />
                    <p className="text-md font-semibold">Bronze</p>
                    <p className="text-xl font-semibold text-red-500">50,000</p>
                  </div>
                  <div className="text-center">
                    <Image src={GoldMedal} />
                    <p className="text-md font-semibold">Gold</p>
                    <p className="text-xl font-semibold text-red-500">
                      500,000
                    </p>
                  </div>
                  <div className="text-center">
                    <Image src={DiamondMedal} />
                    <p className="text-md font-semibold ">Diamond</p>
                    <p className="text-xl font-semibold text-red-500">
                      Undangan
                    </p>
                  </div>
                  <div className="text-center">
                    <Image src={PlatinumMedal} />
                    <p className="text-md font-semibold ">Platinum</p>
                    <p className="text-xl font-semibold text-red-500">
                      1,000,000
                    </p>
                  </div>
                  <div className="text-center">
                    <Image src={SilverMedal} />
                    <p className="text-md font-semibold">Silver</p>
                    <p className="text-xl font-semibold text-red-500">
                      150,000
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 w-full">
                  <div className="w-full ">
                    <p className="text-2xl ">Bagaimana Caranya?</p>
                    <h1 className="text-2xl text-red-500">
                      Perjalanan VIP BK8
                    </h1>
                    <p>
                      1. Member reguler akan naik secara otomatis menjadi VIP
                      setelah memenuhi minimal Deposit dalam waktu yang
                      diberikan.
                    </p>
                    <p>
                      2. Kenaikan level untuk VIP akan secara berurutan mulai
                      dari Bronze sampai dengan Platinum
                    </p>
                    <p>3. VIP Diamond hanya berlaku melalui undangan</p>
                    <p>
                      4. Anda bisa bersantai dan mulai menikmati Reward sebagai
                      VIP!{" "}
                    </p>
                  </div>
                  <div className="w-full ">
                    <h1 className="text-2xl text-red-500">
                      TINGKATAN LEVEL VIP ANDA SEKARANG
                    </h1>
                    <p>
                      Kepada semua member yang melakukan Upgrade pertama kali.
                      Kami mungkin saja meminta KTP dan Buku Tabungan Anda saat
                      pertama kali akan Upgrade. Mohon kerjasamanya untuk
                      mengikuti syarat dan ketentuan.
                    </p>
                    <p>
                      Demi kelancaran proses Upgrade, mohon agar mengikuti semua
                      regulasi yang ada. Jangan ragu untuk menghubungi Customer
                      Service kami apabila Anda membutuhkan bantuan.
                    </p>
                  </div>
                  <div className="w-full ">
                    <h1 className="text-2xl text-red-500">
                      PROGRAM TRANSFER VIP
                    </h1>
                    <p>
                      1. Member yang memiliki deposit pertama setelah
                      01/01/2022, dengan minimal satu kali transaksi deposit di
                      BK8 sebagai berikut:
                    </p>
                    <p>
                      2. Member wajib memberikan bukti video level VIP di situs
                      web lain.
                    </p>
                    <p>
                      3. Member wajib memberikan informasi berupa nomor telepon
                      dan KTP untuk proses verifikasi rekening di BK8.
                    </p>
                    <p>
                      4. Waktu verifikasi dan transfer VIP berlangsung maksimal
                      7 hari.{" "}
                    </p>
                    <p>
                      5. VIP yang ditransfer tidak akan berlaku untuk VIP
                      UPGRADE FREEBET sampai member telah mencapai persyaratan
                      deposit VIP dalam bulan tersebut.
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="">
                    <h1 className="text-red-500 font-bold text-2xl">
                      Bagaimana cara menjadi VIP?
                    </h1>
                    <br />
                    <p>
                      Untuk menikmati rangkaian hadiah VIP, member harus
                      memenuhi persyaratan setoran minimum yang telah ditetapkan
                      di atas dalam jangka waktu yang diberikan atau dengan
                      undangan khusus.
                    </p>
                    <br />
                    <p>
                      Bayangin Anda memiliki apa yang Anda perlukan? Naik level
                      dan raih puncak sekarang.
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-6/12 md:w-3/12">
                    <Button
                      as={Link}
                      color="warning"
                      href="http://hokiselalu.us/daftar"
                      variant="solid"
                      className="w-full"
                    >
                      <p className="text-white">Gabung Sekarang</p>
                    </Button>
                  </div>
                </div>
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
