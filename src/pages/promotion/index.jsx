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
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { promotionCard } from "@/constants";
import Link from "next/link";
import { useRemainingTime } from "@/utils/calculateDate";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPromotion, setSelectedPromotion] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasikan pemrosesan data
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Ganti dengan logika pemrosesan data Anda
  }, []);

  const wMxAuto = "w-full md:w-8/12 md:mx-auto p-4 md:p-0 mt-14 md:mt-28";
  const endDate = new Date("2023-09-30");

  const remainingTime = useRemainingTime(endDate);

  // Tambahkan state untuk melacak card mana yang memunculkan modal
  const selectedCard = useState(null);

  // Fungsi untuk menampilkan modal sesuai dengan card
  const openModal = (cardId) => {
    const selected = promotionCard.find((item) => item.id === cardId);
    setSelectedPromotion(selected);
    onOpen(); // Buka modal menggunakan useDisclosure
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    selectedCard[1](null); // Set state selectedCard menjadi null
    onOpenChange(); // Tutup modal menggunakan useDisclosure
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <section className="sticky top-0 z-[70]">
            <Navbar />
          </section>
          <section className={`${wMxAuto}`}>
            <div className="w-full flex flex-col items-center justify-between gap-2">
              {promotionCard.map((item) => {
                return (
                  <Card className="py-4" key={item.id}>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <h4 className="font-bold text-large">{item.title}</h4>
                      <p className="text-tiny uppercase font-bold">
                        {item.desc}
                      </p>
                      <small className="text-red-500">
                        <span className="text-black">Tersisa :</span>
                        {remainingTime.days} hari
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
                      <div className="flex flex-row items-center justify-center gap-2 p-4">
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
                        <div>
                          {/* Panggil fungsi openModal saat tombol "Open Modal" ditekan */}
                          <Button
                            color="primary"
                            variant="solid"
                            onClick={() => openModal(item.id)}
                          >
                            Rincian
                          </Button>
                        </div>
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
          {/* Gunakan useDisclosure untuk mengendalikan modal */}
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior={"inside"}
            size="5xl"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody>
                    <h1 className="text-xl md:text-4xl font-bold">
                      {selectedPromotion?.title}
                    </h1>
                    <div className="w-full p-4 ">
                      <Image
                        src={selectedPromotion.imgUrl}
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <p className="text-xl md:text-4xl font-bold">
                      Detail Promosi{" "}
                    </p>
                    <div className="flex flex-col items-start justify-center gap-2 text-small">
                      <p>{selectedPromotion.promotion.title1}</p>
                      <p>{selectedPromotion.promotion.title2}</p>
                      <p>{selectedPromotion.promotion.title3}</p>
                      <p>{selectedPromotion.promotion.title4}</p>
                      <p>{selectedPromotion.promotion.title5}</p>
                    </div>
                    <p className="text-xl md:text-4xl font-bold">
                      Syarat dan Ketentuan
                    </p>
                    <div className="flex flex-col items-start justify-center gap-2 text-small">
                      <p>{selectedPromotion.list.list1}</p>
                      <p>{selectedPromotion.list.list2}</p>
                      <p>{selectedPromotion.list.list3}</p>
                      <p>{selectedPromotion.list.list4}</p>
                      <p>{selectedPromotion.list.list5}</p>
                      <p>{selectedPromotion.list.list6}</p>
                      <p>{selectedPromotion.list.list7}</p>
                      <p>{selectedPromotion.list.list8}</p>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      // Panggil fungsi closeModal saat tombol "Close" ditekan
                      onClick={() => closeModal()}
                    >
                      Close
                    </Button>
                    <Button
                      as={Link}
                      color="warning"
                      href="http://hokiselalu.us/daftar"
                      variant="solid"
                    >
                      <p className="text-white">Klaim Sekarang</p>
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </main>
      )}
    </>
  );
}
