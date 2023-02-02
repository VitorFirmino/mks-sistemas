
import { devices } from "@/styles/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  width: 379px;
  height: 95px;

  background-color: var(--white-color);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  position: relative;
  margin: 10px auto 28px auto;

  @media ${devices.mobileL} {
    width: 250px;
    height: 220.05px;
  }
`
export const DeleteCard = styled.span`
    width: 18px;
    height: 18px;
    position: absolute;
    right: -8px;
    top: -5px;
    background-color: var(--black-color);
    border-radius: 20px;
    text-transform: lowercase;
    line-height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    cursor: pointer;
    
    p {
      width: 8px;
      height: 17px;
    }

    @media ${devices.mobileL} {
      background-color: var(--white-color);
      position: absolute;
      right: 21px;
      top: 10px;
      
      p {
        font-size: 42px;
        color: var(--black-color);
      }
    }
`

export const ContentCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 19px 23px;

  @media ${devices.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 80px;
      height: 95.1px;
    }
  }
`

export const BoxQuantity = styled.div`
  position: relative;
  top: -10px;
  margin-right: 40px;

  @media ${devices.mobileL} {
    margin-right: 30px;
  }
`

export const CardTitle = styled.div`
  width: 113px;
  height: 33px;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  margin-left: 21px;

  @media ${devices.mobileL} {
    width: 211px;
    font-size: 16px;
    margin-top: 14px;
  }
`

export const CardItems = styled.div`
  display: flex; 
  flex-direction: row; 
  
  @media ${devices.mobileL} {
    margin-top: 10px;
  }
`
export const QuantityName = styled.span`
  font-size: 5px; 
  line-height: 6px;

  @media ${devices.mobileL} {
    display: none;
  }
`



export const ButtonQuantity = styled.div`
  width: 57px;
  height: 19px;
  display: flex;
  background: var(--white-color);
  border: 1px solid var(--button-quantity-color);
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;


  @media ${devices.mobileL} {
    width: 97.37px;
    height: 34.5px;
    display: flex;
    justify-content: space-between;
    
    button {
      font-size: 22px;
    }
    
    span {
      font-size: 20px;
    }
  }
`

export const IncrementeButton = styled.button`
    background-color:  var(--white-color);
    border: none;
    border-left: 1px solid var(--button-quantity-color);


  @media ${devices.mobileL} {
    font-size: 22px;
    padding: 2px 10px;
  }
`

export const DecrementButton = styled.button`
    background-color:  var(--white-color);
    border: none;
    border-right: 1px solid var(--button-quantity-color);


  @media ${devices.mobileL} {
    font-size: 22px;
    padding: 2px 10px;
  }
`


export const BoxPrice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 40px;

  @media ${devices.mobileL} {
    position: relative;
    bottom: 10px;
    padding: 10px 18px;
    background-color: var(--background-price);
    border-radius: 5px;
    color: var(--white-color);

  }
`