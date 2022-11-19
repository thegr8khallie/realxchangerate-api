import styled from "styled-components";
import bg from "../../assets/bg.png";

export const StyledBenefits = styled.section`
  width: 100vw;
  padding: 6rem 12rem;
  background: linear-gradient(
      0deg,
      rgba(245, 246, 248, 0.3),
      rgba(245, 246, 248, 0.3)
    ),
    url(${bg});
  height: 65rem;
  background-position: center;
  background-size: cover;
  position: relative;
  div {
    padding: 6rem 4rem;
    background-color: #f8fafc;
    width: 48rem;
    border-radius: 0.8rem;
    margin: auto 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  h5 {
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }
  @media only screen and (max-width: 87rem) {
    padding: 6rem 8rem;
  }
  @media only screen and (max-width: 42rem) {
    padding: 4rem 2rem;
    height: 56rem;
    div {
      padding: 2.4rem;
      width: 100%;
      position: static;
      transform: translateY(0);
    }
    h5 {
      font-size: 1.8rem;
    }
  }
`;
