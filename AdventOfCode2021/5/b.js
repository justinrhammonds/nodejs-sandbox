const { Coordinate } = require('../utils.js');
const { testInput, myInput } = require('./data.js');
const { createLineSegments, createMap } = require('./a.js');

let segmentData = createLineSegments(myInput);
let map = createMap(segmentData.largest.X, segmentData.largest.Y);
map = plotLines(segmentData.segments, map);
console.log(map.flat().filter(i => i >= 2).length);

function plotLines(segments, map) {
    segments.forEach(segment => {
        let xDiff = segment.start.X - segment.end.X;
        let yDiff = segment.start.Y - segment.end.Y;
        let xDiff_abs = Math.abs(xDiff);
        let yDiff_abs = Math.abs(yDiff);

        // plot diagonals
        if (xDiff_abs === yDiff_abs) {
            for (let i = 0; i <= xDiff_abs; i++) {
                let xPlot = xDiff > 0 ? segment.start.X - i : segment.start.X + i;
                let yPlot = yDiff > 0 ? segment.start.Y - i : segment.start.Y + i;
                map[yPlot][xPlot] += 1;
            }
        // plot verticals
        } else if (xDiff === 0) {
            for (let i = 0; i <= yDiff_abs; i++) {
                let yPlot = yDiff > 0 ? segment.start.Y - i : segment.start.Y + i;
                map[yPlot][segment.start.X] += 1;
            }
        // plot horizontals
        } else if (yDiff === 0) {
            for (let i = 0; i <= xDiff_abs; i++) {
                let xPlot = xDiff > 0 ? segment.start.X - i : segment.start.X + i;
                map[segment.start.Y][xPlot] += 1;
            }
        }  
    });

    return map;
} 