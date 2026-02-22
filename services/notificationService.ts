export const notificationService = {
  requestPermission: async () => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
      return false;
    }
    const permission = await Notification.requestPermission();
    return permission === "granted";
  },

  showNotification: (title: string, body: string) => {
    if (Notification.permission === "granted") {
      try {
        new Notification(title, {
          body,
          icon: "/pwa-192x192.png", // Standard PWA icon path
          badge: "/pwa-192x192.png",
          vibrate: [200, 100, 200],
        });
      } catch (e) {
        console.error("Notification error:", e);
      }
    }
  },

  // Check for daily study reminders
  checkDailyReminders: () => {
    const lastStudy = localStorage.getItem("7k-last-study-time");
    const now = new Date();

    // If no study today (and it's after 6 PM), remind
    if (!lastStudy || new Date(lastStudy).getDate() !== now.getDate()) {
        if (now.getHours() >= 18) {
            notificationService.showNotification(
                "Evening Revision 🌙",
                "You haven't studied today! Quick 15 min session?"
            );
        }
    }
  },

  // Schedule a reminder for SRS reviews
  scheduleSRSReminder: (dueCount: number) => {
    if (dueCount > 0) {
        setTimeout(() => {
            notificationService.showNotification(
                "Brain Gains 🧠",
                `You have ${dueCount} flashcards due for review!`
            );
        }, 5000); // 5 seconds delay for demo effect upon load
    }
  }
};
