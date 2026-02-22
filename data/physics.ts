import { Subject } from "../types";
import { getReelColor } from "./helpers";

export const PHY_SUBJECT: Subject = {
  id: "phy",
  name: "Physics",
  icon: "Atom",
  color: "bg-blue-600",
  syllabus:
    "1. Rotational Dynamics\n2. Mechanical Properties of Fluids\n3. Kinetic Theory of Gases\n4. Thermodynamics\n5. Oscillations\n6. Superposition of Waves\n7. Wave Optics\n8. Electrostatics\n9. Current Electricity\n10. Magnetic Effects of Electric Current\n11. Magnetic Materials\n12. Electromagnetic Induction\n13. AC Circuits\n14. Dual Nature of Radiation & Matter\n15. Structure of Atom\n16. Semiconductor Devices",
  paperPattern:
    "### Physics Paper Pattern (70 Marks)\n\n* **Section A (14 Marks)**: 7 MCQs (2 marks each)\n* **Section B (18 Marks)**: Very short answers\n* **Section C (12 Marks)**: Short answers\n* **Section D (8 Marks)**: Long answers (Any 2 out of 3)\n* **Section E (18 Marks)**: Numericals\n* **Internal Assessment (30 Marks)**: Practical",
  previousPapers: [
    {
      year: "2025",
      title: "HSC Physics Feb 2025",
      link: "/papers/physics-2025.pdf",
    },
    {
      year: "2024",
      title: "HSC Physics Feb 2024",
      link: "/papers/physics-2024.pdf",
    },
    {
      year: "2023",
      title: "HSC Physics Feb 2023",
      link: "/papers/physics-2023.pdf",
    },
    {
      year: "2022",
      title: "HSC Physics Feb 2022",
      link: "/papers/physics-2022.pdf",
    },
  ],
  chapters: [
    {
      id: "phy1",
      title: "1. Rotational Dynamics",
      description: "Angular momentum, Moment of inertia, Torque.",
      summary:
        "**Rotational Motion**: Motion about a fixed axis\n**Torque (-�)**: -� = r +� F = I+�\n**Moment of Inertia (I)**: Rotational mass\n**Angular Momentum (L)**: L = I-�\n**Conservation**: L = constant when -� = 0",
      detailedNotes:
        "### 1. Rotational Motion\nMotion of a rigid body about a fixed axis.\n\n### 2. Angular Quantities\n* **Angular Displacement (++)**: Angle rotated (in radians)\n* **Angular Velocity (-�)**: -� = d++/dt (rad/s)\n* **Angular Acceleration (+�)**: +� = d-�/dt (rad/s-�)\n\n### 3. Relation with Linear Motion\n* s = r++\n* v = r-�\n* a = r+�\n\n### 4. Torque (-�)\n* Rotational equivalent of force\n* -� = r +� F = rF sin ++\n* -� = I+� (Newton's second law for rotation)\n* Unit: N-+m\n\n### 5. Moment of Inertia (I)\n* Rotational equivalent of mass\n* I = +�mr-� (for particles)\n* I = G�r-� dm (for continuous body)\n* Depends on axis of rotation\n\n**Common MOI Values:**\n* Ring (axis through center): I = MR-�\n* Disc (axis through center): I = -+MR-�\n* Solid Sphere: I = G��MR-�\n* Hollow Sphere: I = G��MR-�\n* Rod (center): I = ML-�/12\n* Rod (end): I = ML-�/3\n\n### 6. Theorems\n**Parallel Axis Theorem:**\nI = Icm + Md-�\n\n**Perpendicular Axis Theorem:**\nIz = Ix + Iy (for laminar bodies)\n\n### 7. Angular Momentum (L)\n* L = I-�\n* L = r +� p\n* -� = dL/dt\n\n### 8. Conservation of Angular Momentum\nIf -� = 0, then L = constant\nIG��-�G�� = IG��-�G��\n\nExamples: Ice skater spinning, diver somersaulting\n\n### 9. Rotational Kinetic Energy\nKE = -+I-�-�\nTotal KE = -+mv-� + -+I-�-� (rolling)",
      flashcards: [
        { id: "f1", front: "Formula for Torque?", back: "-� = r +� F = I+�" },
        {
          id: "f2",
          front: "Moment of Inertia of a Disc?",
          back: "I = -+MR-� (axis through center)",
        },
        {
          id: "f3",
          front: "Moment of Inertia of a Ring?",
          back: "I = MR-� (axis through center)",
        },
        {
          id: "f4",
          front: "Angular Momentum formula?",
          back: "L = I-� = r +� p",
        },
        {
          id: "f5",
          front: "Parallel Axis Theorem?",
          back: "I = Icm + Md-� (d = distance from CM axis)",
        },
        {
          id: "f6",
          front: "When is Angular Momentum conserved?",
          back: "When external torque is zero (-� = 0).",
        },
        { id: "f7", front: "Rotational KE formula?", back: "KE = -+I-�-�" },
      ],
      mcqs: [
        {
          id: "q1",
          question: "SI unit of torque is:",
          options: ["Joule", "Newton", "N-+m", "Watt"],
          correctIndex: 2,
          explanation: "Torque = Force +� Distance = N +� m = N-+m",
        },
        {
          id: "q2",
          question: "Moment of inertia of a solid sphere is:",
          options: ["MR-�", "-+MR-�", "G��MR-�", "G��MR-�"],
          correctIndex: 2,
          explanation: "Solid sphere: I = G��MR-� about diameter.",
        },
        {
          id: "q3",
          question: "Angular momentum is conserved when:",
          options: [
            "Force is zero",
            "Torque is zero",
            "Velocity is zero",
            "Acceleration is zero",
          ],
          correctIndex: 1,
          explanation: "L = constant when -� = 0.",
        },
        {
          id: "q4",
          question: "Perpendicular axis theorem applies to:",
          options: [
            "3D bodies",
            "Laminar bodies",
            "All bodies",
            "Point masses",
          ],
          correctIndex: 1,
          explanation: "Only for flat (2D) bodies.",
        },
        {
          id: "q5",
          question:
            "An ice skater spins faster when arms are pulled in because:",
          options: [
            "Mass decreases",
            "I decreases",
            "Torque increases",
            "Energy increases",
          ],
          correctIndex: 1,
          explanation: "I decreases, so -� increases (L = I-� constant).",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Torque",
          content: "-� = r +� F\n-� = I+�\nRotational force!",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "MOI",
          content: "Moment of Inertia.\nRotational mass.\nI = +�mr-�",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Disc vs Ring",
          content: "Ring: I = MR-�\nDisc: I = -+MR-�\nDisc has less MOI!",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Angular Momentum",
          content: "L = I-�\nConserved when -� = 0.\nIce skater example!",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Parallel Axis",
          content: "I = Icm + Md-�\nShift axis by d.\nI increases!",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Rolling Motion",
          content: "KE = -+mv-� + -+I-�-�\nTranslation + Rotation.",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "phy2",
      title: "2. Mechanical Properties of Fluids",
      description: "Viscosity, Surface Tension, Fluid Flow.",
      summary:
        "**Fluid**: Substance that can flow (liquid/gas)\n**Viscosity**: Internal friction of fluid\n**Surface Tension**: Force per unit length on liquid surface\n**Bernoulli's Principle**: P + -+-�v-� + -�gh = constant",
      detailedNotes:
        "### 1. Pressure in Fluids\n* Pressure = Force/Area = F/A\n* SI Unit: Pascal (Pa) = N/m-�\n* Atmospheric Pressure: 1.013 +� 10G�� Pa\n\n### 2. Pascal's Law\nPressure applied to enclosed fluid is transmitted equally in all directions.\n**Applications**: Hydraulic lift, hydraulic brakes\n\n### 3. Viscosity\n* Internal friction in fluids\n* **Newton's Law of Viscosity**: F = ++A(dv/dx)\n* ++ = coefficient of viscosity\n* SI Unit: Pa-+s or Poiseuille\n* CGS Unit: Poise (1 Pa-+s = 10 Poise)\n\n**Stokes' Law**:\nF = 6-�++rv (for sphere in fluid)\n\n**Terminal Velocity**:\nvG� = 2r-�(-�--�)g / 9++\n\n### 4. Surface Tension\n* Force per unit length on liquid surface\n* T = F/L\n* SI Unit: N/m\n* Due to cohesive forces\n\n**Applications**:\n* Water droplets are spherical\n* Insects walking on water\n* Capillary action\n\n**Excess Pressure**:\n* Soap bubble: +�P = 4T/r\n* Liquid drop: +�P = 2T/r\n\n### 5. Capillarity\n* Rise or fall of liquid in narrow tube\n* h = 2T cos ++ / -�gr\n* Water rises (++ < 90-�), Mercury falls (++ > 90-�)\n\n### 6. Fluid Dynamics\n**Equation of Continuity**:\nAG��vG�� = AG��vG�� (for incompressible fluid)\n\n**Bernoulli's Theorem**:\nP + -+-�v-� + -�gh = constant\n\n**Applications**:\n* Airplane wings (lift)\n* Venturi meter\n* Atomizer\n* Magnus effect",
      flashcards: [
        {
          id: "f1",
          front: "What is Pascal's Law?",
          back: "Pressure in enclosed fluid is transmitted equally in all directions.",
        },
        {
          id: "f2",
          front: "Formula for Stokes' Law?",
          back: "F = 6-�++rv (viscous drag on sphere)",
        },
        {
          id: "f3",
          front: "Bernoulli's Equation?",
          back: "P + -+-�v-� + -�gh = constant",
        },
        {
          id: "f4",
          front: "Excess pressure in soap bubble?",
          back: "+�P = 4T/r (two surfaces)",
        },
        {
          id: "f5",
          front: "Excess pressure in liquid drop?",
          back: "+�P = 2T/r (one surface)",
        },
        {
          id: "f6",
          front: "Capillary rise formula?",
          back: "h = 2T cos ++ / -�gr",
        },
        {
          id: "f7",
          front: "Equation of Continuity?",
          back: "AG��vG�� = AG��vG�� (mass conservation)",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "SI unit of viscosity is:",
          options: ["Poise", "Pa-+s", "N/m", "Pa"],
          correctIndex: 1,
          explanation: "Pascal-second or Poiseuille.",
        },
        {
          id: "q2",
          question: "Excess pressure in soap bubble is:",
          options: ["2T/r", "4T/r", "T/r", "T/2r"],
          correctIndex: 1,
          explanation: "Soap bubble has two surfaces, so 4T/r.",
        },
        {
          id: "q3",
          question: "Terminal velocity is proportional to:",
          options: ["r", "r-�", "1/r", "1/r-�"],
          correctIndex: 1,
          explanation: "vG� G� r-� from Stokes' law.",
        },
        {
          id: "q4",
          question: "Water rises in capillary because:",
          options: [
            "Cohesion > Adhesion",
            "Adhesion > Cohesion",
            "Surface tension",
            "Viscosity",
          ],
          correctIndex: 1,
          explanation: "Water wets glass (contact angle < 90-�).",
        },
        {
          id: "q5",
          question: "Bernoulli's theorem is based on:",
          options: [
            "Mass conservation",
            "Energy conservation",
            "Momentum conservation",
            "Charge conservation",
          ],
          correctIndex: 1,
          explanation: "It's essentially energy conservation for fluids.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Pascal's Law",
          content:
            "Pressure transmits equally.\nHydraulic lift.\nHydraulic brakes.",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Viscosity",
          content:
            "Internal friction.\nThick fluids = High ++.\nHoney > Water.",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Stokes' Law",
          content: "F = 6-�++rv\nDrag on sphere.\nTerminal velocity!",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Surface Tension",
          content: "T = F/L\nDroplets are spherical.\nInsects walk on water.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Soap vs Drop",
          content:
            "Soap bubble: +�P = 4T/r\nDrop: +�P = 2T/r\n(2 surfaces vs 1)",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Bernoulli",
          content:
            "P + -+-�v-� + -�gh = const.\nFast flow = Low pressure.\nAirplane lift!",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "phy3",
      title: "3. Kinetic Theory of Gases",
      description: "Behavior of gases at molecular level.",
      summary:
        "**Ideal Gas**: PV = nRT\n**Kinetic Energy**: KE = 3/2 kT per molecule\n**RMS Velocity**: vrms = G��(3RT/M)\n**Degrees of Freedom**: Ways a molecule can store energy",
      detailedNotes:
        "### 1. Ideal Gas Equation\nPV = nRT = NkT\n* P = Pressure\n* V = Volume\n* n = Number of moles\n* R = Universal gas constant = 8.314 J/(mol-+K)\n* k = Boltzmann constant = 1.38 +� 10G�+-�-� J/K\n* N = Number of molecules\n\n### 2. Assumptions of Kinetic Theory\n1. Gas molecules are point masses\n2. No intermolecular forces (except during collision)\n3. Collisions are perfectly elastic\n4. Molecules are in random motion\n5. Time of collision << Time between collisions\n\n### 3. Pressure from Kinetic Theory\nP = G��-�v-�rms = G��(nm/V)v-�rms\n\n### 4. Kinetic Energy\n* Per molecule: KE = -+mv-�rms = 3/2 kT\n* Per mole: KE = 3/2 RT\n* KE depends only on temperature\n\n### 5. Molecular Speeds\n* **RMS Speed**: vrms = G��(3RT/M) = G��(3kT/m)\n* **Average Speed**: vavg = G��(8RT/-�M)\n* **Most Probable Speed**: vmp = G��(2RT/M)\n* Relation: vmp < vavg < vrms\n\n### 6. Degrees of Freedom (f)\n* Monoatomic (He, Ne): f = 3 (translation only)\n* Diatomic (OG��, NG��): f = 5 (3 trans + 2 rot)\n* Triatomic (COG��): f = 6 or 7\n\n**Equipartition of Energy**:\nEnergy per degree of freedom = -+kT\nTotal energy = (f/2)kT per molecule\n\n### 7. Specific Heats\n* Cv = (f/2)R\n* Cp = Cv + R = ((f+2)/2)R\n* +� = Cp/Cv = (f+2)/f\n\n**Values:**\n* Monoatomic: +� = 5/3 = 1.67\n* Diatomic: +� = 7/5 = 1.4",
      flashcards: [
        {
          id: "f1",
          front: "Ideal Gas Equation?",
          back: "PV = nRT (n = moles, R = 8.314 J/mol-+K)",
        },
        { id: "f2", front: "Average KE per molecule?", back: "KE = 3/2 kT" },
        {
          id: "f3",
          front: "RMS velocity formula?",
          back: "vrms = G��(3RT/M) = G��(3kT/m)",
        },
        {
          id: "f4",
          front: "Degrees of freedom for diatomic gas?",
          back: "f = 5 (3 translational + 2 rotational)",
        },
        {
          id: "f5",
          front: "Relation between molecular speeds?",
          back: "vmp < vavg < vrms",
        },
        {
          id: "f6",
          front: "+� for monoatomic gas?",
          back: "+� = Cp/Cv = 5/3 = 1.67",
        },
        {
          id: "f7",
          front: "Boltzmann constant value?",
          back: "k = 1.38 +� 10G�+-�-� J/K",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "Average KE of gas molecule depends on:",
          options: ["Pressure", "Volume", "Temperature", "Mass"],
          correctIndex: 2,
          explanation: "KE = 3/2 kT, depends only on T.",
        },
        {
          id: "q2",
          question: "RMS speed of gas molecule is proportional to:",
          options: ["T", "G��T", "T-�", "1/T"],
          correctIndex: 1,
          explanation: "vrms = G��(3RT/M), so vrms G� G��T.",
        },
        {
          id: "q3",
          question: "+� for diatomic gas is:",
          options: ["1.33", "1.4", "1.67", "2"],
          correctIndex: 1,
          explanation: "+� = 7/5 = 1.4 for diatomic.",
        },
        {
          id: "q4",
          question: "Degrees of freedom for monoatomic gas:",
          options: ["3", "5", "6", "7"],
          correctIndex: 0,
          explanation: "Only 3 translational DOF.",
        },
        {
          id: "q5",
          question: "Which is greatest among molecular speeds?",
          options: ["vmp", "vavg", "vrms", "All equal"],
          correctIndex: 2,
          explanation: "vrms > vavg > vmp.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Ideal Gas",
          content: "PV = nRT\nR = 8.314 J/mol-+K\nn = number of moles",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "KE of Gas",
          content: "Per molecule: 3/2 kT\nPer mole: 3/2 RT\nDepends on T only!",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "RMS Speed",
          content: "vrms = G��(3RT/M)\nvrms G� G��T\nvrms G� 1/G��M",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Speed Order",
          content: "vmp < vavg < vrms\nMost Probable < Average < RMS",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "DOF",
          content: "Monoatomic: f = 3\nDiatomic: f = 5\nEnergy = f/2 kT",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "+� Values",
          content: "Monoatomic: +� = 5/3\nDiatomic: +� = 7/5\n+� = Cp/Cv",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "phy4",
      title: "4. Thermodynamics",
      description: "Heat, Work, Laws of Thermodynamics.",
      summary:
        "**First Law**: +�Q = +�U + +�W (Energy conservation)\n**Second Law**: Heat cannot flow from cold to hot spontaneously\n**Entropy**: Measure of disorder\n**Carnot Efficiency**: ++ = 1 - TG��/TG��",
      detailedNotes:
        "### 1. Thermodynamic Terms\n* **System**: Part under study\n* **Surroundings**: Everything outside system\n* **State Variables**: P, V, T, U (not Q, W)\n\n### 2. Zeroth Law\nIf A is in thermal equilibrium with B, and B with C, then A is in equilibrium with C.\n(Foundation for temperature measurement)\n\n### 3. First Law of Thermodynamics\n**+�Q = +�U + +�W**\n* +�Q = Heat added to system\n* +�U = Change in internal energy\n* +�W = Work done by system\n\nFor ideal gas: +�U = nCv+�T\nWork done: W = G�PdV\n\n### 4. Thermodynamic Processes\n**A. Isothermal (T = constant)**\n* PV = constant\n* +�U = 0, so Q = W\n* W = nRT ln(VG��/VG��)\n\n**B. Adiabatic (Q = 0)**\n* PVߦP = constant\n* TVߦPG�+-� = constant\n* W = (PG��VG�� - PG��VG��)/(+�-1)\n\n**C. Isobaric (P = constant)**\n* W = P+�V = nR+�T\n* Q = nCp+�T\n\n**D. Isochoric (V = constant)**\n* W = 0\n* Q = +�U = nCv+�T\n\n### 5. Second Law\n**Kelvin-Planck**: No engine can convert all heat to work.\n**Clausius**: Heat cannot flow from cold to hot without external work.\n\n### 6. Heat Engines\nEfficiency: ++ = W/QG�� = (QG��-QG��)/QG�� = 1 - QG��/QG��\n\n**Carnot Engine** (Most efficient):\n++ = 1 - TG��/TG��\n\n### 7. Entropy\n* S = Q/T\n* +�S G�� 0 for isolated system\n* Measure of disorder/randomness",
      flashcards: [
        {
          id: "f1",
          front: "First Law of Thermodynamics?",
          back: "+�Q = +�U + +�W (Energy conservation)",
        },
        {
          id: "f2",
          front: "In isothermal process?",
          back: "T = constant, +�U = 0, Q = W",
        },
        {
          id: "f3",
          front: "In adiabatic process?",
          back: "Q = 0, PVߦP = constant",
        },
        {
          id: "f4",
          front: "Carnot efficiency?",
          back: "++ = 1 - TG��/TG�� (T in Kelvin)",
        },
        {
          id: "f5",
          front: "Work in isobaric process?",
          back: "W = P+�V = nR+�T",
        },
        {
          id: "f6",
          front: "Second Law (Clausius)?",
          back: "Heat cannot flow from cold to hot spontaneously.",
        },
        {
          id: "f7",
          front: "What is Entropy?",
          back: "Measure of disorder, S = Q/T, always increases in isolated system.",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "In isothermal process, internal energy:",
          options: [
            "Increases",
            "Decreases",
            "Remains constant",
            "Becomes zero",
          ],
          correctIndex: 2,
          explanation: "+�U = nCv+�T = 0 since T is constant.",
        },
        {
          id: "q2",
          question: "Adiabatic process follows:",
          options: [
            "PV = constant",
            "PVߦP = constant",
            "P/V = constant",
            "TV = constant",
          ],
          correctIndex: 1,
          explanation: "PVߦP = constant for adiabatic process.",
        },
        {
          id: "q3",
          question:
            "Carnot engine operates between 500K and 300K. Efficiency is:",
          options: ["20%", "40%", "60%", "80%"],
          correctIndex: 1,
          explanation: "++ = 1 - 300/500 = 1 - 0.6 = 0.4 = 40%",
        },
        {
          id: "q4",
          question: "Work done in isochoric process:",
          options: ["Maximum", "Minimum", "Zero", "Negative"],
          correctIndex: 2,
          explanation: "W = P+�V = 0 since V is constant.",
        },
        {
          id: "q5",
          question: "Entropy of isolated system:",
          options: [
            "Decreases",
            "Increases or constant",
            "Always constant",
            "Becomes zero",
          ],
          correctIndex: 1,
          explanation: "+�S G�� 0 for isolated system.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "First Law",
          content:
            "+�Q = +�U + +�W\nHeat = Internal Energy + Work\nEnergy conservation!",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Isothermal",
          content: "T = constant.\n+�U = 0.\nQ = W.",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Adiabatic",
          content: "Q = 0.\nPVߦP = constant.\nNo heat exchange.",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Isobaric",
          content: "P = constant.\nW = P+�V.\nQ = nCp+�T.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Isochoric",
          content: "V = constant.\nW = 0.\nQ = +�U.",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Carnot",
          content:
            "Most efficient engine.\n++ = 1 - TG��/TG��\nIdeal, not real.",
          color: getReelColor(5),
        },
        {
          id: "r7",
          title: "Entropy",
          content: "S = Q/T\nMeasure of disorder.\nAlways increases!",
          color: getReelColor(6),
        },
      ],
    },
    {
      id: "phy5",
      title: "5. Oscillations",
      description: "Simple Harmonic Motion, Springs, Pendulum.",
      summary:
        "**SHM**: a = --�-�x\n**Spring**: T = 2-�G��(m/k)\n**Pendulum**: T = 2-�G��(L/g)\n**Energy**: Total E = -+m-�-�A-� = constant",
      detailedNotes:
        "### 1. Simple Harmonic Motion (SHM)\n* Motion where restoring force G� displacement\n* F = -kx (opposite to displacement)\n* a = --�-�x\n\n### 2. Equations of SHM\n* x = A sin(-�t + -�) or A cos(-�t + -�)\n* v = A-� cos(-�t + -�) = -�G��(A-� - x-�)\n* a = -A-�-� sin(-�t + -�) = --�-�x\n\nWhere:\n* A = Amplitude\n* -� = Angular frequency = 2-�f = 2-�/T\n* -� = Phase constant\n\n### 3. Time Period\n**General**: T = 2-�/-� = 2-�G��(m/k)\n\n**Spring-mass**: T = 2-�G��(m/k)\n* k = spring constant\n* Independent of amplitude!\n\n**Simple Pendulum**: T = 2-�G��(L/g)\n* L = length\n* g = acceleration due to gravity\n* Valid for small angles only\n\n### 4. Energy in SHM\n* KE = -+mv-� = -+m-�-�(A-� - x-�)\n* PE = -+kx-� = -+m-�-�x-�\n* Total E = -+m-�-�A-� = -+kA-�\n* Energy oscillates between KE and PE\n\n### 5. Phase Difference\n* Displacement and velocity: 90-� (-�/2)\n* Velocity and acceleration: 90-� (-�/2)\n* Displacement and acceleration: 180-� (-�)\n\n### 6. Types of Oscillations\n* **Free**: No external force (ideal)\n* **Damped**: Friction reduces amplitude\n* **Forced**: External periodic force applied\n* **Resonance**: Maximum amplitude when f = natural frequency",
      flashcards: [
        {
          id: "f1",
          front: "Condition for SHM?",
          back: "a G� -x (acceleration proportional and opposite to displacement)",
        },
        {
          id: "f2",
          front: "Time period of spring-mass system?",
          back: "T = 2-�G��(m/k)",
        },
        {
          id: "f3",
          front: "Time period of simple pendulum?",
          back: "T = 2-�G��(L/g)",
        },
        {
          id: "f4",
          front: "Total energy in SHM?",
          back: "E = -+m-�-�A-� = -+kA-� (constant)",
        },
        {
          id: "f5",
          front: "Phase difference between x and a?",
          back: "180-� or -� (they are opposite)",
        },
        {
          id: "f6",
          front: "What is resonance?",
          back: "Maximum amplitude when driving frequency equals natural frequency.",
        },
        {
          id: "f7",
          front: "Velocity at mean position?",
          back: "Maximum: v = A-�",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "In SHM, acceleration is maximum at:",
          options: [
            "Mean position",
            "Extreme position",
            "Between mean and extreme",
            "Never maximum",
          ],
          correctIndex: 1,
          explanation: "a = --�-�x, maximum when x = A (extreme).",
        },
        {
          id: "q2",
          question: "Time period of spring depends on:",
          options: [
            "Mass only",
            "Spring constant only",
            "Both mass and k",
            "Amplitude",
          ],
          correctIndex: 2,
          explanation: "T = 2-�G��(m/k), depends on m and k.",
        },
        {
          id: "q3",
          question: "Phase difference between v and a in SHM:",
          options: ["0-�", "90-�", "180-�", "45-�"],
          correctIndex: 1,
          explanation: "v and a are 90-� out of phase.",
        },
        {
          id: "q4",
          question: "Energy at extreme position is:",
          options: ["All KE", "All PE", "Half KE, half PE", "Zero"],
          correctIndex: 1,
          explanation: "At extreme, v = 0, so KE = 0, all PE.",
        },
        {
          id: "q5",
          question: "If length of pendulum is doubled, T becomes:",
          options: ["Half", "Double", "G��2 times", "2G��2 times"],
          correctIndex: 2,
          explanation: "T G� G��L, so T becomes G��2 times.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "SHM",
          content:
            "a = --�-�x\nAcceleration opposite to displacement.\nRestoring force!",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Spring",
          content:
            "T = 2-�G��(m/k)\nDepends on mass & stiffness.\nNOT on amplitude!",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Pendulum",
          content:
            "T = 2-�G��(L/g)\nDepends on length & g.\nSmall angles only!",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Energy",
          content: "E = -+kA-� = constant.\nKE G�� PE.\nConserved!",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "At Mean",
          content: "x = 0.\nv = maximum (A-�).\na = 0.",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "At Extreme",
          content: "x = A (max).\nv = 0.\na = maximum.",
          color: getReelColor(5),
        },
        {
          id: "r7",
          title: "Resonance",
          content:
            "Driving freq = Natural freq.\nAmplitude MAXIMUM!\nCan be destructive.",
          color: getReelColor(6),
        },
      ],
    },
    {
      id: "phy8",
      title: "8. Electrostatics",
      description: "Electric charges, field, potential, capacitors.",
      summary:
        "**Coulomb's Law**: F = k q1q2/r^2\n**Electric Field**: E = F/q\n**Gauss's Law**: Flux = q/ε0\n**Capacitor**: C = Q/V\n**Energy**: U = 1/2 CV^2",
      detailedNotes:
        "### 1. Electric Charges and Fields\n* **Quantization**: q = ne\n* **Coulomb's Law**: F = (1/4πε0) * (q1q2/r^2)\n* **Electric Field (E)**: Force per unit charge. Vector quantity.\n* **Dipole**: Two equal opposite charges. p = q * 2a\n\n### 2. Gauss's Law\nTotal flux through closed surface = (1/ε0) * (enclosed charge).\nApplications:\n* Field due to infinite wire: E = λ / (2πε0r)\n* Field due to plane sheet: E = σ / (2ε0)\n* Field due to spherical shell: E = 0 inside, E = kQ/r^2 outside\n\n### 3. Electric Potential (V)\n* Work done to bring unit charge from infinity.\n* V = kQ/r\n* Scalar quantity.\n* **Relation**: E = -dV/dr (Gradient)\n\n### 4. Capacitors\n* Device to store charge and energy.\n* **Capacitance (C)**: C = Q/V. Unit: Farad (F)\n* **Parallel Plate Capacitor**: C = Aε0/d\n* **Series Combination**: 1/Cs = 1/C1 + 1/C2\n* **Parallel Combination**: Cp = C1 + C2\n\n### 5. Energy in Capacitor\n* U = 1/2 CV^2 = 1/2 Q^2/C = 1/2 QV\n* Energy Density = 1/2 ε0E^2\n\n### 6. Dielectrics\n* Insulators placed between plates.\n* Increases capacitance: C' = kC\n* Polar vs Non-polar molecules.",
      flashcards: [
        {
          id: "f1",
          front: "Coulomb's Law formula?",
          back: "F = k * (q1q2/r^2) where k = 1/(4πε0)",
        },
        {
          id: "f2",
          front: "Gauss's Law statement?",
          back: "Total electric flux through a closed surface is equal to 1/ε0 times the net charge enclosed.",
        },
        {
          id: "f3",
          front: "Electric Field inside a conductor?",
          back: "Zero (electrostatic shielding).",
        },
        {
          id: "f4",
          front: "Capacitance of Parallel Plate Capacitor?",
          back: "C = Aε0/d",
        },
        {
          id: "f5",
          front: "Energy stored in Capacitor?",
          back: "U = 1/2 CV^2",
        },
        {
          id: "f6",
          front: "Capacitors in Series formula?",
          back: "1/Cs = 1/C1 + 1/C2 (like resistors in parallel)",
        },
        {
          id: "f7",
          front: "What does a dielectric do?",
          back: "Increases capacitance and reduces electric field.",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "Unit of Electric Field Intensity is:",
          options: ["N/C", "V/m", "J/C", "Both A and B"],
          correctIndex: 3,
          explanation: "E = F/q (N/C) and E = -dV/dr (V/m).",
        },
        {
          id: "q2",
          question: "Electric flux through a closed surface containing dipole:",
          options: ["q/ε0", "2q/ε0", "Zero", "Infinite"],
          correctIndex: 2,
          explanation: "Net charge of dipole is zero (+q - q = 0).",
        },
        {
          id: "q3",
          question: "Capacitance depends on:",
          options: ["Charge", "Potential", "Geometry and medium", "None"],
          correctIndex: 2,
          explanation: "C = Aε0/d, depends on Area, distance, medium.",
        },
        {
          id: "q4",
          question: "Two 2µF capacitors in parallel give:",
          options: ["1µF", "4µF", "2µF", "0.5µF"],
          correctIndex: 1,
          explanation: "Cp = C1 + C2 = 2 + 2 = 4µF.",
        },
        {
          id: "q5",
          question: "Dielectric constant k is always:",
          options: ["< 1", "> 1", "= 0", "Negative"],
          correctIndex: 1,
          explanation: "Permittivity of medium > ε0.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Coulomb's Law",
          content:
            "F = k q1q2 / r^2\nLike repels, Unlike attracts.\nInverse square law.",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Gauss's Law",
          content: "Flux = q_in / ε0\nPowerful tool.\nFinds E easily.",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Capacitor",
          content: "Stores charge.\nC = Q/V.\nParallel plate: Aε0/d.",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Energy",
          content:
            "U = 1/2 CV^2\nStored in electric field.\nEnergy density = 1/2 ε0E^2.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Series/Parallel",
          content:
            "Series: 1/C add (C decreases)\nParallel: C add (C increases)\nOpposite of Resistors!",
          color: getReelColor(4),
        },
      ],
    },
    {
      id: "phy9",
      title: "9. Current Electricity",
      description: "Ohm's Law, Kirchhoff's Laws, Potentiometer.",
      summary:
        "**Ohm's Law**: V = IR\n**Kirchhoff's Laws**: KCL (ΣI=0) & KVL (ΣV=0)\n**Wheatstone Bridge**: Balanced condition R1/R2 = R3/R4\n**Potentiometer**: Measures EMF accurately",
      detailedNotes:
        "### 1. Electric Current\n* Rate of flow of charge: I = q/t\n* Drift Velocity: vd = I / (nAe)\n* Current Density: J = I/A = nevd\n\n### 2. Ohm's Law\n* V = IR\n* Resistance (R): R = ρL/A\n* Resistivity (ρ): Property of material\n* Conductivity (σ): 1/ρ\n\n### 3. Kirchhoff's Laws\n**1. Junction Law (KCL)**:\n* ΣI = 0 at a junction.\n* Based on Conservation of Charge.\n* Incoming currents = Outgoing currents.\n\n**2. Loop Law (KVL)**:\n* ΣV = 0 in a closed loop.\n* ΣEMF = ΣIR\n* Based on Conservation of Energy.\n\n### 4. Wheatstone Bridge\n* Network of 4 resistors.\n* Balanced condition: Ig = 0.\n* R1/R2 = R3/R4.\n* Application: Meter Bridge (to find unknown resistance).\n\n### 5. Potentiometer\n* Principle: V ∝ L (when I is constant).\n* Uses:\n  1. Compare EMFs: E1/E2 = L1/L2\n  2. Find Internal Resistance: r = R(L1/L2 - 1)\n* Advantage: Draws no current at null point (Ideal Voltmeter).\n\n### 6. Combination of Cells\n* Series: E_eq = nE, r_eq = nr\n* Parallel: E_eq = E, r_eq = r/n (for identical cells)",
      flashcards: [
        {
          id: "f1",
          front: "Kirchhoff's First Law (KCL) conservation?",
          back: "Conservation of Charge.",
        },
        {
          id: "f2",
          front: "Kirchhoff's Second Law (KVL) conservation?",
          back: "Conservation of Energy.",
        },
        {
          id: "f3",
          front: "Wheatstone Bridge balance condition?",
          back: "R1/R2 = R3/R4 (No current in galvanometer).",
        },
        {
          id: "f4",
          front: "Why is Potentiometer preferred over Voltmeter?",
          back: "It measures EMF without drawing current from the cell (Null deflection method).",
        },
        { id: "f5", front: "Drift velocity formula?", back: "vd = I / (nAe)" },
        {
          id: "f6",
          front: "Formula for internal resistance using Potentiometer?",
          back: "r = R * (L1/L2 - 1)",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "Kirchhoff's Junction Law is based on conservation of:",
          options: ["Energy", "Charge", "Momentum", "Mass"],
          correctIndex: 1,
          explanation: "Charge cannot accumulate at a junction.",
        },
        {
          id: "q2",
          question: "Unit of resistivity is:",
          options: ["Ohm", "Ohm-meter", "Siemens", "Mho"],
          correctIndex: 1,
          explanation: "R = ρL/A => ρ = RA/L (Ω-m).",
        },
        {
          id: "q3",
          question:
            "In Wheatstone bridge, galvanometer shows null deflection when:",
          options: [
            "Current is max",
            "Potential difference is zero",
            "Battery is removed",
            "Resistance is zero",
          ],
          correctIndex: 1,
          explanation: "Points B and D are at same potential.",
        },
        {
          id: "q4",
          question: "Potentiometer wire should have:",
          options: [
            "High resistivity, low temp coeff",
            "Low resistivity, high temp coeff",
            "High resistivity, high temp coeff",
            "Low resistivity, low temp coeff",
          ],
          correctIndex: 0,
          explanation: "Manganin or Constantan used.",
        },
        {
          id: "q5",
          question: "Drift velocity is of the order of:",
          options: ["m/s", "km/s", "mm/s", "cm/s"],
          correctIndex: 2,
          explanation: "Very small, approx 10^-4 m/s.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "KCL (Junction)",
          content:
            "Total Current In = Total Current Out\nΣI = 0\nCharge Conserved!",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "KVL (Loop)",
          content: "Sum of Voltages = 0\nΣV = ΣIR\nEnergy Conserved!",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Wheatstone",
          content: "Balanced Bridge\nR1/R2 = R3/R4\nIg = 0\nFind Unknown R.",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Potentiometer",
          content: "Long wire device.\nV ∝ L.\nBest way to measure EMF.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Drift Velocity",
          content:
            "Electrons drift slowly.\nvd = I/nAe.\nCollisions cause resistance.",
          color: getReelColor(4),
        },
      ],
    },
  ],
};
