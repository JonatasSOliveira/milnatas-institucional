import React from 'react'
import { Container } from './styles'

interface LinkContaierProps {
    url: string,
    message: string
}

const LinkContainer: React.FC<LinkContaierProps> = ({ url, message }) => {
    return (
        <Container href={url} target='_blank'>
            {message}
        </Container>
    )
}

export default LinkContainer
