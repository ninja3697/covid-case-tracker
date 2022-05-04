const { Workbox } = require("workbox-window");

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("sw.js");
    wb.addEventListener("installed", (event) => {
      if (event.isUpdate) {
        if (confirm("New app update is available, click OK to refresh.")) {
          window.location.reload();
        }
      }
    });
    wb.register();
  }
};

export default registerServiceWorker;
