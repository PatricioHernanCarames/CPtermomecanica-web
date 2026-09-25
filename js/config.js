const API_BASE_URL = "https://api.cptermomecanica.com";

window.CPTERMOMECANICA_CONFIG = Object.freeze({
  API_BASE_URL,
  PUBLIC_HEALTH_PATH: "/health",
  FUTURE_ROUTES: Object.freeze({
    clientes: "/clientes",
    login: "/login",
    dashboard: "/dashboard"
  })
});
