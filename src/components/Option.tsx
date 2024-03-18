import React, {ReactNode} from 'react';
import {View} from 'react-native';

interface OptionProps {
  children: ReactNode;
}

const Option: React.FC<OptionProps> = ({children}) => {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-500 py-3">
      {children}
    </View>
  );
};

export default Option;
