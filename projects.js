
const projects = [
  {
    img: "lane/pcb.png",
    alt: "Custom PCB layout for the lane-following robot",
    title: "Autonomous Lane-Following Bot",
    field: "EE",
    specific: "Embedded Systems",
    duration: "Sept. 2026 - Present",
    skills: "ESP32-S3, C++, PlatformIO, PWM, motor control, encoders, WebSockets, Altium PCB design",
    description: "An ESP32-S3 robot with a custom PCB, encoder-based wheel-speed control, IR distance sensing, and a 7-state state machine controlled over WebSockets. Built for EE31 Junior Design at Tufts."
  },
  {
    title: "64-bit LEGv8 Single-Cycle Processor",
    field: "EE",
    specific: "Computer Architecture",
    duration: "Sept. 2026 - Present",
    skills: "SystemVerilog, RTL design, self-checking testbenches, Synopsys VCS, waveform debugging",
    description: "A working single-cycle CPU in SystemVerilog, with self-checking testbenches for its modules, built for EE25 at Tufts."
  },
  {
    href: "violin/violin.html",
    img: "violin/vln.png",
    alt: "Violin CAD Model using SolidWorks",
    title: "SolidWorks Violin",
    field: "Design",
    specific: "SolidWorks",
    duration: "Mar. 2026 - Apr. 2026",
    skills: "Surfacing, part modeling, animation, part/assembly drawings",
    description: "A parametric wooden violin designed fully in SolidWorks."
  },
  {
    href: "snake/snake.html",
    img: "snake/snake.jpg",
    alt: "SystemVerilog Snake Game",
    title: "SystemVerilog Snake Game",
    field: "EE",
    specific: "Digital Logic",
    duration: "Nov. 2025 - Jan. 2025",
    skills: "SystemVerilog, Python, FPGA, breadboard prototyping, Git",
    description: "SystemVerilog on a UPDuino to implement the Snake Arcade Game."
  },
  {
    href: "car/car.html",
    img: "car/car.png",
    alt: "RC Car",
    title: "RC Car",
    field: "EE",
    specific: "Embedded Systems",
    duration: "Jun. 2025 - Jan. 2026",
    skills: "Embedded C, Python, breadboard prototyping, STM32 (GPIO, UART, PWM), Git",
    description: "A small car controlled via a website. Tech used: Python / STM32."
  },
  {
    href: "nrl/nrl.html",
    img: "nrl/power.png",
    alt: "MIT NRL Research",
    title: "MIT NRL Digital Twin Research",
    field: "CS",
    specific: "Data Analysis",
    duration: "Sept. 2025 - March 2026",
    skills: "Python (matplotlib, pandas, iapws, numpy), Microsoft Office, Git",
    description: "Quantitative analysis on >100K datapoints from MIT's nuclear reactor to verify a digital twin software's accuracy."
  },
  {
    href: "piano/piano.html",
    img: "piano/piano.png",
    alt: "Electric Piano",
    title: "Electric Piano",
    field: "EE",
    specific: "Embedded Systems",
    duration: "Mar. 2025 - May. 2025",
    skills: "Embedded C, STM32 (PWM, I2C, interrupts, ADC, DAC), breadboard prototyping, Git",
    description: "Miniature breadboard piano with two octave whole step notes and three built-in songs with LCD games."
  },
  {
    href: "ff/ff.html",
    img: "ff/ff.png",
    alt: "D FF",
    title: "Positive Clock Edge Sensitive D Flip Flop",
    field: "EE",
    specific: "Circuits",
    duration: "Nov. 2025 - Dec. 2025",
    skills: "LTSpice, breadboard prototyping, AD2, Waveforms, oscilloscope",
    description: "A positive edge sensitive D flip flop built using NMOS' and PMOS'."
  },
  {
    title: "Pacbot",
    field: "EE",
    specific: "Robotics",
    description: "A robot that plays Pac-Man autonomously in a physical arena, built with the Tufts robotics club."
  }
];

const section = document.getElementById("projects");

const cardBody = p => `
  <div class="project">
    ${p.img
      ? `<img src="${p.img}" alt="${p.alt}" class="project-img">`
      : `<div class="project-img-placeholder">Photo coming soon</div>`}
    <div class="project-content">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </div>
  </div>
`;

// Projects without their own page yet show a card that isn't clickable
const card = p => p.href
  ? `<a href="${p.href}" class="project-link">${cardBody(p)}</a>`
  : `<div class="project-link project-no-page">${cardBody(p)}</div>`;

// Alternate projects between two columns so they read left-to-right
// while each column stacks with no gaps
const left = projects.filter((p, i) => i % 2 === 0);
const right = projects.filter((p, i) => i % 2 === 1);

section.innerHTML = `
  <div class="project-column">${left.map(card).join("")}</div>
  <div class="project-column">${right.map(card).join("")}</div>
`;