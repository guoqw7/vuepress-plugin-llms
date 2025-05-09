# vuepress-plugin-llms

📜 VuePress 插件，用于生成对大语言模型(LLMs)友好的文档。

📜 VuePress plugin for generating documentation friendly to Large Language Models (LLMs).

## 简介 | Introduction

大语言模型（如GPT系列）在处理Markdown格式文档时更为高效，相比HTML格式可以节省约75%的token使用量。本插件会在VuePress构建过程中自动生成两个对LLMs友好的文档文件：

Large Language Models (such as the GPT series) process Markdown format more efficiently, saving approximately 75% of token usage compared to HTML format. This plugin automatically generates two LLM-friendly documentation files during the VuePress build process:

- `llms.txt` - 包含所有文档页面的链接和简短描述的目录
- `llms-full.txt` - 包含所有文档内容的完整文件

- `llms.txt` - A table of contents with links to all documentation pages and brief descriptions
- `llms-full.txt` - A complete file containing all documentation content

## 项目结构 | Project Structure

```
vuepress-plugin-llms/
├── src/                       # 源代码目录 | Source code directory
│   ├── index.ts               # 插件主入口 | Plugin main entry
│   ├── types.ts               # 类型定义 | Type definitions
│   ├── constants.ts           # 常量定义 | Constants
│   └── helpers/               # 辅助函数 | Helper functions
│       ├── index.ts           # 辅助函数入口 | Helper functions entry
│       ├── logger.ts          # 日志工具 | Logging utilities
│       └── utils.ts           # 通用工具函数 | General utility functions
├── examples/                  # 使用示例 | Usage examples
│   └── basic-usage.js         # 基本用法示例 | Basic usage example
├── package.json               # 项目元数据和依赖 | Project metadata and dependencies
├── tsconfig.json              # TypeScript配置 | TypeScript configuration
├── tsconfig.cjs.json          # CommonJS格式配置 | CommonJS format configuration
├── .gitignore                 # Git忽略文件 | Git ignore file
├── LICENSE                    # MIT许可证 | MIT license
└── README.md                  # 项目文档 | Project documentation
```

## 安装 | Installation

```bash
# npm
npm install -D vuepress-plugin-llms

# yarn
yarn add -D vuepress-plugin-llms

# pnpm
pnpm add -D vuepress-plugin-llms
```

## 使用方法 | Usage

在VuePress配置文件中添加插件：

Add the plugin to your VuePress configuration file:

```js
// .vuepress/config.js 或 .vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import llmstxt from 'vuepress-plugin-llms'

export default defineUserConfig({
  // 其他配置... | Other configurations...
  plugins: [
    llmstxt({
      // 插件配置选项 | Plugin configuration options
    }),
  ],
})
```

## 配置选项 | Configuration Options

### 基本配置 | Basic Configuration

```js
llmstxt({
  // 主标题(默认从站点配置或index.md中提取) | Main title (defaults to site config or extracted from index.md)
  title: 'My Documentation',
  
  // 描述(默认从站点配置或index.md中提取) | Description (defaults to site config or extracted from index.md)
  description: 'Documentation for my awesome project',
  
  // 详细说明(默认从index.md中提取或自动生成) | Details (defaults to extracted from index.md or auto-generated)
  details: 'This file contains links to all documentation sections.',
  
  // 是否生成llms.txt(默认为true) | Whether to generate llms.txt (defaults to true)
  generateLLMsTxt: true,
  
  // 是否生成llms-full.txt(默认为true) | Whether to generate llms-full.txt (defaults to true)
  generateLLMsFullTxt: true,
  
  // 是否从Markdown中删除HTML标签(默认为true) | Whether to strip HTML tags from Markdown (defaults to true)
  stripHTML: true,
  
  // 工作目录(默认为VuePress源目录) | Working directory (defaults to VuePress source directory)
  workDir: 'docs',
  
  // 忽略的文件模式(使用glob语法) | File patterns to ignore (using glob syntax)
  ignoreFiles: ['about/team/*', 'sponsor/*'],

  // 自定义域名(可选，用于生成的链接) | Custom domain (optional, used for generated links)
  domain: 'https://example.com',
})
```

### 自定义模板 | Custom Template

你可以自定义`llms.txt`文件的模板：

You can customize the template for the `llms.txt` file:

```js
llmstxt({
  // 自定义llms.txt的模板 | Custom template for llms.txt
  customLLMsTxtTemplate: `\
# {title}

> {description}

{details}

## 文档目录 | Table of Contents

{toc}

## 自定义部分 | Custom Section

{customSection}
`,
  
  // 自定义模板变量 | Custom template variables
  customTemplateVariables: {
    customSection: '这是一个自定义部分的内容 | This is content for a custom section',
  },
})
```

## 输出示例 | Output Examples

### llms.txt

```markdown
# 项目文档 | Project Documentation

> 一个优秀的项目文档 | An excellent project documentation

这个文档包含了项目的所有重要信息。 | This documentation contains all important information about the project.

## 目录 | Table of Contents

- [快速开始 | Getting Started](/guide/getting-started.md)
- [配置 | Configuration](/guide/configuration.md)
- [高级用法 | Advanced Usage](/guide/advanced.md)
```

### llms-full.txt

包含所有文档内容的完整合并文件，每个页面都包含原始的frontmatter元数据。

A complete merged file containing all documentation content, with each page including the original frontmatter metadata.

## 贡献 | Contributing

欢迎提交问题和PR来改进这个插件！

Issues and PRs are welcome to improve this plugin!

## 许可证 | License

MIT 