NewsReader.Routers.FeedsRouter = Backbone.Router.extend({

  routes: {
    "" : "feedIndex",
    "feeds/:id" : "feedShow"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.feeds = NewsReader.Collections.feeds;
    this.feeds.fetch();
  },

  // TODO add route functions
  feedIndex: function() {
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: this.feeds
    })


    this.swapView(indexView);
  },


  feedShow: function(id) {
    var model = this.feeds.getOrFetch(id)

    var showView = new NewsReader.Views.FeedShow({
      model: model,
    })

    this.swapView(showView);
  },

  swapView: function(newView) {
    if (this.view) {
      this.view.remove();
    }

    this.$rootEl.html(newView.render().$el);
    this.view = newView;
  }

});
