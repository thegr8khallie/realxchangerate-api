import styled from "styled-components";

export const StyledNav = styled.nav`
  padding: 0 12rem;
  height: 10rem;
  width: 100vw;
  background-color: #f8fafc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 3.6rem;
    color: #00296b;
    font-weight: 700;
  }
  ul {
    display: flex;
    gap: 4.4rem;
  }
  li {
    color: #94a3b8;
  }
  @media only screen and (max-width: 76.8rem) {
    height: 5.6rem;
    padding: 0 8rem 0 9rem;
    h1 {
      font-size: 2.8rem;
    }
    ul {
      gap: 3.6rem;
    }
    li {
      font-size: 1.4rem;
    }
    li:nth-child(3) {
      display: none;
    }
  }
  @media only screen and (max-width: 42rem) {
    background-color: #00296b;
    padding: 0 3.1rem 0 1.6rem;
    h1 {
      color: #fff;
      font-size: 2.2rem;
    }
    ul {
      display: none;
    }
  }
`;
