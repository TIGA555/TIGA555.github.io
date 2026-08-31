// ---------- 主题切换 ----------
const themeToggle = document.getElementById("themeToggle");
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  themeToggle.textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "light" : "dark");
});

// ---------- 移动端菜单 ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
  }
});

// ---------- 首屏打字机效果 ----------
const typedLine = document.getElementById("typedLine");
const lines = [
  "一名热爱生活的设计师",
  "用代码和创意解决问题",
  "记录成长，分享想法",
];
let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = lines[lineIndex];
  if (!deleting) {
    charIndex++;
    typedLine.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
    setTimeout(typeLoop, 90);
  } else {
    charIndex--;
    typedLine.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
      setTimeout(typeLoop, 400);
      return;
    }
    setTimeout(typeLoop, 45);
  }
}

// 保留 HTML 里的初始文字，稍等片刻再开始打字
setTimeout(typeLoop, 1600);

// ---------- 滚动进入动画 ----------
const revealElements = document.querySelectorAll(".section, .card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

// ---------- 联系表单（调起邮箱） ----------
const contactForm = document.getElementById("contactForm");
const formTip = document.getElementById("formTip");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // 注意：把 here@example.com 换成你自己的邮箱
  const mailto = `mailto:here@example.com?subject=来自 ${encodeURIComponent(name)} 的留言&body=${encodeURIComponent(message + "\n\n来自邮箱：" + email)}`;
  window.location.href = mailto;
  formTip.textContent = "已为你打开邮件客户端，点击发送即可送达～";
});

// ---------- 页脚年份 ----------
document.getElementById("year").textContent = new Date().getFullYear();
