export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    navigateTo(to.fullPath);
    console.log(to.fullPath);
  } else {
    console.log(to);
    return navigateTo("/login");
  }
});
