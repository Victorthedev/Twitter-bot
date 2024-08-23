const { TwitterApi } = require('twitter-api-v2');

const twitterClient = new TwitterApi(process.env.BEARER_TOKEN);

module.exports = twitterClient;