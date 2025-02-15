3D Interactive Portfolio Website
An interactive 3D portfolio website built with React, Three.js, and TailwindCSS featuring a unique island-based navigation system.

🌟 Features
Interactive 3D Environment: Dynamic camera movements and engaging 3D elements.
Custom 3D Models: Includes models like an island, flying circus plane, and an animated bird.
Responsive Design: Adapts 3D elements to different screen sizes.
Smooth Animations: Fluid animations and transitions for an immersive user experience.
Modern UI: Clean design with TailwindCSS styling.
Complete Routing System: Seamlessly navigate through different sections of the portfolio.
🔧 Technical Stack
Frontend Framework: React
3D Graphics:
Three.js
React Three Fiber
React Three Drei
Styling: TailwindCSS
Routing: React Router DOM
Animation: React Spring
📁 Project Structure
bash
Copy
src/
├── assets/
│   └── 3d/                    # 3D model files (.glb)
├── components/
│   ├── Loader.jsx             # Loading animation
│   ├── Navbar.jsx             # Navigation component
│   ├── HomeInfo.jsx           # Home page information boxes
│   └── ModelGUI/              # GUI controls for 3D models
├── models/
│   ├── Bird.jsx               # Bird model component
│   ├── FlyingCircus.jsx       # Airplane model component
│   ├── Island.jsx             # Main island model component
│   ├── Sky.jsx                # Sky background component
│   └── model_index.js         # Models barrel file
├── pages/
│   ├── About.jsx              # About page
│   ├── Contact.jsx            # Contact form page
│   ├── Home.jsx               # Home page with 3D scene
│   ├── Projects.jsx           # Projects showcase page
│   └── pages_index.js         # Pages barrel file
├── App.jsx                    # Main application component
└── main.jsx                   # Application entry point
🚀 Key Features Implementation
Interactive Island Navigation
Rotatable 3D island serving as the main navigation.
Stage-based content revelation for smooth browsing.
Mouse and keyboard controls for intuitive navigation.
Physics-based damping for smooth rotation.
Animated Elements
Bird: Animated bird following a custom flight path.
Flying Circus Plane: Animated airplane with spinning propeller.
Dynamic Sky Background: Real-time sky changes that fit the scene.
Loading Animations: Engaging loading screens while assets load.
Responsive Design
Adaptive 3D model scaling based on screen size.
Mobile-friendly controls for touch-based interactions.
Optimized UI elements that adjust to different viewports.
Contact Form
Input Validation: Ensures correct form submission.
Form State Management: Manages form data and errors.
Focus and Blur Effects: Enhances user experience during form input.
🔜 Upcoming Features (TODO)
Complete About page implementation.
Add Projects page content.
Implement form submission functionality.
Add loading animations for 3D models.
Optimize performance for mobile devices.
Add interactive elements to the contact form.
