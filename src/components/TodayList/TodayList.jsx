import React, { useState } from 'react';
import WaterListModal from 'components/WaterListModal/WaterListModal';
import ModalTest from 'components/ModalWL/ModalTest';
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
    ChangeBtnIcon
} from './TodayList.styled';
import sprite from '../../assets/icons/sprite.svg'


const TodayList = () => {
    const [waterData, setWaterData] = useState([]);

    const handleSaveWaterData = (result, time) => {
        setWaterData([...waterData, { result, time }]);
    };

    const handleDeleteWaterData = (index) => {
      const newData = waterData.filter((_, i) => i !== index);
      setWaterData(newData);
  };

    return (
        <>
        <ModalTest onSave={handleSaveWaterData}></ModalTest>
            {/* <WaterListModal onSave={handleSaveWaterData} /> */}
            <List>
                <Title />
                {waterData.map((item, index) => (
                    <ListElem key={index}>
                        <ListElemInfoContainer>
                            <Icon> <use href={`${sprite}#icon-glass`} /> <use href={`${sprite}#`}/> </Icon>
                            <ResultMl>{item.result}ml</ResultMl>
                            <ResultTime>{item.time}</ResultTime>
                        </ListElemInfoContainer>
                        <ListElemButtonsContainer>
                            <ChangeWaterBtn onClick={() => handleDeleteWaterData(index)}><ChangeBtnIcon><use href={`${sprite}#icon-pencil-square`} /></ChangeBtnIcon></ChangeWaterBtn>
                            <DeleteWaterBtn onClick={() => handleDeleteWaterData(index)}><DeleteBtnIcon><use href={`${sprite}#icon-trash`} /></DeleteBtnIcon></DeleteWaterBtn>
                        </ListElemButtonsContainer>
                    </ListElem>
                ))}
                {/* icon-pencil-square */}
            </List>
        </>
    );
};

export default TodayList;
