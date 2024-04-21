import { BallTriangle } from 'react-loader-spinner';
import { createPortal } from 'react-dom';

const loaderModal = document.querySelector('#loadermodal-root');

const Loader = () => {
  return createPortal(
    <BallTriangle
      height="80"
      width="80"
      radius="10"
      color="var(--primary-color-blue)"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(28, 28, 28, 0.3)',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />,
    loaderModal
  );
};

export default Loader;
