(function () {
  const config = window.CPTERMOMECANICA_CONFIG || {};
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const clientAccessButtons = document.querySelectorAll("[data-client-access]");
  const portalNotice = document.querySelector("[data-portal-notice]");
  const apiStatus = document.querySelector("[data-api-status]");
  const year = document.querySelector("[data-current-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navMenu.classList.toggle("is-open", !isOpen);
    });

    navMenu.addEventListener("click", function (event) {
      if (event.target instanceof HTMLAnchorElement) {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      }
    });
  }

  clientAccessButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      if (portalNotice) {
        portalNotice.hidden = false;
        portalNotice.focus();
      }
    });
  });

  function setApiStatus(state, label) {
    if (!apiStatus) return;

    apiStatus.textContent = label;
    apiStatus.dataset.state = state;
  }

  async function checkApiHealth() {
    if (!config.API_BASE_URL || !config.PUBLIC_HEALTH_PATH) return;

    setApiStatus("checking", "Comprobando API publica...");

    try {
      const response = await fetch(config.API_BASE_URL + config.PUBLIC_HEALTH_PATH, {
        method: "GET",
        cache: "no-store"
      });

      if (response.ok) {
        setApiStatus("online", "API publica operativa");
        return;
      }

      setApiStatus("degraded", "API publica sin respuesta OK");
    } catch (error) {
      setApiStatus("offline", "API publica no disponible desde el navegador");
    }
  }

  checkApiHealth();
})();
