import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cartSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

type Props = {};

const Header = (props: Props) => {
  const { data: session } = useSession();
  const items = useSelector(selectCartItems);
  console.log(session);

  const handleAuth = () => {};

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
              // width="100"
              // height="100"
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center space-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          {" "}
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="primary-gradient absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full text-[10px] text-white">
                {items.length}
              </span>
            )}

            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => {
              signOut();
              toast("You've been logged out");
            }}
          />
        ) : (
          <UserIcon
            className="headerIcon"
            onClick={() => {
              signIn();
              // toast(
              //   `Welcome ${
              //     session ? session.user?.name?.split(" ")[0] : "Guest"
              //   }`
              // );
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
