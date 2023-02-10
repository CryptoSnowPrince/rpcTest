const WebSocket = require('ws');

// var socket = new WebSocket("wss://rpc.cryptosnowprince.com/ws/");
// var socket = new WebSocket("wss://rpc.cryptosnowprince.com/ws56/");
var socket = new WebSocket("wss://rpc.cryptosnowprince.com/ws97/");

socket.onopen = function (event) {
  console.log("WebSocket connection established:", "event");
  // console.log("WebSocket connection established:", event);
};

socket.onmessage = function (event) {
  // console.log("WebSocket message received:", event.data);
  console.log("WebSocket message received:", "event.data");
};

socket.onerror = function (error) {
  console.error("WebSocket error:", "error");
  // console.error("WebSocket error:", error);
};

socket.onclose = function (event) {
  console.log("WebSocket connection closed:", "event");
  // console.log("WebSocket connection closed:", event);
};
