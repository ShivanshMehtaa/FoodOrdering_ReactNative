import { FlatList, Image, StyleSheet } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View } from '@/src/components/Themed';
import ProductListItem from '@/src/components/ProductListItem';

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={({ id }) => id.toString()}
        numColumns={2}
        contentContainerStyle={{gap:10, padding:10}}
        columnWrapperStyle={{gap:10}}
      />
    </View>
  );
}

