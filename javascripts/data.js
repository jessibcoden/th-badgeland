"use strict";

const dom = require('./dom.js');
let profile = '';

const loadProfiles = () => {
	$.ajax(`https://teamtreehouse.com/jessicabrawner.json`).done((data) => {
		profile = data;
		console.log("profile", profile);	
		}).fail((error) => {
			console.log("error", error);
	});
};

const getProfiles = () => {
	return profile;
};

module.exports = {loadProfiles, getProfiles};