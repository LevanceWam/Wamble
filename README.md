# Wamble
[ ![Codeship Status for LevanceWam/Wamble](https://codeship.com/projects/dde253d0-4965-0134-dcef-2675f97d180a/status?branch=master)](https://codeship.com/projects/169526)

# Installing

To install this package you want to:

```
npm install Wamble --save
```

You then want to go to your server.js and Every where esle that you want your Debugger and place this:

```
const tool = require('Wambles');
```

# Usage

This is your debuggers code

```
  util.debug('You're message here ', obj);

 // Gather all of your food
exports.findAll = (err, success) => {
  groceries.cart.findAll().then(success).catch(err);
  util.debug('This is the food I have in my cart', success);
};

```

```
when you turn on your server and run that code it should activate like this.

------------------------------
server active on 3000

------------------------------
 Thu Aug 11 2016 23:19:46 GMT-0400 (EDT)

------------------------------
I found this one thing and its ok 1

------------------------------
 Thu Aug 11 2016 23:20:01 GMT-0400 (EDT)
```


 # Unit testing Debugger
 Make sure to run:

 ```
 npm i mocha
 mocha --reporter landing
 ```

 then type in either

 ```
 mocha

 npm test
 ```
  Both will test but with the reporter it make it a little fun.
