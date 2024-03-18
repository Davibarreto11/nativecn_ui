import React from 'react';
import {Text, TextProps} from 'react-native';

const Title: React.FC = (props: TextProps) => {
  return <Text className="text-white font-bold text-xl mt-6 mb-2" {...props} />;
};

export default Title;
