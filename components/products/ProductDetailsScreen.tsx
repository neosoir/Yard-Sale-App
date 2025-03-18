import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StyleSheet,
  Dimensions,
  Platform,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import Header from '@/components/header/Header';
import Context from '@/context/Context';
import config from '@/resources/config';
import { sizes, colors } from '@/resources/constants';

const ProductDetailsScreen = () => {
  const router = useRouter();
  const { id, name, price, description, image } = useLocalSearchParams();
  const { thisProductIsInCart, addProduct, deleteProduct } = useContext(Context);

  return (
    <SafeAreaView>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.itemImage}
            source={{
              uri: image,
              headers: {
                Authorization: config.liveLinkCredentials,
              },
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.itemPrice}>{price}</Text>
          <Text style={styles.itemTitle}>{name}</Text>
          <Text style={styles.itemDescription}>
            {description?.replace(/<[^>]+>/g, '') || 'No description available'}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        {thisProductIsInCart(id) ? (
          <Pressable
            style={styles.buttonDelete}
            onPress={() => deleteProduct(id)}
          >
            <Text style={styles.buttonTextDelete}>Remove from cart</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.buttonAdd}
            onPress={() => addProduct({ id, name, price, description, image })}
          >
            <Text style={styles.buttonTextAdd}>Add to cart</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:
      Platform.OS === 'ios'
        ? Dimensions.get('window').height - sizes.headerHeight - sizes.ctaButton * 2 + 10 - 50
        : Dimensions.get('window').height - sizes.headerHeight - sizes.ctaButton * 2 + 10,
  },
  imageContainer: {
    borderBottomStartRadius: 8,
    borderBottomEndRadius: 8,
    overflow: 'hidden',
  },
  itemImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  textContainer: {
    padding: 16,
  },
  itemPrice: {
    color: colors.darkGrey,
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  itemTitle: {
    color: colors.grey,
    fontSize: 20,
    lineHeight: 20,
    marginBottom: 16,
  },
  itemDescription: {
    color: colors.darkGrey,
    fontSize: 16,
  },
  buttonContainer: {
    height: sizes.ctaButton * 2,
    marginHorizontal: 8,
    padding: 8,
    borderRadius: 8,
  },
  buttonTextAdd: {
    color: colors.white,
    fontWeight: 'bold',
  },
  buttonAdd: {
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
  buttonTextDelete: {
    color: colors.darkGrey,
    fontWeight: 'bold',
  },
  buttonDelete: {
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
  },
});

export default ProductDetailsScreen;
