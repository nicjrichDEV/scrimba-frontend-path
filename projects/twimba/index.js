import { tweetsData } from "./data/tweetsData.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const feed = document.getElementById("feed");

// Adds event listeners to the document
document.addEventListener("click", (e) => {
  const target = e.target;

  //
  if (target.dataset.replies) {
    const tweetId = target.dataset.replies;
    handleReplyClick(tweetId);
  } else if (target.dataset.heart) {
    const tweetId = target.dataset.heart;
    handleLikeClick(tweetId);
  } else if (target.dataset.retweet) {
    const tweetId = target.dataset.retweet;
    handleRetweetClick(tweetId);
  } else if (target.id === "tweet-btn") {
    handleTweetClick();
  }
});

// Adds a reply to a tweet
function handleReplyClick(tweetId) {
  const replies = document.getElementById(`replies-${tweetId}`);
  replies.classList.toggle("hidden");
}

// Increments or decrements the likes for a tweet
function handleLikeClick(tweetId) {
  const tweetObj = tweetsData.find((tweet) => tweet.uuid === tweetId);
  if (tweetObj.isLiked) {
    tweetObj.likes--;
  } else {
    tweetObj.likes++;
  }
  tweetObj.isLiked = !tweetObj.isLiked;
  render();
}

// Handles retweeting a tweet
function handleRetweetClick(tweetId) {
  const tweetObj = tweetsData.find((tweet) => tweet.uuid === tweetId);
  if (tweetObj.isRetweeted) {
    tweetObj.retweets--;
  } else {
    tweetObj.retweets++;
  }
  tweetObj.isRetweeted = !tweetObj.isRetweeted;
  render();
}

function handleTweetClick() {
  const tweetInput = document.getElementById("tweet-input");
  const tweetText = tweetInput.value;

  if (tweetText === "") {
    alert("Please enter a tweet");
  } else {
    const newTweet = {
      handle: `@Scrimba`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetText,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4(),
    };
    tweetsData.unshift(newTweet);
    tweetInput.value = "";
    render();
  }
}

// Returns the HTML for the feed
function getFeedHtml() {
  let feedHtml = "";

  tweetsData.forEach((tweet) => {
    let likeIconClass = "";
    let retweetIconClass = "";
    let repliesHtml = "";

    if (tweet.isLiked) {
      likeIconClass = "liked";
    }

    if (tweet.isRetweeted) {
      retweetIconClass = "retweeted";
    }

    if (tweet.replies.length > 0) {
      tweet.replies.forEach((reply) => {
        repliesHtml += `
        <div class="tweet-reply">
          <div class="tweet-inner">
              <img src="${reply.profilePic}" class="profile-pic">
                  <div>
                      <p class="handle">${reply.handle}</p>
                      <p class="tweet-text">${reply.tweetText}</p>
                  </div>
              </div>
          </div>
      `;
      });
    }

    feedHtml += `
      <div class="tweet">
        <div class="tweet-inner">
            <img src="${tweet.profilePic}" class="profile-pic">
            <div>
              <p class="handle">${tweet.handle}</p>
              <p class="tweet-text">${tweet.tweetText}</p>
              <div class="tweet-details">
                <span class="tweet-detail">
                  <i class="fa-regular fa-comment-dots" data-replies="${tweet.uuid}"></i>
                            ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                  <i class="fa-solid fa-heart ${likeIconClass}" data-heart="${tweet.uuid}"></i>
                            ${tweet.likes}
                </span>
                <span class="tweet-detail">
                  <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet="${tweet.uuid}"></i>
                            ${tweet.retweets}
                </span>
                    </div>   
                </div>            
            </div>
            <div class="hidden" id="replies-${tweet.uuid}">
                ${repliesHtml}
            </div>
        </div>
    `;
  });

  return feedHtml;
}

function render() {
  feed.innerHTML = getFeedHtml();
}

render();
