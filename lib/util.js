exports.buildKey = function (obj) {
    var scope = obj.scope;

    return typeof scope === 'object' ? stringify(scope) : scope + stringify(obj);
};

function stringify(obj) {
    var res = obj.block || '';

    if (obj.elem) {
        res += this.elemDelim + obj.elem;
    }

    if (obj.modName) {
        var modVal = obj.modVal;

        if (modVal || modVal === 0 || !obj.hasOwnProperty('modVal')) {
            res += this.modDelim + obj.modName;
        }

        if (modVal && modVal !== true) {
            res += this.modDelim + modVal;
        }
    }

    return res;
}
