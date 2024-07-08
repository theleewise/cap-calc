import { getPace, calculateCloseTime } from './utils';

// create a test suite
describe('utils', () => {
  // create a test
  it('getPace', () => {
    // test the function
    expect(getPace(2)).toBe(3);
    expect(getPace(2.5)).toBe(2.75);
    expect(getPace(3)).toBe(2.5);
    expect(getPace(0)).toBeUndefined();
  });

  it('calculateCloseTime', () => {
    const pace = 2.5;
    const patientCount = 10;
    const providerCount = 2;
    const closeTime = calculateCloseTime(pace, patientCount, providerCount);
    expect(closeTime).toBeInstanceOf(Date);
  });
});

// Time is 19:00, there are 28 patients and 2 providers. The projected completion time should be 23:45
// Time is 20:00, there are 26 patients and 3 providers. The projected completion time should be 23:30
// Time is 17:00, there are 35 patients and 2 providers. The projected completion time should be 22:45
// Time is 19:00, there are 12 patients and 2 providers. The projected completion time should be 21:00