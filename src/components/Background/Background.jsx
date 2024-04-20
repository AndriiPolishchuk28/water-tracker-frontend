import { useLocation } from 'react-router-dom';

import {
  FirstBgImageWrapper,
  SecondBgImageWrapper,
} from './BackgroundStyled.js';

const Background = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <FirstBgImageWrapper>
      {pathname !== '/home' && <SecondBgImageWrapper />}
    </FirstBgImageWrapper>
  );
};

export default Background;
