# KiteSurf Elite Spots Explorer

An interactive application to discover premium kitesurfing locations worldwide.

## Features

- Interactive world map with location markers
- Real-time weather data for each spot
- High-quality images of kitesurfing destinations
- Detailed information about each location
- Trending spots based on current conditions

## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with the following API keys:
   ```
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key
   VITE_PEXELS_API_KEY=your_pexels_api_key
   ```
4. Run the development server with `npm run dev`

## API Keys

### OpenWeather API
- Sign up at [OpenWeather](https://openweathermap.org/api)
- Free tier provides access to current weather data

### Pexels API
- Sign up at [Pexels API](https://www.pexels.com/api/)
- Free tier provides 200 requests per hour and 20,000 requests per month
- No credit card required

## Alternative Image APIs

If you prefer not to use Pexels, here are some alternatives:

1. **Pixabay API**
   - Free with attribution
   - [Sign up here](https://pixabay.com/api/docs/)

2. **Flickr API**
   - Free with various license options
   - [Sign up here](https://www.flickr.com/services/api/)

3. **Giphy API**
   - For animated content
   - [Sign up here](https://developers.giphy.com/)

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Simple Maps
- Vite
