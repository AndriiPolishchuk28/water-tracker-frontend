import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import { CustomButton } from './ModalWL.styled';

// import { Modalsvg } from 'components/DailyNorma/DailyNormaStyled';
import sprite from '../../assets/icons/sprite.svg';
import { IconBtn } from 'components/WaterListModal/WaterListModal.styled';
const ModalDellWater = ({ id, deleteWater, isModalDell, setIsModalDell }) => {
  const handleClose = () => {
    setIsModalDell(false);
  };

  const handleDelete = () => {
    deleteWater(id);
    handleClose();
  };

  return (
    <Dialog
      open={isModalDell}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          padding: '32px 24px',
          margin: '0 20px',
          width: '592px',
          minHeight: '208px',
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '24px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '26px',
          color: '#2f2f2f',
        }}
      >
        Delete entry
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: '#407bff',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <IconBtn>
            <use href={`${sprite}#icon-close-x`}></use>
          </IconBtn>
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          padding: '0',
          marginBottom: '24px',
          fontSize: '18px',
        }}
      >
        <DialogContentText
          id="alert-dialog-description"
          sx={{
            color: '#2f2f2f',
            fontSize: '18px',
            lineHeight: 1.11,
            fontWeight: 500,
          }}
        >
          Are you sure you want to delete the entry?
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          padding: 0,
          width: 344,
          marginLeft: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          '@media only screen and (max-width: 768px)': {
            flexDirection: 'column',
            gap: '24px',
            marginLeft: '0',
            width: '100%',
          },
        }}
      >
        <CustomButton
          onClick={handleClose}
          color="#407bff"
          backgroundColor="#d7e3ff"
          hoverColor="rgba(64, 123, 255, 0.34)"
        >
          Cancel
        </CustomButton>
        <CustomButton
          onClick={handleDelete}
          color="#fff"
          backgroundColor="#ef5050"
          hoverColor="rgba(239, 80, 80, 0.34)"
        >
          Delete
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDellWater;
