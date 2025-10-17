Dettolator is a simple Linux desktop app that lets you play the Dettol Germ Shooter web game as a native AppImage.
Built using Electron
 and packaged with electron-builder
.

🎮 About

Dettolator opens the official Dettol Germ Shooter game in a standalone window — no browser required.
It’s a fun educational game promoting hygiene and germ awareness.

Game URL:

https://dettol-games.wskoly.xyz/00_GermShooterEn?user_id=2531&game_id=2531

🧱 Project Structure
Dettolator/
├── package.json        # Project configuration
├── main.js             # Electron main script (loads the game URL)
├── icon.png            # App icon
├── README.md           # This file
└── dist/               # Output folder (after building)

⚙️ Prerequisites

You’ll need:

Node.js 20 or newer (Node 22 recommended)

npm (comes with Node)

Linux x64 system

To check your versions:

node -v
npm -v

🚀 Setup & Run

Clone or download this repository.

Open a terminal inside the Dettolator folder.

Install dependencies:

npm install


Run the app for testing:

npm start

🧰 Build AppImage

To create the portable Linux AppImage:

npm run build


After building, you’ll find:

dist/Dettolator-1.0.0.AppImage


Run it directly:

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
