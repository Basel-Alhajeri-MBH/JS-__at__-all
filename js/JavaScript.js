/*
 * (C) Basel.Al_hajeri?.MBH() 2021 All Rights Reserved.
 * LOVE YOU JS AS YOU ARE
 * JS@*: JS at All is a code generates all the JS offline and iterates all global objects, functions, and whatever till no missed property or method .And down are JS datatypes, some important JS constructor functions ,and DOM Elements whatever.. including details and many things*
 */
void function(global, factory) {
    return typeof module !== 'undefined' && module.exports ? module.exports = factory() : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global);
}('undefined'!==typeof globalThis ? globalThis : 'undefined'!==typeof window ? window : 'undefined'!==typeof self ? self : this || Object.getPrototypeOf({}), function(exports) {
    'use strict'; 
    /*
     * The Object.getAllPropertyNames method returns an array of all properties & method and splits the protos if the second argument is a truth value e.g. Object.getAllPropertyNames([], true);
     * In ES5 if the first argument is not an object then it will throw a TypeError
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
    if(!Object.getOwnPropertyNames) return;
    exports = exports&&exports.Object||Object; // e?e.o:o; for undefined the globalThis and window in global strict e&e.o|o;
    var name = 'getAllPropertyNames';
    exports[name] = function getAllPropertyNames(object, split__proto__) { // why there is no syntex like function ['functionName']() {}
        var properties = [];
        var object__proto__ = object;
        var objectValueOf;
        if(undefined!==object)
        for(; null!==object; object = Object.getPrototypeOf(object)) { // undefined==null
            objectValueOf = Object.getOwnPropertyNames(object);
            Array.prototype.push.apply(properties, split__proto__ ? [[object, objectValueOf]] : objectValueOf);
        }
        return properties;
    };
    exports[name].toString = function toString() { 
        return 'function '+name+(~Object.toString().indexOf('\n') ? '() {\n    [MBH code]\n}' : '() { [MBH code] }');
    }.bind(exports), Object.defineProperty(exports[name], 'toString', {
        writable: true,
        configurable: true,
        enumerable: false,
    }); // bound anyway... and it may also out of the __proto__ so it will be an own property
    Object.defineProperty(exports, name, {
        enumerable: false,
        writable: true,
        configurable: true
    }); Object.defineProperty(exports[name], 'prototype', {
        value: undefined, // delete 50%
        writable: false,
        configurable: false,
    });
    return exports;
}), function(global) {
    'use strict'; //this code was made just for having fun .I made it also for people who really need it from different levels
    if(!global) return;
    if(!Object.getPrototypeOf) {
        Object.getOwnPropertyNames = function() {
            return [];
        };
        Object.getPrototypeOf = function() {
            return null;
        };
        Object.getAllPropertyNames = function() {
            return []; // for IE[1-8] 
        }; // and if the browser does not support
    }
    var globalObjects = Object.getAllPropertyNames(global, true);
    var toString = Object.prototype.toString;
    var isExtensible = Object.isExtensible || function() {
        return true;
    };
    var description = Object.getOwnPropertyDescriptor || function() {
        return {}; //...
    };
    var hasOwnProperty = Object.hasOwnProperty;
    var toArray = Array.prototype.slice;
    var concat = Array.prototype.concat;
    var filter = Array.prototype.filter || function filter(callback) {
        if(this===null || this===undefined) {
            throw new TypeError('called on null or undefined'); // filter for global JS monads
        }
        var na = [];
        var _this = toArray.call(this);
        for(var i = 0, len = _this.length; i !== len; i++) {
            if(callback(_this[i], i, _this)) {
                na.push(_this[i]);
            }
        }
        return na;
    }; 
    var forEach = Array.prototype.forEach || function forEach(callback) {
        if(this===null || this===undefined) {
            throw new TypeError('called on null or undefined');
        }
        var _this = toArray.call(this);
        for(var i = 0, len = _this.length; i !== len; i++) {
            callback(_this[i], i, _this);
        }
    };
    var map = Array.prototype.map || function map(callback) {
        if(this===null || this===undefined) {
            throw new TypeError('called on null or undefined');
        }
        var na = [];
        var _this = toArray.call(this);
        for(var i = 0, len = _this.length; i !== len; i++) {
            na.push(callback(_this[i], i, _this));
        }
        return na;
    };
    var some = Array.prototype.some || function some(callback) {
        if(this===null || this===undefined) {
            throw new TypeError('called on null or undefined');
        }
        var _this = toArray.call(this);
        for(var i = 0, len = _this.length; i !== len; i++) {
            if(callback(_this[i], i, _this)) {
                return true;
            }
        }
        return false;
    };
    var reduce = Array.prototype.reduce || function reduce(callback, initialValue) {
        if(this===null || this===undefined) {
            throw new TypeError('called on null or undefined');
        }
        var _this = toArray.call(this);
        if(!_this.length) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        initialValue = this[0];
        for(var i = 1, len = _this.length; i < len; i++) {
            initialValue = callback(initialValue, _this[i], i, _this);
        }
        return initialValue; 
    };
    var indexOf = Array.prototype.indexOf || function indexOf(value, from) {
        if(this===null || this===undefined) throw new TypeError('called on null or undefined');
        var _this = toArray.call(this);
        for(var i = from >>> 0, len = _this.length; i < len; i++) {
            if (_this[i] === value) {
                return i; // this will work with NaN including
            }
        }
        return -1;
    };
    // made them faster then I thought 8-)
    /*
     * were added to ECMA-262 in the 5th edition
     * in these local codes must be appling|calling|binding with an ArrayLike
     * MBH's polyfills ... They are just local codes it can do all the purpose .I think there are polyfills about these methods in MDN
     * not clone with the native code .. could do 95% clone of a native method but .*? no problem
     */
    var classList = {
        /*
         * most of Element.classList methods aren't supported in old browsers and some aren't supported in IE browser at all..
         * MBH's polyfills of them are found in this local variable
         */
        add() {
            if (
                !(this instanceof Element)
            ) 
                return;
            if (
                this.classList &&
                this.classList.add
            )
                this.classList
                  .add.apply(
                      this.classList, arguments
                  );
            else 
                this.className += ' ' + map
                  .call(
                      arguments, function(item) {
                          return ~indexOf.call(
                              this.className.
                                split(' '), item
                       ) ? '' : item ;
                      }.bind(this)
                  ).join(' '); 
        },
        remove() {
            if (
                !(this instanceof Element)
            ) 
                return;
            if (
                this.classList &&
                this.classList.remove
            )
                this.classList
                  .remove.apply(
                      this.classList, arguments
                  );
            else {
                var _arg = arguments;
                this.className = filter.call(
                    this.className.
                      split(' '),
                    // used match(/\w+/g) but after chacking how does it work I do this as splitted
                    function(item) {
                        return !~indexOf
                          .call(_arg, item);
                    }
                ).join(' ');
            }
        },
        replace(oldClass, newClass) {
            if (
                !(this instanceof Element)
            ) 
                return;
            if (
                this.classList &&
                this.classList.replace
            )
                this.classList
                  .replace(
                      oldClass, newClass
                  );
            else 
                this.className = map.call(
                    this.className
                      .split(' ') || [], function (item) {
                        return oldClass.test ? oldClass.test(item) ? newClass : item : oldClass === item ? newClass : item;
                    }
                ).join(' ')
        },
        item(index) {
            if (
                !(this instanceof Element)
            ) 
                return;
            if (
                this.classList &&
                this.classList.replace
            )
                return this.classList
                  .item( index );
            else
                return this.className
                  .split(' ')[ index ];
        },
        contains(item) {
            if (
                !(this instanceof Element)
            ) 
                return;
            if (
                this.classList &&
                this.classList.replace
            )
                return this.classList
                  .contains(item);
            else
                return !!~indexOf.call(
                    this.className
                      .split(' '), item
                );
        },
        toggle(oldClass, newClass) {
            newClass = newClass || '';
            if (
                !(this instanceof Element)
            ) 
                return;
            if (
                this.classList &&
                this.classList.replace
            )
                this.classList
                  .toggle(oldClass, newClass);
            else
                this.className = classList.contains
                  .call(this, oldClass) ? [].map
                    .call(
                        this.className
                          .split(' '),
                        function(item) {
                            return item === oldClass ? newClass : item;
                        }
                    ).join(' ') : classList.add
                      .call(this, oldClass);
        }
    };
    var emreg = new RegExp().source;
    var funcForm = /^function\s*([^\s\(]*)[^\(]*.([^\)]*)[^{]*.([^]*)\}$/;
    var obj_tstForm = /^\[object\s(.*?)\]$/;
    var doc = global.document;
    var node = doc.createElement.bind(doc);
    var nodeList = doc.querySelectorAll.bind(doc);
    var text = doc.createTextNode.bind(doc);
    var listener = global.addEventListener;
    var typedef = {
        undefined: {
            example: undefined,
            isAvailable: true,
            color: 0x777
        },
        object: {
            example: null,
            isAvailable: true,
            color: 0x22F
        },
        number: {
            example: Math.E,
            isAvailable: true,
            color: 0xFA0
        },
        string: {
            example: 'MBH string',
            isAvailable: true,
            color: 0x393
        },
        function: {
            example: function example(argument) {
                var result = 1;
                while( argument>1 ) {
                    result *= ~~argument;
                    argument--;
                }
                return result;
            },
            isAvailable: true,
            color: 0x399
        },
        boolean: {
            example: true,
            isAvailable: true,
            color: 0xFA4
        },
        bigint: {
            isAvailable: 'function' === typeof BigInt,
            color: 0xE21
        },
        symbol: {
            isAvailable: 'function' === typeof Symbol,
            color: 0x0
        }
    };
    var smConstructorFunctions = filter.call(
        map.call([
            Date,
            RegExp,
            Error,
            Array,
            ArrayBuffer,
            Uint8Array,
            Int8Array,
            Uint16Array,
            Int16Array,
            Uint32Array,
            Int32Array,
            Float32Array,
            Float64Array, 
            Uint8ClampedArray,
            'BigUint64Array',
            'BigInt64Array',
            'DataView'/* toJoin */,
            'Promise'/*, 'CustomEvent'*/,
            'URL',
            /* 'WebSocket', if no server*/
            global.TextEncoder,
            global.TextDecoder, 
            'Map',
            'Set',
            'WeakMap',
            'WeakSet', /*'WeakRef',*/ 
            (
                global.AudioContext||
                global.mozAudioContext||
                global.webkitAudioContext||
                global.oAudioContext
            ),
            global.XMLHttpRequest,
            global.FileReader,
            global.Blob // DOM Elements
        ], function(e, i) {
            var prms = concat
                .call(Array(16), [new ArrayBuffer(4), function(){}/*, 'event'*/, 'http://www.mbh.com/js/code/last?code=this#hash'/*, 'ws://www.mbh.com/path/wss-handler'*/]);
            if(hasOwnProperty.call(global, e)) {
                if(prms[i]) return new global[e](prms[i]);
                return new global[e]();
            }
            return 'string'!==typeof e && e && new e();
        }),
        function(b) {
            return b;
        }
    );
    // was no decided to do it in the DOM scope
    var await = function(ms) {/*@cc_on
  // conditional IE < 9 only fix
  @if (@_jscript_version <= 9)
  (function(f){
     window.setTimeout = f(window.setTimeout);
     window.setInterval = f(window.setInterval);
  })(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c instanceof Function?c.apply(this,a):eval(c)},t)}});
  @end
@*/
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
        ms = (ms || length)*(per ? per < 9 ? per : 10 : 0.1);
        ms *= 1.05; // 105% think better than 100% by a small time because it is not load buffer
        var time = timeStamp >>> 0 || ms;
        loader.style
          .animation = 'load '+time+'ms linear';
        loader.style
          .width = '100%';
        //global.setInterval(function() {}, time/100);
        global.setTimeout(function() {
            loader.style
              .animation = '';
            loader.style.width = 0;
        }, time);
    };
    var rSearch = function(value) {
        value = value || ''; // the new JS feature parent ||= global;
        var lower = String.prototype.toLowerCase;
        var _this = this || '';
        if (ignoreCases.checked) {
            value = lower.call(value);
            _this = lower.call(_this);
        }
        return String.prototype
          [useRegExp.checked ? 'search' : 'indexOf'].call(_this, value);
    };
    var es5, complete;
    var body;
    var append;
    var loader;
    var defaultSearch;
    var deepSearch;
    var useRegExp;
    var ignoreCases;
    var splitProtos;
    var searchResult;
    var searchType;
    var searchConstructor;
    var timeStamp;
    var length;
    var sh;
    var value;
    var per;
    var unknown; // example IE under 9 version and some bad browsers
    if( !('hidden' in HTMLElement.prototype) ) Object.defineProperty(HTMLElement.prototype, 'hidden', {
        set(boolean) {
            this.style.display = boolean ? 'none' : '';
        },
        get() {
            return Boolean(this.style.display);
        }
    }); // --IE11 ?!! as I remember
    else if( !('remove' in Element.prototype) ) Object.defineProperty(Element.prototype, 'remove', {
        value: function remove() {
            this.hidden = this.parentNode ? this.parentNode.removeChild(this) : true;
        }.bind(global)
    });
    try {
        Object.getAllPropertyNames(1);
    } catch (_) {
        es5 = true;
    }
    if(typedef.symbol.isAvailable)
        typedef.symbol.example = Symbol.iterator;
    if(typedef.bigint.isAvailable)
        typedef.bigint.example = BigInt(1e+25);
    listener.call(
        doc,
        'readystatechange',
        main,
        true
    );
    listener.call(
        global,
        'DOMContentLoaded',
        isDone
    );
    listener.call(
        global,
        'load',
        isDone,
        true
    );
    listener.call(
        global,
        'abort',
        function() {
            alert('loading');
            location.reload(); 
        }
    );
    listener.call(
        global,
        'error',
        function() {
            (console.error)(
                'Code bug please concat me(Basel.Al_hajeri?.MBH()) if you can to see if I can solve it...\n\rthanks'
            );
            // Maybe something missed in IE browser but as my knowledge may I solved all its missions  :) but I still wander about the append in it may will be too slow
            confirm('Something went wrong: This code maybe not avalible in this browser :(\n\nreload or or click cancel to continue it may will work well?') && location.reload();
        }
    );
    function isDone(event) {
        if (!complete) main(event);
        if(timeStamp===undefined) {
            timeStamp = event.timeStamp;
            await (); // for late load or problem with chaning state
        } else timeStamp = 0;
        var input = sh ||
            nodeList('input[type=search]')
              .item(0) || {};
       if(input.value) {
           input.value = '';
           oFilter();
       }
    }
    function main(event) { // window.event works in FireFox 63+
        console.log(doc.readyState); // this scope is document scope but not safe using this in outside function and with non-calling
        if(!complete) complete = true;
        else return;
        body = doc.body || nodeList('body')[ 0 ];
        append = body.append || body.appendChild || function(namespaceURI) {
            unknown = true;
            if(this instanceof Element) {
                this.insertAdjacentHTML(
                    'beforeEnd',
                    namespaceURI.outerHTML || namespaceURI.textContent
                );
            }
        };
        if(!/^JS.?(@|[Aa]t).*?(\*|[Aa]l{2})$/.test(doc.title)) {
            doc.title = 'JS @__at__ *all';
        }
        defaultSearch = node('input');
        deepSearch = node('input');
        ignoreCases = node('input');
        useRegExp = node('input');
        splitProtos = node('input');
        searchResult = node('input');
        searchType = node('input');
        searchConstructor = node('input');
        
        timeStamp = event.timeStamp,
        event.preventDefault
        && event.preventDefault(); // --IE9
        //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        loader = nodeList('.loadem')[ 0 ] || node('div');
        sh = nodeList('input')[ 0 ] || function() {
            var fs = node('div');
            var sh = node('input');
            var sg = node('button');
            classList.add.
              call(fs, 'bsearch');
            append.call(
                fs, sh
            ),
            classList.add
              .call(sg, 'sg')
            ,
            append.call(
                sg, text('\u2261')
            ),
            append.call(
                fs, sg
            ),
            append.call(
                body, fs
            );
            return sh
        }();
        await ();
        // no need form tag becz of no need insert new names
        var dialog = node('div');
        var ls = [
            node('label'),
            node('label'),
            node('label'),
            node('label'),
            node('label'),
            node('label'),
            node('label'),
            node('label')
        ];
        var sg = nodeList('.sg')[ 0 ];
        var bl = node('div');
        var t1 = node('p'),
            t2 = node('p'),
            t3 = node('p'),
            t4 = node('p');
        var d, n;
        if( !nodeList('.loader').length ) 
        {
            classList.add
              .call(
                 loader, 'loadem'
              ),
              append.call(
                  body, loader
              );
        }
        classList.replace
          .call(
              loader,
              'loadem', 'loader'
          );
        dialog.hidden = true;
        for(d in ls) {
            fds: for(n of [
                [splitProtos, text('split protos')],
                [defaultSearch, text('default search by name')],
                [deepSearch, text('deep search')],
                [useRegExp, text('use RegExp - search')],
                [ignoreCases, text('ignore cases - search')],
                [searchResult, text('search on result')],
                [searchType, text('search with type')],
                [searchConstructor, text('search with constructor')]
            ][ d ]) {
                if(n instanceof HTMLInputElement) {
                    n.type = 'checkbox';
                    if(+d) {
                        listener.call(
                            n,
                            'change',
                            search
                        )
                    }
                }
                append.call(
                    ls[ d ], n
                );
            }
            append.call(
                dialog, ls[ d ]
            );
        }
        defaultSearch.checked 
        = deepSearch.checked 
        = useRegExp.checked 
        = ignoreCases.checked 
        = searchType.checked 
        = searchConstructor.checked 
        = true;
        /*append.call(
            body, dialog
        );*/
        sh.type = 'search';
        sh.placeholder = 'search...';
        listener.call(
            sh,
            'input',
            search
        );
        listener.call(
            sh,
            'search',
            function() {
                await(0.5);
                this.blur && this.blur();
            }
        );
        append.call(
            sh.parentNode, dialog
        );
        listener.call(
            sg,
            'click',
            function() {
                this.textContent = dialog.hidden ? '\xD7' : '\u2261';
                if(unknown) {
                    dialog = nodeList('.bsearch > div').item(0) || dialog;
                }
                dialog.hidden = !dialog.hidden;
            }
        );
        classList.add
          .call(
              bl, 'block'
          );
        append.call(
            body, bl
        );
        append.call(
            t1, 
            text(
                'JS Global Objects in (DOM&)Content scope'
            )
        );
        classList.add
          .call(
              t1, 'title'
          );
        append.call(
            t2, 
            text(
                'Datatypes in JavaScript'
            )
        );
        classList.add
          .call(
              t2, 'title'
          );
        append.call(
            t3, 
            text(
                'Some important constructor functions'
            )
        );
        classList.add
          .call(
              t3, 'title'
          );
        append.call(
            t4,
            text('DOM Elements')
        );
        classList.add
          .call(
              t4, 'title'
          );
        append.call(
            body, t1
        );
        splitProperties(
            global
        );
        append.call(
            body, t2
        );
        for(d in typedef)
            if(typedef[d].isAvailable)
                insertJSElement(typedef[d].example, {});
        append.call(body, t3);
        for(d of smConstructorFunctions)
            insertJSElement(d, {});
        append.call(body, t4);
        for(d of "a\
        abbr\
        address\
        area\
        article\
        aside\
        audio\
        b\
        base\
        bdi\
        bdo\
        blockquote\
        body\
        br\
        button\
        canvas\
        caption\
        cite\
        code\
        col\
        colgroup\
        data\
        datalist\
        dd\
        del\
        details\
        dfn\
        dialog\
        div\
        dl\
        dt\
        em\
        embed\
        fieldset\
        figcaption\
        figure\
        footer\
        form\
        h1\
        h2\
        h3\
        h4\
        h5\
        h6\
        head\
        header\
        hr\
        html\
        i\
        iframe\
        img\
        input\
        ins\
        kbd\
        label\
        legend\
        li\
        link\
        main\
        map\
        mark\
        meta\
        meter\
        nav\
        noscript\
        object\
        ol\
        optgroup\
        option output\
        p\
        param\
        picture\
        pre\
        progress\
        q\
        rp\
        rt\
        rtc\
        ruby\
        s\
        samp\
        script\
        section\
        select\
        slot\
        small\
        source\
        span\
        strong\
        style\
        sub\
        summary\
        sup\
        table\
        tbody\
        td\
        template\
        textarea\
        tfoot\
        th\
        thead\
        time\
        title\
        tr\
        track\
        u\
        ul\
        var\
        video\
        wbr".split(/\W+/)) 
            if (
                !(node(d) instanceof HTMLUnknownElement)
            )
                insertJSElement(
                    d,
                    //Object.setPrototypeOf({}, {[d]: node(d)})
                    Object.defineProperty({}, d, {
                        value: node(d),
                        enumerable: false,
                        writable: true,
                        configurable: true
                    })
                );
        // still DOM Events, CSSOM, svg namespace elements ,and whatever can make load too late however they still found in the Global Objects > itatewdnbacr
    }
    function search() {
        value = sh.value;
        if(!defaultSearch.checked) {
            deepSearch.checked = false;
        }
        if(useRegExp.checked)
        try {
            new RegExp(value);
        } catch(_) {
            classList.add
              .call(sh, 'rre');
            oFilter(false);
            return;
        }
        if(classList.item
          .call(sh, 0)||!useRegExp.checked);
        classList.remove
          .call(sh, 'rre');
        oFilter();
    }
    function oFilter(parent) {
        var objs = 
            parent || nodeList('div');
        // nodeList is an ArrayLike has length and indexes position it also has forEach method in modern browsers...list-like
        objs = filter.call(objs,
            function(e) {
                return 'string'===typeof e.dataset.parents;
            }
        );
        await (
            objs.length
        );
        if(false===parent) {
            return forEach.call(objs, function(e) {
                e.hidden = true;
            });
        }
        forEach.call(objs, function(e) {
            var saes = deepSearch.checked;
            if(es5) saes = typeof e.object==='object';
            e.hidden = !(
                saes && some.call(
                    map.call(
                        concat.call(Object.getAllPropertyNames(e.object),
                            typedef.symbol.isAvailable&&(e.object!==null||e.object!==undefined) ? reduce.call(
                                Object.getAllPropertyNames(e.object, true), function(n, a) {
                                    return concat.call(n, 
                                        map.call(
                                            Object.getOwnPropertySymbols(a[0]), function(s) {
                                                return s.description||'Symbol'
                                            }
                                        )
                                    );
                                }, []
                            ) 
                        : []), function(e) {
                            return ~rSearch.call(e, value);
                        }
                    ),
                    function(e) { 
                        return e
                    }
                ) || some.call(concat.call([], defaultSearch.checked ? e.dataset.parents.split(',') : [], searchType.checked ? e.dataset.types.split(',') : [], searchConstructor.checked ? e.dataset.consts.split(',') : [], searchResult.checked ? e.dataset.results.split(',') : []), function(e) {
                    return ~rSearch.call(e, value);
                })
            ) && !e.opened;
        });
        // use mark here is ganna make the code very slow because of many of elements existed in the document
    }
    function insertJSElement(name, parent, indent, parentNode, hp, p0) {
        per = Date.now();
        parent = parent===undefined ? global : parent;
        indent |= 0;
        parentNode = parentNode || body;
        //var hash = Math.random();
        var reason;
        var type;
        try {
            parent[name]} 
            
        catch(error) {
            type = error.name;
            reason = error.message||type;
            var unv = node('div');
            var et = node('p');
            unv.style = 'font-size: xx-small;\
            margin: 0 auto;\
            padding: 0.35em;\
            color: silver;\
            margin-left: '+(3+indent)+'vw;';
            unv.dataset.parents = (parentNode.dataset.parents ? parentNode.dataset.parents+',':'')+name;
            unv.dataset.types = '';
            unv.dataset.consts = (parentNode.dataset.consts ? parentNode.dataset.consts+',' : '')+type;
            unv.dataset.results = (parentNode.dataset.results ? parentNode.dataset.results+',' : '')+reason;
            append.call(
                unv, 
                text(
                    name +': unavalible -> '+reason
                )
            );
            classList.add
              .call(et, 'et');
            et.hidden = true;
            append.call(
                et,
                text(
                    type
                )
            );
            append.call(
                unv, et
            );
            listener.call(
                unv,
                'click',
                function() {
                    await(0.5);
                    this.hidden = !this.hidden;
                }.bind(et)
            );
            append.call(
                parentNode, unv
            );
            per = Date.now() - per;
            return;
        }
        var object = ('string'!==typeof name||name==='MBH string')&&!hp ? name : 'null'===name ? null :'__proto__'===name ? Object.getPrototypeOf(parent) : function() {
            var res;
            try {
                    res = p0[ name ]; // for just checking what proto is the property in used getAllPropertyNames
                } 
            catch(_) {
                    res = parent[ name ]}
            return res;
        }();
        //return hash; // callee, caller, and arguments in modern browsers some TypeError thrown in modern or old browsers or constructor and unsupport cookie ,SecurityError whatever ...
        //if(hash===object) return;
        var otype = typeof object;
        var constructor = null!==object&&undefined!==object ? 'constructor' in global ? object.constructor ? functionName(object.constructor) : '' : '<abbr style="color: gold;" title="it may not its constructor .Please update your browser to get the 100% correct constructor if you care about it or it doesn\'t matter.">&#9888;'+objectName(object)+'</abbr>' : void 0;
        var cat = node('div');
        var tb = node('table');
        var r1 = tb.insertRow(-1);
        var r2 = tb.insertRow(-1);
        var t1 = r1.insertCell(-1);
        var t2 = r2.insertCell(-1);
        var t3 = r2.insertCell(-1);
        var c1 = node('code');
        var c2 = node('code');
        var ul = node('ul');
        var ds = [isExtensible(object) ? 'extensible' : 'non-extensible'], _ds = null!=parent && description(parent, name), d;
        name = 'symbol'===typeof name ? name.description||"Symbol.?" : name;
        cat.dataset.parents = parentNode.dataset.parents ? parentNode.dataset.parents + ',' :  '';
        cat.dataset.results = parentNode.dataset.results ? parentNode.dataset.results + ',' :  '';
        cat.dataset.types = (parentNode.dataset.types ? parentNode.dataset.types+',' : '')+otype;
        cat.dataset.consts = (parentNode.dataset.consts ? parentNode.dataset.consts + ',' : '')+constructor;
        //cat.dataset.parents += insertParent ? ','+insertParent : ''; // Trailing comma is supported in IE9+
        cat.object = object;
        cat.style.overflowX = 'auto';
        cat.opened = false;
        tb.width = 95-indent+'%';
        tb.summary = 'JS Element';
        tb.style.margin = '6px 2.5vw 6px '+(indent+2.75)+'vw';
        r2.hidden = true;
        t1.setAttribute(
            'colspan', 2
        );
        classList.add
        .call(
            t1, 't1'
        );
        classList.add
          .call(
              c1,
              'gobject', otype
          );
        if(hp) {
            var np = node(hp.node);
            append.call(
                np, text(hp.prefix)
            );
            np.style.color = hp.color;
            classList.add
              .call(np, 'prefix');
            append.call(
                t1, np
            );
        }
        t2.insertAdjacentHTML(
            'afterbegin', 
            (
                'type: '+otype + (
                    constructor ? '\nconstructor: '+constructor : ''
                )
            )
            .replace(/^/mg, '<font color="silver">&gt;&nbsp;</font>')
            .replace(/\n/, '<br>')
        ); // can null!=object ? objectName(object) : '' in many cases as I said it is about the constructor variable for constructor method unsupported will be a big probability that is the correct constructor or not and it can created another global constructor can be instanced and no mean every constructor are a constructor in the env
        classList.add.call(
            t2, 'typeof'
        );
        ul.type = 'none';
        classList.add.call(
            t3, 'info'
        );
        if(_ds)
        for(d in _ds) {
            if(~'get set'.indexOf(d)) {
                ds.push(d+'() {}');
                continue;
            } else if(d==='writable') {
                _ds[d] || ds.push('read-only');
                continue;
            } else if(d==='enumerable'&&_ds[d]) {
                ds.push('enum');
                continue;
            }
            else if(d==='configurable'&&!_ds[d]) ds.push('non-'+d);
            else continue;
        }
        ul.insertAdjacentHTML(
            'afterbegin',
            '<li>'+ds.join(_ds ? '</li><li>' : '')+'</li>'
        ); // this way is faster than the any others
        append.call(
            t3, 
            ul
        );
        append.call(
            c1,
            text(
                'object'===typeof name ? null===name ? 'null' 
                : objectName(name) : otype==='bigint' ? Number(object) // hmm may it is not found in all js but will do an example for it
                : typeof name==='function' ? functionName(object)||'anonymous' 
                : name
            )
        );
        c2.style.color = hexColor(
            typedef[otype].color
        );
        cat.dataset.parents += c1.textContent;
        switch(otype) {
            case 'function':
               append.call(
                    c2,
                    text(
                        function() {
                            var ft = object.toString(), 
                                sf = /([^\(]*).([^\)]*).*?\{([^]*)\}$/, f;
                            if(funcForm.test(ft))
                              f = ft.match(funcForm);
                            else if(sf.test(ft))
                              f = ft.match(sf);
                            else f = ft;
                            cat.fs = {
                                true: '\u0192() {'+f[3].slice(0, 22)+'... }',
                                false: '\u0192('+f[2]+') {'+f[3]+'}'
                            };
                            if(f[3].length<=22) cat.fs.true = cat.fs.false;
                            else if(f===ft) cat.fs.true = cat.fs.false = f;
                            return cat.fs[f[3].length>22];
                        }()
                    )//'f'.italics()+'() '+JSON.stringify(object.toString()).slice(1, -1).match(/{[^]*}$/);
               );
                break;
            case 'bigint':
                append.call(
                    c2, 
                    text(
                        object+'n'
                    )
                );
                break;
            case 'string':
            //case 'object':
                append.call(
                    c2, 
                    text(
                        function() {
                            var s = typeof JSON!=='undefined'&&JSON.stringify('\u0000').length===8 ? JSON.stringify(object) : object.replace(
                                /[\u0000-\u001F\u0022\\\u2028\u2029]/g, function(e) {
                                    var $ = {8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r', 34: '"', 92: '\\'};
                                    var cc = e.charCodeAt();
                                    if($[cc]) return $[92]+$[cc];
                                    cc = cc.toString(16);
                                    return $[92]+'u'+Array(5-cc.length).join('0')+cc;
                                }
                            ); // JSON may was added in 5th edition of ECMA-262
                            cat.fs = {
                                true: s.slice(0, 30)+'...'+s.slice(-1),
                                false: s
                            };
                            if(s.length<=30) cat.fs.true = cat.fs.false;
                            return cat.fs[s.length>30];
                        }()
                    )
                );
                break;
            case 'object':
                if (object!==null)
                cat.fs = {
                    false: objectName(object),
                    get true() {
                        return this.false + ' {'+function() {
                            var res;
                            try {
                                res = object.toString();
                                if(obj_tstForm.test(res)) throw Error();
                                else if(!res.length) res = 'undefined'!==typeof JSON&&'undefined'!==JSON.stringify(object) ? JSON.stringify(object) : res;
                            } catch(_) {
                                res = '...';
                            }
                            return res.replace(/^|$/g, ' ');
                        }()+'}';
                    },
                };
                append.call(
                    c2, 
                    text(
                        cat.fs ? cat.fs.true : 'null'
                    )
                );
                break;
            case 'symbol':
                append.call(
                    c2, 
                    text(
                        'Symbol('+object.description+')'
                    )
                );
                break;
            default:
                append.call(
                    c2, text(
                        object
                    )
                );
        }
        cat.dataset.results += c2.textContent;
        append.call(
            t1, c1
        );
        append.call(
            t1, 
            text(
                ': '
            )
        );
        append.call(
            t1, c2
        );
        new RegExp(emreg).test(
            ''.match(
                new RegExp(emreg)
            ).join('')
        );
        per = Date.now() - per;
        listener.call(
            tb,
            'click',
            function() {
                var opened = cat.opened;
                r2.hidden = opened;
                cat.opened = !opened;
                loader.style.width = '25%'; // non-supported browsers
                c2.style
                  .whiteSpace = !opened ? 'pre-wrap' : 'nowrap'; //toggle
                if(cat.fs) 
                    c2.textContent = cat.fs[opened];
                if(opened) 
                    for(var i = 0, elems = toArray.call(cat.children||cat.childNodes), len = elems.length, _ = await(len)&0; i !== len-1; elems[++i].remove());
                else 
                splitProperties(object, indent+4, cat);
                if(!classList.item.call(nodeList('input[type=search]').item(0), 0)&&value&&!filter.call(cat.dataset.parents.split(','), function (e) {return ~rSearch.call(e, value)}).length) 
                    oFilter(cat.children||cat.childNodes);
            },
            true
        );
        append.call(
            cat, tb
        );
        append.call(
            parentNode, cat
        );
    }
    function splitProperties(object, indent, parentNode) {
        if(null===object||undefined===object) {
            await(0.5);
            return; // JS monads checker for some elements which equals to undefined
        }
        var p, pp;
        var protoPara, symPara;
        var np = false;
        var ownPs = !es5||'object'===typeof object ? splitProtos.checked ? Object.getAllPropertyNames(object, true) : Object.getOwnPropertyNames(object) : [];
        var spSy = function(object) {
            if(typedef.symbol.isAvailable) {
                for(var s of Object.getOwnPropertySymbols(object)) {
                    insertJSElement(s, object, indent, parentNode, {
                        prefix: '*',
                        color: 'red',
                        node: 'sup'
                    });
                }
            }
        };
        length = !splitProtos.checked ? ownPs.length : reduce.call(ownPs, function(n, e) {
            n += e[1].length;
            return n;
        }, 0);
        await();
        if(!splitProtos.checked) {
            for(p of ownPs) {
                if(hasOwnProperty.call(object, p)) {
                    insertJSElement(p, object, indent, parentNode);
                }
            }
            spSy(object);
            if(!~indexOf.call(ownPs, '__proto__')) {
                insertJSElement('__proto__', object, indent, parentNode, {
                    prefix: '@',
                    color: 'grey',
                    node: 'span'
                });
            }
        } else {
            for(p of ownPs) {
                if(np) {
                    protoPara = node('p');
                    classList.add
                      .call(protoPara, '__proto__');
                    protoPara.style.textIndent = indent+3.75+'vw';
                    append.call(
                        protoPara, 
                        text(
                            '__proto__: '+objectName(p[0])
                        )
                    );
                    append.call(parentNode || body, protoPara);
                } else np = true;
                for(pp of p[1]) {
                    if(hasOwnProperty.call(p[0], pp)) {
                        //if(pp==='__proto__') object = null;
                        insertJSElement(pp, pp==='__proto__' ? p[ 0 ] : object, indent, parentNode, null, p[ 0 ]);
                    }
                }
                spSy(p[0]);
            }
        }
    }
    function functionName(func) {
        return 'name' in Function.prototype ? func.name : func.toString()
          .match(funcForm)[ 1 ];
        // missed in IE
        // https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
    }
    function objectName(object) {
        return toString.call(object)
          .match(obj_tstForm)[ 1 ];
    }
    function hexColor(hex) {
        hex = hex.toString(16);
        var length = hex.length;
        if(length > 6) return '#000';
        else if(length < 6 && length > 3) return '#'+Array(7-length).join(0)+hex;
        else if(length < 3) return '#'+Array(4-length).join(0)+hex;
        return '#'+hex;
    }
	if('_cordovaNative' in global) delete global._cordovaNative;
}(this && (this.window || this.self) || function(global) {
    'use strict';
    var toString = Object.prototype.toString;
    var indent = '';
    var toStringTag = /^\[object\s(.*?)\]$/;
    var jsout;
    var out;
    if(Object.getAllPropertyNames) {
        if('undefined'!==typeof console) {
            jsout = console.log.bind(console);
        } else if('undefined'!==typeof print) {
            jsout = print.bind(global);
        }
        top: for(var ps of Object.getAllPropertyNames(global, true)) {
            if(null!==ps[ 0 ]&&indent.length) {
                jsout(Array(50).join('#'));
                jsout(indent+'@__proto__: '+toString.call(ps[ 0 ]).match( toStringTag )[ 1 ]);
            }
            for(var p of ps[1]) {
                try {
                    ps[ 0 ][ p ];
                } catch (e) {
                    jsout(indent + p + ': (x) '+e);
                    jsout(Array(50).join('?'));
                    continue top;
                }
                if('object'===typeof ps[ 0 ][ p ]&&ps[ 0 ][ p ]!==null) {
                    out = toString.call(ps[ 0 ][ p ]).match(toStringTag)[ 1 ] + ' {...}';
                } else {
                    out = (ps[ 0 ][ p ] +'').replace(/\r|\n|\r\n|\t|\s{4}/g, '');
                }
                jsout(indent + p + ': ' + out);
                jsout(Array(p.length+out.length+indent.length+3).join('-'));
            }
            for(p of Object.getOwnPropertySymbols(ps[ 0 ])) {
                jsout(indent + '*['+p.description+']: '+(out = ps[ 0 ][ p ]));
                jsout(Array(p.description.length+out.length+indent.length+5).join('-'));
            }
            indent += Array(5).join(' ');
        }
    }
}('undefined'!==typeof globalThis ? globalThis : this));
