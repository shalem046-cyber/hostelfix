# HostelFix - Hostel Booking Website

A modern, responsive web application for discovering and booking hostels worldwide. Built with pure HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Hostel Listings**: Browse through a curated collection of hostels with images, ratings, and prices
- **Search Functionality**: Filter hostels by location with date range selection
- **Detailed Information**: View comprehensive hostel details including amenities and reviews
- **Booking Modal**: Interactive modal for viewing hostel details and booking
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling
- **Contact Form**: Get in touch with the HostelFix team
- **Modern UI**: Beautiful gradient backgrounds, smooth animations, and hover effects

## 📁 Project Structure

```
hostelfix/
├── index.html          # Main HTML file
├── styles/
│   └── main.css       # CSS stylesheet with responsive design
├── js/
│   └── main.js        # JavaScript functionality and interactivity
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required - runs entirely in the browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shalem046-cyber/hostelfix.git
cd hostelfix
```

2. Open the website:
   - Double-click `index.html` to open in your default browser, or
   - Use a local server for better performance:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

## 💻 Usage

### Searching for Hostels
1. Enter a city or location in the search box
2. (Optional) Select check-in and check-out dates
3. Click "Search" to filter results
4. Browse the filtered hostel listings

### Viewing Details
1. Click "View Details" on any hostel card
2. A modal will open with:
   - Full hostel image
   - Detailed description
   - List of amenities
   - Rating and price
3. Click "Book Now" to proceed with booking

### Contact
1. Scroll to the Contact section
2. Fill in your name, email, and message
3. Click "Send Message" to submit

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles/main.css`:
```css
:root {
    --primary-color: #ff6b6b;      /* Main accent color */
    --secondary-color: #4ecdc4;    /* Secondary accent */
    --dark-color: #2c3e50;         /* Dark text */
    --light-color: #ecf0f1;        /* Light backgrounds */
}
```

### Adding More Hostels
Edit the `hostelsData` array in `js/main.js`:
```javascript
{
    id: 7,
    name: "Your Hostel Name",
    location: "City, Country",
    price: 30,
    rating: 4.5,
    image: "image-url",
    description: "Description here",
    amenities: ["WiFi", "Kitchen", "etc"]
}
```

### Modifying Content
- **Header/Navigation**: Edit in `index.html` `<nav>` section
- **Hero Section**: Update text in `<section id="home">`
- **About Section**: Modify `<section id="about">`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⚡ Features Breakdown

### Navigation
- Sticky navbar with smooth scrolling
- Mobile hamburger menu
- Quick navigation links

### Search System
- Location-based filtering
- Date range validation
- Real-time search results

### Hostel Cards
- Hover animations
- Star ratings
- Price display
- Quick view button

### Modal System
- Detailed hostel information
- Amenities list
- Booking button
- Responsive design

### Footer
- Social media links
- Copyright information

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript (ES6)**: DOM manipulation, Event handling
- **Font Awesome**: Icon library
- **Unsplash**: Free stock images

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Future Enhancements

- [ ] Backend integration for real hostel database
- [ ] User authentication and account management
- [ ] Payment gateway integration
- [ ] User reviews and ratings system
- [ ] Wishlist functionality
- [ ] Advanced filters (price range, amenities)
- [ ] Map integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Multi-language support

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Created by [shalem046-cyber](https://github.com/shalem046-cyber)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email us or open an issue on GitHub.

---

**HostelFix** - Making hostel booking easy and accessible for travelers worldwide! 🌍✈️
