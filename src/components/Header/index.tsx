import {
  getTotalItemsCart, openModal
} from "@/slices/products";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import CartImage from "../../../public/Vector.svg";
import { CartContent, Container, SecundaryText, Texts, Title } from "./styles";

export function Header() {
  const dispatch = useDispatch();
  const totalItemsCart = useSelector(getTotalItemsCart);

  function openCart() {
    dispatch(openModal(true));
  }

  return (
    <Container>
      <Texts>
        <Title>MKS</Title>
        <SecundaryText>
          <p>Sistemas</p>
        </SecundaryText>
      </Texts>

      <CartContent onClick={openCart}>
        <Image
          src={CartImage}
          alt="logo do carrinho de compra"
          width={19}
          height={18}
        />

        <span>{totalItemsCart}</span>
      </CartContent>
    </Container>
  );
}
