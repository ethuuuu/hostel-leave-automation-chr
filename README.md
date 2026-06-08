# hostel-leave-automation-chr
Bangalore Mallus email sending to warden every weekend.


# Hostel Leave Letter Automation

An automated, cloud-based workflow using **Google Apps Script** that schedules and sends a weekly hostel leave request email to the warden. 

The script triggers every **Wednesday**, automatically calculates the calendar dates for the upcoming **Saturday to Sunday** weekend, formats a professional request, and dispatches it directly from your student Gmail account.

## Features
- **Dynamic Date Tracking:** Automatically calculates the upcoming weekend's calendar dates so you never have to hardcode dates manually.
- **Zero Uptime Required:** Runs fully on Google's cloud servers—no need to keep your laptop powered on or connected to the internet.
- **Official Delivery:** Connects natively with your university Gmail workspace alias.

---

## Setup Instructions

### Method 1: Google Apps Script Web Editor (Quickest)

1. Go to [script.google.com](https://script.google.com/) and sign in with your university account.
2. Click **New Project** and rename it to `Hostel-Leave-Automation`.
3. Replace the contents of `Code.gs` with the code provided in the `leave_letter.js` file of this repository.
4. Update the configuration variables at the top of the script with your information:
```javascript
   const wardenEmail = "warden@university.edu";
   const roomNumber = "123-B";
   const registerNumber = "2026ECE001";

```
5. Click Save (Disk Icon).

Configuring the Trigger
To make the script run on autopilot:

Click the Triggers icon (Clock Symbol) on the left sidebar.
Click + Add Trigger in the bottom right corner.
Apply the following settings:
Choose which function to run: sendWeeklyLeaveLetter
Select event source: Time-driven
Select type of time-based trigger: Week timer
Select day of week: Every Wednesday
Select time of day: Choose a preferred morning window (e.g., 7 AM to 8 AM).
Click Save and authorize permissions when prompted by Google.
