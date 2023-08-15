import React from 'react'
import { Container } from './styles'

import { IconType } from '@react-icons/all-files/lib';

interface LinkContainerProps {
    url: string,
    message: string,
    icon: IconType,
    color: string,
}

const LinkContainer: React.FC<LinkContainerProps> = ({ url, message, icon: Icon, color }) => {
    return (
        <Container href={url} target='_blank' style={{ backgroundColor: color }}>
            <Icon />
            {message}
        </Container>
    )
}

export default LinkContainer
