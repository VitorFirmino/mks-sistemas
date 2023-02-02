import { useFetchBreedsQuery } from "@/slices/apiSlice";
import { useState } from "react";
import {
  Card,
  CardButton,
  CardInfo,
  CardPrice,
  Container,
  ContainerCards,
  Select,
  SelectContainer
} from "./styles";

import { addProduct } from "@/slices/products";
import Image from "next/image";
import { useDispatch } from "react-redux";
import iconBag from "../../../public/shopping-bag.svg";
import { Loader } from "../Loading";

export function Cards() {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState<string>("id");
  const { data, isFetching } = useFetchBreedsQuery(selectedValue);

  const addProductToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement;
    const buttonId = Number(button.id);

    const findProduct = data?.products.find((item) => item.id === buttonId);

    if (findProduct) {
      dispatch(addProduct(findProduct));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <SelectContainer>
        <p>Filtrar por:</p>
        <Select name="sortBy" onChange={handleChange}>
          <option value="price">Preço</option>
          <option value="name">Nome</option>
          <option value="id">Relevancia</option>
        </Select>
      </SelectContainer>
      {isFetching && <Loader />}
      <ContainerCards>
        {!isFetching &&
          data?.products.map(({ id, name, photo, price, description }) => (
            <Card key={id}>
              <Image src={photo} alt={name} width={111} height={138} />

              <section>
                <CardPrice>
                  <h2>{name}</h2>
                  <span>
                    <p>R${Number(price).toFixed()}</p>
                  </span>
                </CardPrice>
                <CardInfo>{description}</CardInfo>
              </section>
              <CardButton type="button" onClick={addProductToCart} id={`${id}`}>
                <Image
                  src={iconBag}
                  alt="icone de uma sacola"
                  width={12}
                  height={13.5}
                  id={`${id}`}
                />
                <p id={`${id}`}>Comprar</p>
              </CardButton>
            </Card>
          ))}
      </ContainerCards>
    </Container>
  );
}
