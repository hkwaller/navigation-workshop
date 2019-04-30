import { createAppContainer, createStackNavigator } from 'react-navigation'

import Employees from './src/tabOne/Employees'

const EmployeesHomeStack = createStackNavigator({
  Employees: Employees,
})

export default createAppContainer(EmployeesHomeStack)
