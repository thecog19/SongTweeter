class TweetsController < ApplicationController
  def index
    @tweets =  Tweet.where(sent: false)
    respond_to do |format|
      format.json { render json: @tweets }
      format.html {}
    end
  end

  def create
    respond_to do |format|
      @tweet = Tweet.create(body: params["value"], sent_at: params["hours"].to_i.hours.from_now, sent: false)
      @tweet.save
      Tweet.delay(run_at: params["hours"].to_i.hours.from_now).send_tweet(params["value"], @tweet.id)
      format.json {  render json: @tweet }
    end
  end
  

  def destroy
    @tweet = Tweet.find(params["id"])
    respond_to do |format|
      if @tweet.destroy
        format.json {  render json: @tweet }
      end
    end
  end
end
