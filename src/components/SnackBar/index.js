import React, { createRef, useEffect, useRef, useState } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import { AppDimentions, SnackBarStatus } from "../../constants/constants";
import { AppIcons } from "../../constants/AppResource";

const ref = createRef();

const SnackBar = () => {
  const [state, setState] = useState({
    isVisible: false,
    status: SnackBarStatus.default,
    isSoft: false,
  });
  const [title, setTitle] = useState("");
  const [onPress, setOnPress] = useState(() => () => {});
  const [textIconBtn, setTextIconBtn] = useState(undefined);

  const [timer, setTimer] = useState(0);

  const [primaryColor, setPrimaryColor] = useState("white");

  const iCount = useRef(0);

  const animated = useRef(new Animated.Value(0)).current;

  const initialState = (data) => {
    const { title, isSoft, duration, textIconBtn, func, status, primaryColor } =
      data;
    setTimer(duration);
    setTextIconBtn(textIconBtn);
    setTitle(title);
    setState({
      isVisible: true,
      status: status,
      isSoft: isSoft,
    });
    setPrimaryColor(primaryColor);
    setOnPress(() => func);
  };

  useEffect(() => {
    ref.current = {
      success: (data) => {
        initialState({
          ...data,
          status: SnackBarStatus.success,
          primaryColor: "rgba(46, 181, 83, 1)",
        });
      },
      error: (data) => {
        initialState({
          ...data,
          status: SnackBarStatus.error,
          primaryColor: "rgba(245, 34, 45, 1)",
        });
      },
      warning: (data) => {
        initialState({
          ...data,
          status: SnackBarStatus.warning,
          primaryColor: "rgba(250, 140, 22, 1)",
        });
      },
      info: (data) => {
        initialState({
          ...data,
          status: SnackBarStatus.info,
          primaryColor: "rgba(24, 144, 255, 1)",
        });
      },
      default: (data) => {
        initialState({
          ...data,
          status: SnackBarStatus.default,
          primaryColor: "rgba(38, 38, 38, 1)",
        });
      },
    };
  }, []);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      iCount.current = timer;
      interval = setInterval(() => {
        iCount.current -= 100;
        setTimer(iCount.current);
        if (iCount.current <= 0) {
          setState({ ...state, isVisible: false });
          setTimer(0);
          return;
        }
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  useEffect(() => {
    if (state.isVisible) {
      Animated.timing(animated, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        iCount.current = 0;
        setTimer(iCount.current);
        setOnPress(() => () => {});
      });
    }
  }, [state.isVisible]);

  const _renderImage = (isSoft) => {
    let icon = null;
    switch (state.status) {
      case SnackBarStatus.error:
        icon = !isSoft
          ? AppIcons.icSnackError.filled
          : AppIcons.icSnackError.normal;
        break;
      case SnackBarStatus.success:
        icon = !isSoft
          ? AppIcons.icSnackSuccess.filled
          : AppIcons.icSnackSuccess.normal;
        break;
      case SnackBarStatus.warning:
        icon = !isSoft
          ? AppIcons.icSnackWarning.filled
          : AppIcons.icSnackWarning.normal;
        break;
      case SnackBarStatus.info:
        icon = !isSoft
          ? AppIcons.icSnackInfo.filled
          : AppIcons.icSnackInfo.normal;
        break;
      default:
        icon = !isSoft
          ? AppIcons.icSnackDefault.filled
          : AppIcons.icSnackDefault.normal;
        break;
    }
    return <Image source={icon} style={{ resizeMode: "contain" }} />;
  };

  const _renderInsideButton = () => {
    if (typeof textIconBtn === "string") {
      return state.isSoft ? (
        <Text style={{ color: primaryColor, fontWeight: "400" }}>
          {textIconBtn}
        </Text>
      ) : (
        <Text style={{ color: "white", fontWeight: "400" }}>{textIconBtn}</Text>
      );
    } else {
      return <Image source={6} style={{ resizeMode: "contain" }} />;
    }
  };

  return (
    <Animated.View
      style={{
        width: "100%",
        position: "absolute",
        bottom: -50,
        transform: [
          {
            translateY: animated.interpolate({
              inputRange: [0, 1],
              outputRange: [10, -100],
              extrapolate: "clamp",
            }),
          },
        ],
        paddingHorizontal: AppDimentions.mainPadding,
      }}
    >
      <View
        style={{
          width: "100%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          backgroundColor: "black",
          shadowOpacity: 0.39,
          shadowRadius: 8.3,
          elevation: 13,
          backgroundColor: state.isSoft ? "white" : primaryColor,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: AppDimentions.secondPadding,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: AppDimentions.secondPadding,
            flex: 1,
          }}
        >
          {_renderImage(state.isSoft)}
          <Text
            style={{
              color: state.isSoft ? primaryColor : "white",
              marginLeft: AppDimentions.secondPadding - 4,
              fontWeight: "400",
              flex: 1,
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>

        {textIconBtn && (
          <TouchableOpacity
            style={{
              height: "100%",
              maxWidth: "30%",
              width:
                typeof textIconBtn === "string"
                  ? textIconBtn.length * 7 + AppDimentions.secondPadding * 2
                  : undefined,
              aspectRatio: typeof textIconBtn === "string" ? undefined : 1,
              justifyContent: "center",
            }}
            onPress={() => {
              setState({
                ...state,
                isVisible: false,
              });
              onPress();
            }}
          >
            <View
              style={{
                position: "absolute",
                right: AppDimentions.secondPadding,
              }}
            >
              {_renderInsideButton()}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};

export default SnackBar;

export const SnackBarUtils = {
  success: (data) => {
    if (ref.current) {
      ref.current.success(data);
    }
  },
  error: (data) => {
    if (ref.current) {
      ref.current.error(data);
    }
  },
  warning: (data) => {
    if (ref.current) {
      ref.current.warning(data);
    }
  },
  info: (data) => {
    if (ref.current) {
      ref.current.info(data);
    }
  },
  default: (data) => {
    if (ref.current) {
      ref.current.default(data);
    }
  },
};
