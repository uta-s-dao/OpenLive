"use client";
import Link from "next/link";
import Image from "next/image";
import Live from "../../public/S__23707650.jpg";
import ArtistsList from "./components/ArtistsList"
export default function Home() {
  return (
    <div>
      <h1 className="text-5xl">作成途中</h1>
      <Image src={Live} alt='Live picture' className='' />
      <Link
        className='text-blue-700 underline text-4xl hover:bg-sky-200'
        href='./todo'
      >
        Todo
      </Link>
      <div className="text-green-600 pt-2">
            <div className="text-4xl  text-center">
              <div>Artists</div>
              <ArtistsList/>
              </div>
            <div className="text-4xl  text-center">Time Tables</div>
            <div className="text-4xl  text-center">Map</div>
            <div className="text-4xl  text-center">OutLine</div>
        
      
            
            </div>
      
    </div>
  );
}
