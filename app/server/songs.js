var getFeed = function(){
	InstagramFetcher.fetchImages.fromTag({ tagName: 'musicfactmonday' }, function(images){
		console.log(images);
		for(var i = 0; i < images.length; i++) {
			if(images[i].user.username == 'soundfreaq') {
				var src = images[i].images.standard_resolution.url;
				var link = images[i].link;
				var createdAt = images[i].created_time;
				var username = images[i].user.username;
				var caption = images[i].caption.text;
				if(images[i].videos) {
					var video = images[i].videos.standard_resolution.url;
				} else {
					var video = null;
				}
				
				var data = {
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


	InstagramFetcher.fetchImages.fromTag({ tagName: 'happylistening' }, function(images){
		console.log(images);
		for(var i = 0; i < images.length; i++) {
			if(images[i].user.username == 'soundfreaq') {
				var src = images[i].images.standard_resolution.url;
				var link = images[i].link;
				var createdAt = images[i].created_time;
				var username = images[i].user.username;
				var caption = images[i].caption.text;
				if(images[i].videos) {
					var video = images[i].videos.standard_resolution.url;
				} else {
					var video = null;
				}
				
				var data = {
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

getFeed();

Meteor.setInterval(function() {

	getFeed();

}, 900000);