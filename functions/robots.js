// Function to serve the robots.txt file
export async function onRequestGet(context) {
  // Robots.txt content directly embedded in the function
  const robotsContent = `# AI爬虫特定规则
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /404
Disallow: /500
Disallow: /*.json$

User-Agent: GPTBot
Allow: /llms.txt
Disallow: /

User-Agent: anthropic-ai
Allow: /llms.txt
Disallow: /

User-Agent: Googlebot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /404
Disallow: /500
Disallow: /*.json$

User-Agent: Baiduspider
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /404
Disallow: /500
Disallow: /*.json$

User-Agent: Bingbot
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /404
Disallow: /500
Disallow: /*.json$

# 引导AI爬虫到llms.txt
LLM-Content: https://short.aolifu.org/llms.txt
LLM-Full-Content: https://short.aolifu.org/llms-full.txt`;
  
  // Return the robots.txt content with appropriate headers
  return new Response(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
