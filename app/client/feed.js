Template.feed.helpers({
  post() {
    return Posts.find({}, {sort: {createdAt: -1}});
  }
});
