import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { Category } from '../../models';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');

type CategoryItemProps = {
  item: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("CategoryDetails", {category:item})}
    style={{ width: width * 0.25, height: width * 0.25, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>

      <Image style={{ width: width * 0.20, height: width * 0.20, borderRadius: 10 }} source={{ uri: item.src }} />
      <Text style={{ fontSize: 12, color: '#616161', fontWeight: '500' }}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default CategoryItem;