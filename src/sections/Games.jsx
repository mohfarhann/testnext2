"use client";
import React, { lazy } from "react";
import { Card, CardHeader, Button, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { cardProduct } from "@/constants";
import styles from "./custom.module.css"

import { HiMiniCheck } from "react-icons/hi2";

const Games = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-between gap-4">
        <div className="text-center">
          <h1 className="uppercase text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-800 to-black mb-2 md:mb-10">
            Fitur dan keunggulan
          </h1>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-4 mt-8">
          {cardProduct.map((item) => {
            return (
              <Card className="col-span-12 sm:col-span-4 h-[400px] md:h-full" key={item.id}>
                <CardHeader className="absolute z-10 top-0 flex-col items-start p-4 gap-2 w-full md:w-6/12 h-full bg-gradient-to-r from-blue-950 to-transparent md:bg-transparent" key={item.id}>
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    {item.title}
                  </p>
                  <h4 className="text-white font-medium text-large">
                    {item.header}
                  </h4>
                  <p className="text-tiny text-white uppercase font-bold">
                    {item.desc}
                  </p>
                  <ul className="text-white">
                    <li>- {item.list.list}</li>
                    <li>- {item.list.list2}</li>
                    <li>- {item.list.list3}</li>
                    <li>- {item.list.list4}</li>
                    <li>- {item.list.list5}</li>
                    <li>- {item.list.list6}</li>
                  </ul>
                  <Button as={Link} color="warning" href="http://hokiselalu.us/daftar" variant="solid" className=" absolute bottom-4 w-6/12 md:w-4/12 ">
                    <p className="text-white">Main Sekarang</p>
                  </Button>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card background"
                  className={`z-0 w-full h-full object-cover md:${styles.blur}`}
                  src={item.imgUrl}
                  onLoad={lazy}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Games;
