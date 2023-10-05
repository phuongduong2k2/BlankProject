import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import AppMediaView from '../AppMediaView'
import { AppColors } from '../../constants/ColorSkin'
import AppContentText from '../AppContentText'
import AppButton from '../AppButton'
import { AppIcons } from '../../constants/AppIcons'

AppListTile.propTypes = {}

function AppListTile(props) {
  return (
    <View
        style={{
            backgroundColor: AppColors.background.grey1,
            flexDirection: 'row',
            height: 64,
            paddingHorizontal: 12,
        }}
    >
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <AppMediaView
              size={32}
              borderRadius={32}
              mediaUri={'https://avatars.githubusercontent.com/u/114985376?v=4'}
            />
        </View>
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 12
            }}
        >
            <AppContentText
                titleStyle={{
                    fontSize: 16,
                    color: AppColors.typography.title
                }}
                titleContent={'Content title'}
                subTitleContent={'Sub title'}

            />
            <View
                style={{
                    justifyContent: 'center',
                }}
            >
                <AppButton
                    backgroundColor={AppColors.background.grey1}
                    // title={'Change action view'}
                    icon={AppIcons.arrow_calendar_right}
                    size={16}
                    isReverse
                    textStyle={{
                        color: AppColors.typography.title,
                        fontSize: 14,
                        fontWeight: 400
                    }}
                    borderStyle={{
                        borderWidth: 0
                    }}
                />
            </View>
        </View>
    </View>
  )
}


export default AppListTile
