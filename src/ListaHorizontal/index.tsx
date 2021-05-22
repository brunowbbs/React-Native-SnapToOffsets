import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'

interface IProps {
  data: Array<String>
}

const { width } = Dimensions.get("window");

const ListaHorizontal = ({ data }: IProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item)}
      horizontal

      //pagingEnabled //paginando 1 item por vez
      showsHorizontalScrollIndicator={false}
      snapToAlignment={"start"}

      //velocidade do scroll
      scrollEventThrottle={16}

      //aceleração do scroll
      decelerationRate="fast"

      //controla quantos pixels será a rolagem 
      snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}


      renderItem={({ item }) => <View
        style={{
          backgroundColor: item,
          height: width / 2.6,
          width: 0.8 * width - 20,
          marginHorizontal: 10,
          borderRadius: 12
        }}
      />
      }
    />
  )
}

export default ListaHorizontal;
