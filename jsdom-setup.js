// import { Canvas } from "canvas";
import { JSDOM } from "jsdom";

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

global.window = dom.window;
global.document = dom.window.document;
global.self = dom.window;
// global.window.HTMLCanvasElement = Canvas;
