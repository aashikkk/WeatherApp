import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2023-06-16 12:00:00',
    main: {
      temp_min: 8.55,
      temp_max: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_txt: '2023-06-16 15:00:00',
    main: {
      temp_min: 8.55,
      temp_max: 7.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_txt: '2023-06-16 18:00:00',
    main: {
      temp_min: 8.55,
      temp_max: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-bg.jpg')}
        style={image}
      >
        <Text> UpcomingWeather </Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
})

export default UpcomingWeather
