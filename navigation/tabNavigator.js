import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {RFValue} from 'react-native-responsive-fontsize'
import CreateStory from '../screens/createStory';
import Feed from '../screens/feed';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNaivagtor = () => {
  return (
    <Tab.Navigator
      labelled={false}
      barStyle={styles.bottomTabStyles}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconName;
          if (route.name === "Feed") {
            IconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name = "CreateStory") {
            IconName = focused ? 'add-circle' : 'add-circle-outline'
          }
          return <Ionicons name={IconName} size={RFValue(25)} color={color} style={styles.icons} />
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inActiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreateStory" component={CreateStory} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({

  bottomTabStyles: {
    backgroundColor: '#2f345d',
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute",
  },
  icons: {
    width:RFValue(30),
    height:RFValue(30),
  }
})

export default BottomTabNaivagtor;