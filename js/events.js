document.addEventListener('DOMContentLoaded', function() {
    // Sample events data
    const events = [
        {
            id: 1,
            title: "Morning Yoga Session",
            date: "2025-07-15",
            time: "8:00 AM",
            location: "University Sports Center",
            category: "fitness",
            description: "Start your day with a relaxing yoga session to improve flexibility and reduce stress.",
            image: "images/yoga-event.jpg"
        },
        {
            id: 2,
            title: "Healthy Eating Workshop",
            date: "2025-07-20",
            time: "3:00 PM",
            location: "Health Sciences Building",
            category: "nutrition",
            description: "Learn about balanced diets and meal planning from our nutrition experts.",
            image: "images/nutrition-workshop.jpg"
        },
        {
            id: 3,
            title: "5K Charity Run",
            date: "2025-08-05",
            time: "9:00 AM",
            location: "Campus Main Gate",
            category: "fitness",
            description: "Join us for a fun run to raise money for local charities.",
            image: "images/charity-run.jpg"
        },
        {
            id: 4,
            title: "Mental Health Seminar",
            date: "2025-08-12",
            time: "2:00 PM",
            location: "Psychology Department",
            category: "wellness",
            description: "Discussion on stress management techniques and mental health awareness.",
            image: "images/mental-health.jpg"
        }
    ];

    const eventsContainer = document.getElementById('events-container');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Display all events initially
    displayEvents(events);

    // Filter events by category
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.filter;
            let filteredEvents;
            
            if (category === 'all') {
                filteredEvents = events;
            } else {
                filteredEvents = events.filter(event => event.category === category);
            }
            
            displayEvents(filteredEvents);
        });
    });

    // Function to display events
    function displayEvents(eventsToDisplay) {
        eventsContainer.innerHTML = '';
        
        if (eventsToDisplay.length === 0) {
            eventsContainer.innerHTML = '<p class="no-events">No events found in this category.</p>';
            return;
        }
        
        eventsToDisplay.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card animate-slide-up hover-float';
            eventCard.innerHTML = `
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}">
                </div>
                <div class="event-content">
                    <span class="event-date">${event.date} • ${event.time}</span>
                    <h3>${event.title}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                    <p>${event.description}</p>
                    <button class="btn btn-secondary" data-id="${event.id}">Register</button>
                </div>
            `;
            
            eventsContainer.appendChild(eventCard);
        });

        // Add event listeners to register buttons
        document.querySelectorAll('[data-id]').forEach(button => {
            button.addEventListener('click', function() {
                const eventId = this.dataset.id;
                const selectedEvent = events.find(event => event.id == eventId);
                alert(`You have registered for: ${selectedEvent.title}\nDate: ${selectedEvent.date} at ${selectedEvent.time}`);
            });
        });
    }
});