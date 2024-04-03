// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


// Declaramos una función con el nombre "fromDollarToYen	"
const fromDollarToYen = function(AmountInDollar) {
        // Convertimos el valor a euros
        let amountInEuro = AmountInDollar / oneEuroIs["USD"];
        // Convertir de euros a yenes japoneses
        let AmountInYen = amountInEuro * oneEuroIs["JPY"];
        return AmountInYen;
}

 
// Declaramos una función con el nombre "fromYenToPound"
const fromYenToPound = function(ValueInYens){
    // Convertimos el valor a euros
    let AmountInEuro = ValueInYens / oneEuroIs["JPY"];
    // Convertir de euros a pounds
    let ValueInPound = AmountInEuro * oneEuroIs["GBP"];
    return ValueInPound; 
}


console.log(fromDollarToYen(100)); // Salida esperada: aproximadamente 11682.24
console.log(fromYenToPound(100)); // Salida esperada: apro




// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}