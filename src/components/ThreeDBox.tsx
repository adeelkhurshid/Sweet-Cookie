import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeDBox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    // Helper function to create premium 3D macarons
    const createMacaron = (colorHex: number, creamHex: number) => {
      const macaron = new THREE.Group();
      
      const shellMat = new THREE.MeshPhysicalMaterial({
        color: colorHex,
        roughness: 0.65,
        metalness: 0.05,
        clearcoat: 0.1
      });
      
      const fillingMat = new THREE.MeshStandardMaterial({
        color: creamHex,
        roughness: 0.8
      });

      // Top shell
      const topShell = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 24), shellMat);
      topShell.scale.set(1, 0.45, 1);
      topShell.position.y = 0.07;
      macaron.add(topShell);

      // Bottom shell
      const bottomShell = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 24), shellMat);
      bottomShell.scale.set(1, 0.45, 1);
      bottomShell.position.y = -0.07;
      macaron.add(bottomShell);

      // Cream filling
      const filling = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.09, 16), fillingMat);
      filling.position.y = 0;
      macaron.add(filling);

      // Ruffled feet
      const feetGeo = new THREE.TorusGeometry(0.275, 0.025, 8, 32);
      const foot1 = new THREE.Mesh(feetGeo, shellMat);
      foot1.rotation.x = Math.PI / 2;
      foot1.position.y = 0.025;
      macaron.add(foot1);

      const foot2 = new THREE.Mesh(feetGeo, shellMat);
      foot2.rotation.x = Math.PI / 2;
      foot2.position.y = -0.025;
      macaron.add(foot2);

      return macaron;
    };

    // Create Luxury Realistic 3D Cake Group
    const cakeGroup = new THREE.Group();

    // 1. Gold serving plate at the bottom
    const plateGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.08, 48);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37, // Burnished gold
      metalness: 0.9,
      roughness: 0.15,
    });
    const plate = new THREE.Mesh(plateGeo, plateMat);
    plate.position.y = -0.7;
    plate.castShadow = true;
    plate.receiveShadow = true;
    cakeGroup.add(plate);

    // 2. Bottom cake layer (Rich chocolate glaze sponge)
    const bottomLayerGeo = new THREE.CylinderGeometry(1.3, 1.3, 0.5, 64);
    const chocolateMat = new THREE.MeshPhysicalMaterial({
      color: 0x3d2314, // Rich dark chocolate
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
    });
    const bottomLayer = new THREE.Mesh(bottomLayerGeo, chocolateMat);
    bottomLayer.position.y = -0.36;
    bottomLayer.castShadow = true;
    bottomLayer.receiveShadow = true;
    cakeGroup.add(bottomLayer);

    // 3. Middle vanilla cream layer (Filling)
    const creamLayerGeo = new THREE.CylinderGeometry(1.31, 1.31, 0.1, 64);
    const creamMat = new THREE.MeshStandardMaterial({
      color: 0xfffaf0, // Vanilla cream white
      roughness: 0.7,
    });
    const creamLayer = new THREE.Mesh(creamLayerGeo, creamMat);
    creamLayer.position.y = -0.06;
    cakeGroup.add(creamLayer);

    // 4. Top cake layer (Glistening wild berry/raspberry glaze)
    const topLayerGeo = new THREE.CylinderGeometry(1.3, 1.3, 0.5, 64);
    const raspberryMat = new THREE.MeshPhysicalMaterial({
      color: 0xbc3a4e, // Luxurious raspberry red
      roughness: 0.15,
      metalness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });
    const topLayer = new THREE.Mesh(topLayerGeo, raspberryMat);
    topLayer.position.y = 0.24;
    topLayer.castShadow = true;
    topLayer.receiveShadow = true;
    cakeGroup.add(topLayer);

    // 5. Whipped cream dollops piped around the top rim
    const dollopCount = 12;
    const dollopRadius = 1.15;
    const dollopY = 0.5;

    // A reusable single dollop geometry and mesh creator
    const createDollop = () => {
      const dollop = new THREE.Group();
      const baseSphere = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), creamMat);
      const topCone = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.18, 12), creamMat);
      topCone.position.y = 0.07;
      dollop.add(baseSphere, topCone);
      return dollop;
    };

    // Toppings on top of cream dollops: miniature dark chocolate curls & shiny blueberries
    const blueberryMat = new THREE.MeshPhysicalMaterial({
      color: 0x1d1e2c, // Dark indigo blueberry
      roughness: 0.3,
      clearcoat: 0.6,
    });
    const blueberryGeo = new THREE.SphereGeometry(0.05, 10, 10);

    for (let i = 0; i < dollopCount; i++) {
      const angle = (i / dollopCount) * Math.PI * 2;
      const x = Math.cos(angle) * dollopRadius;
      const z = Math.sin(angle) * dollopRadius;

      const dollop = createDollop();
      dollop.position.set(x, dollopY, z);
      
      // Slight outward lean for organic pastry look
      dollop.rotation.z = -Math.cos(angle) * 0.12;
      dollop.rotation.x = Math.sin(angle) * 0.12;
      
      cakeGroup.add(dollop);

      // Place a glossy blueberry on every second cream dollop
      if (i % 2 === 0) {
        const blueberry = new THREE.Mesh(blueberryGeo, blueberryMat);
        blueberry.position.set(x, dollopY + 0.15, z);
        cakeGroup.add(blueberry);
      }
    }

    // 6. Lush Strawberry Centerpiece
    const strawberryGroup = new THREE.Group();
    strawberryGroup.position.set(0, 0.62, 0);

    // Strawberry body
    const strawberryGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const strawberryMat = new THREE.MeshStandardMaterial({
      color: 0xde1b2f, // Vibrant strawberry red
      roughness: 0.6,
    });
    const strawberry = new THREE.Mesh(strawberryGeo, strawberryMat);
    strawberry.scale.set(1, 1.35, 1);
    strawberryGroup.add(strawberry);

    // Tiny green leaves at the base of the strawberry
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x3d702d,
      roughness: 0.8,
    });
    const leafGeo = new THREE.ConeGeometry(0.06, 0.2, 4);
    for (let j = 0; j < 5; j++) {
      const leafAngle = (j / 5) * Math.PI * 2;
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(Math.cos(leafAngle) * 0.12, -0.1, Math.sin(leafAngle) * 0.12);
      leaf.rotation.y = leafAngle;
      leaf.rotation.z = 0.5; // Angled outward
      strawberryGroup.add(leaf);
    }
    cakeGroup.add(strawberryGroup);

    // 7. Elegant Dark Chocolate Shards with Gold Tips
    const shardMat = new THREE.MeshPhysicalMaterial({
      color: 0x1f0f08, // Extra dark chocolate
      roughness: 0.2,
      metalness: 0.4,
      clearcoat: 0.5,
    });
    const goldTipMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.15,
    });

    const shard1Group = new THREE.Group();
    const shard1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.7, 0.35), shardMat);
    const goldTip1 = new THREE.Mesh(new THREE.BoxGeometry(0.062, 0.1, 0.352), goldTipMat);
    goldTip1.position.y = 0.3;
    shard1Group.add(shard1, goldTip1);
    shard1Group.position.set(0.18, 0.75, -0.18);
    shard1Group.rotation.set(0.25, 0.4, 0.3);
    cakeGroup.add(shard1Group);

    const shard2Group = new THREE.Group();
    const shard2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.6, 0.3), shardMat);
    const goldTip2 = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.08, 0.302), goldTipMat);
    goldTip2.position.y = 0.26;
    shard2Group.add(shard2, goldTip2);
    shard2Group.position.set(-0.18, 0.7, 0.18);
    shard2Group.rotation.set(-0.2, -0.4, -0.25);
    cakeGroup.add(shard2Group);

    scene.add(cakeGroup);

    // Decorative Floating Confectionery (Macarons & Cookies)
    const cookiesGroup = new THREE.Group();
    const floatingPositions = [
      { x: -3, y: 1.5, z: -1, type: 'macaron-pink' },
      { x: 3, y: -1.2, z: -2, type: 'cookie' },
      { x: -2.5, y: -2, z: -1.5, type: 'macaron-pistachio' },
      { x: 2.8, y: 2, z: -1, type: 'cookie-dark' }
    ];

    const cookies: THREE.Mesh[] = [];

    floatingPositions.forEach((pos, idx) => {
      let itemMesh: THREE.Group;

      if (pos.type === 'macaron-pink') {
        itemMesh = createMacaron(0xf294a5, 0xfffaf0); // Pink raspberry macaron
      } else if (pos.type === 'macaron-pistachio') {
        itemMesh = createMacaron(0xb2d3a8, 0xfffef0); // Green pistachio macaron
      } else {
        itemMesh = new THREE.Group();
        // Cookie base (Golden baked biscuit color)
        const baseGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.1, 32);
        const baseMat = new THREE.MeshPhysicalMaterial({
          color: pos.type === 'cookie-dark' ? 0x4a2c11 : 0xc68b59, // Dark chocolate or golden biscuit
          roughness: 0.9,
          metalness: 0.0,
        });
        const baseMesh = new THREE.Mesh(baseGeo, baseMat);
        baseMesh.rotation.x = Math.PI / 2;
        itemMesh.add(baseMesh);

        // Add 3 chocolate chips
        const chipMat = new THREE.MeshStandardMaterial({
          color: 0x221105,
          roughness: 0.5,
        });
        const chipGeo = new THREE.SphereGeometry(0.07, 8, 8);

        const chip1 = new THREE.Mesh(chipGeo, chipMat);
        chip1.position.set(0.12, 0.06, 0.12);
        itemMesh.add(chip1);

        const chip2 = new THREE.Mesh(chipGeo, chipMat);
        chip2.position.set(-0.15, 0.06, -0.08);
        itemMesh.add(chip2);

        const chip3 = new THREE.Mesh(chipGeo, chipMat);
        chip3.position.set(0.0, 0.06, -0.18);
        itemMesh.add(chip3);
      }

      itemMesh.position.set(pos.x, pos.y, pos.z);
      
      // Save reference for animation
      const finalMesh = itemMesh as unknown as THREE.Mesh;
      cookiesGroup.add(itemMesh);
      cookies.push(finalMesh);
    });

    scene.add(cookiesGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xd4af37, 1.5, 10);
    pointLight.position.set(-2, 1, 3);
    scene.add(pointLight);

    // Target rotation values for smooth mouse interaction
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Map to -0.5 to 0.5 range (subtle 5 degree max movement)
      targetX = ((y / rect.height) - 0.5) * 0.4;
      targetY = ((x / rect.width) - 0.5) * 0.4;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow elegant cake rotation
      cakeGroup.rotation.y += 0.005;
      
      // Floating wave animation
      cakeGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15;

      // Mouse parallax easing (Subtle delay)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      cakeGroup.rotation.x = currentX;
      cakeGroup.rotation.z = -currentY;

      // Animate floating cookies and macarons
      cookies.forEach((cookie, index) => {
        cookie.rotation.y += 0.01 * (index + 1);
        cookie.rotation.x += 0.005;
        cookie.position.y += Math.sin(elapsedTime * 1.5 + index) * 0.003;
      });

      // Hover feedback - scale cake slightly
      const targetScale = isHovered ? 1.15 : 1.0;
      cakeGroup.scale.x += (targetScale - cakeGroup.scale.x) * 0.1;
      cakeGroup.scale.y += (targetScale - cakeGroup.scale.y) * 0.1;
      cakeGroup.scale.z += (targetScale - cakeGroup.scale.z) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer to handle fluid updates without breaking canvas
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height || 400;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.unobserve(container);
      renderer.dispose();
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      id="three-d-canvas-container"
      className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background radial glowing light */}
      <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
