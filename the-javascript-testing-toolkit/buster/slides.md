!SLIDE
# `buster.js`
* Written by Christian Johansen & August Lilleaas
* Very new (still beta)
* Requires `node.js` >= 0.6.3

!SLIDE
# xUnit style assertions
    @@@ Javascript
    

!SLIDE
# Testing `node.js` code
* Runs headless
* Just run `buster test` from inside node project

!SLIDE
# Browser testing - `buster static`
* No HTML scaffold, set up from config file
* `buster static` sets up a web server on `http://localhost:8282`
* Can export to filesystem

!SLIDE
# Browser testing - `buster server`
* Run `buster server`, sets up a web server on `http://localhost:1111`
* Point 1 or more browsers to the server
* Running `buster test` will remote control all connected browsers
  and return results to the console
