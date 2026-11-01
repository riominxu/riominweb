import meowImage from '../assets/meow-poster-cover.webp';
import meowScreenHome from '../assets/screens/meow-screen-home.webp';
import meowScreenCats from '../assets/screens/meow-screen-cats.webp';
import meowScreenDetail from '../assets/screens/meow-screen-detail.webp';
import meowScreenSupport from '../assets/screens/meow-screen-support.webp';
import meowScreenShop from '../assets/screens/meow-screen-shop.webp';
import meowScreenArticles from '../assets/screens/meow-screen-articles.webp';
import meowScreenProfile from '../assets/screens/meow-screen-profile.webp';
import meowPosterKnowledge from '../assets/screens/meow-poster-knowledge.webp';
import meowPosterAction from '../assets/screens/meow-poster-action.webp';
import meowHandbook01 from '../assets/handbook/meow-handbook-01.webp';
import meowHandbook02 from '../assets/handbook/meow-handbook-02.webp';
import meowHandbook03 from '../assets/handbook/meow-handbook-03.webp';
import meowHandbook04 from '../assets/handbook/meow-handbook-04.webp';
import meowHandbook05 from '../assets/handbook/meow-handbook-05.webp';
import meowHandbook06 from '../assets/handbook/meow-handbook-06.webp';
import meowHandbook07 from '../assets/handbook/meow-handbook-07.webp';
import meowHandbook08 from '../assets/handbook/meow-handbook-08.webp';
import meowMerchBoard from '../assets/merch/meow-merch-01.webp';
import lineageImage from '../assets/lineage/cover.webp';
import pawsImage from '../assets/paws/paws-cover.webp';
import portraitImage from '../assets/portrait-editorial.webp';

const udtAssets = import.meta.glob('../assets/udt-final/*.webp', {
  eager: true,
  import: 'default',
});

const udt = (name) => udtAssets[`../assets/udt-final/${name}.webp`];

const pawsGalleryAssets = import.meta.glob('../assets/paws/gallery/*.webp', {
  eager: true,
  import: 'default',
});

const pawsGalleryImage = (name) =>
  pawsGalleryAssets[`../assets/paws/gallery/paws-gallery-${name}.webp`];

const pawsPageAssets = import.meta.glob('../assets/paws/pages/*.webp', {
  eager: true,
  import: 'default',
});

const pawsPageImage = (number) =>
  pawsPageAssets[`../assets/paws/pages/paws-page-${number}.webp`];

const pawsPageLabels = [
  '目录 01',
  '目录 02',
  '目录 03',
  '视觉基调',
  '6A 通行与设施到达',
  'A1 外部路径',
  'A2 坡道 · A3 电梯',
  'A4 建筑入口 · A5 交通接驳',
  '章节过渡',
  '视觉基调',
  '6B 宠物舒缓区',
  'B1 户外舒缓区',
  '户外舒缓设施',
  'B2 室内舒缓区',
  '章节过渡',
];

const pawsGalleryLabels = [
  '开放空间 · 物理基础设施',
  '四类场地策略矩阵',
  '宠物共融公园 · 轴测',
  '滨水宠物友好商业街 · 轴测',
  '多层宠物综合体 · 剖面轴测',
  '宠物友好建筑 · 分层轴测',
  '无绳活动区 · 剖面与平面',
  '宠物清洗站 · 细部构造',
];

const lineageGalleryAssets = import.meta.glob('../assets/lineage/gallery/*.webp', {
  eager: true,
  import: 'default',
});

const lineageGalleryImage = (number) =>
  lineageGalleryAssets[`../assets/lineage/gallery/lineage-gallery-${number}.webp`];

const lineageGalleryLabels = [
  '广东文化区划与宗祠谱系',
  '门枕石类型谱系',
  '空间布局示意图',
  '门庭迎礼',
  '雅集回廊',
  '水榭静憩',
  '雅趣流芳',
  '瑞兽乐园',
  '室外家具转译',
];

export const profile = {
  name: '徐韫琳',
  roman: 'XU YUNLIN',
  roles: ['视觉设计师', 'AI 设计师', '品牌设计师'],
  email: 'u3652923@connect.hku.hk',
  phone: '18924578084',
  phoneDisplay: '+86 189 2457 8084',
  wechat: 'melodramma0721',
  location: '香港 / 佛山',
  availability: 'Open for select projects · 2026',
  portrait: portraitImage,
};

/**
 * Every visible page section has exactly one nav entry.
 * Keep this list in page order — the header renders it directly.
 */
export const navItems = [
  { id: 'top', index: '00', label: '首页' },
  { id: 'about', index: '01', label: '关于' },
  { id: 'work', index: '02', label: '项目' },
  { id: 'contact', index: '03', label: '联系' },
];

export const heroRoles = ['品牌视觉', 'AI 共创', '编辑设计', '空间叙事'];

export const tickerItems = [
  'BRAND IDENTITY',
  'AI ART DIRECTION',
  'EDITORIAL DESIGN',
  'SPATIAL NARRATIVE',
  'VISUAL RESEARCH',
  'CREATIVE DIRECTION',
];

export const timeline = [
  {
    period: '2026.06 — 09',
    type: 'EXPERIENCE',
    title: '设计实习生 / 研究可视化',
    org: '葉頌文環保建築師事務所',
    place: '香港',
    note: '参与香港政府建筑署委托的宠物友好设计导则研究，完成 26 个案例比较与 13 个维度、100+ 项标准的视觉转译。',
  },
  {
    period: '2025.09 — 2027.07',
    type: 'EDUCATION',
    title: 'Master of Landscape Architecture',
    org: '香港大学',
    place: '香港',
    note: 'GPA 3.62 / 4.3 · 研究方向：地方文化、公共空间与视觉转译。',
  },
  {
    period: '2021.09 — 2025.06',
    type: 'EDUCATION',
    title: '风景园林学士',
    org: '华南农业大学',
    place: '广州',
    note: 'GPA 4.08 / 5.0 · 校级一等奖学金（2022）、二等奖学金（2023—2025）。',
  },
];

/**
 * "优势" has been folded into the About bio. These are the three
 * capabilities that are actually rendered — no separate Strengths section.
 */
export const coreCapabilities = [
  {
    index: '01',
    english: 'BRAND / VISUAL SYSTEMS',
    title: '品牌视觉系统',
    summary:
      '从品牌内核到标志、字体、色彩与图形规范，建立能够持续扩展的视觉系统，而不只是一次性的好看。',
  },
  {
    index: '02',
    english: 'AI / ART DIRECTION',
    title: 'AI 视觉共创',
    summary:
      '把 Midjourney、Gemini 放进真实设计流程：用提示词探索风格、预演概念，再以设计判断完成筛选、重组与精修。',
  },
  {
    index: '03',
    english: 'RESEARCH / SPATIAL',
    title: '研究驱动的空间叙事',
    summary:
      '从田野调研与文化符号中提炼线索，把研究转译为图形、版式与可被感知的空间体验。',
  },
];

const meowProject = {
  id: 'meow',
  index: '01',
  title: '华农喵星人',
  english: 'MEOW CAMPUS',
  category: '品牌视觉 · 小程序 UI · 海报 · 手册 · 文创',
  year: '2023',
  role: '项目负责人 / 视觉设计',
  context: '校园公益项目',
  image: meowImage,
  imageAlt: '华农喵星人「猫猫咪呀」项目海报',
  imagePosition: 'center center',
  screens: [
    {
      src: meowScreenHome,
      label: '首页 / 社区入口',
      alt: '华农喵星人小程序首页',
    },
    {
      src: meowScreenCats,
      label: '猫咪档案 / 分类浏览',
      alt: '猫咪档案分类列表页面',
    },
    {
      src: meowScreenDetail,
      label: '猫咪详情 / 小橘',
      alt: '猫咪小橘的档案详情页',
    },
    {
      src: meowScreenSupport,
      label: '志愿参与 / 行动选择',
      alt: '志愿参与方式选择页面',
    },
    {
      src: meowScreenShop,
      label: '猫币商店 / 积分兑换',
      alt: '猫币商店积分兑换页面',
    },
    {
      src: meowScreenArticles,
      label: '科普内容 / 养猫知识',
      alt: '流浪猫科普文章列表页面',
    },
    {
      src: meowScreenProfile,
      label: '个人中心 / 铲屎官档案',
      alt: '个人中心与铲屎官档案页面',
    },
  ],
  posters: [
    {
      src: meowPosterKnowledge,
      label: '猫咪冷知识 / 科普海报',
      alt: '猫咪冷知识科普海报，介绍猫尾语言、睡眠、绝育与感官等知识',
    },
    {
      src: meowPosterAction,
      label: '领养与救助 / 行动海报',
      alt: '校园流浪猫领养与救助行动海报，包含待领养猫咪、救助案例和志愿者招募',
    },
  ],
  // Order is intentional: source files 猫猫8–猫猫15 map to handbook pages 01–08.
  handbook: [
    {
      src: meowHandbook01,
      label: '封面 / 目录',
      alt: '科普手册封面：猫猫与人的幸福生活',
    },
    {
      src: meowHandbook02,
      label: '猫猫花名册 01',
      alt: '猫猫花名册第一页，华山、启林等校园猫咪插画',
    },
    {
      src: meowHandbook03,
      label: '猫猫花名册 02',
      alt: '猫猫花名册第二页，图书馆、燕山等校园猫咪插画',
    },
    {
      src: meowHandbook04,
      label: '流浪猫猫困境',
      alt: '流浪猫猫困境主题插画',
    },
    {
      src: meowHandbook05,
      label: '正确救助流浪猫',
      alt: '正确救助流浪猫流程图',
    },
    {
      src: meowHandbook06,
      label: 'TNR / 绝育代替捕杀',
      alt: 'TNR 科普页面，解释抓捕、绝育、放归及绝育代替捕杀',
    },
    {
      src: meowHandbook07,
      label: '流浪猫领养须知',
      alt: '流浪猫领养须知页面，列出领养前的准备事项',
    },
    {
      src: meowHandbook08,
      label: '猫猫地图',
      alt: '华南农业大学校园猫猫地图',
    },
  ],
  merch: [
    {
      src: meowMerchBoard,
      label: '文创周边 / 帆布袋 · 挂件 · 徽章',
      alt: '华农喵星人文创周边：华南农业大学帆布袋、猫咪亚克力挂件与圆形徽章',
    },
  ],
  summary: '为校园流浪猫公益项目，建立从内容、界面到线下传播的完整视觉体系。',
  description:
    '以「科学救助」为内容核心，为华农喵星人建立品牌标志、色彩、字体与图形语言；设计包含 5 大功能板块的小程序 UI、4 款文创周边、科普手册与两场校园嘉年华主视觉。其中 8 页科普手册围绕校园猫猫图鉴、流浪猫困境、正确救助、TNR 与领养展开，以插画降低理解门槛。义卖收入全额捐赠动保协会，形成内容—物料—传播—转化的公益闭环。',
  metrics: [
    { value: '05', label: '小程序功能板块' },
    { value: '04', label: '款文创周边' },
    { value: '500+', label: '师生参与 / 触达' },
  ],
  deliverables: ['品牌视觉系统', '小程序 UI', '宣传海报', '文创周边', '科普手册', '嘉年华视觉'],
  tags: ['Brand Identity', 'UI / UX', 'Illustration', 'Merchandise'],
};

const lineageProject = {
  id: 'lineage',
  index: '03',
  title: '岭南宗祠',
  english: 'LINEAGE',
  category: '文化研究 · 符号转译 · 空间',
  year: '2023—2025',
  role: '研究员 / 设计转译',
  context: '学术研究 × 社区会所',
  image: lineageImage,
  imageAlt: '广州陈家祠建筑正立面',
  imagePosition: 'center center',
  summary: '从珠三角 12 个村落、18 场实地访谈与测绘的田野档案中，提取可复用的文化符号系统。',
  description:
    '深入珠三角 12 个村落，完成 18 场实地访谈与测绘，把建筑装饰、图案纹样与空间秩序整理为可调用的视觉元素库；以「外延—内涵」为转译逻辑，将研究成果应用于 5,000 m² 社区会所庭院，独立完成全套方案并获评校级优秀毕业设计。相关成果以第二作者身份发表于专业期刊。',
  metrics: [
    { value: '12', label: '村落田野调研' },
    { value: '18', label: '场实地访谈与测绘' },
    { value: '5,000', label: 'm² 社区空间' },
  ],
  gallery: lineageGalleryLabels.map((label, index) => ({
    src: lineageGalleryImage(String(index + 1).padStart(2, '0')),
    label,
    alt: `岭南宗祠项目图像：${label}`,
  })),
  deliverables: ['田野调研', '符号图谱', '视觉元素库', '空间转译方案', '学术论文'],
  tags: ['Cultural Research', 'Visual System', 'Spatial Design'],
};

const pawsProject = {
  id: 'paws',
  index: '02',
  title: '宠物友好设计导则',
  english: 'PAWS & POLICY',
  category: '景观研究 · 信息设计 · 公众空间',
  year: '2026',
  role: '设计实习生 / 研究可视化',
  context: '葉頌文環保建築師事務所 / 参与项目',
  image: pawsImage,
  imageAlt: '香港建筑署宠物友好设计研究项目封面',
  imagePosition: 'center top',
  confidential: true,
  confidentialNote:
    '经客户授权，本页可展示导则第 2–16 页与 8 张项目图像；完整指南文本、第 17 页之后的内容与客户资料不在本站公开。',
  summary: '把 13 个维度与 100+ 项标准，转译成一套可被理解、可被使用的研究语言。',
  description:
    '参与香港政府建筑署委托的宠物友好设计导则研究，对比分析国内外 26 个案例的空间规划与运营模式。负责将 13 个设计维度与 100+ 项行业最佳实践整理为结构化的信息图表、汇报册与演示物料，让庞杂的研究成果变得清晰、可检索、可交付。导则从通行与到达、宠物舒缓、无绳活动、清洗站到开放空间与特定建筑类型，建立起从城市外部到建筑内部的设计框架。',
  metrics: [
    { value: '26', label: '国内外案例比较' },
    { value: '13', label: '设计维度梳理' },
    { value: '100+', label: '行业标准提炼' },
  ],
  pages: pawsPageLabels.map((label, index) => ({
    src: pawsPageImage(String(index + 2).padStart(2, '0')),
    label,
    alt: `宠物友好设计导则第 ${index + 2} 页：${label}`,
  })),
  gallery: pawsGalleryLabels.map((label, index) => ({
    src: pawsGalleryImage(String(index + 1).padStart(2, '0')),
    label,
    alt: `宠物友好设计导则项目图像：${label}`,
  })),
  deliverables: ['研究框架', '信息图表', '汇报册', '演示物料'],
  tags: ['Information Design', 'Editorial', 'Research'],
};

const butterflyProject = {
  id: 'butterfly-habitat',
  index: '04',
  title: '非人类生境——基于GIS分析的香港蝴蝶栖息地重建',
  titleLead: '非人类生境',
  titleTail: '——基于GIS分析的香港蝴蝶栖息地重建',
  english: 'REMODELLING OF BUTTERFLY HABITATS',
  category: '生态规划 · GIS 分析 · 栖息地修复',
  year: '2024',
  role: '独立设计 / Individual Work',
  context: 'Competition Programme / 香港',
  image: udt('butterfly-cover'),
  imageAlt: '香港蝴蝶栖息地缩减与土地利用变化分析',
  summary: '把蝴蝶作为城市生态的指示物种，通过 GIS 识别适宜生境，并以踏脚石、廊道与斑块网络重建香港的蝴蝶栖息地。',
  description:
    '香港拥有丰富的蝴蝶多样性，但城市扩张、填海、伐木与山火持续压缩其栖息地。项目以蝴蝶作为环境变化的指示物种，选取高程、坡向、道路、河流、土地利用与城市公园六项因子，建立 GIS 生境适宜性评价；依据评分筛选踏脚石、廊道与斑块三类空间，并分别针对城市公园、河岸与郊野提出微栖息地、植物配置与生态连通策略，以扩展香港的蝴蝶适生网络。',
  metrics: [
    { value: '06', label: '项 GIS 评价因子' },
    { value: '03', label: '类生态网络' },
    { value: '1,105.6', label: 'km² 研究范围' },
  ],
  deliverables: ['生境研究', 'GIS 适宜性评价', '生态网络规划', '栖息地改造策略', '总平面'],
  tags: ['Ecological Design', 'GIS', 'Habitat Restoration', 'Hong Kong'],
  boards: [
    {
      src: udt('butterfly-board-01'),
      label: '项目概览',
      alt: '香港蝴蝶栖息地重建项目概览',
    },
    {
      src: udt('butterfly-board-02'),
      label: '蝴蝶栖息地缩减',
      alt: '香港蝴蝶栖息地缩减、土地利用变化与越冬蝴蝶数据',
    },
    {
      src: udt('butterfly-board-03'),
      label: '蝴蝶生物学与生境需求',
      alt: '蝴蝶生物学习性、生命周期与生境需求',
    },
    {
      src: udt('butterfly-board-04'),
      label: 'GIS 六因子评价',
      alt: '基于六项因子的 GIS 生境适宜性评价',
    },
    {
      src: udt('butterfly-board-05'),
      label: '踏脚石 / 城市微栖息地',
      alt: '踏脚石：城市公园与屋顶微栖息地改造',
    },
    {
      src: udt('butterfly-board-06'),
      label: '廊道 / 河流与道路',
      alt: '廊道：河流与道路沿线的蝴蝶栖息地连接',
    },
    {
      src: udt('butterfly-board-07'),
      label: '斑块 / 山林与农田',
      alt: '斑块：山林与农田的大型栖息地修复',
    },
    {
      src: udt('butterfly-board-08'),
      label: '总平面 / 栖息地扩展',
      alt: '香港蝴蝶栖息地扩展总平面',
    },
  ],
};

const shiweitangProject = {
  id: 'shiweitang',
  index: '05',
  title: '后工业景观——广州石围塘火车站的新生',
  titleLead: '后工业景观',
  titleTail: '——广州石围塘火车站的新生',
  english: 'NEW LIFE OF SHIWEITANG RAILWAY STATION',
  category: '后工业景观 · 城市更新 · 公共空间',
  year: '2023',
  role: '独立设计 / Individual Work',
  context: 'Academic Programme / 广州',
  image: udt('shiweitang-cover'),
  imageAlt: '广州石围塘火车站龙门吊与线性公园效果图',
  summary: '把封闭的百年铁路站场，重组为通勤、社区活动、铁路历史与滨水休闲四条主题线路交织的城市公园。',
  description:
    '石围塘火车站是广三铁路的起点站，也是广州最早的铁路站点之一。随着铁路线路整合与城市更新，百年站场被围蔽、闲置；三叉铁路与临江位置将场地切割成四片。设计保留并再利用站场工业建筑与设施，以四条主题线路重组空间：快速通勤线、社区活动线、铁路历史线与滨水线，并通过铁路博物馆、站台公园、桥下空间与江岸步道，让铁路遗产重新进入社区日常生活。',
  metrics: [
    { value: '04', label: '条主题线路' },
    { value: '132,145', label: 'm² 场地面积' },
    { value: '01', label: '座百年车站' },
  ],
  deliverables: ['历史研究', '场地与交通分析', '社区更新框架', '总平面', '铁路遗产节点', '滨水空间'],
  tags: ['Post-industrial', 'Adaptive Reuse', 'Railway Heritage', 'Public Space'],
  boards: [
    {
      src: udt('shiweitang-board-01'),
      label: '项目概览',
      alt: '石围塘火车站更新项目概览',
    },
    {
      src: udt('shiweitang-board-02'),
      label: '百年广三铁路',
      alt: '百年广三铁路与石围塘站历史',
    },
    {
      src: udt('shiweitang-board-03'),
      label: '站场问题',
      alt: '石围塘站场现状问题与空间切割',
    },
    {
      src: udt('shiweitang-board-04'),
      label: '社区更新框架 / 类型学',
      alt: '社区更新框架与空间类型学',
    },
    {
      src: udt('shiweitang-board-05'),
      label: '总平面 / 四条主题线路',
      alt: '四条主题线路与总平面',
    },
    {
      src: udt('shiweitang-board-06'),
      label: '节点一 / 历史遗迹',
      alt: '历史遗迹线节点设计',
    },
    {
      src: udt('shiweitang-board-07'),
      label: '节点二 / 社区活动',
      alt: '社区活动线节点设计',
    },
  ],
};

const westJuyeProject = {
  id: 'west-juye',
  index: '06',
  title: '水、流动和土地的记忆——唤醒沉睡的济南西巨野河',
  titleLead: '水、流动和土地的记忆',
  titleTail: '——唤醒沉睡的济南西巨野河',
  english: 'AWAKENING THE SLEEPING RIVER',
  category: '景观设计 · 河流修复 · 城市公共空间',
  year: '2024',
  role: '独立设计 / Individual Work',
  context: 'Competition Programme / 济南 · 西巨野河',
  image: udt('west-juye-cover'),
  imageAlt: '济南西巨野河净化池与滨水空间剖面效果图',
  summary: '以季节性的水位变化为线索，把断流的河床、洪泛空间与城市界面重新组织成一座会呼吸的自然公园。',
  description:
    '西巨野河位于济南市中心，源起南部山区，向北汇入小清河。受温带大陆性季风气候影响，河流在枯水期常出现断流与河床裸露，汛期又面临洪水风险；两岸虽已高度城市化，河流却生态破碎、可达性不足，公共活动空间匮乏。设计以济南的泉水记忆与河流的季节性变化为起点，从洪水管理、生态修复、滨水空间与城市活力四个问题出发，将河道划分为城市界面、洪泛区与河床 / 岛屿三个标高带，以之字形线形为设计语言，发展多类滨水空间原型。总平面通过草坪、运动场、户外剧场、鸟岛、阶梯广场、玻璃栈道、缓冲岛、净化池与草沟等节点，组织蓄洪、净化、栖息地与日常活动；并以湿地、草地、林地三类生境，以及正常、季节洪水与 30 年一遇洪水三个水位层级，让河流重新成为城市与土地共同的记忆载体。',
  metrics: [
    { value: '13', label: '类滨水空间原型' },
    { value: '09', label: '个总平面节点' },
    { value: '03', label: '级弹性水位' },
  ],
  deliverables: ['场地研究', '洪涝与生态框架', '空间类型学', '总平面图', '剖面与净化系统', '节点效果图'],
  tags: ['Landscape', 'River Restoration', 'Flood Resilience', 'Public Space'],
  boards: [
    {
      src: udt('west-juye-board-01'),
      label: '项目概览',
      alt: '济南西巨野河项目概览与设计说明',
    },
    {
      src: udt('west-juye-board-02'),
      label: '区位与洪水背景',
      alt: '济南区位、季风气候与历史洪水背景分析',
    },
    {
      src: udt('west-juye-board-03'),
      label: '场地问题',
      alt: '西巨野河场地分析：洪水、生态、可达性与公共空间问题',
    },
    {
      src: udt('west-juye-board-04'),
      label: '设计框架',
      alt: '从场地问题到雨洪管理、生态修复和城市自然公园的设计框架',
    },
    {
      src: udt('west-juye-board-05'),
      label: '空间类型学',
      alt: '城市界面、洪泛区与河床岛屿的滨水空间类型研究',
    },
    {
      src: udt('west-juye-board-06'),
      label: '总平面',
      alt: '西巨野河滨水公园总平面图与水位、生境、活动系统',
    },
    {
      src: udt('west-juye-board-07'),
      label: '剖面与生态',
      alt: '净化池与活动空间剖面、水净化、栖息动物和植物策略',
    },
    {
      src: udt('west-juye-board-08'),
      label: '节点与效果',
      alt: '草坪剧场与缓冲岛节点平面及滨水效果图',
    },
  ],
};

const landfillProject = {
  id: 'landfill-park',
  index: '07',
  title: '棕地修复——从垃圾填埋场到生态公园',
  titleLead: '棕地修复',
  titleTail: '——从垃圾填埋场到生态公园',
  english: 'FROM LANDFILL TO ECOLOGICAL PARK',
  category: '棕地修复 · 生态公园 · 雨洪管理',
  year: '2023',
  role: '独立设计 / Individual Work',
  context: 'Academic Programme / 广州',
  image: udt('landfill-cover'),
  imageAlt: '广州垃圾填埋场生态公园总平面与节点索引',
  summary:
    '把饱和的垃圾填埋场转化为兼具生态修复、雨洪调蓄与生产性景观的城市生态公园，让封闭的废弃物场地重新进入城市生态与公共生活。',
  description:
    '广州早期填埋场在饱和后被闲置，却仍持续影响周边土壤、空气与水体。项目以水、土壤、植被与垃圾为起点，将垃圾堆叠成三座不同高度的山体，通过雨水花园、缓冲坡与之字形路径组织雨洪与游览；再用植被重建与材料再利用恢复生态，并引入桑基鱼塘等生产性景观，让棕地从单一填埋功能转变为兼具生态修复与经济输出的城市公园。',
  metrics: [
    { value: '03', label: '座垃圾山体' },
    { value: '04', label: '类地形策略' },
    { value: '858,618', label: 'm² 场地面积' },
  ],
  deliverables: ['场地研究', '填埋场修复策略', '地形与雨洪系统', '总平面', '生态剖面', '生产性景观'],
  tags: ['Brownfield', 'Ecological Restoration', 'Landfill', 'Productive Landscape'],
  boards: [
    {
      src: udt('landfill-board-01'),
      label: '项目概览',
      alt: '广州垃圾填埋场到生态公园项目概览',
    },
    {
      src: udt('landfill-board-02'),
      label: '填埋场与城市',
      alt: '广州生活垃圾填埋场与城市山体关系',
    },
    {
      src: udt('landfill-board-03'),
      label: '生态经济综合体',
      alt: '从单一填埋功能到生态经济综合体',
    },
    {
      src: udt('landfill-board-04'),
      label: '总体设计 / 三大山体',
      alt: '总体设计：三大山体与生态公园',
    },
    {
      src: udt('landfill-board-05'),
      label: '剖面 / 食物森林与滞留池',
      alt: '食物森林与滞留池生态剖面',
    },
  ],
};

/**
 * Project information architecture.
 *
 * To add a category: append an object with a unique `id` and a `projects` array.
 * To add a project: append it to a category's `projects` array.
 * The layout switches from single-feature to a two-column grid automatically
 * based on the number of projects; no section markup needs to change.
 */
export const projectCategories = [
  {
    id: 'operations',
    index: 'A',
    title: '运营类项目',
    english: 'OPERATIONS / COMMUNITY',
    description: '以真实议题为起点，从研究、内容、界面到线下传播，让一个想法形成可持续的公共行动。',
    theme: 'operations',
    projects: [meowProject, pawsProject],
  },
  {
    id: 'design-research',
    index: 'B',
    title: '学术研究项目',
    english: 'ACADEMIC RESEARCH / CULTURAL',
    description: '从田野、档案与空间案例中建立研究框架，把文化线索转化为可被使用的设计语言。',
    theme: 'research',
    projects: [lineageProject],
  },
  {
    id: 'landscape',
    index: 'C',
    title: '景观项目',
    english: 'LANDSCAPE / SPATIAL',
    description: '从生态分析到空间落地，在场地、行为与时间之间，寻找可被体验的景观叙事。',
    theme: 'landscape',
    projects: [
      butterflyProject,
      shiweitangProject,
      westJuyeProject,
      landfillProject,
    ],
  },
];

export const allProjects = projectCategories
  .flatMap((category) => category.projects)
  .filter((project) => !project.placeholder);

export const toolkit = [
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Figma',
  'Rhino',
  'SketchUp',
  'Midjourney',
  'Gemini',
  'ChatGPT',
];
