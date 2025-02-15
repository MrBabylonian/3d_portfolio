3D Interactive Portfolio Website
An interactive 3D portfolio website built with React, Three.js, and TailwindCSS featuring a unique island-based navigation system.
🌟 Features

Interactive 3D environment with dynamic camera movements
Custom 3D models including an island, flying circus plane, and animated bird
Responsive design that adapts 3D elements to screen size
Smooth animations and transitions
Modern, clean UI with TailwindCSS
Complete routing system for portfolio sections

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
Copysrc/
├── assets/
│   └── 3d/                    # 3D model files (.glb)
├── components/
│   ├── Loader.jsx            # Loading animation
│   ├── Navbar.jsx            # Navigation component
│   ├── HomeInfo.jsx          # Home page information boxes
│   └── ModelGUI/             # GUI controls for 3D models
├── models/
│   ├── Bird.jsx             # Bird model component
│   ├── FlyingCircus.jsx     # Airplane model component
│   ├── Island.jsx           # Main island model component
│   ├── Sky.jsx              # Sky background component
│   └── model_index.js       # Models barrel file
├── pages/
│   ├── About.jsx            # About page
│   ├── Contact.jsx          # Contact form page
│   ├── Home.jsx            # Home page with 3D scene
│   ├── Projects.jsx        # Projects showcase page
│   └── pages_index.js      # Pages barrel file
├── App.jsx                 # Main application component
└── main.jsx               # Application entry point
🚀 Key Features Implementation

Interactive Island Navigation

Rotatable 3D island serving as main navigation
Stage-based content revelation
Mouse and keyboard controls
Physics-based damping for smooth rotation


Animated Elements

Flying bird with path animation
Airplane with propeller animation
Dynamic sky background
Loading animations


Responsive Design

Adaptive 3D model scaling
Mobile-friendly controls
Responsive UI elements


Contact Form

Input validation
Form state management
Focus and blur effects



🔜 Upcoming Features (TODO)

Complete About page implementation
Add Projects page content
Implement form submission functionality
Add loading animations for 3D models
Optimize performance for mobile devices
Add interactive elements to the contact form
