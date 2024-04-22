
const getPreviousDate = require('../modules/getPreviousDate');

test('Previous date test', () => {
    expect(getPreviousDate(4, 1, 2024)).toEqual({ month: 3, day: 31, year: 2024 });
    expect(getPreviousDate(2, 28, 2023)).toEqual({ month: 2, day: 27, year: 2023 });
    expect(getPreviousDate(1, 1, 2021)).toEqual({ month: 12, day: 31, year: 2020 });
});
