# 🌐 Simple Node.js Server

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Fullstack Learning](https://img.shields.io/badge/Fullstack-Development-blue?style=for-the-badge)

📚 **Course Project:** Learning Node.js Basics
This project is part of <a href="https://www.theodinproject.com">The Odin Project</a> curriculum, focusing on getting familiar with the fundamentals of Node.js as a backend server. The primary goal was to understand core concepts such as handling HTTP requests, serving static files, and structuring a simple backend without external frameworks. The emphasis was on learning through practice rather than building a production-ready application. 🚀

## 🚀 Overview
This project is a **simple HTTP server** built using **Node.js**. It serves **HTML pages** and **static files** while logging requests in the console. The server also handles **404.

### 🖼️ Media
![websiteGif](https://github.com/user-attachments/assets/592d9220-19d3-4fae-adf6-3371d85780bc)

### 🔹 Features:
- 📄 Serves HTML pages dynamically  
- 🖼️ Handles static file requests (`CSS`, `JS`, `Images`)  
- 📡 Logs incoming requests  
- ❌ Returns a `404` page for unknown routes  
- 🚀 Uses modular code with `config.js` and `utils.js`  

## 📂 Project Structure
```
📁 project-root/
├── 📄 app.js          # Main server logic
├── 📄 utils.js        # Utility functions (logging, file serving)
├── 📄 config.js       # Configuration (paths, MIME types, status codes)
├── 📂 views/          # HTML pages (index, about, contact, 404)
└── 📂 public/         # Static assets (CSS, images and font)
```

## 🛠 Technologies Used
- **Node.js** (built-in `http` module)
- **JavaScript ES Modules**
- **File System (`fs/promises`)** for reading files
- **Path & URL modules** for handling file paths
- **Environment Variables (`process.env.PORT`)** for flexibility  

## 📖 What I Learned
✅ **Understanding HTTP servers** – Handling requests & responses in Node.js  
✅ **Serving static files** dynamically using MIME types  
✅ **Code modularity** – Organizing reusable utilities & configurations  
✅ **Error handling** – Managing `404` pages and server errors  
✅ **Logging requests** to track client interactions  
✅ **Deploying-ready setup** with `process.env.PORT || 3000`  

## 🛠️ Future Improvements
- 🔹 Add API endpoints (e.g., `GET /api/data`)  
- 🔹 Implement a template engine (e.g., **EJS** or **Handlebars**)  
- 🔹 Use Express.js for routing  
- 🔹 and much more... 

---
💡 *Developed as part of my Fullstack Developer journey!* 🚀

