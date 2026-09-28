import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const statusEl = document.getElementById('status');
function updateStatus(msg) {
  if (statusEl) statusEl.textContent = msg;
  console.log('[Extractor]', msg);
}

const WIDTH = 1600;
const HEIGHT = 900;
const TOTAL_FRAMES = 100;

// Setup Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, WIDTH / HEIGHT, 0.1, 100);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  preserveDrawingBuffer: true,
  powerPreference: 'high-performance'
});
renderer.setSize(WIDTH, HEIGHT);
renderer.setPixelRatio(1);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.3;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x000000, 0); // Transparent background
document.body.appendChild(renderer.domElement);

// Lighting Rig
const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
scene.add(ambientLight);

const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
keyLight.position.set(5, 8, 5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 2048;
keyLight.shadow.mapSize.height = 2048;
keyLight.shadow.bias = -0.0001;
scene.add(keyLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 1.6);
fillLight.position.set(-5, 5, -5);
scene.add(fillLight);

const redAccentLight = new THREE.DirectionalLight(0xE50000, 2.2);
redAccentLight.position.set(-6, 4, 3);
scene.add(redAccentLight);

const topLight = new THREE.SpotLight(0xffffff, 2.5, 25, Math.PI / 3, 0.4);
topLight.position.set(0, 8, 0);
scene.add(topLight);

// Load HDR environment
const rgbeLoader = new RGBELoader();
const gltfLoader = new GLTFLoader();

const smoothstep = (t) => t * t * (3 - 2 * t);

async function init() {
  try {
    updateStatus('تحميل خريطة الإضاءة (HDR)...');
    const hdrTexture = await new Promise((resolve, reject) => {
      rgbeLoader.load('/models/city.hdr', resolve, undefined, reject);
    });
    hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = hdrTexture;

    updateStatus('تحميل مجسم بورش GT3 RS...');
    const gltf = await new Promise((resolve, reject) => {
      gltfLoader.load('/models/porsche_gt3_rs.glb', resolve, (xhr) => {
        if (xhr.lengthComputable) {
          const pct = Math.round((xhr.loaded / xhr.total) * 100);
          updateStatus(`تحميل المجسم: ${pct}%`);
        }
      }, reject);
    });

    const car = gltf.scene;

    // Enable shadows and enhance reflections
    car.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        if (node.material) {
          node.material.envMapIntensity = 1.5;
          node.material.needsUpdate = true;
        }
      }
    });

    // Center car geometry around origin
    const box = new THREE.Box3().setFromObject(car);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    car.position.set(-center.x, -center.y, -center.z);

    const carPivot = new THREE.Group();
    carPivot.add(car);
    scene.add(carPivot);

    // Position camera
    const maxDim = Math.max(size.x, size.y, size.z);
    camera.position.set(0, 0, maxDim * 1.55);
    camera.lookAt(0, 0, 0);

    // Keyframe Quaternions for Choreographed Scroll Animation:
    // 1. Hero: Parked front-three-quarter view (slightly angled up)
    const q1_Hero = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.12, 0.58, 0));

    // 2. Features: Tilted UP to top-down view showing the ROOF of the car
    const q2_Roof = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI / 2.35, 0.05, 0));

    // 3. Showcase: Clean aerodynamic Side-Profile view
    const q3_Side = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.06, Math.PI / 2, 0));

    // 4. Finale: Straight-on aggressive Front view
    const q4_Front = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.1, 0, 0));

    renderer.render(scene, camera);
    updateStatus('تم تجهيز المجسم بنجاح. بدء استخراج الفريمات...');

    window.__READY_FOR_EXTRACTION__ = true;
    window.__TOTAL_FRAMES__ = TOTAL_FRAMES;

    window.__RENDER_FRAME__ = async (frameIndex) => {
      const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));

      // Keyframe distribution across 100 frames:
      // 0 - 32: Hero -> Roof (car flips up to reveal the roof)
      // 32 - 66: Roof -> Side profile
      // 66 - 99: Side profile -> Front view
      if (idx <= 32) {
        const t = smoothstep(idx / 32);
        carPivot.quaternion.slerpQuaternions(q1_Hero, q2_Roof, t);
      } else if (idx <= 66) {
        const t = smoothstep((idx - 32) / 34);
        carPivot.quaternion.slerpQuaternions(q2_Roof, q3_Side, t);
      } else {
        const t = smoothstep((idx - 66) / 33);
        carPivot.quaternion.slerpQuaternions(q3_Side, q4_Front, t);
      }

      renderer.render(scene, camera);
      return renderer.domElement.toDataURL('image/webp', 0.90);
    };

  } catch (err) {
    updateStatus('خطأ أثناء التحميل: ' + err.message);
    console.error(err);
    window.__EXTRACTION_ERROR__ = err.message;
  }
}

init();
