const Paint = function (litres) {
    this.litres = litres;
};

Paint.prototype.checkIfEmpty = function () {
    if (this.litres === 0) {
        return true;
    } else {
        return false;
    }
};

Paint.prototype.emptyCan = function () {
    this.litres = 0;
};



module.exports = Paint;