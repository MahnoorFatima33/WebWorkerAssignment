// Listen for messages from the main thread
self.onmessage = function(event) {
    const { rangeStart, rangeEnd } = event.data;
    const primes = findPrimesInRange(rangeStart, rangeEnd);

    // Send the list of prime numbers back to the main thread
    self.postMessage(primes);
};

function findPrimesInRange(start, end) {
    const primes = [];
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
