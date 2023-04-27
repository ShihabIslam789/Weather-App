import React from "react"
import "./displayweather.css"
function DisplayWeather(props) {
    const { data } = props;
    const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
    ".png";
    return {
}