# Chatbot Test Cases - Edge Case Validation

## ✅ Test These Questions to Verify Pattern Matching

### **1. Hours Questions**
- ✓ "What are your hours?"
- ✓ "When are you open?"
- ✓ "What time do you close?"
- ✓ "Schedule?"
- ✓ "opening hours"
- ❌ "How many hours per week?" → Should show EMPLOYMENT, not hours

### **2. Staff-Specific Questions**
- ✓ "Can staff come on Tuesday?" → Should show Monday-only message
- ✓ "I'm faculty, can I visit tomorrow?" → Should show Monday-only message
- ✓ "Professor visiting on Friday?" → Should show Monday-only message
- ✓ "Are staff allowed on Wednesday?" → Should show Monday-only message

### **3. Special Items**
- ✓ "What special items are available?"
- ✓ "Tell me about special items"
- ✓ "milk" → Should show special items list
- ✓ "Can I get chicken?" → Should show special items
- ✓ "halal protein" → Should show special items
- ✓ "weekly limit" → Should show special items
- ❌ Just "milk" alone without context → Might need to test

### **4. Food Availability vs Donations**
- ✓ "What food is available?" → Should show Instagram link
- ✓ "What items are there today?" → Should show Instagram link
- ✓ "What can I get?" → Should show Instagram link
- ❌ "What items are needed?" → Should show DONATIONS, not food availability
- ❌ "What do you need?" → Should show DONATIONS

### **5. Volunteer vs Employment**
- ✓ "How can I volunteer?" → Should show volunteer info
- ✓ "volunteer opportunities" → Should show volunteer info
- ✓ "Are there any jobs?" → Should show EMPLOYMENT
- ✓ "How do I apply to work here?" → Should show EMPLOYMENT
- ✓ "Student employment" → Should show EMPLOYMENT
- ✓ "What's the pay?" → Should show EMPLOYMENT

### **6. Donations vs What to Bring**
- ✓ "What should I donate?" → Should show DONATIONS
- ✓ "donation" → Should show DONATIONS
- ✓ "What do you need?" → Should show DONATIONS
- ✓ "food drive" → Should show DONATIONS
- ❌ "What should I bring?" → Should show WHAT TO BRING, not donations
- ❌ "What do I need?" → Should show WHAT TO BRING

### **7. Eligibility vs Volunteer**
- ✓ "Who can use the pantry?" → Should show ELIGIBILITY
- ✓ "Am I eligible?" → Should show ELIGIBILITY
- ✓ "Can I volunteer?" → Should show VOLUNTEER, not eligibility
- ✓ "Who is allowed?" → Should show ELIGIBILITY

### **8. Contact Information**
- ✓ "How do I contact you?"
- ✓ "email address"
- ✓ "phone number"
- ✓ "Instagram"
- ✓ "website"

### **9. Emergency**
- ✓ "I need food now"
- ✓ "emergency"
- ✓ "I'm hungry right now"
- ✓ "urgent"
- ✓ "ASAP"

### **10. Greetings**
- ✓ "Hi"
- ✓ "Hello"
- ✓ "Hey"
- ✓ "Good morning"
- ✓ "Greetings"

### **11. Thanks**
- ✓ "Thank you"
- ✓ "Thanks"
- ✓ "thx"
- ✓ "appreciate it"
- ✓ "ty"

### **12. Teaching Kitchen**
- ✓ "cooking classes"
- ✓ "teaching kitchen"
- ✓ "workshops"
- ✓ "nutrition classes"

### **13. Location**
- ✓ "Where is the pantry?"
- ✓ "location"
- ✓ "address"
- ✓ "directions"
- ✓ "parking"
- ✓ "map"

---

## 🔴 Known Edge Cases to Watch

### **Ambiguous Queries:**
1. "What items?" → Could be donations OR food availability
2. "What do I need?" → Could be what to bring OR donations needed
3. "Can I come today?" → Should show hours (generic) or staff-specific?
4. "milk" (single word) → Should trigger special items
5. "work" → Could be volunteer OR employment

### **Multi-Topic Questions:**
1. "What are the hours and location?" → Will only show hours (first match)
2. "Can I volunteer or work there?" → Will show volunteer (first match)
3. "What should I bring to donate?" → Could match either

### **Typos & Variations:**
1. "volenteer" → Won't match
2. "donatoin" → Won't match
3. "eligable" → Won't match
4. Consider adding fuzzy matching or "did you mean?"

### **Empty/Invalid Input:**
1. "" (empty) → Already handled
2. "???" → Will show default
3. "asdfasdf" → Will show default
4. Very long input → No length limit currently

---

## 🎯 Test Results

### Before Demo, Test Each Category:
- [ ] All hours questions work correctly
- [ ] Staff restrictions trigger properly
- [ ] Special items show when expected
- [ ] Food availability vs donations separated
- [ ] Volunteer vs employment distinguished
- [ ] Contact info accessible
- [ ] Emergency triggers correctly
- [ ] Location works
- [ ] Teaching kitchen works
- [ ] Default message for unknown queries

### Edge Cases to Demonstrate:
1. "Can staff come on Friday?" → Shows Monday restriction ✓
2. "What special items are available?" → Shows special items list ✓
3. "How do I apply?" → Shows employment info ✓
4. "What food is there today?" → Directs to Instagram ✓
5. "I need food now" → Shows emergency info ✓
