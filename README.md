# 🐢 Terp Pantry Assistant

A chatbot web application that provides quick answers about the UMD Campus Pantry. This is an **unofficial student-created demo** designed to help fellow Terps easily access information about pantry hours, location, eligibility, donations, and more.

## ✨ Features

- **Quick Reference Buttons**: Instant access to common questions
- **Natural Language Processing**: Ask questions in your own words
- **Comprehensive Information**:
  - 📅 Pantry hours (separate for students and faculty/staff)
  - 📍 Location and directions
  - 👤 Eligibility requirements
  - 🎒 What to bring
  - 💼 Student employment opportunities
  - 🤝 Volunteering information
  - 📦 Donation needs with an expandable full list
  - 👩‍🍳 Teaching kitchen programs
  - 🍎 Current food availability (via Instagram)
  - 📞 Contact information

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
├── index.html      # Main HTML structure
├── chatbot.js      # Chatbot logic and data
├── styles.css      # Styling and layout
└── README.md       # Project documentation
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
- "What items does the pantry need?"
- "How can I volunteer?"
- "Are there any jobs available?"

### Special Features
- **Staff Hours**: The bot will specifically inform faculty/staff about Monday-only access when they ask about other days
- **Expandable Donations**: Click "...and more!" to see the complete list of needed items
- **Clickable Links**: Direct links to monetary donations and donation registry

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
- **Monetary Donations**: [UMD Giving Portal](https://giving.umd.edu/make-a-gift?kwodcpreselect=KDC-SA22292)
- **Donation Registry**: [MyRegistry](https://www.myregistry.com/organization/umd-pantry-donation-list-college-park-md/3791289/giftlist)
- **Contact**: campuspantry@umd.edu
- **Instagram**: @UMDCampusPantry

## 📝 Hours Information

- **Students**: Monday - Friday, 10 AM - 5 PM
- **Faculty/Staff**: Mondays only, 10 AM - 5 PM (must register in advance)
- **Closed**: When the University is closed for holidays and breaks

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
