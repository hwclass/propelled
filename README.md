# 🔥 propelled
A simple React + MobX + ES6 boilerplate

## Directory Structure
```bash
.
├── dist                    # Built version to be ready for production
├── src                     # Source code of the project
│   ├── actions				# Action declerations for stores triggered in views
│   ├── components			# Self-contained React components
│   ├── constants			# Some string declerations for configuration
│	├── models 				# Models to generate for stores and changes with actions
│	├── modules 			# Modules containing components like containers
│	├── stores				# Store directory that exposes the main data source of the client
│	└── index.js 			# Entry point of the application containing App and Main components
├── .eslintrc               # ESLint rule file
├── .flowconfig 			# Facebook Flow config file 
├── .gitignore				# Git file/directory excluding file 
├── LICENCE.md              # Licence file
├── README.md 				# Readme file with instructions
├── package.json 			# Package file for npm 
├── webpack.config.js 		# Webpack config file for development
└── webpack.prod.config.js  # Webpack config file for production
```

