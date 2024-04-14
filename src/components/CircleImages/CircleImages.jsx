import React from 'react';
import { CircleImagesWrapper, EmptyCircle } from './CircleImagesStyled';

import emptyCircleImage from '../../assets/images/empty-circle.png';

const CircleImages = () => {
  return (
    <CircleImagesWrapper>
      <EmptyCircle src={emptyCircleImage} size="50px" />
    </CircleImagesWrapper>
  );
};

export default CircleImages;
