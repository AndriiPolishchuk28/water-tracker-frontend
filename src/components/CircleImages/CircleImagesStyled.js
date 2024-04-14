import styled from 'styled-components';

export const CircleImagesWrapper = styled.div`

`;

export const EmptyCircle = styled.img.attrs(({ size = '50px' }) => ({
  style: {
    width: size,
    height: size,
  },
}))`
  border-radius: 50%;
  position: relative;
  top: 50%;
  left: 50%;
`;
