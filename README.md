# 🌟 **My Awesome Blog Project** 🌟

Welcome to the **My Awesome Blog Project**! This is a dynamic blogging platform where an admin can log in, import blogs directly from the dashboard using a rich text editor, and manage content effortlessly. Normal users can enjoy a seamless experience browsing and reading through a collection of engaging blogs on the homepage and blog collection pages.

## ✨ **Features**

- **Admin Login**: Secure login using email and password for administrators.
- **Admin Dashboard**: A powerful interface for importing and managing blogs with the TinyMCE editor.
- **User Experience**: Smooth navigation and readability for blog readers, powered by Material UI and Tailwind CSS.
- **Blog Collection Page**: Explore a curated list of all blogs in one place.

## 🚀 **Getting Started**

Follow these steps to get your own instance of the project up and running:

### **Prerequisites**

Ensure you have the following installed:

- **Node.js**: v14.x or higher
- **npm**: v6.x or higher / **Yarn**: v1.x or higher

### **Installation**

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ux-krish/blog.git
    cd blog
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set up your environment variables**:

    Create a `.env` file in the root directory and add your configuration:

    ```bash
    VITE_FIREBASE_API_KEY=yourFirebaseAPIKey
    VITE_FIREBASE_AUTH_DOMAIN=yourFirebaseAuthDomain
    VITE_FIREBASE_PROJECT_ID=yourFirebaseProjectId
    TINYMCE=yourTinyMCEapi
    ADMIN_EMAIL=youradminemail@example.com
    ```

4. **Run the development server**:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the blog.

## 🛠️ **Usage**

### **Admin Dashboard**

- **Login**: Navigate to `/adminlogin` and enter your admin credentials.
- **Import Blogs**: Use the TinyMCE editor in the dashboard to write and upload new blog content.

### **Normal Users**

- **Homepage**: Visit the homepage to see the latest blogs.
- **Blog Collection**: Browse the entire collection of blogs under the `/allblogs` route.

## 🎨 **Technologies Used**

- **Frontend**: Vite React, Redux, Tailwind CSS, Material UI
- **Backend**: Firebase
- **Blog Editor**: TinyMCE
- **Authentication**: Firebase Auth

## 🌍 **Deployment**

To deploy this project:

1. **Build the project**:

    ```bash
    npm run build
    # or
    yarn build
    ```

2. **Deploy to your preferred platform** (e.g., Vercel, Netlify, Firebase Hosting).

## 👥 **Contributing**

Contributions are welcome! Please fork the repository and create a pull request with your updates.

## 📄 **License**

This project is licensed under the MIT License.

## 📧 **Contact**

Feel free to reach out via [krishnendu.rantu@gmail.com](mailto:krishnendu.rantu@gmail.com) for any questions or suggestions.

---

✨ Happy Blogging! ✨

