import { StyleProp, TextStyle } from "react-native";

export default interface AppListTileProps {
    contentAlign: 'left' | 'right' | 'center';
    mediaUri: string | string[] | undefined;
    title: string | undefined;
    subTitle: string | undefined;
    textButton: string | undefined;
    iconButton: string | undefined;
}
