import { toString } from './utils';

describe('Utils', () => {
  it('should parse a JSON to String', () => {
    const json = { foo: 'bar' };
    const string = toString(json);
    const expected = '{"foo":"bar"}';
    expect(string).to.equal(expected);
  });
});
