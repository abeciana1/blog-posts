---
title: Le Cine, a Virtual Film Club Management App
date: "2020-12-31"
tags: [Rails, ReactJS, Flatiron School, Full Stack]
thumbnail: ./old-projector.jpg
description: A film club management app to bring meaningful conversation and film lovers together under one roof.
---

In this blog post, I would like to highlight a project that means a lot to me and signified my understanding off all the concepts taught during my time at Flatiron. For my solo capstone project during Mod 5, I built an app called Le Cine, French for "the cinema" is a film club management app the to bring meaningful conversation and film lovers together under one roof.

<h2>Why?</h2>

Since the start of the pandemic, like many of us, I found myself with less of a social life. In the early days, when most wouldn’t dare step outside of their homes, people needed to find ways to entertain themselves while in quarantine.

Although we have to socially distance, it didn't mean we couldn't expand digital forms of socializing. Thankfully, my friend Russell found this as an opportunity to create a safe escape once a week in the form of the Pandemic Film Club. We have all cultivated a lasting friendship that spans across the country.

Films have always been a way to fantasize and escape from reality for a short amount of time. The creation of a film club does not only provide an opportunity for people to watch a film, it allows them to analyze, discuss, and share ideas with other people. For instance, in my friend Russell's Pandemic Film Club, we take turns hosting themed double-features. The preparation and homework each week gives that night's host something to look at, read, and interact with in a creative environment. The discussion questions for the "homework" film forces us to take our minds away from the pandemic and into something constructive. The "watch-along" film is a chance for us to share a movie that can be enjoyed and discussed afterwards.

<h2>The Tech</h2>

The app was built with Rails backend and React frontend. As a user, you can create/disband as a host and join/leave film clubs as a member while keeping track of the films you want to watch on your own or with a club. As a host of a film club, you can manage communication and create events/meetings with your club by choosing which films should be discussed and watched together.

My development approach while building the application was focused more on functionality and the end-user experience than attempting to simply push tickets to the "completed" column. For instance, I took into account how a film's show page may look without certain information (i.e. backdrop image, trailer, etc.) and added ternary statements with placeholders since the API is run by a community of volunteers. I added frontend design (using the Bauhaus design theory as my compass) as I built functionality in an attempt to simplify navigation around the app. I created additional custom routes on my backend to invoke certain actions that would benefit the end-user experience. One is a route to "/search" that I used to implement a non-case-sensitive responsive search bar that communicated to the backend to make third-party API calls to the TMDB API to search for films. I also kept track of what my MVP goals were with deadlines and steps. Using the single-responsibility principle, I created a component hierarchy tree to map out my React components to organize inheritance and renderings and reduce the time spent on possible refactoring due to not being organized/becoming lost in files.

My domain model associations were as follows:

```
CORE GOALS

User
has_many :user_clubs
has_many :clubs, through: :user_clubs
has_many :host_clubs, foreign_key: "host_id", class_name: "Club"
has_many :watchlists
has_many :movies, through: :watchlists
has_secure_password


Club
has_many :user_clubs
has_many :users, through: :user_clubs
belongs_to :host, :class_name => "User"
has_many :club_watchlists
has_many :movies, through: :club_watchlists
has_many :meetings

Movie
has_many :watchlists
has_many :users, through: :watchlists
has_many :club_watchlists
has_many :clubs, through: :club_watchlists
has_many :movie_meetings
has_many :meetings, through: :movies

Meeting
belongs_to :club
has_many :movie_meetings
has_many :movies, through: :movie_meetings

MovieMeeting
belongs_to :movie
belongs_to :meeting

UserClub
belongs_to :user
belongs_to :club

Watchlist
belongs_to :movie
belongs_to :user

ClubWatchlist
belongs_to :club
belongs_to :movie
```

<h2>Demo</h2>

Please feel free to signup to become a new user!

As a new user, you can navigate to the "Signup" page to create your own account.

You'll notice that a change occurred in the navigation bar where you can visit your dashboard, watchlist, find clubs to join, manage your club memberships, and more.

<h2>Dashboard</h2>

In your dashboard, you will notice three sections.

In the "My Clubs" section, you can see a list of all your club memberships. By clicking the "Find a Club" button, to find any clubs that are public.

In the "My Hosted Clubs" section, you can see a list of all the clubs you host. By clicking the "Create a Club" button, a modal will open and the you can fill out a form to create a club as well as choosing if the club is public or private.

In the "Upcoming Club Meetings" section, you can see a label for any of the clubs you're a member of and it's next meeting.

<h3>Clubs</h3>

By clicking the "View Details" button, you can go to the club's show page where it has it's own navigation to go back to the club homepage, view it's watchlist, view a list of all the members (contact info is hidden unless you're the host), and view a list of upcoming and previous meetings created by the club's host.

<h3>Hosting a Club</h3>

As a host of a club, you will notice that certain components will appear on the app for you. For instance, on your club's show page, only you can update the club, disband the club (as long as the member list is empty), and create a meeting (a modal form will open).

On the "Member List" page allows you to contact members via email individually or all of them as a group. You can also remove any of the members from the club.

On the club's watchlist page, only you can remove a film.

On the club's meetings page, you choose to remove/delete a meeting from the page. Similar to a regular member, you can click "View Details" to open the meeting's show page. Now, you can update details about the meeting and/or add movies for discussion or watchalong to the meeting.

<h2>Watchlist</h2>

You can also go to your personal watchlist to add/remove films. When you click on the "Add Movies To Your Watchlist button" you will be taken to the Movie Search page and you can fill out a responsive search bar to find any film you're interested in watching.

When searching you will see three buttons. "View More" allows you to go to the film's show page to learn more about it, watch a trailer, and find recommendations for other films you may enjoy. The second button, "Add to Watchlist" will add the film to your personal watchlist. The "Add to a Club Watchlist" button will add the film to a club's watchlist as long as you're the member of the club.

<h2>Future Goals</h2>

- Add an image upload field to user signup and club creation forms
- Add a SMS push notification feature that allows hosts to send messages to members about the club
- Add a email notification that will send an email that looks like the meeting show page to members
- Add CMS to allow users to create their own review articles
- Add Trackt API to lookup film's streaming platform and link
