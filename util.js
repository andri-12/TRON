// util.js
//
// A module of utility functions, with no private elements to hide.
// An easy case; just return an object containing the public stuff.

"use strict";


var util = {


// RANGES
// ======

clampRange: function(value, lowBound, highBound) {
    if (value < lowBound) {
	value = lowBound;
    } else if (value > highBound) {
	value = highBound;
    }
    return value;
},

wrapRange: function(value, lowBound, highBound) {
    while (value < lowBound) {
	value += (highBound - lowBound);
    }
    while (value > highBound) {
	value -= (highBound - lowBound);
    }
    return value;
},

isBetween: function(value, lowBound, highBound) {
    if (value < lowBound) { return false; }
    if (value > highBound) { return false; }
    return true;
},


// RANDOMNESS
// ==========

randRange: function(min, max) {
    return (min + Math.random() * (max - min));
},

shuffle: function(arr) {
    var length = arr.length;
    var temp, index;
    for(var i in arr) {
        index = Math.floor(Math.random() * length);

        length--;

        temp = arr[length];
        arr[length] = arr[index];
        arr[index] = temp;
    }
    return arr;
},


// MISC
// ====

square: function(x) {
    return x*x;
},

keyCode: function(key) {
    return key.charCodeAt(0);
},

// DISTANCES
// =========

distSq: function(x1, y1, x2, y2) {
    return this.square(x2-x1) + this.square(y2-y1);
},

wrappedDistSq: function(x1, y1, x2, y2, xWrap, yWrap) {
    var dx = Math.abs(x2-x1),
	dy = Math.abs(y2-y1);
    if (dx > xWrap/2) {
	dx = xWrap - dx;
    };
    if (dy > yWrap/2) {
	dy = yWrap - dy;
    }
    return this.square(dx) + this.square(dy);
},


// CANVAS OPS
// ==========

clearCanvas: function (ctx) {
/*    var prevfillStyle = ctx.fillStyle;
    ctx.fillStyle = "#282828";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "gray";
    for(var i = 0; i <= g_canvas.width; i++) {
      for(var j = 0; j <= g_canvas.height; j++) {
        if (i%25 == 0 || j%25 == 0) ctx.fillRect(i, j, 0.5, 0.5);
      }
    }
    ctx.fillStyle = prevfillStyle;
    */
},

clearBackground: function (ctx) {
  var prevfillStyle = ctx.fillStyle;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = prevfillStyle;
},

setUpCanvas: function(ctx) {
  ctx.fillStyle = "#282828";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "gray";
  for(var i = 0; i <= g_canvas.width; i++) {
    for(var j = 0; j <= g_canvas.height; j++) {
      if (i%25 == 0 || j%25 == 0) ctx.fillRect(i, j, 0.5, 0.5);
    }
  }
},

strokeCircle: function (ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
},

fillCircle: function (ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
},

fillBox: function (ctx, x, y, w, h, style) {
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = style;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = oldStyle;
}

};
