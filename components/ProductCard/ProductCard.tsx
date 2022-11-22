import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { urlFor } from "../../sanity";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to basket`, {
      position: "bottom-center",
      // className: "bg text-white",
      style: {
        background: "#35383c",
        color: "#fff",
      },
    });
  };
  return (
    <div
      className="flex h-fit w-[300px] select-none flex-col space-y-3 rounded-xl 
    bg-[#35383c] p-8 md:h-[400px] md:w-[350px] md:p-10 "
    >
      <div className="relative h-64 w-full md:h-72 ">
        <Image
          src={urlFor(product.image[0]).url()}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl xl:text-lg">
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>

        <div
          className="primary-gradient flex h-14 w-14 flex-shrink-0 cursor-pointer items-center justify-center rounded-full md:h-[70px] md:w-[70px] xl:h-[55px] xl:w-[55px]"
          onClick={addItemToBasket}
        >
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
