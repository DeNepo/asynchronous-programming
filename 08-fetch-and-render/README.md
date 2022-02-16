# Fetch and Render

In this chapter you will practice integrating everything you've learned so far into small sites that fetch data from an API and render the data into the DOM.

## New Function Role: `/api-calls`

You will come across a new function role in these examples: **`/api-calls`**

These are `async` function that fetch and process data from an API before returning the data to your handlers. Your handlers will `await` the API data before updating the UI.
