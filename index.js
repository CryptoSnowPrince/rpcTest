const WebSocket = require('ws');

var socket = new WebSocket("ws://localhost:8555/");

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
