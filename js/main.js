// Sample hostel data
const hostelsData = [
    {
        id: 1,
        name: "City Center Hostel",
        location: "New York, USA",
        price: 35,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
        description: "Modern hostel in the heart of Manhattan with comfortable beds and great vibes.",
        amenities: ["Free WiFi", "Kitchen", "Lounge", "24hr Reception"]
    },
    {
        id: 2,
        name: "Beachside Retreat",
        location: "Barcelona, Spain",
        price: 28,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
        description: "Relaxed hostel steps away from beautiful beaches with a social atmosphere.",
        amenities: ["Beach Access", "Pool", "Bar", "Bike Rental"]
    },
    {
        id: 3,
        name: "Heritage Hostel",
        location: "Paris, France",
        price: 32,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
        description: "Charming hostel in a historic building near the Eiffel Tower.",
        amenities: ["Historic Building", "Guided Tours", "Library", "Laundry"]
    },
    {
        id: 4,
        name: "Tokyo Tower Hostel",
        location: "Tokyo, Japan",
        price: 40,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
        description: "Trendy hostel with amazing views and excellent local connections.",
        amenities: ["Tower View", "Japanese Bath", "Tech Center", "Language Exchange"]
    },
    {
        id: 5,
        name: "Rio Carnival Hostel",
        location: "Rio de Janeiro, Brazil",
        price: 25,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
        description: "Vibrant hostel perfect for experiencing Rio's lively culture and nightlife.",
        amenities: ["Party Area", "Beach Shuttle", "Dance Classes", "Rooftop Bar"]
    },
    {
        id: 6,
        name: "Alpine Lodge",
        location: "Zurich, Switzerland",
        price: 45,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
        description: "Luxury hostel with mountain views and premium amenities.",
        amenities: ["Mountain View", "Spa", "Fine Dining", "Adventure Tours"]
    }
];

// DOM Elements
const hostelsGrid = document.getElementById('hostelsGrid');
const hostelModal = document.getElementById('hostelModal');
const modalBody = document.getElementById('modalBody');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayHostels(hostelsData);
    setupEventListeners();
});

// Display hostels on page
function displayHostels(hostels) {
    hostelsGrid.innerHTML = '';
    
    if (hostels.length === 0) {
        hostelsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: #666;">No hostels found. Try a different search!</p>';
        return;
    }
    
    hostels.forEach(hostel => {
        const hostelCard = document.createElement('div');
        hostelCard.className = 'hostel-card';
        hostelCard.innerHTML = `
            <img src="${hostel.image}" alt="${hostel.name}" class="hostel-image">
            <div class="hostel-info">
                <div class="hostel-name">${hostel.name}</div>
                <div class="hostel-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${hostel.location}
                </div>
                <div class="hostel-rating">
                    <i class="fas fa-star"></i> ${hostel.rating}/5.0
                </div>
                <div class="hostel-price">
                    $${hostel.price}<small>/night</small>
                </div>
                <button onclick="openModal(${hostel.id})">View Details</button>
            </div>
        `;
        hostelsGrid.appendChild(hostelCard);
    });
}

// Open modal with hostel details
function openModal(hostelId) {
    const hostel = hostelsData.find(h => h.id === hostelId);
    
    if (hostel) {
        modalBody.innerHTML = `
            <img src="${hostel.image}" alt="${hostel.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 1.5rem;">
            <h2>${hostel.name}</h2>
            <p style="color: #666; margin: 0.5rem 0;">
                <i class="fas fa-map-marker-alt"></i> ${hostel.location}
            </p>
            <p style="color: var(--primary-color); font-weight: bold; margin: 0.5rem 0;">
                <i class="fas fa-star"></i> ${hostel.rating}/5.0
            </p>
            <p style="margin: 1rem 0;">${hostel.description}</p>
            <h3 style="margin-top: 1.5rem;">Amenities</h3>
            <ul style="list-style: none; margin: 1rem 0;">
                ${hostel.amenities.map(amenity => `
                    <li style="padding: 0.5rem 0;">
                        <i class="fas fa-check" style="color: var(--secondary-color); margin-right: 0.5rem;"></i>
                        ${amenity}
                    </li>
                `).join('')}
            </ul>
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
                <button class="btn btn-primary" style="flex: 1;" onclick="bookNow(${hostel.id})">Book Now</button>
                <button class="btn" style="flex: 1; background-color: #ddd; color: #333;" onclick="closeModal()">Close</button>
            </div>
        `;
        hostelModal.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    hostelModal.style.display = 'none';
}

// Book hostel
function bookNow(hostelId) {
    const hostel = hostelsData.find(h => h.id === hostelId);
    alert(`Booking for ${hostel.name} in ${hostel.location}! This would redirect to a booking page.`);
    closeModal();
}

// Search hostels
function searchHostels() {
    const location = document.getElementById('locationInput').value.toLowerCase();
    const checkIn = document.getElementById('checkInDate').value;
    const checkOut = document.getElementById('checkOutDate').value;
    
    if (!location && !checkIn && !checkOut) {
        alert('Please enter at least a location or select dates');
        return;
    }
    
    let filtered = hostelsData;
    
    if (location) {
        filtered = filtered.filter(hostel => 
            hostel.location.toLowerCase().includes(location) ||
            hostel.name.toLowerCase().includes(location)
        );
    }
    
    if (checkIn || checkOut) {
        if (!checkIn || !checkOut) {
            alert('Please select both check-in and check-out dates');
            return;
        }
        
        const inDate = new Date(checkIn);
        const outDate = new Date(checkOut);
        
        if (outDate <= inDate) {
            alert('Check-out date must be after check-in date');
            return;
        }
    }
    
    displayHostels(filtered);
    
    // Scroll to results
    document.getElementById('hostels').scrollIntoView({ behavior: 'smooth' });
}

// Setup event listeners
function setupEventListeners() {
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when link clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === hostelModal) {
            closeModal();
        }
    });
    
    // Contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
    
    // Enter key on search
    document.getElementById('locationInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchHostels();
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Add fadeInUp animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .hostel-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Observe hostel cards
setTimeout(() => {
    document.querySelectorAll('.hostel-card').forEach(card => {
        observer.observe(card);
    });
}, 100);
