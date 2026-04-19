function trimText(value) {
  return value != null && String(value).trim() !== "" ? String(value).trim() : "";
}

function normalizePrefix(prefix) {
  const cleanPrefix = trimText(prefix).replace(/\/+$/, "");
  if (!cleanPrefix || cleanPrefix === ".") {
    return "";
  }
  return cleanPrefix;
}

function joinPath(prefix, path) {
  const normalizedPrefix = normalizePrefix(prefix);
  const normalizedPath = String(path || "").replace(/^\/+/, "");
  return normalizedPrefix ? `${normalizedPrefix}/${normalizedPath}` : normalizedPath;
}

function getFallbackFooterMarkup() {
  return `
<footer class="footer">
  <div class="container">
    <div class="footer-row">
      <div class="social-links-row footer-social">
        <div class="social-links-row">
          <a href="https://github.com/igavriel"><img data-asset-src="img/social_icons/github.svg" alt="Link to GitHub account" /></a>
          <a href="https://www.linkedin.com/in/igavriel/"><img data-asset-src="img/social_icons/linkedin.svg" alt="Link to linkedin profile" /></a>
          <a href="https://igavriel.itch.io/"><img data-asset-src="img/social_icons/itch-io.svg" alt="Link to itch.io profile" /></a>
          <a href="mailto:igavriel@gmail.com"><img data-asset-src="img/social_icons/gmail.svg" alt="mail" /></a>
        </div>
        <div class="footer-copyright">
          <p>&copy; Copyright I.Gavriel 2026</p>
        </div>
      </div>
    </div>
  </div>
</footer>
`;
}

function resolveAssetPrefix(mount) {
  const explicitPrefix = trimText(mount.dataset.assetPrefix);
  if (explicitPrefix) {
    return explicitPrefix;
  }
  return window.location.pathname.includes("/projects/") ? ".." : ".";
}

function applyAssetPaths(mount, assetPrefix) {
  mount.querySelectorAll("[data-asset-src]").forEach((img) => {
    const assetSrc = trimText(img.getAttribute("data-asset-src"));
    if (!assetSrc) {
      return;
    }
    img.setAttribute("src", joinPath(assetPrefix, assetSrc));
    img.removeAttribute("data-asset-src");
  });
}

async function loadSharedFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) {
    return;
  }

  const assetPrefix = resolveAssetPrefix(mount);
  mount.innerHTML = getFallbackFooterMarkup();
  applyAssetPaths(mount, assetPrefix);
}

window.loadSharedFooter = loadSharedFooter;
