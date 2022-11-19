import styled from "styled-components";

export const StyledHero = styled.section`
  padding: 8.7rem 12rem 19.5rem 12rem;
  background-color: #e6efff;
  width: 100vw;
  display: flex;
  gap: 7rem;
  .hero-text {
    flex-basis: 55%;
  }
  h1 {
    font-size: 4.8rem;
    margin-bottom: 4rem;
    color: #0f172a;
  }
  p {
    color: #555962;
    margin-bottom: 4rem;
    line-height: 2.4rem;
  }
  button {
    padding: 1.4rem 2rem;
    background-color: #0062ff;
    height: 5rem;
    width: 14.3rem;
    border-radius: 0.5rem;
    border: none;
    color: #fff;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 400;
  }
  .hero-image {
    flex-basis: 45%;
  }
  @media only screen and (max-width: 87rem) {
    padding: 8rem 8rem 17.8rem 8rem;
    .hero-text {
      flex-basis: 40%;
    }
    h1 {
      font-size: 3.6rem;
    }
    p {
      width: 55rem;
    }
    .hero-image {
      flex-basis: 50%;
    }
  }
  @media only screen and (max-width: 42rem) {
    padding: 4rem 2rem 13.5rem 2rem;
    flex-direction: column;
    h1 {
      font-size: 2.8rem;
      margin-bottom: 2.4rem;
    }
    p {
      width: 100%;
      margin-bottom: 2.4rem;
    }
    button {
      padding: 1.2rem 1.8rem;
      width: 11.5rem;
      height: 4.4rem;
    }
  }
`;
