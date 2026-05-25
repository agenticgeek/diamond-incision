/** Cloudflare Stream HLS manifests — promotional, doctor, product, client. */
export const REEL_STREAM = {
  /** Hero slot — manifest / showreel principal */
  premium:
    "https://customer-33e06r8tfld09gay.cloudflarestream.com/2904af56081d7975589359af4783ceaa/manifest/video.m3u8",
  heroPrimary:
    "https://customer-33e06r8tfld09gay.cloudflarestream.com/1b446e056f27ccdf31b6ff0c2af9b28d/manifest/video.m3u8",
  promotional1:
    "https://customer-33e06r8tfld09gay.cloudflarestream.com/ba1220ee9cc5eb00d778d10ce967b718/manifest/video.m3u8",
  promotional2:
    "https://customer-33e06r8tfld09gay.cloudflarestream.com/51dc1bdf710b78f70ff09ad56604820b/manifest/video.m3u8",
  promotional3:
    "https://customer-33e06r8tfld09gay.cloudflarestream.com/b624d20da76e699627ecd91f67ff17c9/manifest/video.m3u8",
  doctor:
    "https://customer-33e06r8tfld09gay.cloudflarestream.com/a21f2d325756a230edad11cbd9e23084/manifest/video.m3u8",
  productShowcase:
    "https://customer-33e06r8tfld09gay.cloudflarestream.com/8e481893a1e9a9ecaf901becbdc13d4c/manifest/video.m3u8",
  clientTalking:
    "https://customer-33e06r8tfld09gay.cloudflarestream.com/7c78b7d2bdf80282961b59934f614de7/manifest/video.m3u8",
} as const;

/** Static art in `public/assets/` (JPEG). */
export const ASSET_IMAGES = {
  photo21: "/assets/2.1.jpg",
  photo22: "/assets/2.2.jpg",
  photo41: "/assets/4.1.jpg",
  photo43: "/assets/4.3.jpg",
  photo9: "/assets/9.jpg",
  dr1: "/assets/dr1.jpeg",
  dr2: "/assets/dr2.jpeg",
} as const;
