<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Appointment Reminders. Powered by Twilio - Node.js/Express

[![Build
Status](https://travis-ci.org/TwilioDevEd/appointment-reminders-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/appointment-reminders-node)


Use Twilio to create automatic appointment reminders for your business users. For a step-by-step tutorial see [twilio docs](https://www.twilio.com/docs/tutorials/walkthrough/appointment-reminders/node/express).


## Local development

First you need to install [Node.js](http://nodejs.org/).

1. This sample application stores data in a [MongoDB](https://www.mongodb.org/) database using [Mongoose](http://mongoosejs.com/). You can download and run MongoDB yourself (on OS X, Linux or Windows).

   On OS X, maybe the easiest way to get MongoDB running locally is to install it via [Homebrew](http://brew.sh/).

   ```bash
   brew tap mongodb/brew
   ```
   ```bash
   brew install mongodb-community
   ```
   You should then be able to run a local server with:

   ```bash
   mongod
   ```

To run the app locally:

1. Clone this repository and `cd` into it

   ```bash
   git clone git@github.com:TwilioDevEd/appointment-reminders-node.git

   cd appointment-reminders-node
   ```

1. Install dependencies

    ```bash
    npm install
    ```

1. Copy the sample configuration file and edit it to match your configuration

   ```bash
   cp .env.example .env
   ```
   You can find your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in your
   [Twilio Account Settings](https://www.twilio.com/console).
   You will also need a `TWILIO_PHONE_NUMBER`, which you may find [here](https://www.twilio.com/console/phone-numbers/incoming).

   You can reuse the `MONGO_URL_TEST` for `MONGO_URL` for most default installs. Otherwise, use your production Mongo installation.

   Run `source .env` to export the environment variables

1. Run the application

    ```bash
    npm start
    ```
    Alternatively you might also consider using [nodemon](https://github.com/remy/nodemon) for this. It works just like
    the node command but automatically restarts your application when you change any source code files.

    ```bash
    npm install -g nodemon
    nodemon ./bin/www
    ```

1. Check it out at [http://localhost:3000](http://localhost:3000)

That's it

## Run the tests

You can run the tests locally by typing

```bash
npm test
```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
