import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

const styles = {
  container: backgroundColor => ({
    borderBottomColor: backgroundColor,
    backgroundColor: 'white',
    borderBottomWidth: 4,
    padding: 20,
  }),
  text: {
    fontSize: 34,
  },
  smallerText: {
    fontSize: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
}

const Person = ({ data, navigate }) => {
  return (
    <TouchableOpacity style={styles.container(data.background)} onPress={() => navigate(data)}>
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.smallerText}>{data.jobTitle}</Text>
      <Text style={[styles.smallerText, { color: 'tomato' }]}>{data.jobDescriptor}</Text>
    </TouchableOpacity>
  )
}
export default Person
