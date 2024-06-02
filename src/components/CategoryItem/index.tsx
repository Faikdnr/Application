import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, Text, Dimensions } from "react-native";
import { Category } from '../../models';
import { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');

type RootStackParamList = {
  CategoryDetails: {
    category: {
      name: string;
    };
  };
};

type CategoryDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CategoryDetails'>;

type CategoryItemProps = {
  item: Category;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  const navigation = useNavigation<CategoryDetailsScreenNavigationProp>();

  return (
    <TouchableOpacity 
      testID="category-item" 
      onPress={() => navigation.navigate("CategoryDetails", { category: { name: item.name } })} 
      style={{ 
        width: width * 0.25, 
        height: width * 0.24, 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 10 
      }}
    >
      <Image 
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 10 }} 
        source={{ uri: item.src }} 
      />
      <Text style={{ fontSize: 12, color: '#616161', fontWeight: '500' }}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;





