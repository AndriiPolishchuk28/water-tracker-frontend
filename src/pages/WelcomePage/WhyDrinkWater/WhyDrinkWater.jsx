import {
  WhyDrinkContainer,
  WhyDrinkTitle,
  WhyDrinkUl,
  WhyDrinkLi,
  Dot,
  Reason,
} from './WhyDrinkWater.styled';

const WhyDrinkWater = () => {
  return (
    <WhyDrinkContainer>
      <WhyDrinkTitle>Why drink water</WhyDrinkTitle>
      <WhyDrinkUl>
        <WhyDrinkLi>
          <Dot></Dot>
          <Reason>Supply of nutrients to all organs</Reason>
        </WhyDrinkLi>
        <WhyDrinkLi>
          <Dot></Dot>
          <Reason>Providing oxygen to the lungs</Reason>
        </WhyDrinkLi>
        <WhyDrinkLi>
          <Dot></Dot>
          <Reason>Maintaining the work of the heart</Reason>
        </WhyDrinkLi>
        <WhyDrinkLi>
          <Dot></Dot>
          <Reason>Release of processed substances</Reason>
        </WhyDrinkLi>
        <WhyDrinkLi>
          <Dot></Dot>
          <Reason>Ensuring the stability of the internal environment</Reason>
        </WhyDrinkLi>
        <WhyDrinkLi>
          <Dot></Dot>
          <Reason>Maintaining within the normal temperature</Reason>
        </WhyDrinkLi>
        <WhyDrinkLi>
          <Dot></Dot>
          <Reason>
            Maintaining an immune system capable of resisting disease
          </Reason>
        </WhyDrinkLi>
      </WhyDrinkUl>
    </WhyDrinkContainer>
  );
};

export default WhyDrinkWater;
