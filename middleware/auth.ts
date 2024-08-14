export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;
  if (isLoggedIn) {
    navigateTo(to.fullPath);
  } else {
    return navigateTo("/login");
  }
});
