import cityData from '../data/data';
import weatherData from '../data/weather';
import yelpData from '../data/yelp';
import { formatCity, formatWeather, formatYelp } from '../lib/munge-utils';

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

  const expectedYelp = [
    {
      'name': 'Mustafas Gemüse Kebap',
      'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/ZNGf-CMpNZ1XktzyFIvGSw/o.jpg',
      'price': '€',
      'rating': 4.0,
      'url': 'https://www.yelp.com/biz/mustafas-gem%C3%BCse-kebap-berlin-3?adjust_creative=CZ_hkgx7WUTh0TKKgoyHJw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CZ_hkgx7WUTh0TKKgoyHJw'
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

  test('munges yelp data', async () => {
    const output = formatYelp(yelpData);
    expect(output).toEqual(expectedYelp);
  });
});