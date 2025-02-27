const registerBtn = document.querySelector(".register");
const commentTextElement = document.getElementById("commentText");

commentTextElement.addEventListener("input", () => {
  commentTextElement.style.height = commentTextElement.scrollHeight + "px";
});

commentTextElement.addEventListener("keydown", (e) => {
  if (e.isComposing) return;

  if (e.key === "Enter") {
    if (!e.shiftKey) {
      e.preventDefault();
      registerBtn.click();
    }
  }
});

registerBtn.addEventListener("click", () => {
  const commentText = commentTextElement.value;
  if (commentText === "") {
    alert("댓글을 입력해주세요!");
    return;
  }

  const newComment = document.createElement("li");
  newComment.innerHTML = `
      <div class="comment-item">
          <div class="comment-author">
              <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
              <span>방문자</span>
          </div>
          <div class="comment-content">
              ${commentText}
          </div>
      </div>
  `;

  const commentList = document.querySelector(".comment-list");
  commentList.prepend(newComment);

  commentTextElement.value = "";
  commentTextElement.blur();
  commentTextElement.style.height = "31px";
  alert("댓글이 등록되었습니다.");
});
