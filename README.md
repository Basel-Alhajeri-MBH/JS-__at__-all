# JS @\_\_at\_\_ *all
A JS generator for show all JS objects|topics with its followers by __\_\_click\_\___ with a search box with some options

*supports in all envs with a new method in Object* 
> `Object.getAllPropertyNames`: a new method by [**MBH**](https://github.com/Basel-Alhajeri-MBH) shows the object properties and if the second parameter sets truth will split properties in arrays first array is the parent \_\_proto\_\_ and the second is its children . However in the ES5 edition it throws a `TypeError` with non-object same as [Object.getOwnPropertyNames](https://wiki.developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
> #### Sample :
> ```javascript
> Object.getAllPropertyNames(Math); // ["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2","constructor","__defineGetter__","__defineSetter__","hasOwnProperty","__lookupGetter__","__lookupSetter__","isPrototypeOf","propertyIsEnumerable","toString","valueOf","__proto__","toLocaleString"]
> Object.getAllPropertyNames(Math, true); // [[[object Math],["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"]],[[object Object],["constructor","__defineGetter__","__defineSetter__","hasOwnProperty","__lookupGetter__","__lookupSetter__","isPrototypeOf","propertyIsEnumerable","toString","valueOf","__proto__","toLocaleString"]]
> Object.getAllPropertyNames(''); // ES5 TypeError ECMA2015+ [...]
 ```



### Some description
It after loading show all the the global objects and the datatypes in browsers with some important constructor functions with the DOM Elements .and by click on the object on __browers__ the object are ganna shows its properties with method + \_\_proto\_\_ or for void this use the split protos on the options to see the default object as it .And it has also a search box on the top for search about the object with the search options on the options it is a very nice examples for many of reasons for many js people

###### CODE IS EXPLAINED EVERYTHING
