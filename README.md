[![Build Status](https://travis-ci.org/tealpaintedduck/todo_challenge.svg?branch=master)](https://travis-ci.org/tealpaintedduck/todo_challenge)

#Taskr - ToDo List

Simple test driven AngularJS App.
Unit tests with Karma, e2e tests with Protractor.

##Set-up

```
git clone http://github.com/tealpaintedduck/todo-challenge
cd todo-challenge
npm install
bower install
open index.html

```
##Testing
Run Karma unit tests:
```
karma start test/karma/conf.js
```

Run Protractor feature tests using two terminal tabs simultaneously. In the first:
```
http-server & webdriver-manager start
```
And the second:
```
protractor e2e/conf.js
```

###User stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

###Extensions
- Styling
- Add persistence
- Make multiple lists available to user
- Deploy
