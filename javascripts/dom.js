"use strict";

// let profileString = '';
let profileCard = '';

const domString = (profile, badges) => {
	
	profileCard += `<h2 id="name">${profile.name}</h2>
					<div id="profileImage">
						<img src="${profile.gravatar_url}">
					</div>
					<div id="badges">`;

		for(let i = 0; i < badges.length; i++) {
					profileCard +=   `<img src="${badges[i].icon_url}">`;
		}
	profileCard	+= `</div>`;


	printToDom(profileCard);
};

const printToDom = (strang) => {
	$('#profileContainer').html(strang);
};

module.exports = {domString};