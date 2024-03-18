import React from 'react';
import {View} from 'react-native';
import Title from './Title';
import {SKILLS} from '../utils/skills';
import {Badge} from './Badge';

const Skills: React.FC = () => {
  return (
    <View className="w-full">
      <Title>Skills</Title>

      <View className="flex-row w-full flex-wrap gap-3">
        {SKILLS.map(skill => (
          <Badge key={skill.name} label={skill.name} icon={skill.icon} />
        ))}
      </View>
    </View>
  );
};

export default Skills;
