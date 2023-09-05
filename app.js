document.addEventListener('DOMContentLoaded', () => {
  // JavaScript code to control the 3D robot arm

  // Create the scene and camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create the renderer
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('robot-arm') });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create the robot arm using 3D objects (adjust the geometry and position based on your robot arm model)
  const base = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshNormalMaterial());
  const link1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 4), new THREE.MeshNormalMaterial());
  const link2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.6, 3), new THREE.MeshNormalMaterial());
  const link3 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 2), new THREE.MeshNormalMaterial());

  // Set the position of each link in the robot arm
  link1.position.y = 2;
  link2.position.y = 2;
  link3.position.y = 2;

  // Add the robot arm links to the scene
  scene.add(base);
  scene.add(link1);
  scene.add(link2);
  scene.add(link3);

  // Function to control the robot arm based on input angles
  function controlRobotArm(angle1, angle2, angle3) {
    // Convert angles to radians
    const radian1 = THREE.MathUtils.degToRad(angle1);
    const radian2 = THREE.MathUtils.degToRad(angle2);
    const radian3 = THREE.MathUtils.degToRad(angle3);

    // Rotate each link of the robot arm based on the input angles
    link1.rotation.z = radian1;
    link2.rotation.z = radian2;
    link3.rotation.z = radian3;

    // Render the scene to display the updated robot arm position
    renderer.render(scene, camera);
  }

  const angle1Input = document.getElementById('angle1');
  const angle2Input = document.getElementById('angle2');
  const angle3Input = document.getElementById('angle3');
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', () => {
    const angle1 = parseFloat(angle1Input.value);
    const angle2 = parseFloat(angle2Input.value);
    const angle3 = parseFloat(angle3Input.value);

    controlRobotArm(angle1, angle2, angle3);
  });
});
