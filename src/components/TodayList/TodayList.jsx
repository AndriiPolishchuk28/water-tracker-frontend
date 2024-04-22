import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalAddEdit from 'components/ModalWL/ModalAddEdit';
import WaterListModal from 'components/WaterListModal/WaterListModal';
import {
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
import { getWaterPerDayThunk, addWaterRateThunk } from '../../redux/water/operations';
import {selectListWaterOfDay} from '../../redux/water/selectors'



const TodayList = () => {
    const [waterData, setWaterData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch();
    const listWaterOfDay = useSelector(selectListWaterOfDay);
  
    useEffect(() => {
      dispatch(getWaterPerDayThunk());
    }, [dispatch]);
  
    const handleSaveWaterData = (result, time) => {
      const newData = [...waterData, { result, time }];
      setWaterData(newData);
      dispatch(addWaterRateThunk({ value: result, time }));
    };
  
    const handleEditWaterData = (index, result, time) => {
      setSelectedItemIndex(index);
      setIsModalOpen(true);
      setIsEditing(isEditing);
      setIsVisible(true)
    };
  
    const handleDeleteWaterData = index => {
      const newData = waterData.filter((_, i) => i !== index);
      setWaterData(newData);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedItemIndex(null);
    };
  
    const handleSaveData = (result, time) => {
      const newData = [...listWaterOfDay];
      newData[selectedItemIndex] = { result, time };
      setWaterData(newData);
      handleCloseModal();
    };
  
    return (
      <>
        <ModalAddEdit onSave={handleSaveWaterData} />
  
        {waterData.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        <List>
          <Title />
          {waterData.map((item, index) => (
            <ListElem key={index}>
              <ListElemInfoContainer>
                <Icon>
                  <use href={`${sprite}#icon-glass`} />
                </Icon>
                <ResultMl>{item.result}ml</ResultMl>
                <ResultTime>{item.time}</ResultTime>
              </ListElemInfoContainer>
              <ListElemButtonsContainer>
                <ChangeWaterBtn onClick={() => handleEditWaterData(index, item.result, item.time)}>
                  <ChangeBtnIcon>
                    <use href={`${sprite}#icon-edit-pensil`} />
                  </ChangeBtnIcon>
                </ChangeWaterBtn>

                <DeleteWaterBtn onClick={() => handleDeleteWaterData(index)}>
                  <DeleteBtnIcon>
                    <use href={`${sprite}#icon-trash-bin`} />
                  </DeleteBtnIcon>
                </DeleteWaterBtn>
              </ListElemButtonsContainer>
            </ListElem>
          ))}
        </List>
      )}
  
        <Dialog open={isModalOpen} onClose={handleCloseModal} maxWidth="800px">
          <WaterListModal
            onSave={handleSaveData}
            onClose={handleCloseModal}
            result={waterData[selectedItemIndex]?.result}
            time={waterData[selectedItemIndex]?.time}
            title={isEditing ? "Add water" : "Edit the entered amount of water"}
            isVisible={isVisible}
          />
        </Dialog>
      </>
    );
  };
  
  export default TodayList;