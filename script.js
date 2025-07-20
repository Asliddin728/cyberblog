const posts = [
  {
    title: "How to Create Strong Passwords",
    content: "Use long, random combinations of letters, numbers, and symbols. Avoid using personal information or common words. Try a password manager to help generate and store secure passwords."
  },
  {
    title: "What is Phishing and How to Avoid It",
    content: "Phishing is a scam to steal your data by pretending to be a trusted source. Always check the sender, avoid clicking suspicious links, and never enter your passwords on unknown sites."
  },
  {
    title: "Who is the hackers?",
    content: "Hackers were originally programmers who fixed bugs in software in some quick or elegant way. Since the end of the 20th century, a new meaning has emerged in popular culture: 'computer hacker', a programmer who intentionally bypasses computer security systems."
  },
  {
    title: "Unknown links",
    content: "Unknown links are hyperlinks (URLs) whose source, destination, or purpose is not clearly identified or trusted—often sent by unfamiliar people, suspicious emails, or insecure websites. Clicking them can pose security risks, such as malware, phishing, or data theft."
  }
];

function openPost(index) {
  const post = posts[index];
  const html = `
        <section style="padding:2rem; background-color: #0d1117; color: #c9d1d9;">
          <h2>${post.title}</h2>
          <p style="margin-top:1rem">${post.content}</p>
          <br><button style="background-color: #00ffea; color:#0f172a; border:none; padding:10px; border-radius:5px;"><a href="index.html" style="text-decoration:none; color:#0f172a;">&larr; Back to Home</a></button>
        </section>
      `;
  document.body.innerHTML = html;
}

const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});