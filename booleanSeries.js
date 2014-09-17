;(function(w) {
  function BooleanSeries(size) {
    size = Math.ceil(size / 32.0);
    this.size = size;
    this.c = 0;
    this._bArr = [];
    ++size;
    while(--size) {
      this._bArr.push(0);
    }
  };
  BooleanSeries.prototype.add = function(v) {
    v = (typeof v === typeof true && v) ? 1 : 0;
    var old = 0, current = 0;
    for (var i = 0; i !== this.size; ++i) {
      current = ((1 << 31) & this._bArr[i]);
      this._bArr[i] <<= 1;
      this._bArr[i] ^= old >>> 31;
      !i && (this._bArr[i] ^= v);
      old = current;
    }
    ++this.c;
  }
  BooleanSeries.prototype.count = function(v) {
    var c = 0, a;
    for (var i = 0; i !== this.size; ++i) {
      a = this._bArr[i];
      while (a) {
        a &= (a - 1);
        ++c;
      }
    }
    return v ? c : this.c - c; 
  }
  BooleanSeries.prototype.at = function(n) {
    var i = (n / 32) | 0, j = n % 32;
    if (i >= this.size)
      throw new Error("Index 'at' : Out of bounds");
    return (this._bArr[i] & (1 << j)) >>> (j);
  }
  BooleanSeries.prototype.toString = function() {
    return this._bArr.join(",");
  }
  w.BooleanSeries = function(s) { return new BooleanSeries(s); };
})(window);