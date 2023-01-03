import { CheckIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const sucess = () => {
  const router = useRouter();
  const { session_id } = router.query;
  return (
    <div>
      <Head>
        <title>Thak you! - Gadgets Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto max-w-xl">
        <Link href="/">
          <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </div>
        </Link>
      </header>

      <main>
        <section className="order-2 mx-auto max-w-xl pb-12 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <Link href="/">
            <div className="relative ml-4 hidden h-16 w-8 cursor-pointer transition lg:inline-flex">
              <Image
                src="https://rb.gy/vsvv2o"
                layout="fill"
                objectFit="contain"
                alt="logo"
              />
            </div>
          </Link>

          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
              <CheckIcon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Order #{session_id?.slice(-5)}{" "}
              </p>
              <h4 className="text-lg">
                Thank you
                {/* {session ? session_id.user?.name?.split("")[0]: "Guest"} */}
              </h4>
            </div>
          </div>
          <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <p>Your order is confirmed</p>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                quod assumenda sequi iusto accusantium dolores?
              </p>
            </div>
            <div className="pt-3 text-sm">
              <p className="font-medium text-gray-600">
                Order tracking number:
              </p>
              <p>CCR0197493</p>
            </div>
          </div>
          <div>
            <p>Order updates</p>
            <p>You'll get shipping and delivery updates by email and text</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default sucess;
