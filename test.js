// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

     // We expect the sum of those 2 numbers to be 23
     expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
//fromDollarToYen
test("10 dollars should be 1462.61 yen", () => {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');
    // Uso la función como debe ser usada
    const yen = fromDollarToYen(10);
  // Si 10 dolares son 1462.61 yen, entonces 1 dolar debe ser 146.26 yenes
   const expectedYens = 10 / 1.07 * 156.5
   // Hago mi comparación (la prueba)
   expect(yen).toBe(expectedYens); 

}
)

test("10 yen sloould be 0.05 pound", () => {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');
        // Uso la función como debe ser usada
        const pound = fromYenToPound(10);
        // Si 10 yens son 0.05 pound , entonces 1 yen debe ser 0.005 pound 
        const expectedPound = 10 / 156.5 * 0.87
        expect(pound).toBe(expectedPound);

        

    
    
}
)