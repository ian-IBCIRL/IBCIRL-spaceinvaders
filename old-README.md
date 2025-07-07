# IBCIRL-spaceinvaders
# IBCIRL Space Invaders

## Description
A simple Space Invaders game built using JavaScript and HTML.
Claude-4-sonnet aka Amazon Q, your AI assistant built by AWS, promises to help me with AWS services, infrastructure, coding,
system administration, and more. I asked it to help simple Space Invaders game built using JavaScript and HTML

It said it would help me create a simple Space Invaders game using JavaScript and HTML. 
It attempted to build a complete, playable version of Space Invaders game for you! 

And we just added a React Mobile version at space-invaders-mobile.html now at https://ian-ibcirl.github.io/IBCIRL-spaceinvaders/
See https://ian-ibcirl.github.io/IBCIRL-spaceinvaders/ from your phone...


## Features
Here's what I've built:

Features:
• Player spaceship that moves left/right with arrow keys
• Shooting with spacebar
• 50 invaders in a 5x10 grid that move side to side and down
• Invaders shoot back at random intervals
• Collision detection for bullets hitting invaders and player
• Score system (10 points per invader)
• Game over screen with restart functionality
• Progressive difficulty (invaders speed up each wave)

Controls:
• Arrow keys: Move left/right
• Spacebar: Shoot
• R key: Restart when game over

Game Mechanics:
• Invaders move horizontally and drop down when they hit screen edges
• Game ends if invaders reach the player or if player gets hit by invader bullets
• New wave of invaders appears when all are destroyed
• Score increases by 10 for each invader destroyed

To play the game, simply open the space-invaders.html file in your web browser:

- Player movement using arrow keys
- Laser firing with the spacebar
- Target space invaders that explode when hit by a laser
- Score tracking for each invader hit

## Recent Updates
- **March 4, 2025**: Added target space invaders that explode when hit by a laser. [Commit](https://github.com/ian-IBCIRL/IBCIRL-spaceinvaders/commit/574f6e0f885333f327b7a4b35ac32dd452180ca4)
- **March 4, 2025**: Implemented laser firing mechanics. Corrected and updated `game.js` file. [Commit](https://github.com/ian-IBCIRL/IBCIRL-spaceinvaders/commit/3ad1598aeac0e0249bc843b26400f7a661d4bcbc)
- **March 4, 2025**: Initial commit with basic game setup. [Commit](https://github.com/ian-IBCIRL/IBCIRL-spaceinvaders/commit/5d5288cf1e6622784c44725741de0efae5438cd1)
- **July 7, 2025**: Updated with multiple files created by Claude-4-sonnet aka Amazon Q, your AI assistant built by AWS, which helped me iterate through bugs and various mobile options, including a tablet and chrome, safari and edge compatability.

## Collaboration
This project is developed in collaboration with GitHub Copilot and Amazon Q.

## How to Play
1. Use the arrow keys to move the player left and right.
2. Press the spacebar to fire lasers.
3. Hit the invaders with lasers to destroy them and earn points.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/ian-IBCIRL/IBCIRL-spaceinvaders.git
    ```
2. Open `index.html` in your web browser to start the game.

## License
This project is licensed under the MIT License.

## How does Q CLI work?
Amazon Q is running on AWS's remote systems, not locally on your PC. Here's how it works:

## 🌐 How Amazon Q Works:

Your side (local):
• The q chat CLI tool on your system
• Sends your messages to AWS servers
• Receives and displays my responses

AWS side (remote):
• My AI model runs on AWS infrastructure
• All the processing, reasoning, and response generation happens on AWS servers
• I have access to tools that can interact with your local system (like file operations, bash commands)

## 🔒 What This Means:

Data flow:
• Your prompts → AWS servers
• My responses ← AWS servers
• Tool executions (file creation, etc.) happen locally via the CLI

Privacy:
• Your conversations go through AWS systems
• AWS has security measures and privacy policies in place
• The CLI tool handles the secure communication

So while I can help you with local tasks (creating files, running commands), the "thinking" part of our conversation
happens on AWS's cloud infrastructure, not on your PC. The CLI tool is essentially a bridge between your local
environment and my remote AI capabilities.

This setup gives you the power of cloud-based AI while still being able to work with your local files and system!

