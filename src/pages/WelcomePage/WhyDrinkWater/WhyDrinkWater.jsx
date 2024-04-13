import {
  WhyDrink,
  Title,
  List,
  Item,
  Dot,
  Reason,
} from './WhyDrinkWater.styled';

const WhyDrinkWater = () => {
  return (
    <WhyDrink>
      <Title>Why drink water</Title>
      <List>
        <Item>
          <Dot></Dot>
          <Reason>Supply of nutrients to all organs</Reason>
        </Item>
        <Item>
          <Dot></Dot>
          <Reason>Providing oxygen to the lungs</Reason>
        </Item>
        <Item>
          <Dot></Dot>
          <Reason>Maintaining the work of the heart</Reason>
        </Item>
        <Item>
          <Dot></Dot>
          <Reason>Release of processed substances</Reason>
        </Item>
        <Item>
          <Dot></Dot>
          <Reason>Ensuring the stability of the internal environment</Reason>
        </Item>
        <Item>
          <Dot></Dot>
          <Reason>Maintaining within the normal temperature</Reason>
        </Item>
        <Item>
          <Dot></Dot>
          <Reason>
            Maintaining an immune system capable of resisting disease
          </Reason>
        </Item>
      </List>
    </WhyDrink>
  );
};

export default WhyDrinkWater;
