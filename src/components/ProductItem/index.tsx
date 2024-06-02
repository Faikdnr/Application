import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native"
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions"
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  ProductDetails: {
    product: Product;
  };
};

type ProductDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetails'>;

type ProductItemType = {
  item: Product;
  addItemToCart: (product: Product) => void;
}

const { height, width } = Dimensions.get("window");

const ProductItem = ({ item, addItemToCart }: ProductItemType) => {
  const navigation = useNavigation<ProductDetailsScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: item.image }}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>
          <Text>{"\u20BA"}</Text>{item.price}
        </Text>
        <Text style={styles.newPrice}>
          <Text>{"\u20BA"}</Text>{item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.quantity}>{item.miktar}</Text>
      <TouchableOpacity onPress={() => addItemToCart(item)} style={styles.addButton}>
        <Entypo name="plus" size={22} color="#840000" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.285,
    marginTop: 12,
    height: height * 0.25,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 12,
    marginBottom: 10,
  },
  image: {
    width: width * 0.285,
    height: width * 0.285,
    borderRadius: 12,
    borderWidth: 0.1,
    borderColor: "gray",
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#747990",
    fontWeight: "bold",
    fontSize: 10,
  },
  newPrice: {
    color: "#840000",
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 4,
  },
  name: {
    fontWeight: '600',
    fontSize: 13,
    marginTop: 4,
  },
  quantity: {
    color: '#747990',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },
  addButton: {
    position: 'absolute',
    borderWidth: 0.3,
    right: -10,
    top: -10,
    borderRadius: 5,
    shadowRadius: 3.8,
    shadowOpacity: 0.05,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItemToCart: (product: Product) => dispatch(actions.addToCart({ quantity: 1, product }))
  }
}

export default connect(null, mapDispatchToProps)(ProductItem);

