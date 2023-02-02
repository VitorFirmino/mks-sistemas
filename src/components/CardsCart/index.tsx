import {
  decrementQuantity,
  incrementQuantity, removeFromCart
} from "@/slices/products";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  BoxPrice,
  BoxQuantity,
  ButtonQuantity,
  CardItems,
  CardTitle,
  Container,
  ContentCards,
  DecrementButton,
  DeleteCard,
  IncrementeButton,
  QuantityName
} from "./styles";

interface Ipros {
  id: number;
  photo: string;
  name: string;
  price: number;
  quantity: number;
}

export function CardCart({ id, photo, name, price, quantity }: Ipros) {
  const dispatch = useDispatch();

  function decrementCart() {
    dispatch(decrementQuantity(id));
  }

  function incrementCart() {
    dispatch(incrementQuantity(id));
  }

  function removeItem() {
    dispatch(removeFromCart(id));
  }

  return (
    <Container>
      <DeleteCard onClick={removeItem}>
        <p>X</p>
      </DeleteCard>
      <ContentCards>
        <Image src={photo} alt={name} width={46} height={57} />

        <CardTitle>{name}</CardTitle>

        <CardItems>
          <BoxQuantity>
            <QuantityName>Qtd:</QuantityName>
            <ButtonQuantity>
              <DecrementButton type="button" onClick={decrementCart}>
                -
              </DecrementButton>
              <span>{quantity}</span>
              <IncrementeButton type="button" onClick={incrementCart}>
                +
              </IncrementeButton>
            </ButtonQuantity>
          </BoxQuantity>

          <BoxPrice>R${price}</BoxPrice>
        </CardItems>
      </ContentCards>
    </Container>
  );
}
