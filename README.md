# 📁 Node.js File Manager

A simple file management tool built using **Node.js core modules** like `http`, `fs`, `path`, and `querystring`. This app allows you to **create**, **read**, and **delete** text files through a clean, modern web interface — all without using any third-party packages or frameworks.

---

## 🚀 Features

- ✅ Create new text files with custom content  
- 📖 Read the content of any file  
- ❌ Delete unwanted files  
- 🖥️ Fully browser-based interface (single HTML page)  
- 🧩 Built only using Node.js built-in modules (no external dependencies)

---

## 📂 Project Structure

```
file-manager/
├── files/             # Directory where user files are stored
├── public/
│   └── index.html     # User interface (HTML + JS + CSS)
├── server.js          # Core server logic
```

### 📁 files/
This folder is automatically created by the server at runtime. It stores all files that users create via the UI. Each file is a plain text file that you can create, read, or delete.

### 🌐 public/index.html
This is a simple and interactive HTML page that provides:
- A form to create a new file with a name and content
- A form to read a file by its name
- A form to delete a file by its name  
All actions show the server's response in a designated section.

### ⚙️ server.js
The Node.js server handles all file operations:
- Serves the HTML UI using the `http` module
- Manages file creation, reading, and deletion with the `fs` module
- Ensures safe file paths using the `path` module
- Parses form submissions using `querystring`

---

## 💻 How to Run

1. **Clone the repository**
   ```bash
   git clone  https://github.com/mahendraSingh2003/File-manager.git
   cd File-manager
   ```

2. **Start the server**
   ```bash
   node server.js
   ```

3. **Open your browser and visit**
   ```
   http://localhost:3000
   ```

---

## 🛠 Built With

- [Node.js](https://nodejs.org/)
  - `http` – To create the web server
  - `fs` – For file system operations
  - `path` – For cross-platform path handling
  - `querystring` – To parse URL-encoded data from forms

---

## 📸 Preview
![Screenshot (115)](https://github.com/user-attachments/assets/6188181b-7ce5-4c5b-97cb-61993c72fbdf)

![Screenshot (116)](https://github.com/user-attachments/assets/2684c866-14b1-46c7-bfcd-b6b2fd8d059c)

---

## 📄 License

This project is open source and free to use under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Created by **Mahendra Singh Gurjar**  
- Email: mhndrmahendragurjar@gmail.com  
- LinkedIn: https://www.linkedin.com/in/msgprofile/
