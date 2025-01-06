function calculateDiscounte(price, discount) {
    
    if (typeof price !== 'number' || typeof discount !== 'number') {
        throw new Error('price and discount must be numbers');
    }
    if (price < 0) {
        throw new Error('Price can not be negative');
    }
    if (discount < 0 || discount > 100) {
        throw new Error('Discount must be between 0 and 100.');
    }


    return price - (price * (discount / 100));
}


try {
    console.log(calculateDiscounte(100, 20)); 
    console.log(calculateDiscounte(200, 0)); 
    console.log(calculateDiscounte(120, 13));
    
    console.log(calculateDiscounte('100', 20)); 
    console.log(calculateDiscounte(100, '20')); 
    console.log(calculateDiscounte(100, -10)); 
    console.log(calculateDiscounte(100, 120)); 
    console.log(calculateDiscounte(-50, 10)); 
} catch (e) {
    console.log('Error:', e.message);
}