export function formatCity(data) {

  const arr = data.map(city => {
    return {
      formatted_query: city.display_name,
      latitude: city.lat,
      longitude: city.lon
    };
  });
  return arr[0];
}

export function formatWeather(weather) {
  return weather.data.map(item => {
    return {
      forecast: item.weather.description,
      date: item.valid_date
    };
  });
}

export function formatYelp(data) {
  return data.businesses.map(review => {
    return {
      name: review.name,
      image_url: review.image_url,
      price: review.price,
      rating: review.rating,
      url: review.url,
    };
  });
}


