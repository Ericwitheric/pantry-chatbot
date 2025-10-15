# 🐢 Terp Pantry Assistant

A chatbot web application that provides quick answers about the UMD Campus Pantry. This is an **unofficial student-created demo** designed to help fellow Terps easily access information about pantry hours, location, eligibility, donations, and more.

## ✨ Features

### **Core Functionality**
- **Quick Reference Buttons**: Instant access to common questions
- **Natural Language Processing**: Ask questions in your own words with smart pattern matching
- **Comprehensive Information**:
  - 📅 Pantry hours (separate for students and faculty/staff)
  - 📍 Location and directions
  - 👤 Eligibility requirements
  - 🎒 What to bring
  - ⭐ Special limited items (once per week per student)
  - 💼 Student employment opportunities
  - 🤝 Volunteering information with direct calendar signup
  - 📦 Donation needs with expandable full list
  - 👩‍🍳 Teaching kitchen programs
  - 🍎 Current food availability (via Instagram)
  - 📞 Contact information

### **Security & Reliability**
- **XSS Protection**: Input sanitization to prevent cross-site scripting attacks
- **Input Validation**: Length limits and character validation
- **Error Handling**: Comprehensive try-catch blocks for graceful error recovery
- **Smart Pattern Matching**: Word boundaries to prevent false keyword matches

### **Analytics & Insights**
- **Usage Tracking**: LocalStorage-based analytics to track question patterns
- **Topic Analysis**: Breakdown of questions by category with percentages
- **Demo-Ready Metrics**: View analytics via browser console with `viewAnalytics()`

## 🚀 Getting Started

### Prerequisites

No installation required! This is a pure HTML/CSS/JavaScript application that runs in any modern web browser.

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pantry-chatbot.git
cd pantry-chatbot
```

2. Open `index.html` in your web browser:
```bash
open index.html
```

Or simply double-click the `index.html` file.

## 📁 Project Structure

```
pantry-chatbot/
├── index.html                  # Main HTML structure
├── chatbot.js                  # Chatbot logic, data, and analytics
├── styles.css                  # Styling and layout
├── README.md                   # Project documentation
├── ANALYTICS_GUIDE.md          # How to use and demo analytics features
├── IMPROVEMENTS_SUMMARY.md     # Technical improvements documentation
└── TEST_CASES.md              # Edge case testing scenarios
```

## 🎯 Usage

### Quick Buttons
Click any of the quick reference buttons at the top to get instant answers about:
- Hours
- Location
- Eligibility
- What to Bring
- Volunteer
- Donations

### Chat Interface
Type your question in the input field and press Enter or click "Send". The bot understands natural language and can answer questions like:
- "When is the pantry open?"
- "Can faculty visit on Tuesday?"
- "What special items are available?"
- "What items does the pantry need?"
- "How can I volunteer?"
- "Are there any jobs available?"

### Special Features
- **Staff Hours Detection**: Automatically informs faculty/staff about Monday-only access when they ask about other days
- **Special Limited Items**: Smart detection for weekly-limited items (milk, chicken, protein, etc.)
- **Expandable Donations List**: Click "...and more!" to see the complete list of needed items
- **Direct Action Links**:
  - Volunteer calendar signup
  - Monetary donation portal
  - Donation registry
  - Instagram for current food availability
- **Context-Aware Responses**: Distinguishes between "What do I need to bring?" vs "What items do you need?"

## 🎨 Customization

### Updating Information

All pantry data is stored in the `PANTRY_DATA` object in `chatbot.js`. You can easily update:

```javascript
const PANTRY_DATA = {
    hours: { ... },
    location: { ... },
    eligibility: { ... },
    // etc.
};
```

### Modifying Responses

Response templates are defined in the `RESPONSES` object. Modify these to change how information is displayed:

```javascript
const RESPONSES = {
    hours: () => { ... },
    location: () => { ... },
    // etc.
};
```

### Adding New Keywords

Update the `getResponse()` function to add new question patterns:

```javascript
if (question.match(/(your|keywords|here)/)) {
    return "Your response here";
}
```

## 🔗 Important Links

- **Official Campus Pantry Website**: [dining.umd.edu/sustainability/campus-pantry](https://dining.umd.edu/sustainability/campus-pantry)
- **Volunteer Signup**: [Google Calendar](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1J4IY7zztqV7rNzU_EzqeSCeLEvphSlgZFTY2z2UapAksBQoxu6E7m0xAYwuiHlDgD0cvQY0KR)
- **Monetary Donations**: [UMD Giving Portal](https://giving.umd.edu/make-a-gift?kwodcpreselect=KDC-SA22292)
- **Donation Registry**: [MyRegistry](https://www.myregistry.com/organization/umd-pantry-donation-list-college-park-md/3791289/giftlist)
- **Contact**: campuspantry@umd.edu | 301-405-9579
- **Instagram**: [@UMDCampusPantry](https://www.instagram.com/umdcampuspantry/)

## 📝 Hours Information

- **Students**: Monday - Friday, 10 AM - 5 PM
- **Faculty/Staff**: Mondays only, 10 AM - 5 PM (must register in advance)
- **Closed**: When the University is closed for holidays and breaks

## ⭐ Special Limited Items

The pantry offers special items that are limited to **once per week per student**:
- Milk: 1%, Almond, Coconut
- Vegetable Oil
- Juice
- Peanut Butter
- Corn Flour
- Protein: Chicken Drumsticks (Halal), Whole Young Chicken, Catfish Nuggets

*Note: These items are subject to change based on availability*

## 📊 Analytics

The chatbot includes built-in analytics tracking using browser localStorage. To view usage statistics:

1. Open browser console (F12)
2. Type: `viewAnalytics()`
3. View metrics including:
   - Total questions asked
   - Questions by topic with percentages
   - Top 3 most asked topics
   - First and last visit timestamps

See [ANALYTICS_GUIDE.md](ANALYTICS_GUIDE.md) for detailed usage instructions and demo strategies.

## 🔒 Security Features

- **XSS Prevention**: All user input is sanitized to prevent HTML/script injection
- **Input Validation**: Character type checking and 500-character length limit
- **Error Handling**: Try-catch blocks prevent crashes and provide user-friendly error messages
- **Privacy-Friendly**: No personal data collected, analytics stored locally only

## ⚠️ Disclaimer

This is an **unofficial student demo project**. For official information, always refer to [dining.umd.edu/sustainability/campus-pantry](https://dining.umd.edu/sustainability/campus-pantry) or contact campuspantry@umd.edu.

## 🤝 Contributing

This project was created by a UMD student to help fellow Terps. Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📧 Contact

For questions about the Campus Pantry, contact:
- Email: campuspantry@umd.edu
- Phone: 301-405-9579

## 📄 License

This project is open source and available for educational purposes.

---

Made with 🐢 by a UMD student to help fellow Terps
