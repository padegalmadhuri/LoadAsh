//Concat
var concati = function (arr) {
    return arr.flat();
};
var x = [1, 2, [3], [[4, 5]]];
console.log(concati(x));
//Chunk
var chunk = function (array, size) {
    var chunked_arr = [];
    for (var i = 0; i < array.length; i++) {
        var last = chunked_arr[chunked_arr.length - 1];
        if (!last || last.length === size) {
            chunked_arr.push([array[i]]);
        }
        else {
            last.push(array[i]);
        }
    }
    return chunked_arr;
};
console.log(chunk([1, 2, 3, 4, 5], 2));
//Compact
var compact = function (array1) {
    var compact_arr = [];
    array1.filter(function (value) {
        if (value !== 0 && value != "" && value !== undefined && value !== false)
            compact_arr.push(value);
    });
    return compact_arr;
};
console.log(compact([1, 2, "", undefined]));
//formPairs
var formPairs = function (keys, values) {
    var result = {};
    keys.forEach(function (key, i) { return result[key] = values[i]; });
    console.log(result);
};
var keys = ['One', 'Two', 'Three'];
var values = [11, 22, { id: 1, name: "madhuri" }];
formPairs(keys, values);
//Intersection
var intersection = function (arr1, arr2) {
    var common = arr1.filter(function (element) { return arr2.indexOf(element) !== -1; });
    return common;
};
console.log(intersection([1, 2, 3], [1, 4, 5]));
//tail
var tail = function (taarr) {
    var taarr1 = [];
    for (var i = 1; i < taarr.length; i++) {
        taarr1.push(taarr[i]);
    }
    return taarr1;
};
console.log(tail([1, 2, 3, 4, 5]));
//head
var head = function (hearr) {
    if (hearr.length > 1) {
        return hearr[0];
    }
    else {
        return undefined;
    }
};
console.log(head([]));
console.log(head(['1', 2, 3]));
//indexOf
var indexOf = function (arri, sear, start) {
    if (start > 0) {
        for (var i = 0; i < arri.length; i++) {
            if (arri[i] === sear) {
                return i;
            }
            else {
                return -1;
            }
        }
    }
    else {
        for (var i = arri.length - 1; i >= 0; i--) {
            if (arri[i] === sear) {
                return i;
            }
            else {
                return -1;
            }
        }
    }
};
console.log(indexOf([1, 2, 3, 'a'], 'a', -1));
