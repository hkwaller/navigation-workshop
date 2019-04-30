/** @format */

import { Navigation } from 'react-native-navigation'

import Employees from './src/tabOne/Employees'

import { colors } from './src/config'

Navigation.registerComponent('navigation.tabOne', () => Employees)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.tabOne',
              topBar: {
                title: {
                  text: 'Ansatte',
                },
              },
            },
          },
        ],
      },
    },
  })
})
