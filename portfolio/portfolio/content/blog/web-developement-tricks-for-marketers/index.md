---
title: Web Development Tricks for Marketers
date: "2021-04-18"
tags: [HTML, SEO, Analytics, Google, Marketing]
thumbnail: ./web-dev-marketing.png
description: This blog post is aimed at helping non-technical marketing professionals, especially entry-level marketers, who don't have the basic experience of using HTML.
---

Howdy, Team!

This blog post is aimed at helping non-technical marketing professionals, especially entry-level marketers, who don't have the basic experience of using HTML.

For instance, as a marketer, SEO (or **S**earch **E**ngine **O**ptimization) is an important factor in attracting traffic to your website which can result in an increase lead generation and/or sales. To optimize your search engine ranking and performance (SERP), you need add `meta` tags to a website HTML. The task may be daunting for a number of reasons:

- Marketers may be wary of touching code, even HTML. However, they have the skills to communicate the SEO description based on keyword performance on Google
- Web developers can easily add meta tags to HTML. However, knowing which words and how to describe the company so that the website is listed on the first page of Google search results.

# Search Engine Optimization

I mentioned search engine optimization (SEO) above in passing. However, I feel that it may be important to discuss what SEO actually is, why it's important, and how can a marketer enhance it themselves without paying out money.

Search engine optimization is defined as "the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic." The use of certain **keywords** and **phrases** make it easier for users to find your website via search engines.

As a marketer, you have the opportunity to work with multiple teams in a company and being cross-function team member is highly desirable in the career field. From my own personal experience, I understand that you may need something done quickly but the developer team also has their own tasks and fires to put out. Knowing how to manipulate HTML and add `meta` will help ease the stress on your shoulders and get certain tasks done without the wait time.

## The Structure of HTML

Below is the general structure of an HTML document. To generalize and give you a crash course in HTML.

The `head` tag surrounds other tags that are used to manipulate or enhance the website and what we see in the body. In the `head`, we can include things like `<script>` tags for JavaScript. As we see below, we import our CSS styling via a `link` tag.

The `body` tag surrounds everything in public view on a website. Any text, videos, pictures, lists, sections, colors, etc. 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Meta tags can do a lot more than just help with SEO -->
    <title>First WebPage</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1>This is the biggest heading tag used for name of the comapany</h1>
    </header>
    <nav>
        <ul>
            <li>This is a list.</li>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
    </nav>
    <section>
        Havn't you liked this answer yet!
    </section>
    <footer>
        Copyright &copy; 2019-2020
    </footer>
  <img src='https://imagesource.com/image.jpg' alt="image"/>
  <h2>The structure of HTML Doc</h2>
</body>

</html>
```

Here's what you can expect to find for different `meta` tag properties and enhance our SEO performance:

```html
		<meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Grow your Business Digitally | In Hyderabad" />
    <meta property="og:description" content="Neoistone is a reliable, fast and robust platform for all the needs of Hosting and Domain name development tools is so easy to use that litespeed it makes fast site" />
    <meta property="og:url" content="http://localhost/" />
    <meta property="og:site_name" content="Neoistone: Best Web Development and Hosting services" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Grow your Business Digitally | In Hyderabad" />
    <meta name="twitter:description" content="Neoistone is a reliable, fast and robust platform for all the needs of Hosting and Domain name development tools is so easy to use that litespeed it makes fast site" />
    <meta name="twitter:image" content="http://localhost/static/brand/banner_logo.png" />
    <meta name="theme-color" content="#ee5b3e" />
```

# Media Optimization for Speed

Regardless of your technical background, we all know that speed is king and having a website with fast load times is what we're always looking for. A slow website can cost you a strong user base and possibly sales. There are a lot of ways to speed up a website, but one easier way that won't require you to be super technical is to optimize your media.

Yes, it's true images, videos, and graphics can be improve engagement. However, there is a negative side. If the media files are too large, they can cause your website load times to slow down. The best way to reduce image size is through compression (there's a lot of tools to help). Other ways include using the `srcset` and `size` attributes.

```html
<img srcset="/img/blog/responsive-images-lg.png 730w,
             /img/blog/responsive-images-md.png 610w,
             /img/blog/responsive-images-sm.png 350w"
     src="/img/blog/reponsive-images.png"
     alt="responsive images">
```

The `srcset` attribute allows you to have multiple images sources that will render the image depending on the size of the viewport.

# Conclusion

You don't need to spend a lot of money to learn HTML and CSS. You can easily go through FreeCodeCamp's [course work](https://www.freecodecamp.org/learn). And if you feel that you want to learn more, there's other courses listed on the website to help guide you and you can find others on Udemy.