// Sample workout data
let workouts = [
    { date: '2025-06-01', type: 'running', duration: 30, calories: 300 },
    { date: '2025-06-03', type: 'cycling', duration: 45, calories: 400 },
    { date: '2025-06-05', type: 'weight-training', duration: 60, calories: 350 }
];

// DOM Elements
const workoutForm = document.getElementById('workout-form');
const workoutHistory = document.getElementById('workout-history');

// Initialize Chart
const ctx = document.getElementById('activity-chart').getContext('2d');
const activityChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Workout Minutes',
            data: [30, 45, 0, 60, 0, 20, 0],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Form Submission
workoutForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const workoutType = document.getElementById('workout-type').value;
    const duration = parseInt(document.getElementById('duration').value);
    const calories = parseInt(document.getElementById('calories').value);
    const today = new Date().toISOString().split('T')[0];
    
    // Add to workouts array
    workouts.push({
        date: today,
        type: workoutType,
        duration: duration,
        calories: calories
    });
    
    // Update UI
    updateWorkoutHistory();
    updateChart();
    
    // Reset form
    this.reset();
    
    // Show success message
    alert('Workout logged successfully!');
});

// Update Workout History Table
function updateWorkoutHistory() {
    workoutHistory.innerHTML = workouts.map(workout => `
        <tr>
            <td>${workout.date}</td>
            <td>${workout.type}</td>
            <td>${workout.duration} mins</td>
            <td>${workout.calories} kcal</td>
        </tr>
    `).join('');
}

// Update Chart Data
function updateChart() {
    // This would normally come from your data
    const newData = [40, 20, 30, 50, 10, 60, 20];
    activityChart.data.datasets[0].data = newData;
    activityChart.update();
}

// Initialize
updateWorkoutHistory();