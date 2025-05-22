// Function to serve the sitemap.xml file
export async function onRequestGet(context) {
  // Sitemap content directly embedded in the function
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://short.aolifu.org/</loc>
    <lastmod>2025-05-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://short.aolifu.org/asset/img/logo.svg</image:loc>
      <image:title>短链服务 Logo</image:title>
      <image:caption>简单高效的短链接服务</image:caption>
    </image:image>
  </url>
</urlset>`;

  // Return the sitemap content with appropriate headers
  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
