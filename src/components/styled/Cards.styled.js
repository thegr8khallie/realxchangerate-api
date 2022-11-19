import styled from "styled-components";

export const StyledCards = styled.section`
  padding: 0 12rem;
  background-color: #f1f5f9;
  width: 100vw;
  ul {
    background-color: transparent;
    display: flex;
    width: 100%;
    justify-content: space-between;
    transform: translateY(-10rem);
  }
  li {
    background-color: #f8fafc;
    width: 38rem;
    border-radius: 0.8rem;
    padding: 4rem;
    height: 38rem;
  }
  div {
    height: 6rem;
    width: 6rem;
    border-radius: 0.8rem;
    padding: 1rem;
    margin-bottom: 2.4rem;
  }
  h6 {
    font-size: 1.8rem;
    margin-bottom: 2.4rem;
  }
  .icon1 {
    background-color: #ffbfb280;
  }
  .icon2 {
    background-color: #e6efff;
  }
  .icon3 {
    background-color: #c3f2df;
  }
  @media only screen and (max-width: 87rem) {
    padding: 0 8rem;
    background-color: #fff;
    ul {
      transform: translateY(-10rem);
    }
    li {
      padding: 4rem 2.4rem;
      width: auto;
      flex-basis: 30%;
      height: auto;
    }
  }
  @media only screen and (max-width: 1170px) {
    ul {
      flex-direction: column;
      gap: 2.4rem;
    }
    li {
      width: 100%;
      max-width: 80rem;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 42rem) {
    padding: 2.4rem 2rem 0 2rem;
    background-color: #f1f5f9;
    ul {
      flex-direction: column;
      transform: translateY(-10.9rem);
      gap: 2.4rem;
    }
    li {
      flex-basis: 100%;
      padding: 2.4rem;
    }
  } ;
`;
