import React from 'react'
import { View, StyleSheet, SafeAreaView, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { WeatherType } from '../utilities/WeatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message,
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData

  const weatherCondition = weather[0].main
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: WeatherType[weatherCondition].backgroundColor },
      ]}
    >
      <View style={container}>
        <Feather
          name={WeatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}> {temp} </Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={WeatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  hiLow: {
    color: 'black',
    fontSize: 20,
  },
  hiLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
})

export default CurrentWeather
