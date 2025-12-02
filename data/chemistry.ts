import { Subject } from '../types';
import { getReelColor } from './helpers';

export const CHEM_SUBJECT: Subject = {
        id: 'chem',
        name: 'Chemistry', 
        icon: 'FlaskConical', 
        color: 'bg-teal-500', 
        syllabus: '1. Solid State\n2. Solutions\n3. Electrochemistry\n4. Chemical Kinetics\n5. Surface Chemistry\n6. p-Block Elements\n7. d and f Block Elements\n8. Coordination Compounds\n9. Haloalkanes\n10. Alcohols, Phenols, Ethers\n11. Aldehydes, Ketones\n12. Carboxylic Acids\n13. Amines\n14. Biomolecules\n15. Polymers\n16. Chemistry in Everyday Life',
        paperPattern: '### Chemistry Paper Pattern (70 Marks)\n\n* **Section A (14 Marks)**: 7 MCQs\n* **Section B (18 Marks)**: Very short answers\n* **Section C (12 Marks)**: Short answers\n* **Section D (8 Marks)**: Long answers\n* **Section E (18 Marks)**: Numericals\n* **Internal (30 Marks)**: Practical',
        previousPapers: [], 
        chapters: [
          {
            id: 'chem1',
            title: '1. Solid State',
            description: 'Crystal structures, Unit cells, Defects.',
            summary: '**Solids**: Fixed shape and volume\n**Crystalline**: Regular arrangement (NaCl, Diamond)\n**Amorphous**: Irregular arrangement (Glass, Rubber)\n**Unit Cell**: Smallest repeating unit\n**Defects**: Schottky, Frenkel',
            detailedNotes: '### 1. Types of Solids\n**A. Crystalline Solids**\n* Regular, repeating 3D arrangement\n* Sharp melting point\n* Anisotropic (different properties in different directions)\n* Examples: NaCl, Diamond, Ice\n\n**B. Amorphous Solids**\n* Irregular arrangement\n* No sharp melting point (range)\n* Isotropic (same properties in all directions)\n* Examples: Glass, Rubber, Plastic\n\n### 2. Classification of Crystalline Solids\n| Type | Particles | Bonding | Properties | Examples |\n|------|-----------|---------|------------|----------|\n| Ionic | Ions | Electrostatic | Hard, brittle, high MP | NaCl, MgO |\n| Covalent | Atoms | Covalent bonds | Very hard, very high MP | Diamond, SiOG�� |\n| Metallic | Metal ions + electrons | Metallic | Malleable, conductive | Fe, Cu, Ag |\n| Molecular | Molecules | Van der Waals | Soft, low MP | Ice, IG��, COG�� |\n\n### 3. Unit Cell\nSmallest repeating unit of crystal lattice.\n\n**Types of Unit Cells:**\n* **Simple/Primitive**: Atoms only at corners (Z = 1)\n* **Body-Centered (BCC)**: Corner + center (Z = 2)\n* **Face-Centered (FCC)**: Corner + face centers (Z = 4)\n\n**Contribution of atoms:**\n* Corner: 1/8\n* Edge: 1/4\n* Face: 1/2\n* Body center: 1\n\n### 4. Packing Efficiency\n* Simple cubic: 52.4%\n* BCC: 68%\n* FCC/HCP: 74%\n\n### 5. Crystal Defects\n**A. Point Defects**\n\n*Stoichiometric:*\n* **Schottky**: Equal cations & anions missing (NaCl)\n* **Frenkel**: Ion displaced to interstitial site (AgCl, ZnS)\n\n*Non-stoichiometric:*\n* Metal excess (F-centers)\n* Metal deficiency\n\n**B. Impurity Defects**\n* n-type: Doping with Group 15 (excess electrons)\n* p-type: Doping with Group 13 (electron holes)',
            flashcards: [
              { id: 'f1', front: 'Crystalline vs Amorphous?', back: 'Crystalline: Regular arrangement, sharp MP. Amorphous: Irregular, no sharp MP.' },
              { id: 'f2', front: 'Coordination number in FCC?', back: '12' },
              { id: 'f3', front: 'Packing efficiency of FCC?', back: '74%' },
              { id: 'f4', front: 'Schottky defect?', back: 'Equal number of cations and anions missing from lattice.' },
              { id: 'f5', front: 'Frenkel defect?', back: 'Ion displaced from lattice site to interstitial site.' },
              { id: 'f6', front: 'Z value for BCC?', back: 'Z = 2 (1/8 +� 8 corners + 1 center)' },
              { id: 'f7', front: 'n-type semiconductor?', back: 'Doped with Group 15 element (extra electrons).' }
            ],
            mcqs: [
              { id: 'q1', question: 'Packing efficiency of FCC is:', options: ['52.4%', '68%', '74%', '90%'], correctIndex: 2, explanation: 'FCC has the highest packing (74%).' },
              { id: 'q2', question: 'Schottky defect is found in:', options: ['AgCl', 'NaCl', 'ZnS', 'AgBr'], correctIndex: 1, explanation: 'NaCl shows Schottky defect.' },
              { id: 'q3', question: 'Number of atoms in BCC unit cell:', options: ['1', '2', '4', '6'], correctIndex: 1, explanation: 'BCC: 8+�(1/8) + 1 = 2' },
              { id: 'q4', question: 'Glass is:', options: ['Crystalline', 'Amorphous', 'Polycrystalline', 'Ionic'], correctIndex: 1, explanation: 'Glass has no regular structure.' },
              { id: 'q5', question: 'Coordination number in simple cubic:', options: ['4', '6', '8', '12'], correctIndex: 1, explanation: 'Each atom touches 6 neighbors.' }
            ],
            reels: [
              { id: 'r1', title: 'Solid Types', content: 'Crystalline = Regular.\nAmorphous = Irregular.\nSharp MP vs Range.', color: getReelColor(0) },
              { id: 'r2', title: 'Unit Cells', content: 'Simple: Z = 1\nBCC: Z = 2\nFCC: Z = 4', color: getReelColor(1) },
              { id: 'r3', title: 'Packing', content: 'Simple: 52%\nBCC: 68%\nFCC: 74% (best!)', color: getReelColor(2) },
              { id: 'r4', title: 'Schottky', content: 'Cation + Anion BOTH missing.\nFound in NaCl.\nDensity decreases.', color: getReelColor(3) },
              { id: 'r5', title: 'Frenkel', content: 'Ion moves to interstitial site.\nFound in AgCl, ZnS.\nDensity same.', color: getReelColor(4) },
              { id: 'r6', title: 'Semiconductors', content: 'n-type: Group 15 dopant.\np-type: Group 13 dopant.\nSilicon base.', color: getReelColor(5) }
            ]
          },
          {
            id: 'chem2',
            title: '2. Solutions',
            description: 'Concentration, Colligative properties, Raoult\'s Law.',
            summary: '**Solution**: Homogeneous mixture\n**Molarity (M)**: moles/L\n**Molality (m)**: moles/kg solvent\n**Raoult\'s Law**: P = P-�X (for ideal solutions)\n**Colligative**: Depends on number of particles',
            detailedNotes: '### 1. Types of Solutions\n* Solid in liquid (Sugar in water)\n* Liquid in liquid (Alcohol in water)\n* Gas in liquid (COG�� in water)\n\n### 2. Concentration Terms\n| Term | Formula | Unit |\n|------|---------|------|\n| Molarity (M) | moles/L solution | mol/L |\n| Molality (m) | moles/kg solvent | mol/kg |\n| Mole fraction (X) | nG��/(nG��+nG��) | no unit |\n| Mass % | (mass solute/total)+�100 | % |\n| ppm | (mass/total)+�10G�� | ppm |\n\n### 3. Henry\'s Law\nFor gas dissolved in liquid:\n**p = KH +� X**\n* p = partial pressure of gas\n* KH = Henry\'s constant\n* X = mole fraction\n\nApplications: Carbonated drinks, Scuba diving (bends)\n\n### 4. Raoult\'s Law\nFor ideal solutions:\n**P = P-�X**\n* P = vapor pressure of solution\n* P-� = vapor pressure of pure solvent\n* X = mole fraction of solvent\n\n**Ideal Solution**: +�Hmix = 0, +�Vmix = 0\n\n### 5. Colligative Properties\nDepend only on NUMBER of solute particles.\n\n**A. Relative Lowering of Vapor Pressure**\n(P-� - P)/P-� = XG�� (mole fraction of solute)\n\n**B. Elevation of Boiling Point**\n+�Tb = Kb +� m\n* Kb = molal elevation constant\n\n**C. Depression of Freezing Point**\n+�Tf = Kf +� m\n* Kf = molal depression constant\n\n**D. Osmotic Pressure**\n-� = CRT = (n/V)RT\n\n### 6. Van\'t Hoff Factor (i)\nFor electrolytes: i = observed value / calculated value\n* NaCl: i G�� 2\n* CaClG��: i G�� 3\n* Glucose: i = 1 (non-electrolyte)',
            flashcards: [
              { id: 'f1', front: 'Raoult\'s Law?', back: 'P = P-�X (Vapor pressure = Pure VP +� mole fraction)' },
              { id: 'f2', front: 'Henry\'s Law?', back: 'p = KH +� X (Gas solubility G� partial pressure)' },
              { id: 'f3', front: 'Boiling point elevation formula?', back: '+�Tb = Kb +� m' },
              { id: 'f4', front: 'Freezing point depression formula?', back: '+�Tf = Kf +� m' },
              { id: 'f5', front: 'Osmotic pressure formula?', back: '-� = CRT' },
              { id: 'f6', front: 'Van\'t Hoff factor for NaCl?', back: 'i G�� 2 (NaG�� and ClG�+)' },
              { id: 'f7', front: 'What are colligative properties?', back: 'Properties that depend on NUMBER of solute particles, not their nature.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Molality is expressed in:', options: ['mol/L', 'mol/kg', 'g/L', 'no unit'], correctIndex: 1, explanation: 'Molality = moles of solute / kg of solvent.' },
              { id: 'q2', question: 'Which is NOT a colligative property?', options: ['Osmotic pressure', 'Boiling point elevation', 'Optical activity', 'Freezing point depression'], correctIndex: 2, explanation: 'Optical activity depends on structure, not particle number.' },
              { id: 'q3', question: 'Van\'t Hoff factor for glucose is:', options: ['0', '1', '2', '3'], correctIndex: 1, explanation: 'Glucose doesn\'t dissociate.' },
              { id: 'q4', question: 'Ideal solution follows:', options: ['Henry\'s law', 'Raoult\'s law', 'Boyle\'s law', 'Charles\' law'], correctIndex: 1, explanation: 'Ideal solutions obey Raoult\'s law.' },
              { id: 'q5', question: 'Henry\'s law is applicable to:', options: ['Solid solutions', 'Gas in liquid', 'Liquid in liquid', 'All solutions'], correctIndex: 1, explanation: 'Henry\'s law is for gas solubility.' }
            ],
            reels: [
              { id: 'r1', title: 'Molarity vs Molality', content: 'Molarity: mol/L solution.\nMolality: mol/kg solvent.\nMolality doesn\'t change with T!', color: getReelColor(0) },
              { id: 'r2', title: 'Raoult\'s Law', content: 'P = P-�X\nVapor pressure lowered.\nBy adding solute.', color: getReelColor(1) },
              { id: 'r3', title: 'Henry\'s Law', content: 'p = KH +� X\nGas solubility.\nPressure dependent!', color: getReelColor(2) },
              { id: 'r4', title: 'Colligative', content: 'Number matters, not nature!\n+�Tb, +�Tf, -�\nVan\'t Hoff factor.', color: getReelColor(3) },
              { id: 'r5', title: 'BP & FP', content: '+�Tb = Kb +� m (increases).\n+�Tf = Kf +� m (decreases).\nSalt on roads!', color: getReelColor(4) },
              { id: 'r6', title: 'Osmosis', content: '-� = CRT.\nSolvent flows to solution.\nReverse osmosis = purification.', color: getReelColor(5) }
            ]
          },
          {
            id: 'chem3',
            title: '3. Electrochemistry',
            description: 'Electrolysis, Galvanic cells, Nernst equation.',
            summary: '**Electrochemistry**: Study of electricity-chemical reactions\n**Galvanic Cell**: Chemical G�� Electrical\n**Electrolytic Cell**: Electrical G�� Chemical\n**Nernst Equation**: E = E-� - (RT/nF)ln Q',
            detailedNotes: '### 1. Types of Cells\n**Galvanic (Voltaic) Cell**\n* Spontaneous reaction produces electricity\n* +�G < 0, E > 0\n* Anode (-), Cathode (+)\n* Example: Daniel cell, batteries\n\n**Electrolytic Cell**\n* Electricity drives non-spontaneous reaction\n* +�G > 0, requires external voltage\n* Anode (+), Cathode (-)\n* Example: Electroplating, electrolysis\n\n### 2. Electrode Reactions\n* **Anode**: Oxidation (loss of electrons)\n* **Cathode**: Reduction (gain of electrons)\n\nRemember: **AN OX** (Anode Oxidation), **RED CAT** (Reduction Cathode)\n\n### 3. Standard Electrode Potential (E-�)\n* Measured against SHE (Standard Hydrogen Electrode)\n* SHE: E-� = 0.00 V\n* Positive E-� = good oxidizing agent\n* Negative E-� = good reducing agent\n\n### 4. EMF of Cell\nE-�cell = E-�cathode - E-�anode\n\n### 5. Nernst Equation\n**E = E-� - (RT/nF) ln Q**\n\nAt 25-�C:\n**E = E-� - (0.059/n) log Q**\n\nAt equilibrium: E = 0, so E-� = (0.059/n) log K\n\n### 6. Relationship with +�G\n+�G-� = -nFE-�\n* E-� positive G�� +�G-� negative G�� spontaneous\n\n### 7. Faraday\'s Laws\n**First Law**: m = ZIt = (M+�I+�t)/(n+�F)\n* m = mass deposited\n* Z = electrochemical equivalent\n* F = 96500 C/mol\n\n**Second Law**: mG��/mG�� = EG��/EG�� (equivalent weights)\n\n### 8. Conductivity\n* **Conductance (G)**: 1/R (siemens, S)\n* **Conductivity (+�)**: G +� (l/A) (S/m)\n* **Molar conductivity (+�m)**: +�/c (S-+m-�/mol)',
            flashcards: [
              { id: 'f1', front: 'Anode reaction?', back: 'Oxidation (loss of electrons). AN OX.' },
              { id: 'f2', front: 'Cathode reaction?', back: 'Reduction (gain of electrons). RED CAT.' },
              { id: 'f3', front: 'EMF of cell formula?', back: 'E-�cell = E-�cathode - E-�anode' },
              { id: 'f4', front: 'Nernst equation at 25-�C?', back: 'E = E-� - (0.059/n) log Q' },
              { id: 'f5', front: 'Faraday constant value?', back: 'F = 96500 C/mol' },
              { id: 'f6', front: 'Relationship: +�G and E-�?', back: '+�G-� = -nFE-�' },
              { id: 'f7', front: 'In galvanic cell, anode is?', back: 'Negative (-) electrode.' }
            ],
            mcqs: [
              { id: 'q1', question: 'In galvanic cell, anode is:', options: ['Positive', 'Negative', 'Neutral', 'Variable'], correctIndex: 1, explanation: 'In galvanic cell, anode is negative.' },
              { id: 'q2', question: 'Faraday constant is:', options: ['96500 J', '96500 C', '96500 V', '96500 A'], correctIndex: 1, explanation: 'F = 96500 Coulombs per mole.' },
              { id: 'q3', question: 'For spontaneous reaction:', options: ['E-� < 0', 'E-� > 0', 'E-� = 0', 'E-� = 1'], correctIndex: 1, explanation: 'Positive E-� means spontaneous.' },
              { id: 'q4', question: 'SHE potential is:', options: ['-1 V', '0 V', '+1 V', '+0.5 V'], correctIndex: 1, explanation: 'Standard Hydrogen Electrode = 0.00 V by definition.' },
              { id: 'q5', question: 'Oxidation occurs at:', options: ['Cathode', 'Anode', 'Both', 'Neither'], correctIndex: 1, explanation: 'AN OX - Anode is for Oxidation.' }
            ],
            reels: [
              { id: 'r1', title: 'AN OX', content: 'Anode = Oxidation.\nLoss of electrons.\nRemember: AN OX!', color: getReelColor(0) },
              { id: 'r2', title: 'RED CAT', content: 'Cathode = Reduction.\nGain of electrons.\nRemember: RED CAT!', color: getReelColor(1) },
              { id: 'r3', title: 'Galvanic Cell', content: 'Chemical G�� Electrical.\nSpontaneous.\nAnode (-), Cathode (+).', color: getReelColor(2) },
              { id: 'r4', title: 'Electrolytic', content: 'Electrical G�� Chemical.\nNon-spontaneous.\nAnode (+), Cathode (-).', color: getReelColor(3) },
              { id: 'r5', title: 'Nernst Eq', content: 'E = E-� - (0.059/n)logQ\nAt 25-�C.\nConcentration effect!', color: getReelColor(4) },
              { id: 'r6', title: 'Faraday', content: 'm = ZIt.\nF = 96500 C/mol.\nMass G� Current +� Time.', color: getReelColor(5) }
            ]
          },
          {
            id: 'chem4',
            title: '4. Chemical Kinetics',
            description: 'Reaction rates, Order, Arrhenius equation.',
            summary: '**Rate**: Change in concentration per unit time\n**Order**: Power of concentration in rate law\n**Rate Law**: Rate = k[A]G�+\n**Arrhenius**: k = Ae^(-Ea/RT)',
            detailedNotes: '### 1. Rate of Reaction\nRate = -d[R]/dt = +d[P]/dt\n\nFactors affecting rate:\n* Concentration\n* Temperature\n* Catalyst\n* Surface area\n* Nature of reactants\n\n### 2. Rate Law\n**Rate = k[A]^m[B]^n**\n* k = rate constant\n* m, n = orders (found experimentally)\n* Overall order = m + n\n\n### 3. Order of Reaction\n| Order | Rate Law | Integrated | Half-life | Units of k |\n|-------|----------|------------|-----------|------------|\n| 0 | k | [A] = [A]G�� - kt | [A]G��/2k | mol/L-+s |\n| 1 | k[A] | ln[A] = ln[A]G�� - kt | 0.693/k | sG�+-� |\n| 2 | k[A]-� | 1/[A] = 1/[A]G�� + kt | 1/k[A]G�� | L/mol-+s |\n\n### 4. First Order Kinetics\n* ln[A] = ln[A]G�� - kt\n* tG��/G�� = 0.693/k (independent of [A]G��)\n* Examples: Radioactive decay, many reactions\n\n### 5. Arrhenius Equation\n**k = Ae^(-Ea/RT)**\n\nLogarithmic form:\n**ln k = ln A - Ea/RT**\n\n* A = pre-exponential factor (frequency factor)\n* Ea = activation energy\n* R = gas constant (8.314 J/mol-+K)\n\nTwo-point form:\n**ln(kG��/kG��) = (Ea/R)(1/TG�� - 1/TG��)**\n\n### 6. Collision Theory\n* Molecules must collide\n* With sufficient energy (G�� Ea)\n* With proper orientation\n\n### 7. Catalyst\n* Increases rate without being consumed\n* Lowers activation energy\n* Doesn\'t change +�H or equilibrium\n* Provides alternative pathway',
            flashcards: [
              { id: 'f1', front: 'First order half-life?', back: 'tG��/G�� = 0.693/k (independent of initial concentration)' },
              { id: 'f2', front: 'Arrhenius equation?', back: 'k = Ae^(-Ea/RT)' },
              { id: 'f3', front: 'Units of k for first order?', back: 'sG�+-� (or minG�+-�, hrG�+-�)' },
              { id: 'f4', front: 'What does a catalyst do?', back: 'Lowers activation energy, provides alternative pathway.' },
              { id: 'f5', front: 'Zero order half-life?', back: 'tG��/G�� = [A]G��/2k (depends on initial concentration)' },
              { id: 'f6', front: 'What is activation energy?', back: 'Minimum energy required for reaction to occur.' }
            ],
            mcqs: [
              { id: 'q1', question: 'Half-life of first order reaction:', options: ['Depends on [A]G��', 'Independent of [A]G��', 'Depends on temperature only', 'Is always 1 second'], correctIndex: 1, explanation: 'tG��/G�� = 0.693/k, no [A]G�� term.' },
              { id: 'q2', question: 'Unit of rate constant for zero order:', options: ['sG�+-�', 'mol/L-+s', 'L/mol-+s', 'L-�/mol-�-+s'], correctIndex: 1, explanation: 'Rate = k, so k has same units as rate.' },
              { id: 'q3', question: 'Catalyst changes:', options: ['+�H', 'Equilibrium constant', 'Activation energy', 'Enthalpy'], correctIndex: 2, explanation: 'Catalyst lowers Ea only.' },
              { id: 'q4', question: 'Arrhenius equation relates k to:', options: ['Pressure', 'Volume', 'Temperature', 'Concentration'], correctIndex: 2, explanation: 'k = Ae^(-Ea/RT), T is temperature.' },
              { id: 'q5', question: 'For first order: plot of ln[A] vs t is:', options: ['Parabola', 'Straight line', 'Exponential', 'Hyperbola'], correctIndex: 1, explanation: 'ln[A] = ln[A]G�� - kt is linear.' }
            ],
            reels: [
              { id: 'r1', title: 'Rate Law', content: 'Rate = k[A]^m[B]^n.\nk = rate constant.\nm, n found experimentally.', color: getReelColor(0) },
              { id: 'r2', title: 'First Order', content: 'tG��/G�� = 0.693/k.\nIndependent of [A]G��.\nMost common!', color: getReelColor(1) },
              { id: 'r3', title: 'Arrhenius', content: 'k = Ae^(-Ea/RT).\nHigher T = Higher k.\nFaster reaction!', color: getReelColor(2) },
              { id: 'r4', title: 'Ea', content: 'Activation Energy.\nEnergy barrier.\nCatalyst lowers it!', color: getReelColor(3) },
              { id: 'r5', title: 'Catalyst', content: 'Lowers Ea.\nNot consumed.\nDoesn\'t change +�H!', color: getReelColor(4) },
              { id: 'r6', title: 'Collision Theory', content: 'Collide + Energy + Orientation.\nAll three needed!', color: getReelColor(5) }
            ]
          },
          {
            id: 'chem5',
            title: '5. Organic: Haloalkanes & Haloarenes',
            description: 'Alkyl and Aryl halides, SN1, SN2, Elimination.',
            summary: '**Haloalkanes**: R-X (alkyl halides)\n**Haloarenes**: Ar-X (aryl halides)\n**SN1**: Unimolecular, carbocation, racemization\n**SN2**: Bimolecular, inversion, backside attack',
            detailedNotes: '### 1. Classification\n**By Halogen**: Fluoro, Chloro, Bromo, Iodo\n**By Carbon**: Primary (1-�), Secondary (2-�), Tertiary (3-�)\n\n### 2. Preparation\n* From alcohols: R-OH + HX G�� R-X + HG��O\n* From alkenes: Addition of HX, XG��\n* Halogen exchange: Finkelstein, Swarts\n\n### 3. Physical Properties\n* Higher BP than alkanes (dipole-dipole)\n* Insoluble in water\n* Denser than water (CHClG��, CClG��)\n\n### 4. Nucleophilic Substitution\n**SN1 (Substitution Nucleophilic Unimolecular)**\n* Two steps: (1) Carbocation formation (slow), (2) Attack by nucleophile (fast)\n* Rate = k[R-X]\n* Favored by: 3-� > 2-� > 1-�, polar protic solvents\n* Gives racemization (+ some inversion)\n\n**SN2 (Substitution Nucleophilic Bimolecular)**\n* One step: Backside attack\n* Rate = k[R-X][NuG�+]\n* Favored by: 1-� > 2-� > 3-�, polar aprotic solvents\n* Gives complete inversion (Walden inversion)\n\n### 5. Elimination Reactions\n**E1**: Two steps, carbocation, Zaitsev product\n**E2**: One step, anti-periplanar, Zaitsev product\n\nZaitsev Rule: More substituted alkene is major product.\n\n### 6. Haloarenes (Ar-X)\n* Less reactive than haloalkanes\n* C-X bond has partial double bond character (resonance)\n* Undergo electrophilic substitution (not nucleophilic)\n\n### 7. Important Reactions\n* Wurtz: 2R-X + 2Na G�� R-R + 2NaX\n* Grignard: R-X + Mg G�� R-MgX\n* Williamson: R-X + R\'OG�+ G�� R-O-R\'',
            flashcards: [
              { id: 'f1', front: 'SN1 vs SN2: Which gives inversion?', back: 'SN2 gives complete inversion (Walden inversion).' },
              { id: 'f2', front: 'SN1 is favored by?', back: '3-� halides, polar protic solvents.' },
              { id: 'f3', front: 'SN2 is favored by?', back: '1-� halides, polar aprotic solvents, strong nucleophiles.' },
              { id: 'f4', front: 'Zaitsev rule?', back: 'More substituted (stable) alkene is the major product.' },
              { id: 'f5', front: 'Wurtz reaction?', back: '2R-X + 2Na G�� R-R (coupling of alkyl halides)' },
              { id: 'f6', front: 'Grignard reagent formula?', back: 'R-MgX (organomagnesium halide)' },
              { id: 'f7', front: 'Why are haloarenes less reactive?', back: 'C-X bond has partial double bond character due to resonance.' }
            ],
            mcqs: [
              { id: 'q1', question: 'SN2 mechanism gives:', options: ['Retention', 'Racemization', 'Inversion', 'No change'], correctIndex: 2, explanation: 'Backside attack causes Walden inversion.' },
              { id: 'q2', question: 'SN1 is favored by:', options: ['1-� halides', '2-� halides', '3-� halides', 'All equally'], correctIndex: 2, explanation: '3-� carbocation is most stable.' },
              { id: 'q3', question: 'Grignard reagent is prepared using:', options: ['Na', 'Mg', 'Zn', 'Fe'], correctIndex: 1, explanation: 'R-X + Mg G�� R-MgX in dry ether.' },
              { id: 'q4', question: 'Zaitsev rule predicts formation of:', options: ['Less substituted alkene', 'More substituted alkene', 'Alcohol', 'Ether'], correctIndex: 1, explanation: 'More stable alkene is major product.' },
              { id: 'q5', question: 'Rate of SN2 depends on:', options: ['[R-X] only', '[Nu] only', 'Both [R-X] and [Nu]', 'Neither'], correctIndex: 2, explanation: 'Rate = k[R-X][Nu], bimolecular.' }
            ],
            reels: [
              { id: 'r1', title: 'SN1', content: 'Unimolecular.\nCarbocation formed.\n3-� > 2-� > 1-�', color: getReelColor(0) },
              { id: 'r2', title: 'SN2', content: 'Bimolecular.\nBackside attack.\n1-� > 2-� > 3-�', color: getReelColor(1) },
              { id: 'r3', title: 'Inversion', content: 'SN2 = Complete inversion.\nSN1 = Racemization.\nWalden inversion!', color: getReelColor(2) },
              { id: 'r4', title: 'Zaitsev', content: 'More substituted alkene.\nMore stable.\nMajor product.', color: getReelColor(3) },
              { id: 'r5', title: 'Grignard', content: 'R-X + Mg G�� R-MgX.\nDry ether solvent.\nVery reactive!', color: getReelColor(4) },
              { id: 'r6', title: 'Haloarenes', content: 'Less reactive.\nResonance stabilized.\nElectrophilic substitution.', color: getReelColor(5) }
            ]
          }
        ]
};
