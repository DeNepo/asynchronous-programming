# 10. Asynchronous Programming

[&lt;&lt; Architecture](../architecture/README.md) \| [Top](../README.md) \| [Web Apps &gt;&gt;](../web-apps/README.md)

> "Synchronous basically means that you can only execute one thing at a time. Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one."
>
> - [Mike](https://stackoverflow.com/a/33585047)

---

[examples, exercises and guides](https://github.com/HackYourFutureBelgium/asynchronous-programming)

---

## Learning Objectives

- 🥚 You understand the JavaScript Event Loop, and can demonstrate this by using `setTimeout` and `setInterval` to schedule simple tasks.
- 🥚 You can explain why Asynchronous Programming is important for programs that have _blocking_ and _non-blocking_ tasks.
- 🥚 You can explain the basics of the Client/Server model and HTTP requests and can `fetch` data from RESTful APIs.
- 🐣 You can break down an asynchronous problem into smaller tasks and solve it using promises. This includes identify which tasks depend on each other and which are independent:
  - _dependent tasks_: The return value from one task is required to start the next task, these must be completed in a specific order - `.then`
  - _independent tasks_: These tasks do not use each other's return values, they can be completed at the same time - `Promise.all`system.
- 🐣 You can fetch data from an API and render it into the DOM using `/api-calls`, `/handlers` and `async`/`await` syntax.
- 🐣 You can write unit tests for functions that return promises using `async`/`await` syntax.
