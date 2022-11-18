import { StyledCards } from './styled/Cards.styled';
import padlock from '../assets/padlock.png'
import rocket from '../assets/rocket.png'
import dart from '../assets/dart.png'

export const Cards = () => {
    const cardContent = [
        {
            id: 1,
            icon: rocket,
            heading: 'Swift and Simple Integration',
            body: `Our exchange rate API is built for developers. We make it easy to plug-in to your existing software. You'll receive SDKs for Java, NodeJS, PHP, and Python.`,
        },
        {
            id: 2,
            icon: dart,
            heading: 'Credible and Accurate',
            body: 'To ensure accuracy and authenticity, diversify your FX sources. We provide currency rates from central banks so you can satisfy the legal requirements for financial compliance at your business.',
        },
        {
            id: 3,
            icon: padlock,
            heading: 'Secure and Reliable',
            body: 'A dedicated Internet connection, the GET HTTP technique, the REST protocol, and HTTPS security. Further, we provide fully redundant servers and UTC timestamps.',
        }
    ]
    return (
        <StyledCards>
            <ul>
                {
                    cardContent.map((i) => {
                        return (
                            <li key={i.id}>
                                <div className={`icon${i.id}`}><img src={i.icon} alt={`Card ${i.id}`} /></div>
                                <h6>{i.heading}</h6>
                                <p>{i.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </StyledCards>
    )
}
