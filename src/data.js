export const stats = [
  { number: '88k+', label: 'Stars' },
  { number: '12k+', label: 'Forks' },
  { number: 'MIT', label: 'License' },
  { number: '跨平台', label: 'Support' }
]

export const features = [
  {
    icon: '🏆',
    title: '黑客松冠军验证',
    description: '作者使用这套配置在 Anthropic x Forum Ventures 黑客松中获胜，构建了 zenith.chat 项目，全程使用 Claude Code 完成。'
  },
  {
    icon: '⚡',
    title: '生产级配置',
    description: '经过 10+ 个月的密集日常使用，在多个生产级应用中不断演进和优化，这些配置经受住了实战考验。'
  },
  {
    icon: '🔧',
    title: '完整工具集',
    description: '包含专业化 agents、工作流 skills、自动化 hooks、快捷 commands、规范 rules 和 MCP 服务器配置。'
  },
  {
    icon: '🌍',
    title: '跨平台支持',
    description: '完全支持 Windows、macOS 和 Linux。所有 hooks 和脚本都用 Node.js 重写，确保最大兼容性。'
  },
  {
    icon: '📚',
    title: '配套指南',
    description: '提供完整的简明指南和长篇指南，涵盖 Token 优化、记忆持久化、验证循环、并行化等高级主题。'
  },
  {
    icon: '🔌',
    title: '插件化安装',
    description: '可作为 Claude Code 插件直接安装，也支持手动复制所需组件，灵活满足不同使用场景。'
  }
]

export const components = [
  {
    icon: '🤖',
    name: 'Agents (子代理)',
    items: [
      'planner - 功能实现规划',
      'architect - 系统设计决策',
      'tdd-guide - 测试驱动开发',
      'code-reviewer - 质量安全审查',
      'security-reviewer - 漏洞分析',
      'build-error-resolver - 构建错误修复',
      'e2e-runner - Playwright E2E 测试',
      'refactor-cleaner - 死代码清理',
      'doc-updater - 文档同步'
    ]
  },
  {
    icon: '📝',
    name: 'Skills (技能)',
    items: [
      'coding-standards - 语言最佳实践',
      'backend-patterns - API/数据库/缓存模式',
      'frontend-patterns - React/Next.js 模式',
      'continuous-learning - 自动提取会话模式',
      'strategic-compact - 手动压缩建议',
      'tdd-workflow - TDD 方法论',
      'security-review - 安全检查清单',
      'eval-harness - 验证循环评估',
      'verification-loop - 持续验证'
    ]
  },
  {
    icon: '⚡',
    name: 'Commands (命令)',
    items: [
      '/tdd - 测试驱动开发',
      '/plan - 实现规划',
      '/e2e - E2E 测试生成',
      '/code-review - 质量审查',
      '/build-fix - 修复构建错误',
      '/refactor-clean - 死代码移除',
      '/learn - 提取会话模式',
      '/checkpoint - 保存验证状态',
      '/verify - 运行验证循环',
      '/setup-pm - 配置包管理器'
    ]
  },
  {
    icon: '🔗',
    name: 'Hooks (钩子)',
    items: [
      'PreToolUse - 工具使用前触发',
      'PostToolUse - 工具使用后触发',
      'SessionStart - 会话开始时加载上下文',
      'SessionEnd - 会话结束时保存状态',
      'PreCompact - 压缩前保存状态',
      'Stop - 响应结束后检查'
    ]
  },
  {
    icon: '📋',
    name: 'Rules (规则)',
    items: [
      'security - 强制安全检查',
      'coding-style - 不可变性/文件组织',
      'testing - TDD/80%覆盖要求',
      'git-workflow - 提交格式/PR流程',
      'agents - 何时委托给子代理',
      'performance - 模型选择/上下文管理'
    ]
  },
  {
    icon: '🔌',
    name: 'MCP Configs (服务器)',
    items: [
      'GitHub - PR/Issues/Repos 操作',
      'Supabase - 数据库操作',
      'Vercel - 部署和项目',
      'Railway - 部署服务',
      'Cloudflare - Workers/Docs/Observability',
      'Firecrawl - 网页抓取',
      'Memory - 跨会话持久记忆',
      'Sequential-thinking - 链式思维推理'
    ]
  }
]

export const hooks = [
  {
    name: '阻止 dev server 在 tmux 外运行',
    description: '当检测到 npm run dev 等开发服务器命令在 tmux 外运行时自动阻止，确保你可以访问日志。'
  },
  {
    name: 'TypeScript 自动类型检查',
    description: '编辑 .ts/.tsx 文件后自动运行 tsc 类型检查，实时发现类型错误。'
  },
  {
    name: 'Prettier 自动格式化',
    description: '编辑 JS/TS 文件后自动使用 Prettier 格式化，保持代码风格一致。'
  },
  {
    name: 'console.log 警告',
    description: '检测到 console.log 语句时发出警告，提醒在提交前移除调试代码。'
  },
  {
    name: '会话状态持久化',
    description: '会话开始时加载之前的上下文，结束时保存当前状态，实现跨会话记忆持久化。'
  },
  {
    name: 'PR 创建后自动提示',
    description: '创建 PR 后自动输出 PR URL 和 review 命令，方便快速查看和审核。'
  }
]

export const installTabs = [
  {
    id: 'plugin',
    name: '插件安装 (推荐)',
    lang: 'Claude Code',
    code: `# 添加仓库作为 marketplace
/plugin marketplace add affaan-m/everything-claude-code

# 安装插件
/plugin install everything-claude-code@everything-claude-code`,
    note: '这是最简单的方式，安装后即可获得所有 commands、agents、skills 和 hooks 的访问权限。'
  },
  {
    id: 'manual',
    name: '手动安装',
    lang: 'Bash',
    code: `# 克隆仓库
git clone https://github.com/affaan-m/everything-claude-code.git

# 复制 agents 到 Claude 配置
cp everything-claude-code/agents/*.md ~/.claude/agents/

# 复制 rules
cp everything-claude-code/rules/*.md ~/.claude/rules/

# 复制 commands
cp everything-claude-code/commands/*.md ~/.claude/commands/

# 复制 skills
cp -r everything-claude-code/skills/* ~/.claude/skills/`,
    note: '如果你想要更精细的控制，可以手动选择复制所需的组件。'
  },
  {
    id: 'settings',
    name: '配置文件',
    lang: '~/.claude/settings.json',
    code: `{
  "extraKnownMarketplaces": {
    "everything-claude-code": {
      "source": {
        "source": "github",
        "repo": "affaan-m/everything-claude-code"
      }
    }
  },
  "enabledPlugins": {
    "everything-claude-code@everything-claude-code": true
  }
}`,
    note: '直接将配置添加到 settings.json 文件中启用插件。'
  }
]

export const tips = [
  {
    icon: '⚠️',
    title: '上下文窗口管理',
    content: '不要同时启用所有 MCPs!你的 200k 上下文窗口可能会因为启用太多工具而缩减到 70k。建议配置 20-30 个 MCPs，但每个项目只启用 10 个以内。'
  },
  {
    icon: '🎯',
    title: '个性化定制',
    content: '这些配置是为作者的工作流优化的。建议从你认为有用的部分开始，根据你的技术栈进行修改，移除不需要的内容，添加你自己的模式。'
  },
  {
    icon: '📖',
    title: '阅读指南',
    content: '仓库只是原始代码。完整的使用说明在配套指南中。先阅读简明指南了解基础，再阅读长篇指南学习高级主题如 Token 优化和并行化。'
  },
  {
    icon: '🔄',
    title: '包管理器检测',
    content: '插件会自动检测你的首选包管理器 (npm/pnpm/yarn/bun)。可以通过环境变量、项目配置或全局配置来设置首选项。'
  }
]

export const learningTopics = [
  {
    icon: '🎛️',
    title: 'Token 优化',
    description: '模型选择策略、系统提示精简、后台进程管理，最大化利用上下文窗口。'
  },
  {
    icon: '💾',
    title: '记忆持久化',
    description: '使用 Hooks 自动跨会话保存和加载上下文，实现持久化记忆。'
  },
  {
    icon: '📈',
    title: '持续学习',
    description: '自动从会话中提取可重用的模式，不断积累和优化技能库。'
  },
  {
    icon: '✅',
    title: '验证循环',
    description: '检查点 vs 持续评估、评分器类型、pass@k 指标，确保代码质量。'
  },
  {
    icon: '🔀',
    title: '并行化',
    description: 'Git worktrees、级联方法、何时扩展实例数量，提高开发效率。'
  },
  {
    icon: '🎭',
    title: '子代理编排',
    description: '上下文问题解决、迭代检索模式，高效利用专业化子代理。'
  }
]

export const author = {
  avatar: '👨‍💻',
  name: '南宫乘风',
  title: 'Anthropic x Forum Ventures 黑客松冠军',
  bio: '自 Claude Code 实验性发布以来一直在使用。在 2025 年 9 月与 @DRodriguezFX 合作，完全使用 Claude Code 构建了 zenith.chat 并获得黑客松冠军。这些配置在多个生产级应用中经受住了实战考验。',
  links: [
    { icon: 'x-twitter', handle: '@nangongchengfeng', url: '#' },
    { icon: 'globe', label: 'zenith.chat', url: 'https://zenith.chat/' },
    { icon: 'github', label: 'GitHub', url: 'https://github.com/affaan-m/everything-claude-code' }
  ]
}
