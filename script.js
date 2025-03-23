<div>
  <link rel="stylesheet" href="styles.css"></link>
  <script src="script.js"></script>
</div>

function saveCourses() {
    localStorage.setItem('courses', JSON.stringify(courses));
  }
  function loadCourses() {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      courses = JSON.parse(savedCourses);
    }
  }

  // Add this after your existing JavaScript code, before the closing </script> tag

// PDF export configuration
function exportToPDF() {
    // Create a clone of the container to modify for PDF
    const container = document.querySelector('.container').cloneNode(true);
    
    // Remove action buttons from the clone
    const actionButtons = container.querySelectorAll('.action-buttons');
    actionButtons.forEach(btn => btn.remove());
    
    // Configure PDF options
    const opt = {
        margin: 1,
        filename: 'academic-schedule.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    
    // Generate PDF
    html2pdf().set(opt).from(container).save();
}

/* filepath: /c:/Users/aliha/OneDrive/Desktop/engneering semster 5/schadule/index.html */
// Add this in your <script> section before the init() function

let currentDate = new Date();

function renderCalendar() {
    const calendar = document.getElementById('calendar');
    const currentMonthElem = document.getElementById('currentMonth');
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    currentMonthElem.textContent = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long'
    }).format(currentDate);
    
    // Clear calendar
    calendar.innerHTML = '';
    
    // Add day headers
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-header';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });
    
    // Add padding days from previous month
    let paddingDays = firstDay.getDay();
    for (let i = 0; i < paddingDays; i++) {
        const paddingDay = document.createElement('div');
        paddingDay.className = 'calendar-day other-month';
        calendar.appendChild(paddingDay);
    }
    
    // Add days of current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        
        // Add date number
        const dateSpan = document.createElement('span');
        dateSpan.className = 'date';
        dateSpan.textContent = day;
        dayDiv.appendChild(dateSpan);
        
        // Find courses for this date
        const currentDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const coursesForDay = courses.filter(course => {
            const sessionDates = course.sessions.split(',').map(s => {
                const date = new Date(s.trim());
                return date.toISOString().split('T')[0];
            });
            return sessionDates.includes(currentDateStr);
        });
        
        // Add courses to the day
        coursesForDay.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'course-item';
            courseDiv.style.backgroundColor = `${course.color}40`;
            courseDiv.textContent = `${course.emoji} ${course.name} (${course.time})`;
            dayDiv.appendChild(courseDiv);
        });
        
        calendar.appendChild(dayDiv);
    }
}

// Add this to your setupEventListeners function
function setupEventListeners() {
    // ... existing event listeners ...
    
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });
    
    // Add PDF export event listener
    const exportPdfBtn = document.getElementById('exportPdfBtn');
    exportPdfBtn.addEventListener('click', exportToPDF);
}

// Update your init function to include calendar rendering
function init() {
    renderCourseTable();
    renderWeeklyOverview();
    renderCalendar();
    setupEventListeners();
}