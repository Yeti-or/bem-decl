var buildKey = require('./util').buildKey;

module.exports = function (fromDecl, whatDecl) {
    var hash = {};

    // build index on what declaration
    for (var i = 0, l = whatDecl.length; i < l; ++i) {
        hash[buildKey(whatDecl[i])] = true;
    }

    return fromDecl.filter(function (item) {
        return !hash[buildKey(item)];
    });
};
