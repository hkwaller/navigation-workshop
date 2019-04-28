import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { colors } from './config'

class TabTwo extends React.Component {
  componentDidMount() {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTab: {
        selectedIconColor: colors.turquoise,
        selectedTextColor: colors.turquoise,
      },
      sideMenu: {
        right: {
          width: 300,
        },
      },
    })
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Tab Two</Text>
      </SafeAreaView>
    )
  }
}

export default TabTwo
