class FeedsController < ApplicationController

  def index
    @feeds = Feed.all
    respond_to do |format|
      format.html { render :index }
      format.json { render "feeds/feeds" }
    end
  end

  def create
    @feed = Feed.find_or_create_by_url(feed_params[:url])
    if @feed
      render "feeds/feed"
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def show
    @feed = Feed.find(params[:id])
    @feed.update_if_old

    render "feeds/feed"
  end

  private
  def feed_params
    params.require(:feed).permit(:title, :url)
  end

end
