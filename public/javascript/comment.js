async function commentFormHandler(event) {
  event.preventDefault();

  const comment_entry = document.querySelector('textarea[name="comment-body"]').value.trim();

  const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

  if (comment_entry) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
              post_id,
              comment_entry
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.reload();
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);