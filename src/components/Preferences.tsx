import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {colors} from '../styles/colors';
import {MoonIcon, EnvelopeIcon} from 'react-native-heroicons/solid';

import Option from './Option';
import Title from './Title';
import {Switch} from './Switch';
import {Checkbox} from './Checkbox';

const Preferences: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="w-full">
      <Title className="text-white">Preferences</Title>

      <Option>
        <MoonIcon size={20} color={colors.white} />
        <Text className="text-white text-lg flex-1">Dark Mode</Text>
        <Switch onValueChange={setIsEnabled} value={isEnabled} />
      </Option>

      <Option>
        <EnvelopeIcon size={20} color={colors.white} />
        <Text className="text-white text-lg flex-1">Public email</Text>
        <Checkbox className="mr-2" />
      </Option>
    </View>
  );
};

export default Preferences;
