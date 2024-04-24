import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalAddEdit from 'components/ModalWL/ModalAddEdit';
import WaterListModal from 'components/WaterListModal/WaterListModal';
import {
  ListTitle,
  Title,
  List,
  ListElem,
  ListElemInfoContainer,
  ListElemButtonsContainer,
  Icon,
  ResultMl,
  ResultTime,
  ChangeWaterBtn,
  DeleteWaterBtn,
  DeleteBtnIcon,
  ChangeBtnIcon,
} from './TodayList.styled';
import sprite from '../../assets/icons/sprite.svg';
import Dialog from '@mui/material/Dialog';
import {
  getWaterPerDayThunk,
  addWaterRateThunk,
  deleteWaterThunk,
  updateWaterThunk,
} from '../../redux/water/operations';
import { selectListWaterOfDay } from '../../redux/water/selectors';

const TodayList = () => {
  // const [waterData, setWaterData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const listWaterOfDay = useSelector(selectListWaterOfDay);

  useEffect(() => {
    dispatch(getWaterPerDayThunk());
  }, [dispatch]);

  useEffect(() => {});

  const handleSaveWaterData = (result, time) => {
    // const newData = [...waterData, { result, time }];
    // console.log(newData);
    // setWaterData(newData);
    dispatch(addWaterRateThunk({ value: result, time }));
  };

  const handleEditWaterData = (index, result, time) => {
    setSelectedItemIndex(index);
    setIsModalOpen(true);
    setIsEditing(isEditing);
    setIsVisible(true);
  };

  const handleDeleteWaterData = id => {
    dispatch(deleteWaterThunk(id));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItemIndex(null);
  };

  const handleSaveData = (value, time) => {
    if (selectedItemIndex !== null) {
      const updatedWaterData = {
        _id: listWaterOfDay[selectedItemIndex]._id,
        value,
        time,
      };
      dispatch(updateWaterThunk(updatedWaterData));
      handleCloseModal();
    }
  };

  return (
    <>
      <ListTitle>Today</ListTitle>
      <List>
        <Title />
        {listWaterOfDay?.map((item, index) => (
          <ListElem key={item._id}>
            <ListElemInfoContainer>
              <Icon>
                <use href={`${sprite}#icon-glass`} />
              </Icon>
              <ResultMl>{item.value}ml</ResultMl>
              <ResultTime>{item.time}</ResultTime>
            </ListElemInfoContainer>
            <ListElemButtonsContainer>
              <ChangeWaterBtn
                onClick={() =>
                  handleEditWaterData(index, item.value, item.time)
                }
              >
                <ChangeBtnIcon>
                  <use href={`${sprite}#icon-edit-pensil`} />
                </ChangeBtnIcon>
              </ChangeWaterBtn>

              <DeleteWaterBtn onClick={() => handleDeleteWaterData(item._id)}>
                <DeleteBtnIcon>
                  <use href={`${sprite}#icon-trash-bin`} />
                </DeleteBtnIcon>
              </DeleteWaterBtn>
            </ListElemButtonsContainer>
          </ListElem>
        ))}
      </List>

      <ModalAddEdit onSave={handleSaveWaterData} />

      <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="800px">
        <WaterListModal
          onSave={handleSaveData}
          onClose={handleCloseModal}
          result={listWaterOfDay[selectedItemIndex]?.result}
          time={listWaterOfDay[selectedItemIndex]?.time}
          title={isEditing ? 'Add water' : 'Edit the entered amount of water'}
          isVisible={isVisible}
          initialWater={listWaterOfDay?.[selectedItemIndex]?.value}
        />
      </Dialog>
    </>
  );
};

export default TodayList;
