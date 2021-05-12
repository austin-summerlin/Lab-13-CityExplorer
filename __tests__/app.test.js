import cityData from '../data/data';
import weatherData from '../data/weather';
import { formatCity, formatWeather } from '../lib/munge-utils';

describe('API Data Munging', () => {

  const expectedStuff = [
    {
      'formatted_query': 'Berlin, Germany',
      'latitude': '52.5015217',
      'longitude': '13.4025498',
    }
  ];

  const expectedWeather = [
    {
      'forecast': 'Light rain',
      'date': '2021-05-13',
    }
  ];

  test('munges city data', async () => {
    const output = formatCity(cityData);
    expect(output).toEqual(expectedStuff);
  });

  test('munges weather data', async () => {
    const output = formatWeather(weatherData);
    expect(output).toEqual(expectedWeather);
  });
});