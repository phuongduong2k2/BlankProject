import {StyleProp, ViewStyle} from 'react-native';

export default interface AppSvgProps {
  /**
   * Nguồn ảnh định dạng svg
   */
  SvgSrc: SVGElement;
  /**
   * Kích thước của ảnh
   */
  size?: number | string | '100%';
  /**
   * Màu chủ đạo của ảnh
   */
  color?: string | 'white';
  /**
   * Style container
   */
  style?: StyleProp<ViewStyle>;
}
