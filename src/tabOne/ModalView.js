import React from 'react'
import { Text, View, Image } from 'react-native'

const styles = {
  container: background => ({
    backgroundColor: background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  }),
  text: {
    fontSize: 34,
    textAlign: 'center',
    color: '#fff',
  },
  icon: {
    width: 60,
    height: 60,
    marginTop: 40,
  },
}

class ModalView extends React.Component {
  render() {
    // hente data fra props

    return (
      <View style={styles.container(background)}>
        <Text style={styles.text}>{text}</Text>
        <Image source={icon} style={styles.icon} />
      </View>
    )
  }
}

export default ModalView
