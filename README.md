# SongTexter
A program to text myself spotify links

This is built on Rails, a Ruby based MVC framework, which was selected because of its robustnes and modularity, as well as the fact that it has a strong ORM that makes working with PostgresSQL a breeze, as well as allowing a no-hassle roll out of a time tested authorization system (since user security is key)

This app does three things. It recives texts using the Twilio API, it searches Spotify using the Spotify API, and then it texts the link to the song to the number that sent it using the Twilio API. 

It also gathers usage statistics, which it keeps in a PostgreSQL Database so I can see the songs I listen the most to and buy them, to keep things secure it also uses Devise for authorization, potentially allowing more users in the future. This is also how it remembers my phone number. 

It is deployed to heroku, and uses AngularJS to serve as a single page app once the author is logged in. This allows extensibility as we develop more robust user statistics. 

It should be noted that due to Twilio usage rules, people other than myself may not be able to use the program. 