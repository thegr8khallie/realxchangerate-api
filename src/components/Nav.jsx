import { StyledNav } from "./styled/Nav.styled"
import Burger from "../utils/Burger"
import { useState } from "react"

export const Nav = () => {
    const [isClosed, setIsClosed] = useState(false)
    return (
        <StyledNav>
            <h1>Street Rates</h1>
            <ul style={{ display: `${isClosed ? 'flex' : 'none'}` }}>
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
