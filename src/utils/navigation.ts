// Navegación sencilla sin librería: cambia la URL y avisa a quien escuche "popstate"
export function navigate(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
