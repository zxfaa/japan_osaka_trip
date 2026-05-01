// ========== ITINERARY DATA ==========
const days = [
  {
    date:"8/27（四）", title:"抵達 → 京都夜遊", badge:"bk", bl:"京都",
    slots:[
      {t:"06:40", h:"IT210 桃園出發", d:"關西機場約 10:25 抵達。搭 JR HARUKA 特急，80分直達京都車站。", tags:["推薦"]},
      {t:"12:30", h:"抵達京都 · 飯店入住", d:"放行李、稍作休息。京都車站或四條河原町周邊住宿。"},
      {t:"14:00", h:"錦市場閒逛", d:"「京都的廚房」，嘗試玉子燒、豆乳冰淇淋、各式串燒小吃。", tags:["輕鬆"]},
      {t:"18:00", h:"晚餐 · 鴨川納涼床", d:"8月底正是納涼床季節！鴨川河畔餐廳露天高台，一邊吹河風一邊吃晚餐，夏季京都獨有體驗。建議提前預約。", tags:["夏季限定","必體驗"]},
      {t:"20:00", h:"夜遊 · 祇園 + 先斗町", d:"飯後步行至祇園花見小路，燈籠與石板路的古都夜色。先斗町入夜後茶屋幽黃燈光最有氛圍，運氣好能見到藝妓。", tags:["夜間景點"]}
    ],
    tip:"💡 鴨川納涼床一定要提前預約！這天行程輕鬆，讓大家適應時差、感受京都夜晚氣氛。"
  },
  {
    date:"8/28（五）", title:"京都全天 · 東山路線", badge:"bk", bl:"京都",
    slots:[
      {t:"早上", h:"伏見稻荷大社 · 千本鳥居", d:"建議 8:30 前抵達，人少光線美。JR稻荷站下車直接到。爬到四辻展望台約1小時。", tags:["必去","早去避人潮"]},
      {t:"午餐", h:"清水坂周邊吃飯", d:"搭京阪電車至清水五条站。推薦湯豆腐、京都懷石定食、或抹茶甜點（茶寮都路里）。"},
      {t:"下午", h:"清水寺 + 二年坂 + 三年坂", d:"清水寺下午光線角度佳。逛完沿二三年坂買伴手禮，走到八坂神社和祇園白川。", tags:["必去"]},
      {t:"晚餐", h:"祇園周邊 · 燒肉弘或居酒屋", d:"推薦燒肉弘（四條木屋町）A5和牛CP值超高，或祇園四條一帶的居酒屋，感受京都夜間街景。"},
      {t:"晚上", h:"京都塔夜景（自由選擇）", d:"票價約 ¥900，360度京都夜景。或免費逛車站大階梯LED燈光秀（4F~11F）。", tags:["夜間景點"]}
    ],
    tip:"📍 路線：伏見（南）→ 清水寺（東山）→ 祇園，搭京阪電車串連，不用走遠。"
  },
  {
    date:"8/29（六）", title:"嵐山上午 → 下午移動大阪", badge:"bt", bl:"移動日",
    slots:[
      {t:"早上", h:"嵐山 · 竹林 + 渡月橋", d:"⚠️ 週六人多，務必 8:00 前抵達！搭JR嵯峨嵐山站。渡月橋散步、竹林拍照、天龍寺（可選）。", tags:["必去","早去！"]},
      {t:"10:30", h:"（可選）金閣寺", d:"從嵐山搭計程車約20分（週六巴士停駛），約¥1,500–2,000，6人分攤很划算。"},
      {t:"午餐", h:"嵐山附近 · 吃完再移動", d:"渡月橋附近有各種食堂與甜點，吃飽後整理行李準備移動到大阪。"},
      {t:"14:00", h:"京都 → 大阪 移動", d:"搭阪急電鐵（河原町→梅田，約40分）。大阪飯店入住，建議選難波或心齋橋。", tags:["交通"]},
      {t:"晚上", h:"道頓堀初體驗 · 掃街吃小吃", d:"章魚燒（甲賀流、あっちち本舗）、大阪燒（千房）、串炸（達摩）。感受大阪夜晚的熱鬧！", tags:["必吃"]}
    ],
    tip:"🧳 嵐山行程控制在上午，下午輕鬆移動到大阪，晚上去道頓堀熱身！"
  },
  {
    date:"8/30（日）", title:"大阪 · 逛街 + 體驗生活", badge:"bo", bl:"大阪",
    slots:[
      {t:"上午", h:"黑門市場 + 周邊閒逛", d:"大阪廚房！海鮮丼、烤扇貝、和牛串、草莓大福…各攤邊走邊吃，最道地的在地早午餐體驗。", tags:["在地體驗"]},
      {t:"下午", h:"心齋橋 + 美國村 + 藥妝掃貨", d:"心齋橋商店街直走就是道頓堀，轉彎是美國村（潮牌/二手服飾）。松本清、大國藥妝、唐吉軻德沿路都有。", tags:["購物"]},
      {t:"傍晚", h:"大阪城公園散步（可選）", d:"搭地鐵去大阪城公園走走，外圍免費，天守閣入場 ¥600，傍晚光線漂亮。"},
      {t:"晚餐", h:"⭐ 特選餐廳 · 帝王蟹 / 螃蟹料理", d:"推薦：蟹道樂（道頓堀本店）螃蟹全席 ¥7,920起，或 FUJIYAMA TOKYO 帝王蟹+壽司吃到飽 ¥9,898。必提前預約！", tags:["大阪晚餐特選"]}
    ],
    rest:{title:"晚餐選擇", opts:["🦀 蟹道樂 道頓堀本店 — 老字號螃蟹全席，必提前預約","🦀 FUJIYAMA TOKYO 難波 — 帝王蟹+壽司吃到飽，四橋站1分鐘","🥩 板前燒肉一斗 東心齋橋 — A5和牛，主廚現刨"]},
    tip:"⚠️ 週日人超多！心齋橋和道頓堀人潮洶湧，建議提早出發，晚餐務必提前預約。"
  },
  {
    date:"8/31（一）", title:"大阪 · 梅田 + 生活感體驗", badge:"bo", bl:"大阪",
    slots:[
      {t:"上午", h:"天神橋筋商店街 + 大阪生活今昔館", d:"日本最長商店街，完全是在地居民日常生活的地方。今昔館穿著古裝體驗江戶時代大阪街景，很特別。", tags:["在地生活感"]},
      {t:"下午", h:"梅田 · 百貨血拚", d:"梅田阪急百貨、Grand Front Osaka、LUCUA。必買：堂島蛋糕卷（Mon Cher）、Baton d'Or 餅乾、Grand Calbee。", tags:["購物"]},
      {t:"傍晚", h:"梅田藍天大廈展望台", d:"大阪夜景首選！¥2,000（大阪周遊卡可免費）。需 15:00 前入場才能免費，傍晚日落+夜景最值得。", tags:["夜間景點"]},
      {t:"晚餐", h:"⭐ 特選餐廳 · 和牛燒肉", d:"推薦：板前燒肉一斗（A5和牛主廚現刨）、燒肉五苑（A4和牛吃到飽125品）、播重（和牛壽喜燒老字號）。", tags:["大阪晚餐特選"]}
    ],
    rest:{title:"晚餐選擇", opts:["🥩 板前燒肉一斗 — A5和牛單點，主廚現切，昭和風","🥩 燒肉五苑 西心齋橋 — 和牛+海鮮吃到飽125品","🍲 播重 道頓堀 — 和牛壽喜燒老字號，6人可包廂"]},
    tip:"💡 今天行程輕鬆，純粹享受大阪生活步調，逛街、吃喝，不要安排太多景點。"
  },
  {
    date:"9/1（二）", title:"最後採買 → 回台", badge:"bt", bl:"返程",
    slots:[
      {t:"上午", h:"心齋橋藥妝最後衝刺", d:"松本清、大國藥妝、唐吉軻德把清單掃完。551蓬萊（豬肉包）必買！記得買冰袋冷藏帶回台灣。", tags:["購物"]},
      {t:"11:30", h:"⚠️ 前往關西機場", d:"班機 15:10，建議 12:00 前離開難波。搭南海 Rapi:t（難波→關西機場，34分）。提前 3 小時到機場較保險。", tags:["回程"]},
      {t:"15:10", h:"IT211 KIX → 桃園", d:"回台！機場免稅店還可以最後採購。"}
    ],
    tip:"🧳 最後一天建議行李前一晚整理好，早上輕裝掃貨。11:30 一定要出發，不要卡太緊。"
  }
];

function renderDays() {
  const c = document.getElementById('itinerary-days');
  days.forEach((day, i) => {
    const slotsHTML = day.slots.map(s => {
      const tagsHTML = (s.tags||[]).map(t => {
        const cls = t.includes('必') || t.includes('推薦') ? 'stag stag-hot' : t.includes('吃') || t.includes('餐') ? 'stag stag-food' : t.includes('夜') ? 'stag stag-night' : 'stag stag-def';
        return `<span class="${cls}">${t}</span>`;
      }).join('');
      return `<div class="slot"><div class="slot-time">${s.t}</div><div class="slot-content"><div class="slot-title">${s.h}${tagsHTML}</div><div class="slot-desc">${s.d}</div></div></div>`;
    }).join('');
    const restHTML = day.rest ? `<div class="rest-box"><div class="rt">🍽️ ${day.rest.title}</div>${day.rest.opts.map(o=>`<div class="rd">${o}</div>`).join('')}</div>` : '';
    const tipHTML = day.tip ? `<div class="tip">${day.tip}</div>` : '';
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `<div class="day-hdr" onclick="toggleDay(${i})"><span class="badge ${day.badge}">${day.bl}</span><span class="day-ttl">${day.title}</span><span class="day-date">${day.date}</span><span class="chv" id="chv-${i}">▼</span></div><div class="day-body" id="db-${i}">${slotsHTML}${restHTML}${tipHTML}</div>`;
    c.appendChild(card);
  });
  toggleDay(0);
}

function toggleDay(i) {
  const b = document.getElementById('db-'+i), c = document.getElementById('chv-'+i);
  const o = b.classList.contains('open');
  b.classList.toggle('open', !o); c.classList.toggle('open', !o);
}

// ========== TRANSPORT DATA ==========
const tData = [
  {id:'t0', rows:[
    {f:'桃園機場',t:'關西機場 KIX',d:'—',m:'✈️ IT210 虎航',time:'2h45m',type:'train'},
    {f:'關西機場',t:'京都車站',d:'77.3 km',m:'JR HARUKA 特急',time:'80 分',type:'train',note:'線上買有6折優惠'},
    {f:'京都車站',t:'飯店',d:'~1 km',m:'步行 / 計程車',time:'10–15 分',type:'walk'},
  ]},
  {id:'t1', rows:[
    {f:'飯店',t:'伏見稻荷',d:'~2.4 km',m:'JR奈良線 稻荷站',time:'5–10 分',type:'train',note:'直達不換車'},
    {f:'伏見稻荷',t:'祇園四條',d:'4.1 km',m:'京阪電車',time:'15 分',type:'train'},
    {f:'祇園',t:'清水寺',d:'1.3 km',m:'步行（清水坂上坡）',time:'12–15 分',type:'walk',note:'有坡度'},
    {f:'清水寺',t:'八坂神社',d:'1.1 km',m:'步行',time:'5 分',type:'walk'},
    {f:'八坂神社',t:'鴨川納涼床',d:'1.1 km',m:'步行',time:'10 分',type:'walk'},
  ]},
  {id:'t2', rows:[
    {f:'飯店',t:'嵐山竹林',d:'8.6 km',m:'JR嵯峨野線 嵯峨嵐山站',time:'16 分',type:'train'},
    {f:'竹林',t:'渡月橋',d:'0.6 km',m:'步行',time:'8 分',type:'walk'},
    {f:'渡月橋',t:'金閣寺（可選）',d:'5.8 km',m:'計程車（⚠️週六）',time:'20 分',type:'bus',note:'¥1,500–2,000，6人分攤划算'},
    {f:'金閣寺',t:'京都車站',d:'6.5 km',m:'京都市巴士 101/205號',time:'30 分',type:'bus'},
  ]},
  {id:'t3', rows:[
    {f:'京都河原町',t:'大阪梅田',d:'42.7 km',m:'阪急電鐵（最順路）',time:'40 分',type:'train'},
    {f:'梅田',t:'難波飯店',d:'4.2 km',m:'地鐵 御堂筋線',time:'12 分',type:'train'},
  ]},
  {id:'t4', rows:[
    {f:'難波',t:'心齋橋',d:'0.8 km',m:'步行',time:'8–10 分',type:'walk'},
    {f:'心齋橋',t:'道頓堀',d:'0.4 km',m:'步行',time:'5 分',type:'walk'},
    {f:'道頓堀',t:'黑門市場',d:'0.6 km',m:'步行',time:'8 分',type:'walk'},
    {f:'難波',t:'大阪城',d:'2.8 km',m:'地鐵 谷町線',time:'15 分',type:'train'},
    {f:'難波',t:'梅田',d:'4.2 km',m:'地鐵 御堂筋線',time:'12 分',type:'train'},
    {f:'梅田',t:'天神橋筋商店街',d:'1.5 km',m:'步行',time:'12 分',type:'walk'},
    {f:'梅田',t:'藍天大廈',d:'0.8 km',m:'步行（穿越地下街）',time:'10 分',type:'walk'},
  ]},
  {id:'t5', rows:[
    {f:'難波',t:'關西機場',d:'34.8 km',m:'南海 Rapi:t 特急（最快）',time:'34 分',type:'train'},
    {f:'難波',t:'關西機場',d:'34.8 km',m:'利木津巴士（行李多適合）',time:'80–90 分',type:'bus',note:'需提前預約'},
  ]},
];

function renderTransport() {
  tData.forEach(sec => {
    const el = document.getElementById(sec.id);
    if (!el) return;
    sec.rows.forEach(r => {
      const tagHTML = r.type==='walk' ? '<span class="ttag ttag-walk">步行</span>' : r.type==='bus' ? '<span class="ttag ttag-bus">巴士</span>' : '<span class="ttag ttag-train">電車</span>';
      const noteHTML = r.note ? `<br><span style="font-size:10px;color:#aaa">${r.note}</span>` : '';
      const row = document.createElement('table');
      row.className = 't-table';
      row.innerHTML = `<tr><td><div class="t-from-to"><span>${r.f}</span><span class="t-arrow">→</span><span>${r.t}</span>${tagHTML}</div></td><td>${r.d}</td><td>${r.m}${noteHTML}</td><td><strong>${r.time}</strong></td></tr>`;
      el.appendChild(row);
    });
  });
}

// ========== TAB SWITCH ==========
function showTab(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

renderDays();
renderTransport();
