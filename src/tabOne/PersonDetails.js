import React from 'react'
import { View, Image, Button, Dimensions, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

const SCREEN = Dimensions.get('screen').width

const styles = {
  container: {
    margin: 20,
  },
  avatar: {
    width: SCREEN,
    height: SCREEN,
  },
  text: {
    fontSize: 34,
    marginVertical: 10,
  },
}

const BiggerText = ({ children }) => {
  return <Text style={{ fontWeight: 'bold' }}>{children}</Text>
}

const PersonDetails = props => {
  const { avatar, name, jobTitle, company } = props.data

  return (
    <View>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>
          Works as <BiggerText>{jobTitle}</BiggerText> at <BiggerText>{company}</BiggerText>
        </Text>
      </View>
      <Button
        title={`Call ${name}`}
        onPress={async () => {
          await Navigation.showModal({
            component: {
              name: 'navigation.modal',
              passProps: {
                text: name,
              },
              options: {
                overlay: {
                  interceptTouchOutside: true,
                },
              },
            },
          })
        }}
      />
    </View>
  )
}

export default PersonDetails
