NewsReader.Collections.FeedEntries = Backbone.Collection.extend({

  model: NewsReader.Models.Entry,

  url: function () {
    return this.feed.url() + "/entries";
  },

  initialize: function (models, options) {
    this.feed = options.feed
  },
  //
  // comparator: function(entry) {
  //   return entry.get('guid')
  // }

  comparator: function(entryA, entryB) {
    var ea = entryA.id;
    var eb = entryB.id;

    return ea < eb ? -1 : 1;
  }
});