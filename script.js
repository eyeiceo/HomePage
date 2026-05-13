const siteConfig = {
  name: "eyeiceo",
  role: "前端开发 / 视觉探索 / 独立创作",
  avatarInitials: "冰",
  bio: "在互联网的一角，记录代码、灵感与生活片段。喜欢把复杂的东西整理成清楚、可触摸的小作品。",
  quote: "保持好奇，保持动手，把每天的小进展攒成自己的星图。",
  daily: {
    line: "风从海面过来，今天也适合创造一点新的东西。",
    source: "- 写给此刻",
  },
  status: "夜港在线 · 适合写代码",
  socials: [
    { label: "GitHub", url: "https://github.com/eyeiceo", icon: "github" },
    { label: "Bilibili", url: "https://space.bilibili.com/", icon: "tv" },
    { label: "Email", url: "mailto:eyeiceo@foxmail.com", icon: "mail" },
    { label: "Telegram", url: "https://t.me/eyeiceo", icon: "send" },
  ],
  links: [
    {
      title: "博客",
      desc: "文章、笔记和长期想法",
      url: "#",
      icon: "pen",
    },
    {
      title: "项目",
      desc: "正在维护的作品合集",
      url: "#",
      icon: "spark",
    },
    {
      title: "网盘",
      desc: "资料和公开文件",
      url: "#",
      icon: "cloud",
    },
    {
      title: "书签",
      desc: "常用站点与工具导航",
      url: "#",
      icon: "bookmark",
    },
    {
      title: "相册",
      desc: "一些照片和视觉碎片",
      url: "#",
      icon: "image",
    },
    {
      title: "关于",
      desc: "更多介绍与联系方式",
      url: "#",
      icon: "user",
    },
  ],
};

const icons = {
  github:
    '<path d="M12 .8A11.2 11.2 0 0 0 .8 12.2c0 5 3.2 9.3 7.7 10.7.6.1.8-.3.8-.6v-2c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.2 3.2 1.6.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.3-5.1 5.6.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6a11.4 11.4 0 0 0-3.3-22Z" />',
  tv: '<path d="M8 3.5 12 7l4-3.5 1.3 1.5-3 2.6H19a3 3 0 0 1 3 3v6.8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6.8a3 3 0 0 1 3-3h4.7l-3-2.6L8 3.5Zm-3 6a1 1 0 0 0-1 1v6.8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6.8a1 1 0 0 0-1-1H5Zm2.4 2.5 5.2 3-5.2 3v-6Z" />',
  mail: '<path d="M3.8 5h16.4A2.8 2.8 0 0 1 23 7.8v8.4a2.8 2.8 0 0 1-2.8 2.8H3.8A2.8 2.8 0 0 1 1 16.2V7.8A2.8 2.8 0 0 1 3.8 5Zm.1 2 8.1 5.7L20.1 7H3.9Zm17.1 2.2-8.4 5.9a1 1 0 0 1-1.2 0L3 9.2v7a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8v-7Z" />',
  send: '<path d="M22 3.1 18.7 21c-.2.9-.8 1.1-1.6.7l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1L18.4 7c.4-.4-.1-.6-.6-.3L6.3 14 1.4 12.4c-1.1-.3-1.1-1.1.2-1.6L20.8 3.4c.9-.3 1.7.2 1.2 1.7Z" />',
  pen: '<path d="M4 17.2V21h3.8L18.9 9.9l-3.8-3.8L4 17.2Zm17.7-10.3a1 1 0 0 0 0-1.4l-2.2-2.2a1 1 0 0 0-1.4 0l-1.7 1.7 3.8 3.8 1.5-1.9Z" />',
  spark:
    '<path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2Zm7 11 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM5 13l.8 2.2L8 16l-2.2.8L5 19l-.8-2.2L2 16l2.2-.8L5 13Z" />',
  cloud:
    '<path d="M19 18H7a5 5 0 0 1-.8-9.9A7 7 0 0 1 19.6 10 4 4 0 0 1 19 18ZM7 16h12a2 2 0 0 0 .1-4h-1.5l-.3-1.2a5 5 0 0 0-9.7-.6L7.2 12H7a2 2 0 0 0 0 4Z" />',
  bookmark:
    '<path d="M6 3h12a2 2 0 0 1 2 2v17l-8-4-8 4V5a2 2 0 0 1 2-2Zm0 3v12.8l6-3 6 3V6H6Z" />',
  image:
    '<path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v10h16V7H4Zm3 7 3-3 2.3 2.3L16 9l3 5H7Zm1-5.2a1.8 1.8 0 1 1 3.6 0 1.8 1.8 0 0 1-3.6 0Z" />',
  user: '<path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.4 0-8 2.5-8 5.5V21h16v-1.5c0-3-3.6-5.5-8-5.5Z" />',
};

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.spark}</svg>`;
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function renderProfile() {
  document.title = `${siteConfig.name} - 个人主页`;
  setText("profileName", siteConfig.name);
  setText("profileKicker", siteConfig.handle);
  setText("profileRole", siteConfig.role);
  setText("profileBio", siteConfig.bio);
  setText("profileQuote", siteConfig.quote);
  setText("avatarInitials", siteConfig.avatarInitials);
  setText("dailyLine", siteConfig.daily.line);
  setText("dailySource", siteConfig.daily.source);
  setText("statusText", siteConfig.status);
}

function renderSocials() {
  const wrap = document.getElementById("socialLinks");
  wrap.innerHTML = siteConfig.socials
    .map(
      (item) =>
        `<a class="social-link" href="${item.url}" aria-label="${item.label}" target="_blank" rel="noreferrer">${icon(item.icon)}</a>`
    )
    .join("");
}

function renderLinks() {
  const wrap = document.getElementById("siteLinks");
  wrap.innerHTML = siteConfig.links
    .map(
      (item) => `
        <a class="site-link" href="${item.url}">
          <span class="link-head">
            <span class="link-icon">${icon(item.icon)}</span>
            <strong>${item.title}</strong>
          </span>
          <span>${item.desc}</span>
        </a>
      `
    )
    .join("");
}

function updateTime() {
  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  setText("dateText", `${year} 年 ${month} 月 ${day} 日 ${weekdays[now.getDay()]}`);
  setText("timeText", timeFormatter.format(now));
}

renderProfile();
renderSocials();
renderLinks();
updateTime();
setInterval(updateTime, 1000);
