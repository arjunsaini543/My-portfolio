// Make sure this code runs only after the DOM is ready
$(document).ready(function () {
  Matter.use("matter-attractors");
  Matter.use("matter-wrap");

  let dimensions = {
    width: $(window).width(),
    height: $(window).height(),
  };

  function runMatter() {
    const {
      Engine,
      Events,
      Runner,
      Render,
      World,
      Body,
      Mouse,
      Common,
      Composite,
      Composites,
      Bodies,
    } = Matter;

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const render = Render.create({
      element: document.getElementById("wrapper-canvas"),
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
        showVelocity: false,
      },
    });

    const runner = Runner.create();
    const world = engine.world;
    world.gravity.scale = 0;

    // create attractor
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 20, dimensions.height / 20) / 2,
      {
        isStatic: true,
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
          lineWidth: 0,
        },
      }
    );
    World.add(world, attractiveBody);

    // Add attracted bodies
    for (let i = 0; i < 30; i++) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      let sides = Math.round(Common.random(3, 6));

      let shapes = [
        Bodies.polygon(x, y, sides, s, {
          mass: s / 80,
          friction: 0,
          frictionAir: 0.02,
          angle: Math.random() * Math.PI * 2,
          render: {
            fillStyle: "#FFFFFF",
            strokeStyle: "#DDDDDD",
            lineWidth: 2,
          },
        }),
        Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: "#FF2D6A",
            strokeStyle: "#E9202E",
            lineWidth: 2,
          },
        }),
        Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: "#4267F8",
            strokeStyle: "#3257E8",
            lineWidth: 4,
          },
        }),
        Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: "rgb(240,240,240)",
            strokeStyle: "#FFFFFF",
            lineWidth: 3,
          },
        }),
      ];

      shapes.forEach((shape) => World.add(world, shape));
    }

    const mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    return {
      engine,
      render,
      runner,
      canvas: render.canvas,
      stop: () => {
        Render.stop(render);
        Runner.stop(runner);
      },
      play: () => {
        Runner.run(runner, engine);
        Render.run(render);
      },
    };
  }

  // Resize handler with debounce
  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Resize canvas on window resize
  function setWindowSize() {
    dimensions.width = $(window).width();
    dimensions.height = $(window).height();

    if (m.render && m.render.canvas) {
      m.render.canvas.width = dimensions.width;
      m.render.canvas.height = dimensions.height;
      m.render.options.width = dimensions.width;
      m.render.options.height = dimensions.height;
    }
  }

  // Initialize animation
  let m = runMatter();
  setWindowSize();
  $(window).resize(debounce(setWindowSize, 250));
});
