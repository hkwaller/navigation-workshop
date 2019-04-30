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
  static navigationOptions = { tabBarVisible: false }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.goBack()
    }, 2000)
  }
  render() {
    const { background, text, icon } = this.props.navigation.state.params

    return (
      <View style={styles.container(background)}>
        <Text style={styles.text}>{text}</Text>
        <Image source={icon} style={styles.icon} />
      </View>
    )
  }
}

export default ModalView
