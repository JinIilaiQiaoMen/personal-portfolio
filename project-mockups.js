// ==========================================
// 项目可视化界面模拟 - project-mockups.js
// 每个项目对应一个模拟操作界面
// ==========================================

const MOCKUPS = {

// ========== 1. YOLOv8 航拍小目标检测 ==========
'yolov8': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">YOLOv8 航拍目标检测系统 — Jetson Orin NX</span>
  </div>
  <div class="mockup-body" style="display:flex;height:420px;">
    <!-- 检测画面 -->
    <div style="flex:1;position:relative;background:linear-gradient(135deg,#1a2a3a,#0d1520);overflow:hidden;">
      <!-- 模拟航拍场景 -->
      <div style="position:absolute;inset:0;background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),
        linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);
        background-size:30px 30px;"></div>
      <!-- 道路 -->
      <div style="position:absolute;top:60%;left:0;right:0;height:30px;background:rgba(100,100,120,0.3);transform:rotate(-5deg);"></div>
      <div style="position:absolute;top:30%;left:20%;width:40%;height:20px;background:rgba(100,100,120,0.2);transform:rotate(15deg);"></div>
      <!-- 检测框1: person -->
      <div class="det-box" style="position:absolute;top:35%;left:15%;width:24px;height:48px;border:2px solid #00d68f;animation:mock-pulse 2s infinite;">
        <span class="det-label" style="background:#00d68f;color:#000;">person 0.92</span>
      </div>
      <!-- 检测框2: car -->
      <div class="det-box" style="position:absolute;top:55%;left:40%;width:50px;height:30px;border:2px solid #00e5ff;animation:mock-pulse 2s infinite 0.3s;">
        <span class="det-label" style="background:#00e5ff;color:#000;">car 0.88</span>
      </div>
      <!-- 检测框3: person -->
      <div class="det-box" style="position:absolute;top:25%;left:60%;width:20px;height:40px;border:2px solid #00d68f;animation:mock-pulse 2s infinite 0.6s;">
        <span class="det-label" style="background:#00d68f;color:#000;">person 0.85</span>
      </div>
      <!-- 检测框4: bicycle -->
      <div class="det-box" style="position:absolute;top:48%;left:70%;width:30px;height:22px;border:2px solid #ffaa00;animation:mock-pulse 2s infinite 0.9s;">
        <span class="det-label" style="background:#ffaa00;color:#000;">bicycle 0.76</span>
      </div>
      <!-- 检测框5: truck -->
      <div class="det-box" style="position:absolute;top:62%;left:75%;width:45px;height:28px;border:2px solid #ff3d71;animation:mock-pulse 2s infinite 1.2s;">
        <span class="det-label" style="background:#ff3d71;color:#fff;">truck 0.91</span>
      </div>
      <!-- FPS标签 -->
      <div style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,0.7);padding:4px 10px;border-radius:4px;font-family:monospace;font-size:11px;color:#00d68f;">FPS: 18.3 | GPU: 72%</div>
      <!-- 分辨率标签 -->
      <div style="position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,0.7);padding:4px 10px;border-radius:4px;font-family:monospace;font-size:11px;color:#a3b1cc;">1280x720 | FP16</div>
    </div>
    <!-- 右侧统计面板 -->
    <div style="width:200px;background:#0d1117;padding:12px;border-left:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;gap:10px;">
      <div style="font-size:11px;color:#5c6a8a;font-family:monospace;text-transform:uppercase;letter-spacing:1px;">检测统计</div>
      <div style="background:#161b22;border-radius:8px;padding:10px;">
        <div style="font-size:20px;font-weight:700;color:#00d68f;">5</div>
        <div style="font-size:10px;color:#5c6a8a;">检测目标数</div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:10px;">
        <div style="font-size:20px;font-weight:700;color:#00e5ff;">18.3</div>
        <div style="font-size:10px;color:#5c6a8a;">推理FPS</div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:10px;">
        <div style="font-size:20px;font-weight:700;color:#ffaa00;">+9.3%</div>
        <div style="font-size:10px;color:#5c6a8a;">mAP提升</div>
      </div>
      <div style="font-size:11px;color:#5c6a8a;font-family:monospace;text-transform:uppercase;letter-spacing:1px;margin-top:4px;">类别分布</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;"><span style="color:#00d68f;">● person</span><span style="color:#a3b1cc;">2</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;"><span style="color:#00e5ff;">● car</span><span style="color:#a3b1cc;">1</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;"><span style="color:#ffaa00;">● bicycle</span><span style="color:#a3b1cc;">1</span></div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;"><span style="color:#ff3d71;">● truck</span><span style="color:#a3b1cc;">1</span></div>
      </div>
      <button style="margin-top:auto;background:#00d68f;color:#000;border:none;padding:8px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">⏺ 开始检测</button>
    </div>
  </div>
</div>`,

// ========== 2. ZAEP 企业AI中台 ==========
'zaep': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">ZAEP 企业AI中台 v4.3.0 — 智能体控制台</span>
  </div>
  <div class="mockup-body" style="display:flex;height:420px;">
    <!-- 侧边栏 -->
    <div style="width:180px;background:#0d1117;border-right:1px solid rgba(255,255,255,0.06);padding:12px 0;">
      <div style="padding:0 12px 12px;font-size:13px;font-weight:700;color:#7c5cff;">🏢 ZAEP Console</div>
      <div style="padding:8px 12px;font-size:12px;color:#00e5ff;background:rgba(0,229,255,0.08);border-left:2px solid #00e5ff;">🤖 智能体控制台</div>
      <div style="padding:8px 12px;font-size:12px;color:#a3b1cc;">📦 外贸业务</div>
      <div style="padding:8px 12px;font-size:12px;color:#a3b1cc;">📊 企业管理</div>
      <div style="padding:8px 12px;font-size:12px;color:#a3b1cc;">📢 智能营销</div>
      <div style="padding:8px 12px;font-size:12px;color:#a3b1cc;">🔍 数据获取</div>
      <div style="padding:8px 12px;font-size:12px;color:#a3b1cc;">⚙️ 支撑系统</div>
      <div style="padding:8px 12px;font-size:12px;color:#a3b1cc;">🧠 AI能力中台</div>
      <div style="padding:8px 12px;font-size:12px;color:#a3b1cc;">🔔 实时通知</div>
      <div style="margin:12px;padding:8px;background:#161b22;border-radius:6px;">
        <div style="font-size:10px;color:#5c6a8a;">系统状态</div>
        <div style="font-size:11px;color:#00d68f;">● 所有服务正常</div>
      </div>
    </div>
    <!-- 主内容 -->
    <div style="flex:1;padding:16px;overflow:hidden;">
      <div style="display:flex;justify-content:space-between;margin-bottom:12px;">
        <div style="font-size:14px;font-weight:600;color:#e8edf5;">智能体控制台</div>
        <div style="display:flex;gap:8px;">
          <span style="background:rgba(0,214,143,0.15);color:#00d68f;padding:2px 8px;border-radius:4px;font-size:10px;">● 3个智能体在线</span>
          <span style="background:rgba(124,92,255,0.15);color:#7c5cff;padding:2px 8px;border-radius:4px;font-size:10px;">RAG引擎运行中</span>
        </div>
      </div>
      <!-- 统计卡片 -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;">
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00e5ff;">8</div><div style="font-size:9px;color:#5c6a8a;">核心模块</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00d68f;">127</div><div style="font-size:9px;color:#5c6a8a;">今日任务</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#ffaa00;">60%</div><div style="font-size:9px;color:#5c6a8a;">效率提升</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#ff3d71;">v4.3</div><div style="font-size:9px;color:#5c6a8a;">当前版本</div></div>
      </div>
      <!-- 智能体对话 -->
      <div style="background:#161b22;border-radius:8px;padding:12px;height:220px;display:flex;flex-direction:column;gap:8px;">
        <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;">Agent 对话</div>
        <div style="display:flex;gap:8px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#7c5cff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">AI</div>
          <div style="background:#1c2333;border-radius:8px;padding:8px 12px;font-size:12px;color:#e8edf5;max-width:80%;">分析完外贸数据，已生成营销建议报告。正在调用RAG引擎检索相关案例...</div>
        </div>
        <div style="display:flex;gap:8px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#00d68f;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;">RG</div>
          <div style="background:#1c2333;border-radius:8px;padding:8px 12px;font-size:12px;color:#e8edf5;max-width:80%;">RAG检索完成，找到12条相关知识。建议采用方案B：东南亚市场定向推广 📊</div>
        </div>
        <div style="display:flex;gap:8px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#00e5ff;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;">FC</div>
          <div style="background:#1c2333;border-radius:8px;padding:8px 12px;font-size:12px;color:#e8edf5;max-width:80%;"><span style="color:#00e5ff;">⚡ Function Calling:</span> 调用 generate_report(data, template="marketing")</div>
        </div>
        <div style="margin-top:auto;display:flex;gap:8px;">
          <input type="text" placeholder="输入指令..." style="flex:1;background:#0d1117;border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:8px 12px;color:#e8edf5;font-size:12px;" disabled>
          <button style="background:#7c5cff;color:#fff;border:none;padding:8px 16px;border-radius:6px;font-size:12px;cursor:pointer;">发送</button>
        </div>
      </div>
    </div>
  </div>
</div>`,

// ========== 3. AuroraMusic 播放器 ==========
'aurora-music': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">Aurora Music v0.4.0 — 游戏音乐混音播放器</span>
  </div>
  <div class="mockup-body" style="display:flex;height:420px;background:#0d0d12;">
    <!-- 左侧播放列表 -->
    <div style="width:220px;background:#0a0a0f;border-right:1px solid rgba(255,255,255,0.05);padding:12px;overflow:hidden;">
      <div style="font-size:11px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">播放列表</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <div style="background:rgba(255,61,113,0.1);border-left:2px solid #ff3d71;padding:6px 8px;border-radius:4px;cursor:pointer;">
          <div style="font-size:12px;color:#ff3d71;">🎵 Epic Battle Theme</div>
          <div style="font-size:10px;color:#5c6a8a;">03:42 | FLAC</div>
        </div>
        <div style="padding:6px 8px;border-radius:4px;">
          <div style="font-size:12px;color:#a3b1cc;">🎵 Crystal Caves</div>
          <div style="font-size:10px;color:#5c6a8a;">04:18 | MP3</div>
        </div>
        <div style="padding:6px 8px;border-radius:4px;">
          <div style="font-size:12px;color:#a3b1cc;">🎵 City of Light</div>
          <div style="font-size:10px;color:#5c6a8a;">05:23 | WAV</div>
        </div>
        <div style="padding:6px 8px;border-radius:4px;">
          <div style="font-size:12px;color:#a3b1cc;">🎵 Dark Forest</div>
          <div style="font-size:10px;color:#5c6a8a;">03:56 | OGG</div>
        </div>
        <div style="padding:6px 8px;border-radius:4px;">
          <div style="font-size:12px;color:#a3b1cc;">🎵 Ocean Waves</div>
          <div style="font-size:10px;color:#5c6a8a;">06:12 | FLAC</div>
        </div>
        <div style="padding:6px 8px;border-radius:4px;">
          <div style="font-size:12px;color:#a3b1cc;">🎵 Night Drive</div>
          <div style="font-size:10px;color:#5c6a8a;">04:45 | AAC</div>
        </div>
      </div>
    </div>
    <!-- 中间播放器 -->
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;padding:20px;">
      <!-- 专辑封面 -->
      <div style="width:120px;height:120px;border-radius:12px;background:linear-gradient(135deg,#ff3d71,#7c5cff);display:flex;align-items:center;justify-content:center;font-size:48px;margin-bottom:12px;box-shadow:0 8px 32px rgba(255,61,113,0.3);">
        🎮
      </div>
      <div style="font-size:14px;font-weight:600;color:#e8edf5;">Epic Battle Theme</div>
      <div style="font-size:11px;color:#5c6a8a;margin-bottom:12px;">Game Soundtrack · FLAC · 320kbps</div>
      <!-- 音频可视化 -->
      <div style="display:flex;gap:3px;align-items:flex-end;height:50px;margin-bottom:12px;">
        <div class="viz-bar" style="width:4px;height:20px;background:#ff3d71;animation:mock-viz 0.8s ease-in-out infinite;"></div>
        <div class="viz-bar" style="width:4px;height:35px;background:#ff3d71;animation:mock-viz 0.6s ease-in-out infinite 0.1s;"></div>
        <div class="viz-bar" style="width:4px;height:45px;background:#ff5d91;animation:mock-viz 0.5s ease-in-out infinite 0.2s;"></div>
        <div class="viz-bar" style="width:4px;height:30px;background:#ff3d71;animation:mock-viz 0.7s ease-in-out infinite 0.15s;"></div>
        <div class="viz-bar" style="width:4px;height:40px;background:#ff5d91;animation:mock-viz 0.4s ease-in-out infinite 0.05s;"></div>
        <div class="viz-bar" style="width:4px;height:50px;background:#ff3d71;animation:mock-viz 0.6s ease-in-out infinite 0.3s;"></div>
        <div class="viz-bar" style="width:4px;height:25px;background:#ff5d91;animation:mock-viz 0.8s ease-in-out infinite 0.1s;"></div>
        <div class="viz-bar" style="width:4px;height:38px;background:#ff3d71;animation:mock-viz 0.5s ease-in-out infinite 0.25s;"></div>
        <div class="viz-bar" style="width:4px;height:42px;background:#ff5d91;animation:mock-viz 0.7s ease-in-out infinite 0.35s;"></div>
        <div class="viz-bar" style="width:4px;height:28px;background:#ff3d71;animation:mock-viz 0.4s ease-in-out infinite 0.2s;"></div>
        <div class="viz-bar" style="width:4px;height:45px;background:#ff5d91;animation:mock-viz 0.6s ease-in-out infinite 0.4s;"></div>
        <div class="viz-bar" style="width:4px;height:32px;background:#ff3d71;animation:mock-viz 0.8s ease-in-out infinite 0.15s;"></div>
      </div>
      <!-- 进度条 -->
      <div style="width:100%;max-width:280px;margin-bottom:12px;">
        <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;">
          <div style="width:35%;height:100%;background:#ff3d71;border-radius:2px;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:10px;color:#5c6a8a;">
          <span>01:18</span><span>03:42</span>
        </div>
      </div>
      <!-- 控制按钮 -->
      <div style="display:flex;gap:16px;align-items:center;">
        <span style="font-size:18px;color:#5c6a8a;cursor:pointer;">⏮</span>
        <div style="width:44px;height:44px;border-radius:50%;background:#ff3d71;display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff;cursor:pointer;box-shadow:0 4px 16px rgba(255,61,113,0.4);">▶</div>
        <span style="font-size:18px;color:#5c6a8a;cursor:pointer;">⏭</span>
      </div>
    </div>
    <!-- 右侧混音控制 -->
    <div style="width:160px;background:#0a0a0f;border-left:1px solid rgba(255,255,255,0.05);padding:12px;">
      <div style="font-size:11px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;">混音控制</div>
      <!-- 音乐音量 -->
      <div style="margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#a3b1cc;margin-bottom:4px;"><span>🎵 音乐</span><span style="color:#ff3d71;">80%</span></div>
        <div style="height:6px;background:rgba(255,255,255,0.1);border-radius:3px;"><div style="width:80%;height:100%;background:#ff3d71;border-radius:3px;"></div></div>
      </div>
      <!-- 麦克风音量 -->
      <div style="margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#a3b1cc;margin-bottom:4px;"><span>🎤 麦克风</span><span style="color:#00d68f;">60%</span></div>
        <div style="height:6px;background:rgba(255,255,255,0.1);border-radius:3px;"><div style="width:60%;height:100%;background:#00d68f;border-radius:3px;"></div></div>
      </div>
      <!-- 虚拟麦克风 -->
      <div style="margin-bottom:16px;">
        <div style="display:flex;justify-content:space-between;font-size:10px;color:#a3b1cc;margin-bottom:4px;"><span>📤 虚拟输出</span><span style="color:#00e5ff;">ON</span></div>
        <div style="height:6px;background:rgba(255,255,255,0.1);border-radius:3px;"><div style="width:90%;height:100%;background:#00e5ff;border-radius:3px;"></div></div>
      </div>
      <!-- 均衡器 -->
      <div style="font-size:10px;color:#5c6a8a;margin-bottom:8px;">均衡器</div>
      <div style="display:flex;gap:4px;align-items:flex-end;height:40px;">
        <div style="flex:1;height:60%;background:#7c5cff;border-radius:2px;"></div>
        <div style="flex:1;height:80%;background:#7c5cff;border-radius:2px;"></div>
        <div style="flex:1;height:100%;background:#7c5cff;border-radius:2px;"></div>
        <div style="flex:1;height:90%;background:#7c5cff;border-radius:2px;"></div>
        <div style="flex:1;height:70%;background:#7c5cff;border-radius:2px;"></div>
      </div>
      <div style="margin-top:12px;padding:6px;background:rgba(0,214,143,0.1);border-radius:4px;text-align:center;font-size:10px;color:#00d68f;">✓ BASS引擎已加载</div>
      <div style="margin-top:4px;padding:6px;background:rgba(0,229,255,0.1);border-radius:4px;text-align:center;font-size:10px;color:#00e5ff;">延迟: 42ms</div>
    </div>
  </div>
</div>`,

// ========== 4. Window-Agent-MCP ==========
'window-agent-mcp': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">Window-Agent-MCP — 工具服务器控制台</span>
  </div>
  <div class="mockup-body" style="display:flex;height:420px;">
    <!-- 工具列表侧边栏 -->
    <div style="width:180px;background:#0d1117;border-right:1px solid rgba(255,255,255,0.06);padding:12px 0;overflow-y:auto;">
      <div style="padding:0 12px 8px;font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;">工具列表 (32)</div>
      <div style="padding:4px 12px;font-size:11px;color:#00e5ff;background:rgba(0,229,255,0.08);">▣ 窗口管理 (8)</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">enum_windows</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">find_window</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">activate_window</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">screenshot_window</div>
      <div style="padding:4px 12px;font-size:11px;color:#00d68f;">▣ UI自动化 (7)</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">click_element</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">type_text</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">scroll_page</div>
      <div style="padding:4px 12px;font-size:11px;color:#ffaa00;">▣ 屏幕操作 (6)</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">screenshot_full</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">find_image</div>
      <div style="padding:4px 12px;font-size:11px;color:#ff3d71;">▣ 进程管理 (5)</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">start_process</div>
      <div style="padding:4px 12px;font-size:11px;color:#7c5cff;">▣ 键盘鼠标 (6)</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">press_key</div>
      <div style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;">mouse_move</div>
    </div>
    <!-- 终端输出 -->
    <div style="flex:1;background:#08090f;padding:12px;font-family:'SF Mono','Fira Code',monospace;font-size:11px;line-height:1.6;overflow:hidden;">
      <div style="color:#5c6a8a;">$ MCP Server v2.0.0 — stdio transport</div>
      <div style="color:#00d68f;">✓ Server initialized on stdio</div>
      <div style="color:#00d68f;">✓ Registered 32 tools</div>
      <div style="color:#5c6a8a;margin-top:8px;">─── AI Agent Request ───</div>
      <div style="color:#e8edf5;">→ <span style="color:#00e5ff;">call_tool</span>(<span style="color:#ffaa00;">"enum_windows"</span>, {})</div>
      <div style="color:#5c6a8a;">Executing enum_windows...</div>
      <div style="color:#a3b1cc;">Found 14 active windows:</div>
      <div style="color:#a3b1cc;">  [0] Chrome — "GitHub Dashboard"</div>
      <div style="color:#00d68f;">  [1] Code — "project-detail.html - Visual Studio Code"</div>
      <div style="color:#a3b1cc;">  [2] Explorer — "完成项目"</div>
      <div style="color:#a3b1cc;">  [3] Terminal — "PowerShell"</div>
      <div style="color:#a3b1cc;">  [4] Spotify — "Aurora Music"</div>
      <div style="color:#5c6a8a;">  ... 9 more</div>
      <div style="color:#00d68f;">✓ Result returned (14 items, 32ms)</div>
      <div style="color:#5c6a8a;margin-top:8px;">─── AI Agent Request ───</div>
      <div style="color:#e8edf5;">→ <span style="color:#00e5ff;">call_tool</span>(<span style="color:#ffaa00;">"screenshot_window"</span>, {title: <span style="color:#ffaa00;">"VS Code"</span>})</div>
      <div style="color:#5c6a8a;">Activating window...</div>
      <div style="color:#5c6a8a;">Capturing screenshot (1920x1080)...</div>
      <div style="color:#00d68f;">✓ Screenshot saved (2.1MB, 145ms)</div>
      <div style="color:#5c6a8a;margin-top:8px;">─── AI Agent Request ───</div>
      <div style="color:#e8edf5;">→ <span style="color:#00e5ff;">call_tool</span>(<span style="color:#ffaa00;">"click_element"</span>, {selector: <span style="color:#ffaa00;">"#run-btn"</span>})</div>
      <div style="color:#5c6a8a;">Locating element...</div>
      <div style="color:#00d68f;">✓ Click executed at (340, 287)</div>
      <div style="display:flex;align-items:center;gap:4px;margin-top:8px;color:#00d68f;">
        <span style="animation:mock-blink 1s infinite;">▊</span>
        <span style="color:#5c6a8a;">Ready for next command...</span>
      </div>
    </div>
  </div>
</div>`,

// ========== 5. 智能代码审查 ==========
'code-review': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">智能代码审查系统 — Code Review AI</span>
  </div>
  <div class="mockup-body" style="display:flex;height:420px;">
    <!-- 代码编辑器 -->
    <div style="flex:1;background:#0d1117;display:flex;flex-direction:column;">
      <!-- 文件标签 -->
      <div style="display:flex;background:#161b22;border-bottom:1px solid rgba(255,255,255,0.06);">
        <div style="padding:8px 16px;font-size:11px;color:#ffaa00;border-bottom:2px solid #ffaa00;">auth.py</div>
        <div style="padding:8px 16px;font-size:11px;color:#5c6a8a;">utils.py</div>
        <div style="padding:8px 16px;font-size:11px;color:#5c6a8a;">models.py</div>
      </div>
      <!-- 代码内容 -->
      <div style="flex:1;padding:12px;font-family:monospace;font-size:11px;line-height:1.8;overflow:hidden;">
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">1</span><span style="color:#ff7b72;">import</span> <span style="color:#a3b1cc;">sqlite3</span></div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">2</span></div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">3</span><span style="color:#ff7b72;">def</span> <span style="color:#d2a8ff;">login</span>(username, password):</div>
        <div style="display:flex;background:rgba(255,61,113,0.08);border-left:2px solid #ff3d71;"><span style="color:#ff3d71;width:24px;">4</span><span style="color:#a3b1cc;">  </span><span style="color:#ff7b72;">  query</span> = <span style="color:#a5d6ff;">f"SELECT * FROM users WHERE name='{username}'"</span></div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">5</span><span style="color:#a3b1cc;">  </span><span style="color:#ff7b72;">  conn</span> = sqlite3.<span style="color:#d2a8ff;">connect</span>(<span style="color:#a5d6ff;">'db.sqlite'</span>)</div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">6</span><span style="color:#a3b1cc;">  </span><span style="color:#ff7b72;">  result</span> = conn.<span style="color:#d2a8ff;">execute</span>(query).<span style="color:#d2a8ff;">fetchone</span>()</div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">7</span><span style="color:#a3b1cc;">  </span><span style="color:#ff7b72;">  if</span> result:</div>
        <div style="display:flex;background:rgba(255,170,0,0.08);border-left:2px solid #ffaa00;"><span style="color:#ffaa00;width:24px;">8</span><span style="color:#a3b1cc;">    </span><span style="color:#ff7b72;">    return</span> <span style="color:#79c0ff;">True</span>  <span style="color:#8b949e;"># 密码未验证</span></div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">9</span><span style="color:#a3b1cc;">  </span><span style="color:#ff7b72;">  return</span> <span style="color:#79c0ff;">False</span></div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">10</span></div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">11</span><span style="color:#ff7b72;">def</span> <span style="color:#d2a8ff;">register</span>(user, pwd):</div>
        <div style="display:flex;background:rgba(255,61,113,0.08);border-left:2px solid #ff3d71;"><span style="color:#ff3d71;width:24px;">12</span><span style="color:#a3b1cc;">  </span><span style="color:#ff7b72;">  conn</span>.<span style="color:#d2a8ff;">execute</span>(<span style="color:#a5d6ff;">f"INSERT INTO users VALUES('{user}','{pwd}')"</span>)</div>
        <div style="display:flex;"><span style="color:#5c6a8a;width:24px;">13</span><span style="color:#a3b1cc;">  </span><span style="color:#ff7b72;">  conn</span>.<span style="color:#d2a8ff;">commit</span>()</div>
      </div>
    </div>
    <!-- 右侧缺陷面板 -->
    <div style="width:240px;background:#0d1117;border-left:1px solid rgba(255,255,255,0.06);padding:12px;overflow-y:auto;">
      <div style="font-size:11px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">检测结果</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <div style="background:rgba(255,61,113,0.15);padding:4px 10px;border-radius:4px;"><span style="color:#ff3d71;font-size:16px;font-weight:700;">2</span><span style="color:#5c6a8a;font-size:10px;"> 高危</span></div>
        <div style="background:rgba(255,170,0,0.15);padding:4px 10px;border-radius:4px;"><span style="color:#ffaa00;font-size:16px;font-weight:700;">1</span><span style="color:#5c6a8a;font-size:10px;"> 中危</span></div>
      </div>
      <!-- 缺陷1 -->
      <div style="background:#161b22;border:1px solid rgba(255,61,113,0.3);border-radius:8px;padding:10px;margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="font-size:10px;color:#ff3d71;font-weight:600;">🔴 SQL注入</span>
          <span style="font-size:9px;color:#5c6a8a;">L4</span>
        </div>
        <div style="font-size:10px;color:#a3b1cc;margin-bottom:6px;">f-string直接拼接SQL，存在注入风险</div>
        <div style="background:#0d1117;border-radius:4px;padding:6px;font-family:monospace;font-size:9px;color:#00d68f;">query = "SELECT * FROM users WHERE name=?"<br>cursor.execute(query, (username,))</div>
        <button style="margin-top:6px;width:100%;background:#ff3d71;color:#fff;border:none;padding:4px;border-radius:4px;font-size:10px;cursor:pointer;">应用修复</button>
      </div>
      <!-- 缺陷2 -->
      <div style="background:#161b22;border:1px solid rgba(255,61,113,0.3);border-radius:8px;padding:10px;margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="font-size:10px;color:#ff3d71;font-weight:600;">🔴 SQL注入</span>
          <span style="font-size:9px;color:#5c6a8a;">L12</span>
        </div>
        <div style="font-size:10px;color:#a3b1cc;margin-bottom:6px;">INSERT语句使用f-string拼接</div>
        <button style="margin-top:4px;width:100%;background:#ff3d71;color:#fff;border:none;padding:4px;border-radius:4px;font-size:10px;cursor:pointer;">应用修复</button>
      </div>
      <!-- 缺陷3 -->
      <div style="background:#161b22;border:1px solid rgba(255,170,0,0.3);border-radius:8px;padding:10px;">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="font-size:10px;color:#ffaa00;font-weight:600;">🟡 逻辑缺陷</span>
          <span style="font-size:9px;color:#5c6a8a;">L8</span>
        </div>
        <div style="font-size:10px;color:#a3b1cc;">返回True前未验证密码，认证绕过</div>
        <button style="margin-top:6px;width:100%;background:#ffaa00;color:#000;border:none;padding:4px;border-radius:4px;font-size:10px;cursor:pointer;">应用修复</button>
      </div>
    </div>
  </div>
</div>`,

// ========== 6. 电商AI自动化 ==========
'ecommerce-ai': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">多平台电商AI自动化系统 — 管理后台</span>
  </div>
  <div class="mockup-body" style="height:420px;background:#0d1117;">
    <!-- 平台标签 -->
    <div style="display:flex;gap:4px;padding:10px 12px;background:#161b22;border-bottom:1px solid rgba(255,255,255,0.06);">
      <div style="padding:6px 14px;background:rgba(255,61,113,0.15);border:1px solid #ff3d71;border-radius:6px;font-size:11px;color:#ff3d71;cursor:pointer;">🛒 淘宝</div>
      <div style="padding:6px 14px;font-size:11px;color:#a3b1cc;cursor:pointer;">🎵 抖音</div>
      <div style="padding:6px 14px;font-size:11px;color:#a3b1cc;cursor:pointer;">🟠 拼多多</div>
      <div style="padding:6px 14px;font-size:11px;color:#a3b1cc;cursor:pointer;">💬 微信</div>
      <div style="margin-left:auto;padding:6px 14px;background:#00d68f;color:#000;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;">+ 采集商品</div>
    </div>
    <!-- 统计栏 -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:12px;">
      <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#ff3d71;">1,247</div><div style="font-size:9px;color:#5c6a8a;">已采集商品</div></div>
      <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00d68f;">892</div><div style="font-size:9px;color:#5c6a8a;">AI文案生成</div></div>
      <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00e5ff;">456</div><div style="font-size:9px;color:#5c6a8a;">已上架</div></div>
      <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#ffaa00;">98%</div><div style="font-size:9px;color:#5c6a8a;">合规通过率</div></div>
    </div>
    <!-- 商品列表 -->
    <div style="padding:0 12px;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">商品队列</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <!-- 商品1 -->
        <div style="display:flex;align-items:center;gap:10px;background:#161b22;border-radius:8px;padding:8px;">
          <div style="width:40px;height:40px;border-radius:6px;background:linear-gradient(135deg,#ff3d71,#ffaa00);display:flex;align-items:center;justify-content:center;font-size:16px;">👕</div>
          <div style="flex:1;">
            <div style="font-size:11px;color:#e8edf5;">夏季纯棉T恤 短袖百搭</div>
            <div style="font-size:9px;color:#5c6a8a;">采集于: 淘宝 | ¥29.9 | 销量: 1.2万+</div>
          </div>
          <div style="display:flex;gap:4px;">
            <span style="background:rgba(0,214,143,0.15);color:#00d68f;padding:2px 6px;border-radius:3px;font-size:9px;">✓ AI文案</span>
            <span style="background:rgba(0,229,255,0.15);color:#00e5ff;padding:2px 6px;border-radius:3px;font-size:9px;">✓ 图片处理</span>
            <span style="background:rgba(255,61,113,0.15);color:#ff3d71;padding:2px 6px;border-radius:3px;font-size:9px;">上架中</span>
          </div>
        </div>
        <!-- 商品2 -->
        <div style="display:flex;align-items:center;gap:10px;background:#161b22;border-radius:8px;padding:8px;">
          <div style="width:40px;height:40px;border-radius:6px;background:linear-gradient(135deg,#7c5cff,#00e5ff);display:flex;align-items:center;justify-content:center;font-size:16px;">🎧</div>
          <div style="flex:1;">
            <div style="font-size:11px;color:#e8edf5;">蓝牙耳机 降噪长续航</div>
            <div style="font-size:9px;color:#5c6a8a;">采集于: 抖音 | ¥89.0 | 销量: 5000+</div>
          </div>
          <div style="display:flex;gap:4px;">
            <span style="background:rgba(0,214,143,0.15);color:#00d68f;padding:2px 6px;border-radius:3px;font-size:9px;">✓ AI文案</span>
            <span style="background:rgba(255,170,0,0.15);color:#ffaa00;padding:2px 6px;border-radius:3px;font-size:9px;">图片处理中</span>
          </div>
        </div>
        <!-- 商品3 -->
        <div style="display:flex;align-items:center;gap:10px;background:#161b22;border-radius:8px;padding:8px;">
          <div style="width:40px;height:40px;border-radius:6px;background:linear-gradient(135deg,#00d68f,#00e5ff);display:flex;align-items:center;justify-content:center;font-size:16px;">📱</div>
          <div style="flex:1;">
            <div style="font-size:11px;color:#e8edf5;">手机壳 硅胶防摔全包</div>
            <div style="font-size:9px;color:#5c6a8a;">采集于: 拼多多 | ¥12.9 | 销量: 3万+</div>
          </div>
          <div style="display:flex;gap:4px;">
            <span style="background:rgba(0,214,143,0.15);color:#00d68f;padding:2px 6px;border-radius:3px;font-size:9px;">✓ AI文案</span>
            <span style="background:rgba(0,229,255,0.15);color:#00e5ff;padding:2px 6px;border-radius:3px;font-size:9px;">✓ 图片处理</span>
            <span style="background:rgba(0,214,143,0.15);color:#00d68f;padding:2px 6px;border-radius:3px;font-size:9px;">✓ 已上架</span>
          </div>
        </div>
        <!-- 商品4 -->
        <div style="display:flex;align-items:center;gap:10px;background:#161b22;border-radius:8px;padding:8px;">
          <div style="width:40px;height:40px;border-radius:6px;background:linear-gradient(135deg,#ffaa00,#ff3d71);display:flex;align-items:center;justify-content:center;font-size:16px;">⌚</div>
          <div style="flex:1;">
            <div style="font-size:11px;color:#e8edf5;">智能手表 运动健康监测</div>
            <div style="font-size:9px;color:#5c6a8a;">采集于: 淘宝 | ¥199.0 | 销量: 8000+</div>
          </div>
          <div style="display:flex;gap:4px;">
            <span style="background:rgba(255,170,0,0.15);color:#ffaa00;padding:2px 6px;border-radius:3px;font-size:9px;">AI文案中...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,

// ========== 7. 嵌入式IoT ==========
'iot-embedded': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">嵌入式IoT多场景系统 — 传感器数据实时监控</span>
  </div>
  <div class="mockup-body" style="display:flex;height:420px;background:#0d1117;">
    <!-- 左侧3D姿态可视化 -->
    <div style="width:240px;background:#08090f;display:flex;flex-direction:column;align-items:center;justify-content:center;border-right:1px solid rgba(255,255,255,0.06);">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">MPU6050 姿态</div>
      <!-- CSS 3D Cube -->
      <div style="width:80px;height:80px;perspective:300px;margin-bottom:16px;">
        <div style="width:100%;height:100%;position:relative;transform-style:preserve-3d;animation:mock-rotate 8s linear infinite;">
          <div style="position:absolute;width:80px;height:80px;background:rgba(0,229,255,0.15);border:1px solid #00e5ff;"></div>
          <div style="position:absolute;width:80px;height:80px;background:rgba(0,214,143,0.15);border:1px solid #00d68f;transform:rotateY(90deg) translateZ(40px);"></div>
          <div style="position:absolute;width:80px;height:80px;background:rgba(124,92,255,0.15);border:1px solid #7c5cff;transform:rotateX(90deg) translateZ(40px);"></div>
          <div style="position:absolute;width:80px;height:80px;background:rgba(0,229,255,0.1);border:1px solid #00e5ff;transform:rotateY(180deg) translateZ(40px);"></div>
          <div style="position:absolute;width:80px;height:80px;background:rgba(0,214,143,0.1);border:1px solid #00d68f;transform:rotateY(-90deg) translateZ(40px);"></div>
          <div style="position:absolute;width:80px;height:80px;background:rgba(124,92,255,0.1);border:1px solid #7c5cff;transform:rotateX(-90deg) translateZ(40px);"></div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;width:100%;padding:0 12px;">
        <div style="background:#161b22;border-radius:6px;padding:6px;text-align:center;">
          <div style="font-size:11px;font-weight:700;color:#00e5ff;font-family:monospace;">Roll: 12.3°</div>
          <div style="font-size:8px;color:#5c6a8a;">X轴</div>
        </div>
        <div style="background:#161b22;border-radius:6px;padding:6px;text-align:center;">
          <div style="font-size:11px;font-weight:700;color:#00d68f;font-family:monospace;">Pitch: -5.7°</div>
          <div style="font-size:8px;color:#5c6a8a;">Y轴</div>
        </div>
        <div style="background:#161b22;border-radius:6px;padding:6px;text-align:center;">
          <div style="font-size:11px;font-weight:700;color:#7c5cff;font-family:monospace;">Yaw: 45.2°</div>
          <div style="font-size:8px;color:#5c6a8a;">Z轴</div>
        </div>
        <div style="background:#161b22;border-radius:6px;padding:6px;text-align:center;">
          <div style="font-size:11px;font-weight:700;color:#ffaa00;font-family:monospace;">20Hz</div>
          <div style="font-size:8px;color:#5c6a8a;">采样率</div>
        </div>
      </div>
      <div style="margin-top:8px;padding:4px 10px;background:rgba(0,214,143,0.1);border-radius:4px;font-size:9px;color:#00d68f;">● ESP32 已连接</div>
    </div>
    <!-- 右侧传感器数据 -->
    <div style="flex:1;padding:12px;overflow:hidden;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">环境传感器</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
        <div style="background:#161b22;border-radius:8px;padding:12px;text-align:center;">
          <div style="font-size:24px;font-weight:700;color:#ff3d71;font-family:monospace;">26.4°C</div>
          <div style="font-size:9px;color:#5c6a8a;">温度 (DHT11)</div>
        </div>
        <div style="background:#161b22;border-radius:8px;padding:12px;text-align:center;">
          <div style="font-size:24px;font-weight:700;color:#00e5ff;font-family:monospace;">62%</div>
          <div style="font-size:9px;color:#5c6a8a;">湿度 (DHT11)</div>
        </div>
        <div style="background:#161b22;border-radius:8px;padding:12px;text-align:center;">
          <div style="font-size:24px;font-weight:700;color:#00d68f;font-family:monospace;">38cm</div>
          <div style="font-size:9px;color:#5c6a8a;">距离 (HC-SR04)</div>
        </div>
      </div>
      <!-- 实时波形图 -->
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">实时数据流</div>
      <div style="background:#08090f;border-radius:8px;padding:12px;height:140px;position:relative;overflow:hidden;">
        <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
          <polyline points="0,50 20,45 40,52 60,38 80,42 100,30 120,35 140,25 160,32 180,20 200,28 220,15 240,22 260,10 280,18 300,8" fill="none" stroke="#00e5ff" stroke-width="1.5"/>
          <polyline points="0,60 20,55 40,58 60,52 80,50 100,48 120,52 140,46 160,44 180,42 160,40 200,38 220,36 240,34 260,32 280,30 300,28" fill="none" stroke="#ff3d71" stroke-width="1.5"/>
          <polyline points="0,70 20,68 40,72 60,66 80,70 100,64 120,68 140,62 160,66 180,60 200,64 220,58 240,62 260,56 280,60 300,54" fill="none" stroke="#00d68f" stroke-width="1.5"/>
        </svg>
        <div style="position:absolute;top:8px;right:8px;display:flex;gap:8px;">
          <span style="font-size:9px;color:#00e5ff;">━ 温度</span>
          <span style="font-size:9px;color:#ff3d71;">━ 湿度</span>
          <span style="font-size:9px;color:#00d68f;">━ 距离</span>
        </div>
      </div>
      <!-- 设备状态 -->
      <div style="display:flex;gap:8px;margin-top:10px;">
        <div style="flex:1;background:#161b22;border-radius:6px;padding:6px;display:flex;align-items:center;gap:4px;"><span style="color:#00d68f;">●</span><span style="font-size:10px;color:#a3b1cc;">DHT11</span></div>
        <div style="flex:1;background:#161b22;border-radius:6px;padding:6px;display:flex;align-items:center;gap:4px;"><span style="color:#00d68f;">●</span><span style="font-size:10px;color:#a3b1cc;">HC-SR04</span></div>
        <div style="flex:1;background:#161b22;border-radius:6px;padding:6px;display:flex;align-items:center;gap:4px;"><span style="color:#00d68f;">●</span><span style="font-size:10px;color:#a3b1cc;">MPU6050</span></div>
        <div style="flex:1;background:#161b22;border-radius:6px;padding:6px;display:flex;align-items:center;gap:4px;"><span style="color:#00d68f;">●</span><span style="font-size:10px;color:#a3b1cc;">光敏</span></div>
      </div>
      <div style="margin-top:8px;padding:6px;background:rgba(255,170,0,0.1);border-radius:6px;font-size:10px;color:#ffaa00;">⚠ 距离 < 50cm，触发近距离报警</div>
    </div>
  </div>
</div>`,

// ========== 8. YOLOv5 人体检测 ==========
'yolov5': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">YOLOv5 人体目标检测 — 检测结果与GradCAM可视化</span>
  </div>
  <div class="mockup-body" style="height:420px;background:#0d1117;padding:12px;">
    <!-- 检测结果网格 -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
      <!-- 图1 -->
      <div style="background:#08090f;border-radius:8px;overflow:hidden;position:relative;height:120px;">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,#1a2a3a,#2a3a4a);"></div>
        <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:15px 15px;"></div>
        <div style="position:absolute;top:20%;left:20%;width:18px;height:50px;border:2px solid #00d68f;"><span style="position:absolute;top:-14px;left:0;background:#00d68f;color:#000;font-size:8px;padding:1px 4px;">person 0.94</span></div>
        <div style="position:absolute;top:25%;left:55%;width:16px;height:45px;border:2px solid #00d68f;"><span style="position:absolute;top:-14px;left:0;background:#00d68f;color:#000;font-size:8px;padding:1px 4px;">person 0.87</span></div>
        <div style="position:absolute;bottom:4px;right:4px;background:rgba(0,0,0,0.7);padding:2px 6px;border-radius:3px;font-size:8px;color:#00e5ff;">street_001.jpg</div>
      </div>
      <!-- 图2 -->
      <div style="background:#08090f;border-radius:8px;overflow:hidden;position:relative;height:120px;">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,#2a3a2a,#1a2a1a);"></div>
        <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:15px 15px;"></div>
        <div style="position:absolute;top:30%;left:30%;width:20px;height:48px;border:2px solid #00e5ff;"><span style="position:absolute;top:-14px;left:0;background:#00e5ff;color:#000;font-size:8px;padding:1px 4px;">person 0.91</span></div>
        <div style="position:absolute;top:35%;left:60%;width:18px;height:42px;border:2px solid #00e5ff;"><span style="position:absolute;top:-14px;left:0;background:#00e5ff;color:#000;font-size:8px;padding:1px 4px;">person 0.83</span></div>
        <div style="position:absolute;bottom:4px;right:4px;background:rgba(0,0,0,0.7);padding:2px 6px;border-radius:3px;font-size:8px;color:#00e5ff;">park_003.jpg</div>
      </div>
      <!-- 图3 - GradCAM -->
      <div style="background:#08090f;border-radius:8px;overflow:hidden;position:relative;height:120px;">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,#3a1a1a,#2a0a0a);"></div>
        <!-- GradCAM热力图效果 -->
        <div style="position:absolute;top:20%;left:15%;width:25px;height:55px;background:radial-gradient(ellipse,rgba(255,0,0,0.6),rgba(255,200,0,0.3),transparent);border-radius:50%;"></div>
        <div style="position:absolute;top:25%;left:55%;width:22px;height:50px;background:radial-gradient(ellipse,rgba(255,100,0,0.5),rgba(255,200,0,0.2),transparent);border-radius:50%;"></div>
        <div style="position:absolute;top:0;left:0;right:0;background:rgba(0,0,0,0.7);padding:2px 6px;font-size:8px;color:#ffaa00;text-align:center;">🔥 GradCAM 热力图</div>
        <div style="position:absolute;bottom:4px;right:4px;background:rgba(0,0,0,0.7);padding:2px 6px;border-radius:3px;font-size:8px;color:#ffaa00;">gradcam_005.jpg</div>
      </div>
    </div>
    <!-- 统计面板 -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;">
      <div style="background:#161b22;border-radius:8px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:700;color:#00d68f;">50+</div>
        <div style="font-size:9px;color:#5c6a8a;">标注样本</div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:700;color:#00e5ff;">0.91</div>
        <div style="font-size:9px;color:#5c6a8a;">平均置信度</div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:700;color:#ffaa00;">2版本</div>
        <div style="font-size:9px;color:#5c6a8a;">对比实验</div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:700;color:#ff3d71;">GradCAM</div>
        <div style="font-size:9px;color:#5c6a8a;">可解释性</div>
      </div>
    </div>
    <!-- 模型对比 -->
    <div style="background:#161b22;border-radius:8px;padding:12px;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">模型对比</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:11px;color:#00d68f;width:80px;">YOLOv5s</span>
          <div style="flex:1;height:8px;background:rgba(255,255,255,0.1);border-radius:4px;"><div style="width:82%;height:100%;background:#00d68f;border-radius:4px;"></div></div>
          <span style="font-size:10px;color:#a3b1cc;width:40px;">mAP 0.82</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:11px;color:#00e5ff;width:80px;">YOLOv5s6</span>
          <div style="flex:1;height:8px;background:rgba(255,255,255,0.1);border-radius:4px;"><div style="width:87%;height:100%;background:#00e5ff;border-radius:4px;"></div></div>
          <span style="font-size:10px;color:#a3b1cc;width:40px;">mAP 0.87</span>
        </div>
      </div>
    </div>
  </div>
</div>`,

// ========== 9. 花卉分类 ==========
'flower-classification': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">PyTorch花卉分类系统 — 102类细粒度分类</span>
  </div>
  <div class="mockup-body" style="display:flex;height:420px;background:#0d1117;">
    <!-- 左侧图片网格 -->
    <div style="flex:1;padding:12px;overflow:hidden;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">分类结果</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        <!-- 花1 -->
        <div style="background:#161b22;border-radius:8px;overflow:hidden;">
          <div style="height:60px;background:linear-gradient(135deg,#ff6b9d,#c44569);display:flex;align-items:center;justify-content:center;font-size:28px;">🌹</div>
          <div style="padding:6px;">
            <div style="font-size:9px;color:#00d68f;font-weight:600;">玫瑰</div>
            <div style="font-size:8px;color:#5c6a8a;">conf: 98.2%</div>
          </div>
        </div>
        <!-- 花2 -->
        <div style="background:#161b22;border-radius:8px;overflow:hidden;">
          <div style="height:60px;background:linear-gradient(135deg,#ffd93d,#f6a623);display:flex;align-items:center;justify-content:center;font-size:28px;">🌻</div>
          <div style="padding:6px;">
            <div style="font-size:9px;color:#00d68f;font-weight:600;">向日葵</div>
            <div style="font-size:8px;color:#5c6a8a;">conf: 95.7%</div>
          </div>
        </div>
        <!-- 花3 -->
        <div style="background:#161b22;border-radius:8px;overflow:hidden;">
          <div style="height:60px;background:linear-gradient(135deg,#a8e6cf,#88d8a3);display:flex;align-items:center;justify-content:center;font-size:28px;">🌷</div>
          <div style="padding:6px;">
            <div style="font-size:9px;color:#00d68f;font-weight:600;">郁金香</div>
            <div style="font-size:8px;color:#5c6a8a;">conf: 93.1%</div>
          </div>
        </div>
        <!-- 花4 -->
        <div style="background:#161b22;border-radius:8px;overflow:hidden;">
          <div style="height:60px;background:linear-gradient(135deg,#dda0dd,#9966cc);display:flex;align-items:center;justify-content:center;font-size:28px;">🌼</div>
          <div style="padding:6px;">
            <div style="font-size:9px;color:#ffaa00;font-weight:600;">雏菊</div>
            <div style="font-size:8px;color:#5c6a8a;">conf: 76.3%</div>
          </div>
        </div>
        <!-- 花5 -->
        <div style="background:#161b22;border-radius:8px;overflow:hidden;">
          <div style="height:60px;background:linear-gradient(135deg,#ffb3ba,#ff8a95);display:flex;align-items:center;justify-content:center;font-size:28px;">🌸</div>
          <div style="padding:6px;">
            <div style="font-size:9px;color:#00d68f;font-weight:600;">樱花</div>
            <div style="font-size:8px;color:#5c6a8a;">conf: 91.5%</div>
          </div>
        </div>
        <!-- 花6 -->
        <div style="background:#161b22;border-radius:8px;overflow:hidden;">
          <div style="height:60px;background:linear-gradient(135deg,#c9b1ff,#a880e6);display:flex;align-items:center;justify-content:center;font-size:28px;">🌺</div>
          <div style="padding:6px;">
            <div style="font-size:9px;color:#00d68f;font-weight:600;">木槿</div>
            <div style="font-size:8px;color:#5c6a8a;">conf: 88.9%</div>
          </div>
        </div>
      </div>
      <!-- 上传区 -->
      <div style="margin-top:10px;border:1px dashed rgba(255,255,255,0.15);border-radius:8px;padding:12px;text-align:center;">
        <div style="font-size:24px;margin-bottom:4px;">📁</div>
        <div style="font-size:10px;color:#5c6a8a;">拖拽图片到此处或点击上传</div>
        <div style="font-size:9px;color:#5c6a8a;margin-top:2px;">支持 JPG, PNG, BMP</div>
      </div>
    </div>
    <!-- 右侧Top-5 -->
    <div style="width:220px;background:#161b22;border-left:1px solid rgba(255,255,255,0.06);padding:12px;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Top-5 预测</div>
      <div style="text-align:center;margin-bottom:12px;">
        <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#ff6b9d,#c44569);margin:0 auto 8px;display:flex;align-items:center;justify-content:center;font-size:28px;">🌹</div>
        <div style="font-size:12px;color:#e8edf5;font-weight:600;">玫瑰</div>
        <div style="font-size:10px;color:#00d68f;">Rosa gallica</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:2px;"><span style="color:#00d68f;">1. 玫瑰</span><span style="color:#a3b1cc;">98.2%</span></div>
          <div style="height:5px;background:rgba(255,255,255,0.1);border-radius:3px;"><div style="width:98%;height:100%;background:#00d68f;border-radius:3px;"></div></div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:2px;"><span style="color:#a3b1cc;">2. 月季</span><span style="color:#5c6a8a;">1.1%</span></div>
          <div style="height:5px;background:rgba(255,255,255,0.1);border-radius:3px;"><div style="width:1%;height:100%;background:#a3b1cc;border-radius:3px;"></div></div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:2px;"><span style="color:#a3b1cc;">3. 山茶</span><span style="color:#5c6a8a;">0.4%</span></div>
          <div style="height:5px;background:rgba(255,255,255,0.1);border-radius:3px;"><div style="width:0.4%;height:100%;background:#a3b1cc;border-radius:3px;"></div></div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:2px;"><span style="color:#a3b1cc;">4. 芍药</span><span style="color:#5c6a8a;">0.2%</span></div>
          <div style="height:5px;background:rgba(255,255,255,0.1);border-radius:3px;"><div style="width:0.2%;height:100%;background:#a3b1cc;border-radius:3px;"></div></div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:2px;"><span style="color:#a3b1cc;">5. 牡丹</span><span style="color:#5c6a8a;">0.1%</span></div>
          <div style="height:5px;background:rgba(255,255,255,0.1);border-radius:3px;"><div style="width:0.1%;height:100%;background:#a3b1cc;border-radius:3px;"></div></div>
        </div>
      </div>
      <div style="margin-top:12px;padding:8px;background:#0d1117;border-radius:6px;">
        <div style="font-size:9px;color:#5c6a8a;">模型信息</div>
        <div style="font-size:10px;color:#00e5ff;font-family:monospace;">ResNet-50</div>
        <div style="font-size:9px;color:#5c6a8a;">Oxford 102 Flowers</div>
        <div style="font-size:9px;color:#5c6a8a;">8,189 training images</div>
      </div>
    </div>
  </div>
</div>`,

// ========== 10. RAG知识库 ==========
'rag-knowledge-base': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">企业RAG知识库 — 智能问答系统</span>
  </div>
  <div class="mockup-body" style="display:flex;height:420px;background:#0d1117;">
    <!-- 左侧知识库 -->
    <div style="width:180px;background:#0d1117;border-right:1px solid rgba(255,255,255,0.06);padding:12px;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">知识库</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <div style="background:rgba(0,229,255,0.08);padding:6px 8px;border-radius:6px;border-left:2px solid #00e5ff;">
          <div style="font-size:11px;color:#00e5ff;">📄 产品手册.pdf</div>
          <div style="font-size:9px;color:#5c6a8a;">42页 · 已索引</div>
        </div>
        <div style="padding:6px 8px;border-radius:6px;">
          <div style="font-size:11px;color:#a3b1cc;">📊 销售数据.xlsx</div>
          <div style="font-size:9px;color:#5c6a8a;">15表 · 已索引</div>
        </div>
        <div style="padding:6px 8px;border-radius:6px;">
          <div style="font-size:11px;color:#a3b1cc;">📝 技术规范.md</div>
          <div style="font-size:9px;color:#5c6a8a;">8章节 · 已索引</div>
        </div>
        <div style="padding:6px 8px;border-radius:6px;">
          <div style="font-size:11px;color:#a3b1cc;">📋 FAQ.docx</div>
          <div style="font-size:9px;color:#5c6a8a;">126条 · 已索引</div>
        </div>
        <div style="padding:6px 8px;border-radius:6px;">
          <div style="font-size:11px;color:#a3b1cc;">🌐 API文档.html</div>
          <div style="font-size:9px;color:#5c6a8a;">34页 · 已索引</div>
        </div>
      </div>
      <div style="margin-top:12px;padding:8px;background:#161b22;border-radius:6px;">
        <div style="font-size:9px;color:#5c6a8a;">检索配置</div>
        <div style="font-size:10px;color:#00d68f;">✓ BM25 + 向量</div>
        <div style="font-size:10px;color:#00d68f;">✓ Cross-Encoder</div>
        <div style="font-size:10px;color:#00e5ff;">✓ SSE流式输出</div>
      </div>
      <div style="margin-top:8px;">
        <div style="font-size:9px;color:#5c6a8a;">向量数: 12,847</div>
        <div style="font-size:9px;color:#5c6a8a;">Embedding: multilingual</div>
      </div>
    </div>
    <!-- 对话区 -->
    <div style="flex:1;display:flex;flex-direction:column;padding:12px;">
      <div style="flex:1;display:flex;flex-direction:column;gap:10px;overflow:hidden;">
        <!-- 用户提问 -->
        <div style="display:flex;justify-content:flex-end;">
          <div style="background:#7c5cff;border-radius:12px 12px 4px 12px;padding:10px 14px;font-size:12px;color:#fff;max-width:70%;">产品的保修期是多久？海外用户有区别吗？</div>
        </div>
        <!-- AI回答 -->
        <div style="display:flex;gap:8px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#00e5ff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">AI</div>
          <div style="flex:1;">
            <div style="background:#161b22;border-radius:4px 12px 12px 12px;padding:10px 14px;font-size:12px;color:#e8edf5;line-height:1.6;">
              根据产品手册，标准保修期为<span style="color:#00d68f;font-weight:600;">12个月</span>。海外用户保修期为<span style="color:#ffaa00;font-weight:600;">6个月</span>，需通过当地授权服务商进行维修。<br><br>
              <span style="color:#5c6a8a;">来源:</span><br>
              <span style="color:#00e5ff;">[1] 产品手册.pdf - 第8页 "保修条款"</span><br>
              <span style="color:#00e5ff;">[2] FAQ.docx - 第23条 "海外保修"</span>
            </div>
            <!-- 检索过程 -->
            <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
              <span style="background:rgba(0,229,255,0.1);color:#00e5ff;padding:2px 6px;border-radius:3px;font-size:9px;">BM25: 0.87</span>
              <span style="background:rgba(0,214,143,0.1);color:#00d68f;padding:2px 6px;border-radius:3px;font-size:9px;">向量: 0.92</span>
              <span style="background:rgba(124,92,255,0.1);color:#7c5cff;padding:2px 6px;border-radius:3px;font-size:9px;">重排序: #1</span>
              <span style="background:rgba(255,170,0,0.1);color:#ffaa00;padding:2px 6px;border-radius:3px;font-size:9px;">耗时: 340ms</span>
            </div>
          </div>
        </div>
        <!-- 正在输入 -->
        <div style="display:flex;gap:8px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#00e5ff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">AI</div>
          <div style="background:#161b22;border-radius:4px 12px 12px 12px;padding:10px 14px;">
            <span style="font-size:12px;color:#5c6a8a;">正在生成回答</span>
            <span style="display:inline-flex;gap:2px;margin-left:4px;">
              <span style="width:4px;height:4px;background:#00e5ff;border-radius:50%;animation:mock-blink 1s infinite;"></span>
              <span style="width:4px;height:4px;background:#00e5ff;border-radius:50%;animation:mock-blink 1s infinite 0.2s;"></span>
              <span style="width:4px;height:4px;background:#00e5ff;border-radius:50%;animation:mock-blink 1s infinite 0.4s;"></span>
            </span>
          </div>
        </div>
      </div>
      <!-- 输入框 -->
      <div style="display:flex;gap:8px;margin-top:8px;">
        <input type="text" placeholder="输入您的问题..." style="flex:1;background:#161b22;border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:10px 14px;color:#e8edf5;font-size:12px;" disabled>
        <button style="background:#00e5ff;color:#000;border:none;padding:10px 20px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">发送</button>
      </div>
    </div>
  </div>
</div>`,

// ========== 11. Hadoop大数据 ==========
'hadoop-bigdata': `
<div class="mockup-window">
  <div class="mockup-titlebar">
    <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
    <span class="mockup-title">Hadoop分布式集群 — 集群监控面板</span>
  </div>
  <div class="mockup-body" style="height:420px;background:#0d1117;padding:12px;">
    <!-- 集群概览 -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;">
      <div style="background:#161b22;border-radius:8px;padding:10px;">
        <div style="font-size:18px;font-weight:700;color:#00d68f;">4</div>
        <div style="font-size:9px;color:#5c6a8a;">节点总数</div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:10px;">
        <div style="font-size:18px;font-weight:700;color:#00e5ff;">1.2TB</div>
        <div style="font-size:9px;color:#5c6a8a;">HDFS存储</div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:10px;">
        <div style="font-size:18px;font-weight:700;color:#ffaa00;">3</div>
        <div style="font-size:9px;color:#5c6a8a;">运行中任务</div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:10px;">
        <div style="font-size:18px;font-weight:700;color:#00d68f;">100%</div>
        <div style="font-size:9px;color:#5c6a8a;">集群健康度</div>
      </div>
    </div>
    <!-- 节点状态 -->
    <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">节点状态</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;">
      <!-- NameNode -->
      <div style="background:#161b22;border:1px solid rgba(0,229,255,0.3);border-radius:8px;padding:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:600;color:#00e5ff;">NameNode</span>
          <span style="width:8px;height:8px;background:#00d68f;border-radius:50%;animation:mock-pulse 2s infinite;"></span>
        </div>
        <div style="font-size:9px;color:#5c6a8a;">192.168.1.10</div>
        <div style="margin-top:6px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>CPU</span><span>34%</span></div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-top:2px;"><div style="width:34%;height:100%;background:#00e5ff;border-radius:2px;"></div></div>
        </div>
        <div style="margin-top:4px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>内存</span><span>6.2/16GB</span></div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-top:2px;"><div style="width:39%;height:100%;background:#7c5cff;border-radius:2px;"></div></div>
        </div>
      </div>
      <!-- DataNode1 -->
      <div style="background:#161b22;border:1px solid rgba(0,214,143,0.3);border-radius:8px;padding:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:600;color:#00d68f;">DataNode 1</span>
          <span style="width:8px;height:8px;background:#00d68f;border-radius:50%;animation:mock-pulse 2s infinite 0.3s;"></span>
        </div>
        <div style="font-size:9px;color:#5c6a8a;">192.168.1.11</div>
        <div style="margin-top:6px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>CPU</span><span>67%</span></div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-top:2px;"><div style="width:67%;height:100%;background:#ffaa00;border-radius:2px;"></div></div>
        </div>
        <div style="margin-top:4px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>磁盘</span><span>412/500GB</span></div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-top:2px;"><div style="width:82%;height:100%;background:#ff3d71;border-radius:2px;"></div></div>
        </div>
      </div>
      <!-- DataNode2 -->
      <div style="background:#161b22;border:1px solid rgba(0,214,143,0.3);border-radius:8px;padding:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:600;color:#00d68f;">DataNode 2</span>
          <span style="width:8px;height:8px;background:#00d68f;border-radius:50%;animation:mock-pulse 2s infinite 0.6s;"></span>
        </div>
        <div style="font-size:9px;color:#5c6a8a;">192.168.1.12</div>
        <div style="margin-top:6px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>CPU</span><span>45%</span></div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-top:2px;"><div style="width:45%;height:100%;background:#00e5ff;border-radius:2px;"></div></div>
        </div>
        <div style="margin-top:4px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>磁盘</span><span>298/500GB</span></div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-top:2px;"><div style="width:60%;height:100%;background:#ffaa00;border-radius:2px;"></div></div>
        </div>
      </div>
      <!-- DataNode3 -->
      <div style="background:#161b22;border:1px solid rgba(0,214,143,0.3);border-radius:8px;padding:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:600;color:#00d68f;">DataNode 3</span>
          <span style="width:8px;height:8px;background:#00d68f;border-radius:50%;animation:mock-pulse 2s infinite 0.9s;"></span>
        </div>
        <div style="font-size:9px;color:#5c6a8a;">192.168.1.13</div>
        <div style="margin-top:6px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>CPU</span><span>28%</span></div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-top:2px;"><div style="width:28%;height:100%;background:#00d68f;border-radius:2px;"></div></div>
        </div>
        <div style="margin-top:4px;">
          <div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>磁盘</span><span>201/500GB</span></div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin-top:2px;"><div style="width:40%;height:100%;background:#00e5ff;border-radius:2px;"></div></div>
        </div>
      </div>
    </div>
    <!-- MapReduce任务 -->
    <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">MapReduce 任务</div>
    <div style="display:flex;flex-direction:column;gap:6px;">
      <div style="background:#161b22;border-radius:8px;padding:8px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:11px;color:#00e5ff;width:120px;">WordCount Analysis</span>
        <div style="flex:1;height:10px;background:rgba(255,255,255,0.1);border-radius:5px;overflow:hidden;">
          <div style="width:73%;height:100%;background:linear-gradient(90deg,#00e5ff,#7c5cff);border-radius:5px;animation:mock-progress 3s linear infinite;"></div>
        </div>
        <span style="font-size:10px;color:#a3b1cc;width:80px;">Map: 8/12</span>
        <span style="font-size:10px;color:#00d68f;">73%</span>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:8px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:11px;color:#ffaa00;width:120px;">Data Dedup Job</span>
        <div style="flex:1;height:10px;background:rgba(255,255,255,0.1);border-radius:5px;overflow:hidden;">
          <div style="width:45%;height:100%;background:linear-gradient(90deg,#ffaa00,#ff3d71);border-radius:5px;"></div>
        </div>
        <span style="font-size:10px;color:#a3b1cc;width:80px;">Reduce: 3/8</span>
        <span style="font-size:10px;color:#ffaa00;">45%</span>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:8px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:11px;color:#00d68f;width:120px;">Sort Benchmark</span>
        <div style="flex:1;height:10px;background:rgba(255,255,255,0.1);border-radius:5px;overflow:hidden;">
          <div style="width:100%;height:100%;background:linear-gradient(90deg,#00d68f,#00e5ff);border-radius:5px;"></div>
        </div>
        <span style="font-size:10px;color:#a3b1cc;width:80px;">Completed</span>
        <span style="font-size:10px;color:#00d68f;">✓ 100%</span>
      </div>
    </div>
  </div>
</div>`

};
