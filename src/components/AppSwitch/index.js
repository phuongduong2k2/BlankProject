import {useState} from 'react';
import PropTypes from 'prop-types';
import {Pressable, Text, View} from 'react-native';
import {AppColors} from '../../constants/ColorSkin';

AppSwitch.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    hasLabel: PropTypes.bool,
    hasContainLabel: PropTypes.bool,
    isReverse: PropTypes.bool,
    width: PropTypes.number,
    height: PropTypes.number,
};

AppSwitch.defaultProps = {
    width: 44,
    height: 24,
    isReverse: false,
}

function AppSwitch(props) {
    const { onChange, disabled, height, hasLabel, hasContainLabel, isReverse } = props;
    let { width } = props;
    width = hasContainLabel ? 60 : width;
  const [active, setActive] = useState(false);
  
  return (
    <View
        style={{
            flexDirection: isReverse ? 'row-reverse' : 'row',
            alignItems: 'center',
        }}
    >
        <Pressable
            onPress={() =>{
                if (!disabled) {
                    setActive(active => !active);
                    if (onChange) onChange(!active);
                }
            }}
            style={{
                opacity: disabled ? 0.8 : 1
            }}
        >
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: active ? AppColors.primary : AppColors.background.greyLight3,
              borderRadius: height,
              alignItems: 'center',
              justifyContent: (active || hasContainLabel) ? 'flex-start' : 'flex-end',
              flexDirection: (active || !hasContainLabel) ? 'row-reverse' : 'row',
            }}>
            <View
              style={{
                width: height-4,
                height: height-4,
                backgroundColor: 'white',
                borderRadius: height,
                margin: 2,
              }}>
            </View>
            {hasContainLabel && <Text
                    style={{
                        paddingLeft: !isReverse ? 8 : 0,
                        paddingRight: isReverse ? 8 : 0,
                        fontSize: 14,
                        color: 'white',
                    }}
                >{active ? 'ON' : 'OFF'}</Text>}
          </View>
        </Pressable>
        {hasLabel && <Text
            style={{
                paddingLeft: !isReverse ? 8 : 0,
                paddingRight: isReverse ? 8 : 0
            }}
        >{active ? 'ON' : 'OFF'}</Text>}
    </View>
  );
}
export default AppSwitch;
