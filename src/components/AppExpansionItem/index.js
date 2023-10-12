import {useState, useEffect, useRef} from 'react';
import {View, Pressable, Animated, LayoutAnimation} from 'react-native';
import AppListTile from '../AppListTile';
import {AppIcons} from '../../constants/AppIcons';
import AppExpansionItemProps from './type';
import { AppColors } from '../../constants/ColorSkin';

/**
 * @author longnp
 * @param {AppExpansionItemProps} props
 * @returns
 */
function AppExpansionItem(props) {
  const {dataItem, title, mediaUri} = props;
  const [isShow, setIsShow] = useState(false);

  const onExpansionItem = () => {
    setIsShow(isShow => !isShow);
    LayoutAnimation.easeInEaseOut();
  };

  useEffect(() => {
    Animated.timing(animated, {
      toValue: isShow ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isShow]);

  const animated = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
                  borderTopColor: AppColors.background.grey3,
                  borderTopWidth: 1
                }}
    >
      <Pressable
        onPress={() => {
          onExpansionItem()
        }}>
        <AppListTile
          contentAlign="left"
          mediaUri={mediaUri}
          title={title}
          iconButton={isShow ? AppIcons.arrow_down : AppIcons.arrow_up}
        />
      </Pressable>
      {isShow && (
        <View>
          {dataItem.map((item, index) => {
            return (
              <View
                style={{
                  borderTopColor: AppColors.background.grey3,
                  borderTopWidth: 1
                }}
              >
                <AppListTile
                  key={index}
                  contentAlign="left"
                  title={item.title}
                  textButton={item.action}
                  iconButton={AppIcons.arrow_calendar_right}
                />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

export default AppExpansionItem;
