import React from 'react'
import { View, Text } from 'react-native'

const Pill = ({ background, color, text }) => {
  return (
    <View style={{ flex: 2, marginRight: 20 }}>
      <View style={{ padding: 5, backgroundColor: background, borderRadius: 8 }}>
        <Text
          style={{
            color: color,
            fontWeight: 'bold',
            paddingHorizontal: 12,
            textAlign: 'center',
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  )
}

export default Pill
