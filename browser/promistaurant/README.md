# The Promistaurant

In this exercise we are going to emulate a restaurant that makes meals based on the preferences of the guests.

![The menu](./menu-french.jpg?raw=true 'The menu')

## The preparation process:

Every meal needs to go through the following steps:

- Select a size and a base to prepare the meal
- Add the vegetables to the portion
- select and add the topping
- pick and add the sauce
- add the previously prepared extra's to the meal
- bag the finished meal

And every step can only be started after the previous step has finished.
Two separate meals can however be prepared at the same time.

Also important to note is that all extra's need to be prepared before they can be added to the meal. The preparation of these extra's can be done in parallel to the preparation of the meals themselves.

## The exercise

Inside the kitchen/steps.js files you can find exported functions for every step of the preparation process. The required values for the ingredients can be found in the kitchen/ingredients.js file.

Examples on how to use the files can be found in the example.js files in the 1-simple-orders, 2-with-extras and 3-multiple-dishes directories.
Based on these examples try to complete the exercises in these directories.
