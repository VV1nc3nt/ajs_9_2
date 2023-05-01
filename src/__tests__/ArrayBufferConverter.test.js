import ArrayBufferConverter from '../ArrayBufferConverter';

test('Testing ArrayBufferConverter class', () => {
  const buffer = new ArrayBufferConverter();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  buffer.load();
  const recieved = buffer.toString();
  expect(expected).toEqual(recieved);
});
