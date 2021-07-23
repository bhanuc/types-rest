declare module 'bodymen' {
    export class Param {
      constructor(name: string, value: string, options: object);
      parser(name: string, fn: string): any;
      parse(value: string, path: string): any;
    }
  
    export class Schema {
      constructor(params: object, options?: object);
      option(name: string, value: any): any;
      handler(type: string, name: string, fn: Function);
      parser(name: string, fn: string): any;
      formatter(name: string, fn: string): any;
      validator(name: string, fn: string): any;
      get(name: string): any;
      set(name: string, value: any, options: object): any;
      add(name: string, value: any, options: object): any;
      param(name: string, value: any, options: object): any;
      validator(name: string, fn: string): any;
      parse(values: object): any;
      validate(values: object, next: Function): any;
      tree: any;
    }
    type handlerType = {
      parsers: number;
      formatters: any;
      validators: any;
    };
    declare const handlers: handlerType;
    export default handlers;
    export function handler(type: string, name: string, fn: Function);
    export function formatter(name: string, fn: string): any;
    export function validator(name: string, fn: string): any;
    export function middleware(schema?: any, fn?: Function): any;
    export function errorHandler(req?: any, resp?: any, fn?: Function)
  }
