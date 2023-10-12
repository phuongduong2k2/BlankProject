import {useState} from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import AppListTile from '../AppListTile';
import { AppIcons } from '../../constants/AppIcons';
import AppExtensionItemProps from './type';

/**
 * 
 * @param {AppExtensionItemProps} props 
 * @returns 
 */
function AppExpansionItem(props) {
    const { data } = props;
    const [isShow, setIsShow] = useState(false)
    const renderItem = ({item}) => {
        return (
            <View><Text>{item.title}</Text></View>
        )
    }
  return (
    <View>
        <Pressable
            onPress={() => {
                setIsShow(isShow => !isShow);
            }}
        >
            <AppListTile
              contentAlign="left"
              mediaUri={'https://avatars.githubusercontent.com/u/114985376?v=4'}
              title="Content title"
              // subTitle='Student'
              // textButton='Change action view'
              iconButton={AppIcons.arrow_up}
            />
        </Pressable>
        {isShow && <FlatList
            data={data}
            renderItem={renderItem}
        />}
    </View>
  );
}

export default AppExpansionItem;
