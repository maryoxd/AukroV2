import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import HomeHeader from "@/app/components/HomeHeader";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => (<HomeHeader/>),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          title: 'Kategorie',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
        <Tabs.Screen
            name="Add"
            options={{
                title: 'Přidat',
                tabBarIcon: ({ color }) => <TabBarIcon name="plus-circle" color={color} />,
            }}
        />

        <Tabs.Screen
            name="Favourites"
            options={{
                title: 'Oblíbené',
                tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
            }}
        />

        <Tabs.Screen
            name="MyAukro"
            options={{
                title: 'Moje Aukro',
                tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
            }}
        />
        <Tabs.Screen
            name="Lubo"
            options={{
                title: 'Lubo pískoviště',
                tabBarIcon: ({ color }) => <TabBarIcon name="id-card" color={color} />,
            }}
        />
    </Tabs>



  );
}


