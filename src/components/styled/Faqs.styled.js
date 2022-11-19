import styled from "styled-components";

export const StyledFaqs = styled.section`
  padding: 6rem 20rem;
  width: 100vw;
  background-color: #f1f5f9;
  h4 {
    font-size: 2.8rem;
    margin-bottom: 4.3rem;
  }
  li {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    &:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  .reveal-trigger {
    position: relative;
    width: 5rem;
    height: 5rem;
    display: grid;
    place-items: center;
    transition: 0.5s;

    div {
      position: absolute;
      background-color: #0a17a7;
      width: 0.4rem;
      height: 2.4rem;
      border-radius: 0.1rem;

      &:nth-child(1) {
        transform: rotate(90deg);
      }
    }
  }
  @media only screen and (max-width: 87rem) {
    background-color: #fff;
    padding: 6rem 10rem;
  }
  @media only screen and (max-width: 42rem) {
    padding: 4rem 2.4rem;
    background-color: #f1f5f9;
    h4 {
      font-size: 2.2rem;
    }
    li {
      gap: 1.6rem;
    }
  }
`;
