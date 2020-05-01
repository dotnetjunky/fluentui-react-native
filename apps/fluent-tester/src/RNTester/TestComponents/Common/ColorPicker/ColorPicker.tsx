import * as React from 'react';
import { Callout } from '@fluentui-react-native/callout';

export interface IColorPickerProps {
  target?: React.RefObject<React.Component>;
  initialColors?: string;
  onColorSelected?: (color: string) => void;
}

export const ColorPicker: React.FunctionComponent<IColorPickerProps> = (props: IColorPickerProps) => {
  const { target } = props;

  return <Callout target={target} />;
};
