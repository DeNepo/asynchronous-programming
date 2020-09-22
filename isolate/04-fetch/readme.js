'use strict';


/* Fetching & the Fake API

  The simplest way to understand and API is like a directory
    different routes lead to different data

  Fetching data from an API goes like this (from the browser's perspective):
    1. sending an HTTP request to the correct URL
    2. ... wait to hear back from the API ...
    3. parse the HTTP response using .then
    4. do something with the data in your web page

  To simulate an API there is a folder in 04-fetchs called /fake-api
    it's a folder of .json files that you will be fetching in these examples and exercises
  You can explore the data directly from VSCode by opening the files
    this will help you to understand what is happening when you use fetch

  To understand how APIs and fetching work you can also watch your terminal
  In the web an HTTP request cycle has two main steps
    1. request  (req)
    2. response (res)
  The logs in terminal will help you to understand the HTTP cycle
  for each request (or fetch) there will be two messages:
    x. req: GET /a/file/path.json
    x. res: /a/file/path.json
  If you fetch a path that does not exist you will get a 404 message
    x. req: GET /non/existent/path.json
    x. req: 404 /non/existent/path.json

*/
