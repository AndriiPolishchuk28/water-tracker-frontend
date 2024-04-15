import styled from 'styled-components';

export const BgImageWrapper = styled.div`
    background-color: var(--primary-color-white);
    background-image: url(${require('../../assets/@1xmobile-bg-signup.png')}));
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;`

export const AuthHeder = styled.h2`
font-weight: 500;
font-size: 26px;
line-height: 1,23;
color: var(--primary-color-black);
margin-bottom: 16px;
`