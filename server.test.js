const axios = require('axios');
async function fetchData() {
  const response = await axios.get('http://localhost:3000');
  return response.data;
}
//jest.mock('axios');
test('fetches data from API', async () => {
  const data = 5;
  //axios.get.mockResolvedValue({ data: 2, status: 200 });
  const response = await axios.get('http://192.168.0.101:3000');
  const result = response.data;
  expect(response.status).toBe(200);
  expect(result).toEqual(5);
});
