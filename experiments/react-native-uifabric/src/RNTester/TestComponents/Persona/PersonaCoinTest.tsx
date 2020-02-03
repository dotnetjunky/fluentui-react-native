import * as React from 'react';
import { PersonaCoin, PersonaSize, PersonaCoinColor, PersonaPresence } from '../../../components/PersonaCoin';
import { Switch, View, Text } from 'react-native';
import { Picker } from '../../Picker/Picker.win32';
import { PickerItem } from '../../Picker/PickerItem';
import { styles, satyaPhotoUrl } from './styles';
import { getAllEnumValues, canUsePickerComponent } from './utils';
import { PersonaCoinSimpleTest } from './PersonaCoinSimpleTest';

const allSizes = getAllEnumValues(PersonaSize);
const allColors = getAllEnumValues(PersonaCoinColor);
const allPresences = getAllEnumValues(PersonaPresence);

export const PersonaCoinTest: React.FunctionComponent<{}> = () => {
  if (!canUsePickerComponent) {
    return <PersonaCoinSimpleTest />;
  }

  const [showImage, setShowImage] = React.useState(true);
  const [imageSize, setImageSize] = React.useState(PersonaSize.size40);
  const [coinColor, setCoinColor] = React.useState(PersonaCoinColor.gold);
  const [presence, setPresence] = React.useState(PersonaPresence.none);

  return (
    <View style={styles.root}>
      {/* settings */}
      <View style={styles.settings}>
        <View style={styles.showImage}>
          <Switch value={showImage} onValueChange={setShowImage} />
          <Text>Show image</Text>
        </View>

        <Text style={styles.header}>Size</Text>
        <Picker selectedValue={PersonaSize[imageSize]} onValueChange={size => setImageSize(PersonaSize[size as string])}>
          {allSizes.map((size, index) => (
            <PickerItem label={size} key={index} value={size} />
          ))}
        </Picker>

        <Text style={styles.header}>Coin Color</Text>
        <Picker
          enabled={!showImage}
          selectedValue={PersonaCoinColor[coinColor]}
          onValueChange={color => setCoinColor(PersonaCoinColor[color as string])}
        >
          {allColors.map((color, index) => (
            <PickerItem label={color} key={index} value={color} />
          ))}
        </Picker>

        <Text style={styles.header}>Presence Status</Text>
        <Picker selectedValue={PersonaPresence[presence]} onValueChange={presence => setPresence(PersonaPresence[presence as string])}>
          {allPresences.map((presence, index) => (
            <PickerItem label={presence} key={index} value={presence} />
          ))}
        </Picker>
      </View>

      {/* component under test */}
      <View style={styles.personaContainer}>
        <PersonaCoin
          size={imageSize}
          initials="SN"
          imageDescription="Photo of Satya Nadella"
          presence={presence}
          imageUrl={showImage ? satyaPhotoUrl : undefined}
          coinColor={coinColor}
        />
      </View>
    </View>
  );
};