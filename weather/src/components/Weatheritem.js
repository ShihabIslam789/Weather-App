import React from "react"
import Skycons from "react-skycons"
import Moment from "moment"
import NumberEasing from "react-number-easing"
import { getIcon } from "./../utils/getIcon"

export default class weatherItem extends React.Component {
    displayName: "WeatherItem"
  
    render() {
        let weather = this.props.data,
            country = weather.country,
            city = weather.city,
            timestamp = weather.dayWeather.dt,
            temperature = weather.dayWeather.temp.max,
            weatherType = weather.dayWeather.weather[0].description,
            weatherDescription = weather.dayWeather.weather[0].main,
            icon = weather.dayWeather.weather[0].id;