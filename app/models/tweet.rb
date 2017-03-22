
class Tweet < ApplicationRecord 
  #for this to work figaro must be configured
  #because these keys are sensitive, they are not included in the repo.
  #they may be generated following the twitter API docs
  #In a future extension, the keys will be generated dynamically
  #by taking the username and password and making a request to generate these via the twitter API
  #for now they're hardcoded to my account. 

  def self.initialize_client
   Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["CONSUMER_KEY"]
      config.consumer_secret     = ENV["CONSUMER_SECRET"]
      config.access_token        = ENV["ACCESS_TOKEN"]
      config.access_token_secret = ENV["ACCESS_SECRET"]
    end
  end

  def self.send_tweet
    client = initialize_client unless client
    client.update("Test 2 the APIIng")
  end
end

