import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button/Button";
import CheckoutProduct from "../components/CheckoutProduct/CheckoutProduct";
import Header from "../components/Header/Header";
import { selectCartItems } from "../redux/cartSlice";

type Props = {};

const Checkout = (props: Props) => {
  const items = useSelector(selectCartItems);
  const router = useRouter();
  const [groupedItemsInCart, setGroupedItemsInCart] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInCart(groupedItems);
  }, [items]);
  return (
    <div>
      {" "}
      <Head>
        <title>Cart - Gadgets Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div>
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0
              ? "Review your bag."
              : "Your bag is empty, continue shopping..."}
          </h1>
          <p className="my-4">Free delivery nationwide</p>
          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>
        {items.length > 0 && (
          <div>
            {Object.entries(groupedItemsInCart).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
