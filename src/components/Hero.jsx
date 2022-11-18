import { StyledHero } from "./styled/Hero.styled";
import heroImage from '../assets/heroImage.png'

export const Hero = () => {
    return (
        <StyledHero>
            <div className="hero-text">
                <h1>The Most Reliable Currency Data API in the World</h1>
                <p>
                    Our currency exchange rate API offers real-time, precise, and dependable currency exchange data for hundreds of different global currencies and has years of FX and currency knowledge. StreetRate proprietary rates are sourced from financial data providers and central bank.
                </p>
                <button>Get  Started</button>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt='Hero SVG' />
            </div>
        </StyledHero>
    )
}
