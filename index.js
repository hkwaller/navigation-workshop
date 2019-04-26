/**
 * @format
 */

import App from './App'
import { Navigation } from 'react-native-navigation'

Navigation.registerComponent(`navigation.WelcomeScreen`, () => App)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.WelcomeScreen',
      },
    },
  })
})
