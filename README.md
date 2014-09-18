BooleanSeries
=============

A stack-like javascript bit series buffer

## Use

```javascript
// Make room for 60 bits
var binarySeries = BooleanSeries(60); 

// Add values
binarySeries.add(true);
binarySeries.add(false);
binarySeries.add(true);

// Count values
biarySeries.count(true);   // 2
binarySeries.count(false); // 1

// Print as int-tuple (str)
binarySeries.toString(); // 5,0,60,3

// Check explicit values
binarySeries.at(0); // true
binarySeries.at(1); // false

// Construct from int-tuple string
var newBinarySeries = BooleanSeries("5,0,60,3");
newBinarySeries.at(0); // true
newBinarySeries.at(1); // false
```

## Performance
* O(n) insertion with n capacity, O(1) in use
* O(n) count with n capacity and O(logn) with n value, amortized O(1) in use
* O(1) lookup
* Linear O(n/16) in memory with n capacity, overhead ratio of 1 due to floating point basis
