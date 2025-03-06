# **3D Interactive Portfolio Website**

An immersive 3D portfolio built with **React**, **Three.js**, and **TailwindCSS**, featuring a unique **island-based navigation system** that transforms the traditional portfolio experience into an interactive journey.

---

## **✨ Live Demo**

[https://babylonian.tech/](https://babylonian.tech/)

---

## **Portfolio Preview**

![Portfolio Preview](assets/images/portfolio-preview.gif)

---

## **🌟 Key Features**

### **3D Interactive Environment**

- **Fully interactive 3D island** as the core navigation element.
- **Programmatic camera control** with cinematic transitions.
- **Custom 3D models** with optimized geometries and textures.

### **Animated Elements**

- **Animated Bird**: Autonomous bird with realistic flight patterns following Bezier curves.
- **Flying Circus Plane**: Detailed airplane model with propeller animation and circular flight path.
- **Dynamic Sky**: Realistic sky backdrop with time-of-day lighting effects.
- **Particle Effects**: Subtle environmental particles enhancing scene depth.

### **User Interface**

- **Stage-based content revelation** synchronized with 3D navigation.
- **Accessible control scheme** with keyboard, mouse, and touch support.
- **Smooth transitions** between application states.

### **Responsive Design**

- **Adaptive 3D Scene Complexity**: Automatic polygon reduction and scene optimization based on device performance.
- **Screen-Size Responsive Models**: 3D elements that scale and reposition according to viewport dimensions.
- **Touch-First Mobile Controls**: Intuitive touch controls with custom gesture recognition for mobile users.

---

## **🚀 Technologies Used**

- **React 18**: Component-based UI architecture.
- **Three.js**: 3D graphics rendering engine.
- **React Three Fiber**: React renderer for Three.js.
- **React Three Drei**: Useful helpers for React Three Fiber.
- **TailwindCSS**: Utility-first styling framework.
- **React Router DOM**: Client-side routing system.
- **React Spring**: Physics-based animation library.
- **Vite**: Next-generation frontend tooling.
- **Deno**: Server runtime for deployment.

---

## **📁 Project Structure**

```bash
src/
├── assets/
│   ├── 3d/                    # 3D model files (.glb)
│   ├── images/                # Image assets
│   └── icons/                 # UI icons
├── components/
│   ├── canvas/                # 3D scene components
│   │   ├── Island.jsx         # Main island component
│   │   ├── Bird.jsx           # Animated bird component
│   │   ├── Plane.jsx          # Flying circus plane component
│   │   └── Sky.jsx            # Dynamic sky component
│   ├── ui/                    # User interface components
│   │   ├── Loader.jsx         # Loading animation
│   │   ├── Navbar.jsx         # Navigation component
│   │   └── HomeInfo.jsx       # Information overlays
│   └── ModelGUI/              # Debug controls for 3D models
├── pages/
│   ├── About.jsx              # About page
│   ├── Contact.jsx            # Contact form page
│   ├── Home.jsx               # Home page with 3D scene
│   ├── Projects.jsx           # Projects showcase page
│   └── index.js               # Pages barrel file
├── constants/                 # Application constants
├── utils/                     # Helper functions
├── hooks/                     # Custom React hooks
├── App.jsx                    # Main application component
└── main.jsx                   # Application entry point

🚀 Key Features Implementation
Interactive Island Navigation
Rotatable 3D Island Hub: The island serves as a physical metaphor for your portfolio sections, allowing intuitive exploration by rotating it to discover different areas.
Stage-Based Content System: As you navigate to different points of interest, the camera transitions smoothly to reveal contextual content.
Multi-Modal Controls: Navigate using mouse drag, keyboard arrow keys, or touch gestures on mobile.
Physics-Based Interactions: Natural movement with momentum and damping for fluid rotation that mimics real-world physics.
Spatial UI Integration: UI elements appear in 3D space at specific island locations, blending the interface with the environment.
Animated Elements
Autonomous Bird: Lifelike bird that follows procedurally generated flight paths using cubic Bezier curves for natural movement.
Flying Circus Plane: Detailed aircraft with animated propeller that circles the island on a customizable flight path.
Dynamic Sky Environment: Reactive sky system that changes based on camera position with realistic cloud movement and lighting.
Custom Loading Sequences: Visually engaging loading screens with progress indicators and 3D elements to maintain immersion while assets load.
Particle Systems: Subtle environmental effects like floating particles that enhance the scene's depth and atmosphere.
User Interface Components
Loader: Animated loading screen with progress tracking.
Navbar: Transparent navigation bar integrated into the 3D scene for easy access to different sections.
Information Overlays: Contextual info that fades in and out based on camera positioning and island interaction.
Responsive Design & Mobile Controls
Adaptive 3D Scene Complexity: Device-dependent polygon reduction for smoother performance on mobile and desktop.
Touch Controls: Full support for touch gestures for easy navigation on mobile devices.
Mobile Optimized UI: All user interface elements are optimized for smaller screens with intuitive mobile gestures.
📱 Performance Optimization
Asset Optimization: Compressed textures and optimized 3D models.
Lazy Loading: Dynamic imports for non-critical components.
Frustum Culling: Only renders what's in the camera's view.
Level of Detail (LOD): Simplified models for distant viewing.
Instance Meshes: Efficient rendering for repeated elements.
Responsive Adjustments: Reduced polygon counts on mobile devices.
🎨 Visual Design Elements
Color Palette: Carefully selected colors for visual harmony.
Typography: Custom font hierarchy for optimal readability.
Lighting: Dynamic lighting system with ambient and directional sources.
Post-Processing: Subtle effects including bloom and ambient occlusion.
UI Integration: Non-intrusive interface elements that complement the 3D scene.
📣 Contact
For inquiries, feedback, or collaborations, feel free to reach out!

Email: bedirhangilgiler@gmail.com
LinkedIn: https://www.linkedin.com/in/bedirhangilgiler/
GitHub: https://github.com/MrBabylonian

