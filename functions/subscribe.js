/**
 * Import
 */
require("dotenv").config();
const fetch = require("isomorphic-unfetch");

const request = require("./helpers/request");
const {
  formatted: { success, error }
} = require("./helpers/response");

/**
 * Controller
 */
const ctrl = {
  POST: async event => {
    // Prevent spam
    try {
      request.throttle(event, "subscribe", 20);
    } catch (err) {
      return error({ status: err.status });
    }

    // Parse body
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (err) {
      return error({
        status: 400,
        msg: "provided body is not valid json"
      });
    }

    // Validate body
    for (const key of ["email", "ref"]) {
      if (!body[key]) {
        return error({ status: 400 });
      }
    }

    // Create Slack blocks
    const blocks = [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: ":mailbox: A new contact has subscribed to the newsletter!"
        }
      },
      {
        type: "divider"
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "*Type:*"
          },
          {
            type: "plain_text",
            text: body.ref,
            emoji: true
          }
        ]
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: "*Email:*"
          },
          {
            type: "plain_text",
            text: body.email,
            emoji: true
          }
        ]
      }
    ];

    // Send Slack blocks
    try {
      await fetch(process.env.SLACK_SUBSCRIBE_WEBHOOK, {
        headers: {
          "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          text: "A new contact has subscribed to the newsletter!",
          blocks
        })
      });
    } catch (err) {
      console.error(err);
      return error({ status: 500 });
    }

    return success({ status: 200 });
  }
};

/**
 * Export
 */
exports.handler = (event, context, callback) =>
  request.route(event, context, callback, ctrl);
