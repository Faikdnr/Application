import React, { useState } from "react";
import { ScrollView, Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

const TypeBox = ({ active, item, setCat }: { active: string, item: string, setCat: any }) => {
  return (
    <TouchableOpacity 
      onPress={() => setCat(item)} 
      style={[
        styles.typeBox,
        item === active ? styles.activeTypeBox : styles.inactiveTypeBox
      ]}
    >
      <Text style={[styles.typeText, item === active && styles.activeTypeText]}>{item}</Text>
    </TouchableOpacity>
  )
}

const Index = () => {
  const [category, setCategory] = useState("Birlikte İyi Gider");

  return (
    <ScrollView 
      style={styles.scrollView} 
      showsHorizontalScrollIndicator={false} 
      bounces={true} 
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item, index) => (
        <TypeBox key={index} setCat={setCategory} item={item} active={category} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    backgroundColor: 'white',
    height: height * 0.072,
    flexDirection: 'row',
    paddingVertical: height * 0.014,
    paddingHorizontal: 12
  },
  typeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
    height: height * 0.044,
    marginRight: 12,
    borderColor: '#F0EFF7',
    borderWidth: 1
  },
  activeTypeBox: {
    backgroundColor: '#5C3EBC',
    borderColor: '#5C3EBC',
  },
  inactiveTypeBox: {
    borderColor: '#F0EFF7',
  },
  typeText: {
    fontSize: 12,
    color: '#7849F7',
    fontWeight: '600',
  },
  activeTypeText: {
    color: 'white',
  }
});

export default Index;
