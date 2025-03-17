import React from 'react';
import { StyleSheet, Dimensions, Text, View, Image, Pressable } from 'react-native';

const ProductItem = (props) => {
  const { item, navigation } = props;
  const { id, name, image } = item;

  return (
    <View key={id} style={styles.itemContainer}>
      <Pressable
        onPress={() => navigation.navigate('Product Details', { product: item })}
      >
        <Image
          resizeMode="cover"
          style={styles.itemImage}
          source={{ uri: image.sourceUrl }}
        />
      </Pressable>
      <View style={styles.itemData}>
        <View style={styles.itemMeta}>
          <Text style={styles.itemTitle}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get('window').width / 2,
    padding: 8,
    alignContent: 'center',
  },
  itemImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 4,
  },
  itemData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemMeta: {
    width: '70%',
  },
  itemTitle: {
    fontWeight: '300',
  },
});

export default ProductItem;
