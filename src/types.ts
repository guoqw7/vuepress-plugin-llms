import type { GrayMatterFile, Input } from 'gray-matter'
import type { App } from '@vuepress/core'

/** Template variables used in the llms.txt file template. | 在 llms.txt 文件模板中使用的模板变量。 */
interface TemplateVariables {
  /** 
   * The title extracted from the frontmatter or the first h1 heading in the main document (`index.md`). | 从 frontmatter 或主文档 (`index.md`) 中的第一个 h1 标题提取的标题。
   * @example 'Awesome tool'
   */
  title?: string

  /** 
   * The description. | 描述信息。
   * @example 'Blazing fast build tool'
   */
  description?: string

  /** 
   * The details. | 详细信息。
   * @example 'A multi-user version of the notebook designed for companies, classrooms and research labs'
   */
  details?: string

  /** 
   * An automatically generated **T**able **O**f **C**ontents. | 自动生成的**目录**。
   * @example
   * ```markdown
   * - [Title](/foo.md): Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   * - [Title 2](/bar/baz.md): Cras vel nibh id ipsum pharetra efficitur.
   * ```
   */
  toc?: string | boolean
}

/** Extension of TemplateVariables that allows for custom variables. | TemplateVariables 的扩展，允许自定义变量。 */
export interface CustomTemplateVariables extends TemplateVariables {
  /** Any custom variable | 任何自定义变量 */
  [key: string]: string | boolean | undefined
}

/** Plugin settings for llmstxt plugin. | llmstxt 插件的设置。 */
export interface LlmstxtSettings extends TemplateVariables {
  /** 
   * Working directory for collecting markdown files | 收集 Markdown 文件的工作目录
   * @default App source directory
   */
  workDir?: string

  /** 
   * Site domain used when generating absolute links | 生成绝对链接时使用的网站域名
   * @example "https://example.com"
   */
  domain?: string

  /** 
   * Generate the basic llms.txt file (with links to content) | 生成基本的 llms.txt 文件（包含内容链接）
   * @default true
   */
  generateLLMsTxt?: boolean

  /** 
   * Generate the llms-full.txt file (with full content embedded) | 生成 llms-full.txt 文件（嵌入完整内容）
   * @default true
   */
  generateLLMsFullTxt?: boolean

  /** 
   * Strip HTML tags from markdown | 从 Markdown 中删除 HTML 标签
   * @default true
   */
  stripHTML?: boolean

  /** Site title to use in the generated files (if different from VuePress site title) | 在生成的文件中使用的网站标题（如果与 VuePress 网站标题不同） */
  title?: string

  /** Site description to use in the generated files (if different from VuePress site description) | 在生成的文件中使用的网站描述（如果与 VuePress 网站描述不同） */
  description?: string

  /** Additional details to include in the template | 要包含在模板中的其他详细信息 */
  details?: string

  /** 
   * Whether to include a table of contents in the llms.txt file | 是否在 llms.txt 文件中包含目录
   * @default true
   */
  toc?: boolean | string

  /** Custom template for the llms.txt file. If provided, overrides the default template. | llms.txt 文件的自定义模板。如果提供，将覆盖默认模板。 */
  customLLMsTxtTemplate?: string

  /** Custom variables for template expansion | 用于模板扩展的自定义变量 */
  customTemplateVariables?: CustomTemplateVariables

  /** 
   * Array of glob patterns for files to ignore | 要忽略的文件的 glob 模式数组
   */
  ignoreFiles?: string[]
}

/** A file prepared for processing including its path, title, and frontmatter data | 准备处理的文件，包括其路径、标题和 frontmatter 数据 */
export interface PreparedFile {
  /** The file path | 文件路径 */
  path: string

  /** The page title derived from frontmatter or content | 从 frontmatter 或内容派生的页面标题 */
  title: string

  /** The gray-matter processed file | 由 gray-matter 处理的文件 */
  file: GrayMatterFile<string>
}

/** Represents the link extension options for generated links. | 表示生成链接的链接扩展选项。 */
export type LinksExtension = string | '.md' | '.html' 