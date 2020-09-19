# Asynchronous Programming (Event Loop) - Integrate

## Examples
There are 2 examples provided, which are Sketchpad and Whack-a-Mole, here's the breakdown on how things works.

Note: To keep things simpler, you don't need to focus on the `board.js` script. All it does is create a board (which basically is just a grid), and render "something" that has a `render()` function inside.

#### Sketchpad
A grid of boxes that keeps changing colors every `n` milliseconds. If a box is clicked, it will stop changing colors until it's clicked again.

To break down how to create something like Sketchpad (reverse engineer), we need to take notes of all the interesting behaviors, which are:

<details>
  <summary>All of the boxes behaves exactly the same, meaning:</summary>

  We don't have to work on a big board. To help us focus on the behavior of a single box, we can change the board size to a smaller one, even 1x1.
  ```javascript
  // init.js
  const  newBoard  =  new  Board(ColorSquare, 2, 2); // This will change the board size to 2 x 2.
  ```
</details>
<details>
  <summary>Each box has a color</summary>

  The `cycleColor()` function will handle the color generations for us. All we had to do is apply it to our box.
  ```javascript
  // color-square.js
  container.style.backgroundColor = this.cycleColor();
  ```
</details>
<details>
  <summary>The box will change color every `n` miliseconds</summary>

  This `timeoutCallback()` function will be called the first time we use it as a callback to a `setTimeout()` in the `render()` function. Note that this function will call its own `setTimeout()`, which makes this function will behaves like a `setInterval()`, neat!

  ```javascript
  // color-square.js
  timeoutCallback(view) {
    if (this.isChanging) {
      view.style.backgroundColor = this.cycleColor();
      this.timeoutId = setTimeout(
        this.timeoutCallback.bind(this, view),
        this.msDelay
      );
    }
  }
  ```
</details>
<details>
  <summary>Something is happening if we clicked a box, either it will pause **OR** continue the changes of the color</summary>

  To differentiate the behavior whether the box is changing its color or not, we need a state for it. We already defined it as `isChanging` inside the `ColorSquare` class. The `handleClick` function will toggle the state on each click.

  ```javascript
  // color-square.js
  handleClick(view) {
    if (this.isChanging) {
      clearTimeout(this.timeoutId); // This will stop the color change
    } else {
      this.timeoutId = setTimeout(
        this.timeoutCallback.bind(this, view),  // This will continue its color changing behavior.
        this.msDelay
      );
    }
    this.isChanging = !this.isChanging; // This will toggle the state
  }
  ```
</details>


#### Whack-a-Mole

A grid of boxes with whackable mole appearing randomly. It behaves mostly the same with the Sketchpad example. The only difference is that it can't be clicked anymore if a mole is already whacked, and each of the boxes have different delay of showing/hiding the mole.


To break down how to create something like Whack-a-Mole (reverse engineer) it, we need to take notes of all the interesting behaviors, which are:
- All the behaviors of the boxes in each cell are **mostly** the same as the others, the only difference is the time the mole appears. The key is using `Math.random()` to generate the delay.
- Each box has a mole.
- The mole will appear randomly.
- Something is happening if we clicked a box, either it will stop the mole from appearing **OR** nothing happens, depends on the visibility of the mole.


---

> adapted from [a gist](https://gist.github.com/denichodev/2338255687820eea774133505c884e75) by [Deni](https://gist.github.com/denichodev)
