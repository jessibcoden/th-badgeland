"use strict";

// let profileString = '';
let profileCard = '';

const domString = (profile, badges) => {
	
	profileCard += `<h2 id="name">${profile.name}</h2>
					<img id="profileImage" class="col-md-6 col-md-offset-3" src="${profile.gravatar_url}">
					<div id="badges" class="row">`;

		for(let i = 0; i < badges.length; i++) {
					profileCard +=   `<img id="badge" class="animated bounceIn bounceOut infinite col-md-1 col-md-offset-1" src="${badges[i].icon_url}">`;
		}
	profileCard	+= `</div>`;


	printToDom(profileCard);
};

const printToDom = (strang) => {
	$('#profileContainer').html(strang);
};

module.exports = {domString};