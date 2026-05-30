import { LucideIcon } from 'lucide-react';

export interface ResourceCardProps {
  id: string;
  name: string;
  quantity: number;
  icon: LucideIcon;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onDelete: (id: string) => void;
}

export enum ResourceType {
  FOOD = 'FOOD',
  WATER = 'WATER',
  MEDICINE = 'MEDICINE',
  TOOL = 'TOOL',
  FUEL = 'FUEL',
  EQUIPMENT = 'EQUIPMENT',
  OTHER = 'OTHER',
}

export interface ResourceItem {
  id: string;
  name: string;
  type: ResourceType;
  quantity: number;
}