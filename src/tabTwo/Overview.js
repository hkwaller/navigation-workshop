import React from 'react'
import { SafeAreaView, Text, Dimensions, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { PieChart } from 'react-native-chart-kit'
import { colors, chartData, otherChart, chartConfig } from '../config'

const screenWidth = Dimensions.get('screen').width

const styles = {
  wrapper: {
    padding: 20,
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    borderRadius: 10,
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
  },
}

class Overview extends React.Component {
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
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <PieChart
            data={chartData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
          <PieChart
            data={otherChart}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      </SafeAreaView>
    )
  }
}

export default Overview
