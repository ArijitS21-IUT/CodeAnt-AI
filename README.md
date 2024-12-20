# Getting Started with Create React App

Here's how you can run the React app step by step:

---

### **1. Install Node.js and npm**
React requires **Node.js** and **npm** to run. If you don't have them installed:

- Download and install Node.js from [nodejs.org](https://nodejs.org/).
- Verify the installation by running the following commands:
  ```bash
  node -v
  npm -v
  ```

---

### **2. Create a New React App**
If you haven't created the app yet:
1. Open a terminal/command prompt.
2. Run the following command to create a new React app:
   ```bash
   npx create-react-app codeant-ai
   ```
   This creates a folder named `codeant-ai` with the necessary files and configurations.

3. Navigate into the project directory:
   ```bash
   cd codeant-ai
   ```

---

### **3. Add the Code**
1. Replace the contents of the following files with the provided code:
   - `src/App.js`
   - `src/index.js`
   - `src/index.css`

2. Create a `components` folder inside the `src` directory:
   - Add the following files to `src/components`:
     - `Sidebar.js`
     - `Header.js`
     - `RepositoryList.js`
   - Paste the corresponding component code into each file.

3. Optionally, create `styles.css` in the `src` folder for global styles and import it in `index.js`:
   ```javascript
   import './styles.css';
   ```

---

### **4. Start the Development Server**
To run the React app, use the following commands:
```bash
npm start
```

This starts the development server, and the app will automatically open in your default browser at:
```
http://localhost:3000
```

---

### **5. View and Debug**
- If the app doesn't open automatically, open your browser and navigate to `http://localhost:3000`.
- Any changes you make to the code will automatically reload the app in your browser (thanks to React's live reloading feature).

---

### **6. Build for Production (Optional)**
When you're ready to deploy the app:
```bash
npm run build
```
This creates an optimized production build in the `build/` folder.

---

### Common Errors and Fixes
1. **`npx` not recognized**:
   - Ensure Node.js and npm are installed correctly.

2. **Permission errors**:
   - Use `sudo` on macOS/Linux or run your terminal as Administrator on Windows.

3. **App not running on `localhost`**:
   - Check if the terminal shows any error messages.
   - Ensure no other app is using port `3000`.

Let me know if you encounter any issues while running it!