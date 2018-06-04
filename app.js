$(function() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000,
  );
  //Renderer settings
  const renderer = new THREE.WebGLRenderer();
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;
  renderer.setClearColor(0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);

  //Makes the window responsive to resizing
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  //Adds FPS stat counter bookmarklet
  (function() {
    const script = document.createElement('script');
    script.onload = function() {
      let stats = new Stats();
      document.body.appendChild(stats.dom);
      requestAnimationFrame(function loop() {
        stats.update();
        requestAnimationFrame(loop);
      });
    };
    script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
    document.head.appendChild(script);
  })();

  //Adds an ambient light to the scene
  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
  scene.add(ambientLight);

  //Adds object into the scene, main code.




   //renders the scene.

    //Adds Orbit controls
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);

    //Renders the scene
    render();
    function render() {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    console.log(scene);
    renderer.render(scene, camera);
    $('#webGL-container').append(renderer.domElement);

  //Last bracket closing onload..
});
