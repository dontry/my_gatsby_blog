---
layout: post
title: Augmenting types
---

JavaScript allows us make new method available to a specific type.
For example, we can augment Function.prototype with a new method like this:

        Function.prototype.method = function(name, func){
            this.prototype[name] = func;
            return this;
        };


Morever, we can augment a specific type with a new method like this:

        Number.method('integer', function(){
            return Math[this < 0 ? 'ceiling' : 'floor'](this);
            });

        document.writeln((-10/3).integer())

This method help us convert a Number type to integer.