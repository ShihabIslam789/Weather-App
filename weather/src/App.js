import React from "react"
import { fetchWeather } from "./utils/api"
import fetch from "whatwg-fetch"
import _ from "lodash"
import randomColor from "randomcolor";

import WeekWeather from "./components/WeekWeather"

import "./css/style.styl";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      city: "Bucharest",
      searchedCity: "Bucharest",
      weekWeather: []
    };
  }

  componentWillMount() {
    this.getWeather();
  }

  getWeather(searchedCity = this.state.city) {
    fetchWeather(searchedCity)
      .then((response) => {
        var weather = _.map(response.list, (dayWeather) => {
          return {
            dayWeather,
            country: response.city.country,
            city: response.city.name
          }
        });