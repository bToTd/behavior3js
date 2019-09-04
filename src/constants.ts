export const VERSION = '0.2.2';
export const SUCCESS = 1;
export const FAILURE = 2;
export const RUNNING = 3;
export const ERROR = 4;
export const COMPOSITE = 'composite';
export const DECORATOR = 'decorator';
export const ACTION = 'action';
export const CONDITION = 'condition';
export interface BaseNodeData {
    children?: any[];
    child?: any;
    category?:any, 
    name:string, 
    title?:string, 
    description?:any, 
    properties?:any,
    id?:string,
    parameters?:any
  }
