// ==========================================
// 项目可交互演示 - project-demos.js
// 基于实际项目UI复刻，全部可点击交互
// ==========================================

const DEMOS = {

// ========== 1. YOLOv8 航拍检测 — 可交互 ==========
'yolov8': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">YOLOv8 航拍目标检测系统 — Jetson Orin NX</span></div>
  <div style="display:flex;height:420px;">
    <div id="y8-canvas" style="flex:1;position:relative;background:linear-gradient(135deg,#1a2a3a,#0d1520);overflow:hidden;cursor:crosshair;">
      <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:30px 30px;"></div>
      <div id="y8-road" style="position:absolute;top:60%;left:0;right:0;height:30px;background:rgba(100,100,120,0.3);transform:rotate(-5deg);"></div>
      <div style="position:absolute;top:30%;left:20%;width:40%;height:20px;background:rgba(100,100,120,0.2);transform:rotate(15deg);"></div>
      <div id="y8-boxes" style="position:absolute;inset:0;"></div>
      <div style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,0.7);padding:4px 10px;border-radius:4px;font-family:monospace;font-size:11px;color:#00d68f;" id="y8-fps">FPS: -- | GPU: --%</div>
      <div style="position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,0.7);padding:4px 10px;border-radius:4px;font-family:monospace;font-size:11px;color:#a3b1cc;">1280x720 | FP16</div>
      <div id="y8-scan" style="display:none;position:absolute;top:0;left:0;right:0;height:2px;background:#00d68f;box-shadow:0 0 10px #00d68f;"></div>
    </div>
    <div style="width:200px;background:#0d1117;padding:12px;border-left:1px solid rgba(255,255,255,0.06);display:flex;flex-direction:column;gap:10px;">
      <div style="font-size:11px;color:#5c6a8a;font-family:monospace;text-transform:uppercase;letter-spacing:1px;">检测统计</div>
      <div class="y8-stat" style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:20px;font-weight:700;color:#00d68f;" id="y8-count">0</div><div style="font-size:10px;color:#5c6a8a;">检测目标数</div></div>
      <div class="y8-stat" style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:20px;font-weight:700;color:#00e5ff;" id="y8-fps2">0.0</div><div style="font-size:10px;color:#5c6a8a;">推理FPS</div></div>
      <div class="y8-stat" style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:20px;font-weight:700;color:#ffaa00;">+9.3%</div><div style="font-size:10px;color:#5c6a8a;">mAP提升</div></div>
      <div style="font-size:11px;color:#5c6a8a;font-family:monospace;text-transform:uppercase;letter-spacing:1px;margin-top:4px;">类别分布</div>
      <div id="y8-classes" style="display:flex;flex-direction:column;gap:4px;font-size:11px;"></div>
      <div style="margin-top:auto;display:flex;gap:6px;">
        <button id="y8-btn" style="flex:1;background:#00d68f;color:#000;border:none;padding:8px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">⏺ 开始检测</button>
      </div>
      <div style="display:flex;gap:4px;">
        <button class="y8-img-btn" data-img="0" style="flex:1;background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:4px;border-radius:4px;font-size:10px;cursor:pointer;">场景1</button>
        <button class="y8-img-btn" data-img="1" style="flex:1;background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:4px;border-radius:4px;font-size:10px;cursor:pointer;">场景2</button>
        <button class="y8-img-btn" data-img="2" style="flex:1;background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:4px;border-radius:4px;font-size:10px;cursor:pointer;">场景3</button>
      </div>
    </div>
  </div></div>`,
  init() {
    const scenes = [
      [{t:'person',c:0.92,x:'15%',y:'35%',w:24,h:48,col:'#00d68f'},{t:'car',c:0.88,x:'40%',y:'55%',w:50,h:30,col:'#00e5ff'},{t:'person',c:0.85,x:'60%',y:'25%',w:20,h:40,col:'#00d68f'},{t:'bicycle',c:0.76,x:'70%',y:'48%',w:30,h:22,col:'#ffaa00'},{t:'truck',c:0.91,x:'75%',y:'62%',w:45,h:28,col:'#ff3d71'}],
      [{t:'car',c:0.95,x:'20%',y:'40%',w:55,h:32,col:'#00e5ff'},{t:'person',c:0.89,x:'50%',y:'30%',w:22,h:44,col:'#00d68f'},{t:'person',c:0.82,x:'65%',y:'55%',w:20,h:38,col:'#00d68f'},{t:'motorcycle',c:0.78,x:'35%',y:'60%',w:35,h:25,col:'#ffaa00'}],
      [{t:'truck',c:0.93,x:'10%',y:'45%',w:60,h:35,col:'#ff3d71'},{t:'car',c:0.87,x:'50%',y:'50%',w:48,h:28,col:'#00e5ff'},{t:'person',c:0.91,x:'72%',y:'25%',w:18,h:42,col:'#00d68f'},{t:'person',c:0.84,x:'80%',y:'35%',w:20,h:40,col:'#00d68f'},{t:'bicycle',c:0.73,x:'30%',y:'65%',w:28,h:20,col:'#ffaa00'},{t:'car',c:0.90,x:'60%',y:'60%',w:45,h:26,col:'#00e5ff'}]
    ];
    let curScene = 0, detecting = false, intervalId = null;
    const boxesEl = document.getElementById('y8-boxes');
    const countEl = document.getElementById('y8-count');
    const fpsEl = document.getElementById('y8-fps');
    const fps2El = document.getElementById('y8-fps2');
    const scanEl = document.getElementById('y8-scan');
    const btn = document.getElementById('y8-btn');
    const classesEl = document.getElementById('y8-classes');

    function renderBoxes() {
      const targets = scenes[curScene];
      boxesEl.innerHTML = '';
      countEl.textContent = '0';
      classesEl.innerHTML = '';
      let shown = 0;
      targets.forEach((t, i) => {
        setTimeout(() => {
          if (!detecting) return;
          const box = document.createElement('div');
          box.style.cssText = `position:absolute;top:${t.y};left:${t.x};width:${t.w}px;height:${t.h}px;border:2px solid ${t.col};border-radius:2px;animation:demo-pulse 2s infinite;`;
          const label = document.createElement('span');
          label.style.cssText = `position:absolute;top:-16px;left:-2px;background:${t.col};color:${t.col==='#ff3d71'?'#fff':'#000'};font-size:9px;padding:1px 4px;border-radius:2px;font-family:monospace;font-weight:600;white-space:nowrap;`;
          label.textContent = `${t.t} ${t.c}`;
          box.appendChild(label);
          box.onclick = () => { box.style.borderColor = '#fff'; setTimeout(()=>box.style.borderColor=t.col, 300); };
          boxesEl.appendChild(box);
          shown++;
          countEl.textContent = shown;
          const fps = (15 + Math.random() * 5).toFixed(1);
          fpsEl.textContent = `FPS: ${fps} | GPU: ${Math.floor(60+Math.random()*20)}%`;
          fps2El.textContent = fps;
          updateClasses(targets.slice(0, shown));
        }, i * 300);
      });
    }
    function updateClasses(targets) {
      const counts = {};
      targets.forEach(t => counts[t.t] = (counts[t.t]||0)+1);
      const colors = {person:'#00d68f',car:'#00e5ff',bicycle:'#ffaa00',truck:'#ff3d71',motorcycle:'#ffaa00'};
      classesEl.innerHTML = Object.entries(counts).map(([k,v])=>`<div style="display:flex;justify-content:space-between;"><span style="color:${colors[k]||'#a3b1cc'};">● ${k}</span><span style="color:#a3b1cc;">${v}</span></div>`).join('');
    }
    btn.onclick = () => {
      if (detecting) { detecting=false; btn.textContent='⏺ 开始检测'; btn.style.background='#00d68f'; scanEl.style.display='none'; clearInterval(intervalId); return; }
      detecting=true; btn.textContent='⏹ 停止检测'; btn.style.background='#ff3d71';
      scanEl.style.display='block';
      let pos=0;
      intervalId=setInterval(()=>{ pos=(pos+2)%420; scanEl.style.top=pos+'px'; }, 30);
      renderBoxes();
    };
    document.querySelectorAll('.y8-img-btn').forEach(b => {
      b.onclick = () => {
        document.querySelectorAll('.y8-img-btn').forEach(x=>x.style.background='#161b22');
        b.style.background='rgba(0,229,255,0.2)';
        curScene = parseInt(b.dataset.img);
        if (detecting) renderBoxes();
      };
    });
    document.querySelector('.y8-img-btn').click();
  }
},

// ========== 2. ZAEP 企业AI中台 — 可交互 ==========
'zaep': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">ZAEP 企业AI中台 v4.3.0</span></div>
  <div style="display:flex;height:420px;">
    <div id="zaep-side" style="width:180px;background:#0d1117;border-right:1px solid rgba(255,255,255,0.06);padding:8px 0;overflow-y:auto;font-size:12px;"></div>
    <div style="flex:1;display:flex;flex-direction:column;">
      <div id="zaep-top" style="padding:8px 16px;background:#161b22;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;align-items:center;">
        <span id="zaep-pagetitle" style="font-size:14px;font-weight:600;color:#e8edf5;">仪表盘</span>
        <div style="display:flex;gap:6px;"><span style="background:rgba(0,214,143,0.15);color:#00d68f;padding:2px 8px;border-radius:4px;font-size:10px;">● 在线</span></div>
      </div>
      <div id="zaep-content" style="flex:1;padding:16px;overflow-y:auto;"></div>
    </div>
  </div></div>`,
  init() {
    const menu = [
      {id:'dashboard',icon:'📊',name:'仪表盘'},
      {id:'chat',icon:'🤖',name:'智能体对话'},
      {id:'workflow',icon:'⚡',name:'工作流'},
      {id:'knowledge',icon:'📚',name:'知识库'},
      {id:'trade',icon:'🌍',name:'外贸业务'},
      {id:'marketing',icon:'📢',name:'智能营销'},
      {id:'monitor',icon:'📡',name:'系统监控'},
      {id:'models',icon:'🧠',name:'模型管理'}
    ];
    const sideEl = document.getElementById('zaep-side');
    const contentEl = document.getElementById('zaep-content');
    const titleEl = document.getElementById('zaep-pagetitle');
    sideEl.innerHTML = '<div style="padding:8px 12px;font-weight:700;color:#7c5cff;font-size:13px;">🏢 ZAEP</div>' + menu.map(m=>`<div class="zaep-menu" data-id="${m.id}" style="padding:8px 12px;color:#a3b1cc;cursor:pointer;border-left:2px solid transparent;">${m.icon} ${m.name}</div>`).join('');

    const pages = {
      dashboard: () => `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px;">
        <div class="zaep-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;font-weight:700;color:#00e5ff;">8</div><div style="font-size:9px;color:#5c6a8a;">核心模块</div></div>
        <div class="zaep-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;font-weight:700;color:#00d68f;">127</div><div style="font-size:9px;color:#5c6a8a;">今日任务</div></div>
        <div class="zaep-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;font-weight:700;color:#ffaa00;">60%</div><div style="font-size:9px;color:#5c6a8a;">效率提升</div></div>
        <div class="zaep-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;font-weight:700;color:#7c5cff;">v4.3</div><div style="font-size:9px;color:#5c6a8a;">当前版本</div></div>
      </div>
      <div style="font-size:11px;color:#5c6a8a;margin-bottom:8px;">快速入口</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        <div class="zaep-quick" data-go="chat" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">🤖</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">对话面板 →</div></div>
        <div class="zaep-quick" data-go="knowledge" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">📚</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">知识库 →</div></div>
        <div class="zaep-quick" data-go="workflow" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">⚡</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">工作流 →</div></div>
      </div>
      <div style="font-size:11px;color:#5c6a8a;margin:16px 0 8px;">最近活动</div>
      <div style="background:#161b22;border-radius:8px;overflow:hidden;">
        <div style="display:flex;justify-content:space-between;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="font-size:11px;color:#a3b1cc;">AI助手</span><span style="font-size:11px;color:#00d68f;">已完成</span></div>
        <div style="display:flex;justify-content:space-between;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.04);"><span style="font-size:11px;color:#a3b1cc;">数据分析Agent</span><span style="font-size:11px;color:#00e5ff;">进行中</span></div>
        <div style="display:flex;justify-content:space-between;padding:8px 12px;"><span style="font-size:11px;color:#a3b1cc;">营销文案生成</span><span style="font-size:11px;color:#00d68f;">已完成</span></div>
      </div>`,
      chat: () => `<div style="display:flex;flex-direction:column;height:100%;">
        <div id="zaep-chat" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:8px;margin-bottom:8px;">
          <div style="display:flex;gap:8px;"><div style="width:28px;height:28px;border-radius:50%;background:#7c5cff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">AI</div><div style="background:#1c2333;border-radius:8px;padding:8px 12px;font-size:12px;color:#e8edf5;max-width:80%;">您好！我是ZAEP智能助手。可以帮您分析外贸数据、生成营销方案、管理知识库。请问需要什么帮助？</div></div>
        </div>
        <div style="display:flex;gap:8px;">
          <input id="zaep-input" type="text" placeholder="输入指令..." style="flex:1;background:#161b22;border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:8px 12px;color:#e8edf5;font-size:12px;">
          <button id="zaep-send" style="background:#7c5cff;color:#fff;border:none;padding:8px 16px;border-radius:6px;font-size:12px;cursor:pointer;">发送</button>
        </div>
        <div style="display:flex;gap:4px;margin-top:6px;flex-wrap:wrap;">
          <button class="zaep-suggest" style="background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:4px 10px;border-radius:4px;font-size:10px;cursor:pointer;">分析外贸数据</button>
          <button class="zaep-suggest" style="background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:4px 10px;border-radius:4px;font-size:10px;cursor:pointer;">生成营销方案</button>
          <button class="zaep-suggest" style="background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:4px 10px;border-radius:4px;font-size:10px;cursor:pointer;">检索知识库</button>
        </div>
      </div>`,
      workflow: () => `<div style="background:#161b22;border-radius:8px;padding:16px;">
        <div style="font-size:12px;color:#e8edf5;margin-bottom:12px;">工作流编排</div>
        <div id="zaep-flow" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <div class="zaep-node" data-type="input" style="background:#00e5ff;color:#000;padding:8px 14px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;">📥 数据输入</div>
          <span style="color:#5c6a8a;">→</span>
          <div class="zaep-node" data-type="process" style="background:#7c5cff;color:#fff;padding:8px 14px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;">🧠 AI处理</div>
          <span style="color:#5c6a8a;">→</span>
          <div class="zaep-node" data-type="output" style="background:#00d68f;color:#000;padding:8px 14px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;">📤 结果输出</div>
        </div>
        <div id="zaep-flow-info" style="margin-top:12px;padding:8px;background:#0d1117;border-radius:6px;font-size:11px;color:#a3b1cc;">点击节点查看配置</div>
        <button id="zaep-run-flow" style="margin-top:8px;background:#00d68f;color:#000;border:none;padding:8px 16px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">▶ 运行工作流</button>
      </div>`,
      knowledge: () => `<div style="display:flex;gap:8px;margin-bottom:12px;">
        <div class="zaep-doc" style="flex:1;background:#161b22;border-radius:8px;padding:10px;cursor:pointer;"><div style="font-size:11px;color:#00e5ff;">📄 产品手册.pdf</div><div style="font-size:9px;color:#5c6a8a;">42页 · 已索引</div></div>
        <div class="zaep-doc" style="flex:1;background:#161b22;border-radius:8px;padding:10px;cursor:pointer;"><div style="font-size:11px;color:#00d68f;">📊 销售数据.xlsx</div><div style="font-size:9px;color:#5c6a8a;">15表 · 已索引</div></div>
        <div class="zaep-doc" style="flex:1;background:#161b22;border-radius:8px;padding:10px;cursor:pointer;"><div style="font-size:11px;color:#ffaa00;">📝 技术规范.md</div><div style="font-size:9px;color:#5c6a8a;">8章 · 已索引</div></div>
      </div>
      <div style="background:#161b22;border-radius:8px;padding:12px;">
        <div style="font-size:11px;color:#5c6a8a;margin-bottom:8px;">检索测试</div>
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <input id="zaep-kb-input" type="text" placeholder="输入查询..." style="flex:1;background:#0d1117;border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:6px 10px;color:#e8edf5;font-size:11px;">
          <button id="zaep-kb-search" style="background:#00e5ff;color:#000;border:none;padding:6px 12px;border-radius:6px;font-size:11px;cursor:pointer;">检索</button>
        </div>
        <div id="zaep-kb-result" style="font-size:11px;color:#5c6a8a;">输入关键词进行混合检索 (BM25 + 向量)</div>
      </div>`,
      trade: () => `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
        <div class="zaep-trade-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">🌏</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">全球3D看板</div></div>
        <div class="zaep-trade-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">📈</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">数据分析</div></div>
        <div class="zaep-trade-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">👥</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">客户看板</div></div>
        <div class="zaep-trade-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">📦</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">产品报价</div></div>
        <div class="zaep-trade-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">🚢</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">订单管理</div></div>
        <div class="zaep-trade-card" style="background:#161b22;border-radius:8px;padding:12px;cursor:pointer;"><div style="font-size:20px;">🔍</div><div style="font-size:11px;color:#e8edf5;margin-top:4px;">智能背调</div></div>
      </div>`,
      marketing: () => `<div style="background:#161b22;border-radius:8px;padding:12px;">
        <div style="font-size:12px;color:#e8edf5;margin-bottom:8px;">智能营销中心</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:center;gap:8px;padding:8px;background:#0d1117;border-radius:6px;"><span style="font-size:20px;">📱</span><div><div style="font-size:11px;color:#a3b1cc;">全渠道发布</div><div style="font-size:10px;color:#5c6a8a;">微信/抖音/小红书</div></div><span style="margin-left:auto;font-size:10px;color:#00d68f;">● 活跃</span></div>
          <div style="display:flex;align-items:center;gap:8px;padding:8px;background:#0d1117;border-radius:6px;"><span style="font-size:20px;">✍️</span><div><div style="font-size:11px;color:#a3b1cc;">AI内容生成</div><div style="font-size:10px;color:#5c6a8a;">已生成 327 条</div></div><span style="margin-left:auto;font-size:10px;color:#00d68f;">● 活跃</span></div>
          <div style="display:flex;align-items:center;gap:8px;padding:8px;background:#0d1117;border-radius:6px;"><span style="font-size:20px;">📊</span><div><div style="font-size:11px;color:#a3b1cc;">数据分析</div><div style="font-size:10px;color:#5c6a8a;">转化率 +23%</div></div><span style="margin-left:auto;font-size:10px;color:#00e5ff;">● 分析中</span></div>
        </div>
      </div>`,
      monitor: () => `<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:16px;font-weight:700;color:#00d68f;">99.9%</div><div style="font-size:9px;color:#5c6a8a;">系统可用性</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:16px;font-weight:700;color:#00e5ff;">42ms</div><div style="font-size:9px;color:#5c6a8a;">平均响应</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:16px;font-weight:700;color:#ffaa00;">68%</div><div style="font-size:9px;color:#5c6a8a;">CPU使用</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:16px;font-weight:700;color:#7c5cff;">4.2GB</div><div style="font-size:9px;color:#5c6a8a;">内存使用</div></div>
      </div>`,
      models: () => `<div style="display:flex;flex-direction:column;gap:8px;">
        <div style="display:flex;align-items:center;gap:8px;padding:10px;background:#161b22;border-radius:8px;cursor:pointer;"><div style="width:32px;height:32px;border-radius:8px;background:#7c5cff;display:flex;align-items:center;justify-content:center;font-size:14px;">🧠</div><div style="flex:1;"><div style="font-size:12px;color:#e8edf5;">GPT-4o</div><div style="font-size:10px;color:#5c6a8a;">调用次数: 12,847</div></div><span style="font-size:10px;color:#00d68f;">● 运行中</span></div>
        <div style="display:flex;align-items:center;gap:8px;padding:10px;background:#161b22;border-radius:8px;cursor:pointer;"><div style="width:32px;height:32px;border-radius:8px;background:#00e5ff;display:flex;align-items:center;justify-content:center;font-size:14px;">🔍</div><div style="flex:1;"><div style="font-size:12px;color:#e8edf5;">Embedding-3</div><div style="font-size:10px;color:#5c6a8a;">向量数: 128,402</div></div><span style="font-size:10px;color:#00d68f;">● 运行中</span></div>
        <div style="display:flex;align-items:center;gap:8px;padding:10px;background:#161b22;border-radius:8px;cursor:pointer;"><div style="width:32px;height:32px;border-radius:8px;background:#ffaa00;display:flex;align-items:center;justify-content:center;font-size:14px;">⚡</div><div style="flex:1;"><div style="font-size:12px;color:#e8edf5;">Reranker</div><div style="font-size:10px;color:#5c6a8a;">调用次数: 3,291</div></div><span style="font-size:10px;color:#00d68f;">● 运行中</span></div>
      </div>`
    };

    function nav(id) {
      document.querySelectorAll('.zaep-menu').forEach(el => { el.style.background=''; el.style.color='#a3b1cc'; el.style.borderLeftColor='transparent'; });
      const active = document.querySelector(`.zaep-menu[data-id="${id}"]`);
      if (active) { active.style.background='rgba(0,229,255,0.08)'; active.style.color='#00e5ff'; active.style.borderLeftColor='#00e5ff'; }
      titleEl.textContent = menu.find(m=>m.id===id)?.name || '';
      contentEl.innerHTML = pages[id] ? pages[id]() : '<div style="color:#5c6a8a;font-size:12px;">模块开发中...</div>';
      bindPageEvents(id);
    }
    function bindPageEvents(id) {
      if (id === 'chat') {
        const chat = document.getElementById('zaep-chat');
        const input = document.getElementById('zaep-input');
        const send = document.getElementById('zaep-send');
        const responses = ['分析完成！根据外贸数据，东南亚市场增长最快，建议增加该区域投入。','已调用RAG引擎，检索到12条相关知识。建议采用方案B。','正在执行Function Calling... 任务已创建并分配给数据Agent。','营销方案已生成，预计转化率提升23%。是否查看详情？'];
        let ri = 0;
        function msg(text, who='user') {
          const d = document.createElement('div');
          d.style.cssText = 'display:flex;gap:8px;' + (who==='user'?'justify-content:flex-end':'');
          if (who==='user') d.innerHTML = `<div style="background:#7c5cff;border-radius:8px;padding:8px 12px;font-size:12px;color:#fff;max-width:70%;">${text}</div>`;
          else d.innerHTML = `<div style="width:28px;height:28px;border-radius:50%;background:#00e5ff;display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;">AI</div><div style="background:#1c2333;border-radius:8px;padding:8px 12px;font-size:12px;color:#e8edf5;max-width:80%;">${text}</div>`;
          chat.appendChild(d); chat.scrollTop = chat.scrollHeight;
        }
        function sendMsg() {
          const t = input.value.trim(); if(!t) return; msg(t,'user'); input.value='';
          setTimeout(()=>msg(responses[ri++%responses.length],'ai'), 600);
        }
        send.onclick = sendMsg;
        input.onkeydown = e => { if(e.key==='Enter') sendMsg(); };
        document.querySelectorAll('.zaep-suggest').forEach(b => b.onclick = () => { input.value = b.textContent; sendMsg(); });
      }
      if (id === 'workflow') {
        const info = document.getElementById('zaep-flow-info');
        const cfgs = {input:'配置: 数据源=数据库, 格式=JSON, 批量大小=100',process:'配置: 模型=GPT-4o, 温度=0.7, 最大Token=2048',output:'配置: 输出格式=HTML, 存储=云端, 通知=邮件'};
        document.querySelectorAll('.zaep-node').forEach(n => n.onclick = () => { info.textContent = cfgs[n.dataset.type] || ''; n.style.transform='scale(0.95)'; setTimeout(()=>n.style.transform='',200); });
        document.getElementById('zaep-run-flow').onclick = function() {
          this.textContent='⏳ 运行中...'; this.style.background='#ffaa00';
          setTimeout(()=>{ this.textContent='✓ 完成'; this.style.background='#00d68f';
            info.innerHTML='<span style="color:#00d68f;">工作流执行完成！处理 127 条数据，耗时 3.2s</span>';
            setTimeout(()=>{ this.textContent='▶ 运行工作流'; }, 2000);
          }, 2000);
        };
      }
      if (id === 'knowledge') {
        const result = document.getElementById('zaep-kb-result');
        const searchBtn = document.getElementById('zaep-kb-search');
        const kbInput = document.getElementById('zaep-kb-input');
        function search() {
          const q = kbInput.value.trim() || '产品保修';
          result.innerHTML = `<div style="color:#00e5ff;margin-bottom:4px;">🔍 检索: "${q}"</div><div style="color:#00d68f;">BM25得分: 0.87 | 向量相似度: 0.92</div><div style="color:#a3b1cc;margin-top:4px;">→ 产品手册.pdf 第8页 (相关度: 95%)</div><div style="color:#a3b1cc;">→ FAQ.docx 第23条 (相关度: 88%)</div><div style="color:#5c6a8a;margin-top:4px;">耗时: 340ms</div>`;
        }
        searchBtn.onclick = search;
        kbInput.onkeydown = e => { if(e.key==='Enter') search(); };
      }
      if (id === 'dashboard') {
        document.querySelectorAll('.zaep-quick').forEach(q => q.onclick = () => nav(q.dataset.go));
        document.querySelectorAll('.zaep-card').forEach(c => { c.onmouseenter=()=>c.style.transform='translateY(-2px)'; c.onmouseleave=()=>c.style.transform=''; });
      }
      if (id === 'trade') document.querySelectorAll('.zaep-trade-card').forEach(c => { c.onmouseenter=()=>c.style.transform='translateY(-2px)'; c.onmouseleave=()=>c.style.transform=''; });
    }
    document.querySelectorAll('.zaep-menu').forEach(el => el.onclick = () => nav(el.dataset.id));
    nav('dashboard');
  }
},

// ========== 3. AuroraMusic 播放器 — 可交互 ==========
'aurora-music': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">Aurora Music v0.4.0</span></div>
  <div style="display:flex;height:300px;background:#0a0a0f;">
    <div style="flex:1;display:flex;flex-direction:column;">
      <div id="am-tabs" style="display:flex;gap:4px;padding:8px 12px;background:rgba(255,255,255,0.03);">
        <button class="am-tab active" data-tab="library" style="background:rgba(255,126,95,0.2);color:#ff7e5f;border:none;padding:5px 12px;border-radius:6px;font-size:11px;cursor:pointer;">🎵 音乐库</button>
        <button class="am-tab" data-tab="mix" style="background:transparent;color:#a3b1cc;border:none;padding:5px 12px;border-radius:6px;font-size:11px;cursor:pointer;">🎤 混音</button>
      </div>
      <div id="am-tab-content" style="flex:1;overflow:hidden;"></div>
    </div>
    <div style="width:160px;background:#0a0a0f;border-left:1px solid rgba(255,255,255,0.05);padding:12px;display:flex;flex-direction:column;align-items:center;">
      <div id="am-cover" style="width:80px;height:80px;border-radius:12px;background:linear-gradient(135deg,#ff7e5f,#feb47b);display:flex;align-items:center;justify-content:center;font-size:32px;margin-bottom:8px;transition:all 0.3s;">🎮</div>
      <div id="am-title" style="font-size:12px;color:#e8edf5;font-weight:600;text-align:center;">Epic Battle</div>
      <div id="am-artist" style="font-size:10px;color:#5c6a8a;text-align:center;">Game OST</div>
      <div id="am-viz" style="display:flex;gap:2px;align-items:flex-end;height:30px;margin:8px 0;">
        <div class="am-bar" style="width:3px;height:10px;background:#ff7e5f;"></div><div class="am-bar" style="width:3px;height:20px;background:#ff7e5f;"></div><div class="am-bar" style="width:3px;height:15px;background:#ff7e5f;"></div><div class="am-bar" style="width:3px;height:25px;background:#ff7e5f;"></div><div class="am-bar" style="width:3px;height:18px;background:#ff7e5f;"></div><div class="am-bar" style="width:3px;height:12px;background:#ff7e5f;"></div><div class="am-bar" style="width:3px;height:22px;background:#ff7e5f;"></div><div class="am-bar" style="width:3px;height:8px;background:#ff7e5f;"></div>
      </div>
      <div style="width:100%;margin:8px 0;">
        <div style="height:3px;background:rgba(255,255,255,0.1);border-radius:2px;cursor:pointer;" id="am-progress"><div id="am-prog-bar" style="width:0%;height:100%;background:#ff7e5f;border-radius:2px;transition:width 0.3s;"></div></div>
        <div style="display:flex;justify-content:space-between;margin-top:2px;font-size:8px;color:#5c6a8a;"><span id="am-cur">0:00</span><span id="am-dur">3:42</span></div>
      </div>
    </div>
  </div>
  <div style="height:64px;background:rgba(255,255,255,0.03);border-top:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;gap:16px;padding:0 16px;">
    <button id="am-prev" style="background:none;border:none;color:#a3b1cc;font-size:18px;cursor:pointer;">⏮</button>
    <button id="am-play" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#ff7e5f,#feb47b);border:none;color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">▶</button>
    <button id="am-next" style="background:none;border:none;color:#a3b1cc;font-size:18px;cursor:pointer;">⏭</button>
    <div style="margin-left:16px;display:flex;align-items:center;gap:6px;">
      <span style="font-size:12px;color:#5c6a8a;">🔊</span>
      <input id="am-vol" type="range" min="0" max="100" value="80" style="width:80px;accent-color:#ff7e5f;">
    </div>
  </div></div>`,
  init() {
    const songs = [
      {title:'Epic Battle',artist:'Game OST',dur:'3:42',sec:222,icon:'🎮',cover:'linear-gradient(135deg,#ff7e5f,#feb47b)'},
      {title:'Crystal Caves',artist:'Adventure',dur:'4:18',sec:258,icon:'💎',cover:'linear-gradient(135deg,#00e5ff,#7c5cff)'},
      {title:'City of Light',artist:'RPG',dur:'5:23',sec:323,icon:'🌆',cover:'linear-gradient(135deg,#ffaa00,#ff3d71)'},
      {title:'Dark Forest',artist:'Horror',dur:'3:56',sec:236,icon:'🌲',cover:'linear-gradient(135deg,#00d68f,#00e5ff)'},
      {title:'Ocean Waves',artist:'Relax',dur:'6:12',sec:372,icon:'🌊',cover:'linear-gradient(135deg,#00e5ff,#00d68f)'},
      {title:'Night Drive',artist:'Synthwave',dur:'4:45',sec:285,icon:'🌙',cover:'linear-gradient(135deg,#7c5cff,#ff3d71)'}
    ];
    let curIdx = 0, playing = false, progress = 0, intervalId = null;
    const coverEl = document.getElementById('am-cover');
    const titleEl = document.getElementById('am-title');
    const artistEl = document.getElementById('am-artist');
    const playBtn = document.getElementById('am-play');
    const progBar = document.getElementById('am-prog-bar');
    const progEl = document.getElementById('am-progress');
    const curEl = document.getElementById('am-cur');
    const durEl = document.getElementById('am-dur');
    const vizEl = document.getElementById('am-viz');
    const volEl = document.getElementById('am-vol');
    const tabContent = document.getElementById('am-tab-content');

    function fmtTime(s) { return Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0'); }

    function renderLibrary() {
      tabContent.innerHTML = `<div style="overflow-y:auto;height:100%;padding:0 12px;">
        <div style="font-size:10px;color:#5c6a8a;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);"># 歌曲 时长</div>
        ${songs.map((s,i)=>`<div class="am-song" data-idx="${i}" style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.03);cursor:pointer;">
          <span style="font-size:16px;">${s.icon}</span>
          <span style="font-size:11px;color:${i===curIdx?'#ff7e5f':'#e8edf5'};flex:1;">${s.title}</span>
          <span style="font-size:10px;color:#5c6a8a;">${s.dur}</span>
        </div>`).join('')}
      </div>`;
      document.querySelectorAll('.am-song').forEach(el => el.onclick = () => { curIdx = parseInt(el.dataset.idx); loadSong(); renderLibrary(); if(!playing) togglePlay(); });
    }
    function renderMix() {
      tabContent.innerHTML = `<div style="padding:12px;display:flex;flex-direction:column;gap:10px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span style="font-size:12px;color:#e8edf5;">🎙️ 游戏混音输出</span>
          <label style="display:flex;align-items:center;gap:4px;cursor:pointer;"><input id="am-mix-toggle" type="checkbox" style="accent-color:#ff7e5f;"><span style="font-size:10px;color:#a3b1cc;" id="am-mix-status">OFF</span></label>
        </div>
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;">
          ${['游戏','听歌','直播','观影','会议'].map((p,i)=>`<button class="am-preset" data-p="${i}" style="background:${i===0?'rgba(255,126,95,0.2)':'#161b22'};color:${i===0?'#ff7e5f':'#a3b1cc'};border:1px solid rgba(255,255,255,0.05);padding:6px;border-radius:6px;font-size:10px;cursor:pointer;">${p}</button>`).join('')}
        </div>
        <div style="background:#161b22;border-radius:8px;padding:10px;">
          <div style="font-size:10px;color:#5c6a8a;margin-bottom:6px;">电平表</div>
          <div style="display:flex;gap:8px;">
            <div style="flex:1;"><div style="font-size:9px;color:#5c6a8a;">🎤 麦克风</div><div style="height:40px;background:#0d1117;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden;"><div id="am-mic-lvl" style="width:100%;height:60%;background:linear-gradient(0deg,#00d68f,#ffaa00,#ff3d71);border-radius:3px;transition:height 0.2s;"></div></div></div>
            <div style="flex:1;"><div style="font-size:9px;color:#5c6a8a;">🎵 混音</div><div style="height:40px;background:#0d1117;border-radius:4px;display:flex;align-items:flex-end;overflow:hidden;"><div id="am-mix-lvl" style="width:100%;height:80%;background:linear-gradient(0deg,#00d68f,#ffaa00,#ff3d71);border-radius:3px;transition:height 0.2s;"></div></div></div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          <div><div style="display:flex;justify-content:space-between;font-size:10px;color:#a3b1cc;margin-bottom:2px;"><span>🎵 音乐音量</span><span id="am-music-vol">80%</span></div><input type="range" min="0" max="100" value="80" class="am-slider" data-lbl="am-music-vol" style="width:100%;accent-color:#ff7e5f;"></div>
          <div><div style="display:flex;justify-content:space-between;font-size:10px;color:#a3b1cc;margin-bottom:2px;"><span>🎤 麦克风</span><span id="am-mic-vol">60%</span></div><input type="range" min="0" max="100" value="60" class="am-slider" data-lbl="am-mic-vol" style="width:100%;accent-color:#00d68f;"></div>
          <div><div style="display:flex;justify-content:space-between;font-size:10px;color:#a3b1cc;margin-bottom:2px;"><span>👂 本地监听</span><span id="am-mon-vol">50%</span></div><input type="range" min="0" max="100" value="50" class="am-slider" data-lbl="am-mon-vol" style="width:100%;accent-color:#00e5ff;"></div>
        </div>
        <div id="am-vmic-status" style="padding:6px;background:rgba(0,214,143,0.1);border-radius:6px;text-align:center;font-size:10px;color:#00d68f;">✓ 虚拟麦克风: 开启</div>
      </div>`;
      const mixToggle = document.getElementById('am-mix-toggle');
      const mixStatus = document.getElementById('am-mix-status');
      const vmicStatus = document.getElementById('am-vmic-status');
      mixToggle.onchange = () => {
        mixStatus.textContent = mixToggle.checked ? 'ON AIR' : 'OFF';
        mixStatus.color = mixToggle.checked ? '#00d68f' : '#a3b1cc';
        vmicStatus.textContent = mixToggle.checked ? '✓ 虚拟麦克风: 开启' : '✗ 虚拟麦克风: 关闭';
        vmicStatus.style.color = mixToggle.checked ? '#00d68f' : '#ff3d71';
        vmicStatus.style.background = mixToggle.checked ? 'rgba(0,214,143,0.1)' : 'rgba(255,61,113,0.1)';
      };
      document.querySelectorAll('.am-preset').forEach(b => b.onclick = () => {
        document.querySelectorAll('.am-preset').forEach(x=>{x.style.background='#161b22';x.style.color='#a3b1cc';});
        b.style.background='rgba(255,126,95,0.2)'; b.style.color='#ff7e5f';
      });
      document.querySelectorAll('.am-slider').forEach(s => s.oninput = () => document.getElementById(s.dataset.lbl).textContent = s.value+'%');
      // Simulate mic level
      setInterval(() => { const ml=document.getElementById('am-mic-lvl'); if(ml) ml.style.height=(30+Math.random()*50)+'%'; const xl=document.getElementById('am-mix-lvl'); if(xl) xl.style.height=(50+Math.random()*40)+'%'; }, 200);
    }
    function loadSong() {
      const s = songs[curIdx];
      coverEl.style.background = s.cover; coverEl.textContent = s.icon;
      titleEl.textContent = s.title; artistEl.textContent = s.artist;
      durEl.textContent = s.dur; progress = 0; progBar.style.width = '0%'; curEl.textContent = '0:00';
    }
    function togglePlay() {
      playing = !playing;
      playBtn.textContent = playing ? '⏸' : '▶';
      if (playing) {
        vizEl.querySelectorAll('.am-bar').forEach((b,i) => b.style.animation = `demo-viz ${0.4+Math.random()*0.4}s ease-in-out infinite ${i*0.05}s`);
        intervalId = setInterval(() => {
          progress += 1;
          if (progress >= songs[curIdx].sec) { next(); return; }
          progBar.style.width = (progress/songs[curIdx].sec*100)+'%';
          curEl.textContent = fmtTime(progress);
        }, 1000);
      } else {
        vizEl.querySelectorAll('.am-bar').forEach(b => b.style.animation = 'none');
        clearInterval(intervalId);
      }
    }
    function next() { curIdx = (curIdx+1)%songs.length; loadSong(); renderLibrary(); if(playing){clearInterval(intervalId);togglePlay();} }
    function prev() { curIdx = (curIdx-1+songs.length)%songs.length; loadSong(); renderLibrary(); if(playing){clearInterval(intervalId);togglePlay();} }
    playBtn.onclick = togglePlay;
    document.getElementById('am-next').onclick = next;
    document.getElementById('am-prev').onclick = prev;
    volEl.oninput = () => { if(volEl.value < 30) volEl.style.accentColor='#ff3d71'; else if(volEl.value < 60) volEl.style.accentColor='#ffaa00'; else volEl.style.accentColor='#ff7e5f'; };
    progEl.onclick = (e) => { const r = progEl.getBoundingClientRect(); progress = Math.floor((e.clientX-r.left)/r.width*songs[curIdx].sec); progBar.style.width=(progress/songs[curIdx].sec*100)+'%'; curEl.textContent=fmtTime(progress); };
    document.querySelectorAll('.am-tab').forEach(t => t.onclick = () => {
      document.querySelectorAll('.am-tab').forEach(x=>{x.classList.remove('active');x.style.background='transparent';x.style.color='#a3b1cc';});
      t.classList.add('active'); t.style.background='rgba(255,126,95,0.2)'; t.style.color='#ff7e5f';
      t.dataset.tab === 'library' ? renderLibrary() : renderMix();
    });
    renderLibrary();
  }
},

// ========== 4. 代码审查 — 可交互 ==========
'code-review': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">智能代码审查系统</span></div>
  <div style="display:flex;height:420px;">
    <div style="flex:1;display:flex;flex-direction:column;">
      <div style="display:flex;background:#161b22;border-bottom:1px solid rgba(255,255,255,0.06);">
        <div class="cr-tab active" data-file="auth" style="padding:8px 16px;font-size:11px;color:#ffaa00;border-bottom:2px solid #ffaa00;cursor:pointer;">auth.py</div>
        <div class="cr-tab" data-file="utils" style="padding:8px 16px;font-size:11px;color:#5c6a8a;cursor:pointer;">utils.py</div>
        <div class="cr-tab" data-file="models" style="padding:8px 16px;font-size:11px;color:#5c6a8a;cursor:pointer;">models.py</div>
      </div>
      <div id="cr-code" style="flex:1;padding:12px;font-family:monospace;font-size:11px;line-height:1.8;overflow:auto;background:#0d1117;"></div>
    </div>
    <div style="width:240px;background:#0d1117;border-left:1px solid rgba(255,255,255,0.06);padding:12px;overflow-y:auto;">
      <div style="font-size:11px;color:#5c6a8a;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">检测结果</div>
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <div style="background:rgba(255,61,113,0.15);padding:4px 10px;border-radius:4px;"><span id="cr-high" style="color:#ff3d71;font-size:16px;font-weight:700;">2</span><span style="color:#5c6a8a;font-size:10px;"> 高危</span></div>
        <div style="background:rgba(255,170,0,0.15);padding:4px 10px;border-radius:4px;"><span id="cr-mid" style="color:#ffaa00;font-size:16px;font-weight:700;">1</span><span style="color:#5c6a8a;font-size:10px;"> 中危</span></div>
      </div>
      <div id="cr-issues"></div>
      <button id="cr-fix-all" style="margin-top:8px;width:100%;background:#00d68f;color:#000;border:none;padding:8px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">一键修复全部</button>
    </div>
  </div></div>`,
  init() {
    const files = {
      auth: [
        {n:1,c:'<span style="color:#ff7b72;">import</span> <span style="color:#a3b1cc;">sqlite3</span>'},
        {n:2,c:''},
        {n:3,c:'<span style="color:#ff7b72;">def</span> <span style="color:#d2a8ff;">login</span>(username, password):'},
        {n:4,c:'  query = <span style="color:#a5d6ff;">f"SELECT * FROM users WHERE name=\'{username}\'"</span>',issue:'sql_injection',fixed:'  query = <span style="color:#a5d6ff;">"SELECT * FROM users WHERE name=?"</span>'},
        {n:5,c:'  conn = sqlite3.<span style="color:#d2a8ff;">connect</span>(<span style="color:#a5d6ff;">\'db.sqlite\'</span>)'},
        {n:6,c:'  result = conn.<span style="color:#d2a8ff;">execute</span>(query).<span style="color:#d2a8ff;">fetchone</span>()',issue:'sql_injection_exec',fixed:'  result = conn.<span style="color:#d2a8ff;">execute</span>(query, (username,)).<span style="color:#d2a8ff;">fetchone</span>()'},
        {n:7,c:'  <span style="color:#ff7b72;">if</span> result:'},
        {n:8,c:'    <span style="color:#ff7b72;">return</span> <span style="color:#79c0ff;">True</span>  <span style="color:#8b949e;"># 密码未验证</span>',issue:'logic_error',fixed:'    <span style="color:#ff7b72;">if</span> password == result[1]: <span style="color:#ff7b72;">return</span> <span style="color:#79c0ff;">True</span>'},
        {n:9,c:'  <span style="color:#ff7b72;">return</span> <span style="color:#79c0ff;">False</span>'}
      ],
      utils: [
        {n:1,c:'<span style="color:#ff7b72;">import</span> <span style="color:#a3b1cc;">os</span>'},
        {n:2,c:''},
        {n:3,c:'<span style="color:#ff7b72;">def</span> <span style="color:#d2a8ff;">read_file</span>(path):'},
        {n:4,c:'  <span style="color:#8b949e;"># 读取文件内容</span>'},
        {n:5,c:'  f = <span style="color:#d2a8ff;">open</span>(path)'},
        {n:6,c:'  data = f.<span style="color:#d2a8ff;">read</span>()'},
        {n:7,c:'  <span style="color:#ff7b72;">return</span> data'},
        {n:8,c:''},
        {n:9,c:'<span style="color:#ff7b72;">def</span> <span style="color:#d2a8ff;">get_env</span>(key):'},
        {n:10,c:'  <span style="color:#ff7b72;">return</span> os.environ[key]'}
      ],
      models: [
        {n:1,c:'<span style="color:#ff7b72;">from</span> <span style="color:#a3b1cc;">dataclasses</span> <span style="color:#ff7b72;">import</span> dataclass'},
        {n:2,c:''},
        {n:3,c:'<span style="color:#ff7b72;">@dataclass</span>'},
        {n:4,c:'<span style="color:#ff7b72;">class</span> <span style="color:#d2a8ff;">User</span>:'},
        {n:5,c:'  name: <span style="color:#a3b1cc;">str</span>'},
        {n:6,c:'  email: <span style="color:#a3b1cc;">str</span>'},
        {n:7,c:'  age: <span style="color:#a3b1cc;">int</span> = 0'},
        {n:8,c:''},
        {n:9,c:'<span style="color:#ff7b72;">@dataclass</span>'},
        {n:10,c:'<span style="color:#ff7b72;">class</span> <span style="color:#d2a8ff;">Product</span>:'},
        {n:11,c:'  name: <span style="color:#a3b1cc;">str</span>'},
        {n:12,c:'  price: <span style="color:#a3b1cc;">float</span>'}
      ]
    };
    const issues = {
      auth: [
        {line:4,type:'sql_injection',sev:'high',title:'🔴 SQL注入',desc:'f-string直接拼接SQL',fix:'使用参数化查询'},
        {line:6,type:'sql_injection_exec',sev:'high',title:'🔴 SQL注入',desc:'execute未使用参数化',fix:'传入参数元组'},
        {line:8,type:'logic_error',sev:'mid',title:'🟡 逻辑缺陷',desc:'返回True前未验证密码',fix:'添加密码验证'}
      ]
    };
    let curFile = 'auth';
    const codeEl = document.getElementById('cr-code');
    const issuesEl = document.getElementById('cr-issues');
    const fixedSet = new Set();

    function render() {
      const lines = files[curFile];
      const fileIssues = issues[curFile] || [];
      codeEl.innerHTML = lines.map(l => {
        const is = fileIssues.find(i => i.line === l.n);
        const fixed = fixedSet.has(l.issue);
        const bg = is && !fixed ? (is.sev==='high'?'background:rgba(255,61,113,0.08);border-left:2px solid #ff3d71;':'background:rgba(255,170,0,0.08);border-left:2px solid #ffaa00;') : '';
        const code = fixed ? l.fixed : l.c;
        return `<div style="display:flex;${bg}"><span style="color:${is&&!fixed?'#ff3d71':'#5c6a8a'};width:24px;">${l.n}</span><span style="color:#a3b1cc;">${code}</span></div>`;
      }).join('\n');
      const activeIssues = fileIssues.filter(i => !fixedSet.has(files[curFile].find(l=>l.n===i.line).issue));
      document.getElementById('cr-high').textContent = activeIssues.filter(i=>i.sev==='high').length;
      document.getElementById('cr-mid').textContent = activeIssues.filter(i=>i.sev==='mid').length;
      issuesEl.innerHTML = (fileIssues.length > 0 ? fileIssues.filter(i => { const line = files[curFile].find(l=>l.n===i.line); return line && !fixedSet.has(line.issue); }) : []).map(i => 
        `<div style="background:#161b22;border:1px solid ${i.sev==='high'?'rgba(255,61,113,0.3)':'rgba(255,170,0,0.3)'};border-radius:8px;padding:10px;margin-bottom:8px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="font-size:10px;color:${i.sev==='high'?'#ff3d71':'#ffaa00'};font-weight:600;">${i.title}</span><span style="font-size:9px;color:#5c6a8a;">L${i.line}</span></div>
          <div style="font-size:10px;color:#a3b1cc;margin-bottom:6px;">${i.desc}</div>
          <button class="cr-fix" data-line="${i.line}" style="width:100%;background:${i.sev==='high'?'#ff3d71':'#ffaa00'};color:${i.sev==='high'?'#fff':'#000'};border:none;padding:4px;border-radius:4px;font-size:10px;cursor:pointer;">应用修复: ${i.fix}</button>
        </div>`
      ).join('') || '<div style="font-size:11px;color:#00d68f;text-align:center;padding:12px;">✓ 此文件无未修复缺陷</div>';
      document.querySelectorAll('.cr-fix').forEach(b => b.onclick = () => {
        const line = parseInt(b.dataset.line);
        const issue = fileIssues.find(i => i.line === line);
        const lineData = files[curFile].find(l => l.n === line);
        if (lineData) { fixedSet.add(lineData.issue); render(); }
      });
    }
    document.querySelectorAll('.cr-tab').forEach(t => t.onclick = () => {
      document.querySelectorAll('.cr-tab').forEach(x => { x.style.color='#5c6a8a'; x.style.borderBottom='none'; });
      t.style.color = '#ffaa00'; t.style.borderBottom = '2px solid #ffaa00';
      curFile = t.dataset.file; render();
    });
    document.getElementById('cr-fix-all').onclick = function() {
      this.textContent='修复中...'; this.style.background='#ffaa00';
      setTimeout(() => {
        (issues[curFile]||[]).forEach(i => { const ld = files[curFile].find(l=>l.n===i.line); if(ld) fixedSet.add(ld.issue); });
        render(); this.textContent='✓ 全部修复'; this.style.background='#00d68f';
        setTimeout(() => { this.textContent='一键修复全部'; }, 2000);
      }, 1000);
    };
    render();
  }
},

// ========== 5. Window-Agent-MCP — 可交互终端 ==========
'window-agent-mcp': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">Window-Agent-MCP — 工具服务器</span></div>
  <div style="display:flex;height:420px;">
    <div style="width:160px;background:#0d1117;border-right:1px solid rgba(255,255,255,0.06);padding:8px 0;overflow-y:auto;">
      <div style="padding:0 12px 6px;font-size:10px;color:#5c6a8a;text-transform:uppercase;">工具 (32)</div>
      <div id="mcp-tools"></div>
    </div>
    <div id="mcp-term" style="flex:1;background:#08090f;padding:12px;font-family:monospace;font-size:11px;line-height:1.6;overflow-y:auto;"></div>
  </div></div>`,
  init() {
    const tools = [
      {cat:'窗口管理',items:['enum_windows','find_window','activate_window','close_window','move_window','resize_window','screenshot_window','get_window_rect']},
      {cat:'UI自动化',items:['click_element','type_text','scroll_page','drag_element','find_element','wait_element','select_option']},
      {cat:'屏幕操作',items:['screenshot_full','screenshot_region','find_image','ocr_text','get_pixel_color','monitor_region']},
      {cat:'进程管理',items:['start_process','kill_process','list_processes','get_process_info']},
      {cat:'键盘鼠标',items:['press_key','hotkey','mouse_move','mouse_click','mouse_scroll']}
    ];
    const toolsEl = document.getElementById('mcp-tools');
    const term = document.getElementById('mcp-term');
    toolsEl.innerHTML = tools.map(g => 
      `<div style="padding:4px 12px;font-size:11px;color:#00e5ff;cursor:pointer;" class="mcp-cat">▸ ${g.cat} (${g.items.length})</div>
       <div class="mcp-items" style="display:none;">${g.items.map(t=>`<div class="mcp-tool" data-tool="${t}" style="padding:3px 12px 3px 24px;font-size:10px;color:#a3b1cc;cursor:pointer;">${t}</div>`).join('')}</div>`
    ).join('');
    
    const windows = ['Chrome — "GitHub"','Code — "project-detail.html"','Explorer — "完成项目"','Terminal — "PowerShell"','Spotify — "Now Playing"'];
    let log = [];
    
    function addLog(text, color='#a3b1cc') {
      log.push({text, color});
      term.innerHTML = log.map(l => `<div style="color:${l.color};">${l.text}</div>`).join('');
      term.scrollTop = term.scrollHeight;
    }
    
    addLog('$ MCP Server v2.0.0 — stdio transport', '#5c6a8a');
    addLog('✓ Server initialized', '#00d68f');
    addLog('✓ Registered 32 tools', '#00d68f');
    addLog('', '#5c6a8a');
    addLog('Ready. Click a tool to execute.', '#5c6a8a');

    function execute(tool) {
      addLog(`→ call_tool("${tool}", {})`, '#e8edf5');
      addLog(`Executing ${tool}...`, '#5c6a8a');
      const responses = {
        enum_windows: () => { addLog('Found 5 active windows:', '#a3b1cc'); windows.forEach((w,i)=>addLog(`  [${i}] ${w}`, '#a3b1cc')); },
        screenshot_window: () => { addLog('Activating window...', '#5c6a8a'); setTimeout(()=>addLog('✓ Screenshot saved (1920x1080, 2.1MB)', '#00d68f'), 500); },
        screenshot_full: () => { addLog('Capturing full screen (1920x1080)...', '#5c6a8a'); setTimeout(()=>addLog('✓ Screenshot saved (3.4MB)', '#00d68f'), 500); },
        click_element: () => { addLog('Locating element...', '#5c6a8a'); setTimeout(()=>addLog('✓ Click at (340, 287)', '#00d68f'), 400); },
        type_text: () => { addLog('✓ Typed "Hello World" into active element', '#00d68f'); },
        find_window: () => { addLog('✓ Found: Code — "project-detail.html" (handle: 0x100A2)', '#00d68f'); },
        list_processes: () => { addLog('Active processes (top 5):', '#a3b1cc'); ['chrome.exe (4,231MB)','Code.exe (1,892MB)','explorer.exe (156MB)','python.exe (84MB)','node.exe (312MB)'].forEach(p=>addLog(`  ${p}`, '#a3b1cc')); },
        start_process: () => { addLog('Starting notepad.exe...', '#5c6a8a'); setTimeout(()=>addLog('✓ Process started (PID: 4892)', '#00d68f'), 400); },
        press_key: () => { addLog('✓ Key pressed: Enter', '#00d68f'); },
        ocr_text: () => { addLog('Running OCR on screen region...', '#5c6a8a'); setTimeout(()=>{ addLog('✓ OCR result:', '#00d68f'); addLog('  "File Edit View Run Terminal Help"', '#a3b1cc'); }, 600); }
      };
      if (responses[tool]) responses[tool]();
      else { setTimeout(()=>addLog(`✓ ${tool} executed successfully (32ms)`, '#00d68f'), 400); }
      addLog('', '#5c6a8a');
      setTimeout(()=>addLog('Ready for next command...', '#5c6a8a'), 800);
    }

    document.querySelectorAll('.mcp-cat').forEach(c => c.onclick = () => {
      const items = c.nextElementSibling;
      items.style.display = items.style.display === 'none' ? 'block' : 'none';
      c.textContent = c.textContent.replace('▸', items.style.display==='none'?'▸':'▾');
    });
    document.querySelectorAll('.mcp-tool').forEach(t => t.onclick = () => {
      t.style.color = '#00e5ff';
      setTimeout(()=>t.style.color='#a3b1cc', 300);
      execute(t.dataset.tool);
    });
    // Auto-expand first category
    document.querySelector('.mcp-cat').click();
  }
},

// ========== 6. 电商AI自动化 — 可交互 ==========
'ecommerce-ai': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">多平台电商AI自动化系统</span></div>
  <div style="height:420px;background:#0d1117;display:flex;flex-direction:column;">
    <div id="ec-tabs" style="display:flex;gap:4px;padding:10px 12px;background:#161b22;border-bottom:1px solid rgba(255,255,255,0.06);"></div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:12px;" id="ec-stats"></div>
    <div style="padding:0 12px;flex:1;overflow:hidden;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;margin-bottom:8px;">商品队列</div>
      <div id="ec-products" style="overflow-y:auto;max-height:240px;display:flex;flex-direction:column;gap:6px;"></div>
    </div>
  </div></div>`,
  init() {
    const platforms = [
      {id:'taobao',name:'淘宝',color:'#ff3d71',icon:'🛒'},
      {id:'douyin',name:'抖音',color:'#00e5ff',icon:'🎵'},
      {id:'pdd',name:'拼多多',color:'#ffaa00',icon:'🟠'},
      {id:'wechat',name:'微信',color:'#00d68f',icon:'💬'}
    ];
    const products = {
      taobao: [
        {name:'夏季纯棉T恤 短袖百搭',price:'¥29.9',sales:'1.2万+',icon:'👕',status:'listed'},
        {name:'蓝牙耳机 降噪长续航',price:'¥89.0',sales:'5000+',icon:'🎧',status:'processing'},
        {name:'智能手表 运动健康监测',price:'¥199.0',sales:'8000+',icon:'⌚',status:'ai_writing'},
        {name:'保温杯 316不锈钢',price:'¥39.9',sales:'2.3万+',icon:'🥤',status:'listed'}
      ],
      douyin: [
        {name:'手机壳 硅胶防摔全包',price:'¥12.9',sales:'3万+',icon:'📱',status:'listed'},
        {name:'美妆蛋 海绵粉扑套装',price:'¥19.9',sales:'1.5万+',icon:'💄',status:'processing'},
        {name:'运动鞋 透气跑步鞋',price:'¥159.0',sales:'6000+',icon:'👟',status:'ai_writing'}
      ],
      pdd: [
        {name:'数据线 Type-C快充',price:'¥9.9',sales:'5万+',icon:'🔌',status:'listed'},
        {name:'收纳盒 桌面整理',price:'¥15.9',sales:'8000+',icon:'📦',status:'listed'},
        {name:'雨伞 晴雨两用防晒',price:'¥25.0',sales:'1.2万+',icon:'☂️',status:'processing'}
      ],
      wechat: [
        {name:'茶叶 绿茶明前龙井',price:'¥89.0',sales:'2000+',icon:'🍵',status:'listed'},
        {name:'坚果零食大礼包',price:'¥49.9',sales:'3500+',icon:'🥜',status:'ai_writing'}
      ]
    };
    const statusMap = {listed:{label:'✓ 已上架',color:'#00d68f',bg:'rgba(0,214,143,0.15)'},processing:{label:'图片处理中',color:'#ffaa00',bg:'rgba(255,170,0,0.15)'},ai_writing:{label:'AI文案中',color:'#00e5ff',bg:'rgba(0,229,255,0.15)'}};
    let curPlatform = 'taobao';
    const tabsEl = document.getElementById('ec-tabs');
    const statsEl = document.getElementById('ec-stats');
    const prodsEl = document.getElementById('ec-products');

    function renderTabs() {
      tabsEl.innerHTML = platforms.map(p=>`<button class="ec-tab" data-id="${p.id}" style="padding:6px 14px;border-radius:6px;font-size:11px;cursor:pointer;border:1px solid ${curPlatform===p.id?p.color:'transparent'};background:${curPlatform===p.id?p.color+'20':'transparent'};color:${curPlatform===p.id?p.color:'#a3b1cc'};">${p.icon} ${p.name}</button>`).join('') +
        `<button id="ec-crawl" style="margin-left:auto;padding:6px 14px;background:#00d68f;color:#000;border:none;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;">+ 采集商品</button>`;
      document.querySelectorAll('.ec-tab').forEach(t=>t.onclick=()=>{curPlatform=t.dataset.id;render();});
      document.getElementById('ec-crawl').onclick = function() {
        this.textContent='⟳ 采集中...'; this.style.background='#ffaa00'; this.disabled=true;
        setTimeout(()=>{
          this.textContent='+ 采集商品'; this.style.background='#00d68f'; this.disabled=false;
          prodsEl.querySelectorAll('.ec-product').forEach((p,i)=>{ setTimeout(()=>{ p.style.opacity='0'; p.style.transform='translateX(20px)'; setTimeout(()=>p.remove(),300); }, i*200); });
          setTimeout(()=>{ render(); }, 1000);
        }, 2000);
      };
    }
    function renderStats() {
      const all = Object.values(products).flat();
      statsEl.innerHTML = `
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#ff3d71;">${all.length}</div><div style="font-size:9px;color:#5c6a8a;">总商品</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00d68f;">${all.filter(p=>p.status==='listed').length}</div><div style="font-size:9px;color:#5c6a8a;">已上架</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00e5ff;">${all.filter(p=>p.status==='ai_writing').length}</div><div style="font-size:9px;color:#5c6a8a;">AI文案中</div></div>
        <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#ffaa00;">98%</div><div style="font-size:9px;color:#5c6a8a;">合规率</div></div>`;
    }
    function renderProducts() {
      const list = products[curPlatform] || [];
      prodsEl.innerHTML = list.map((p,i)=>{const st=statusMap[p.status];return `<div class="ec-product" style="display:flex;align-items:center;gap:10px;background:#161b22;border-radius:8px;padding:8px;transition:all 0.3s;cursor:pointer;">
        <div style="width:36px;height:36px;border-radius:6px;background:linear-gradient(135deg,#ff3d71,#ffaa00);display:flex;align-items:center;justify-content:center;font-size:16px;">${p.icon}</div>
        <div style="flex:1;"><div style="font-size:11px;color:#e8edf5;">${p.name}</div><div style="font-size:9px;color:#5c6a8a;">${p.price} | 销量: ${p.sales}</div></div>
        <span style="background:${st.bg};color:${st.color};padding:2px 8px;border-radius:4px;font-size:9px;">${st.label}</span>
      </div>`;}).join('');
      prodsEl.querySelectorAll('.ec-product').forEach(p=>{p.onmouseenter=()=>p.style.background='#1c2333';p.onmouseleave=()=>p.style.background='#161b22';});
    }
    function render() { renderTabs(); renderStats(); renderProducts(); }
    render();
  }
},

// ========== 7. IoT 嵌入式 — 可交互 ==========
'iot-embedded': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">嵌入式IoT多场景系统 — 传感器实时监控</span></div>
  <div style="display:flex;height:420px;background:#0d1117;">
    <div style="width:220px;background:#08090f;display:flex;flex-direction:column;align-items:center;justify-content:center;border-right:1px solid rgba(255,255,255,0.06);">
      <div style="font-size:10px;color:#5c6a8a;margin-bottom:8px;">MPU6050 3D姿态</div>
      <div style="width:80px;height:80px;perspective:300px;margin-bottom:12px;"><div id="iot-cube" style="width:100%;height:100%;position:relative;transform-style:preserve-3d;transform:rotateX(-20deg) rotateY(0deg);transition:transform 0.3s;">
        <div style="position:absolute;width:80px;height:80px;background:rgba(0,229,255,0.15);border:1px solid #00e5ff;"></div>
        <div style="position:absolute;width:80px;height:80px;background:rgba(0,214,143,0.15);border:1px solid #00d68f;transform:rotateY(90deg) translateZ(40px);"></div>
        <div style="position:absolute;width:80px;height:80px;background:rgba(124,92,255,0.15);border:1px solid #7c5cff;transform:rotateX(90deg) translateZ(40px);"></div>
        <div style="position:absolute;width:80px;height:80px;background:rgba(0,229,255,0.1);border:1px solid #00e5ff;transform:rotateY(180deg) translateZ(40px);"></div>
        <div style="position:absolute;width:80px;height:80px;background:rgba(0,214,143,0.1);border:1px solid #00d68f;transform:rotateY(-90deg) translateZ(40px);"></div>
        <div style="position:absolute;width:80px;height:80px;background:rgba(124,92,255,0.1);border:1px solid #7c5cff;transform:rotateX(-90deg) translateZ(40px);"></div>
      </div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;width:100%;padding:0 12px;">
        <div style="background:#161b22;border-radius:6px;padding:6px;text-align:center;"><div style="font-size:11px;font-weight:700;color:#00e5ff;font-family:monospace;" id="iot-roll">0°</div><div style="font-size:8px;color:#5c6a8a;">Roll</div></div>
        <div style="background:#161b22;border-radius:6px;padding:6px;text-align:center;"><div style="font-size:11px;font-weight:700;color:#00d68f;font-family:monospace;" id="iot-pitch">0°</div><div style="font-size:8px;color:#5c6a8a;">Pitch</div></div>
      </div>
      <button id="iot-rotate" style="margin-top:8px;padding:4px 12px;background:#161b22;color:#00e5ff;border:1px solid #00e5ff;border-radius:4px;font-size:10px;cursor:pointer;">🔄 旋转</button>
    </div>
    <div style="flex:1;padding:12px;overflow:hidden;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;margin-bottom:8px;">环境传感器</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
        <div style="background:#161b22;border-radius:8px;padding:12px;text-align:center;"><div id="iot-temp" style="font-size:24px;font-weight:700;color:#ff3d71;font-family:monospace;">26.4°C</div><div style="font-size:9px;color:#5c6a8a;">温度 DHT11</div></div>
        <div style="background:#161b22;border-radius:8px;padding:12px;text-align:center;"><div id="iot-humid" style="font-size:24px;font-weight:700;color:#00e5ff;font-family:monospace;">62%</div><div style="font-size:9px;color:#5c6a8a;">湿度 DHT11</div></div>
        <div style="background:#161b22;border-radius:8px;padding:12px;text-align:center;"><div id="iot-dist" style="font-size:24px;font-weight:700;color:#00d68f;font-family:monospace;">38cm</div><div style="font-size:9px;color:#5c6a8a;">距离 HC-SR04</div></div>
      </div>
      <div style="font-size:10px;color:#5c6a8a;margin-bottom:8px;">实时数据流</div>
      <div style="background:#08090f;border-radius:8px;padding:12px;height:100px;position:relative;overflow:hidden;">
        <svg width="100%" height="100%" viewBox="0 0 300 80" preserveAspectRatio="none">
          <polyline id="iot-graph1" points="" fill="none" stroke="#ff3d71" stroke-width="1.5"/>
          <polyline id="iot-graph2" points="" fill="none" stroke="#00e5ff" stroke-width="1.5"/>
          <polyline id="iot-graph3" points="" fill="none" stroke="#00d68f" stroke-width="1.5"/>
        </svg>
        <div style="position:absolute;top:4px;right:8px;display:flex;gap:6px;"><span style="font-size:9px;color:#ff3d71;">━温度</span><span style="font-size:9px;color:#00e5ff;">━湿度</span><span style="font-size:9px;color:#00d68f;">━距离</span></div>
      </div>
      <div style="font-size:10px;color:#5c6a8a;margin:10px 0 6px;">Arduino LCD 1602 模拟</div>
      <div id="iot-lcd" style="background:#003366;border:2px solid #001a33;border-radius:4px;padding:8px 12px;font-family:monospace;font-size:12px;color:#00ff00;text-align:center;letter-spacing:2px;">
        <div id="iot-lcd-l1">Dist: 38 cm</div>
        <div id="iot-lcd-l2">LED: Green note</div>
      </div>
      <div id="iot-alert" style="margin-top:8px;padding:6px;background:rgba(0,214,143,0.1);border-radius:6px;font-size:10px;color:#00d68f;">✓ 安全距离 (>40cm)</div>
    </div>
  </div></div>`,
  init() {
    let cubeY = 0, rotating = false, rotId = null;
    const cube = document.getElementById('iot-cube');
    const rollEl = document.getElementById('iot-roll');
    const pitchEl = document.getElementById('iot-pitch');
    let roll = 0, pitch = 0;
    document.getElementById('iot-rotate').onclick = function() {
      rotating = !rotating;
      this.textContent = rotating ? '⏹ 停止' : '🔄 旋转';
      if (rotating) { rotId = setInterval(()=>{ cubeY += 2; cube.style.transform = `rotateX(-20deg) rotateY(${cubeY}deg)`; roll = (cubeY%360); rollEl.textContent = Math.floor(roll)+'°'; }, 30); }
      else clearInterval(rotId);
    };
    const tempEl = document.getElementById('iot-temp');
    const humidEl = document.getElementById('iot-humid');
    const distEl = document.getElementById('iot-dist');
    const lcdL1 = document.getElementById('iot-lcd-l1');
    const lcdL2 = document.getElementById('iot-lcd-l2');
    const alertEl = document.getElementById('iot-alert');
    let lcdPage = 0;
    const data1 = [], data2 = [], data3 = [];
    setInterval(() => {
      const t = 24 + Math.random()*4;
      const h = 55 + Math.random()*15;
      const d = 20 + Math.random()*40;
      tempEl.textContent = t.toFixed(1)+'°C';
      humidEl.textContent = Math.floor(h)+'%';
      distEl.textContent = Math.floor(d)+'cm';
      if (!rotating) { pitch = Math.sin(Date.now()/1000)*15; pitchEl.textContent = Math.floor(pitch)+'°'; cube.style.transform = `rotateX(${-20+pitch*0.5}deg) rotateY(${cubeY+roll*0.3}deg)`; }
      data1.push(t); data2.push(h); data3.push(d);
      if (data1.length > 30) { data1.shift(); data2.shift(); data3.shift(); }
      const toPts = (arr, max) => arr.map((v,i)=>`${i*10},${80-(v/max)*70}`).join(' ');
      document.getElementById('iot-graph1').setAttribute('points', toPts(data1, 30));
      document.getElementById('iot-graph2').setAttribute('points', toPts(data2, 80));
      document.getElementById('iot-graph3').setAttribute('points', toPts(data3, 70));
      const dist = Math.floor(d);
      if (lcdPage === 0) { lcdL1.textContent = `Dist: ${dist} cm`; lcdL2.textContent = dist<=10?'LED: Red Danger':dist<=20?'LED: Red Warning':dist<=30?'LED: Yellow Warn':dist<=40?'LED: Green note':'LED: Safety'; }
      else if (lcdPage === 1) { const now=new Date(); lcdL1.textContent = `${now.getFullYear()}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')}`; lcdL2.textContent = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`; }
      else { lcdL1.textContent = 'Welcome FW'; lcdL2.textContent = 'AI DH Team'; }
      if (dist <= 10) { alertEl.style.background='rgba(255,61,113,0.15)'; alertEl.style.color='#ff3d71'; alertEl.textContent='🚨 危险距离! 蜂鸣器 4500Hz'; }
      else if (dist <= 20) { alertEl.style.background='rgba(255,61,113,0.1)'; alertEl.style.color='#ff3d71'; alertEl.textContent='⚠ 警告距离! 蜂鸣器 3000Hz'; }
      else if (dist <= 30) { alertEl.style.background='rgba(255,170,0,0.1)'; alertEl.style.color='#ffaa00'; alertEl.textContent='⚠ 注意距离! 蜂鸣器 2500Hz'; }
      else if (dist <= 40) { alertEl.style.background='rgba(0,229,255,0.1)'; alertEl.style.color='#00e5ff'; alertEl.textContent='○ 近距离 蜂鸣器 500Hz'; }
      else { alertEl.style.background='rgba(0,214,143,0.1)'; alertEl.style.color='#00d68f'; alertEl.textContent='✓ 安全距离 (>40cm)'; }
    }, 500);
    setInterval(() => { lcdPage = (lcdPage+1)%3; }, 3000);
  }
},

// ========== 8. RAG 知识库 — 可交互向导 ==========
'rag-knowledge-base': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">企业RAG知识库搭建向导</span></div>
  <div style="height:420px;background:#0a0e1a;display:flex;flex-direction:column;">
    <div style="display:flex;justify-content:center;gap:8px;padding:12px;background:#0d1117;border-bottom:1px solid rgba(255,255,255,0.06);">
      ${['框架','文档','模型','分块','配置','部署','完成'].map((s,i)=>`<div class="rag-step" data-step="${i}" style="display:flex;align-items:center;gap:4px;cursor:pointer;"><div class="rag-dot" data-step="${i}" style="width:24px;height:24px;border-radius:50%;background:${i===0?'#00d4aa':'#161b22'};color:${i===0?'#000':'#5c6a8a'};display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;border:1px solid ${i===0?'#00d4aa':'rgba(255,255,255,0.1)'};">${i+1}</div><span style="font-size:10px;color:${i===0?'#00d4aa':'#5c6a8a'};">${s}</span></div>`).join('')}
    </div>
    <div id="rag-content" style="flex:1;padding:20px;overflow-y:auto;"></div>
    <div style="display:flex;justify-content:space-between;padding:12px;background:#0d1117;border-top:1px solid rgba(255,255,255,0.06);">
      <button id="rag-prev" style="background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:8px 16px;border-radius:6px;font-size:12px;cursor:pointer;" disabled>← 上一步</button>
      <button id="rag-next" style="background:#00d4aa;color:#000;border:none;padding:8px 16px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">下一步 →</button>
    </div>
  </div></div>`,
  init() {
    let step = 0;
    const frameworks = [
      {name:'LangChain',desc:'最流行的LLM框架',icon:'🔗'},
      {name:'LlamaIndex',desc:'数据连接优化',icon:'🦙'},
      {name:'Dify',desc:'低代码可视化编排',icon:'🧩'},
      {name:'Haystack',desc:'企业级搜索引擎',icon:'🌾'}
    ];
    const steps = [
      () => `<div style="text-align:center;margin-bottom:16px;"><div style="font-size:14px;color:#e8edf5;margin-bottom:4px;">选择 RAG 框架</div><div style="font-size:11px;color:#5c6a8a;">选择适合您项目需求的RAG框架</div></div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">${frameworks.map((f,i)=>`<div class="rag-fw" data-i="${i}" style="background:#161b22;border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:12px;cursor:pointer;text-align:center;"><div style="font-size:24px;">${f.icon}</div><div style="font-size:12px;color:#e8edf5;margin-top:4px;">${f.name}</div><div style="font-size:10px;color:#5c6a8a;">${f.desc}</div></div>`).join('')}</div>`,
      () => `<div style="text-align:center;margin-bottom:16px;"><div style="font-size:14px;color:#e8edf5;margin-bottom:4px;">上传文档</div><div style="font-size:11px;color:#5c6a8a;">支持 PDF, Word, Excel, Markdown, HTML</div></div>
        <div id="rag-upload" style="border:2px dashed rgba(255,255,255,0.15);border-radius:8px;padding:24px;text-align:center;cursor:pointer;"><div style="font-size:32px;">📁</div><div style="font-size:12px;color:#a3b1cc;margin-top:4px;">点击或拖拽文件上传</div></div>
        <div id="rag-files" style="margin-top:8px;"></div>`,
      () => `<div style="text-align:center;margin-bottom:16px;"><div style="font-size:14px;color:#e8edf5;margin-bottom:4px;">配置 LLM 模型</div><div style="font-size:11px;color:#5c6a8a;">选择生成回答使用的大语言模型</div></div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">${['GPT-4o','Claude-3.5','通义千问','文心一言','DeepSeek','本地LLM'].map((m,i)=>`<div class="rag-model" data-i="${i}" style="background:#161b22;border:1px solid ${i===0?'#00d4aa':'rgba(255,255,255,0.1)'};border-radius:8px;padding:10px;cursor:pointer;text-align:center;"><div style="font-size:16px;">${['🟢','🟣','🔵','🟡','🔴','⚙️'][i]}</div><div style="font-size:11px;color:${i===0?'#00d4aa':'#e8edf5'};margin-top:4px;">${m}</div></div>`).join('')}</div>`,
      () => `<div style="text-align:center;margin-bottom:16px;"><div style="font-size:14px;color:#e8edf5;margin-bottom:4px;">分块策略</div><div style="font-size:11px;color:#5c6a8a;">配置文档分块和向量化参数</div></div>
        <div style="background:#161b22;border-radius:8px;padding:16px;display:flex;flex-direction:column;gap:10px;">
          <div><label style="font-size:11px;color:#a3b1cc;">分块策略</label><select style="width:100%;background:#0d1117;color:#e8edf5;border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:6px;font-size:11px;margin-top:4px;"><option>固定大小分块</option><option>语义分块</option><option>递归分块</option><option>段落分块</option></select></div>
          <div><label style="font-size:11px;color:#a3b1cc;">块大小: <span id="rag-chunk">512</span> tokens</label><input type="range" min="128" max="1024" value="512" step="64" id="rag-chunk-slider" style="width:100%;accent-color:#00d4aa;"></div>
          <div><label style="font-size:11px;color:#a3b1cc;">重叠: <span id="rag-overlap">50</span> tokens</label><input type="range" min="0" max="200" value="50" step="10" id="rag-overlap-slider" style="width:100%;accent-color:#00d4aa;"></div>
          <div><label style="font-size:11px;color:#a3b1cc;">向量数据库</label><select style="width:100%;background:#0d1117;color:#e8edf5;border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:6px;font-size:11px;margin-top:4px;"><option>Chroma</option><option>Faiss</option><option>Milvus</option><option>Pinecone</option></select></div>
        </div>`,
      () => `<div style="text-align:center;margin-bottom:16px;"><div style="font-size:14px;color:#e8edf5;margin-bottom:4px;">配置预览</div><div style="font-size:11px;color:#5c6a8a;">确认您的RAG配置</div></div>
        <div style="background:#161b22;border-radius:8px;padding:16px;font-family:monospace;font-size:11px;color:#a3b1cc;line-height:1.8;">
          <div><span style="color:#5c6a8a;">framework:</span> <span style="color:#00d4aa;">LangChain</span></div>
          <div><span style="color:#5c6a8a;">llm:</span> <span style="color:#00d4aa;">GPT-4o</span></div>
          <div><span style="color:#5c6a8a;">chunk_size:</span> <span style="color:#ffaa00;">512</span></div>
          <div><span style="color:#5c6a8a;">chunk_overlap:</span> <span style="color:#ffaa00;">50</span></div>
          <div><span style="color:#5c6a8a;">vector_db:</span> <span style="color:#00e5ff;">Chroma</span></div>
          <div><span style="color:#5c6a8a;">embedding:</span> <span style="color:#00e5ff;">multilingual-e5-large</span></div>
          <div><span style="color:#5c6a8a;">retrieval:</span> <span style="color:#7c5cff;">BM25 + Vector (hybrid)</span></div>
          <div><span style="color:#5c6a8a;">reranker:</span> <span style="color:#7c5cff;">Cross-Encoder</span></div>
        </div>`,
      () => `<div style="text-align:center;margin-bottom:16px;"><div style="font-size:14px;color:#e8edf5;margin-bottom:4px;">部署命令</div><div style="font-size:11px;color:#5c6a8a;">复制以下命令进行部署</div></div>
        <div style="background:#08090f;border-radius:8px;padding:12px;font-family:monospace;font-size:11px;color:#a3b1cc;line-height:1.8;">
          <div><span style="color:#5c6a8a;">$</span> pip install langchain chromadb</div>
          <div><span style="color:#5c6a8a;">$</span> python -c "from langchain..." </div>
          <div><span style="color:#5c6a8a;">$</span> <span style="color:#00d4aa;">python rag_server.py</span></div>
          <div style="color:#00d68f;margin-top:8px;">✓ 服务启动: http://localhost:8000</div>
          <div style="color:#00d68f;">✓ 知识库已加载: 12,847 个向量</div>
        </div>
        <button id="rag-copy" style="margin-top:8px;width:100%;background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:8px;border-radius:6px;font-size:11px;cursor:pointer;">📋 复制命令</button>`,
      () => `<div style="text-align:center;padding:20px;"><div style="font-size:48px;">🎉</div><div style="font-size:16px;color:#e8edf5;margin-top:8px;">知识库搭建完成！</div><div style="font-size:11px;color:#5c6a8a;margin-top:4px;">您的RAG系统已准备好投入使用</div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:16px;text-align:left;">
          <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:20px;font-weight:700;color:#00d4aa;">12,847</div><div style="font-size:10px;color:#5c6a8a;">向量数</div></div>
          <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:20px;font-weight:700;color:#00e5ff;">340ms</div><div style="font-size:10px;color:#5c6a8a;">平均检索</div></div>
          <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:20px;font-weight:700;color:#ffaa00;">95%</div><div style="font-size:10px;color:#5c6a8a;">准确率</div></div>
          <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:20px;font-weight:700;color:#7c5cff;">5</div><div style="font-size:10px;color:#5c6a8a;">文档源</div></div>
        </div>
        <button id="rag-restart" style="margin-top:16px;background:#00d4aa;color:#000;border:none;padding:10px 24px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">🔄 再建一个</button>
      </div>`
    ];
    const contentEl = document.getElementById('rag-content');
    const prevBtn = document.getElementById('rag-prev');
    const nextBtn = document.getElementById('rag-next');
    function render() {
      contentEl.innerHTML = steps[step]();
      document.querySelectorAll('.rag-dot').forEach((d,i)=>{ d.style.background = i<=step?'#00d4aa':'#161b22'; d.style.color = i<=step?'#000':'#5c6a8a'; d.style.borderColor = i<=step?'#00d4aa':'rgba(255,255,255,0.1)'; });
      prevBtn.disabled = step === 0;
      nextBtn.textContent = step === 6 ? '完成 ✓' : '下一步 →';
      if (step === 0) {
        document.querySelectorAll('.rag-fw').forEach(f => f.onclick = () => { document.querySelectorAll('.rag-fw').forEach(x=>x.style.borderColor='rgba(255,255,255,0.1)'); f.style.borderColor='#00d4aa'; });
      }
      if (step === 1) {
        const upload = document.getElementById('rag-upload');
        const filesEl = document.getElementById('rag-files');
        const mockFiles = [{name:'产品手册.pdf',size:'2.3MB'},{name:'技术规范.md',size:'45KB'}];
        let fi = 0;
        upload.onclick = () => {
          if (fi < mockFiles.length) { filesEl.innerHTML += `<div style="display:flex;align-items:center;gap:8px;padding:6px;background:#161b22;border-radius:6px;margin-top:4px;"><span style="font-size:14px;">📄</span><span style="font-size:11px;color:#e8edf5;flex:1;">${mockFiles[fi].name}</span><span style="font-size:10px;color:#5c6a8a;">${mockFiles[fi].size}</span><span style="color:#00d68f;font-size:12px;">✓</span></div>`; fi++; }
          else { filesEl.innerHTML += `<div style="display:flex;align-items:center;gap:8px;padding:6px;background:#161b22;border-radius:6px;margin-top:4px;"><span style="font-size:14px;">📊</span><span style="font-size:11px;color:#e8edf5;flex:1;">销售数据.xlsx</span><span style="font-size:10px;color:#5c6a8a;">1.2MB</span><span style="color:#00d68f;font-size:12px;">✓</span></div>`; }
        };
      }
      if (step === 3) {
        document.getElementById('rag-chunk-slider').oninput = function() { document.getElementById('rag-chunk').textContent = this.value; };
        document.getElementById('rag-overlap-slider').oninput = function() { document.getElementById('rag-overlap').textContent = this.value; };
      }
      if (step === 5) { document.getElementById('rag-copy').onclick = function() { this.textContent='✓ 已复制'; setTimeout(()=>this.textContent='📋 复制命令', 1500); }; }
      if (step === 6) { document.getElementById('rag-restart').onclick = () => { step=0; render(); }; }
      document.querySelectorAll('.rag-step').forEach(s => s.onclick = () => { step = parseInt(s.dataset.step); render(); });
    }
    prevBtn.onclick = () => { if(step>0){step--;render();} };
    nextBtn.onclick = () => { if(step<6){step++;render();} };
    render();
  }
},

// ========== 9. YOLOv5 — 可交互 ==========
'yolov5': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">YOLOv5 人体目标检测 — 检测结果与GradCAM</span></div>
  <div style="height:420px;background:#0d1117;padding:12px;">
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <button id="y5-mode-det" style="background:rgba(0,214,143,0.2);color:#00d68f;border:1px solid #00d68f;padding:6px 14px;border-radius:6px;font-size:11px;cursor:pointer;">检测框</button>
      <button id="y5-mode-grad" style="background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:6px 14px;border-radius:6px;font-size:11px;cursor:pointer;">GradCAM热力图</button>
      <button id="y5-mode-both" style="background:#161b22;color:#a3b1cc;border:1px solid rgba(255,255,255,0.1);padding:6px 14px;border-radius:6px;font-size:11px;cursor:pointer;">叠加显示</button>
    </div>
    <div id="y5-gallery" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;"></div>
    <div style="background:#161b22;border-radius:8px;padding:12px;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;margin-bottom:8px;">模型对比</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:11px;color:#00d68f;width:80px;">YOLOv5s</span><div style="flex:1;height:8px;background:rgba(255,255,255,0.1);border-radius:4px;"><div style="width:82%;height:100%;background:#00d68f;border-radius:4px;"></div></div><span style="font-size:10px;color:#a3b1cc;width:50px;">mAP 0.82</span></div>
        <div style="display:flex;align-items:center;gap:8px;"><span style="font-size:11px;color:#00e5ff;width:80px;">YOLOv5s6</span><div style="flex:1;height:8px;background:rgba(255,255,255,0.1);border-radius:4px;"><div style="width:87%;height:100%;background:#00e5ff;border-radius:4px;"></div></div><span style="font-size:10px;color:#a3b1cc;width:50px;">mAP 0.87</span></div>
      </div>
    </div>
  </div></div>`,
  init() {
    const images = [
      {name:'street_001.jpg',boxes:[{x:'20%',y:'20%',w:18,h:50,c:0.94},{x:'55%',y:'25%',w:16,h:45,c:0.87}],grad:[{x:'15%',y:'15%',w:25,h:55},{x:'50%',y:'20%',w:22,h:50}]},
      {name:'park_003.jpg',boxes:[{x:'30%',y:'30%',w:20,h:48,c:0.91},{x:'60%',y:'35%',w:18,h:42,c:0.83}],grad:[{x:'25%',y:'25%',w:28,h:53},{x:'55%',y:'30%',w:25,h:48}]},
      {name:'office_005.jpg',boxes:[{x:'25%',y:'20%',w:18,h:52,c:0.96},{x:'50%',y:'30%',w:20,h:45,c:0.89},{x:'75%',y:'25%',w:16,h:48,c:0.82}],grad:[{x:'20%',y:'15%',w:25,h:57},{x:'45%',y:'25%',w:27,h:50},{x:'70%',y:'20%',w:22,h:53}]}
    ];
    let mode = 'det';
    const gallery = document.getElementById('y5-gallery');
    function render() {
      gallery.innerHTML = images.map((img,i)=>`<div style="background:#08090f;border-radius:8px;overflow:hidden;position:relative;height:100px;cursor:pointer;" class="y5-img" data-idx="${i}">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,${['#1a2a3a,#0d1520','#2a3a2a,#1a2a1a','#3a2a1a,#2a1a0a'][i]});"></div>
        <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);background-size:15px 15px;"></div>
        ${(mode==='det'||mode==='both')?img.boxes.map(b=>`<div style="position:absolute;top:${b.y};left:${b.x};width:${b.w}px;height:${b.h}px;border:2px solid #00d68f;"><span style="position:absolute;top:-14px;left:0;background:#00d68f;color:#000;font-size:8px;padding:1px 3px;">person ${b.c}</span></div>`).join(''):''}
        ${(mode==='grad'||mode==='both')?img.grad.map(g=>`<div style="position:absolute;top:${g.y};left:${g.x};width:${g.w}px;height:${g.h}px;background:radial-gradient(ellipse,rgba(255,0,0,0.5),rgba(255,200,0,0.2),transparent);border-radius:50%;"></div>`).join(''):''}
        <div style="position:absolute;bottom:4px;right:4px;background:rgba(0,0,0,0.7);padding:2px 6px;border-radius:3px;font-size:8px;color:#00e5ff;">${img.name}</div>
      </div>`).join('');
      gallery.querySelectorAll('.y5-img').forEach(el => { el.onmouseenter=()=>el.style.transform='scale(1.03)'; el.onmouseleave=()=>el.style.transform='scale(1)'; el.onclick=()=>{ el.style.transform='scale(1.1)'; setTimeout(()=>el.style.transform='scale(1)',300); }; });
    }
    function setMode(m) {
      mode = m;
      ['det','grad','both'].forEach(k => { const b = document.getElementById('y5-mode-'+k); const active = k===m; b.style.background = active ? (k==='det'?'rgba(0,214,143,0.2)':k==='grad'?'rgba(255,170,0,0.2)':'rgba(0,229,255,0.2)') : '#161b22'; b.style.color = active ? (k==='det'?'#00d68f':k==='grad'?'#ffaa00':'#00e5ff') : '#a3b1cc'; b.style.borderColor = active ? (k==='det'?'#00d68f':k==='grad'?'#ffaa00':'#00e5ff') : 'rgba(255,255,255,0.1)'; });
      render();
    }
    document.getElementById('y5-mode-det').onclick=()=>setMode('det');
    document.getElementById('y5-mode-grad').onclick=()=>setMode('grad');
    document.getElementById('y5-mode-both').onclick=()=>setMode('both');
    render();
  }
},

// ========== 10. 花卉分类 — 可交互 ==========
'flower-classification': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">PyTorch 花卉分类 — 102类细粒度分类</span></div>
  <div style="display:flex;height:420px;background:#0d1117;">
    <div style="flex:1;padding:12px;overflow:hidden;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;margin-bottom:8px;">点击花朵进行分类</div>
      <div id="fc-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;"></div>
      <div id="fc-upload" style="margin-top:10px;border:1px dashed rgba(255,255,255,0.15);border-radius:8px;padding:12px;text-align:center;cursor:pointer;"><div style="font-size:24px;">📁</div><div style="font-size:10px;color:#5c6a8a;">模拟上传图片</div></div>
    </div>
    <div style="width:200px;background:#161b22;border-left:1px solid rgba(255,255,255,0.06);padding:12px;">
      <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;margin-bottom:8px;">分类结果</div>
      <div id="fc-result" style="text-align:center;">
        <div style="font-size:32px;color:#5c6a8a;">🌸</div>
        <div style="font-size:11px;color:#5c6a8a;margin-top:4px;">选择一朵花</div>
      </div>
    </div>
  </div></div>`,
  init() {
    const flowers = [
      {name:'玫瑰',en:'Rosa gallica',icon:'🌹',color:'#ff6b9d',conf:98.2,top5:[['玫瑰',98.2],['月季',1.1],['山茶',0.4],['芍药',0.2],['牡丹',0.1]]},
      {name:'向日葵',en:'Helianthus',icon:'🌻',color:'#ffd93d',conf:95.7,top5:[['向日葵',95.7],['大丽花',2.3],['菊花',1.5],['金盏花',0.3],['万寿菊',0.2]]},
      {name:'郁金香',en:'Tulipa',icon:'🌷',color:'#a8e6cf',conf:93.1,top5:[['郁金香',93.1],['百合',4.2],['水仙',1.8],['风信子',0.5],['鸢尾',0.4]]},
      {name:'雏菊',en:'Bellis perennis',icon:'🌼',color:'#dda0dd',conf:76.3,top5:[['雏菊',76.3],['滨菊',12.5],['洋甘菊',7.8],['玛格丽特',2.5],['紫菀',0.9]]},
      {name:'樱花',en:'Prunus serrulata',icon:'🌸',color:'#ffb3ba',conf:91.5,top5:[['樱花',91.5],['梅花',5.2],['桃花',2.1],['李花',0.8],['梨花',0.4]]},
      {name:'木槿',en:'Hibiscus',icon:'🌺',color:'#c9b1ff',conf:88.9,top5:[['木槿',88.9],['芙蓉',6.3],['蜀葵',3.1],['锦葵',1.2],['秋葵',0.5]]}
    ];
    const grid = document.getElementById('fc-grid');
    const resultEl = document.getElementById('fc-result');
    grid.innerHTML = flowers.map((f,i)=>`<div class="fc-flower" data-i="${i}" style="background:#161b22;border-radius:8px;overflow:hidden;cursor:pointer;transition:all 0.2s;">
      <div style="height:50px;background:linear-gradient(135deg,${f.color}88,${f.color}44);display:flex;align-items:center;justify-content:center;font-size:24px;">${f.icon}</div>
      <div style="padding:4px;"><div style="font-size:10px;color:#e8edf5;">${f.name}</div><div style="font-size:8px;color:#5c6a8a;">conf: ${f.conf}%</div></div>
    </div>`).join('');
    function showResult(f) {
      resultEl.innerHTML = `<div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,${f.color}88,${f.color}44);margin:0 auto 8px;display:flex;align-items:center;justify-content:center;font-size:28px;">${f.icon}</div><div style="font-size:13px;color:#e8edf5;font-weight:600;">${f.name}</div><div style="font-size:10px;color:#00d68f;">${f.en}</div><div style="margin-top:8px;display:flex;flex-direction:column;gap:4px;">${f.top5.map(([n,c],i)=>`<div><div style="display:flex;justify-content:space-between;font-size:9px;margin-bottom:1px;"><span style="color:${i===0?'#00d68f':'#a3b1cc'};">${i+1}. ${n}</span><span style="color:#a3b1cc;">${c}%</span></div><div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;"><div style="width:${c}%;height:100%;background:${i===0?f.color:'#5c6a8a'};border-radius:2px;transition:width 0.5s;"></div></div></div>`).join('')}</div><div style="margin-top:8px;padding:6px;background:#0d1117;border-radius:6px;font-size:9px;color:#5c6a8a;">模型: ResNet-50<br>数据集: Oxford 102</div>`;
    }
    grid.querySelectorAll('.fc-flower').forEach(el => { el.onmouseenter=()=>el.style.transform='translateY(-2px)'; el.onmouseleave=()=>el.style.transform=''; el.onclick=()=>{ resultEl.innerHTML='<div style="color:#5c6a8a;font-size:11px;">分类中...</div>'; setTimeout(()=>showResult(flowers[parseInt(el.dataset.i)]), 600); }; });
    document.getElementById('fc-upload').onclick = function() { this.innerHTML='<div style="font-size:24px;">⏳</div><div style="font-size:10px;color:#ffaa00;">上传中...</div>'; setTimeout(()=>{ const f = flowers[Math.floor(Math.random()*flowers.length)]; this.innerHTML='<div style="font-size:24px;">📁</div><div style="font-size:10px;color:#5c6a8a;">模拟上传图片</div>'; showResult(f); }, 1000); };
  }
},

// ========== 11. Hadoop 集群 — 可交互 ==========
'hadoop-bigdata': {
  html: `<div class="demo-window">
  <div class="demo-tb"><span class="d red"></span><span class="d yel"></span><span class="d grn"></span><span class="demo-tt">Hadoop 分布式集群 — 监控面板</span></div>
  <div style="height:420px;background:#0d1117;padding:12px;overflow-y:auto;">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;">
      <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00d68f;" id="hd-nodes">4</div><div style="font-size:9px;color:#5c6a8a;">节点总数</div></div>
      <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00e5ff;" id="hd-hdfs">1.2TB</div><div style="font-size:9px;color:#5c6a8a;">HDFS存储</div></div>
      <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#ffaa00;" id="hd-jobs">3</div><div style="font-size:9px;color:#5c6a8a;">运行任务</div></div>
      <div style="background:#161b22;border-radius:8px;padding:10px;"><div style="font-size:18px;font-weight:700;color:#00d68f;">100%</div><div style="font-size:9px;color:#5c6a8a;">健康度</div></div>
    </div>
    <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;margin-bottom:8px;">节点状态 (点击查看详情)</div>
    <div id="hd-nodes-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px;"></div>
    <div style="font-size:10px;color:#5c6a8a;text-transform:uppercase;margin-bottom:8px;">MapReduce 任务</div>
    <div id="hd-jobs-list" style="display:flex;flex-direction:column;gap:6px;"></div>
    <div id="hd-detail" style="margin-top:12px;"></div>
  </div></div>`,
  init() {
    const nodes = [
      {name:'NameNode',ip:'192.168.1.10',role:'Master',cpu:34,mem:39,disk:0,color:'#00e5ff'},
      {name:'DataNode 1',ip:'192.168.1.11',role:'Worker',cpu:67,mem:45,disk:82,color:'#00d68f'},
      {name:'DataNode 2',ip:'192.168.1.12',role:'Worker',cpu:45,mem:52,disk:60,color:'#00d68f'},
      {name:'DataNode 3',ip:'192.168.1.13',role:'Worker',cpu:28,mem:38,disk:40,color:'#00d68f'}
    ];
    const jobs = [
      {name:'WordCount Analysis',progress:73,map:'8/12',color:'#00e5ff'},
      {name:'Data Dedup Job',progress:45,map:'3/8',color:'#ffaa00'},
      {name:'Sort Benchmark',progress:100,map:'12/12',color:'#00d68f'}
    ];
    const nodesGrid = document.getElementById('hd-nodes-grid');
    const jobsList = document.getElementById('hd-jobs-list');
    const detailEl = document.getElementById('hd-detail');
    function renderNodes() {
      nodesGrid.innerHTML = nodes.map((n,i)=>`<div class="hd-node" data-i="${i}" style="background:#161b22;border:1px solid ${n.color}30;border-radius:8px;padding:10px;cursor:pointer;transition:all 0.2s;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;"><span style="font-size:11px;font-weight:600;color:${n.color};">${n.name}</span><span style="width:8px;height:8px;background:#00d68f;border-radius:50%;animation:demo-pulse 2s infinite;"></span></div>
        <div style="font-size:9px;color:#5c6a8a;">${n.ip}</div>
        <div style="margin-top:6px;"><div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>CPU</span><span>${n.cpu}%</span></div><div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;"><div style="width:${n.cpu}%;height:100%;background:${n.cpu>60?'#ffaa00':'#00e5ff'};border-radius:2px;"></div></div></div>
        ${n.disk>0?`<div style="margin-top:4px;"><div style="display:flex;justify-content:space-between;font-size:9px;color:#a3b1cc;"><span>磁盘</span><span>${n.disk}%</span></div><div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;"><div style="width:${n.disk}%;height:100%;background:${n.disk>70?'#ff3d71':'#00d68f'};border-radius:2px;"></div></div></div>`:''}
      </div>`);
      nodesGrid.querySelectorAll('.hd-node').forEach(el => { el.onmouseenter=()=>el.style.transform='translateY(-2px)'; el.onmouseleave=()=>el.style.transform=''; el.onclick=()=>{ const n = nodes[parseInt(el.dataset.i)]; detailEl.innerHTML=`<div style="background:#161b22;border:1px solid ${n.color}30;border-radius:8px;padding:12px;"><div style="font-size:12px;color:${n.color};font-weight:600;margin-bottom:8px;">${n.name} 详情</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px;"><div><span style="color:#5c6a8a;">IP:</span> <span style="color:#a3b1cc;">${n.ip}</span></div><div><span style="color:#5c6a8a;">角色:</span> <span style="color:#a3b1cc;">${n.role}</span></div><div><span style="color:#5c6a8a;">CPU:</span> <span style="color:#a3b1cc;">${n.cpu}%</span></div><div><span style="color:#5c6a8a;">内存:</span> <span style="color:#a3b1cc;">${n.mem}%</span></div>${n.disk>0?`<div><span style="color:#5c6a8a;">磁盘:</span> <span style="color:#a3b1cc;">${n.disk}%</span></div>`:''}<div><span style="color:#5c6a8a;">状态:</span> <span style="color:#00d68f;">● 运行中</span></div></div></div>`; }; });
    }
    function renderJobs() {
      jobsList.innerHTML = jobs.map(j=>`<div style="background:#161b22;border-radius:8px;padding:8px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:11px;color:${j.color};width:120px;">${j.name}</span>
        <div style="flex:1;height:10px;background:rgba(255,255,255,0.1);border-radius:5px;overflow:hidden;"><div style="width:${j.progress}%;height:100%;background:${j.color};border-radius:5px;transition:width 0.5s;"></div></div>
        <span style="font-size:10px;color:#a3b1cc;width:60px;">Map: ${j.map}</span>
        <span style="font-size:10px;color:${j.progress===100?'#00d68f':'#a3b1cc'};">${j.progress===100?'✓':''} ${j.progress}%</span>
      </div>`);
    }
    renderNodes(); renderJobs();
    setInterval(() => {
      nodes.forEach(n => { n.cpu = Math.max(15, Math.min(90, n.cpu + (Math.random()-0.5)*10)); if(n.disk>0) n.disk = Math.max(30, Math.min(95, n.disk + (Math.random()-0.4)*3)); });
      jobs.forEach(j => { if(j.progress < 100) j.progress = Math.min(100, j.progress + Math.random()*5); });
      renderNodes(); renderJobs();
    }, 2000);
  }
}

};
