import React from 'react';
import {View} from 'react-native';
import AppMediaView from '../AppMediaView';
import {AppColors} from '../../constants/ColorSkin';
import AppContentText from '../AppContentText';
import AppButton from '../AppButton';
import {AppIcons} from '../../constants/AppIcons';
import AppListTileProps from './type';

/**
 *
 * @author longnp
 * @param {AppListTileProps} props
 * @returns
 */

function AppListTile(props) {
    const { contentAlign, mediaUri, title, subTitle, textButton } = props;

    switch (contentAlign) {
        case 'center':
            return (
                <View
                  style={{
                    backgroundColor: AppColors.background.grey1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 64,
                    paddingHorizontal: 12,
                  }}>
                  {mediaUri && Array.isArray(mediaUri) && mediaUri.length > 3 &&
                  <View
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                      width: '16%',
                    }}>
                    <AppMediaView
                      size={24}
                      borderRadius={24}
                      mediaUri={mediaUri[0]}
                    />
                    <AppMediaView
                      size={24}
                      borderRadius={24}
                      mediaUri={mediaUri[1]}
                    />
                  </View>}
                  <View
                    style={{
                      flex: 1,
                        
                    }}>
                    <AppContentText
                      titleStyle={{
                        fontSize: 16,
                        color: AppColors.typography.title,
                      }}
                      titleContent={title}
                      subTitleContent={subTitle}
                    />
                    </View>
                    {mediaUri && Array.isArray(mediaUri) && mediaUri.length > 3 &&
                    <View
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: '16%',
                      }}>
                      <AppMediaView
                        size={24}
                        borderRadius={24}
                        mediaUri={mediaUri[2]}
                      />
                      <AppMediaView
                        size={24}
                        borderRadius={24}
                        mediaUri={mediaUri[3]}
                      />
                    </View>}
                </View>
                  
              );
        default:
            return (
                <View
                  style={{
                    backgroundColor: AppColors.background.grey1,
                    flexDirection: contentAlign === 'right' ? 'row-reverse' : 'row',
                    height: 64,
                    paddingHorizontal: 12,
                  }}>
                  {mediaUri && <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <AppMediaView
                      size={32}
                      borderRadius={32}
                      mediaUri={mediaUri || mediaUri[0]}
                    />
                  </View>}
                  <View
                    style={{
                      flex: 1,
                      flexDirection: contentAlign === 'right' ? 'row-reverse' : 'row',
                      justifyContent: 'space-between',
                      paddingLeft: 12,
                    }}>
                    <AppContentText
                      titleStyle={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: AppColors.typography.title,
                      }}
                      subTitleStyle={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: AppColors.typography.subtitle
                      }}
                      titleContent={title}
                      subTitleContent={subTitle}
                    />
                    <View
                      style={{
                        justifyContent: 'center',
                      }}>
                      <AppButton
                        backgroundColor={AppColors.background.grey1}
                        title={textButton}
                        icon={AppIcons.arrow_calendar_right}
                        size={16}
                        isReverse
                        textStyle={{
                          color: AppColors.typography.title,
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                        borderStyle={{
                          borderWidth: 0,
                        }}
                      />
                    </View>
                  </View>
                </View>
              );
    }
}

export default AppListTile;
