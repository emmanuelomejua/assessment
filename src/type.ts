export interface WidgetDetails {
    title: string;
    num: number;
    icon: string;
    bgColor: string;
  }
  
export interface WidgetProps {
    type: 'channels' | 'members' | 'impreession'
}
