"use strict";
import {
        default as AnsiUp
    } from 'ansi_up';

function runStream(stream) {
    return stream.on('data', function (chunk) {
        return process.stdout.write(convert.toHtml(chunk));
    });
};

if (file) {
    const stream = require('fs').createReadStream(file, {encoding: 'utf8'});
    htmlStream(stream);
} else {
    process.stdin.setEncoding('utf8');
    htmlStream(process.stdin);
}


function main() {

}
