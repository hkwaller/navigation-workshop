export const colors = {
  purple: '#a85cff',
  lightPurple: '#eee0ff',
  mediumPurple: '#d2c8dd',
  turquoise: '#33bacc',
  lightTurquoise: '#D6F1F5',
  mediumTurquoise: '#BDD6D9',
  background: '#E8EDF6',
}

export const chartData = [
  {
    name: 'Men',
    population: 46,
    color: colors.purple,
  },
  {
    name: 'Kvinner',
    population: 54,
    color: colors.turquoise,
  },
]

export const otherChart = [
  {
    name: 'Senior',
    population: 29,
    color: colors.turquoise,
  },
  {
    name: 'Junior',
    population: 71,
    color: colors.purple,
  },
]

export const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  legend: false,
}
