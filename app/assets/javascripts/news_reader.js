window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewsReader.Routers.FeedsRouter({
      $rootEl: $("div#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize()
});
