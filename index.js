import fetch from 'node-fetch';
import { calculateLastWeeksProfit } from './cc-task-3.js';

fetch("https://challenge.codingsans.com/sources/bakery/bakery.json")
    .then((response) => response.json())
    .then(calculateLastWeeksProfit);
