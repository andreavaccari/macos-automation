#!/usr/bin/env osascript -l JavaScript

// import "@jxa/global-type";
// import { Application } from "@jxa/types";

// tsc error: https://github.com/JXA-userland/JXA/issues/11
const itunes = Application('iTunes');
itunes.includeStandardAdditions = true;

// Set playback repeat mode
// itunes.songRepeat = 'one';
// console.log(itunes.songRepeat());

// Play track
// var track = itunes.tracks.whose({name: {_contains: 'Rain light patters sparse aftermath'}});
// itunes.play(track[0], {once: true});

var plist = itunes.playlists.whose({name: {_contains: 'Focus — Light Rain'}});
plist.first.play();
