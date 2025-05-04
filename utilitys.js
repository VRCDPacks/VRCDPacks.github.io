const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');
const orb3 = document.querySelector('.orb-3');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const deltaX = (mouseX - centerX) / 25;
  const deltaY = (mouseY - centerY) / 25;

  if (orb1) orb1.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`;
  if (orb2) orb2.style.transform = `translate(-50%, -50%) translate(${deltaX / 2}px, ${deltaY / 2}px)`;
  if (orb3) orb3.style.transform = `translate(-50%, -50%) translate(${deltaX / 3}px, ${deltaY / 3}px)`;
});

function handleSecurityFeatures() {
  document.onkeydown = function(e) {
      if ((e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) || 
          (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) || 
          e.ctrlKey) {
          return false;
      }
  };

  const threshold = 160;
  const checkDevTools = () => {
      const devToolsWidth = window.outerWidth - window.innerWidth > threshold;
      const devToolsHeight = window.outerHeight - window.innerHeight > threshold;

      if (devToolsWidth || devToolsHeight) {
          window.location.href = 'DToolsDetected.html';

          setTimeout(() => {
              window.close();
          }, 1000);
      }
  };

  checkDevTools();

  setInterval(checkDevTools, 500);
}

document.addEventListener('DOMContentLoaded', handleSecurityFeatures);

const githubToken = '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';
const gistId = '64dd42cba454f14d509241f6e034eee8'
const filename = 'gistfile1.txt';
let userDatabase = {};

async function loadUsers() {
    try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`, {
            method: 'GET',
            headers: {
                'Authorization': `token ${githubToken}`,
                'User-Agent': 'UserDatabaseApp'
            }
        });
        const data = await response.json();
        const content = data.files[filename].content;

        if (content) {
            userDatabase = {};
            const lines = content.split('\n');
            lines.forEach(line => {
                const [username, password] = line.split(':');
                if (username && password) {
                    userDatabase[username.trim()] = password.trim();
                }
            });
            displayUsers();
        }
    } catch (error) {
        showMessage('Error loading users: ' + error.message);
    }
}

function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '<h2>Current Users:</h2>';
    if (Object.keys(userDatabase).length === 0) {
        userList.innerHTML += '<p>No users found.</p>';
    } else {
        Object.keys(userDatabase).forEach(username => {
            userList.innerHTML += `<div class="user-item">${username}</div>`;
        });
    }
}

async function addUser() {
    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value.trim();

    if (!username || !password || userDatabase[username]) {
        showMessage('Invalid username or username already exists.', 'red');
        return;
    }

    userDatabase[username] = password;
    showMessage(`User '${username}' added successfully.`);
    toggleAddUserForm();
    displayUsers();
}

async function deleteUser() {
    const username = document.getElementById('deleteUsername').value.trim();

    if (!username || !userDatabase[username]) {
        showMessage(`User '${username}' not found.`, 'red');
        return;
    }

    delete userDatabase[username];
    showMessage(`User '${username}' deleted successfully.`);
    toggleDeleteUserForm();
    displayUsers();
}

async function saveUsers() {
    try {
        const content = Object.entries(userDatabase)
            .map(([username, password]) => `${username}:${password}`)
            .join('\n');

        const response = await fetch(`https://api.github.com/gists/${gistId}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `token ${githubToken}`,
                'User-Agent': 'UserDatabaseApp',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                files: {
                    [filename]: { content }
                }
            })
        });

        if (response.ok) {
            showMessage('Changes saved to Gist.');
        } else {
            showMessage('Error saving to Gist.', 'red');
        }
    } catch (error) {
        showMessage('Error saving users: ' + error.message, 'red');
    }
}

function showMessage(message, color = 'green') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
}

function toggleAddUserForm() {
    const form = document.getElementById('addUserForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function toggleDeleteUserForm() {
    const form = document.getElementById('deleteUserForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

    document.addEventListener("keydown", (event) => {
      const keys = {
        ctrl: event.ctrlKey,
        l: event.key.toLowerCase() === 'l',
      };

      if (keys.ctrl && keys.l && event.code === "KeyL") {
        event.preventDefault();
        window.location.href = "login.html";
      }
    });


