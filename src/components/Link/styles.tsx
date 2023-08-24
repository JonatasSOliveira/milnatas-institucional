import styled, {css} from 'styled-components'
import { Link as GatsbyLink } from "gatsby"
import { NEUTRAL_COLOR_02 } from '../../styles/colors'

const sharedStyle = css`
    border: 1px solid ${NEUTRAL_COLOR_02};
    border-radius: 12px;
    gap: 10px;
    padding: 1rem;
    width: calc(75% - 1rem);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${NEUTRAL_COLOR_02};
    font-weight: bold;
    font-family: 'Josefin Sans';
    font-size: 1.2rem;
    line-height: 0;
`

export const Anchor = styled.a`${sharedStyle}`

export const Link = styled(GatsbyLink)`${sharedStyle}`