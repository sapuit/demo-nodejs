var fs = require('fs'),
	promise = require('bluebird'),
	request = require('request');

var photoLinks = [{
	link: 'https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050',
	name: 'dog.jpg'
}, {
	link: 'https://unsplash.imgix.net/reserve/NxxLccbqQdGtNc7xJ43e_ancestral-home.jpg?fit=crop&fm=jpg&h=600&q=75&w=1050',
	name: 'house.jpg'
}, {
	link: 'https://unsplash.imgix.net/photo-1423439793616-f2aa4356b37e?q=75&fm=jpg&s=3b42f9c018b2712544debf4d6a4998ff',
	name: 'car.jpg'
}, {
	link: 'https://unsplash.imgix.net/photo-1422513391413-ddd4f2ce3340?q=75&fm=jpg&s=282e5978de17d6cd2280888d16f06f04',
	name: 'nightstar.jpg'
}];

function getPhoto(photoLinks) {
	return new Promise(function(fulfill, reject) {
		request.get(photoLinks.link)
			.on('error', function(err) {
				err.photo = photoLinks.link;
				reject(err);
			})
			.pipe(fs.createWriteStream(photoLinks.name)
				.on('finish', function() {
					fulfill(photoLinks.name);
				})
				.on('error', function(err) {
					reject(err);
				})
			);
	});
}

function now(txt) {
    console.log(new Date().toLocaleTimeString().replace(/T/, ' ').replace(/\..+/, '')+' '+txt);
}

console.time("getPhoto");
promise
	.map(photoLinks, function(item) {
		return getPhoto(item).then(function(result) {
			now(result);
			return result;
		});
	}, {concurrency: 6})
	.then(function(result) {
		console.log(result);
		console.timeEnd("getPhoto");
	})
	.catch(function(err) {
		console.log(err);
	});
