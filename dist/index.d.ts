import { WindowFeaturesOptions } from './utils';
declare function popupCentered(url: string, title: string, width: number, height: number): Window;
declare function popupCentered(url: string, title: string, options: WindowFeaturesOptions): Window;
export default popupCentered;
