import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import { defaultImage } from "@/src/components/ProductListItem";
import { useState } from "react";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const { id } = useLocalSearchParams();
  const {addItem} = useCart();  

  const router = useRouter();


  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if(!product)return;
    addItem(product, selectedSize);
    router.push('/cart')
    // console.warn("Add to cart, size  "+ selectedSize);
  };

  const sizes:PizzaSize[] = ["S", "M", "L", "XL"];
  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultImage }}
        style={styles.image}
      />

      <Text>Select Sizes</Text>

      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={()=>{setSelectedSize(size)}}
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
          >
            <Text style={[styles.sizeText,
              {
                color: selectedSize === size ? "black" : "gainsboro",
              }
            ]}>{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product?.price}</Text>
      <Button text="Add To Cart" onPress={addToCart}></Button>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop:'auto'
  },
  sizes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
