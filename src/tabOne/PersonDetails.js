import React from 'react'
import { View, Image, ScrollView, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { colors } from '../config'

const phoneIcon = require('../../img/phone.png')
const mailIcon = require('../../img/mail.png')

const styles = {
  wrapper: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 20,
  },
  container: {
    padding: 20,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 34,
    marginVertical: 10,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 20,
  },
  backButton: {
    marginLeft: 0,
    padding: 20,
  },
}

const BiggerText = ({ children }) => {
  return <Text style={{ fontWeight: 'bold', fontSize: 34 }}>{children}</Text>
}

const ContactButton = ({ background, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: background,
        width: 170,
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Image source={icon} />
    </TouchableOpacity>
  )
}

class PersonDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { props } = this

    const { avatar, name, jobTitle, company } = props.data

    return (
      <SafeAreaView style={styles.wrapper}>
        <ScrollView>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => Navigation.pop(this.props.componentId)}
          >
            <Image source={require('../../img/back.png')} style={{ width: 15, height: 20 }} />
          </TouchableOpacity>
          <Text style={styles.header}>{name}</Text>
          <View style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.text}>
                Works as <BiggerText>{jobTitle}</BiggerText> at <BiggerText>{company}</BiggerText>
              </Text>
            </View>
          </View>
          <Text style={styles.header}>Kontake {name}</Text>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}
          >
            <ContactButton
              icon={phoneIcon}
              background={colors.purple}
              onPress={async () => {
                await Navigation.showModal({
                  component: {
                    name: 'navigation.modal',
                    passProps: {
                      text: `Ringer ${name}`,
                      icon: phoneIcon,
                      background: colors.purple,
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
            <ContactButton
              icon={mailIcon}
              background={colors.turquoise}
              onPress={async () => {
                await Navigation.showModal({
                  component: {
                    name: 'navigation.modal',
                    passProps: {
                      text: `Mailer ${name}`,
                      background: colors.turquoise,
                      icon: phoneIcon,
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
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PersonDetails
