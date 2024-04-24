import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWaterRateThunk } from '../../../redux/auth/operations';
import {
  ModalWrapper,
  Modalsvg,
  AmountWrapper,
  ModalLabelWater,
  InputWrapperWater,
  ButtonWrapper,
  InputWrapper,
  ModalHeader,
  GenderWrapper,
  ModalParagraphForGirl,
  ModalParagraphForMan,
  ModalSpan,
  ModalInfo,
  FormulaWrapper,
  ModalForm,
  ModalCalc,
  ModalLabel,
  // ModalRadioInput,
  // RadioLabel,
  ModalInput,
  Amount,
  ModalButton,
  WaterIntakeSpan,
} from '../DailyNormaStyled';
import { icons } from '../../../assets';

const DailyModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState('woman');
  const [weight, setWeight] = useState('');
  const [activityTime, setActivityTime] = useState('');
  const [requiredWater, setRequiredWater] = useState(0);
  const [waterToDrink, setwaterToDrink] = useState('');

  const handleWeightChange = event => {
    let weightValue = parseFloat(event.target.value);
    if (isNaN(weightValue)) {
      weightValue = '';
    }
    setWeight(weightValue);
    calculateWaterRate(weightValue, activityTime);
  };

  const handleActivityTimeChange = event => {
    let activityTimeValue = parseFloat(event.target.value);
    if (isNaN(activityTimeValue)) {
      activityTimeValue = 0;
    }
    setActivityTime(activityTimeValue);
    calculateWaterRate(weight, activityTimeValue);
  };

  useEffect(() => {
    calculateWaterRate(gender, weight, activityTime);
  }, [weight, activityTime, gender]);

  const calculateWaterRate = (gender, weight, activityTime) => {
    let waterCalculated = 0;
    if (gender === 'woman') {
      waterCalculated = weight * 0.03 + activityTime * 0.4;
    } else if (gender === 'man') {
      waterCalculated = weight * 0.04 + activityTime * 0.6;
    }
    if (waterCalculated === 0) {
      setRequiredWater(0);
      return;
    }
    setRequiredWater(waterCalculated.toFixed(1));
  };

  const handleInputChange = event => {
    setwaterToDrink(event.target.value);
    let newWaterRate = parseFloat(event.target.value);
    if (isNaN(newWaterRate)) {
      setWeight('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!waterToDrink) return;
    dispatch(updateWaterRateThunk({ amountOfWater: waterToDrink }));
    onClose();
  };

  return (
    <ModalWrapper>
      <ButtonWrapper>
        <ModalHeader>My daily norma</ModalHeader>
        <Modalsvg onClick={onClose}>
          <use href={`${icons}#icon-x-mark`}></use>
        </Modalsvg>
      </ButtonWrapper>
      <FormulaWrapper>
        <ModalParagraphForGirl>
          For girl:<ModalSpan>V=(M*0,03) + (T*0,4)</ModalSpan>
        </ModalParagraphForGirl>
        <ModalParagraphForMan>
          For man:<ModalSpan>V=(M*0,04) + (T*0,6)</ModalSpan>
        </ModalParagraphForMan>
      </FormulaWrapper>
      <ModalInfo>
        * V is the volume of the water norm in liters per day, M is your body
        weight, T is the time of active sports, or another type of activity
        commensurate in terms of loads (in the absence of these, you must set 0)
      </ModalInfo>
      <ModalForm onSubmit={handleSubmit}>
        <ModalCalc>Calculate your rate:</ModalCalc>
        {/* <ModalLabel> */}
          <GenderWrapper>
            <ModalLabel htmlFor="man">
            <input
              id="man"
              type="radio"
              value="man"
              checked={gender === 'man'}
              onChange={() => setGender('man')}
              style={{ marginRight: '8px' }}
            />
            For man
</ModalLabel>
            <ModalLabel htmlFor="woman">
            <input
              id="woman"
              type="radio"
              value="woman"
              checked={gender === 'woman'}
              onChange={() => setGender('woman')}
              style={{ marginRight: '8px' }}
            />
            For woman
            </ModalLabel>
          </GenderWrapper>
        {/* </ModalLabel> */}
        <InputWrapper>
          <ModalLabel>Your weight in kilograms:</ModalLabel>
          <ModalInput 
            type="number"
            value={weight}
            onChange={handleWeightChange}
            placeholder='0'
          />
        </InputWrapper>

        <InputWrapper>
          <ModalLabel>
            The time of active participation in sports or other activities with
            a high physical. load in hours:
          </ModalLabel>
          <ModalInput
            type="number"
            value={activityTime}
            onChange={handleActivityTimeChange}
            placeholder='0'
          />
        </InputWrapper>
        <AmountWrapper>
          <Amount>The required amount of water in liters per day:</Amount>
          <WaterIntakeSpan>{requiredWater} L</WaterIntakeSpan>
        </AmountWrapper>
        <InputWrapperWater>
          <ModalLabelWater>
            Write down how much water you will drink:
          </ModalLabelWater>
          <ModalInput
            required
            type="text"
            value={waterToDrink}
            onChange={handleInputChange}
            min={1}
            max={15000}
          />
        </InputWrapperWater>
        <ModalButton type="submit">Save</ModalButton>
      </ModalForm>
    </ModalWrapper>
  );
};

export default DailyModal;
