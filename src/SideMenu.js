import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { colors } from './config'

const styles = {
  container: {
    backgroundColor: colors.purple,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topWrapper: {
    position: 'absolute',
    top: 70,
    right: 20,
  },
  hamburgerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerX: {
    color: '#fff',
    marginRight: 10,
    fontSize: 20,
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
        <View style={styles.topWrapper}>
          <TouchableOpacity
            onPress={() => {
              Navigation.mergeOptions(this.props.componentId, {
                sideMenu: {
                  right: {
                    visible: false,
                  },
                },
              })
            }}
            style={styles.hamburgerButton}
          >
            <Text style={styles.hamburgerX}>X</Text>
            <Image
              source={require('../img/hamburger-white.png')}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Side menu</Text>
      </View>
    )
  }
}

export default SideMenu
