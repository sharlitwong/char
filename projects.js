
const projects = [
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
  }
];

const section = document.getElementById("projects");

section.innerHTML = projects.map(p => `
  <a href="${p.href}" class="project-link">
    <div class="project">
      <img src="${p.img}" alt="${p.alt}" class="project-img">
      <div class="project-content">
        <h3>${p.title}</h3>
        <div class="project-info">
          <p><strong>Field:</strong> ${p.field}</p>
          <p><strong>Specific:</strong> ${p.specific}</p>
          <p><strong>Duration:</strong> ${p.duration}</p>
          <p><strong>Skills:</strong> ${p.skills}</p>
        </div>
        <p>${p.description}</p>
      </div>
    </div>
  </a>
`).join("");