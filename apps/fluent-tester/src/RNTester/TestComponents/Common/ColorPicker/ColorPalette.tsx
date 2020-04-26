import * as React from 'react';
import { IColorPickerColor } from './ColorPicker.props';
import { Stack } from '@fluentui-react-native/stack';

export interface IColorPaletteProps {
  initialColor?: IColorPickerColor;
  onColorSelected?: (color: IColorPickerColor) => void;
}

// const standardColors: string[] = ['red', 'green', 'blue', 'black'];

export const ColorPalette: React.FunctionComponent<IColorPaletteProps> = (props: IColorPaletteProps) => {
  // const { initialColor, onColorSelected } = props;

  return <Stack>

  </Stack>>
};
