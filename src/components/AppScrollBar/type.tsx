import { StyleProp, ViewStyle } from "react-native";

export default interface AppScrollBarProps {
    /**
     * Tieu de
     */
    title: string;
    /**
     * style cua component
     */
    style: StyleProp<ViewStyle>;
    isHorizontal?: boolean | undefined;
}