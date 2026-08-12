// ==========================================
// 任晨光 · 项目作品集详细数据
// ==========================================

const PROJECTS = [
  {
    id: 'yolov8',
    title: 'YOLOv8航拍小目标检测算法研究与部署',
    category: '毕业设计 · 计算机视觉',
    year: '2026',
    accent: '#00d68f',
    icon: '🛩',
    tagline: '针对航拍图像小目标检测难题，设计SFFM+BFSM双改进模块，mAP@0.5提升9.3%，完成Jetson边缘部署',
    description: '针对航拍图像视角广、目标尺度小、背景干扰多、检测精度低的行业痛点，完成数据集优化、网络结构改进、模型训练调优、边缘设备部署全流程研发，落地轻量化高精度航拍目标检测方案。设计了SFFM（Spatial Feature Fusion Module，空间特征融合模块）增强小目标特征表达，BFSM（Background Suppression Feature Module，背景抑制特征模块）降低复杂背景干扰，在VisDrone数据集上实现mAP@0.5提升9.3%，参数量减少1.63M。',
    highlights: [
      '设计SFFM空间特征融合模块，通过多尺度特征聚合增强小目标特征表达，mAP@0.5提升6.8%',
      '设计BFSM背景抑制特征模块，利用注意力机制过滤复杂背景噪声，进一步提升2.5%检测精度',
      '模型参数量减少1.63M，计算量降低12%，在保持精度的同时实现轻量化',
      '完成TensorRT FP16量化部署到Jetson Orin NX，推理速度达15-20 FPS实时检测',
      '使用GradCAM可视化分析模型决策区域，验证改进模块的有效性',
      '完整论文撰写，包含文献综述、算法设计、实验对比、部署验证全流程'
    ],
    challenges: '航拍图像中目标像素占比通常小于1%，传统检测器难以有效提取特征；同时复杂背景（建筑、植被、道路）导致大量误检。通过空间特征融合和背景抑制双模块协同，在不增加推理延迟的前提下显著提升小目标检出率。',
    techStack: ['PyTorch', 'YOLOv8', 'TensorRT', 'Jetson Orin NX', 'ONNX', 'GradCAM', 'VisDrone', 'Python'],
    metrics: [
      { value: '+9.3%', label: 'mAP@0.5提升' },
      { value: '-1.63M', label: '参数量减少' },
      { value: '15-20', label: 'FPS实时推理' },
      { value: 'FP16', label: '量化部署' }
    ],
    architecture: '数据层(VisDrone) → 数据增强(Mosaic+MixUp) → 骨干网络(CSPDarknet) → SFFM模块 → BFSM模块 → 检测头 → ONNX导出 → TensorRT优化 → Jetson部署',
    codeSnippet: `# SFFM: Spatial Feature Fusion Module
class SFFM(nn.Module):
    def __init__(self, c1, c2):
        super().__init__()
        self.conv = Conv(c1, c2, 1, 1)
        self.branch1 = nn.Sequential(
            Conv(c2//2, c2//2, 3, 1, p=1),
            Conv(c2//2, c2//2, 1, 1))
        self.branch2 = nn.Sequential(
            nn.MaxPool2d(3, 1, 1),
            Conv(c2//2, c2//2, 1, 1))
    def forward(self, x):
        x = self.conv(x)
        b1, b2 = x.chunk(2, dim=1)
        return torch.cat([b1, self.branch1(b2),
                          b2, self.branch2(b1)], dim=1)`,
    links: {
      file: '毕业设计代码整理/毕业设计代码整理/可视化部署/app/core/detector.py',
      fileLabel: '🔧 核心算法',
      github: 'https://github.com/JinIilaiQiaoMen'
    }
  },

  {
    id: 'zaep',
    title: 'ZAEP企业AI中台平台',
    category: '企业级项目 · AI中台',
    year: '2025-2026',
    accent: '#7c5cff',
    icon: '🏢',
    tagline: '从0到1设计开发的企业级AI中台，8大核心模块，集成RAG引擎、多智能体调度、Function Calling',
    description: '项目面向企业数字化转型需求，打造一站式AI应用赋能平台，整合多智能体协同、RAG智能知识库、可视化自动化工作流三大核心能力，聚焦外贸数据分析、智能内容生成、业务流程自动化等核心场景，为企业轻量化AI落地提供完整解决方案。系统已迭代至v4.3版本，包含8大核心模块，集成Prometheus可观测性体系。',
    highlights: [
      '8大核心模块：智能体控制台、外贸业务、企业管理、智能营销、数据获取、支撑系统、AI能力中台、实时通知',
      'RAG引擎：支持文档解析、混合检索（BM25+向量）、重排序、SSE流式输出',
      '多智能体调度：基于Function Calling的Agent协作框架，支持任务路由和并行执行',
      '低代码工作流引擎：可视化拖拽编排，支持条件分支、循环、并行节点',
      'Prompt注入防护：多层次安全策略，防止恶意Prompt注入攻击',
      'Prometheus可观测性：全链路监控、指标采集、告警通知',
      '企业级架构：Docker容器化部署、Nginx反向代理、SQLite数据持久化'
    ],
    challenges: '企业AI落地面临碎片化需求、数据孤岛、安全合规三大挑战。通过模块化架构设计实现灵活组合，RAG+多智能体协同解决数据整合，Prompt注入防护+审计日志保障安全合规。',
    techStack: ['Next.js', 'Python', 'RAG', 'Dify', 'Docker', 'Prometheus', 'Function Calling', 'Nginx', 'SQLite', 'WebSocket'],
    metrics: [
      { value: '8', label: '核心模块' },
      { value: '+60%', label: '效率提升' },
      { value: 'v4.3', label: '当前版本' },
      { value: '20+', label: 'API接口' }
    ],
    architecture: '前端(Next.js) → API网关 → 业务模块层 → AI能力中台(RAG/Agent/工作流) → 数据层(SQLite) → 基础设施(Docker/Nginx/Prometheus)',
    codeSnippet: `// Function Calling 路由示例
async function routeToAgent(task) {
  const agents = await getAvailableAgents();
  const matched = agents.filter(a =>
    a.capabilities.some(c => task.tags.includes(c))
  );
  if (matched.length > 1) {
    return executeParallel(matched, task);
  }
  return matched[0].execute(task);
}`,
    links: {
      demo: '新项目/index.html',
      demoLabel: '🖥 在线演示',
      github: 'https://github.com/JinIilaiQiaoMen'
    }
  },

  {
    id: 'aurora-music',
    title: 'AuroraMusic 游戏音乐混音播放器',
    category: '桌面应用 · 全栈开发',
    year: '2026',
    accent: '#ff3d71',
    icon: '🎵',
    tagline: 'Electron + Vue 3桌面音乐播放器，支持12种音频格式，音乐+麦克风混音输出到虚拟麦克风',
    description: '针对游戏场景下本地音乐与麦克风声音无法同步混音输出、音频路由冲突、设备适配受限等痛点，基于跨端技术栈开发商用级桌面音频混音播放器，解决游戏组队音频共享难题。基于BASS音频引擎实现高质量音频处理，通过koffi FFI调用原生DLL，实现免编译跨平台原生模块加载。',
    highlights: [
      '支持12种音频格式：MP3、FLAC、WAV、OGG、AAC、M4A、WMA、AIFF、OPUS、ALAC、APE、TTA',
      '音乐+麦克风实时混音输出，可输出到虚拟麦克风供其他应用采集',
      '基于BASS音频引擎，低延迟音频处理（<50ms）',
      'koffi FFI方案实现免编译原生模块加载，解决Electron原生模块编译难题',
      'SQLite本地数据库存储播放列表、播放历史、用户配置',
      'Electron自动更新，支持版本检测和增量更新',
      '完整的播放器功能：播放列表管理、搜索、歌词显示、均衡器、音量控制',
      '已发布v0.4.0版本，包含安装包和便携版'
    ],
    challenges: 'Electron原生模块编译是跨平台桌面应用的经典难题。传统node-gyp编译方案需要本地C++工具链，且不同Electron版本需要重新编译。通过koffi FFI方案直接调用DLL，彻底绕过编译环节，实现零编译依赖。',
    techStack: ['Electron', 'Vue3', 'TypeScript', 'BASS Audio', 'koffi FFI', 'SQLite', 'electron-builder'],
    metrics: [
      { value: '12', label: '音频格式' },
      { value: 'v0.4', label: '当前版本' },
      { value: '<50ms', label: '音频延迟' },
      { value: 'FFI', label: '免编译' }
    ],
    architecture: 'Vue3 UI层 → Electron主进程 → koffi FFI → BASS Audio DLL → 音频设备(虚拟麦克风)',
    codeSnippet: `// koffi FFI 调用 BASS 音频引擎
const koffi = require('koffi');
const bass = koffi.load('bass.dll');

const BASS_Init = bass.func('int BASS_Init(int device, DWORD freq, DWORD flags, HWND win, void *clsid)');
const BASS_StreamCreateFile = bass.func('DWORD BASS_StreamCreateFile(BOOL mem, void *file, QWORD offset, QWORD length, DWORD flags)');

// 初始化音频引擎
BASS_Init(-1, 44100, 0, 0, null);
// 创建音频流
const stream = BASS_StreamCreateFile(false, filePath, 0, 0, 0);`,
    links: {
      download: 'AuroraMusic/release/Aurora Music 0.4.0.exe',
      downloadLabel: '⬇ 下载v0.4.0',
      github: 'https://github.com/JinIilaiQiaoMen',
      docs: 'AuroraMusic/README.md',
      docsLabel: '📖 README'
    }
  },

  {
    id: 'window-agent-mcp',
    title: 'Window-Agent-MCP 智能体工具服务器',
    category: '开源工具 · MCP协议',
    year: '2026',
    accent: '#00e5ff',
    icon: '🤖',
    tagline: '基于MCP SDK 2.0的Windows自动化工具服务器，32个工具接口供AI智能体调用',
    description: '基于MCP SDK 2.0开发的Windows自动化工具服务器，提供32个工具接口供AI智能体调用。支持窗口管理、UI自动化、屏幕截图、进程管理等操作，采用stdio传输模式。让AI Agent能够直接操控Windows桌面应用程序，实现智能化的桌面自动化。',
    highlights: [
      '32个工具接口：窗口枚举、查找、激活、关闭、移动、截图',
      'UI自动化：元素查找、点击、输入文本、滑动、拖拽',
      '屏幕操作：全屏截图、区域截图、找图、OCR识别',
      '进程管理：启动、终止、列举进程',
      '键盘鼠标模拟：按键、组合键、鼠标移动、点击',
      'MCP SDK 2.0：使用MCPServer API，支持stdio传输',
      'Pydantic模型：严格的输入参数校验和类型提示',
      '完整文档：每个工具都有详细的使用说明和参数定义'
    ],
    challenges: 'MCP协议是新兴标准，SDK 2.0从FastMCP迁移到MCPServer API，工具注册方式发生变化。需要适配新API的同时保持向后兼容。Win32 API调用需要处理64位/32位兼容性和权限管理。',
    techStack: ['Python', 'MCP SDK 2.0', 'Win32 API', 'Pydantic', 'stdio', 'Pillow', 'pyautogui'],
    metrics: [
      { value: '32', label: '工具接口' },
      { value: '2.0', label: 'MCP SDK' },
      { value: '6类', label: '功能分类' },
      { value: 'stdio', label: '传输模式' }
    ],
    architecture: 'AI Agent → MCP Client → stdio传输 → MCPServer → 工具路由 → Win32 API → Windows系统',
    codeSnippet: `# MCP工具注册示例
from mcp import MCPServer
import pyautogui

server = MCPServer("window-agent")

@server.add_tool()
async def screenshot_window(window_title: str) -> str:
    """截取指定窗口的屏幕截图"""
    import pygetwindow as gw
    win = gw.getWindowsWithTitle(window_title)[0]
    win.activate()
    img = pyautogui.screenshot(region=(
        win.left, win.top, win.width, win.height))
    return img.to_base64()`,
    links: {
      github: 'https://github.com/JinIilaiQiaoMen',
      githubLabel: '💻 源码'
    }
  },

  {
    id: 'code-review',
    title: '智能代码审查与缺陷修复系统',
    category: 'AI应用 · 代码审查',
    year: '2026',
    accent: '#ffaa00',
    icon: '🔍',
    tagline: 'AST静态分析+大模型理解，支持多语言自动缺陷检测，缺陷检出率90%+，审查效率提升75%',
    description: '针对传统代码审查效率低、漏洞漏检率高、修复方案不智能等问题，搭建轻量化、自动化的AI代码审查与缺陷修复工具，适配Python、Java、JS等主流开发语言，赋能开发流程提效降错。结合AST语法树静态分析和LLM语义理解，实现双层检测机制。',
    highlights: [
      '双层检测机制：AST静态分析快速定位语法级问题 + LLM语义理解发现逻辑缺陷',
      '多语言支持：Python、Java、JavaScript、TypeScript',
      '缺陷分类：空指针、资源泄漏、SQL注入、XSS、代码规范、性能问题等20+类别',
      '智能修复建议：LLM生成修复代码片段，支持一键应用',
      '可视化报告：HTML格式审查报告，包含代码高亮和缺陷标注',
      'CI/CD集成：支持GitHub Actions、GitLab CI流水线集成',
      'Flask后端 + Vue3前端，支持在线代码提交和实时审查'
    ],
    challenges: '纯静态分析漏报率高，纯LLM分析成本高且可能产生幻觉。通过AST预筛+LLM精检的两阶段策略，先快速排除明显无问题代码，再对可疑片段进行深度语义分析，兼顾准确率和成本。',
    techStack: ['Python', 'AST解析', 'LLM API', 'Flask', 'Vue3', 'tree-sitter', 'pytest'],
    metrics: [
      { value: '90%+', label: '缺陷检出率' },
      { value: '+75%', label: '审查效率提升' },
      { value: '4种', label: '支持语言' },
      { value: '20+', label: '缺陷类别' }
    ],
    architecture: '代码输入 → AST解析(tree-sitter) → 规则匹配 → 可疑片段提取 → LLM语义分析 → 缺陷分类 → 修复建议生成 → HTML报告',
    codeSnippet: `# AST + LLM 双层检测
import ast

def analyze_code(code: str, language: str):
    # 第一层：AST静态分析
    tree = ast.parse(code)
    issues = []
    for node in ast.walk(tree):
        if isinstance(node, ast.Call):
            if is_dangerous_call(node):
                issues.append({
                    'line': node.lineno,
                    'type': 'dangerous_call',
                    'severity': 'high'
                })

    # 第二层：LLM语义分析（仅对可疑片段）
    if issues:
        context = extract_context(code, issues)
        llm_result = llm_analyze(context, language)
        issues = merge_results(issues, llm_result)

    return issues`,
    links: {
      github: 'https://github.com/JinIilaiQiaoMen',
      githubLabel: '💻 源码'
    }
  },

  {
    id: 'ecommerce-ai',
    title: '多平台电商AI自动化系统',
    category: '自动化 · 电商',
    year: '2025',
    accent: '#ff3d71',
    icon: '🛒',
    tagline: '淘宝/抖音/拼多多/微信4大平台AI自动化，商品采集+智能文案+图片处理+合规上架全链路',
    description: '针对电商人工选品、文案优化、图片处理、多平台上架流程繁琐、效率低下、合规性差等问题，搭建集数据抓取、AI智能美工、多平台合规上架于一体的全链路自动化系统。支持4大主流电商平台，处理速度达5秒/页，大幅降低人工成本。',
    highlights: [
      '4大电商平台：淘宝、抖音、拼多多、微信小程序',
      '商品信息采集：DrissionPage反检测爬虫，自动翻页提取商品信息',
      'AI智能文案：基于LLM生成商品标题、详情描述、营销文案',
      '图片处理：自动去水印、智能裁剪、背景替换、主图生成',
      '合规检测：自动检测违禁词、图片合规性，避免平台处罚',
      '多平台一键上架：适配各平台API规范，自动填充商品属性',
      'Flask管理后台：可视化任务管理、批量操作、进度监控'
    ],
    challenges: '各电商平台反爬策略不同，API接口差异大。通过DrissionPage浏览器自动化绕过反爬检测，配合平台API实现混合采集策略。合规检测需要维护各平台规则库，实时更新违禁词列表。',
    techStack: ['Python', 'DrissionPage', 'Flask', 'LLM API', 'Pillow', 'Requests', 'SQLite'],
    metrics: [
      { value: '4', label: '电商平台' },
      { value: '5s', label: '每页处理' },
      { value: 'AI', label: '文案生成' },
      { value: '合规', label: '自动检测' }
    ],
    architecture: '商品采集(DrissionPage) → 数据清洗 → AI文案生成(LLM) → 图片处理(Pillow) → 合规检测 → 多平台上架(API)',
    codeSnippet: `# DrissionPage 反检测采集
from DrissionPage import WebPage

page = WebPage()
page.get('https://s.taobao.com/search?q=keyword')

# 模拟人类行为，避免反爬
page.scroll.down(300)
page.wait(2)

# 提取商品信息
items = page.eles('.item')
for item in items:
    product = {
        'title': item.ele('.title').text,
        'price': item.ele('.price').text,
        'img': item.ele('img').attr('src')
    }
    # AI优化文案
    product['ai_title'] = llm_optimize(product['title'])`,
    links: {
      github: 'https://github.com/JinIilaiQiaoMen',
      githubLabel: '💻 源码'
    }
  },

  {
    id: 'iot-embedded',
    title: '嵌入式物联网多场景系统',
    category: '嵌入式 · IoT',
    year: '2025',
    accent: '#00d68f',
    icon: '📡',
    tagline: 'ESP32物联网多场景系统，蓝牙控制+姿态传感+红外测距+空气检测，4大实验场景实战演示',
    description: '基于ESP32与Arduino搭建多场景嵌入式物联网系统，涵盖蓝牙无线控制、MPU6050六轴姿态传感、HC-SR04红外超声波测距、DHT11空气检测四大核心实验。通过WebSocket实现传感器数据实时上传，前端Three.js 3D可视化渲染设备姿态，端到端延迟<100ms，完整呈现从硬件采集到软件可视化的全链路开发能力。',
    highlights: [
      '蓝牙开关控制：ESP32蓝牙无线通信，手机APP远程控制继电器开关，实现设备通断遥控',
      'MPU6050姿态传感：六轴加速度+陀螺仪数据采集，Three.js 3D实时渲染设备方向，四元数球面插值平滑动画',
      '红外测距：HC-SR04超声波测距模块，实时距离检测与阈值报警联动，精度±3mm',
      '空气检测：DHT11温湿度传感器+MQ-2空气质量传感器，LCD实时显示环境数据，超限自动报警',
      'WebSocket实时通信：ESP32通过WiFi双向传输传感器数据，端到端延迟<100ms',
      'Three.js 3D可视化：WebGL加速渲染设备姿态，四元数插值算法避免画面撕裂',
      'ESP32 + Arduino开发，I2C/SPI通信协议，多传感器并行采集'
    ],
    challenges: '嵌入式资源有限，需要在ESP32上优化数据处理和传输。蓝牙通信需处理连接稳定性和数据丢包重传。Three.js渲染需要与MPU6050传感器数据严格同步，通过时间戳对齐和球面线性插值(slerp)算法实现平滑的3D姿态渲染。红外测距需过滤噪声数据，采用滑动平均滤波提升精度。',
    techStack: ['ESP32', 'Arduino', 'MPU6050', 'HC-SR04', 'DHT11', 'Three.js', 'WebSocket', 'Vue3', 'Bluetooth', 'I2C'],
    metrics: [
      { value: '4', label: '实验场景' },
      { value: '100ms', label: '端到端延迟' },
      { value: '3D', label: '姿态可视化' },
      { value: '±3mm', label: '测距精度' }
    ],
    architecture: 'ESP32(传感器采集/蓝牙控制) → WiFi/Bluetooth → WebSocket Server → Vue3前端 → Three.js 3D渲染',
    codeSnippet: `// Three.js 实时姿态渲染 - MPU6050数据
const mesh = new THREE.Mesh(geometry, material);

socket.on('imu_data', (data) => {
  // 四元数插值，平滑渲染
  const quat = new THREE.Quaternion(
    data.qx, data.qy, data.qz, data.qw
  );
  mesh.quaternion.slerp(quat, 0.3); // 球面线性插值
});

// ESP32 蓝牙开关控制
#include <BluetoothSerial.h>
BluetoothSerial SerialBT;
#define RELAY_PIN 23

void setup() {
  SerialBT.begin("ESP32_BT_Control");
  pinMode(RELAY_PIN, OUTPUT);
}

void loop() {
  if (SerialBT.available()) {
    char cmd = SerialBT.read();
    digitalWrite(RELAY_PIN, cmd == '1' ? HIGH : LOW);
  }
}

// HC-SR04 红外测距
#define TRIG 12
#define ECHO 13
long duration; float distance;
digitalWrite(TRIG, HIGH); delayMicroseconds(10);
digitalWrite(TRIG, LOW);
duration = pulseIn(ECHO, HIGH);
distance = duration * 0.034 / 2;`,
    links: {
      file: '代码部分/',
      fileLabel: '💻 查看源码'
    }
  },

  {
    id: 'yolov5',
    title: 'YOLOv5人体目标检测系统',
    category: '课程实践 · 计算机视觉',
    year: '2025',
    accent: '#00d68f',
    icon: '👁',
    tagline: '基于YOLOv5的人体目标检测，COCO数据集训练，集成GradCAM可视化分析，完整训练-验证-部署流程',
    description: '为深入理解目标检测模型特征提取与决策机制，基于自建人体目标数据集，完成YOLOv5s、YOLOv5s6双版本模型训练、对比实验与可解释性可视化分析，搭建完整的数据处理-模型训练-检测推理闭环流程。使用COCO数据集中person类别，标注50+张人体图像进行微调训练。',
    highlights: [
      'YOLOv5s + YOLOv5s6双版本对比训练，分析不同输入分辨率对检测精度的影响',
      '50+张人体图像手动标注，使用LabelImg工具生成YOLO格式标注文件',
      'GradCAM可视化：生成类激活热力图，分析模型关注的图像区域',
      '数据增强：Mosaic、MixUp、随机裁剪、颜色抖动',
      '完整训练流程：数据划分、模型训练、验证评估、推理测试',
      '检测结果可视化：边界框标注、置信度显示、类别标签',
      '支持图片、视频、实时摄像头三种检测模式'
    ],
    challenges: '小数据集容易过拟合，通过Transfer Learning加载预训练权重，配合数据增强策略提升泛化能力。GradCAM可视化帮助理解模型决策过程，发现模型在某些遮挡场景下的盲区。',
    techStack: ['YOLOv5', 'PyTorch', 'OpenCV', 'GradCAM', 'COCO', 'LabelImg', 'Python'],
    metrics: [
      { value: '50+', label: '标注样本' },
      { value: '10', label: '目标类别' },
      { value: '2版本', label: '对比实验' },
      { value: 'GradCAM', label: '可解释性' }
    ],
    architecture: '数据标注(LabelImg) → 数据增强 → YOLOv5训练 → 模型验证 → GradCAM分析 → 检测推理',
    codeSnippet: `# YOLOv5 检测推理
import torch

model = torch.hub.load('ultralytics/yolov5', 'yolov5s')
model.classes = [0]  # 仅检测person类别

# 图片检测
results = model('image.jpg')
results.show()

# GradCAM 可视化
from gradcam import GradCAM
cam = GradCAM(model, target_layer=model.model.model[-1])
heatmap = cam(input_tensor, target_class=0)`,
    links: {
      file: 'Yolov5/',
      fileLabel: '💻 查看源码'
    }
  },

  {
    id: 'flower-classification',
    title: 'PyTorch花卉图像分类系统',
    category: '课程实践 · 深度学习',
    year: '2025',
    accent: '#7c5cff',
    icon: '🌸',
    tagline: '基于迁移学习的102类花卉分类，Oxford 102 Flowers数据集，完整深度学习流程',
    description: '基于迁移学习的102类花卉分类系统，使用Oxford 102 Flowers数据集。实现数据预处理、数据增强、模型微调、训练曲线可视化等完整深度学习流程。以ResNet预训练模型为骨干网络，通过微调实现高精度花卉分类。',
    highlights: [
      '102类花卉分类：覆盖常见花卉种类，8K+训练图片',
      '迁移学习：基于ResNet预训练权重，冻结早期卷积层，微调全连接层',
      '数据增强：随机裁剪、翻转、颜色抖动、归一化',
      '训练可视化：实时绘制Loss曲线、Accuracy曲线、学习率调度',
      '模型评估：混淆矩阵、Top-5准确率、每类精确率/召回率',
      '预测界面：支持单张图片上传预测，显示Top-5预测结果和概率',
      '完整PyTorch工程结构：dataset、model、train、predict模块化'
    ],
    challenges: '102类细粒度分类难度大，部分类别视觉差异极小。通过高分辨率输入(224x224)、强数据增强、以及分层学习率调度策略（早期层使用较小学习率，全连接层使用较大学习率）提升分类精度。',
    techStack: ['PyTorch', 'ResNet', '迁移学习', '数据增强', 'Matplotlib', 'torchvision'],
    metrics: [
      { value: '102', label: '分类类别' },
      { value: '8K+', label: '训练图片' },
      { value: 'ResNet', label: '骨干网络' },
      { value: '迁移', label: '学习策略' }
    ],
    architecture: 'Oxford 102数据集 → 数据预处理+增强 → ResNet迁移学习 → 分层微调 → 模型评估 → 预测推理',
    codeSnippet: `# 迁移学习 - 分层学习率
model = models.resnet50(pretrained=True)

# 冻结卷积基
for param in model.parameters():
    param.requires_grad = False

# 替换分类头
model.fc = nn.Linear(model.fc.in_features, 102)

# 分层学习率
optimizer = optim.SGD([
    {'params': model.layer1.parameters(), 'lr': 1e-4},
    {'params': model.layer2.parameters(), 'lr': 1e-3},
    {'params': model.layer3.parameters(), 'lr': 1e-3},
    {'params': model.layer4.parameters(), 'lr': 1e-3},
    {'params': model.fc.parameters(), 'lr': 1e-2},
], momentum=0.9)`,
    links: {
      file: 'PyTorch-花卉/',
      fileLabel: '💻 查看源码'
    }
  },

  {
    id: 'rag-knowledge-base',
    title: '企业RAG知识库搭建指南',
    category: '企业级 · RAG',
    year: '2026',
    accent: '#00e5ff',
    icon: '📚',
    tagline: '完整企业级RAG方案，混合检索（BM25+向量）+重排序+SSE流式输出，含可视化构建工具',
    description: '完整的企业级RAG知识库搭建方案，涵盖文档解析、混合检索（BM25+向量）、重排序、SSE流式输出等核心环节。提供可视化构建工具和技术方案文档，帮助企业快速搭建私有知识库问答系统。',
    highlights: [
      '文档解析：支持PDF、Word、Excel、Markdown、HTML多格式',
      '混合检索策略：BM25关键词检索 + 向量语义检索，加权融合排序',
      '重排序模型：使用Cross-Encoder对召回结果二次精排，提升Top-K准确率',
      'SSE流式输出：Server-Sent Events实现打字机效果，提升用户体验',
      '向量数据库：支持Chroma、Faiss、Milvus多种向量存储',
      'Embedding模型：支持多语言向量化，中英文混合检索',
      '可视化构建工具：拖拽式知识库配置，实时测试问答效果',
      '完整技术方案文档：架构设计、技术选型、性能优化、部署指南'
    ],
    challenges: '纯向量检索在专业术语匹配上表现不佳，纯BM25无法理解语义。通过混合检索+重排序的两阶段策略，先用BM25和向量各自召回Top-K，再用Cross-Encoder精排，兼顾召回率和精确率。',
    techStack: ['RAG', 'BM25', '向量数据库', 'Embedding', 'Re-ranking', 'Cross-Encoder', 'SSE', 'LangChain'],
    metrics: [
      { value: '混合', label: '检索策略' },
      { value: 'SSE', label: '流式输出' },
      { value: '多格式', label: '文档解析' },
      { value: 'Top-K', label: '精排优化' }
    ],
    architecture: '文档输入 → 解析分块 → BM25索引 + 向量索引 → 混合召回 → Cross-Encoder重排序 → LLM生成 → SSE流式输出',
    codeSnippet: `# 混合检索 + 重排序
from rank_bm25 import BM25Okapi
from sentence_transformers import CrossEncoder

# 第一阶段：双路召回
bm25_scores = bm25.get_scores(query_tokens)
vec_scores = cosine_similarity(query_embedding, doc_embeddings)
hybrid_scores = 0.4 * bm25_scores + 0.6 * vec_scores

# 取Top-K候选
candidates = top_k(hybrid_scores, k=20)

# 第二阶段：Cross-Encoder精排
reranker = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
rerank_scores = reranker.predict([(query, doc) for doc in candidates])
final_results = top_k(rerank_scores, k=5)`,
    links: {
      docs: '企业RAG搭建/rag-knowledge-base-guide.html',
      docsLabel: '📋 方案文档',
      file: '企业RAG搭建/kb-builder.html',
      fileLabel: '💻 可视化工具'
    }
  },

  {
    id: 'hadoop-bigdata',
    title: 'Hadoop分布式集群与MapReduce分析',
    category: '课程实践 · 大数据',
    year: '2025',
    accent: '#ffaa00',
    icon: '📊',
    tagline: '从零搭建Hadoop分布式集群，编写MapReduce程序进行大数据分析，完整集群配置教程',
    description: '从零搭建Hadoop分布式集群，编写MapReduce程序进行大数据分析。包含集群配置教程、MapReduce案例分析报告等完整文档。通过实践掌握HDFS分布式存储、YARN资源调度、MapReduce分布式计算三大核心组件。',
    highlights: [
      'Hadoop完全分布式集群搭建：1个NameNode + 3个DataNode',
      'HDFS分布式文件系统：文件上传、下载、块管理、副本策略',
      'YARN资源调度：资源队列配置、任务优先级管理',
      'MapReduce编程：WordCount、数据去重、排序、Join等经典案例',
      '集群性能调优：JVM参数、内存配置、并行度调整',
      '完整配置文档：从环境准备到集群启动的全流程教程',
      'MapReduce案例分析报告：包含数据流向图和性能分析'
    ],
    challenges: 'Hadoop集群配置涉及大量XML配置文件，网络通信、SSH免密登录、Java环境变量等环节容易出错。通过编写自动化配置脚本和详细的排错文档，简化部署流程。',
    techStack: ['Hadoop', 'MapReduce', 'HDFS', 'YARN', 'Java', 'Linux'],
    metrics: [
      { value: '分布式', label: '集群架构' },
      { value: '4节点', label: '集群规模' },
      { value: 'HDFS', label: '分布式存储' },
      { value: 'YARN', label: '资源调度' }
    ],
    architecture: 'NameNode(HDFS主节点) → DataNode×3(数据节点) → ResourceManager(YARN) → NodeManager×3 → MapReduce任务执行',
    codeSnippet: `// MapReduce WordCount
public class WordCount {
  public static class TokenizerMapper
      extends Mapper<Object, Text, Text, IntWritable> {
    private final static IntWritable one = new IntWritable(1);
    private Text word = new Text();

    public void map(Object key, Text value, Context context)
        throws IOException, InterruptedException {
      StringTokenizer itr = new StringTokenizer(value.toString());
      while (itr.hasMoreTokens()) {
        word.set(itr.nextToken());
        context.write(word, one);
      }
    }
  }

  public static class IntSumReducer
      extends Reducer<Text, IntWritable, Text, IntWritable> {
    public void reduce(Text key, Iterable<IntWritable> values,
        Context context) throws IOException, InterruptedException {
      int sum = 0;
      for (IntWritable val : values) sum += val.get();
      context.write(key, new IntWritable(sum));
    }
  }
}`,
    links: {}
  }
];

// 导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROJECTS;
}
