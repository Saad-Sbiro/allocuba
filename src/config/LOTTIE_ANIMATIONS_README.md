# Lottie Animations Integration Guide

This app uses Lottie animations to make all pages interactive and dynamic. The animations are configured in `lottieAnimations.js`.

## How to Add Your Own Animations

### Step 1: Find Free Animations
1. Visit [LottieFiles](https://lottiefiles.com/)
2. Search for free animations (e.g., "water", "delivery", "loading", "profile")
3. Click on an animation you like
4. Click "Download" or "Copy URL"

### Step 2: Get the Animation URL
You have two options:

**Option A: Use Direct JSON URL**
- Copy the JSON URL from LottieFiles
- It will look like: `https://assets5.lottiefiles.com/packages/lf20_xxxxx.json`
- Replace the URL in `lottieAnimations.js`

**Option B: Host Locally**
1. Download the JSON file
2. Place it in `public/animations/` folder
3. Use the path: `/animations/your-animation.json`

### Step 3: Update the Config
Edit `src/config/lottieAnimations.js` and replace the placeholder URLs:

```javascript
export const LOTTIE_ANIMATIONS = {
  splash: 'YOUR_ANIMATION_URL_HERE',
  signup: 'YOUR_ANIMATION_URL_HERE',
  // ... etc
}
```

## Recommended Animation Types

- **Splash Screen**: Water, loading, or app logo animation
- **Signup**: Registration, user signup animation
- **Language Selection**: Globe, world map animation
- **Home**: Delivery truck, water bottle, home icon animation
- **Order**: Shopping cart, order form animation
- **Notifications**: Bell, notification badge animation
- **Profile**: User profile, avatar animation
- **Settings**: Gear, settings icon animation
- **Driver**: Delivery truck, driver animation

## Animation Sizes

Animations are sized appropriately for each page:
- Large (120-200px): Splash, main action cards
- Medium (80-120px): Headers, profile avatars
- Small (60-80px): Settings, icons

## Customization

You can customize animations per page by modifying the `style` prop in each component:

```jsx
<LottieAnimation
  animationUrl={LOTTIE_ANIMATIONS.splash}
  style={{ width: '200px', height: '200px' }}
  loop={true}
  autoplay={true}
  speed={1} // Adjust speed (0.5 = slower, 2 = faster)
/>
```

## Performance Tips

1. Use optimized animations (smaller file sizes)
2. Consider using local files for better performance
3. Disable autoplay for animations that don't need to loop
4. Use `speed` prop to control animation speed

## Current Status

All pages have been integrated with Lottie animations. The placeholder URLs need to be replaced with actual animation URLs from LottieFiles.

