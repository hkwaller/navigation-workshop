import React from 'react'
import { View, Text } from 'react-native'
import { colors } from './config'

const styles = {
  container: {
    backgroundColor: colors.purple,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.lightPurple,
    fontSize: 34,
  },
}

class SideMenu extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Side menu</Text>
      </View>
    )
  }
}

export default SideMenu
