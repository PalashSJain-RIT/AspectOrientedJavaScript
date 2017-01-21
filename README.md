# Aspect Oriented Programming in JavaScript

AspectJ like advices can be utilized in JavaScript with the use of Aspect Oriented JavaScript.

Create Pointcut object
-
```javascript
// This creates pModifyAlert Pointcut object for 'alert' functionality of 'window' context
var pModifyAlert = new Pointcut("alert", window);
```
```javascript
// This creates a thingPointcut for the function 'someFunction' of the class Thing.prototype
var thingPointcut = new Pointcut("someFunction", Thing.prototype);
```
Advices supported
-
+ before
```javascript
var pModifyAlert = new Pointcut("alert", window);
pModifyAlert.before(function(){
    console.log("This writes a message to console and then throws the alert message.");
});
```
+ around
```javascript
var pModifyAlert = new Pointcut("alert", window);
pModifyAlert.around(function(){
    console.log("Replaced alert with console.log");
    console.log("The message was: " + pModifyAlert.arguments()[0]);
});
```
+ after
```javascript
var pModifyAlert = new Pointcut("alert", window);
pModifyAlert.after(function(){
    console.log("This throws the alert message and then writes a message to console.");
});
```
