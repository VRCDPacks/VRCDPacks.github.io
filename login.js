document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorElement = document.getElementById("errorMessage");

  try {
    const res = await fetch("https://gist.githubusercontent.com/FiverrrVRC/64dd42cba454f14d509241f6e034eee8/raw/gistfile1.txt");

    if (!res.ok) {
      throw new Error("Failed to fetch credentials: " + res.statusText);
    }

    const content = await res.text();
    const users = content.split("\n")
      .map(line => {
        const parts = line.split(":");
        return parts.length === 2 ? { username: parts[0].trim(), password: parts[1].trim() } : null;
      })
      .filter(Boolean);

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      window.location.href = "admin.html";
    } else {
      errorElement.textContent = "Invalid username or password.";
    }
  } catch (err) {
    console.error("Login error:", err);
    errorElement.textContent = "Unable to validate login.";
  }
});
