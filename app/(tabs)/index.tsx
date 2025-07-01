import {FlatList, Image, StyleSheet} from 'react-native';
import { Text, View } from '@/components/Themed';
import { dummyProducts} from "@/app/dummy/dummyProducts";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ClickableIcon from "@/app/components/ClickableShoppingCart";
import ClickableShoppingCart from "@/app/components/ClickableShoppingCart";


export default function HomeScreen() {
  return (
      <FlatList
          data={dummyProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    paddingVertical: 80,
                    paddingHorizontal: 15,
                  }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
                  {item.name}
                </Text>
                <Text
                    style={[
                      styles.priceText,
                      { color: item.price > 100 ? 'red' : 'green' },
                    ]}
                >
                  {item.price} €
                </Text>
                <Text style={{ fontWeight: 'bold', color: 'blue' }}>
                  {item.note}
                </Text>
                <ClickableShoppingCart
                    name="shopping-cart"
                    color="black"
                    size={30}
                    message={`Klikol si na košík pre ${item.name}`}
                    />
              </View>
          )}
      />
  );
}


const styles = StyleSheet.create({
  priceText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
