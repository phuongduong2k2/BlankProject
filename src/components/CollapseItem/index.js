import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  LayoutAnimation,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { AppIcons } from "../../constants/AppResource";
import PropTypes from "prop-types";
import { AppDimentions } from "../../constants/constants";
import Divider from "../Divider";

CollapseItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  prefixIcon: PropTypes.any,
  suffixIcon: PropTypes.any,
};

CollapseItem.defaultProps = {
  onPress: () => {},
  title: "",
  prefixIcon: AppIcons.icRatingActive,
  suffixIcon: AppIcons.icCollapseItem,
};

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function CollapseItem(props) {
  const { onPress, title, prefixIcon, suffixIcon } = props;
  const [isOpen, setOpen] = useState(false);
  const onCollapseItem = () => {
    onPress();
    setOpen(!isOpen);
    LayoutAnimation.easeInEaseOut();
  };

  useEffect(() => {
    Animated.timing(animated, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const animated = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        width: "100%",
        minHeight: 48,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onCollapseItem}
        style={{
          height: 48,
          width: "100%",
          flexDirection: "row",
          //   backgroundColor: 'red',
          alignItems: "center",
          paddingHorizontal: AppDimentions.mainPadding,
        }}
      >
        <View>
          <Image source={prefixIcon} />
        </View>
        <Text
          style={{
            flex: 1,
            paddingLeft: AppDimentions.thirdPadding,
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {title}
        </Text>
        <Animated.View
          style={{
            transform: [
              {
                rotate: animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "-180deg"],
                }),
              },
            ],
          }}
        >
          <Image source={suffixIcon} />
        </Animated.View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          height: 2,
          width: "100%",
          paddingLeft: isOpen ? AppDimentions.mainPadding : 0,
          top: 46,
        }}
      >
        {isOpen && (
          <Image source={AppIcons.icRatingActive} style={{ opacity: 0 }} />
        )}
        <Divider
          style={{
            flex: 1,
            marginLeft: isOpen ? AppDimentions.thirdPadding : 0,
          }}
        />
      </View>
      {isOpen && (
        <View
          style={{
            paddingHorizontal: AppDimentions.mainPadding,
            flexDirection: "row",
          }}
        >
          <Image source={AppIcons.icRatingActive} style={{ opacity: 0 }} />
          <View
            style={{
              marginLeft: AppDimentions.thirdPadding,
              flex: 1,
            }}
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  height: 40,
                  justifyContent: "center",
                }}
              >
                <Text numberOfLines={1} style={{}}>
                  · Menu item {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

export default CollapseItem;
