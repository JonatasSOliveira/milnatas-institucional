import styled from 'styled-components'
import { COMPLEMENTARY_COLOR_01, COMPLEMENTARY_COLOR_02, PRIMARY_COLOR } from '../../styles/colors'

export const Container = styled.main`
    background-color: ${PRIMARY_COLOR};
    border: 1px solid ${COMPLEMENTARY_COLOR_01};
    border-radius: 12px;
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Background = styled.div`
    background-color: ${COMPLEMENTARY_COLOR_02};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;