### Twitter Bot Project Documentation

## Overview

This project is a Node.js application that interacts with the Twitter API v2. The bot tracks tweets containing a specified hashtag and performs actions on those tweets, such as liking and retweeting them. It uses OAuth 2.0 Bearer Token authentication to access Twitter's streaming endpoints.

## Technology Stack

**Node.js:** JavaScript runtime environment.
**Twitter API v2:** API for interacting with Twitter data.
**Express.js:** Web framework for Node.js.
**twitter-api-v2:** Node.js library for interacting with the Twitter API v2.

## Setup

# Prerequisites

**Node.js:** Ensure Node.js is installed. You can download it from nodejs.org.
**Twitter Developer Account:** Create an account and set up a Developer App at the Twitter Developer Portal.

# Installation

**Clone the Repository**
`git clone https://github.com/yourusername/twitter-bot.git`
`cd twitter-bot`

**Install Dependencies**
`npm install`

**Setup Environment Variables**
Create a `.env` file in the root directory of the project and add your Bearer Token:
`BEARER_TOKEN=your_bearer_token_here`
Replace your_bearer_token_here with the Bearer Token obtained from your Twitter Developer App.

# Running the Application

**Start the Server**
`node app.js`
The server will start on port 3000 by default.

# Endpoints

**Start Tracking a Hashtag**
`URL: /api/twitter/track/:hashtag`
`Method: GET`
`URL Params:`
`hashtag: The hashtag to track (e.g., MUFC).`
`Success Response:`
`Code: 200`
`Content: { "message": "Started tracking hashtag: MUFC" }`
`Error Response:`
`Code: 500`
`Content: { "error": "Failed to start tracking hashtag" }`

**Stop Tracking**
`URL: /api/twitter/stop`
`Method: POST`
`Success Response:`
`Code: 200`
`Content: { "message": "Stopped tracking hashtag." }`
`Error Response:`
`Code: 400`
`Content: { "error": "No active stream to stop." }`

# Code Structure
`app.js`
The entry point of the application. Sets up the Express server and routes.

`controllers/twitterController.js`
Contains the logic for starting and stopping the tracking of hashtags. Uses the Twitter API client to interact with Twitter.

`trackHashtag:` Starts tracking the specified hashtag and performs actions (like and retweet) on the tweets.

`stopTrackingHashtag:` Stops tracking and closes the stream.

`utils/twitterClient.js`
Configures and exports the Twitter API client using OAuth 2.0 Bearer Token authentication.

# Error Handling

`403 Forbidden:` Indicates that the API request is unauthorized. Ensure that you are using valid credentials and that your app has the appropriate access level.

`500 Internal Server Error:` Indicates an issue with starting the tracking. Check the logs for more details.

# Troubleshooting

`Ensure Bearer Token is Correct:` Double-check that the Bearer Token in your .env file is correct and has the required permissions.

`Verify API Access:` Make sure your Twitter Developer App has the appropriate access level to use the streaming endpoints.

# License

This project is licensed under the MIT License.