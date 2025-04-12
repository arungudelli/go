if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(function (err) {
        console.log('ServiceWorker failed', err);
    });
    
}
//popup Implementation
function showPopup() {
    const popupData = JSON.parse(localStorage.getItem("golangPopupShown"));
  
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
  
    if (!popupData || now - popupData.timestamp > oneDay) {
      document.getElementById("subscriptionPopup").style.display = "block";
      // Save timestamp
      localStorage.setItem("golangPopupShown", JSON.stringify({ timestamp: now }));
    }
  }
  
  function closePopup() {
    document.getElementById("subscriptionPopup").style.display = "none";
  }
  
  document.addEventListener("mouseleave", function (e) {
    if (e.clientY < 0) {
      showPopup();
    }
  });
