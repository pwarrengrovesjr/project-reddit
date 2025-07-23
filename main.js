var messageBoard = document.getElementById("message-board")
let clickCount = 0;
var userName = document.getElementById("your-name");
var postText = document.getElementById("post-text");
const btn = document.getElementById("btn");
const reply = document.getElementById("reply-thread");

btn.addEventListener("click", function () {
  clickCount++;
  
  messageBoard.insertAdjacentHTML("beforeend", `
    <div class="col-7 border-bottom p-2 fs-5" id="message-${clickCount}">
      <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#commentThread" aria-expanded="false" aria-controls="commentThread"><i class="bi bi-reply"></i></button>
      <button class="btn btn-secondary btn-sm" href=""><i class="bi bi-x"></i></button>
      ${postText.value} - Posted By: ${userName.value}
      <div class="collapse" id="commentThread">
        <div class="row justify-content-md-center" id="comments"></div>
        <div class="row justify-content-md-center">
          <div class="col-7 mt-3 fs-5">
            <textarea
              id="comment-text"
              class="form-control"
              placeholder="Comment Text"
            ></textarea>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-7 mt-3 fs-5">
            <input
              id="commenter-name"
              type="text"
              class="form-control"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div class="row justify-content-md-center">
          <div class="col-7 mt-3 align-self-start">
            <button id="submitComment" type="button" class="btn btn-primary">
              Submit Comment
            </button>
          </div>
        </div>
      </div>
    </div>`);

  userName.value = ''; 
  postText.value = '';
});