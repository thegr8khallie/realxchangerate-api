import { StyledNav } from "./styled/Nav.styled"
import Burger from "../utils/Burger"
import { useEffect, useState } from "react"

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
