export function buildFavicon(name: string) {
  const letter = name.charAt(0).toUpperCase();
  document.title = name;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  const size = 64;
  canvas.width = size;
  canvas.height = size;

  ctx.fillStyle = "#4CAF50";
  ctx.fillRect(0, 0, size, size);
  ctx.font = "50px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(letter, size / 2, size / 2);

  const faviconUrl = canvas.toDataURL("image/png");

  let faviconLink = document.querySelector("link[rel*='icon']");

  if (!faviconLink) {
    faviconLink = document.createElement("link");
    (faviconLink as HTMLLinkElement).rel = "icon";
    document.head.appendChild(faviconLink);
  }

  (faviconLink as HTMLLinkElement).href = faviconUrl;
}