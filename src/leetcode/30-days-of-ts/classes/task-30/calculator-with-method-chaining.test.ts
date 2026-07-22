import { Calculator } from './calculator-with-method-chaining';

describe('Task #30 | Calculator With Method Chaining | Testcases', () => {
  const runTest = (actions: (keyof Calculator)[], values: number[]): number => {
    let calculator = new Calculator(values[0]);
    for (let i = 0; i < actions.length; i++) {
      switch (actions[i]) {
        case 'add': {
          calculator = calculator.add(values[i + 1]);
          break;
        }
        case 'subtract': {
          calculator = calculator.subtract(values[i + 1]);
          break;
        }
        case 'multiply': {
          calculator = calculator.multiply(values[i + 1]);
          break;
        }
        case 'divide': {
          calculator = calculator.divide(values[i + 1]);
          break;
        }
        case 'power': {
          calculator = calculator.power(values[i + 1]);
          break;
        }
        case 'getResult': {
          return calculator.getResult();
        }
      }
    }

    return calculator.getResult();
  };

  test('#1 Add, sub', () => {
    const actions: (keyof Calculator)[] = ['add', 'subtract', 'getResult'];
    const values = [10, 5, 7];
    const expected = 8;
    const output = runTest(actions, values);
    expect(output).toBe(expected);
  });

  test('#2 Multiply, power', () => {
    const actions: (keyof Calculator)[] = ['multiply', 'power', 'getResult'];
    const values = [2, 5, 2];
    const expected = 100;
    const output = runTest(actions, values);
    expect(output).toBe(expected);
  });

  test('#3 division by zero', () => {
    const actions: (keyof Calculator)[] = ['divide', 'getResult'];
    const values = [20, 0];
    const expected = 'Division by zero is not allowed';
    try {
      runTest(actions, values);
    } catch (e) {
      expect((e as Error).message).toBe(expected);
    }
  });
});
