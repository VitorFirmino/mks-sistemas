import {
  getProducts,
  getTotalPrice,
  openModal
} from "@/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { CardCart } from "../CardsCart";
import {
  CardsBox,
  Container,
  FinishButton,
  HeaderCart,
  TotalCart
} from "./styles";

export function AddToCart() {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);
  const products = useSelector(getProducts);

  function closeModal() {
    dispatch(openModal(false));
  }

  return (
    <Container>
      <HeaderCart>
        <h2>Carrinho de compras</h2>

        <span onClick={closeModal}>
          <p>X</p>
        </span>
      </HeaderCart>

      <CardsBox>
        {products.length > 0
          ? products.map(({ id, photo, name, price, quantity }) => (
              <CardCart
                key={id}
                id={id}
                photo={photo}
                name={name}
                price={price}
                quantity={quantity}
              />
            ))
          : ""}
      </CardsBox>

      <TotalCart>
        <p>Total:</p>
        <span>R${totalPrice}</span>
      </TotalCart>

      <FinishButton>Finalizar Compra</FinishButton>
    </Container>
  );
}
