# Allocuba - Water Delivery Mobile App

A modern, complete frontend prototype for **Allocuba**, a water delivery service application designed for Laayoune, Morocco. The app connects customers with local water truck drivers ("cuba") for convenient home delivery of water barrels (برميل).

![Allocuba](https://img.shields.io/badge/Status-Stable%20Frontend-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)

## ✨ Features

### 🎨 Design System
- **iOS 26 Liquid Glass Style** - Modern glassmorphism design with advanced backdrop filters
- **Dark/Light Mode** - Full theme support with smooth transitions
- **Theme Color Customization** - 8 preset colors + custom color picker
- **RTL Support** - Full Arabic and French language support
- **Responsive Design** - Optimized for mobile devices (max-width: 414px)
- **Smooth Animations** - Spring-like transitions and micro-interactions

### 👤 Client Features
- **Splash Screen** - Animated welcome screen with liquid glass effects
- **Sign Up** - Role selection (Client/Driver) with smooth sliding animations
- **Home Page** - Personalized greeting, quick order button, recent orders
- **Order Page** - Quantity selector (1-25 برميل), water type selection, order summary
- **Updates Page** - Real-time notifications with unread indicators
- **Profile Page** - Personal information, order history, settings access
- **Edit Profile** - Update name and phone number
- **Settings Page** - Language, theme, color customization, support, donations

### 🚚 Driver Features
- **Driver Home** - Available orders with client details, distance, and map view
- **Active Deliveries** - Track ongoing deliveries with navigation
- **Report Issues** - Report client problems (no answer, wrong address, etc.)
- **Mark as Delivered** - Complete delivery workflow
- **Driver Profile** - Progress tracking (100 deliveries goal), statistics, delivery history
- **Driver Updates** - Notifications for new orders and urgent alerts

### 🛠️ Additional Features
- **Language Selection** - Arabic (RTL) and French support
- **Theme Toggle** - Switch between dark and light modes
- **Color Themes** - 8 preset colors + custom color picker
- **Support Contact** - Direct phone call integration
- **Donation System** - Support the project with preset or custom amounts
- **Scroll Lock** - Prevents background scrolling when modals are open
- **Payment Method** - Cash on Delivery (COD) only

## 🎨 Design Highlights

### Liquid Glass Effects
- Advanced backdrop filters with blur and saturation
- Multi-layer shadows and highlights
- Animated gradients and shimmer effects
- SVG distortion filters for depth
- Glassmorphism cards with transparency

### Color System
- **Primary Colors**: iOS Blue (#0A84FF), Orange (#FF9500), Pink (#FF2D55)
- **8 Preset Themes**: Blue, Green, Orange, Red, Purple, Indigo, Pink, Turquoise
- **Custom Color Picker**: Full spectrum color selection
- **Dark Mode**: Optimized color schemes for both themes

### Typography
- **Primary Font**: Faculty Glyphic, Merienda, Inter
- **Arabic Font**: Noto Sans Arabic
- **System Fonts**: SF Pro Display, SF Pro Text (iOS fallback)

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Saad-Sbiro/allocuba.git
cd allocuba
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 📁 Project Structure

```
allocuba/
├── src/
│   ├── components/
│   │   ├── BottomNavigation.jsx          # Bottom navigation bar
│   │   ├── BottomNavigation.css
│   │   ├── LanguageSelector.jsx          # Language switcher
│   │   ├── ThemeToggle.jsx               # Dark/light mode toggle
│   │   ├── NotificationCard.jsx         # Toast notifications
│   │   ├── ConfirmDialog.jsx            # Confirmation dialogs
│   │   ├── ConfirmDialog.css
│   │   ├── DonationModal.jsx            # Donation modal
│   │   ├── DonationModal.css
│   │   ├── DriverReportModal.jsx        # Driver issue reporting
│   │   └── DriverReportModal.css
│   ├── screens/
│   │   ├── SplashScreen.jsx             # Welcome screen
│   │   ├── SignUpPage.jsx               # Registration
│   │   ├── SignUpPage.css
│   │   ├── LanguageSelectionPage.jsx   # Language selection
│   │   ├── ClientHome.jsx               # Client home page
│   │   ├── OrderPage.jsx                # Order creation
│   │   ├── OrderPage.css
│   │   ├── UpdatesPage.jsx              # Client notifications
│   │   ├── ProfilePage.jsx               # Client profile
│   │   ├── ProfilePage.css
│   │   ├── EditProfilePage.jsx          # Edit profile
│   │   ├── EditProfilePage.css
│   │   ├── SettingsPage.jsx              # Settings page
│   │   ├── SettingsPage.css
│   │   ├── DriverPage.jsx                # Driver home
│   │   ├── DriverPage.css
│   │   ├── DriverUpdatesPage.jsx        # Driver notifications
│   │   ├── DriverProfile.jsx             # Driver profile
│   │   └── DriverProfile.css
│   ├── context/
│   │   ├── LanguageContext.jsx           # Language state management
│   │   ├── ThemeContext.jsx              # Theme state management
│   │   └── ThemeColorContext.jsx         # Theme color management
│   ├── translations/
│   │   ├── fr.js                         # French translations
│   │   └── ar.js                         # Arabic translations
│   ├── App.jsx                           # Main app component
│   ├── main.jsx                          # Entry point
│   └── index.css                         # Global styles
├── index.html                            # HTML template with SVG filters
├── package.json
├── vite.config.js
└── README.md
```

## 🛣️ Routes

### Public Routes
- `/` - Splash Screen
- `/signup` - Sign Up Page (role selection)
- `/signup/language` - Language Selection

### Client Routes
- `/client/home` - Client Home Page
- `/client/order` - New Order Page
- `/client/updates` - Notifications Page
- `/client/profile` - Client Profile
- `/client/edit-profile` - Edit Profile
- `/client/settings` - Settings Page

### Driver Routes
- `/driver/home` - Driver Home (Available Orders)
- `/driver/updates` - Driver Notifications
- `/driver/profile` - Driver Profile with Progress
- `/driver/edit-profile` - Edit Profile
- `/driver/settings` - Settings Page

## 🌍 Internationalization

The app supports two languages with full RTL support:

- **Arabic (ar)** - Right-to-left layout
- **French (fr)** - Left-to-right layout

All text content is managed through translation files in `src/translations/`.

## 🎯 Key Features in Detail

### Order System
- **Water Types**: Tantan (40 MAD/برميل) and Filtrée (40 MAD/برميل)
- **Quantity Range**: 1-25 برميل (barrels)
- **Payment**: Cash on Delivery (COD) only
- **Order Summary**: Real-time price calculation

### Driver Reporting System
Drivers can report issues with deliveries:
- Client not answering phone
- Wrong address
- Client not available
- Client refused order
- Other issues (with custom description)

### Progress Tracking
- **Goal**: 100 deliveries
- **Reward**: 100 MAD upon completion
- **Visual Progress Bar**: Animated with shimmer effect
- **Statistics**: Completed, remaining, percentage

### Settings & Customization
- **Language**: Switch between Arabic and French
- **Theme**: Dark/Light mode toggle
- **Color**: 8 preset colors + custom picker
- **Support**: Direct phone call button
- **Donation**: Preset amounts (20, 50, 100, 200, 500 MAD) or custom

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router DOM v6** - Navigation and routing
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **CSS3** - Advanced styling with:
  - Custom properties (CSS variables)
  - Backdrop filters
  - CSS Grid & Flexbox
  - Keyframe animations
  - SVG filters

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Changing Theme Colors

The app uses CSS custom properties for theming. Modify in `src/index.css`:

```css
:root {
  --ios-blue: #0A84FF;
  --ios-orange: #FF9500;
  --ios-pink: #FF2D55;
  /* ... */
}
```

Or use the built-in color picker in Settings!

### Adding Translations

Edit `src/translations/fr.js` and `src/translations/ar.js`:

```javascript
export default {
  // Add your translation keys here
  myKey: 'My Translation'
}
```

### Modifying Liquid Glass Effects

Adjust SVG filters in `index.html`:

```html
<filter id="glass-distortion">
  <feTurbulence baseFrequency="0.004 0.004" />
  <!-- Adjust values for different effects -->
</filter>
```

## 📊 Project Status

- ✅ **Frontend**: Complete and stable
- ⏳ **Backend**: Pending (Laravel integration planned)

## 🤝 Contributing

This is currently a prototype project. Contributions and suggestions are welcome!

## 📄 License

This is a prototype for demonstration purposes.

## 👤 Author

**Saad Sbiro**
- GitHub: [@Saad-Sbiro](https://github.com/Saad-Sbiro)

## 🙏 Acknowledgments

- Design inspired by iOS 26 liquid glass aesthetic
- Icons provided by [Lucide](https://lucide.dev)
- Fonts: Faculty Glyphic, Merienda, Noto Sans Arabic

---

**Note**: This is a frontend prototype. Backend integration with Laravel is planned for future development.
