import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Pill from './Pill'
import { colors } from '../config'

const styles = {
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 34,
  },
  smallerText: {
    fontSize: 20,
    flex: 4,
  },
  line: {
    height: 2,
    backgroundColor: colors.lightPurple,
    flex: 1,
    marginVertical: 20,
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
}

const Person = ({ data, navigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigate(data)}>
      <Text style={styles.text}>{data.name}</Text>
      <View style={styles.line} />
      <View style={styles.row}>
        <Pill color={colors.lightPurple} background={colors.purple} text="Tittel" />
        <Text style={styles.smallerText}>{data.jobTitle}</Text>
      </View>
      <View style={[styles.row, { marginTop: 20 }]}>
        <Pill color={colors.lightTurquoise} background={colors.turquoise} text="Bedrift" />
        <Text style={styles.smallerText}>{data.jobDescriptor}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Person
