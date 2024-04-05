import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Category } from '../../models';

const { width } = Dimensions.get('window');

type CategoryItemProps = {
  item: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    >
      <Image style={{ width: width * 0.18, height: width * 0.18, borderRadius: 10 }} source={{ uri: item.src }} />
      <Text style={{ fontSize: 12, color: '#616161', fontWeight: '500' }}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CategoryItem;
