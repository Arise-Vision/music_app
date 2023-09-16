import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import vibes from "@/img/vibes.png";

export default function LandingPage () {
  return (
    <div className="bg-[#191919] h-full px-20 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="p-1">
          <Image src={"/logo.png"} width={70} height={70} alt={"Logo"} />
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="#" className="text-white">
            Home
          </Link>
          <Link href={"#"} className="text-white">
            Your playlist
          </Link>
          <Link href="#" className="text-white">
            Contact us
          </Link>
        </div>
        <div className="relative block">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button className="border border-slate-50 opacity-5 rounded-full">
              <BiSearch />
            </Button>
          </div>
          <input type="text" className="placeholder:italic placeholder:text-slate-400 placeholder:pl-5 block opacity-5 w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." />
        </div>
      </div>
      <div className="flex justify-center items-center -space-x-5">
        <h1 className="text-sky-400 text-8xl font-black italic">
          Banzik
        </h1>
      </div>
      <div className="">
        <div className="">
          <Image src={vibes} alt={"Landing"} />
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-x-3">
              <Link href={"/sign-in"}>
                <Button className="bg-orange-600">Login</Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="bg-orange-500">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
