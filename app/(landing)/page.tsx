import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex items-center gap-x-3">
        <Link href={"/sign-in"}>
          <Button className="bg-orange-600">Login</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button className="bg-orange-500">Sign Up</Button>
        </Link>
      </div>
    </div>
  )
}
