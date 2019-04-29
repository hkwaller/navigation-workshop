/** @format */
import React from 'react'
import { AppRegistry, View, Text } from 'react-native'
import Employees from './src/tabOne/Employees'
import ModalView from './src/tabOne/ModalView'
import PersonDetails from './src/tabOne/PersonDetails'
import OverView from './src/tabTwo/Overview'
import SideMenu from './src/SideMenu'

import { colors } from './src/config'

import { name as appName } from './app.json'
import App from './App'
console.log('App: ', App)

AppRegistry.registerComponent(appName, () => App)
