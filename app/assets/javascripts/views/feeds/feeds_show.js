NewsReader.Views.FeedShow = Backbone.View.extend({

  template: JST["feeds/show"],

  initialize: function() {
    this.listenTo(this.model, 'sync add', this.render)
    this.listenTo(this.model.entries(), 'sync add', this.render)
  },

  events: {
    "click button#refresh" : "refresh"
  },

  refresh: function () {
    this.model.fetch();
  },

  render: function() {
    var content = this.template({
      feed: this.model,
      entries: this.model.entries()
    })


    this.$el.html(content);

    return this;
  }
});
