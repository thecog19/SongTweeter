# SongTweeter

The backing behind a twitter bot that tweets out music links in a predetermined way. 

This is built on Rails, a Ruby based MVC framework, which was selected because of its robustnes and modularity, as well as the fact that it has a strong ORM that makes working with PostgresSQL a breeze, as well as allowing a no-hassle roll out of a time tested authorization system, so that expanding the app beyond a simple personal app become much easier. 

This app allows me to queue up tweets to be tweeted on a twitter account of my choice. While this functionality exists in the wild, the ability to do it the way I would like is a paid service, and has some undesriable limitations. 

It also gathers usage statistics, which it keeps in a PostgreSQL Database so I can see how often i'm tweeting (and be reminded when I haven't sent out a tweet in a while). (I have provided a seed file so that sample data may be populated for a better visualization when using localy.)

It is deployed to heroku, and uses AngularJS to serve as a single page app once the author is logged in. This allows extensibility as we develop more robust user statistics. 
