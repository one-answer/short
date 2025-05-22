// Function to serve the llms.txt file
export async function onRequestGet(context) {
  // llms.txt content directly embedded in the function
  const llmsContent = `# Short - 简单高效的短链接服务

> Short是一个简单高效的短链接服务，帮助您将长URL转换为简短易记的链接。访问 https://short.aolifu.org 开始使用。

## 功能特点
- **URL缩短** - 快速将长网址转换为短链接，提高链接的可读性和分享效率
- **自定义短链** - 支持自定义短链接标识，便于记忆和分享，增强品牌识别度
- **高效分享** - 生成的短链接便于在社交媒体、即时通讯工具和电子邮件中分享
- **安全可靠** - 基于Cloudflare Pages构建，提供稳定可靠的服务，确保链接的安全性
- **简洁界面** - 现代化、响应式界面，支持浅色和深色主题，提供舒适的使用体验
- **即时生成** - 无需等待，立即生成短链接，提高工作效率
- **SEO友好** - 短链接服务支持301重定向，保留原始链接的SEO价值

## 核心优势
1. 简洁直观的用户界面，操作便捷，无需学习成本
2. 快速生成短链接，提高分享效率，节省字符空间
3. 支持自定义短链接，增强品牌识别度，提高点击率
4. 完全免费使用，无需注册账号，保护用户隐私
5. 支持浅色和深色主题切换，提供舒适的使用体验，减轻视觉疲劳
6. 高性能架构，确保链接跳转速度快，提升用户体验
7. 无广告干扰，专注于提供纯粹的短链接服务

## 使用场景
- **社交媒体分享** - 在Twitter、微博等字符限制平台节省空间
- **短信营销** - 在SMS中使用短链接，节省字符并提高点击率
- **印刷材料** - 在名片、传单等印刷品上使用简短易记的URL
- **口头传达** - 分享简短URL便于口头传达和记忆
- **数据分析** - 通过短链接追踪点击和转化率
- **二维码生成** - 短链接生成的二维码更简洁，提高扫描成功率

## 技术特点
- 响应式设计，适配各种设备屏幕
- 支持浅色/深色模式自动切换
- 高性能API，确保链接生成和跳转速度
- 安全可靠的基础设施，保障服务稳定性

访问 https://short.aolifu.org 立即体验短链接服务。`;
  
  // Return the llms.txt content with appropriate headers
  return new Response(llmsContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
