## The Event Loop

> Loupe does not work for promises or async/await

So far all of the code you have written (except for the DOM code from last week) is _synchronous_.  This means that the next line of code cannot be executed until the previous has finished.  To be more technical, this means that all of your code has been executed on the _call stack_.  This is a fancy sounding term for something that's really not so difficult to understand if you try to visualize it instead of explain it.  And that's exactly what JS Tutor has been doing!  Each time you call a function in JS tutor, a new frame is opened.  That's it, that's the call stack!

But the JS engine is more complex than just what you can see in JS Tutor.  JS Tutor only visualizes code that executes on the call stack, [Loupe](http://latentflip.com/loupe/) is a website that visualizes what happens in the Event Loop.  Everything you have written and studied so far takes place in the left column of the Loupe visualization: the Call Stack.  This set of exercises is designed to help you understand how the Call Stack and the Event Loop interact by sending code out to the Event Loop with ```setTimeout``` and encouraging you to go deeper into your exercises, studying your solutions in Loupe to build a strong visual understanding of what the Event Loop is and how it works.

Loupe is an outstanding tool to understand the event loop, but it's not perfect.

There are 6 things to be aware of when studying on this site:
1. It doesn't do very well with times under 1000 ms.
    * if your setTimeouts are under 1000 ms code that passes in your browser may not pass in loupe
2. Loupe doesn't do so well if the time differences are under 500 ms
    * if the delays in your setTimeout's are less than 500ms apart, Loupe may fail code your browser passes
3. The visuals can back up if you edit and rerun the code a couple times
    * editing and rerunning a snippet in loupe can often be more confusing than refreshing and editing
    * sometimes the callstack doesn't clear after it executes some code.  this is an issue with Loupe, not what JS does
4. sometimes it just wont load your code
    * This may be because there's an error in your code ...
    * but not always.  there's nothing you can do about this, trying again later sometimes works.
    * otherwise you'll have to just figure out this exercise without it ;)
5. the visualizations don't do so well with errors.
    * sometimes it keeps moving when it shouldn't
    * sometimes it stops before it should
6. you can change how fast Loupe steps through your code by clicking on the tools in the upper left
    * 0 is the fastest, 2000 is the slowest
    * slower visualizations are easier to follow, but more likely to be incorrect
    * a delay of 0 will be tricky to watch but will be correct

so what to do about this?
- Definitely watch the video on Loupe.
- Definitely play around with some simple setTimeout's in Loupe.
- use long setTimeouts (at least 1000 ms), and set the delay in Loupe to ~100ms
- as long as the delay on Loupe is less than the difference between your timeouts, it should be fine
- If you're finding the animations are more confusing than helpful, no problem! stick to studying the exercises in your browser

A workflow might look like:
- Edit your exercises in VSC and test them first in your browser.
  (short timeouts are fine for this step, you won't have to wait as long to know if you passed :)
- If you're having trouble with an exercise, make the time-outs longer (and well-spaced) and study your snippet in Loupe
- After studying your code in Loupe, make any changes in VSC and go through this process again
- It won't be practical to use Loupe as a live editor as some of you have been with JS Tutor

> PS. Timing in JS & browsers is not always perfect!
> If you are running many exercises at once, you may see that some setTimeouts take longer than their delay
> This is because the browser is very busy evaluating all the other exercises so sometimes can't get to everything on time
> Keep this in mind in case you're ever making a project that requires precise timing


