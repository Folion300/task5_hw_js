const a = parseFloat(prompt('Please enter А'));
const b = parseFloat(prompt('Please enter B'));
const c = parseFloat(prompt('Please enter C'));
alert('You enter ' + a + ', ' + b + ' and ' + c);

const result = solveQard(a, b, c);
alert(result);

function solveQard(a, b, c) {
    const d = calcDiscr(a, b, c);
    if (d == 0) {
        x = -b / (2 * a);
        return 'We have only one result: x1 = ' + x;
    }
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'We have two results: x1 = ' + x1 + ' , x2 = ' + x2;
    }
    else if (d < 0)
        return 'Sorry, the discriminant is less than zero';

}


function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}
