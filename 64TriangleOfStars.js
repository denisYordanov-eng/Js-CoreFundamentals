function solve(number) {
    for (let i = 0; i < number; i++) {
        console.log('*'.repeat(i));
    }
    for (let i = number; i >= 0; i--) {
        console.log('*'.repeat(i));
    }
}
solve(5);