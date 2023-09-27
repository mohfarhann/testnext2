"use client";
import './Navbar.module.css'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../../assets/img/1.svg";
import Image from "next/image";
import { useEffect } from "react";
import { throttle } from 'lodash';


export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <div className={`m-0 p-0 h-full`}>
        <div className="w-full bg-blue-800" >
          <div className="flex flex-row items-center justify-center gap-2 text-center p-2">
            <Link
              href="http://hokiselalu.us/daftar"
              className=" sm:text-md md:text-xl text-sm md:font-bold text-white"
            >
              Daftar dan dapatkan Welcome Bonus Rp 20.000.000!
            </Link>
          </div>
        </div>
        <Navbar
          isBlurred={false}
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Link href="/">
                <Image src={Logo} width={120} alt="BK8 Logo" />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4 items-center justify-center" justify="center">
            <NavbarBrand>
              <Link href="/">
                <Image src={Logo} width={120} alt="BK8 Logo" />
              </Link>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/sports">
                Sports
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href="/casino" color="foreground">
                Casino
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="/slot">
                Slot
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="/promotion">
                Promosi
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="/vip">
                VIP
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem>
              <Button
                as={Link}
                color="warning"
                href="http://hokiselalu.us/daftar"
                variant="solid"
              >
                <p className="text-white">Daftar Sekarang</p>
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="top-[94px] p-4">
            <NavbarItem>
              <Link color="foreground" href="/sports" className='font-bold  text-lg'>
                Sports
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href="/casino" color="foreground" className='font-bold text-lg'>
                Casino
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="/slot" className='font-bold text-lg'>
                Slot
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="/promotion" className='font-bold text-lg'>
                Promosi
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link color="foreground" href="/vip" className='font-bold text-lg'>
                VIP
              </Link>
            </NavbarItem>
            <NavbarItem className="absolute bottom-10 w-full">
              <Button
                as={Link}
                color="warning"
                href="http://hokiselalu.us/daftar"
                variant="solid"
                className="w-11/12"
              >
                <p className="text-white text-xl md:text-base">Daftar Sekarang</p>
              </Button>
            </NavbarItem>
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
}
