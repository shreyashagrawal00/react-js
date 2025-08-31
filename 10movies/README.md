# 🎬 10Movies - Beautiful Movie Discovery App

A stunning, modern movie discovery website built with React that showcases movies with beautiful animations and a premium user experience.

## ✨ Features

- **Beautiful Modern Design** - Glassmorphism effects, gradients, and smooth animations
- **Movie Search** - Search for your favorite movies with real-time results
- **Favorites System** - Save and manage your favorite movies
- **Responsive Design** - Works perfectly on all devices
- **Fallback Mode** - Works even when API is unavailable (shows sample movies)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd 10movies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get a TMDB API Key** (Required for real movie data)
   - Go to [TMDB API Settings](https://www.themoviedb.org/settings/api)
   - Sign up/Login to TMDB
   - Request an API key
   - Copy your API key

4. **Update the API Key**
   - Open `src/Services/Api.js`
   - Replace the existing API key with your new one:
   ```javascript
   const API_KEY = "YOUR_NEW_API_KEY_HERE";
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🔑 API Key Issues

If you see "Failed to load" errors:

### **Option 1: Get a New API Key (Recommended)**
1. Visit [TMDB API Settings](https://www.themoviedb.org/settings/api)
2. Generate a new API key
3. Update `src/Services/Api.js` with your new key
4. Restart the development server

### **Option 2: Use Demo Mode**
The app includes fallback data and will show sample movies even without a working API key. You'll see a "Demo Mode" banner at the top.

## 🎨 Design Features

- **Glassmorphism Effects** - Modern backdrop blur and transparency
- **Gradient Backgrounds** - Beautiful color transitions throughout
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Responsive Grid** - Adaptive movie card layouts
- **Custom Scrollbar** - Styled scrollbar with gradient colors
- **Loading States** - Beautiful spinners and loading animations
- **Error Handling** - User-friendly error messages and retry options

## 🛠️ Built With

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and development server
- **CSS3** - Advanced styling with custom properties and animations
- **TMDB API** - Movie database for real-time data
- **React Router** - Client-side routing

## 📱 Responsive Design

- **Desktop** - Full-featured experience with hover effects
- **Tablet** - Optimized layouts for medium screens
- **Mobile** - Touch-friendly interface with mobile-first design

## 🎯 Future Enhancements

- [ ] Movie details page with trailers
- [ ] User authentication and profiles
- [ ] Movie recommendations
- [ ] Advanced filtering and sorting
- [ ] Dark/Light theme toggle
- [ ] Offline support with PWA features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **TMDB** for providing the movie database API
- **React Team** for the amazing framework
- **Design inspiration** from modern streaming platforms

---

**Note**: The app will work in demo mode even without an API key, but for the full experience with real-time movie data, please obtain and configure a valid TMDB API key.
