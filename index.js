/** @format */

import { Navigation } from 'react-native-navigation'

import Employees from './src/tabOne/Employees'
import ModalView from './src/tabOne/ModalView'
import PersonDetails from './src/tabOne/PersonDetails'
import OverView from './src/tabTwo/Overview'
import SideMenu from './src/SideMenu'

import { colors } from './src/config'

Navigation.registerComponent('navigation.tabOne', () => Employees)
Navigation.registerComponent('navigation.personDetails', () => PersonDetails)
Navigation.registerComponent('navigation.tabTwo', () => OverView)
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
