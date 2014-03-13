NewsReader.Models.Feed = Backbone.Model.extend({

  parse: function (jsonResp) {
    if (jsonResp.entries) {
      this.entries().set(jsonResp.entries)
      delete jsonResp.entries;
    }

    return jsonResp;
  },


  urlRoot: "/feeds",

  entries: function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.FeedEntries([], {
        feed: this,
      });
    }

    return this._entries;
  }

});
