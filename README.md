# 🧴 Dettolator

**Dettolator** is a simple Linux desktop app that lets you play the **Dettol Germ Shooter** web game as a native AppImage.  
Built using [Electron](https://electronjs.org) and packaged with [electron-builder](https://www.electron.build/).

---

## 🎮 About

Dettolator opens the official Dettol Germ Shooter game in a standalone window — no browser required.  
It’s a fun educational game promoting hygiene and germ awareness.

**Game URL:**
https://dettol-games.wskoly.xyz/00_GermShooterEn?user_id=2531&game_id=2531

yaml
Copy code

---

## 🧱 Project Structure

Dettolator/
├── package.json # Project configuration
├── main.js # Electron main script (loads the game URL)
├── icon.png # App icon
├── README.md # This file
└── dist/ # Output folder (after building)

yaml
Copy code

---

## ⚙️ Prerequisites

You’ll need:
- **Node.js 20 or newer** (Node 22 recommended)
- **npm** (comes with Node)
- Linux x64 system

To check:
```bash
node -v
npm -v
🚀 Setup & Run
Clone or download this repository

Open a terminal inside the Dettolator folder

Install dependencies:

bash
Copy code
npm install
Run the app for testing:

bash
Copy code
npm start
🧰 Build AppImage
To create the portable Linux AppImage:

bash
Copy code
npm run build
After building, you’ll find:

Copy code
dist/Dettolator-1.0.0.AppImage
Run it directly:

bash
Copy code
chmod +x dist/Dettolator-1.0.0.AppImage
./dist/Dettolator-1.0.0.AppImage
🪄 Features
Runs Dettol Germ Shooter in a native desktop window

Uses Electron for smooth performance

Works offline after first load (cached)

Portable AppImage — no installation required

👤 Author
Mahir
Made with 💚 for clean hands and clean code.

🧩 License
This project is for educational and fan purposes only.
All game content and trademarks belong to Dettol® / Reckitt Benckiser Group.

<img width="600" height="600" alt="icon" src="https://github.com/user-attachments/assets/ce340eff-eacf-4407-9038-a981cffd2985" />
