class TweetsController < ApplicationController

  def show
    Tweet.send_tweet
  end
end
