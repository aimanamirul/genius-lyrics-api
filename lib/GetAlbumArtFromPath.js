const cio = require('cheerio-without-node-native');
const axios = require('axios');

const baseUrl = 'https://thingproxy.freeboard.io/fetch/https://www.genius.com';

/**
 * @param {string} path
 * @param {string} apiKey
 */
module.exports = async function(apiKey, path) {
	if (!path) throw 'No path was provided';
	try {
		const dataUrl = baseUrl + path + '?access_token=' + apiKey;
		var { data } = await axios.get(dataUrl);
		const $ = cio.load(data);
		const selector = $('img[class="cover_art-image"]').attr('src');
		return selector;
	} catch (e) {
		throw e;
	}
};
