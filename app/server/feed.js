getFeed = (tag) => {
	InstagramFetcher.fetchImages.fromTag({ tagName: tag }, (images) => {
		for(let i = 0; i < images.length; i++) {
			if(images[i].user.username == 'soundfreaq') {
				let src = images[i].images.standard_resolution.url;
				let link = images[i].link;
				let createdAt = images[i].created_time;
				let username = images[i].user.username;
				let caption = images[i].caption.text;
				if(images[i].videos) {
					video = images[i].videos.standard_resolution.url;
				} else {
					video = null;
				}
				
				let data = {
				    src: src,
				    link: link,
				    username: username,
				    caption: caption,
				    video: video,
				    createdAt: createdAt
				}
				Posts.update(data, { $setOnInsert: data },{ upsert: true });
			}
		}
	});
}

getFeed('happylistening');
getFeed('musicfactmonday');

Meteor.setInterval(() => {
	getFeed('happylistening');
	getFeed('musicfactmonday');
}, 900000);