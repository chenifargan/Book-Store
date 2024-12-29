export function getImageUrl(name) {
  return new URL(`../assets/books/${name}`, import.meta.url);
}
export function getNewsUrl(name) {
  return new URL(`../assets/news/${name}`, import.meta.url);
}
