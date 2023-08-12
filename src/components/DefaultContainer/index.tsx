import * as React from "react"
import { Background, Container } from "./styles"

const DefaultContainer: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    return (
        <Background>
            <Container>
                {children}
            </Container>
        </Background>
    )
}

export default DefaultContainer