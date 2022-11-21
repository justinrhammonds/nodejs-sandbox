const { Coordinate } = require('../utils.js');
const { testInput, myInput } = require('./data.js');

let segmentData = createLineSegments(myInput);
let map = createMap(segmentData.largest.X, segmentData.largest.Y);
map = plotLines(segmentData.segments, map);
console.log(map.flat().filter(i => i >= 2).length);

function plotLines(segments, map) {
    segments.forEach(segment => {
        if (segment.start.X === segment.end.X ||
            segment.start.Y === segment.end.Y) {
            
            if (segment.start.X === segment.end.X) {
                let range = [segment.start.Y, segment.end.Y].sort((a,b) => a - b);
                for (let _y = range[0]; _y <= range[1]; _y++) {
                    map[_y][segment.start.X] += 1;
                }
            } else {
                let range = [segment.start.X, segment.end.X].sort((a, b) => a - b);
                for (let _x = range[0]; _x <= range[1]; _x++) {
                    map[segment.start.Y][_x] += 1;
                }
            }
            
        }
    });

    return map;
} 

function createLineSegments(input) {
    let largestX = 0;
    let largestY = 0;
    input = input.map(i => {
        [[startX, startY], [endX, endY]] = i.split(' -> ').map(ii => ii.split(',').map(m => parseInt(m)));
        largestX = (startX > largestX) ? startX : largestX;
        largestY = (startY > largestY) ? startY : largestY;
        largestX = (endX > largestX) ? endX : largestX;
        largestY = (endY > largestY) ? endY : largestY;
        return {
            start: new Coordinate(parseInt(startX), parseInt(startY)),
            end: new Coordinate(parseInt(endX), parseInt(endY))
        }
    });

    return {
        largest: new Coordinate(parseInt(largestX), parseInt(largestY)),
        segments: input
    };
}

function createMap(x, y) {
    let map = [];
    for (let _y = 0; _y <= y; _y++) {
        let row = [];
        for (let _x = 0; _x <= x; _x++) {
            row.push(0);
        }
        
        map.push(row);
    }

    return map;
}

module.exports = { createLineSegments, createMap }
