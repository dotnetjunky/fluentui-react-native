import * as React from 'react';
import { View } from 'react-native';
import { Separator } from '../../../components/Separator';
import { TextWin32 } from '@office-iss/react-native-win32';
import { styles } from './styles';
import { StandardUsage } from './StandardUsage';

export const PersonaTest: React.FunctionComponent<{}> = () => {
  return (
    <View>
      <TextWin32 style={styles.section}>Standard Usage</TextWin32>
      <Separator />
      <StandardUsage />

      <TextWin32 style={styles.section}>Customize Usage</TextWin32>
      <Separator />
      {/* <CustomizeUsage /> */}
    </View>
  );
};