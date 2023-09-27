"use client";

import Image from "next/image";
import AsvLogo from "@/assets/img/mitra/1.svg";
import BfcLogo from "@/assets/img/mitra/bfc.svg";
import CurLogo from "@/assets/img/mitra/2.svg";

import BmmLogo from "@/assets/img/lisensi/1.svg";
import ItechLogo from "@/assets/img/lisensi/2.svg";
import GliLogo from "@/assets/img/lisensi/3.svg";
import TstLogo from "@/assets/img/lisensi/4.svg";
import GoLogo from "@/assets/img/lisensi/5.svg";

import BtcLogo from "@/assets/img/payment/1.svg";
import UsdLogo from "@/assets/img/payment/2.svg";
import EteLogo from "@/assets/img/payment/3.svg";
import CimbLogo from "@/assets/img/payment/4.svg";
import ManLogo from "@/assets/img/payment/5.svg";
import BniLogo from "@/assets/img/payment/6.svg";
import BcaLogo from "@/assets/img/payment/7.svg";
import BriLogo from "@/assets/img/payment/8.svg";
import EziLogo from "@/assets/img/payment/9.svg";
import HelpLogo from "@/assets/img/payment/10.svg";
import DraLogo from "@/assets/img/payment/11.svg";

import FbLogo from "@/assets/img/ourmedia/1.svg";
import IgLogo from "@/assets/img/ourmedia/2.svg";
import YtLogo from "@/assets/img/ourmedia/3.svg";
import TwitLogo from "@/assets/img/ourmedia/4.svg";

import IonLogo from "@/assets/img/security/1.svg";
import MetLogo from "@/assets/img/security/2.svg";

import Logo18 from "@/assets/img/responsible/1.svg";
import GamecLogo from "@/assets/img/responsible/2.svg";
import BeLogo from "@/assets/img/responsible/3.svg";

const index = () => {
  return (
    <footer className="relative h-[1080px] sm:h-[1080px] md:h-[930px] lg:h-[930px] xl:h-[930px] 2xl:h-[750px]">
      <div className="w-full mt-8 absolute z-[1]">
        <div className="w-full mx-auto">
          <div className="flex flex-col items-start justify-start gap-8 mb-10">
            <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between border-b-2 p-2 gap-6 pb-4">
              <div className="w-full md:w-full">
                <h1 className="text-base mb-2 font-bold">
                  Mitra Klub Resmi 2022/23
                </h1>
                <div className="w-full flex flex-row items-center justify-start gap-6">
                  <Image src={AsvLogo} width={50} height={70} />
                  <Image src={BfcLogo} width={60} height={200} />
                </div>
              </div>
              <div className="w-full md:w-full">
                <h1 className="font-semibold">Lisensi Permainan</h1>
                <Image
                  src={CurLogo}
                  width={120}
                  height={60}
                  className="mb-2 mt-2"
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-between gap-6 mt-4">
              <div className="w-full">
                <h1 className="font-bold mb-2">Metode Pembayaran</h1>
                <div className="grid grid-rows-4 grid-flow-col 2xl:flex 2xl:flex-row items-start justify-start gap-4">
                  <Image src={BtcLogo} width={35} height={35} />
                  <Image src={UsdLogo} width={35} height={35} />
                  <Image src={EteLogo} width={35} height={35} />
                  <Image src={CimbLogo} width={140} height={35} />
                  <Image src={ManLogo} width={100} height={35} />
                  <Image src={BniLogo} width={100} height={35} />
                  <Image src={BcaLogo} width={100} height={35} />
                  <Image src={BriLogo} width={120} height={35} />
                  <Image src={EziLogo} width={105} height={35} />
                  <Image src={HelpLogo} width={70} height={35} />
                  <Image src={DraLogo} width={102} height={35} />
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold mb-2">Lisensi</h1>
                <div className="grid grid-rows-2 grid-flow-col md:flex md:flex-row items-start justify-start gap-4">
                  <Image src={BmmLogo} width={80} height={35} />
                  <Image src={ItechLogo} width={50} height={35} />
                  <Image src={GliLogo} width={120} height={35} />
                  <Image src={TstLogo} width={50} height={35} />
                  <Image src={GoLogo} width={80} height={35} />
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold mb-2">Ikuti Kami</h1>
                <div className="flex flex-row items-start justify-start gap-4">
                  <Image src={FbLogo} width={35} height={35} />
                  <Image src={IgLogo} width={35} height={35} />
                  <Image src={YtLogo} width={35} height={35} />
                  <Image src={TwitLogo} width={35} height={35} />
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold mb-2">Keamanan</h1>
                <div className="flex flex-row items-start justify-start gap-4">
                  <Image src={IonLogo} width={120} height={35} />
                  <Image src={MetLogo} width={120} height={35} />
                </div>
              </div>
              <div className="w-full">
                <h1 className="font-bold mb-2">Responsible Gaming</h1>
                <div className="flex flex-row items-start justify-start gap-4">
                  <Image src={Logo18} width={45} height={35} />
                  <Image src={GamecLogo} width={70} height={35} />
                  <Image src={BeLogo} width={45} height={35} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
