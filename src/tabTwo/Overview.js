import React from 'react'
import { SafeAreaView, Text, Dimensions, View, Image } from 'react-native'
// import { Navigation } from 'react-native-navigation'
import { PieChart } from 'react-native-chart-kit'
import { colors, chartData, otherChart, chartConfig } from '../config'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
    // Navigation.mergeOptions(this.props.componentId, {
    //   bottomTab: {
    //     selectedIconColor: colors.turquoise,
    //     selectedTextColor: colors.turquoise,
    //   },
    //   sideMenu: {
    //     right: {
    //       width: 300,
    //     },
    //   },
    // })
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 34, fontWeight: 'bold' }}>Oversikt</Text>

          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image
              source={require('../../img/hamburger.png')}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

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
