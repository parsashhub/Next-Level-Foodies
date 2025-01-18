
---

# Next-Level Foodies 🍔🍕

**Next-Level Foodies** is a modern web application built with **Next.js** that allows users to explore, share, and discover delicious meals. Whether you're a food enthusiast or a chef, this platform provides a seamless experience to browse meals, view detailed recipes, and even share your own culinary creations.

---

## Features ✨

- **Browse Meals**: Explore a wide variety of meals with details like title, summary, and creator.
- **Meal Details**: View detailed instructions and images for each meal.
- **Share Meals**: Share your own recipes with the community by uploading images and providing instructions.
- **Responsive Design**: Built with a mobile-first approach for a seamless experience across devices.
- **Secure Input Handling**: Uses `xss` to sanitize user inputs and prevent XSS attacks.
- **Database Integration**: Utilizes **SQLite** with `better-sqlite3` for efficient data storage and retrieval.

---

## Technologies Used 🛠️

- **Frontend**: Next.js, React
- **Backend**: Next.js API Routes
- **Database**: SQLite (`better-sqlite3`)
- **Image Handling**: Node.js `fs` module for saving uploaded images
- **Utilities**:
    - `slugify` for generating URL-friendly slugs
    - `xss` for sanitizing HTML content
- **Styling**: CSS Modules (or Tailwind CSS, if used)

---

## Getting Started 🚀

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/parsashhub/Next-Level-Foodies.git
   cd Next-Level-Foodies
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Visit `http://localhost:3000` to explore the application.

---

## License 📄

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---