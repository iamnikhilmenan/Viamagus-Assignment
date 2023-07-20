import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Legues from '../screen/Legues';
import Research from '../screen/Research';
import LeaderBoard from '../screen/LeaderBoard';
import Profile from '../screen/Profile';

const BottomNav = createBottomTabNavigator();

function Navigation() {
  return (
    <>
      <NavigationContainer>
        <BottomNav.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              height: Dimensions.get('screen').width / 6.5,
            },
            headerShown: false,
          }}>
          <BottomNav.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <Image
                    source={require('../assest/home.png')}
                    tintColor={focused ? '#6231AD' : '#B5C0C8'}
                  />
                  <Text>Home</Text>
                </>
              ),
            }}
          />
          <BottomNav.Screen
            name="Leagues"
            component={Legues}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <Image
                    source={require('../assest/leagues.png')}
                    tintColor={focused ? '#6231AD' : '#B5C0C8'}
                  />
                  <Text>Leagues</Text>
                </>
              ),
            }}
          />
          <BottomNav.Screen
            name="Reasearch"
            component={Research}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <Image
                    source={require('../assest/research.png')}
                    tintColor={focused ? '#6231AD' : '#B5C0C8'}
                  />
                  <Text>Reasearch</Text>
                </>
              ),
            }}
          />
          <BottomNav.Screen
            name="LeaderBoard"
            component={LeaderBoard}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <Image
                    source={require('../assest/leaderboard.png')}
                    tintColor={focused ? '#6231AD' : '#B5C0C8'}
                  />
                  <Text>LeaderBoard</Text>
                </>
              ),
            }}
          />
          <BottomNav.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <Image
                    source={require('../assest/profile.png')}
                    tintColor={focused ? '#6231AD' : '#B5C0C8'}
                  />
                  <Text>Profile</Text>
                </>
              ),
            }}
          />
        </BottomNav.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Navigation;
