import styled, { css } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SettingDiv = styled.div`
padding: 25px;
`

export const SettingTitle = styled.h2`

`

export const PhotoDiv = styled.div`

`

export const SecondTitle = styled.h3`

`

export const UserAvatar = styled.img`

`

export const AvatarLabel = styled.label`

`

export const AvatarInput = styled.input`

`

export const StyledForm = styled(Form)`

`

export const InfoDiv = styled.div`

`


export const InfoLabel = styled.label`

`

export const GenderInput = styled(Field)`

`

export const StyledInput = styled(Field)`
  border: 1px solid
    ${props =>
      props.errors && props.touched === 'true'
        ? css`var(--secondary-color-red)`
        : css`var(--secondary-color-blue-3)`};
`;



export const PassDiv = styled.div`

`

export const PassLabel = styled.label`

`

export const PassInput = styled(Field)`
  border: 1px solid
    ${props =>
      props.errors && props.touched === 'true'
        ? css`var(--secondary-color-red)`
        : css`var(--secondary-color-blue-3)`};
`;

export const SaveBtn = styled.button`
background-color: blue;
width: 50px;
height: 25px;

`

export const CloseBtn = styled.button`

`
export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 12px;
  line-height: 1.25;
  color: var(--secondary-color-red);
`;
