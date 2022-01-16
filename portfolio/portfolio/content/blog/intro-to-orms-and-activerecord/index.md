---
title: "#6 OOP Series: An Intro to ORMs and ActiveRecord"
date: "2021-02-28"
tags: [Ruby, Programming Languages, Object-Oriented Programming]
thumbnail: ./Object oriented programming.jpg
description: In this series, I will go over the principles and foundations of object-oriented programming and some principles on databases.
---

*In this series, I will go over the principles and foundations of object-oriented programming and some principles on databases. I will be using Ruby because I feel comfortable in the language; however, these concepts with some minor changes in syntax can be translated to other object-oriented programming languages, like Java, Node.js, etc.*

Hi all, 

We're starting to get to the end of this series on object-oriented programming principles but I'm still going to continue blogging. I think the next blog series might be on either a strategy to work use to learn a new programming language or perhaps I'll do some one-off posts about full-stack applications.

# Recap

In my last article, I wrote about our **many-to-many** relationship in a relational database. In this blog series, we have also talked about what a relational database is and how it's purpose is to represent the relationships we see in the real-world and want to emulate in an application.

In this blog post, I want to introduce to ORMs (object relational mapping) and popular gem in Ruby, ActiveRecord.

# What is an ORM?

In the most simplest definition, an ORM is a way for us to connect to a database and create queries to access information using our programming language. ORMs can be found in every programming language. In the Ruby, the most popular ORM is ActiveRecord (it's also a dependency in Ruby on Rails).

With an ORM, we can cut down on repetitive code and if you're like me and dislike writing out SQL statements, this will help you.

# ActiveRecord

ORMs, like ActiveRecord, help to handle a lot of the heavy lifting, repetitive methods, and relationship methods that we had to write. Remember, how much easier things became when we implemented the `attr` methods to our classes? You're about to get even happier.

As an example, using our classes from last time — `Dog`, `Person`, and `Adoption`. Last time, we said that an owner (person) can have many dogs and a dog can have many owners. The joiner class (our Single Source of Truth) that holds reference to both classes is `Adoption`. Recall, I said that you technically look at it as two **has-many/belongs-to** relationships. Using ActiveRecord, we establish this as:

`Person.rb`

```ruby
class Person
	has_many :adoptions
	has_many :dogs, through: :adoptions

end
```

`Dog.rb`

```ruby
class Dog
	has_many :adoptions
	has_many :people, through: :adoptions
end
```

`Adoption.rb`

```ruby
class Adoption
	belongs_to :person
	belongs_to :dog
end
```

Yup, the syntax is that easy. However, there is more to ActiveRecord than that. You can also find more ActiveRecord associations [here](https://guides.rubyonrails.org/association_basics.html).

Using ActiveRecord, we no longer need to create a `self.all` method or utilize the `attr` methods (some extra ActiveRecord magic). 

The next step is to take a look at my previous [blog post](https://www.alexbeciana.com/rcli_app/) and [GitHub repo](https://github.com/abeciana1/rcli_app) documentation for the Ruby gem that I created, rcli_app. My gem unpacks into a turn-key Ruby command-line application with some helpful gems.

To get the most of your application, I suggest using this [resource](https://medium.com/@weberzt/how-to-create-a-ruby-cli-app-in-a-few-easy-steps-5504fafbb363) that I found helpful when I was creating my first two command-line applications.

If you're not planning on using Ruby, then I would suggest checking out StackOverflow and any other programming language community forums to help you get started. 

# Conclusion

This blog series has been fun and I hope to create other ones.

I'm still trying to think of other topics to write about 

You can find me on [LinkedIn](https://www.linkedin.com/in/alexbeciana/) and [GitHub](https://github.com/abeciana1).