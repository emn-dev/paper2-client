// Uncomment this to fix CODE_BLOCK_1
// import "paper2/jsdom-setup.js"; // This creates a Window environment using jsdom
import { paper, Project, Size, Path, Layer } from "paper2/paper2-core.js"; // Core

const mySvg = `
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="10cm" height="30.48cm" viewBox="0 0 10 30.48">
    <g id="export">
        <g id="foo">
          <g id="bar">
              <path id="blah" d="M1.13313,25.99574v0h0.38994v0v0.71488v0h-0.38994v0z" />
          </g>
        </g>     
    </g>
  </svg>
  `;

const proj = new Project(new Size(1, 1));

console.log("----- CODE_BLOCK_1 -----");

try {
  const layer = proj.importSVG(mySvg); // Cannot do without JSDOM
  const items = layer.children["export"].getItems({ recursive: true });
  items.forEach((item) => {
    console.log(item.className, item.name);
  });
} catch {
  console.log("CANNOT run this code without JSDOM");
}

console.log("----- CODE_BLOCK_2 -----");

// This works with or without JSDOM
const path = new Path([100, 100], [100, 200]);
path.name = "foo2";
const path2 = new Path([50, 150], [150, 150]);
path2.name = "bar2";
const layer2 = new Layer({
  children: [path, path2],
  strokeColor: "black",
  position: paper.view.center,
});
layer2.children.forEach((item) => {
  console.log(item.className, item.name);
});
