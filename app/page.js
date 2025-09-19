import Image from "next/image";
import Link from 'next/link'
import localFont from "next/font/local";

const poppins = localFont({
  src: "./font/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-5xl font-bold text-center ${poppins.className}`}>The Best URL shortener in the Market</p>
          <p className="px-56 text-center" >We are the most straightforward URL shortener in the world. Most of the url shortener will track you or ask you to give your details for login. we understand your needs and hence we have created this url shortener</p>
          <div className='flex gap-3 justify-start'>
            <Link href='/shorten'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1.5 font-bold text-white'>Try Now</button></Link>
            <Link href='/github'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1.5 font-bold text-white'>Git Hub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="Sorry Some Error Occurred" src={"/vector.jpg"} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
        </div>
      </section>
    </main>
  );
}
