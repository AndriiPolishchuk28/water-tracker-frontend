import React, { useState } from 'react';
import {
    Container,
    ListHeader,
    Title,
    CloseBtn,
    ResultContainer,
    WaterGlass,
    ResultMl,
    ResultTime,
    DataBtnsContainer,
    DataTitle,
    DataResult,
    DataText,
    DataContainer,
    DataBtn,
    LabelMl,
    LabelTime,
    InputMl,
    InputTime,
    SaveContainer,
    SaveResultTxt,
    SaveBtn,
} from './WaterListModal.styled';
import sprite from '../../assets/icons/sprite.svg'


const WaterListModal = ({onSave}) => {

    const [result, setResult] = useState(50);
    const [time, setTime] = useState('05:00')

    const handleChange = (event) => {
      const inputValue = event.target.value; 
      let newValue;
      if(inputValue===''){
        newValue = 0
      } else {
        newValue = parseInt(inputValue, 10);
      }
      setResult(newValue)
    };

    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
    const increment = () => {
        const value = result + 10;
        setResult(value);
    };
    const decrement = () => {
        const value = result - 10;
        if (value >= 0) {
            setResult(value);
        } else {
            setResult(0);
        }
    };
    const handleSave = () => {
        onSave(result, time);
        localStorage.setItem('savedResult', result);
        localStorage.setItem('savedTime', time);
    };

    return (
        <Container>
            <ListHeader>
                <Title>Edit the entered amount of water</Title>
                <CloseBtn />
            </ListHeader>
            <ResultContainer>
                <WaterGlass><use href={`${sprite}#icon-glass`} /></WaterGlass>
                <ResultMl>{`${result}ml`}</ResultMl>
                <ResultTime>{time}</ResultTime>
            </ResultContainer>
            <DataContainer>
                <DataTitle>Correct entered data:</DataTitle>
                <DataText>Amount of water:</DataText>
                <DataBtnsContainer>
                    <DataBtn onClick={decrement} />
                    <DataResult>{`${result}ml`}</DataResult>
                    <DataBtn onClick={increment} />
                </DataBtnsContainer>
            </DataContainer>
            <LabelTime>Recording time:</LabelTime>
            <InputTime type='time' value={time} onChange={handleTimeChange}/>
            <LabelMl>Enter the value of the water used:</LabelMl>
            <InputMl value={result} onChange={handleChange}/>
            <SaveContainer>
                <SaveResultTxt>{`${result}ml`}</SaveResultTxt>
                <SaveBtn onClick={handleSave}>Save</SaveBtn>
            </SaveContainer>
        </Container>
    );
};
export default WaterListModal;



// bundle.js:12751 Uncaught TypeError: onSave is not a function
//     at onSave (main.a592fc74e66fea8a8974.hot-update.js:58:11)
//     at handleSave (bundle.js:686:5)
//     at HTMLUnknownElement.callCallback (bundle.js:12617:18)
//     at Object.invokeGuardedCallbackDev (bundle.js:12661:20)
//     at invokeGuardedCallback (bundle.js:12718:35)
//     at invokeGuardedCallbackAndCatchFirstError (bundle.js:12732:29)
//     at executeDispatch (bundle.js:16876:7)
//     at processDispatchQueueItemsInOrder (bundle.js:16902:11)
//     at processDispatchQueue (bundle.js:16913:9)
//     at dispatchEventsForPlugins (bundle.js:16922:7)