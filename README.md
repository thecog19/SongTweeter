# SongTexter
A program to text myself spotify links

This is built on Rails, a Ruby based MVC framework, which was selected because of its robustnes and modularity, as well as the fact that it has a strong ORM that makes working with PostgresSQL a breeze, as well as allowing a no-hassle roll out of a time tested authorization system, so that expanding the app beyond a simple personal app become much easier. 

This app allows me to queue up songs to be tweeted on a twitter account of my choice, be it my personal account or a bot that posts music I'm into. It will, theoretically, also take requests, allowing users on a mobile device to tweet at the bot and get a tweet in response that is the song they'd like to listen to. 

It also gathers usage statistics, which it keeps in a PostgreSQL Database so I can see which tweets are popular and what songs and generes I've tweeted execissively. (I have provided a seed file so that sample data may be populated for a better visualization when using localy.)

It is deployed to heroku, and uses AngularJS to serve as a single page app once the author is logged in. This allows extensibility as we develop more robust user statistics. 
