const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 12502,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 15137,
  },
];

var feed = document.getElementById("feed");

function renderPosts() {
  for (let i = 0; i < posts.length; i++) {
    feed.innerHTML += `
      <div class="post">
          <div class="post-header">
              <img src="${posts[i].avatar}" alt="avatar" class="avatar" />
              <div class="post-header-text">
                  <h3>${posts[i].name}</h3>
                  <p>${posts[i].location}</p>
              </div>
          </div>
          <div>
              <img class="post-image" src="${posts[i].post}" alt="post" />
          </div>
          <div class="post-footer">
              <div class="post-footer-icons">
                  <img class="icon" id="like" src="images/icon-heart.png" />
                  <img class="icon" id="comment" src="images/icon-comment.png" />
                  <img class="icon" id="dm" src="images/icon-dm.png" />
              </div>
              <div class="post-footer-likes">
                  <p>${posts[i].likes.toLocaleString()} likes</p>
              </div>
              <div class="post-footer-comment">
                  <p><span class="profile-name">${posts[i].username}</span> ${
      posts[i].comment
    }</p>
              </div>
      </div>`;
  }
}

renderPosts();

var like = document.getElementById("like");
var comment = document.getElementById("comment");
var dm = document.getElementById("dm");

like.addEventListener("click", function () {
  console.log(like);
});
