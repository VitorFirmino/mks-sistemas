
import styled from 'styled-components';
import { devices } from '@/styles/breakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Select = styled.select`
  width: 200px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--button-quantity-color);
  border-radius: 4px;
  appearance: none;
  background-color: var(--white-color);

  &:focus {
    outline: none;
    border-color: var(--main-color);
  }
`;


export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin: 32px auto;

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 525px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  width: 217.56px;
  height: auto;
  background: var(--white-color);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  padding: 0 15px;

  img {
   padding: 18px 53px;
  }
`

export const CardPrice = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64.53px;

  h2 {
    width: 124px;
    height: 38px;
    color: var(--color-text);
    line-height: 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 26px;
    padding: 1px 8px;
    background: var(--background-price);
    border-radius: 5px;
    position: relative;
    top: 13px;
    

    p {
      font-weight: 700;
      line-height: 15px;
      font-size: 15px;
      color: var(--white-color);
    }
  }
`

export const CardInfo = styled.p`
  height: 48px;
  word-wrap: break-word;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: var(--color-text)
`
export const CardButton = styled.button`
  position: relative;
  right: 15px;
  width: 248px;
  height: 31px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 8px 8px;
  background: var(--main-color);

  img {
    position: relative;
    right: 10px;
    bottom: 1px;
  }

  p {
    position: relative;
    right: 60px;
    text-transform: uppercase;
    margin-left: 12px;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--white-color)
  }
`

