import * as React from 'react';
import { IColorPickerColor } from './ColorPicker.props';
import { Stack } from '@fluentui-react-native/stack';
import { Square } from '../Square';
import { TouchableHighlight } from 'react-native';

export interface IColorPaletteProps {
  initialColor?: string;
  onColorSelected?: (color: IColorPickerColor) => void;
}

const standardColors: string[] = [
  'red',
  'green',
  'blue',
  'black',
  'red',
  'green',
  'blue',
  'black',
  'red',
  'green',
  'blue',
  'black',
  'red',
  'green',
  'blue',
  'black'
];

export const ColorPalette: React.FunctionComponent<IColorPaletteProps> = (props: IColorPaletteProps) => {
  const { onColorSelected } = props;

  return (
    <Stack wrap={true} maxWidth={190} horizontal childrenGap={8}>
      {standardColors.map(c => (
        <TouchableHighlight key={c} onPress={() => onColorSelected && onColorSelected(c)}>
          <Square color={c} />
        </TouchableHighlight>
      ))}
    </Stack>
  );
};
