// =======
// GLOBALS
// =======
/*

Evil, ugly (but "necessary") globals, which everyone can use.

*/

"use strict";

/* jshint browser: true, devel: true, globalstrict: true */

var g_canvas = document.getElementById("myCanvas");
var g_ctx = g_canvas.getContext("2d");

//another canvas where we can clear the canvas at will and display the lives of players
var g_canvas2 = document.getElementById("background");
var g_ctxbg = g_canvas2.getContext("2d");

// Global variables that is hard to do without
var g_bikeWidthHeight = g_canvas.height/150;
var g_haltBikes = false;
var g_continueGame = false;
var g_startNewGame = false;
var g_gameOver = false;

// The "nominal interval" is the one that all of our time-based units are
// calibrated to e.g. a velocity unit is "pixels per nominal interval"
//
var NOMINAL_UPDATE_INTERVAL = 16.666;

// Multiply by this to convert seconds into "nominals"
var SECS_TO_NOMINALS = 1000 / NOMINAL_UPDATE_INTERVAL;
