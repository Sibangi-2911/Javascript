
/**
 * The Event Loop and Task Queues
 * Promise Creation and Execution:
 *
 * When a Promise is created, the executor function (the function that contains the code to execute the promise, passed as an argument to the Promise constructor) runs immediately. This function generally initiates an asynchronous operation.
 * Handling Resolution and Rejection:
 *
 * The executor function provides two functions: resolve and reject. When either of these functions is called, it indicates that the promise has been resolved or rejected, respectively.
 * Calling resolve or reject doesn't immediately execute the registered promise callbacks (.then, .catch, .finally). Instead, these callbacks are placed into a task queue known as the microtask queue.
 * Microtask Queue:
 *
 * JavaScript has a microtask queue that gets processed at the end of the current run of the event loop, just after the currently executing script and before yielding control back to the system to handle other events or rendering.
 * Tasks in the microtask queue include operations like promise resolution and other small tasks like object mutation observer callbacks.
 * The event loop checks the microtask queue after each callback/task in the macro task queue (e.g., timer functions, I/O tasks) has been executed and before it starts a new iteration. If the queue is not empty, the event loop continues to process all tasks from the microtask queue before moving onto the next macro task or rendering tasks.
 *
 * CALL STACK
 *
 * The Call Stack is a fundamental part of the JavaScript language. It is a record-keeping structure that allows us to perform function calls. Each function call is represented as a frame on the Call Stack.
 *
 * When a JavaScript program first starts executing, the Call Stack is empty. When the first function call is made, a new frame is pushed onto the top of the Call Stack. When that function returns, its frame is popped off of the Call Stack.
 *
 * EVENT LOOP
 * The Event Loop is a looping algorithm that processes the Tasks/Microtasks in the Task Queue and Microtask Queue. It handles selecting the next Task/Microtask to be run and placing it in the Call Stack for execution.
 * 
 * 
 * TASK QUE
 * If the Call Stack keeps track of the functions that are executing right now, then the Task Queue keeps track of functions that are going to be executed in the future.


The Task Queue is a FIFO queue of Tasks that are processed by the Event Loop. Tasks are synchronous blocks of code. You can think of them as Function objects.


 */
let myPromise = new Promise((myResolve, myReject)=>{
  //fetch data from an url example
  let req = new XMLHttpRequest();
  req.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  //WHEN THIS REQUEST IS COMPLETED THIS ONLOAD FUNCTION WILL BE FIRED
  req.onload=()=>{
    if(req.status==200){
      myResolve(req.response);
    } else{
      myReject("Unable to fetch data");
    }
  };
  req.send();
}); 
myPromise.then((res)=>{
  /*code*/ 
  myDisplayer(res);
}, (error)=>{
  myDisplayer(error);
});
function myDisplayer(value){
  console.log("Printing Result: ", value);
}