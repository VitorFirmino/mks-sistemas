import styled from 'styled-components';
import { devices } from '@/styles/breakpoints'
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6.31rem;
  width: auto;
  background-color: var(--main-color);

  @media ${devices.mobileL} {
    height: 48px;
  }
`

export const Texts = styled.div`
  display: flex;
  padding-left: 4.06rem;
  color: var(--white-color);
  
  p {
    line-height: 1.18rem;
  }

  @media ${devices.mobileL} {
    padding-left: 1.25rem;
    bottom: 12px;
    position: relative;
  }

  @media ${devices.mobileS} {
    bottom: 7px;
  }
`
export const Title = styled.p`
  font-weight: 600; 
  font-size: 2.5rem;
  line-height: 1.18rem;
`

export const SecundaryText = styled.div`
  padding-top: 1.5rem;
  padding-left: 0.5rem;

  p {
    font-weight: 300;
    font-size: 1.25rem;
    font-style: normal;
    mix-blend-mode: normal;
  }
`

export const CartContent = styled.div`
  display: flex;
  width: 5.6rem;
  height: 2.8rem;
  margin-right: 5.5rem;
  margin-top: 1.6rem;
  background-color: var(--white-color);
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  

  img {
    margin-left: 0.9rem;
  }

  span {
    margin-right: 1.68rem;
    font-weight: 700;
    line-height: 1.37rem;
    color: var(--black-color);
    
  }


    @media ${devices.mobileL} {
      margin-right: 1.8rem;
      position: relative;
      bottom: 10px;

      img {
        width: 10.98px;
        height: 10.4px;
      }
  }

  @media ${devices.mobileS} {
    bottom: 7px;
  }
`