import React, { useState, useEffect } from 'react'
import { Navigation } from 'react-native-navigation'
import { SafeAreaView, Text, Button, FlatList } from 'react-native'
import Person from './components/Person'

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
  },
}

const TabOne = props => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch('https://5cc33bae968a0b001496dfea.mockapi.io/people')
      .then(response => response.json())
      .then(data => {
        setEmployees(data)
      })
  }, [])

  const navigate = person => {
    Navigation.push(props.componentId, {
      component: {
        name: 'navigation.personDetails',
        passProps: {
          data: person,
        },
        options: {
          topBar: {
            title: {
              text: person.name,
            },
          },
        },
      },
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={employees}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Person data={item} navigate={person => navigate(person)} />}
      />
    </SafeAreaView>
  )
}

export default TabOne
