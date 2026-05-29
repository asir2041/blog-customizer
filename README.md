# Blog Customizer
A React + TypeScript application that lets you customize a blog article's appearance in real time using a sidebar panel.
## Features
- 📝 Change font family (Open Sans, Ubuntu, Cormorant Garamond, Days One, Merriweather)
- 🔡 Change font size (18px, 25px, 38px)
- 🎨 Change font color
- 🖼️ Change background color
- ↔️ Change content width (Wide / Narrow)
- 🔄 Reset to default settings
- ✅ Apply changes to the article preview
## Tech Stack
- React 18
- TypeScript
- SCSS Modules
- Webpack 5
- Storybook 7
- ESLint + Prettier + Stylelint
## Getting Started
### Install dependencies
yarn install
### Run the development server
yarn start
Open [http://localhost:8080](http://localhost:8080) in your browser.
### Build for production
yarn build
### Run Storybook
yarn storybook
Open [http://localhost:6006](http://localhost:6006) in your browser.
## Project Structure
src/
├── components/
│   ├── arrow-button/       # Sidebar toggle button
│   ├── article/            # Article preview
│   ├── article-params-form/ # Sidebar form with settings
│   ├── button/             # Reusable button
│   ├── select/             # Custom dropdown component
│   ├── separator/          # Visual divider
│   └── text/               # Text component
├── constants/
│   └── articleProps.ts     # All options and default state
├── fonts/                  # Font files
├── images/                 # SVG and PNG assets
└── styles/                 # Global styles
## How It Works
1. Click the arrow button on the left to open the settings panel
2. Select your preferred font, size, color, background and width
3. Click **Применить** to apply changes to the article
4. Click **Сбросить** to reset everything to defaults
## License
MIT  
