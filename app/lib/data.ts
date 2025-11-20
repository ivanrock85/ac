import { Bus, Plane, MapPin, Briefcase } from "lucide-react";
import { Vehicle, Scenario, Stat, Route, CaseStudy } from "./types";

export const VEHICLES: Vehicle[] = [
    { name: "商务轿车", image: "/images/vehicles/sedan.png", tags: ["租赁", "包车"] },
    { name: "SUV", image: "/images/vehicles/suv.png", tags: ["租赁", "包车"] },
    { name: "MPV", image: "/images/vehicles/mpv.png", tags: ["租赁", "包车"] },
    { name: "中巴", image: "/images/vehicles/minibus.png", tags: ["租赁", "包车"] },
    { name: "客车", image: "/images/vehicles/bus.png", tags: ["租赁", "包车"] },
    { name: "房车", image: "/images/vehicles/rv.png", tags: ["租赁", "包车"] }
];

export const SCENARIOS: Scenario[] = [
    {
        title: "企业通勤",
        subtitle: "固定班线与弹性调度",
        description: "提升员工通勤体验，可靠的每日班车服务。",
        icon: Bus,
        active: false
    },
    {
        title: "机场/高铁接送",
        subtitle: "准时守约",
        description: "多车型选择满足多人次、多行李需求。",
        icon: Plane
    },
    {
        title: "旅游包车",
        subtitle: "行程定制",
        description: "司机熟悉路线与景点停车，安心游玩。",
        icon: MapPin
    },
    {
        title: "会议/活动用车",
        subtitle: "多车队协同调度",
        description: "现场协调更安心，统一形象管理。",
        icon: Briefcase
    }
];

export const STATS: Stat[] = [
    { value: "300", label: "年度企业/活动用车" },
    { value: "98%", label: "乘客满意度回访" },
    { value: "150", label: "自营车辆达百余辆" },
    { value: "政企服务", label: "淄博市政府指定用车" }
];

export const ROUTES: Route[] = [
    {
        id: "1",
        title: "云南昆明+大理市+丽江6日5晚跟团游",
        image: "/images/tourism/yunnan.png",
        date: "2025年11月18日",
        type: "跟团游",
        price: "¥1480",
        tags: ["团队线路"]
    },
    {
        id: "2",
        title: "林芝鲁朗花海+拉萨布达拉宫6天5晚",
        image: "/images/tourism/tibet.png",
        date: "2025年11月18日",
        type: "专属定制房车",
        price: "¥7980",
        tags: ["高端"]
    },
    {
        id: "3",
        title: "青甘大环线房车深度游",
        image: "/images/tourism/qinghai.png",
        date: "2025年11月18日",
        type: "房车定制",
        price: "¥12800",
        tags: ["摄影"]
    },
    {
        id: "4",
        title: "四川九寨沟黄龙6日5晚纯玩",
        image: "/images/tourism/sichuan.png",
        date: "2025年11月18日",
        type: "跟团游",
        price: "¥2180",
        tags: ["休闲"]
    }
];

export const CASES: CaseStudy[] = [
    {
        title: "淄博青春之城演唱会指定用车",
        subtitle: "大型活动多线路调度",
        summary: "全程覆盖接送站/酒店/场馆，现场调度与应急备班到位。",
        highlights: [
            { label: "接送站/酒店/场馆", value: "多线路同时调度" },
            { label: "现场协调员", value: "司机统一礼仪与车检" },
            { label: "应急备班", value: "全程服务反馈" },
            { label: "统一形象", value: "车辆外观/司机着装统一" }
        ]
    },
    {
        title: "某科技园区企业通勤班车",
        subtitle: "固定班线 + 弹性加车",
        summary: "覆盖园区与市区 10+ 站点，早晚高峰排班，准点率提升 18%。",
        highlights: [
            { label: "站点覆盖", value: "10+ 固定站点" },
            { label: "准点率", value: "同比提升 18%" },
            { label: "投诉率", value: "下降 32%" },
            { label: "应急加车", value: "高峰可临时加 2-3 班次" }
        ]
    },
    {
        title: "外企高管接待与商务拜访",
        subtitle: "高端 MPV 组合",
        summary: "机场/高铁接送 + 市内拜访，司机双语沟通，路线保密。",
        highlights: [
            { label: "车型配置", value: "MPV + 豪华轿车" },
            { label: "双语服务", value: "司机英语口语" },
            { label: "行前确认", value: "拜访路线与时间窗锁定" },
            { label: "隐私与安全", value: "路线/客户信息保密" }
        ]
    },
    {
        title: "淄博-泰山-曲阜团建包车",
        subtitle: "2 天 1 夜纯玩团建",
        summary: "多车队协同，含登山/文化线路，配备领队与备用车辆。",
        highlights: [
            { label: "行程覆盖", value: "泰山 + 三孔" },
            { label: "车队规模", value: "3 辆 35-49 座" },
            { label: "领队协同", value: "全程随队沟通" },
            { label: "备用车辆", value: "1 辆随行待命" }
        ]
    }
];
