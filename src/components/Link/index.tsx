import React from 'react'
import { Container } from './styles'

import { IconType } from '@react-icons/all-files/lib';

interface LinkProps {
    url: string,
    message: string,
    icon: IconType,
    color: string,
    blank?: boolean
}

const Link: React.FC<LinkProps> = ({ url, message, icon: Icon, color, blank }) => (
    <Container href={url} target={blank ? '_blank' : ''} style={{ backgroundColor: color }}>
        <Icon size={16} />
        {message}
    </Container>
)

export default Link
