import React from 'react'
import { SafeAreaView, Text, Dimensions } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { PieChart } from 'react-native-chart-kit'
import { colors } from './config'

const screenWidth = Dimensions.get('screen').width

const data = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#ffffff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
]

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
}

class TabTwo extends React.Component {
  componentDidMount() {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTab: {
        selectedIconColor: colors.turquoise,
        selectedTextColor: colors.turquoise,
      },
      sideMenu: {
        right: {
          width: 300,
        },
      },
    })
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Tab Two</Text>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </SafeAreaView>
    )
  }
}

export default TabTwo
