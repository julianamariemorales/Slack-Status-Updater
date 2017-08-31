const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* message event
*
*   All events use this template, simply create additional files with different
*   names to add event responses
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {

  // Only send a response to certain messages
  if (text.match(/hey|hello|hi|sup/i)) {
    callback(null, {
      text: `Hey there! <@${user}> said ${text}`
    });
  } else {
    callback(null, {});
  }

//STATUS UPDATES
// Only send a response to certain messages
//done
if (text.match(/done/)) {
  callback(null, {
    text: `Hey there! <@${user}> What have you done this week/What went well?`
  });
} else {
  callback(null, {});
}


//issues
if (text.match(/issues/)) {
  callback(null, {
    text: `What are your Impediments? What didn’t go well?`
  });
} else {
  callback(null, {});
}

//learned
if (text.match(/learn/)) {
  callback(null, {
    text: `What have you learned?`
  });
} else {
  callback(null, {});
}

//next week
if (text.match(/next/)) {
  callback(null, {
    text: `What will you be doing next week?`
  });
} else {
  callback(null, {});
}

};
