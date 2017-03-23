# TwitterQueue

This is a small single page app that allows me to queue up tweets so I can keep my twitter updated when I'm traveling 

This is built on Rails, a Ruby based MVC framework, which was selected because of its robustnes and modularity, as well as the fact that it has a strong ORM that makes working with PostgresSQL a breeze, as well as allowing a no-hassle roll out of a time tested authorization system, so that expanding the app beyond a simple personal app become much easier. Postgress also alows us to plan to scale the app, as its very robust. Each tweet, along with when it was tweeted is stored so I can see how often i'm tweeting (and be reminded when I haven't sent out a tweet in a while). 

The delayed-job gem was used to allow the user to delay the tweets, this is also backed by Postgress, and the functions it calls are located in the tweet model. 

This app allows me to queue up tweets to be tweeted on a twitter account of my choice. While this functionality exists in the wild, the ability to do it the way I would like is a paid service, and has some undesriable limitations. As of right now I'm running this locally on a server for home use. 

AngularJS is used for the front end, serving as a single page app. This allows extensibility as we develop more robust user statistics, and gives a more seamless user experience. 
