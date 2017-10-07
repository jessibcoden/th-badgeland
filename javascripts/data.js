"use strict";

const dom = require('./dom.js');
let profile = '';
let badges = {};

const loadProfiles = () => {
	$.ajax(`https://teamtreehouse.com/jessicabrawner.json`).done((data) => {
		profile = data;
		badges = data.badges;
		console.log("badges", badges);
		dom.domString(profile, badges);
		console.log("profile", profile);	
		}).fail((error) => {
			console.log("error", error);
	});
};

const getProfiles = () => {
	return profile, badges;
};

module.exports = {loadProfiles, getProfiles};