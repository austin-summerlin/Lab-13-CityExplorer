export function formatStuffs(data) {

  return data.results.map(city => {

    return {
      id: city.place_id,
      latitude: city.lat,
      longitude: city.lon,
      location: city.display_name,
      type: city.type,
    };
  });
}
