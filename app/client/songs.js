Template.feed.helpers({
  'post': function() {
    return Posts.find({}, {sort: {createdAt: -1}});
  }
});
