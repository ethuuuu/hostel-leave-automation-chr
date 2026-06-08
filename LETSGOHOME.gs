function sendWeeklyLeaveLetter() {
  // --- CONFIGURATION ---
  const wardenEmail = "devadanhall@christuniversity.com"; // Replace with warden's email
  //const wardenEmail = "ethanjoseph5500@gmail.com"; //test email addr
  const roomNumber = "209A";          // Replace with your room number
  const registerNumber = "2660908";  // Replace with your roll/reg number
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
  
  // Dynamic Subject line
  const subject = `Request for Weekend Leave Permission (${satDateStr} - ${sunDateStr}) - Ethan Joseph`; 
  
  // Dynamic Email Body
  const emailBody = 
    "Respected Sir/Madam,\n\n" +
    `I am writing to formally request permission to leave the hostel for the upcoming weekend. I plan to check out this Saturday evening (${satDateStr}) and will return to the hostel next day, Sunday evening (${sunDateStr}).\n\n` +
    "Kindly grant me permission for the same.\n\n" +
    "Thank you.\n\n" +
    "Sincerely,\n" +
    "Ethan Joseph\n" +
    `Room No: ${roomNumber}\n` +
    `Roll/Register No: ${registerNumber}`;

  // Sends the email via your university Gmail
  MailApp.sendEmail(wardenEmail, subject, emailBody);
}
