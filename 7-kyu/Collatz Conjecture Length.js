// DESCRIPTION:
// The Collatz Conjecture states that for any positive natural number n, this process:

// if n is even, divide it by 2
// if n is odd, multiply it by 3 and add 1
// repeat
// will eventually reach n = 1.

// For example, if n = 20, the resulting sequence will be:

// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.
function collatz(n) {
    let aux = n;
    let cont = 1;
    do {
        aux % 2 === 0 ? Math.abs(aux /= 2) : aux = (aux * 3) + 1;
        cont++
    } while (aux > 1);

    return cont
}