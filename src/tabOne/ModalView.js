import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Text, View } from 'react-native'

const styles = {
  container: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
}
class ModalView extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Navigation.dismissModal(this.props.componentId)
    }, 2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Calling {this.props.text}</Text>
      </View>
    )
  }
}

export default ModalView
