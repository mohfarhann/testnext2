"use client";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Hero from "@/sections/Hero";
import Why from "@/sections/Why";
import Games from "@/sections/Games";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";

const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

export default function Home() {
  const wMxAuto = "w-full md:w-8/12 md:mx-auto mt-14 md:mt-28";
  
  return (
    <>
       <main>
          <section className="sticky top-0 z-[30] p-0 m-0">
            <Navbar />
          </section>
          <section className="">
            <Carousel className="w-full h-full"/>
          </section>
          <section className={`${wMxAuto} p-4 md:p-0 `}>
            <Hero />
          </section>
          <section className={`${wMxAuto} p-4 md:p-0`}>
            <Why />
          </section>
          <section className={`${wMxAuto} p-4 md:p-0`}>
            <Games />
          </section>
          <section className={`${wMxAuto} p-4 md:p-0`}>
            <h1 className="text-2xl font-bold">
              Pertanyaan yang paling sering di ajukan (FAQ){" "}
            </h1>
            <FAQ
              question={"1. Apakah BK8 memiliki lisensi resmi?"}
              answer={
                "Ya, BK8 diatur dan dilisensikan oleh Pemerintah Curacao, beroperasi di bawah ‘Master License of Gaming Services Provider, N.V. #365/JAZ’. Ini menjamin bahwa situs kami beroperasi sesuai dengan standar dan regulasi Internasional."
              }
            />
            <FAQ
              question={"2. Bagaimana cara mendaftar dan bermain di BK8?"}
              answer={
                "Untuk mendaftar, klik tombol ‘DAFTAR’ di situs web kami, lalu isi informasi yang diperlukan. Setelah verifikasi, Anda dapat melakukan deposit dan mulai bermain. Perlu diingat bahwa, nama akun dan nama di rekening bank Anda harus sama agar transaksi deposit maupun withdraw dapat diproses."
              }
            />
            <FAQ
              question={
                "3. Apa itu Welcome Bonus dan bagaimana cara mendapatkannya?"
              }
              answer={
                "Bonus selamat datang (Welcome Bonus) adalah bonus khusus untuk pemain baru yang mendaftar dan melakukan deposit pertama. Ini adalah bentuk apresiasi kami kepada member baru."
              }
            />
            <FAQ
              question={"4. Apakah aman bermain di BK8?"}
              answer={
                "Tentu saja. Keamanan adalah prioritas utama kami. Kami menggunakan enkripsi data SSL tingkat lanjut untuk melindungi data pribadi dan transaksi Anda. Selain itu, kami memiliki fitur autentikasi dua faktor (2-FA) untuk mencegah akses yang tidak sah ke akun Anda. Sistem kami secara rutin diperiksa dan diperbarui untuk menjamin keamanan yang maksimal."
              }
            />
            <FAQ
              question={
                "5. Bagaimana cara melakukan deposit dan penarikan dana?"
              }
              answer={
                "Kami menyediakan berbagai metode, termasuk transfer bank lokal, e-wallet, dan mata uang kripto seperti Bitcoin (BTC), Ethereum (ETH) dan Tether (USDT). Prosesnya cepat dan aman, tanpa potongan biaya."
              }
            />
            <FAQ
              question={"6. Mengapa saya harus memilih BK8?"}
              answer={
                "BK8 menawarkan variasi permainan yang lengkap dan berkualitas, promosi menarik, layanan pelanggan 24/7, dan platform yang mudah digunakan baik di PC, tablet maupun mobile."
              }
            />
            <FAQ
              question={"7. Apakah saya bisa bermain judi bola di BK8?"}
              answer={
                "Tentu saja! Judi bola adalah salah satu layanan taruhan yang paling populer di situs kami, dengan odds terbaik dan pilihan pertandingan yang beragam. Mulai dari pertandingan lokal hingga mancanegara."
              }
            />
            <FAQ
              question={"8. Apakah BK8 penipu?"}
              answer={
                "Tidak, BK8 adalah platform judi online yang sah dan terlisensi resmi. Kami berkomitmen untuk menyediakan lingkungan permainan yang adil dan aman untuk semua pemain kami."
              }
            />
            <FAQ
              question={
                "9. Bagaimana jika saya mengalami masalah saat bermain?"
              }
              answer={
                "Kami memiliki tim dukungan pelanggan yang siap membantu Anda 24/7. Anda bisa menghubungi kami melalui live chat, email, atau telepon."
              }
            />
            <FAQ
              question={"10. Apakah BK8 memiliki aplikasi mobile?"}
              answer={
                "Ya, kami menawarkan aplikasi mobile yang kompatibel dengan perangkat Android dan iOS, memungkinkan Anda untuk bermain kapanpun dan dimanapun. "
              }
            />
            <FAQ
              question={"11. Bagaimana BK8 menjaga keamanan data pribadi saya?"}
              answer={
                "Kami menggunakan teknologi keamanan terkini, seperti enkripsi data SSL dan firewall yang kuat, untuk melindungi informasi pribadi dan transaksi pemain kami. "
              }
            />
          </section>
          <section className={`${wMxAuto} p-4 md:p-0`}>
            <Footer />
          </section>
        </main>
    </>
  );
}
