function sendWeeklyLeaveLetter() {
  // --- CONFIGURATION ---
  const wardenEmail = "warden_email@example.com"; // Replace with warden's email
  const roomNumber = "YOUR_ROOM_NUMBER";          // Replace with your room number
  const registerNumber = "YOUR_REGISTER_NUMBER";  // Replace with your roll/reg number
  const parentName = "YOUR_PARENT_NAME";          // Replace with your parent's name
  const parentContact = "YOUR_PARENT_CONTACT";    // Replace with your parent's phone number
  // ---------------------

  // Calculate dates for the upcoming weekend (assuming script runs on Wednesday)
  const today = new Date();
  
  const saturday = new Date(today);
  saturday.setDate(today.getDate() + 3); // Saturday is 3 days after Wednesday
  
  const sunday = new Date(today);
  sunday.setDate(today.getDate() + 4);   // Sunday is 4 days after Wednesday
  
  // Format dates (e.g., "13 Jun")
  const options = { day: 'numeric', month: 'short' };
  const satDateStr = saturday.toLocaleDateString('en-IN', options);
  const sunDateStr = sunday.toLocaleDateString('en-IN', options);
  
  // Subject line from Parent perspective
  const subject = `Request for Weekend Leave Permission for Ethan Joseph (${satDateStr} - ${sunDateStr})`; 
  
  // Email Body from Parent perspective
  const emailBody = 
    "Respected Sir/Madam,\n\n" +
    `I am writing to formally request weekend leave permission for my ward, Ethan Joseph. I request you to kindly permit him to leave the hostel for the upcoming weekend. He plans to check out this Saturday evening (${satDateStr}) and will return to the hostel the next day, Sunday evening (${sunDateStr}).\n\n` +
    "Kindly grant him permission for the same.\n\n" +
    "Thank you.\n\n" +
    "Sincerely,\n" +
    `${parentName}\n` +
    "Parent of Ethan Joseph\n" +
    `Student Room No: ${roomNumber}\n` +
    `Student Register No: ${registerNumber}\n` +
    `Parent Contact No: ${parentContact}`;

  // Sends the email via Gmail
  MailApp.sendEmail(wardenEmail, subject, emailBody);
}
