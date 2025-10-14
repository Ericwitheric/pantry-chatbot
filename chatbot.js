// Campus Pantry Information Database
const PANTRY_DATA = {
    hours: {
        general: "The Campus Pantry is closed when the University is closed for holidays and breaks.",
        students: "Students can visit Monday to Friday, 10 AM to 5 PM.",
        faculty_staff: "Faculty and staff can only visit on Mondays, 10 AM to 5 PM. Must register in advance at go.umd.edu/CampusPantrySignUps. Limited to 2 visits per month. Please sign up one day before your visit.",
        current: "Please check the official website for this week's hours as they may change due to events or holidays."
    },
    
    location: {
        building: "South Campus Dining Hall, Ground Floor",
        address: "7093 Preinkert Drive, College Park, MD 20742",
        directions: "Enter through the main entrance of South Campus Dining Hall. The pantry is located on the ground floor. Look for Campus Pantry signs.",
        parking: "Visitors can park in Lot 11b or use the nearby Campus Drive Garage.",
        nearby: "Near South Campus Commons and close to the Purple Line stop"
    },
    
    eligibility: {
        who: "All current UMD students, faculty, and staff experiencing food insecurity",
        requirements: "Must have a valid UMD ID card (UID)",
        faculty_rules: "Faculty and staff must register online in advance and are limited to 2 visits per month",
        no_questions: "The pantry operates on a no-questions-asked basis. No proof of need required.",
        confidential: "All visits are confidential"
    },
    
    what_to_bring: {
        required: ["Valid UMD ID card (UID)"],
        recommended: ["Reusable bags or backpack to carry items", "List of dietary restrictions if applicable"],
        not_needed: ["No proof of financial need required", "No paperwork needed"]
    },

    special_items: {
        restriction: "Limited to one per week per student",
        items: [
            "Milk: 1%, Almond, Coconut",
            "Vegetable Oil",
            "Juice",
            "Peanut Butter",
            "Corn Flour",
            "Protein: Chicken Drumsticks (Halal), Whole Young Chicken, Catfish Nuggets"
        ],
        note: "These items are subject to change based on availability"
    },
    
    volunteer: {
        how_to: "Sign up for one-hour volunteer slots through the Campus Pantry calendar",
        opportunities: [
            "Stocking shelves",
            "Sorting donations", 
            "Helping with distributions",
            "Checking in visitors",
            "Organizing inventory"
        ],
        terps_for_change: "Partner with Terps For Change for semester-long weekly volunteer commitments with reflection sessions",
        groups: "Organizations can schedule group volunteer sessions by emailing campuspantry@umd.edu",
        hours_tracking: "Volunteer hours can count toward service-learning requirements"
    },
    
    donations: {
        most_needed: [
            "Cooking oil (olive, canola, vegetable)",
            "Spices and herbs (oregano, cumin, chili powder)",
            "Salt and pepper",
            "Flour (all types including gluten-free)",
            "Rice and grains (brown rice, quinoa)",
            "Breakfast items (cereal, oatmeal)",
            "Canned proteins (tuna, chicken, beans)",
            "Pasta sauce",
            "Peanut butter",
            "Personal hygiene products"
        ],
        how_to_donate: "Drop off donations at the Campus Pantry welcome desk during operating hours *no expired, dented, open, or broken containers",
        monetary: "https://giving.umd.edu/make-a-gift?kwodcpreselect=KDC-SA22292",
        registry: "https://www.myregistry.com/organization/umd-pantry-donation-list-college-park-md/3791289/giftlist",
        food_drives: "Organize food drives in your residence hall or office by contacting campuspantry@umd.edu"
    },
    
    services: {
        teaching_kitchen: "Free cooking classes and workshops on nutrition, budgeting, and meal prep",
        resource_room: "Private room for accessing remote services (counseling, SNAP applications, etc.)",
        emergency_meals: "Emergency meal swipes available through the Dean of Students office"
    },

    employment: {
        title: "Green Dining Student Staff Positions",
        hours: "Spring of 2025: 10 hours per week for the support of the Green Dining projects, based at South Campus but also including the Terp Farm in Upper Marlboro, MD.",
        pay: "$18.00 per hour",
        benefits: "Staff meal available per four-hour shift worked. Additional hours available for Summer 2025.",
        responsibilities: "Under the direction of the Green Dining Manager, the Student Staff reports to the Student Supervisor and Manager and assists with daily operations of Green Dining projects including the UMD Campus Pantry, Terp Farm, and Farmers Market at Maryland. Duties will vary according to location, but will generally include customer service, organizing and cleaning, increasing the capacity of the overall program, planting, harvesting, and crop management at Terp Farm, assisting TMA AmeriCorps VISTAs, and other assignments.",
        prerequisites: "Candidates must be full-time undergraduate students at the University of Maryland, College Park with successful academic progress. Must be responsible, have great customer service skills, be well organized, and be professional. Strong communication skills are essential. Basic computer skills and Maryland Driver's License are desired. All students who are interested are encouraged to apply.",
        how_to_apply: "Email completed applications (resume, cover letter, and student application) to campuspantry@umd.edu"
    },
    
    contact: {
        email: "campuspantry@umd.edu",
        phone: "301-405-9579",
        website: "dining.umd.edu/sustainability/campus-pantry",
        social: "@UMDCampusPantry on Instagram",
        instagram: "https://www.instagram.com/umdcampuspantry/"
    }
};

// Response templates for better formatting
const RESPONSES = {
    hours: () => {
        return `📅 <b>Campus Pantry Hours:</b><br><br>
        ${PANTRY_DATA.hours.general}<br><br>
        <b>For Students:</b> ${PANTRY_DATA.hours.students}<br><br>
        <b>For Faculty/Staff:</b> ${PANTRY_DATA.hours.faculty_staff}<br><br>
        💡 <i>Tip: ${PANTRY_DATA.hours.current}</i>`;
    },
    
    location: () => {
        return `📍 <b>Campus Pantry Location:</b><br><br>
        <b>Building:</b> ${PANTRY_DATA.location.building}<br>
        <b>Address:</b> ${PANTRY_DATA.location.address}<br><br>
        <b>Directions:</b> ${PANTRY_DATA.location.directions}<br><br>
        <b>Parking:</b> ${PANTRY_DATA.location.parking}`;
    },
    
    eligibility: () => {
        return `👤 <b>Who Can Use the Pantry:</b><br><br>
        ✅ ${PANTRY_DATA.eligibility.who}<br><br>
        <b>What you need:</b> ${PANTRY_DATA.eligibility.requirements}<br><br>
        📌 ${PANTRY_DATA.eligibility.no_questions}<br>
        🔒 ${PANTRY_DATA.eligibility.confidential}`;
    },
    
    whatToBring: () => {
        return `🎒 <b>What to Bring:</b><br><br>
        <b>Required:</b><br>
        • ${PANTRY_DATA.what_to_bring.required.join('<br>• ')}<br><br>
        <b>Recommended:</b><br>
        • ${PANTRY_DATA.what_to_bring.recommended.join('<br>• ')}<br><br>
        <i>${PANTRY_DATA.what_to_bring.not_needed.join('<br>')}</i>`;
    },
    
    volunteer: () => {
        return `🤝 <b>How to Volunteer:</b><br><br>
        ${PANTRY_DATA.volunteer.how_to}<br><br>
        <b>Volunteer activities include:</b><br>
        • ${PANTRY_DATA.volunteer.opportunities.join('<br>• ')}<br><br>
        <b>Semester Program:</b> ${PANTRY_DATA.volunteer.terps_for_change}<br><br>
        📧 Contact: ${PANTRY_DATA.contact.email}`;
    },
    
    donations: (showAll = false) => {
        const items = showAll
            ? PANTRY_DATA.donations.most_needed
            : PANTRY_DATA.donations.most_needed.slice(0, 5);

        const moreLink = showAll
            ? ''
            : `<a href="#" onclick="event.preventDefault(); showAllDonations(); return false;" style="color: #E21833; font-weight: bold;">...and more! Click to see full list</a><br><br>`;

        return `📦 <b>Most Needed Donations:</b><br><br>
        • ${items.join('<br>• ')}<br><br>
        ${moreLink}
        <b>How to donate:</b> ${PANTRY_DATA.donations.how_to_donate}<br><br>
        <b>Monetary donations:</b> <a href="${PANTRY_DATA.donations.monetary}" target="_blank">Click here to donate</a><br>
        <b>Donation registry:</b> <a href="${PANTRY_DATA.donations.registry}" target="_blank">View our registry</a><br>
        <b>Organize a food drive:</b> Email ${PANTRY_DATA.contact.email}`;
    },
    
    contact: () => {
        return `📞 <b>Contact Information:</b><br><br>
        <b>Email:</b> ${PANTRY_DATA.contact.email}<br>
        <b>Phone:</b> ${PANTRY_DATA.contact.phone}<br>
        <b>Website:</b> ${PANTRY_DATA.contact.website}<br>
        <b>Instagram:</b> ${PANTRY_DATA.contact.social}`;
    },

    employment: () => {
        return `💼 <b>${PANTRY_DATA.employment.title}</b><br><br>
        <b>Hours:</b> ${PANTRY_DATA.employment.hours}<br><br>
        <b>Pay:</b> ${PANTRY_DATA.employment.pay}<br>
        <b>Benefits:</b> ${PANTRY_DATA.employment.benefits}<br><br>
        <b>Responsibilities:</b> ${PANTRY_DATA.employment.responsibilities}<br><br>
        <b>Prerequisites:</b> ${PANTRY_DATA.employment.prerequisites}<br><br>
        <b>How to Apply:</b> ${PANTRY_DATA.employment.how_to_apply}`;
    },

    specialItems: () => {
        return `⭐ <b>Special Items (Limited)</b><br><br>
        ⚠️ <b>${PANTRY_DATA.special_items.restriction}</b><br><br>
        <b>Available items:</b><br>
        • ${PANTRY_DATA.special_items.items.join('<br>• ')}<br><br>
        <i>📌 ${PANTRY_DATA.special_items.note}</i>`;
    }
};

// Simple keyword-based response system
function getResponse(input) {
    const question = input.toLowerCase();

    // Check for greetings
    if (question.match(/^(hi|hello|hey|sup|whats up)/)) {
        return "Hi there! I'm here to help answer questions about the UMD Campus Pantry. What would you like to know? You can ask about hours, location, eligibility, volunteering, donations, and more!";
    }

    // Check for thanks
    if (question.match(/(thank|thanks|thx|appreciate)/)) {
        return "You're welcome! Is there anything else you'd like to know about the Campus Pantry? Remember, the pantry is here to help - no questions asked! 🐢";
    }

    // Check for staff asking about non-Monday days
    if (question.match(/(staff|faculty|employee|professor)/) &&
        question.match(/(tuesday|wednesday|thursday|friday|saturday|sunday|today|tomorrow|can i come|can i visit)/)) {
        return `⚠️ <b>Faculty & Staff Hours:</b><br><br>
        Faculty and staff can <b>only visit on Mondays</b>, 10 AM to 5 PM.<br><br>
        You must register in advance at go.umd.edu/CampusPantrySignUps.<br>
        Limited to 2 visits per month. Please sign up one day before your visit.<br><br>
        Students can visit Monday to Friday, 10 AM to 5 PM.`;
    }

    // Special items
    if (question.match(/(special item|limited item|once per week|weekly limit|milk|protein|chicken|halal|oil|peanut butter|juice)/)) {
        return RESPONSES.specialItems();
    }

    // What food is available
    if (question.match(/(what food| what items| is there| what type| can i get)/)) {
        return `🍎 <b>Food Availability:</b><br><br>
        To see what food items are currently available at the pantry, please check our Instagram for daily updates!<br><br>
        📱 <b>Follow us:</b> <a href="${PANTRY_DATA.contact.instagram}" target="_blank">UMD_Pantry</a><br><br>
        <i>Available items vary based on donations and inventory. Visit during open hours to see what's in stock!</i>`;
    }


    // Hours
    if (question.match(/(hour|when|open|close|time|schedule|come in)/)) {
        return RESPONSES.hours();
    }

    // Location
    if (question.match(/(where|location|address|find|building|direction|park)/)) {
        return RESPONSES.location();
    }

    // Employment (check before volunteer to catch "work" keyword)
    if (question.match(/(employment|job|work|work opportunity|hiring|student staff|student position|apply|student employ|employment)/)) {
        return RESPONSES.employment();
    }

    // Volunteer (check before eligibility to catch "can i volunteer")
    if (question.match(/(volunteer|help|service)/)) {
        return RESPONSES.volunteer();
    }

    // Donations (check before "what to bring" to catch "need" keyword)
    if (question.match(/(donate|give|contribute|item|food|want)/)) {
        return RESPONSES.donations();
    }

    // Eligibility
    if (question.match(/(who|eligible|can i|qualify|use|access|allow)/)) {
        return RESPONSES.eligibility();
    }

    // What to bring
    if (question.match(/(bring|need|require|uid|id|bag)/)) {
        return RESPONSES.whatToBring();
    }
    
    // Contact
    if (question.match(/(contact|email|phone|call|reach|website)/)) {
        return RESPONSES.contact();
    }
    
    // Teaching Kitchen
    if (question.match(/(kitchen|cook|class|workshop|learn)/)) {
        return `👩‍🍳 <b>Teaching Kitchen:</b><br><br>
        The Campus Pantry offers ${PANTRY_DATA.services.teaching_kitchen}<br><br>
        Check the website or email ${PANTRY_DATA.contact.email} for upcoming workshops!`;
    }
    
    // Emergency
    if (question.match(/(emergency|urgent|hungry|now|today)/)) {
        return `🚨 <b>Need Help Now?</b><br><br>
        • Visit during pantry hours with your UID<br>
        • For emergency meal swipes, contact the Dean of Students<br>
        • Email ${PANTRY_DATA.contact.email} for urgent situations<br>
        • Call ${PANTRY_DATA.contact.phone} during business hours<br><br>
        Remember: The pantry is here to help, no questions asked!`;
    }
    
    // Default response
    return `I can help you with information about:<br><br>
    • 📅 Hours and schedule<br>
    • 📍 Location and directions<br>
    • 👤 Eligibility and requirements<br>
    • 🎒 What to bring<br>
    • ⭐ Special limited items<br>
    • 💼 Student employment opportunities<br>
    • 🤝 Volunteering opportunities<br>
    • 📦 Donation needs<br>
    • 👩‍🍳 Teaching kitchen programs<br>
    • 📞 Contact information<br><br>
    What would you like to know? For other questions, please contact ${PANTRY_DATA.contact.email}`;
}

// Send message function
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Show typing indicator
    showTyping();
    
    // Simulate processing time then respond
    setTimeout(() => {
        removeTyping();
        const response = getResponse(message);
        addMessage(response, 'bot');
    }, 800);
}

// Quick ask function for buttons
function quickAsk(question) {
    document.getElementById('userInput').value = question;
    sendMessage();
}

// Show all donations function
function showAllDonations() {
    // Show typing indicator
    showTyping();

    // Simulate processing time then show full list
    setTimeout(() => {
        removeTyping();
        const response = RESPONSES.donations(true);
        addMessage(response, 'bot');
    }, 500);
}

// Add message to chat
function addMessage(content, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = content;
    
    messageDiv.appendChild(messageContent);
    chatBox.appendChild(messageDiv);
    
    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Show typing indicator
function showTyping() {
    const chatBox = document.getElementById('chatBox');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    
    const typingContent = document.createElement('div');
    typingContent.className = 'message-content';
    typingContent.innerHTML = '<span class="typing">Bot is typing</span>';
    
    typingDiv.appendChild(typingContent);
    chatBox.appendChild(typingDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Remove typing indicator
function removeTyping() {
    const typing = document.getElementById('typing-indicator');
    if (typing) typing.remove();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    // Focus on input
    document.getElementById('userInput').focus();
});