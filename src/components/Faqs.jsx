import { useState } from "react"
import { StyledFaqs } from "./styled/Faqs.styled"

export const Faqs = () => {
    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: 'How to get access to the API?',
            isOpen: false,
        },
        {
            id: 2,
            question: 'How does it work?',
            isOpen: false,
        },
        {
            id: 3,
            question: `Can't find what you are looking for?`,
            isOpen: false,
        },
    ])
    const handleReveal = (faq) => {
        setFaqs(faqs.map(j => {
            if (j.id === faq.id && !j.isOpen) {
                return { ...j, isOpen: true }

            } else if (j.id === faq.id && j.isOpen) {
                return { ...j, isOpen: false }
            } else {
                return { ...j, isOpen: false }
            }
        }))
    }
    return (
        <StyledFaqs>
            <h4>Frequently Asked Questions</h4>
            <ul>
                {
                    faqs.map((i) => {
                        return (
                            <li key={i.id} onClick={() => handleReveal(i)}>
                                <div className="reveal-trigger" style={{ transform: `${i.isOpen ? 'rotate(45deg)' : 'rotate(0)'}` }}>
                                    <div></div>
                                    <div></div>
                                </div>
                                <p>{i.question}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledFaqs>
    )
}
