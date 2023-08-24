import React from 'react'
import { IconType } from '@react-icons/all-files/lib';
import { Anchor, Link } from './styles'


interface LinkComponentProps {
    url: string,
    message: string,
    icon: IconType,
    color: string,
    blank?: boolean
    internalUrl?: boolean
}

const LinkComponent: React.FC<LinkComponentProps> = ({ url, message, icon: Icon, color, blank, internalUrl }) => (
    !internalUrl ? <Anchor href={url} target={blank ? '_blank' : ''} style={{ backgroundColor: color }}>
        <Icon size={16} />
        {message}
    </Anchor> : <Link to={url} style={{ backgroundColor: color }}>
        <Icon size={16} />
        {message}
    </Link>
)

export default LinkComponent
