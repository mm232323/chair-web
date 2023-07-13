export let show = (p) => {
  return p.style.cssText = 'opacity:100%;filter:blur(0);transition-duration:.5s;'
}
export let hide = (p) => {
  return p.style.cssText = 'opacity:0%;filter:blur(8px);transition-duration:.5s;'
}
export let write = (p) => {
  return p.style.cssText = 'opacity:100%;filter:blur(0);transition-duration:.5s;transform:translateY(0)'
}
export let erase = (p) => {
  return (p.style.cssText =
    "opacity:0%;filter:blur(8px);transition-duration:.3s;transform:translateY(20px)");
};
export let type = (p) => {
  return (p.style.cssText =
    "opacity:40%;filter:blur(0);transition-duration:.5s;transform:translateY(0)");
};