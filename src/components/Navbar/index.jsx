"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "../../assets/img/1.svg";
import Image from "next/image";
import { useEffect } from "react";

// export default function Index() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <Navbar onMenuOpenChange={setIsMenuOpen} disableAnimation className="bg-slate-100">
//       <NavbarContent>
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//         <NavbarBrand>
//           <Link href="/">
//           <Image src={Logo} width={120} alt="BK8 Logo" />
//           </Link>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4 overflow-y-auto max-h-10" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="/sports">
//             Sports
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="/casino" color="foreground">
//             Casino
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/slot">
//             Slot
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/promotion">
//             Promosi
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/vip">
//             VIP
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem>
//           <Button as={Link} color="warning" href="http://hokiselalu.us/daftar" variant="solid">
//             <p className="text-white">Daftar Sekarang</p>
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarMenu>
//         <NavbarItem>
//           <Link color="foreground" href="/">
//             Home
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/sports">
//             Sports
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link href="/casino" color="foreground">
//             Casino
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/slot">
//             Slot
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/promotion">
//             Promosi
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="/vip">
//             VIP
//           </Link>
//         </NavbarItem>
//       </NavbarMenu>
//     </Navbar>
//   );
// }

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);


  return (
    <div
      className={`${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-100%]'
      } transition-opacity transition-transform duration-300 ease-in-out fixed top-0 left-0 right-0 z-50 bg-white `} 
    >
      <div className="w-full bg-blue-800">
        <div className="flex flex-row items-center justify-center gap-2 text-center p-2">
          <Link
            href="http://hokiselalu.us/daftar"
            className="font-base text-tiny md:text-xl md:font-bold text-white"
          >
            Daftar sekarang dan dapatkan Welcome Bonus Rp.20.000.000!
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

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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

        <NavbarMenu className="top-[95px] p-4">
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
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
