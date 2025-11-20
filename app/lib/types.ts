import { LucideIcon } from "lucide-react";

export interface Vehicle {
    name: string;
    image: string;
    tags: string[];
}

export interface Scenario {
    title: string;
    subtitle: string;
    description: string;
    icon?: LucideIcon;
    active?: boolean;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Route {
    id: string;
    title: string;
    image: string;
    date: string;
    type: string;
    price: string;
    tags: string[];
}

export interface CaseHighlight {
    label: string;
    value: string;
}

export interface CaseStudy {
    title: string;
    subtitle: string;
    summary: string;
    highlights: CaseHighlight[];
}
