"use client";
import React, { lazy } from "react";
import { Card, CardFooter, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { cardWhy } from "@/constants";
import CountPlayer from "@/components/CountPlayer"


const Index = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="text-center">
          <h1 className="uppercase text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-black mb-2 md:mb-10">
            Mengapa Memilih BK8?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 mt-8">
          {cardWhy.map((item) => {
            return (
              <div className="w-full" key={item.id}>
                <Card className="py-4 shadow-none w-full h-full md:h-[380px] ">
                  <CardBody className="overflow-visible py-2 items-center justify-center">
                    <Image
                      alt="Card background"
                      className="w-full object-cover rounded-xl"
                      src={item.imgUrl}
                      onLoad={lazy}
                    />
                  </CardBody>
                  <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{item.title}</h4>
                    <small className="text-default-500">{item.desc}</small>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center justify-between gap-4 mt-8">
            <div className="w-full p-4 bg-[#ffffff]">
              <CountPlayer/>
            </div>
            <div className="w-full p-4 bg-[#ffffff]">
              <h3 className="text-2xl font-bold">
                54{" "}
                <span className="text-base font-normal text-gray-500">
                  Provider dan
                </span>
                <span className="text-2xl font-bold mx-2">
                  308
                </span><span className="text-base font-normal text-gray-500">
                  Permainan
                </span>
              </h3>
            </div>
            <div className="w-full p-4 bg-[#ffffff]">
              <h3 className="text-2xl font-bold">
                100%{" "}
                <span className="text-base font-normal text-gray-500">
                  Bonus Deposit
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
