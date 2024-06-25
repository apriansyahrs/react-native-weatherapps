// import React from 'react'
// import { View, Text, StyleSheet, Image } from 'react-native'

// const WeatherInfo = ({ weatherData }) => {
//   if (!weatherData) {
//     return null;
//   }

//   const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

//   return (
//     <View style={styles.marginTop20}>
//       <Text style={styles.text}>The weather of {weatherData.name}</Text>
//       <Text style={[styles.temperature, styles.marginTop20]}>{weatherData.main.temp} °C</Text>
//       <View style={[styles.rowContainer, styles.marginTop20]}>
//         <Image
//           source={{ uri: iconUrl }}
//           style={styles.weatherIcon}
//         />
//         <Text style={[styles.text, styles.bold]}>{weatherData.weather[0].main}</Text>
//       </View>
//       <Text style={styles.text}>{weatherData.weather[0].description}</Text>
//       <View style={[styles.rowContainer, styles.marginTop20]}>
//         <Text style={[styles.text, styles.bold]}>Visibility :</Text>
//         <Text style={[styles.text, styles.marginLeft15]}>{weatherData.visibility} km</Text>
//       </View>
//       <View style={[styles.rowContainer, styles.marginTop20]}>
//         <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
//         <Text style={[styles.text, styles.marginLeft15]}>{weatherData.wind.speed} m/s</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   marginTop20: {
//     marginTop: 20,
//   },
//   marginLeft15: {
//     marginLeft: 15,
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   bold: {
//     fontWeight: '700',
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   temperature: {
//     fontWeight: '700',
//     fontSize: 80,
//     textAlign: 'center',
//   },
//   weatherIcon: {
//     width: 50,
//     height: 50,
//   },
// })

// export default WeatherInfo

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const iconUrl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <View style={styles.card}>
      <Text style={styles.locationText}>{weatherData.name}</Text>
      <Text style={styles.temperature}>{weatherData.main.temp} °C</Text>
      <View style={styles.rowContainer}>
        <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
        <Text style={styles.weatherMain}>{weatherData.weather[0].main}</Text>
      </View>
      <Text style={styles.description}>{weatherData.weather[0].description}</Text>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Visibility:</Text>
        <Text style={styles.value}>{weatherData.visibility} km</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Wind Speed:</Text>
        <Text style={styles.value}>{weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  temperature: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  weatherMain: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default WeatherInfo;
