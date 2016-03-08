# Appointment Reminders. Powered by Twilio - Node.js/Express

[![Build
Status](https://travis-ci.org/TwilioDevEd/appointment-reminders-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/appointment-reminders-node)


Use Twilio to create automatic appointment reminders for your business users.


## Local development

First you need to install [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/).

1. This sample application stores data in a [MongoDB](https://www.mongodb.org/) database using [Mongoose](http://mongoosejs.com/). You can   download and run MongoDB yourself (on OS X, Linux or Windows).

   On OS X, maybe the easiest way to get MongoDB running locally is to install it via [Homebrew](http://brew.sh/).

   ```bash
   $ brew install mongodb
   ```
   You should then be able to run a local server with:

   ```bash
   $ mongod
   ```

To run the app locally:

1. Clone this repository and `cd` into it

   ```bash
   $ git clone git@github.com:TwilioDevEd/appointment-reminders-node.git

   $ cd appointment-reminders-node
   ```

1. Install dependencies

    ```bash
    $ npm install
    ```

4. Edit the sample configuration file `.env` to match your configuration.
   Remember to set your MongoDb connection strings for both environments.

   If you are using a UNIX operating system, once you have edited the `.env` file,
   use the source command to load the variables into your environment.

  ```bash
  $ source .env
  ```

1. Run the application

    ```bash
    $ npm start
    ```
    Alternatively you might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like
    the node command but automatically restarts your application when you change any source code files.

    ```bash
    $ npm install -g nodemon
    $ nodemon .
    ```

1. Check it out at [http://localhost:3000](http://localhost:3000)

That's it

## Run the tests

You can run the tests locally by typing

```bash
$ mocha test
```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
