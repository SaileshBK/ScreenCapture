// Our Buttons
const videoElement = document.querySelector('video');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const videoSelectBtn = document.getElementById('videoSelectBtn');

const { desktopCapturer, remote } = require('electron');
const { Menu } = remote; // This allows us build native menu in front end.
