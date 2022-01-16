---
title: "What I've learned since graduating from a coding bootcamp, Part 1"
date: "2021-03-07"
tags:
  [
    Flatiron School,
    Coding Bootcamp,
    Graduation,
    Burnout,
    Productivity,
    Education,
    Learning,
  ]
thumbnail: ./1_hCYovji_u-UpsDzsk5j1VQ@2x.jpeg
description: A slight departure from the usual programming but necessary.
---

_Since graduating from Flatiron School in late October 2020, I have gone through different refactors of my weekly schedule, bought various courses on Udemy, and tried to research the best, free options to expanding on my technical education. So I felt that I should write this kind of a post to tell you what I learned about productivity and the new strategy that I'm doing now to help someone in similar shoes._

_I wanted to make this blog post interactive with opportunities for you, the reader, to answer personal questions for yourself to create your own productivity strategy._

# It's the journey, not the destination

## Avoid the Burnout

<div style='position:relative; padding-bottom:calc(76.67% + 44px)'><iframe src='https://gfycat.com/ifr/MetallicDeliriousAmericanrobin' frameborder='0' scrolling='no' width='100%' height='100%' style='position:absolute;top:0;left:0;' allowfullscreen></iframe></div>

I remember the Monday after graduating and attempting to start learning the same way I did every day for the previous three and a half months.

**💡Tip #1** — Give yourself sometime to recharge. It's not a race!

I didn't realize it but the program had burnt me out tremendously and then I took the next week off completely.

Yes, you need to plan a schedule, but it needs to be a schedule that you can commit to. You have to be honest with yourself and know your own work ethic.

Personally, I'm the type of person who can't sleep well if I have outstanding questions and research that needs to be done. Therefore, I now space out my days more so that if I come across something that peaks that side of me, I can spend 4 hours or more researching the topic and learning why it works the way it does without the guilt of not completing everything on my to-do list.

❓**Question #1 — _Being honest with yourself — What is your work ethic? How long can you stay focused?_**

## Creating Your Schedule

Based on your answer for the previous section's question, this section will be short and you can answer the question easily.

Creating your schedule depends on how you learn, your work ethic, and your ability to stay focused and distraction-free during the day.

**💡Tip #2** — Always schedule in breaks.

After graduating from the bootcamp and after some refactors since then, my strategy was centered around learning a little bit each day. I would start my morning with breakfast and watching a Udemy course on data structures and algorithms. (Yeah, I hate them, you hate them, and loads of Senior Devs hate them ... but for some reason, it's still a common practice to hire via whiteboarding problems.) The early afternoon consisted of lunch and learning Redux (or at least it was at the time / learn any topic that peak your interest) for two and half hours. Late afternoon to about early evening (around 3:30 to 6 pm), I was learning another topic or doing research or taking another video course, like the UX design one I did in the winter. The evening was pretty easy, dinner and work on a project.

At a glance, this schedule might seem nice and well-balanced and it was, until I hit road blocks in your learning where things take extra time. For example, let's say you're doing algorithm practice and can't solve a hard problem, do you give up and comeback tomorrow or do you want to struggle more and attempt to solve it the same day?

There's no right or wrong answer. I would hit similar roadblocks and struggle so my schedule would be backed up and I would feel guilty about being behind on my progress or lack thereof.

These days I have balanced out my schedule more. I go for a nickel-and-dime approach and doing a little bit each day. My daily to-do list looks something like this:

- Network and contact at least two people
- Try to apply to two jobs
- Work on a project piece-by-piece throughout the day
- Weekly - Learn something new
- Weekly - Learn a data structure or algorithm (this is new because I just started learning these again.)

My day is structured and spaced out. I don't feel overwhelmed and I can see my progress my focusing on new topics each week and practicing with them by building them into projects.

❓**Question #2 — _How do you learn?_**

# ...Now, the technical part

_I thought that I should add a section of areas where I've improved upon and new things I learned via my new productivity strategy as well as general technical concepts that I think bootcamp grads should think about._

In this post, I'll talk about adding more security to authentication when using an

## Secure Authentication using JWT (JSON Web Tokens)

I'm not sure if this is something taught in all bootcamps but JWTs (JSON Web Tokens) can be incorporated in other programming languages, especially if you're creating an SPA (Single Page Application) with a hosted backend. In my case, I'll demonstrating with Rails API-only backend and a React frontend using Redux for state management (don't worry, a proper Redux blog series is in the works).

In Flatiron, they taught us to use JWT in our authentication for our applications after we moved away from using Rails to build a full-stack application. We were taught to store our tokens via `localStorage`.

### `localStorage`

All you need to know `localStorage` is that it works similar to a cookie where you store data in a key-value pair. However, this object is easily accessible with JavaScript, which doesn't provide the necessary security you would need in a real-world application. When searching online for `localStorage` security you'll find debates and how JWTs should be stored and the different attacks you expect from either option, CSRF and XSS attacks.

Storing your token in `localStorage` will make vulnerable to XSS attacks. Similarly, if you store your token inside an HTTP-only cookie, you can be vulnerable to CSRF attacks. However, you would need to restrict requests to only specific domains, here's a sample of what should look like:

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
        allow do
        origins 'localhost:3001'
#! Restricted requests to only come from localhost:3001
#! Once I host my project, I will replace this with the hosted domain name

        resource '*',
        headers: :any,
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: true
    end
end
```

To protect against attacks, I opted to store my token inside of an HTTP-only cookie so that it's only accessible from the server-side. When a user logs in on the frontend, the data is sent to the server via a POST HTTP request where the user is found by email and then we match the password that the user inputted on the form. If both the email and password are correct, we create a token by encoding their `id`. Then, we create a signed cookie using the encoded token that we created.

```ruby
cookies.signed[:jwt] = {value: token, httponly: true,   expires: 1.hour.from_now}
#! Here I have the cookie expire every hour
```

`auth_controller.rb`

```ruby
class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

		def create
			@user = User.find_by(email: user_login_params[:email])
			if @user && @user.authenticate(user_login_params[:password])
				token = encode_token({ user_id: @user.id })
        cookies.signed[:jwt] = {value: token, httponly: true,   expires: 1.hour.from_now}
        render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
			else
	      render json: { message: 'Invalid username or password' }, status: :unauthorized
			end
    end

    private

    def user_login_params
        params.require(:user).permit(:email, :password)
    end
end
```

For the next part to make sense, you should look at the this code snippet:

`application_controller.rb`

```ruby
class ApplicationController < ActionController::API
    include ::ActionController::Cookies
    before_action :authorized

    def encode_token(payload)
#user logins or renews their sessions via the client
#The payload is the user_id that we are passing through
        JWT.encode(payload, 'random_secret_key', "HS256")
#The JWT.encode method takes in multiple arguments
# # we're taking the payload, using a string key of your choice, and the algorithm we want to use
# # # # The algorithm parameter is usually optional however we need it because we're going to be decoding the token with the same algorithm
    end

    def token_from_cookie
# Remember in the previous snippet that we created a signed HTTP-only cookie
# As I mentioned, it can accessed only via the server
# this method simply return the token
        cookies.signed[:jwt]
    end

    def decoded_token
        if token_from_cookie
#if we have a HTTP-only token coming from the client
            token = token_from_cookie
# assign it to the variable token
            begin
                JWT.decode( token, 'random_secret_key', true, algorithm: 'HS256')
#once that condition is true, we begin to decode it
#We decode the token similar to how we encoded it
# # Our parameters -> the token, our key, we're verifying true, and the algorithm
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def current_user
        if decoded_token
# If we were able to decode the token
            user_id = decoded_token[0]['user_id']
# the return value is an array, we want the first index ([0]) and grab the user_id number (i.e. 1)
            @user = User.find_by(id: user_id)
# We then return a user object after we found that user via the id number
        end
    end

    def logged_in?
        !!current_user
    end

    def authorized
        render json: {message: "Please log in"}, status: :unauthorized unless logged_in?
    end
end
```

There are two methods that I want to show you that deal with a user logging in and staying logged in on the client. When our user logs in and it's a 200 code, we send a GET request to the API which runs the `profile` method below so that we can return the user object.

As you can see it calls on `current_user`. In the code snippet above, `current_user` is a method in the `ApplicationController`. This method calls on the `decoded_token` method as well.

`users_controller.rb`

```ruby
class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :session_renew]
...

	def profile # Returns a user object
		render json: { user: UserSerializer.new(current_user) }, status: :accepted
	end

	def session_renew # Returns a user object && renews the cookie and token
		user_id = current_user[:id]
# If we previously logged in that means we have the HTTP-only cookie on our browser
# We go through all of steps mentioned in the comment for decoding and returning the user
#Assign the id number to the variable user_id
		token = encode_token({ user_id: user_id })
# We encode the id and create a new token
		cookies.signed[:jwt] = {value: token, httponly: true,   expires: 1.hour.from_now}
#Create a new signed HTTP-only cookie which also updates the expireation date
		render json: { user: UserSerializer.new(current_user) }, status: :accepted
#Returns a user object
	end

...
end
```

When we're on the client side, we create an object in `localStorage`, something simple with no defining information. You create a object like `{ isLoggedIn: true }` and in the client, if `isLoggedIn === true`, we can run a function that will send a GET request to the server and invoke the `session_renew` method. (We use a GET request because it's a much safer option than a POST request which could get hijacked.) Additionally, the `session_renew` method, where we create a new token and renew the cookie token and expiration date, is invoked each time we reload a page or visit another part of the site.

# Conclusion

I decided to break this up into separate parts so that you can first work on a schedule the strategy that works for you.

Next week's post will be about the job search and something I used for the first time, styled-components in React!
