
import { devices } from "@/styles/breakpoints";
import styled from "styled-components";

export const Container = styled.div`
  width: 486px;
  height: 100vh;
  background-color: var(--main-color);
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  

  @media ${devices.mobileL} {
    width: 373px;
  }
  
  @media ${devices.mobileM} {
    width: 322px;
  }

  @media ${devices.mobileS} {
    width: 275px;
  }
  `

export const HeaderCart = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: 47px;
  margin-bottom: 40px;

  h2 {
    width: 180px;
    color: var(--white-color);
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
  }

  span {
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black-color);
    margin-top: 39px;
    border-radius: 20px;
    margin-right: 22px;
    cursor: pointer;

    p {
      font-weight: 400;
      font-size: 28px;
      line-height: 15px;
      color: var(--white-color);
    }
  }

  @media ${devices.mobileL} {
    margin-left: 27px;
    margin-bottom: 10px;
  }
`

export const CardsBox = styled.div`
  max-height: 60vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.6em;
    background-color: var(--scrollbar-color);
    border-radius: 0.3em;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--black-color);
    border-radius: 0.3em;
  }
  
  &::-webkit-scrollbar-track {
   
    background-color: var(--scrollbar-color);
    border-radius: 0.3em;
  }


  @media ${devices.laptopL} {
    max-height: 40vh;
  }

  @media ${devices.mobileL} {
    max-height: 55vh;
  }
`

export const TotalCart = styled.div`
  color: var(--white-color);
  margin: 0px 47px;
  display: flex;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  position: absolute;
  bottom: 111px;

  span {
    position: relative;
    top: 29px;
    left: 220px;
  }

  @media ${devices.mobileL} {
    bottom: 70px;
    span {
      left: 100px;

    }
  }

  @media ${devices.mobileM} {
    span {
      left: 70px;

    }
  }

  @media ${devices.mobileS} {
    margin: 0px 35px;
    span {
      left: 40px;

    }
  }
`

export const FinishButton = styled.button`
  border: none;
  background-color: var(--black-color);
  color: var(--white-color);
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  width: 100%;
  height: 97px;
  margin-top: 45px;
  position: absolute;
  bottom: 0;

  @media ${devices.mobileL} {
    height: 65px;
  }
`