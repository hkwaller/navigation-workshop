import React from 'react'
import { Navigation } from 'react-native-navigation'
import { SafeAreaView, FlatList } from 'react-native'
import Person from '../components/Person'
import { colors } from '../config'

const styles = {
  container: {
    backgroundColor: colors.background,
  },
}

class Employees extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }

    this.navigate = this.navigate.bind(this)
  }

  componentDidMount() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        right: {
          enabled: false,
        },
      },
    })

    fetch('https://5cc33bae968a0b001496dfea.mockapi.io/people')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data,
        })
      })
  }

  navigate(person) {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.personDetails',
        passProps: {
          data: person,
        },
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Person data={item} navigate={person => this.navigate(person)} />
          )}
        />
      </SafeAreaView>
    )
  }
}

export default Employees
