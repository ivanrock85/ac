import { VehicleType, ServiceScenario, RoutePackage, Statistic } from './types';
import { Bus, Plane, Briefcase, MapPin, Building2, Users, Car, ShieldCheck, Clock, UserCheck } from 'lucide-react';

export const VEHICLES: VehicleType[] = [
  { id: '1', name: '商务轿车', image: './sedan.png', tags: ['租赁', '包车'] },
  { id: '2', name: 'SUV', image: './suv.png', tags: ['租赁', '包车'] },
  { id: '3', name: 'MPV', image: './mpv.png', tags: ['租赁', '包车'] },
  { id: '4', name: '中巴', image: './minibus.png', tags: ['租赁', '包车'] },
  { id: '5', name: '客车', image: './bus.png', tags: ['租赁', '包车'] },
  { id: '6', name: '房车', image: './rv.png', tags: ['租赁', '包车'] },
];

export const SCENARIOS: ServiceScenario[] = [
  {
    id: '1',
    title: '企业通勤',
    subtitle: '固定班线与弹性调度',
    description: '提升员工通勤体验，可靠的每日班车服务。',
    icon: Bus,
    isActive: true,
  },
  {
    id: '2',
    title: '机场/高铁接送',
    subtitle: '准时守约',
    description: '多车型选择满足多人次、多行李需求。',
    icon: Plane,
  },
  {
    id: '3',
    title: '旅游包车',
    subtitle: '行程定制',
    description: '司机熟悉路线与景点停车，安心游玩。',
    icon: MapPin,
  },
  {
    id: '4',
    title: '会议/活动用车',
    subtitle: '多车队协同调度',
    description: '现场协调更安心，统一形象管理。',
    icon: Briefcase,
  },
];

export const STATS: Statistic[] = [
  { value: '300', label: '年度企业/活动用车' },
  { value: '98%', label: '乘客满意度回访' },
  { value: '150', label: '自营车辆达百余辆' },
  { value: '政企服务', label: '淄博市政府指定用车' },
];

export const ROUTES: RoutePackage[] = [
  {
    id: '1',
    title: '云南昆明+大理市+丽江6日5晚跟团游',
    image: 'https://picsum.photos/400/250?random=10',
    date: '2025年11月18日',
    type: '跟团游',
    price: '¥1480',
    tags: ['团队线路'],
  },
  {
    id: '2',
    title: '林芝鲁朗花海+拉萨布达拉宫6天5晚',
    image: 'https://picsum.photos/400/250?random=11',
    date: '2025年11月18日',
    type: '专属定制房车',
    price: '¥7980',
    tags: ['高端'],
  },
  {
    id: '3',
    title: '云南昆明+大理市+丽江6日5晚跟团游',
    image: 'https://picsum.photos/400/250?random=12',
    date: '2025年11月18日',
    type: '跟团游',
    price: '¥1480',
    tags: ['摄影'],
  },
  {
    id: '4',
    title: '云南昆明+大理市+丽江6日5晚跟团游',
    image: 'https://picsum.photos/400/250?random=13',
    date: '2025年11月18日',
    type: '跟团游',
    price: '¥1480',
    tags: ['休闲'],
  },
];