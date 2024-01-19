const assert = require("assert");

describe("Bucles-Arrays", () => {
  it("Debería iterar sobre un array", () => {
    const array = ["a", "b", "c"];

    for (const elemento of array) {
      alert(elemento);
    }
  });

  it("Debería iterar sobre un array con un bucle for", () => {
    const array = ["a", "b", "c"];

    for (let i = 0; i < array.length; i++) {
      alert(array[i]);
    }
  });

  it("Debería iterar sobre un array con un bucle for-of", () => {
    const array = ["a", "b", "c"];

    for (const elemento of array) {
      alert(elemento);
    }
  });

  it("Debería iterar sobre un array con un bucle while", () => {
    const array = ["a", "b", "c"];

    let i = 0;
    while (i < array.length) {
      alert(array[i]);
      i++;
    }
  });
});