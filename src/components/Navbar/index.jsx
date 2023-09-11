"use client";

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

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} disableAnimation className="bg-slate-100">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
          <Image src={Logo} width={120} alt="BK8 Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
          <Button as={Link} color="warning" href="http://hokiselalu.us/daftar" variant="solid">
            <p className="text-white">Daftar Sekarang</p>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
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
      </NavbarMenu>
    </Navbar>
  );
}
