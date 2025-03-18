import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import ProductItem from '@/components/products/ProductItem';
import Header from '@/components/header/Header';

import Context from '../../context/Context';

const ProductsScreen = (props) => {
  const { products } = useContext(Context);

  return (
    <SafeAreaView>
      <Header {...props} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} {...props} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;
