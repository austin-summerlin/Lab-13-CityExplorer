import cityData from '../data/data';
import { formatStuffs } from '../lib/munge-utils';

describe('API Data Munging', () => {

  const expectedStuff = [
    {
      'location': 'Portland, Multnomah County, Oregon, USA',
      'type': 'city',
      'id': '282983083',
      'latitude': '45.5202471',
      'longitude': '-122.6741949',
    },
    {
      'location': 'Portland, Cumberland County, Maine, USA',
      'type': 'city',
      'id': '236025890',
      'latitude': '43.6610277',
      'longitude': '-70.2548596',
    }
  ];

  it('munges city data', async () => {
    const output = formatStuffs(cityData);
    expect(output).toEqual(expectedStuff);
  });
});