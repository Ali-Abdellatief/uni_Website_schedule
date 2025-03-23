# Academic Schedule Website

A comprehensive academic schedule management system with course tracking, assignment management, and Pomodoro timer functionality.

## Features

### 1. Course Management 📚
- Add, edit, and delete courses
- Course information includes:
  - Course name and emoji
  - Course code
  - Session weeks
  - Time slot
  - Room number
  - Color coding
  - Day and time period (Morning/Afternoon/Evening)

### 2. Weekly Overview 📅
- Visual representation of weekly schedule
- Color-coded course blocks
- Identification of free days
- Time-of-day organization (Morning/Afternoon/Evening)
- Weekend grouping

### 3. Monthly Calendar 📆
- Interactive monthly view
- Navigation between months
- Visual course session markers
- Color-coded course events
- Day-by-day view of scheduled sessions

### 4. Semester Timeline 📈
- Visual timeline of the semester
- Three zoom levels:
  - Day view (detailed)
  - Week view
  - Month view
- Color-coded course events
- Interactive navigation
- Week number indicators

### 5. Assignment Management 📝
- Create, edit, and delete assignments
- Assignment features include:
  - Title and description
  - Course association
  - Deadline with date and time
  - Progress tracking (0-100%)
  - Status tracking (Not Started/In Progress/Completed)
- Assignment filtering:
  - All assignments
  - Not started
  - In progress
  - Completed
- Progress bar visualization
- Countdown to deadline
- Notification system for upcoming deadlines
  - 24-hour reminder
  - 1-hour reminder

### 6. Pomodoro Timer ⏱️
- Customizable timer settings:
  - Work duration (default: 25 minutes)
  - Short break duration (default: 5 minutes)
  - Long break duration (default: 15 minutes)
  - Sessions before long break (default: 4)
- Course-specific focus tracking
- Session statistics:
  - Daily focus sessions per course
  - Total time spent per course
- Timer controls:
  - Start
  - Pause
  - Reset
- Visual progress ring
- Audio notification when timer completes
- Automatic break scheduling

### 7. Theme Support 🎨
- Light and dark mode
- Persistent theme preference
- Dynamic color adaptation
- Smooth theme transitions

### 8. Data Management 💾
- Automatic saving to localStorage
- Persistent data across sessions
- Course data backup
- Assignment data backup
- Focus statistics tracking

### 9. Export Functionality 📤
- Export schedule to PDF
- Formatted document output
- Preserves styling and layout

### 10. Responsive Design 📱
- Mobile-friendly interface
- Adaptive layouts
- Flexible grid systems
- Touch-friendly controls

## Technical Features

### Data Persistence
- Local storage integration
- Automatic data saving
- Session persistence

### Event Handling
- Dynamic event listeners
- Event delegation
- Modal interaction management

### Visual Feedback
- Color coding for courses
- Progress indicators
- Status badges
- Interactive buttons
- Loading states

### Time Management
- Week number calculation
- Date formatting
- Deadline tracking
- Session scheduling

### Notification System
- Browser notifications
- Deadline reminders
- Timer completion alerts

## Usage Tips

1. **Course Management**:
   - Use the "Add New Course" button to create courses
   - Click "Edit" to modify existing courses
   - Use the delete button to remove courses

2. **Assignment Tracking**:
   - Create assignments from the assignment section
   - Update progress as you work
   - Filter assignments by status

3. **Pomodoro Timer**:
   - Select a course before starting the timer
   - Customize timer durations in settings
   - Check daily statistics for productivity tracking

4. **Data Backup**:
   - Use the PDF export for backup
   - Clear localStorage if you need to reset data
   - Regularly check saved data

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- LocalStorage capability required
- Notification API support for reminders 
