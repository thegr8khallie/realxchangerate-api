import { StyledNav } from "./styled/Nav.styled"
import Burger from "../utils/Burger"
import { useEffect, useState } from "react"
import DownArrow from '../assets/DownArrowNav.svg'
import unionJack from '../assets/unionJack.png'


export const Nav = () => {
    const [isClosed, setIsClosed] = useState(false)
    useEffect(() => {
        if (window.innerWidth > 600) {
            setIsClosed(true)
        }
    }, [])
    return (
        <StyledNav>
            <h1>Street Rates</h1>
            <ul style={{ display: `${isClosed ? 'flex' : 'none'}` }}>
                <li><div><img src={unionJack} alt="Union Jack" /></div><div><img src={DownArrow} alt="Down Arrow" /></div></li>
                <li>Home</li>
                <li>Convert</li>
                <li>Currency Profile</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            <Burger isClosed={isClosed} setIsClosed={setIsClosed} />
        </StyledNav>
    )
}
