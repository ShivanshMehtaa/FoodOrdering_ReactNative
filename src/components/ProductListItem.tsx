import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/src/constants/Colors';
import { Product } from '../types';
import { Link, useSegments } from 'expo-router';

export const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({product}:ProductListItemProps) => {

  const segments= useSegments();
  

  return (
        <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
          <Pressable style={styles.container}>
            <Image style={styles.image} source={{uri:product.image || defaultImage}}/>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
 
          </Pressable>
        </Link>
        );
}

export default ProductListItem

const styles = StyleSheet.create({
    container: {
      flex:1,
      maxWidth: '50%',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      resizeMode: 'contain',
    },
    image:{
      width: '100%',
      // height: 200,
      aspectRatio: 1,
      resizeMode: 'contain',
    
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      marginVertical:10
    },
    price:{
      color:Colors.light.tint,
      fontWeight:'bold'
    },
  });