import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.png";
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { data: session, status } = useSession();

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  const router = useRouter()

  return (
    <nav className="fixed w-full h-14 p-4 bg-[#0e0e10] z-10 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex-1 flex items-center">
        <Link href="/">
          <a className="flex w-[36px] h-[36px] z-20">
            <Image src={Logo} alt="twitch logo" width={36} height={36} />
          </a>
        </Link>
        <button className="flex mx-4 font-bold hover:text-[#9147ff]">
          Browse
        </button>
        {/* Main Dropdown Menu from Headless UI */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex mx-4 text-xl hover:opacity-70">
            <BsThreeDotsVertical />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-4 mt-2 w-56 origin-top-right  rounded-md bg-[#0e0e10] shadow-lg ring-1 ring-white ring-opacity-10 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`block px-4 py-2 text-sm ${
                        active && "bg-gray-500"
                      }`}
                      href="#"
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`block px-4 py-2 text-sm ${
                        active && "bg-gray-500"
                      }`}
                      href="#"
                    >
                      Support
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`block px-4 py-2 text-sm ${
                        active && "bg-gray-500"
                      }`}
                      href="#"
                    >
                      License
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {/* Middle Side */}
      <div className="flex-[2] hidden md:flex">
        <div className="max-w-[400px] w-full flex justify-between items-center bg-gray-500 p-2 mx-auto rounded-2xl">
          <input
            className="flex-1 bg-transparent border-none outline-none"
            type="text"
            name="Search"
            placeholder="Search"
          />
          <span className="cursor-pointer">
            <BsSearch />
          </span>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 hidden sm:flex justify-end items-center">
        {status === "authenticated" ? (
          <>
            <Link href="/account" passHref>
              <a className="mr-4 font-medium rounded-lg">
                Welcome, {session.user.name.split(" ")[0]}
              </a>
            </Link>
            {/* User Dropdown Menu from Headless UI */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex text-xl hover:opacity-70">
                <Image className="rounded-full" src={session.user.image} alt="avatar" width={36} height={36} />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right  rounded-md bg-[#0e0e10] shadow-lg ring-1 ring-white ring-opacity-10 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-2 text-sm ${
                            active && "bg-gray-500"
                          }`}
                          href="/account"
                        >
                          Account
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <span
                          className={`block px-4 py-2 text-sm ${
                            active && "bg-gray-500"
                          }`}
                          onClick={() => signOut()}
                        >
                          Sign out
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-2 text-sm ${
                            active && "bg-gray-500"
                          }`}
                          href="#"
                        >
                          Privacy
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <>
            <Link href="/account" passHref>
              <button className="bg-[#7f2aff] hover:bg-[#9c59ff] px-4 py-[6px] mr-2 font-bold rounded-lg">
                Account
              </button>
            </Link>
            <button className="text-2xl hover:opacity-70" onClick={() => router.push("/account")}>
              <AiOutlineUser />
            </button>
          </>
        )}
      </div>
      {/* Mobile Menu */}
      <button
        className="block sm:hidden text-2xl hover:opacity-70 z-30"
        onClick={toggleMobileMenu}
      >
        {mobileMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div
        className={`fixed ${
          mobileMenu ? "top-0" : "top-[-100%]"
        } left-0 flex sm:hidden justify-center items-center w-full h-screen bg-[#0e0e10] z-10 duration-300 ease-in`}
      >
        <ul className="text-center">
          <li className="p-4 text-3xl font-bold">
            <Link href="/">
              <a className="hover:opacity-70" onClick={toggleMobileMenu}>
                Home
              </a>
            </Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/#live">
              <a className="hover:opacity-70" onClick={toggleMobileMenu}>
                Live Channels
              </a>
            </Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/#categories">
              <a className="hover:opacity-70" onClick={toggleMobileMenu}>
                Top Categories
              </a>
            </Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/account">
              <a className="hover:opacity-70" onClick={toggleMobileMenu}>
                Account
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
