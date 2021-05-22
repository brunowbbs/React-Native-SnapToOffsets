import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import ListaHorizontal from './src/ListaHorizontal';

const App = () => {

  const data = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3B6",
    "#3366E6",
    "#99FF99",
    "#834D4D"
  ]

  return (
    <SafeAreaView style={{ marginTop: 50 }}>
      <ListaHorizontal data={data} />
    </SafeAreaView>
  )
}

export default App;