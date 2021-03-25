/*
 * (C) 2021 Basel.Al_hajeri?.MBH() All Rights Reserved.
 */
void function(global, factory) {
    'use strict';
    if ('undefined'!==typeof module && module.exports) {
        module.exports = factory();
        return;
    } else if ('function' === typeof define && define.amd) {
        return define(['exports'], factory);
    }
    factory(global);
}('undefined'!==typeof globalThis ? globalThis : 'undefined'!==typeof window ? window : 'undefined'!==typeof self ? self : this || Object.getPrototypeOf({}), function(exports) {
    'use strict'; 
     /*
     * The Object.getAllPropertyNames method returns an array of all properties & method and splits the protos if the second argument is a truth value e.g. Object.getAllPropertyNames([], true);
     * In ES5 if the first parameter is not an object then it will throw a TypeError
     # Browser compatibility :
     +------------------+---------+--------+
     | browser          | Disktop | Mobile |
     +------------------+---------+--------+
     | Chrome           | 5       | 18     |
     +------------------+------------------+
     | FireFox          | 4       | 4      |
     +------------------+------------------+
     | Safari           | 5       | 5      |
     +------------------+------------------+
     | Opera            | 12.1    | 12.1   |
     +------------------+------------------+
     | Edge             | 12      |        |
     +------------------+------------------+
     | Internet Explorer| 9       |        |
     +------------------+------------------+
     | Android webview  |         | 1      |
     +------------------+------------------+
     | Sumsung Internet |         | 1.0    |
     +------------------+---------+--------+
     <+
     + Supports also in the other JS environments same as CommonJS ,NodeJS ,and CJS or there likes...
     */
    if(!Object.getPrototypeOf || Object.getAllPropertyNames) {
        return;
    }
    exports = exports&&exports.Object||Object; // e?e.o:o; for undefined the globalThis and window in global strict e&e.o|o;
    var name = 'getAllPropertyNames';
    var bind = Function.prototype.bind || function bind(bound) {
        // MBH Function.prototype.bind polyfill
        var _this = this;
        if ('function'!==typeof _this) {
            throw new TypeError('Bind must be called on a function');
        }
        return function() {
            // [native]
            return _this.apply(bound, arguments);
        };
    };
    exports[name] = function getAllPropertyNames(object, split__proto__) { // why there is no syntex like function ['functionName']() {}
        var properties = [];
        var objectValueOf;
        if(undefined!==object) {
            for(; null!==object; object = Object.getPrototypeOf(object)) { // undefined==null
                objectValueOf = Object.getOwnPropertyNames(object);
                Array.prototype.push.apply(properties, split__proto__ ? [[object, objectValueOf]] : objectValueOf);
            }
        }
        return properties;
    };
    /**
     * @param {Object} JS Element e.g. Math || 'string' for ES2015 and new String('string') for ES5
     * @param {Boolean} for turn on split protos
     * returns {Array} with all properties and methods in.
     */
    exports[name].toString = bind.call(
        function toString() { 
            return 'function '+name+(~Object.toString().indexOf('\n') ? '() {\n    [MBH code]\n}' : '() { [MBH code] }');
        }, exports
    ), Object.defineProperty(exports[name], 'toString', {
        writable: true,
        configurable: true,
        enumerable: false,
    }); // bound anyway *itktw... and it may also out of the __proto__ so it will be an own property
    Object.defineProperty(exports, name, {
        enumerable: false,
        writable: true,
        configurable: true
    }); Object.defineProperty(exports[name], 'prototype', {
        value: undefined, // delete 50% -> cancel instanceof operator
        writable: false,
        configurable: false,
    });
    return exports;
});