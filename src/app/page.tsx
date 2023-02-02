"use client";

import { AddToCart } from "@/components/AddToCart";
import { Cards } from "@/components/Cards";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getCart, getOpenModal, setCart } from "@/slices/products";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const openModal = useSelector(getOpenModal);
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const [state, setState] = useLocalStorage("cart", cart);

  useEffect(() => {
    setState(cart);
  }, [cart, setState]);

  useEffect(() => {
    dispatch(setCart(state));
  }, [dispatch, state]);

  return (
    <>
      <Header />
      <Cards />
      {openModal && <AddToCart />}
      <Footer />
    </>
  );
}
export default memo(Home);
