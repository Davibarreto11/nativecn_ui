import React from 'react';

import {Text, View} from 'react-native';
import {Avatar, AvatarFallback, AvatarImage} from './Avatar';

const User: React.FC = () => {
  return (
    <View className="items-center">
      <Avatar className="w-32 h-32 border-4 border-gray-600">
        <AvatarImage
          source={{
            uri: 'https://media.licdn.com/dms/image/D4D03AQGzRGYZiXM_Gg/profile-displayphoto-shrink_200_200/0/1704648222876?e=1716422400&v=beta&t=KRdLNf17iWgBFo68mbuOTyKwvh4ysb6CMqY6b4cUxBo',
          }}
        />
        <AvatarFallback>RG</AvatarFallback>
      </Avatar>

      <Text className="text-white font-bold text-2xl mt-4">Davi Barreto</Text>
      <Text className="text-gray-400 text-lg">@daviarturdesa</Text>
    </View>
  );
};

export default User;
