# Allocuba - Mobile App Prototype

A complete mobile app UI/UX prototype for **Allocuba**, a water delivery service application for Laayoune, Morocco. The app connects customers with local water truck drivers ("cuba") for silent, organized home delivery.

## Features

### Client Features
- **Splash Screen** - Beautiful animated welcome screen with tagline
- **Sign Up** - Registration with phone, name, and CIN upload (recto/verso)
- **Home Page** - Greeting, quick order button, recent orders list, and contact info for drivers without smartphones
- **Order Page** - Quantity selector, water type selection (Tantan/Filtrée), map for delivery location, order summary
- **Updates Page** - Push notifications for delivery updates and alerts
- **Profile Page** - Personal information, order history, logout

### Driver Features
- **Driver Home** - Available orders with distance, client details, map view
- **Delivery Management** - Start delivery, mark as delivered
- **Driver Profile** - Progress tracking (100 deliveries goal for 100 MAD reward), delivery history

## Design System

- **Colors**: Primary (#1a2e49), Secondary (#F1F1F1), Accent Blue (#4A90E2)
- **Fonts**: Inter and Poppins
- **Icons**: Lucide React (simple line style)
- **Style**: Modern, minimalist, clean with rounded cards and soft shadows

## Languages

The app supports both **Arabic** and **French** languages.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## Project Structure

```
allocuba/
├── src/
│   ├── components/
│   │   ├── BottomNavigation.jsx
│   │   └── BottomNavigation.css
│   ├── screens/
│   │   ├── SplashScreen.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── ClientHome.jsx
│   │   ├── OrderPage.jsx
│   │   ├── DriverPage.jsx
│   │   ├── UpdatesPage.jsx
│   │   ├── ProfilePage.jsx
│   │   └── DriverProfile.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Routes

- `/` - Splash Screen
- `/signup` - Sign Up Page (choose Client or Driver)
- `/client/home` - Client Home Page
- `/client/order` - New Order Page
- `/client/updates` - Notifications Page
- `/client/profile` - Client Profile
- `/driver/home` - Driver Home (Available Orders)
- `/driver/profile` - Driver Profile with Progress Tracking

## Features in Detail

### Splash Screen
- Animated water-themed background
- Logo with droplet icon
- Tagline: "كسب طمأنينة، الماء فݣاع المدينة."
- Auto-navigates to signup after 3 seconds

### Sign Up
- Role selection (Client/Driver)
- Phone number input
- First name and last name
- CIN document upload (recto and verso)
- Beautiful water-pattern background

### Client Home
- Personalized greeting
- Large "Commander de l'eau" button
- Recent orders with status badges
- List of drivers without smartphones (with phone numbers)

### Order Page
- Quantity slider (1-10 bidons)
- Water type selection (Tantan: 15 MAD, Filtrée: 20 MAD)
- Map placeholder for delivery location
- Order summary with total price
- Estimated delivery time

### Driver Page
- List of available orders with:
  - Client name and details
  - Distance and estimated time
  - Delivery address
  - Client phone number
- Active deliveries section
- Map view with client locations
- "Start delivery" and "Mark as delivered" buttons

### Driver Profile
- Progress tracking for 100 deliveries goal
- Visual progress bar
- Statistics (completed, remaining, goal)
- Reward information (100 MAD)
- Delivery history

### Updates/Notifications
- List of all notifications
- Unread indicators
- Click to view related orders
- Different notification types (delivery, delivered, confirmed, reminder)

## Customization

### Adding Your Logo

Replace the Droplet icon in `src/screens/SplashScreen.jsx` with your logo:

```jsx
<img src="/path/to/your/logo.png" alt="Allocuba" className="logo-image" />
```

### Colors

Modify colors in `src/index.css`:
- `--primary-color`: Main brand color
- `--secondary-color`: Background/secondary color
- `--accent-blue`: Accent color for highlights

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Navigation
- **Vite** - Build tool
- **Lucide React** - Icons
- **CSS3** - Styling with custom properties

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile View

The app is designed for mobile devices (max-width: 414px) and simulates a mobile app experience in the browser.

## License

This is a prototype for demonstration purposes.



