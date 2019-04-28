import React from 'react'
import { Text, View, Image } from 'react-native'
import { Navigation } from 'react-native-navigation'

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
  componentDidMount() {
    setTimeout(() => {
      Navigation.dismissModal(this.props.componentId)
    }, 2000)
  }
  render() {
    const { background, text, icon } = this.props
    return (
      <View style={styles.container(background)}>
        <Text style={styles.text}>{text}</Text>
        <Image source={icon} style={{ width: 60, height: 60, marginTop: 40 }} />
      </View>
    )
  }
}

export default ModalView
