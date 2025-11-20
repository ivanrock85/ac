import { LucideIcon } from 'lucide-react';

export interface VehicleType {
  id: string;
  name: string;
  image: string;
  tags: string[];
}

export interface ServiceScenario {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  isActive?: boolean;
}

export interface RoutePackage {
  id: string;
  title: string;
  image: string;
  date: string;
  type: string;
  price: string;
  tags: string[];
}

export interface Statistic {
  value: string;
  label: string;
  color?: string;
}