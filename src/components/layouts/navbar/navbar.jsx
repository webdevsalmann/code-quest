"use client"
import Link from 'next/link';
import { Ilogo } from '@/components/ui/svgs';
import { AlignRight, Ghost, X } from 'lucide-react';
import { useState } from 'react';
import NavigationLinks from './navigation-links';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import LoginButton from './login-button';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className={cn("p-0 container w-full h-16  bg-background md:border-0", (isNavbarOpen && "border-b"))}>
      {/* <nav className="px-[5%] py-2 w-full h-full grid grid-cols-2 md:grid-cols-7 gap-base justify-center items-center"> */}
      <nav className="px-[5%] py-2 w-full h-full flex-between">

        <Link className="w-fit flex-center" href="/">
          <Ilogo className="size-12 text-primary" />
          <span className='sr-only'>webdevsalmann</span>
        </Link>


        {/* <div className="size-8 md:hidden justify-self-end flex-center"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div> */}

        {/* <div className={`col-span-2 md:col-span-5 justify-self-center  ${isNavbarOpen ? 'block' : 'hidden md:block'}`}>
          <ul className={`relative flex-center flex-col gap-xs md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
            <NavigationLinks />
            <li className="md:hidden">
              <ModeToggle />
            </li>
          </ul>
        </div> */}

        <div className="flex gap-base">
          <LoginButton />

          <ModeToggle />
        </div>
      </nav>
    </div>
  )
}
