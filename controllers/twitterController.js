const { ETwitterStreamEvent } = require('twitter-api-v2');
const twitterClient = require('../utils/twitterClient');

let stream;

exports.trackHashtag = async (req, res) => {
    const { hashtag } = req.params;

    try {
        console.log(`Tracking hashtag: ${hashtag}`);
        
        stream = await twitterClient.v2.searchStream({
            track: hashtag,
        });

        stream.on(ETwitterStreamEvent.Data, async (tweet) => {
            try {
                console.log(`New tweet found: ${tweet.data.text}`);

                await twitterClient.v2.like(tweet.data.id);
                console.log(`Liked tweet: ${tweet.data.id}`);

                await twitterClient.v2.retweet(tweet.data.id);
                console.log(`Retweeted tweet: ${tweet.data.id}`);
            } catch (err) {
                console.error('Error interacting with tweet:', err);
            }
        });

        res.status(200).json({ message: `Started tracking hashtag: ${hashtag}` });
    } catch (err) {
        console.error('Error starting bot:', err);
        res.status(500).json({ error: 'Failed to start tracking hashtag' });
    }
};

exports.stopTrackingHashtag = (req, res) => {
    if (stream) {
        stream.close();
        stream = null; 
        console.log('Stopped tracking hashtag.');
        res.status(200).json({ message: 'Stopped tracking hashtag.' });
    } else {
        res.status(400).json({ error: 'No active stream to stop.' });
    }
};
