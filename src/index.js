import 'popper.js';
import 'bootstrap';
import {marquee} from 'jquery.marquee';
import { initMap } from './map';



$('.marquee').marquee({
    duration: 10000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
});

window.initMap = initMap;

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});