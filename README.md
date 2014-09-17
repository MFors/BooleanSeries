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

// Count results
biarySeries.count(true);   // 2
binarySeries.count(false); // 1

// Print as int-tuple (str)
binarySeries.ToString(); // 5,0

// Check explicit values
binarySeries.at(0); // true
binarySeries.at(1); // false
```
