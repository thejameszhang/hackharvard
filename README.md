## hackharvard

## Inspiration

Our original motivation came from one of our team members skipping the terms of conditions like they were nothing, and other another one bugging them about it. 

The reason someone keeps on pursuing a goal is as important as the reason they started, and hence some source of motivation was a documentary called [Terms and Conditions May Apply](https://www.imdb.com/title/tt2084953/) and an article by CNN business about [the worst terms of services ever](https://money.cnn.com/gallery/technology/2014/05/13/worst-terms-of-service/index.html).

A study conducted at the Boston College Law Review by Uri Benoliel called [The Duty to Read the Unreadable](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3313837) gives us these statistics:
- 70% of agreements had an average sentence length of more than 25
- The median Flesch Reading Ease was 34, the recommended is 60.
- The median Flesch-Kncald score was 15 years of school.

Our concerns were fully validated when we got to know that a massive tech company like Google admitted to the unreadability of its own Terms of Service in 2012 and now attempts to make it as readable as possible, but this is just an appearance of a needle in a haystack.
## What it does

The main product is the python backend, with our in-house flask-based WebApp API, which we can use for many of our goals, a chrome extension, a flutter-based android and ios app, and Qt-based local apps on mac and windows. This forms our microservice architecture. We also have a demo landing page implemented with React.

The microservice we were able to fully develop and use as a proof of concept was the chrome extension, due to its low requirements, but the ability to build sophisticated view controller mechanisms efficiently and fast.
## Chrome Extension

The Google Chrome extension is meant to be source of convenience for our users. Simply by installing our extension and selecting their required text, users can get a customized summary of complex legal documents with a single click. They can also adjust the granularity of this summary and download it as desired.

## How we built it

The Google Chrome extension is implemented in JavaScript and styled with Bootstrap. It makes use of a background service worker script and injects content scripts upon various events. We were careful about protecting user privacy and site security, with the use of best practices like avoiding identifiers, cross-site scripting and reliance on external scripts.

The landing page / Demo is built with React and Gatsby and styled with Tailwind. 

The Python backend (flask web-app) 

The Flutter app

## Challenges we ran into

## Accomplishments that we're proud of

## What we learned

## What's next for TermnCo
Scale
## Dependencies
Chrome extension: Bootstrap 4, jQuery
Flutter app: 
Landing page/ demo: React, Gatsby
Python backend: flask, flask-cors, transformers, torch (PyTorch)
