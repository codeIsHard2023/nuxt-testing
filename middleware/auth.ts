export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    navigateTo(to.fullPath);
  } else {
    return navigateTo("/login");
  }
});
