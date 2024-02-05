// Listen for button click
document.getElementById('calculateButton').addEventListener('click', calculatePrimes);

function calculatePrimes() {
    const rangeStart = parseInt(document.getElementById('rangeStart').value);
    const rangeEnd = parseInt(document.getElementById('rangeEnd').value);

    // Create a new Web Worker
    const worker = new Worker('primeWorker.js');

    // Send range data to the worker
    worker.postMessage({ rangeStart, rangeEnd });

    // Handle messages from the worker
    worker.onmessage = function(event) {
        const primes = event.data;
        displayPrimes(primes); // Display the list of prime numbers
    };
}

function displayPrimes(primes) {
    const primeList = document.getElementById('primeList');
    primeList.innerHTML = ''; // Clear previous results

    primes.forEach(prime => {
        const li = document.createElement('li');
        li.textContent = prime;
        primeList.appendChild(li);
    });
}
