import { calculateLastWeeksProfit } from './cc-task-3.js';
import { bakeryObject } from './mock-data.js';

describe('calculateLastWeeksProfit', () => {
    test("should calculate last week's profit correctly for 1 Gesztenyés krémes", () => {
        const bakeryObjectWithFewerSales = {
            ...bakeryObject,
            "salesOfLastWeek": [
                { "name": "Gesztenyés krémes", "amount": 1 },
            ],
        };
        // production cost is 522 HUF, and it sells for 500 HUF
        const correctSolution = -22;

        expect(calculateLastWeeksProfit(bakeryObjectWithFewerSales)).toBe(correctSolution);
    });

    test("should calculate last week's profit correctly for 1 Rigó Jancsi", () => {
        const bakeryObjectWithFewerSales = {
            ...bakeryObject,
            "salesOfLastWeek": [
                { "name": "Rigó Jancsi", "amount": 1 },
            ],
        };
        // production cost is 367 HUF, and it sells for 450 HUF
        const correctSolution = 83;

        expect(calculateLastWeeksProfit(bakeryObjectWithFewerSales)).toBe(correctSolution);
    });

    test("should calculate last week's profit correctly for 1 Rigó Jancsi and 1 Gesztenyés krémes", () => {
        const bakeryObjectWithFewerSales = {
            ...bakeryObject,
            "salesOfLastWeek": [
                { "name": "Rigó Jancsi", "amount": 1 },
                { "name": "Gesztenyés krémes", "amount": 1 },
            ],
        };
        // production cost is 889 HUF, and they sell for 950 HUF
        const correctSolution = 61;

        expect(calculateLastWeeksProfit(bakeryObjectWithFewerSales)).toBe(correctSolution);
    });
});
