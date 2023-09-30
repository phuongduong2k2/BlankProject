import React from 'react';
import SliderContainer from '../SliderContainer';
import CustomSlider from '../CustomSlider';
import PropTypes from 'prop-types';

RangeSlider.propTypes = {};

RangeSlider.defaultProps = {};

function RangeSlider(props) {
  const {} = props;
  return (
    <SliderContainer
      sliderValue={[6, 18]}
      onValueChange={value => {
        console.log('change', value);
      }}>
      <CustomSlider
        animateTransitions
        maximumValue={20}
        minimumValue={4}
        step={1}
        onValueChange={value => {
          console.log(value);
        }}
      />
    </SliderContainer>
  );
}

export default RangeSlider;
