import React from 'react'
import { View, Text, Image } from 'react-native'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation'

import Employees from './src/tabOne/Employees'
import PersonDetails from './src/tabOne/PersonDetails'
import ModalView from './src/tabOne/ModalView'
import Overview from './src/tabTwo/Overview'
import SideMenu from './src/SideMenu'

import ansatte from './img/ansatte.png'
import ansattePurple from './img/ansatte-purple.png'
import overview from './img/overview.png'
import overviewTurquoise from './img/oversikt-turkis.png'

import { colors } from './src/config'

const EmployeesHomeStack = createStackNavigator({
  Employees: Employees,
  PersonDetails: PersonDetails,
})

const EmployeeStack = createStackNavigator(
  {
    Main: { screen: EmployeesHomeStack },
    MyModal: { screen: ModalView },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

const OverviewStack = createDrawerNavigator(
  {
    Overview: Overview,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
    drawerPosition: 'right',
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    Employees: EmployeeStack,
    Overview: OverviewStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state

        let icon
        if (routeName === 'Employees') {
          icon = focused ? ansattePurple : ansatte
        } else if (routeName === 'Overview') {
          icon = focused ? overviewTurquoise : overview
        }

        return <Image source={icon} style={{ width: 20, height: 20 }} />
      },
      tabBarLabel: ({ focused, tintColor, route }) => {
        const textColor =
          navigation.state.key === 'Employees'
            ? focused
              ? colors.purple
              : '#2b2b2b'
            : focused
            ? colors.turquoise
            : '#2b2b2b'

        return <Text style={{ color: textColor }}>{route.routeName}</Text>
      },
    }),
  }
)

export default createAppContainer(TabNavigator)
