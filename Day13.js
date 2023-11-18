function memoisedFibonacci(n, cache) { 
	cache = cache || [1, 1] 
	if (cache[n]) 
		return cache[n] 
	return cache[n] = memoisedFibonacci(n - 1, cache) + memoisedFibonacci(n - 2, cache); 
}
const n=8;
for (let index = 0; index < n; index++) {
    console.log(memoisedFibonacci(index));
}
