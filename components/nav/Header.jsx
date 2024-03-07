
import Link from "next/link"
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import {ThemeToggler} from "../ThemeToggler"
import { BsEmojiSunglasses } from "react-icons/bs";


const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
      <div className="flex flex-row ">
        <Link href="/" className=" mr-4">
         <BsEmojiSunglasses className="text-3xl"/>
        </Link>
<ThemeToggler/>
</div>

          <nav className="md:flex-between hidden w-full max-w-xs">
            <Navbar />
          </nav>
      

        <div className="flex w-32 justify-end gap-3">
            <MobileNav />
        </div>

      </div>
    </header>
  )
}

export default Header