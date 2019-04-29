import React from 'react'
import { Text, View, Image } from 'react-native'
// import { Navigation } from 'react-native-navigation'

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
        <Image source={icon} style={{ width: 60, height: 60, marginTop: 40 }} />
      </View>
    )
  }
}

export default ModalView
