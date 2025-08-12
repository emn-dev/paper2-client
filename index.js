import { initialize } from "paper2";

async function main() {
  const { paper, env, jsdom, nodeCanvas } = await initialize();
  console.log("env =====", env);
  console.log("jsdom =====", jsdom);
  console.log("nodeCanvas =====", nodeCanvas);

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

  const proj = new paper.Project(new paper.Size(1, 1));

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
  const path = new paper.Path([100, 100], [100, 200]);
  path.name = "foo2";
  const path2 = new paper.Path([50, 150], [150, 150]);
  path2.name = "bar2";
  const layer2 = new paper.Layer({
    children: [path, path2],
    strokeColor: "black",
    position: paper.view.center,
  });
  layer2.children.forEach((item) => {
    console.log(item.className, item.name);
  });
}

main().finally(() => process.exit());
