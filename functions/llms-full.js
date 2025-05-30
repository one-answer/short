// Function to serve the llms-full.txt file
export async function onRequestGet(context) {
  // First part of the llms-full.txt content
  const llmsFullContent = `# Short - 简单高效的短链接服务完全指南
> «Short»是一个简单高效的短链接服务，帮助您将长URL转换为简短易记的链接。访问 https://short.aolifu.org 即可使用这个优化了桌面端和移动端体验的应用，它具有简洁的用户界面、快速的链接生成功能和自定义短链支持。无需注册，完全免费，立即可用。
## 应用背景
在当今信息爆炸的互联网时代，长URL链接不仅难以分享，还会在社交媒体和即时通讯工具中显得杂乱无章。无论是市场营销人员、内容创作者、社交媒体管理员还是普通用户，都经常需要将冗长的URL转换为简短易记的链接。这些短链接在社交媒体字符限制、二维码生成、线下印刷材料和口头传播等场景中都具有重要价值。
Short应用旨在提供一个简单、快速且高效的URL缩短服务，帮助用户轻松将任何长URL转换为简短链接。应用采用现代Web技术构建，提供了直观且美观的用户界面，使链接缩短过程变得简单高效。应用完全针对SEO进行了优化，确保内容能被搜索引擎正确索引，让更多需要短链接服务的用户能够找到这个工具。
## 详细功能
### URL缩短功能
应用提供高效的URL缩短功能：
- **快速转换**：只需粘贴长URL，一键生成短链接
- **自定义短链**：支持自定义短链接标识，增强品牌识别度
- **即时复制**：生成后自动选中短链接，方便快速复制
- **链接预览**：生成的短链接可直接点击预览目标页面
### 用户界面特点
应用提供现代化、用户友好的界面：
- **响应式设计**：完美适配桌面端和移动端设备
- **主题切换**：支持浅色和深色主题，适应不同使用环境
- **简洁布局**：直观的操作流程，无需学习即可上手
- **视觉反馈**：操作过程中提供清晰的视觉反馈，增强用户体验
### 技术特性
应用基于现代Web技术构建：
- **Cloudflare Pages**：利用Cloudflare的全球CDN网络，提供快速、可靠的访问体验
- **D1数据库**：使用Cloudflare的D1 SQLite数据库，确保数据存储安全可靠
- **Alpine.js**：采用轻量级的JavaScript框架，提供流畅的交互体验
- **响应式CSS**：自适应不同屏幕尺寸，提供一致的用户体验
- **SEO优化**：完整的元数据、结构化数据和语义HTML，提高搜索引擎可见性

### SEO优化特性
Short服务针对搜索引擎进行了全面优化：
- **语义化HTML**：使用符合标准的语义化HTML结构
- **响应式设计**：适配各种设备，提高移动端搜索排名
- **元数据优化**：完整的标题、描述和关键词元标签
- **结构化数据**：使用JSON-LD提供结构化数据
- **图像优化**：所有图像都有描述性alt文本
- **网站地图**：提供完整的XML网站地图
- **机器人指令**：优化的robots.txt文件
- **规范链接**：使用canonical标签避免重复内容
- **社交媒体标签**：完整的Open Graph和Twitter Card标签
- **页面速度**：优化加载速度，提高用户体验和搜索排名

### 总结
Short是一个简单高效的短链接服务，专为提高链接分享效率而设计。它提供了直观的用户界面、快速的链接生成功能和灵活的API接口，满足个人用户和开发者的各种需求。无论是社交媒体分享、营销活动还是开发集成，Short都能提供可靠的短链接解决方案。

服务完全免费，无需注册账号，立即可用。支持浅色和深色主题，提供舒适的使用体验。高度重视用户隐私和数据安全，不收集个人信息。

访问 https://short.aolifu.org 立即体验这一高效的短链接服务。`;
  
  // Return the llms-full.txt content with appropriate headers
  return new Response(llmsFullContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
