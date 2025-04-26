# Weather App

## Overview

This is a simple weather application that allows users to search for weather information by city name. It fetches data from the OpenWeatherMap API and displays current weather conditions, including temperature, description, cloudiness, humidity, and pressure.

## Features

* **City Search:** Users can enter a city name in the input field to retrieve weather data.
* **Dynamic Display:** The app displays the city name, country flag, temperature, weather icon, description, cloud percentage, humidity level, and atmospheric pressure.
* **Error Handling:** The app provides basic error handling for invalid city names.
* **Responsive Design:** The application is designed to be responsive.

## Technologies Used

* HTML
* CSS
* JavaScript
* OpenWeatherMap API

## How to Use

1.  Enter the name of the city you want to check the weather for in the input field.
2.  Click the search button.
3.  The app will display the current weather conditions for the specified city.

## Installation

1.  Clone the repository.
2.  Open the `index.html` file in your browser.

##  GIF Video Demo

*[Insert a GIF demo of the application in action here]*

##  Code Explanation

* **HTML (`index.html`):** Provides the structure of the application, including the input form, result display area, and links to CSS and JavaScript files.
* **CSS (`style.css`):** Styles the application with a clean, responsive design, including a gradient background, styled form elements, and a card-based layout for the weather information.
* **JavaScript (`script.js`):** Handles user input, fetches weather data from the OpenWeatherMap API, updates the UI with the retrieved data, and includes error handling.
    * `searchWeather()`:  This function fetches the weather data from the API and updates the HTML elements.
    * `form.addEventListener('submit', (event) => {...})`: This listens for the form submit event, prevents the default action, and calls the `searchWeather` function.

## API Key

The application uses the OpenWeatherMap API to fetch weather data. You will need to sign up for a free API key at [https://openweathermap.org/](https://openweathermap.org/) and replace  `9dc6152f87323e0eee69f9e85495787d`  with your actual API key in the `script.js` file.

##  Future Improvements

* Add a loading indicator while fetching data.
* Implement more robust error handling.
* Display additional weather information, such as wind speed and sunrise/sunset times.
* Allow users to search by location (latitude and longitude).
* Add a feature to display a 7-day forecast.
* Improve the user interface and add more visual elements.

##  Credits

* Weather data provided by the OpenWeatherMap API.
* Flag icons provided by [https://flagsapi.com/](https://flagsapi.com/).
