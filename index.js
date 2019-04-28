/** @format */

import { Navigation } from 'react-native-navigation'
import { Dimensions } from 'react-native'

import TabOne from './src/TabOne'
import ModalView from './src/tabOne/ModalView'
import PersonDetails from './src/tabOne/PersonDetails'
import TabTwo from './src/TabTwo'
import SideMenu from './src/SideMenu'

import { colors } from './src/config'

Navigation.registerComponent('navigation.tabOne', () => TabOne)
Navigation.registerComponent('navigation.personDetails', () => PersonDetails)
Navigation.registerComponent('navigation.tabTwo', () => TabTwo)
Navigation.registerComponent('navigation.modal', () => ModalView)
Navigation.registerComponent('navigation.sideMenu', () => SideMenu)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    bottomTab: {
      selectedIconColor: colors.purple,
      selectedTextColor: colors.purple,
      fontFamily: 'HelveticaNeue',
      fontSize: 14,
    },
  })

  Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
            name: 'navigation.sideMenu',
          },
        },
        center: {
          bottomTabs: {
            id: 'tabs',
            options: {
              topbar: {
                visible: true,
              },
            },
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.tabOne',
                        options: {
                          topBar: {
                            title: {
                              text: 'Ansatte',
                            },
                          },
                        },
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      text: 'Ansatte',
                      icon: require('./img/ansatte.png'),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'navigation.tabTwo',
                        options: {
                          topBar: {
                            title: {
                              text: 'Oversikt',
                            },
                          },
                        },
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      text: 'Oversikt',
                      icon: require('./img/overview.png'),
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  })
})
