import styled from 'styled-components'
import { NEUTRAL_COLOR_02 } from '../../styles/colors'

export const Container = styled.a`
    border: 1px solid ${NEUTRAL_COLOR_02};
    border-radius: 12px;
    padding: 1rem;
    width: calc(75% - 1rem);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    color: ${NEUTRAL_COLOR_02};
`