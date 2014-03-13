NewsReader.Collections.Feeds = Backbone.Collection.extend({

  model: NewsReader.Models.Feed,
  url: "/feeds",

  getOrFetch: function(id) {
    if (this.get(id)){
      var feed = this.get(id)
      feed.fetch()
      return feed;
    } else {
      var feed = new NewsReader.Models.Feed({
        id: id
      });
      feed.fetch({
        success: this.add.bind(this, feed)

      });
      return feed;
    }
  }

});

NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();
