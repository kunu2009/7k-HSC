import { Subject } from "../types";
import { getReelColor } from "./helpers";

export const BIO_SUBJECT: Subject = {
  id: "bio",
  name: "Biology",
  icon: "Dna",
  color: "bg-green-600",
  syllabus:
    "Reproduction, Genetics, Biotechnology, Evolution, Ecology & Environment",
  paperPattern:
    "70 marks theory (MCQ + Short + Long answers), 30 marks practical",
  previousPapers: [
    { year: "2024", title: "2024 Biology Paper", link: "#" },
    { year: "2023", title: "2023 Biology Paper", link: "#" },
    { year: "2022", title: "2022 Biology Paper", link: "#" },
  ],
  chapters: [
    {
      id: "bio-ch1",
      title: "Chapter 1: Reproduction in Organisms",
      description: "Modes of reproduction in living organisms",
      summary: `
# Reproduction in Organisms

## Key Concepts

### Types of Reproduction
1. **Asexual Reproduction**
   - Binary fission (bacteria, amoeba)
   - Budding (yeast, hydra)
   - Fragmentation (Spirogyra)
   - Vegetative propagation (plants)
   - Spore formation (fungi)

2. **Sexual Reproduction**
   - Involves fusion of gametes
   - Creates genetic variation
   - Pre-fertilization, fertilization, post-fertilization events

### Life Span and Reproduction
- Every organism has definite life span
- Reproduction ensures continuity of species
- Clone: Morphologically and genetically similar individuals

### Events in Sexual Reproduction
1. **Pre-fertilization**
   - Gametogenesis (formation of gametes)
   - Gamete transfer

2. **Fertilization (Syngamy)**
   - External fertilization (aquatic organisms)
   - Internal fertilization (terrestrial organisms)

3. **Post-fertilization**
   - Zygote formation
   - Embryogenesis
   - Development of offspring

### Plant Reproduction
- **Vegetative**: Rhizomes, tubers, runners
- **Asexual**: Zoospores, conidia
- **Sexual**: Flowers, seeds, fruits

### Embryo Development
- Zygote G�� Embryo G�� Organism
- Oviparous: Lay eggs (birds, reptiles)
- Viviparous: Give birth (mammals)
            `,
      detailedNotes: `
# Detailed Notes: Reproduction in Organisms

## Asexual Reproduction

### Binary Fission
- Parent cell divides into two daughter cells
- Example: Amoeba (simple), Paramecium (transverse)
- In bacteria: rapid multiplication under favorable conditions

### Budding
- Small outgrowth develops on parent body
- Yeast: Single-celled budding
- Hydra: Multicellular budding
- Bud may detach or remain attached (colony)

### Fragmentation
- Body breaks into fragments
- Each fragment grows into complete organism
- Examples: Spirogyra, sea star

### Regeneration
- Ability to regenerate lost parts
- Planaria: Specialized cells dedifferentiate
- Hydra: High regeneration capacity

### Vegetative Propagation in Plants
| Structure | Examples |
|-----------|----------|
| Runner | Strawberry, grass |
| Rhizome | Ginger, turmeric |
| Tuber | Potato |
| Bulb | Onion, garlic |
| Offset | Pistia, water hyacinth |

### Advantages of Asexual Reproduction
- Rapid multiplication
- Single parent required
- Identical offspring (clones)
- Useful for propagating plants

## Sexual Reproduction

### Gametogenesis
- **Spermatogenesis**: Formation of male gametes (sperm)
- **Oogenesis**: Formation of female gametes (ova)
- Meiosis reduces chromosome number by half

### Types of Gametes
- **Isogametes**: Similar in appearance (some algae)
- **Heterogametes**: Different - sperm (small, motile) and ovum (large, non-motile)

### Fertilization
1. **External Fertilization**
   - Occurs outside body
   - Aquatic environment required
   - Large number of gametes produced
   - Examples: Fish, frogs, starfish

2. **Internal Fertilization**
   - Occurs inside female body
   - Fewer gametes needed
   - Higher success rate
   - Examples: Reptiles, birds, mammals

### Post-fertilization Events
- **Zygote**: First cell of new organism
- **Embryogenesis**: Development of embryo from zygote
- **Cell division**: Mitotic divisions
- **Differentiation**: Cells develop specialized functions

### Oviparous vs Viviparous
| Oviparous | Viviparous |
|-----------|------------|
| Lay eggs | Give birth to young |
| Development outside body | Development inside body |
| Birds, reptiles, fish | Most mammals |
| Less parental care | More parental care |

## Important Terms
- **Clone**: Genetically identical individuals
- **Parthenogenesis**: Development without fertilization (honey bees, some lizards)
- **Hermaphrodite**: Both male and female organs in same individual
            `,
      flashcards: [
        {
          id: "f1",
          front: "What is binary fission?",
          back: "Type of asexual reproduction where parent cell divides into two equal daughter cells. Example: Amoeba, bacteria.",
        },
        {
          id: "f2",
          front: "Difference between oviparous and viviparous?",
          back: "Oviparous lay eggs (birds, reptiles). Viviparous give birth to young ones with development inside mother (mammals).",
        },
        {
          id: "f3",
          front: "What is parthenogenesis?",
          back: "Development of organism from unfertilized egg without fusion of gametes. Example: Honey bees, some lizards.",
        },
        {
          id: "f4",
          front: "Name 5 methods of vegetative propagation.",
          back: "Runner (strawberry), Rhizome (ginger), Tuber (potato), Bulb (onion), Offset (water hyacinth).",
        },
        {
          id: "f5",
          front: "What is gametogenesis?",
          back: "The process of formation of gametes - spermatogenesis (male gametes) and oogenesis (female gametes) through meiosis.",
        },
        {
          id: "f6",
          front: "What are isogametes?",
          back: "Gametes that are similar in appearance, found in some lower organisms like certain algae. Heterogametes are different (sperm and ovum).",
        },
      ],
      mcqs: [
        {
          id: "mcq1",
          question: "Which is NOT a method of asexual reproduction?",
          options: ["Binary fission", "Budding", "Syngamy", "Fragmentation"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq2",
          question: "Vegetative propagation by tubers is seen in:",
          options: ["Potato", "Ginger", "Onion", "Strawberry"],
          correctIndex: 0,
          explanation: "",
        },
        {
          id: "mcq3",
          question: "In which organisms does external fertilization occur?",
          options: ["Birds", "Frogs", "Mammals", "Reptiles"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq4",
          question: "Parthenogenesis is observed in:",
          options: ["Honey bee", "Dog", "Human", "Crow"],
          correctIndex: 0,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r1",
          color: "#4ECDC4",
          title: "Asexual vs Sexual Reproduction",
          content:
            "Asexual = 1 parent, clones, fast | Sexual = 2 parents, variation, slow =���",
        },
        {
          id: "r2",
          color: "#45B7D1",
          title: "Binary Fission Steps",
          content:
            "DNA replication G�� Cell elongates G�� Plasma membrane pinches G�� 2 daughter cells =���",
        },
        {
          id: "r3",
          color: "#96CEB4",
          title: "Vegetative Propagation Mnemonics",
          content:
            "RRTBO: Runner-Strawberry, Rhizome-Ginger, Tuber-Potato, Bulb-Onion, Offset-Pistia =��",
        },
        {
          id: "r4",
          color: "#FFEAA7",
          title: "Fertilization Types",
          content:
            "External = Fish, Frog (water needed) | Internal = Birds, Mammals (inside body) =�Ƀ=�ɪ",
        },
        {
          id: "r5",
          color: "#DDA0DD",
          title: "Oviparous vs Viviparous",
          content:
            "Eggs outside = Oviparous (Birds) | Birth to young = Viviparous (Mammals) =���=��",
        },
      ],
    },
    {
      id: "bio-ch2",
      title: "Chapter 2: Genetics and Heredity",
      description: "Principles of inheritance and variation",
      summary: `
# Genetics and Heredity

## Key Concepts

### Mendel's Laws
1. **Law of Dominance**
   - One allele is dominant over another
   - Dominant character expressed in heterozygote

2. **Law of Segregation**
   - Alleles separate during gamete formation
   - Each gamete receives one allele

3. **Law of Independent Assortment**
   - Different pairs of alleles assort independently
   - Applies to genes on different chromosomes

### Important Terms
- **Genotype**: Genetic makeup (AA, Aa, aa)
- **Phenotype**: Physical expression
- **Homozygous**: Same alleles (AA, aa)
- **Heterozygous**: Different alleles (Aa)
- **Allele**: Alternate forms of gene

### Inheritance Patterns
1. **Complete Dominance**: One allele masks other (Mendel's pea)
2. **Incomplete Dominance**: Intermediate phenotype (pink snapdragon)
3. **Codominance**: Both alleles express (AB blood group)
4. **Multiple Alleles**: More than 2 alleles (ABO blood group)

### Chromosomal Theory
- Genes located on chromosomes
- Chromosomes occur in pairs
- Linkage: Genes on same chromosome
- Crossing over: Exchange of genetic material

### Sex Determination
- **XX-XY System**: Mammals, humans
- **ZW-ZZ System**: Birds
- Female: XX, Male: XY (in humans)
- Sex-linked inheritance: Color blindness, hemophilia

### DNA Structure
- Double helix (Watson & Crick)
- Nucleotides: Sugar + Phosphate + Base
- Bases: A-T, G-C pairing
- Central Dogma: DNA G�� RNA G�� Protein
            `,
      detailedNotes: `
# Detailed Notes: Genetics and Heredity

## Gregor Mendel's Experiments

### Reasons for Mendel's Success
- Chose contrasting characters
- Considered one character at a time
- Used statistical analysis
- Maintained accurate records
- Pure breeding varieties used

### Monohybrid Cross
- Cross between organisms differing in one character
- Example: Tall +� Dwarf pea plants
- F1: All tall (Tt)
- F2: 3 Tall : 1 Dwarf (3:1 ratio)
- Genotypic ratio: 1TT : 2Tt : 1tt

### Dihybrid Cross
- Cross between organisms differing in two characters
- Example: Round Yellow +� Wrinkled Green
- F2 ratio: 9:3:3:1
- 9 Round Yellow, 3 Round Green, 3 Wrinkled Yellow, 1 Wrinkled Green

### Punnett Square
Used to predict offspring genotypes and phenotypes

         T       t
    +--------+--------+
 T  |   TT   |   Tt   |
    +--------+--------+
 t  |   Tt   |   tt   |
    +--------+--------+

## Deviations from Mendelian Ratios

### Incomplete Dominance
- Heterozygote shows intermediate phenotype
- Example: Snapdragon flowers
- Red +� White = Pink
- F2: 1 Red : 2 Pink : 1 White

### Codominance
- Both alleles fully express
- Example: ABO blood group
- I^A I^B genotype = AB blood group
- Both A and B antigens present

### Multiple Alleles
- More than 2 alleles for a gene in population
- ABO blood group: I^A, I^B, i
- Possible genotypes: I^A I^A, I^A i, I^B I^B, I^B i, I^A I^B, ii

## Linkage and Crossing Over

### Linkage
- Genes on same chromosome inherited together
- Complete linkage: Genes very close, no crossing over
- Incomplete linkage: Some crossing over occurs

### Crossing Over
- Exchange of segments between homologous chromosomes
- Occurs during prophase I of meiosis
- Results in genetic recombination
- Frequency depends on distance between genes

## Sex Determination

### Human Sex Chromosomes
| Sex | Chromosomes | Gametes |
|-----|-------------|---------|
| Female | 44 + XX | 22 + X only |
| Male | 44 + XY | 22 + X or 22 + Y |

### Sex-Linked Inheritance
- **Color Blindness**: X-linked recessive
- **Hemophilia**: X-linked recessive
- Carrier female +� Normal male
- Sons: 50% affected, Daughters: 50% carriers

## DNA Structure and Function

### DNA Composition
- Deoxyribose sugar
- Phosphate group
- Nitrogenous bases: Adenine, Thymine, Guanine, Cytosine
- A=T (2 hydrogen bonds), GG��C (3 hydrogen bonds)

### DNA Replication
- Semi-conservative replication
- Enzymes: Helicase, DNA polymerase, Ligase
- Leading and lagging strands
- Okazaki fragments on lagging strand

### Central Dogma
DNA G�� (Transcription) G�� RNA G�� (Translation) G�� Protein
            `,
      flashcards: [
        {
          id: "f7",
          front: "State Mendel's Law of Segregation.",
          back: "During gamete formation, the alleles of a gene separate so that each gamete receives only one allele. Also called Law of Purity of Gametes.",
        },
        {
          id: "f8",
          front: "What is the difference between genotype and phenotype?",
          back: "Genotype is genetic makeup (AA, Aa, aa). Phenotype is physical/observable expression of genes (tall, dwarf, color).",
        },
        {
          id: "f9",
          front: "What is codominance?",
          back: "Both alleles express fully in heterozygote. Example: AB blood group where both A and B antigens are present.",
        },
        {
          id: "f10",
          front: "How is sex determined in humans?",
          back: "XX-XY system. Females have XX chromosomes, males have XY. Father determines sex of child by contributing X or Y.",
        },
        {
          id: "f11",
          front: "What is crossing over?",
          back: "Exchange of genetic material between homologous chromosomes during prophase I of meiosis, leading to genetic recombination.",
        },
        {
          id: "f12",
          front: "State the base pairing rule in DNA.",
          back: "Adenine pairs with Thymine (A=T, 2 H-bonds). Guanine pairs with Cytosine (GG��C, 3 H-bonds).",
        },
      ],
      mcqs: [
        {
          id: "mcq5",
          question: "The phenotypic ratio of monohybrid cross is:",
          options: ["1:2:1", "3:1", "9:3:3:1", "1:1"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq6",
          question: "Color blindness is:",
          options: [
            "Autosomal dominant",
            "X-linked recessive",
            "Y-linked",
            "Autosomal recessive",
          ],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq7",
          question: "Which blood group is universal donor?",
          options: ["A", "B", "AB", "O"],
          correctIndex: 3,
          explanation: "",
        },
        {
          id: "mcq8",
          question: "How many hydrogen bonds are there between G and C?",
          options: ["1", "2", "3", "4"],
          correctIndex: 2,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r6",
          color: "#98D8C8",
          title: "Mendel's 3 Laws",
          content:
            "1. Dominance: One masks other | 2. Segregation: Alleles separate | 3. Independent Assortment: Different genes = separate =���",
        },
        {
          id: "r7",
          color: "#F7DC6F",
          title: "Monohybrid Ratio",
          content: "F2 Phenotypic = 3:1 | Genotypic = 1:2:1 | TT:Tt:tt =���",
        },
        {
          id: "r8",
          color: "#BB8FCE",
          title: "Blood Group Genetics",
          content:
            "A = I^A I^A or I^A i | B = I^B I^B or I^B i | AB = I^A I^B | O = ii =��+",
        },
        {
          id: "r9",
          color: "#85C1E9",
          title: "DNA Base Pairing",
          content:
            "A=T (2 bonds) | GG��C (3 bonds) | Chargaff's rule: A=T, G=C =���",
        },
        {
          id: "r10",
          color: "#FF6B6B",
          title: "Sex Determination",
          content:
            "XX = Female G��n+� | XY = Male G��n+� | Father gives X or Y G�� determines sex =��",
        },
      ],
    },
    {
      id: "bio-ch3",
      title: "Chapter 3: Biotechnology",
      description: "Principles and applications of biotechnology",
      summary: `
# Biotechnology

## Key Concepts

### What is Biotechnology?
- Technology using biological systems
- Manipulating living organisms for human benefit
- Modern biotechnology: Genetic engineering + bioprocess technology

### Core Techniques

1. **Genetic Engineering (rDNA Technology)**
   - Cutting DNA with restriction enzymes
   - Joining DNA with ligase
   - Cloning genes in vectors
   - Expressing foreign genes

2. **Polymerase Chain Reaction (PCR)**
   - Amplifying DNA segments
   - Requires: Template, primers, Taq polymerase
   - Steps: Denaturation, Annealing, Extension

3. **Gel Electrophoresis**
   - Separating DNA fragments by size
   - Smaller fragments move faster
   - Used in DNA fingerprinting

### Tools of rDNA Technology
- **Restriction Enzymes**: Molecular scissors (EcoRI, HindIII)
- **Vectors**: Plasmids, bacteriophages, cosmids
- **Ligase**: Joins DNA fragments
- **Host Organisms**: E. coli, yeast, plant cells

### Applications
1. **Medicine**
   - Insulin production (Humulin)
   - Gene therapy
   - Vaccines (Hepatitis B)

2. **Agriculture**
   - Bt crops (insect resistance)
   - Golden rice (Vitamin A)
   - Herbicide resistance

3. **Industry**
   - Enzymes production
   - Biofuels
   - Bioremediation

### Bioethics
- GMO safety concerns
- Human cloning debates
- Gene patenting issues
            `,
      detailedNotes: `
# Detailed Notes: Biotechnology

## Recombinant DNA Technology

### Steps in rDNA Technology
1. **Isolation of DNA**
   - Break cells (lysozyme for bacteria)
   - Remove RNA (RNase)
   - Remove proteins (protease)
   - Precipitate DNA (ethanol)

2. **Cutting DNA (Restriction Digestion)**
   - Restriction endonucleases cut at specific sites
   - Palindromic sequences recognized
   - Creates sticky or blunt ends
   - Example: EcoRI cuts at GAATTC

3. **Joining DNA (Ligation)**
   - DNA ligase joins fragments
   - Sticky ends join more efficiently
   - Creates recombinant DNA

4. **Introduction into Host**
   - Transformation: DNA uptake (CaClG�� treatment)
   - Transfection: Virus-mediated
   - Electroporation: Electric pulse

5. **Selection of Recombinants**
   - Antibiotic resistance markers
   - Blue-white screening (lac operon)
   - PCR confirmation

### Vectors

| Vector | Features | Insert Size |
|--------|----------|-------------|
| Plasmid | Circular, self-replicating | Up to 10 kb |
| Bacteriophage | Viral DNA | Up to 25 kb |
| Cosmid | Plasmid + phage features | Up to 45 kb |
| BAC | Bacterial artificial chromosome | Up to 300 kb |

### Features of Good Vector
- Origin of replication (ori)
- Selectable marker (antibiotic resistance)
- Cloning sites (restriction sites)
- Small size for easy manipulation

## PCR (Polymerase Chain Reaction)

### Components Required
- Template DNA
- Two primers (forward and reverse)
- Taq DNA polymerase (thermostable)
- dNTPs (nucleotides)
- Buffer and MgClG��

### PCR Steps
1. **Denaturation** (94-98-�C): DNA strands separate
2. **Annealing** (50-65-�C): Primers bind to template
3. **Extension** (72-�C): Taq polymerase synthesizes DNA

### Applications of PCR
- DNA fingerprinting
- Disease diagnosis
- Forensic science
- Paternity testing
- Ancient DNA analysis

## Applications of Biotechnology

### Medical Applications
1. **Insulin Production**
   - Human insulin gene inserted in E. coli
   - Humulin: First FDA-approved rDNA product (1982)
   - A and B chains produced separately, combined

2. **Gene Therapy**
   - Replacing defective genes
   - ADA deficiency first treated (1990)
   - Viral vectors used for delivery

3. **Vaccines**
   - Recombinant Hepatitis B vaccine
   - Safer than traditional vaccines
   - No risk of infection

### Agricultural Applications
1. **Bt Crops**
   - Bacillus thuringiensis gene inserted
   - Produces Cry protein (insecticidal)
   - Bt cotton, Bt brinjal
   - Reduces pesticide use

2. **Golden Rice**
   - Produces beta-carotene (Vitamin A precursor)
   - Addresses Vitamin A deficiency
   - Contains genes from daffodil and bacteria

3. **Herbicide Resistant Crops**
   - Roundup Ready soybeans
   - Tolerate glyphosate herbicide

## Bioethics and Biosafety

### Concerns
- Environmental impact of GMOs
- Gene flow to wild relatives
- Allergenicity of GM foods
- Antibiotic resistance spread

### Regulations
- Institutional Biosafety Committee (IBSC)
- Genetic Engineering Approval Committee (GEAC)
- Cartagena Protocol on Biosafety
            `,
      flashcards: [
        {
          id: "f13",
          front: "What are restriction enzymes?",
          back: "Molecular scissors that cut DNA at specific recognition sequences. Examples: EcoRI cuts at GAATTC. Also called restriction endonucleases.",
        },
        {
          id: "f14",
          front: "What is PCR and its 3 steps?",
          back: "Polymerase Chain Reaction - amplifies DNA. Steps: 1) Denaturation (94-�C) 2) Annealing (50-65-�C) 3) Extension (72-�C)",
        },
        {
          id: "f15",
          front: "What is a vector in biotechnology?",
          back: "DNA molecule that carries foreign DNA into host cell. Examples: Plasmids, bacteriophages, cosmids. Must have ori, selectable marker, cloning sites.",
        },
        {
          id: "f16",
          front: "What are Bt crops?",
          back: "Crops containing gene from Bacillus thuringiensis that produces Cry protein (insecticidal). Example: Bt cotton, Bt brinjal. Reduces pesticide use.",
        },
        {
          id: "f17",
          front: "What is Humulin?",
          back: "Human insulin produced by recombinant DNA technology using E. coli. First FDA-approved rDNA product (1982). Revolutionized diabetes treatment.",
        },
        {
          id: "f18",
          front: "What is gene therapy?",
          back: "Treatment of genetic disorders by replacing defective genes with functional ones. First success: ADA deficiency (1990). Uses viral vectors.",
        },
      ],
      mcqs: [
        {
          id: "mcq9",
          question: "Which enzyme cuts DNA at specific sites?",
          options: [
            "Ligase",
            "Polymerase",
            "Restriction endonuclease",
            "Helicase",
          ],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq10",
          question: "Bt toxin gene comes from:",
          options: [
            "E. coli",
            "Bacillus thuringiensis",
            "Agrobacterium",
            "Yeast",
          ],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq11",
          question: "PCR was developed by:",
          options: ["Watson", "Crick", "Kary Mullis", "Cohen"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq12",
          question: "Golden rice is rich in:",
          options: ["Iron", "Protein", "Beta-carotene", "Vitamin C"],
          correctIndex: 2,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r11",
          color: "#4ECDC4",
          title: "rDNA Steps",
          content:
            "Isolate G�� Cut (restriction enzyme) G�� Join (ligase) G�� Insert in host G�� Select recombinants =���",
        },
        {
          id: "r12",
          color: "#45B7D1",
          title: "PCR Cycle",
          content:
            "Denature 94-�C G�� Anneal 55-�C G�� Extend 72-�C G�� Repeat 30x = Millions of copies! =���",
        },
        {
          id: "r13",
          color: "#96CEB4",
          title: "Vector Features",
          content:
            "Ori (replication) + Marker (selection) + MCS (cloning) = Good Vector =���",
        },
        {
          id: "r14",
          color: "#FFEAA7",
          title: "Bt Cotton Action",
          content:
            "Cry protein G�� Bollworm eats G�� Gut becomes alkaline G�� Toxin activated G�� Pest dies =�ɢG��",
        },
        {
          id: "r15",
          color: "#DDA0DD",
          title: "Biotechnology Products",
          content:
            "Medicine: Insulin, Vaccines | Agri: Bt crops, Golden Rice | Industry: Enzymes, Biofuel =�š",
        },
      ],
    },
    {
      id: "bio-ch4",
      title: "Chapter 4: Evolution",
      description: "Origin of life and evolution of organisms",
      summary: `
# Evolution

## Key Concepts

### Origin of Life
- **Abiogenesis**: Life from non-living matter
- **Oparin-Haldane Hypothesis**: Chemical evolution
- **Miller-Urey Experiment**: Simulated primitive earth
- First molecules: RNA (RNA world hypothesis)

### Evidence of Evolution
1. **Fossil Evidence**
   - Preserved remains of ancient organisms
   - Shows gradual changes over time
   - Transitional forms (Archaeopteryx)

2. **Anatomical Evidence**
   - Homologous organs: Same origin, different function
   - Analogous organs: Different origin, same function
   - Vestigial organs: Reduced, functionless

3. **Molecular Evidence**
   - DNA/protein sequence similarities
   - Cytochrome c comparison
   - More similar = more closely related

### Theories of Evolution
1. **Lamarckism**
   - Inheritance of acquired characters
   - Use and disuse theory
   - Disproved (Weismann's experiment)

2. **Darwinism (Natural Selection)**
   - Overproduction of offspring
   - Struggle for existence
   - Survival of the fittest
   - Variation and inheritance

3. **Modern Synthetic Theory**
   - Combines genetics with Darwin's theory
   - Gene mutations as source of variation
   - Natural selection acts on genetic variation

### Mechanisms of Evolution
- **Gene Flow**: Movement of genes between populations
- **Genetic Drift**: Random changes in gene frequency
- **Natural Selection**: Differential survival and reproduction
- **Mutation**: Source of new variations
            `,
      detailedNotes: `
# Detailed Notes: Evolution

## Origin of Life Theories

### Abiogenesis (Chemical Evolution)
- Life originated from non-living organic molecules
- Primitive earth conditions were different
- No oxygen (reducing atmosphere)
- Energy sources: UV radiation, lightning

### Oparin-Haldane Hypothesis
- Proposed independently (1920s)
- Primitive atmosphere: CHG��, NHG��, HG��O, HG��
- Energy from lightning, UV radiation
- Simple organic molecules formed
- Coacervates: Aggregates of organic molecules

### Miller-Urey Experiment (1953)
- Simulated primitive earth conditions
- Used CHG��, NHG��, HG��O, HG��
- Electric sparks for energy
- Produced amino acids (glycine, alanine)
- Proved organic molecules can form abiotically

### First Life Forms
- Chemoheterotrophs: Used organic molecules
- Autotrophs evolved later
- Prokaryotes first (bacteria)
- Eukaryotes evolved ~2 billion years ago

## Evidence of Evolution

### Fossil Evidence
| Fossil Type | Description | Example |
|-------------|-------------|---------|
| Preserved | Original remains | Frozen mammoth |
| Mold | Impression in rock | Leaf imprint |
| Cast | Filled mold | Shell cast |
| Petrified | Minerals replace tissue | Petrified wood |

### Transitional Fossils
- **Archaeopteryx**: Reptile-bird link (feathers + reptilian teeth, tail)
- **Tiktaalik**: Fish-amphibian transition
- **Australopithecus**: Ape-human ancestor

### Homologous Organs
- Same basic structure, different functions
- Indicate common ancestry
- Examples:
  - Forelimbs: Human arm, whale flipper, bat wing, dog leg
  - All have humerus, radius, ulna, carpals

### Analogous Organs
- Similar function, different origin
- Result of convergent evolution
- Examples:
  - Wings of insect vs bird
  - Eye of octopus vs mammal

### Vestigial Organs
- Reduced or non-functional organs
- Evidence of evolutionary past
- Human examples: Appendix, wisdom teeth, tailbone, ear muscles

## Theories of Evolution

### Lamarckism
- **Use and Disuse**: Organs develop/degenerate based on use
- **Inheritance of Acquired Characters**: Acquired traits passed to offspring
- Example: Giraffe's long neck from stretching
- **Disproved**: Weismann cut mice tails for 20 generations - no effect on offspring

### Darwin's Natural Selection
1. **Overproduction**: More offspring than can survive
2. **Variation**: Individuals differ in traits
3. **Struggle for Existence**: Competition for resources
4. **Survival of the Fittest**: Better adapted survive
5. **Inheritance**: Favorable traits passed on
6. **Speciation**: New species evolve over time

### Examples of Natural Selection
- Industrial melanism in peppered moth
- Antibiotic resistance in bacteria
- Pesticide resistance in insects

### Modern Synthetic Theory (Neo-Darwinism)
- Combines Mendelian genetics + Darwinism
- **Population** is unit of evolution (not individual)
- Sources of variation:
  - Gene mutations
  - Chromosomal mutations
  - Genetic recombination

## Types of Natural Selection
1. **Stabilizing**: Favors intermediate phenotype
2. **Directional**: Favors one extreme
3. **Disruptive**: Favors both extremes

## Hardy-Weinberg Equilibrium
- Gene frequencies remain constant if:
  - Large population
  - Random mating
  - No selection
  - No mutation
  - No migration
- Equation: p-� + 2pq + q-� = 1
            `,
      flashcards: [
        {
          id: "f19",
          front: "What did Miller-Urey experiment prove?",
          back: "Proved organic molecules (amino acids) can form from inorganic compounds under primitive earth conditions. Simulated atmosphere of CHG��, NHG��, HG��O, HG�� with electric sparks.",
        },
        {
          id: "f20",
          front: "What are homologous organs?",
          back: "Organs with same basic structure and origin but different functions due to adaptation. Example: Forelimbs of human, whale, bat, dog. Evidence of common ancestry.",
        },
        {
          id: "f21",
          front: "State Darwin's theory of natural selection.",
          back: "Overproduction G�� Variation G�� Struggle for existence G�� Survival of fittest G�� Inheritance of favorable traits G�� Speciation",
        },
        {
          id: "f22",
          front: "Why was Lamarckism rejected?",
          back: "Weismann's experiment: Cut mice tails for 20 generations - offspring still had tails. Acquired characters are not inherited.",
        },
        {
          id: "f23",
          front: "What is Archaeopteryx?",
          back: "Transitional fossil (link between reptiles and birds). Had feathers like bird but teeth, clawed wings, and bony tail like reptile.",
        },
        {
          id: "f24",
          front: "What is genetic drift?",
          back: "Random changes in gene frequency in small populations, not due to natural selection. Can lead to loss of genetic variation.",
        },
      ],
      mcqs: [
        {
          id: "mcq13",
          question: "Miller-Urey experiment demonstrated formation of:",
          options: ["DNA", "Amino acids", "Proteins", "Cells"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq14",
          question: "Homologous organs indicate:",
          options: [
            "Convergent evolution",
            "Common ancestry",
            "Parallel evolution",
            "No relation",
          ],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq15",
          question: "Who proposed natural selection?",
          options: ["Lamarck", "Oparin", "Darwin", "Mendel"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq16",
          question: "Vestigial organ in humans:",
          options: ["Heart", "Appendix", "Kidney", "Lung"],
          correctIndex: 1,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r16",
          color: "#98D8C8",
          title: "Miller-Urey Setup",
          content:
            "CHG�� + NHG�� + HG��O + HG�� + G�� = Amino acids! Proved life chemicals can form naturally =���",
        },
        {
          id: "r17",
          color: "#F7DC6F",
          title: "Homologous vs Analogous",
          content:
            "Homologous: Same origin, different function (arm, flipper) | Analogous: Different origin, same function (insect wing, bird wing) =���",
        },
        {
          id: "r18",
          color: "#BB8FCE",
          title: "Darwin's Theory in 5 Words",
          content:
            "Overproduction G�� Variation G�� Struggle G�� Survival G�� Inheritance =��+",
        },
        {
          id: "r19",
          color: "#85C1E9",
          title: "Human Vestigial Organs",
          content:
            "Appendix + Wisdom teeth + Tailbone + Ear muscles = Evidence of our evolutionary past! =���",
        },
        {
          id: "r20",
          color: "#FF6B6B",
          title: "Lamarck vs Darwin",
          content:
            "Lamarck: Giraffe stretched neck G�� Got longer (WRONG) | Darwin: Longer necks survived better G�� More offspring (RIGHT) =���",
        },
      ],
    },
    {
      id: "bio-ch5",
      title: "Chapter 5: Ecology and Environment",
      description: "Organisms and their environment",
      summary: `
# Ecology and Environment

## Key Concepts

### Levels of Organization
1. **Organism** G�� **Population** G�� **Community** G�� **Ecosystem** G�� **Biome** G�� **Biosphere**

### Ecosystem
- Functional unit of nature
- Biotic (living) + Abiotic (non-living) components
- Energy flow and nutrient cycling

### Components of Ecosystem
1. **Abiotic**: Light, temperature, water, soil, minerals
2. **Biotic**:
   - Producers (autotrophs)
   - Consumers (heterotrophs)
   - Decomposers (saprotrophs)

### Energy Flow
- Unidirectional flow
- 10% Law: Only 10% energy transfers to next level
- Food chain G�� Food web
- Trophic levels: Producer G�� Primary G�� Secondary G�� Tertiary consumer

### Ecological Pyramids
1. **Pyramid of Numbers**: Number of organisms at each level
2. **Pyramid of Biomass**: Total mass at each level
3. **Pyramid of Energy**: Always upright, energy at each level

### Biogeochemical Cycles
1. **Carbon Cycle**: Photosynthesis, respiration, decomposition
2. **Nitrogen Cycle**: Fixation, nitrification, denitrification
3. **Water Cycle**: Evaporation, condensation, precipitation

### Environmental Issues
- **Pollution**: Air, water, soil, noise
- **Global Warming**: Greenhouse effect, rising temperatures
- **Ozone Depletion**: CFCs destroying ozone layer
- **Biodiversity Loss**: Habitat destruction, overexploitation
            `,
      detailedNotes: `
# Detailed Notes: Ecology and Environment

## Ecosystem Structure

### Abiotic Components
| Factor | Description | Effect |
|--------|-------------|--------|
| Light | Energy source | Photosynthesis, behavior |
| Temperature | Heat levels | Metabolic rate, distribution |
| Water | Essential for life | Determines habitat type |
| Soil | Substrate | Nutrient availability |

### Biotic Components

1. **Producers (Autotrophs)**
   - Make own food
   - Photosynthetic: Plants, algae, cyanobacteria
   - Chemosynthetic: Some bacteria

2. **Consumers (Heterotrophs)**
   - Primary: Herbivores (deer, grasshopper)
   - Secondary: Carnivores eating herbivores (frog, snake)
   - Tertiary: Top predators (lion, eagle)

3. **Decomposers (Saprotrophs)**
   - Break down dead organic matter
   - Bacteria and fungi
   - Recycle nutrients

## Energy Flow

### Food Chain
Producer G�� Primary Consumer G�� Secondary Consumer G�� Tertiary Consumer
Grass G�� Grasshopper G�� Frog G�� Snake G�� Eagle

### Food Web
- Interconnected food chains
- More realistic representation
- Provides stability to ecosystem

### 10% Law (Lindeman's Law)
- Only 10% energy passes to next trophic level
- 90% lost as heat, respiration, waste
- Limits food chain length (usually 4-5 levels)

### Energy Calculation
If producer has 10,000 J energy:
- Primary consumer: 1,000 J
- Secondary consumer: 100 J
- Tertiary consumer: 10 J

## Ecological Pyramids

### Pyramid of Numbers
- **Upright**: Grassland (many producers, few consumers)
- **Inverted**: Tree ecosystem (one tree supports many insects)

### Pyramid of Biomass
- **Upright**: Most terrestrial ecosystems
- **Inverted**: Aquatic (phytoplankton less mass than zooplankton at any time)

### Pyramid of Energy
- **Always Upright**: Energy decreases at each level
- Most reliable pyramid

## Biogeochemical Cycles

### Carbon Cycle
1. **Photosynthesis**: COG�� G�� Organic carbon
2. **Respiration**: Organic carbon G�� COG��
3. **Decomposition**: Dead matter G�� COG��
4. **Combustion**: Fossil fuels G�� COG��
5. **Ocean absorption**: Atmospheric COG�� G�� Dissolved COG��

### Nitrogen Cycle
| Process | Organism | Conversion |
|---------|----------|------------|
| Nitrogen Fixation | Rhizobium, Azotobacter | NG�� G�� NHG�� |
| Nitrification | Nitrosomonas, Nitrobacter | NHG�� G�� NOG��G�+ G�� NOG��G�+ |
| Assimilation | Plants | NOG��G�+ G�� Organic nitrogen |
| Ammonification | Decomposers | Organic N G�� NHG�� |
| Denitrification | Pseudomonas | NOG��G�+ G�� NG�� |

## Environmental Issues

### Pollution Types
1. **Air Pollution**
   - Sources: Vehicles, industries, burning
   - Effects: Respiratory diseases, acid rain
   - Pollutants: CO, SOG��, NOG��, particulates

2. **Water Pollution**
   - Sources: Industrial effluents, sewage
   - Effects: Eutrophication, disease
   - Indicators: BOD, COD

3. **Soil Pollution**
   - Sources: Pesticides, fertilizers, waste
   - Effects: Reduced fertility, bioaccumulation

### Global Warming
- Greenhouse gases: COG��, CHG��, NG��O, CFCs
- Effects:
  - Rising sea levels
  - Melting glaciers
  - Climate change
  - Species extinction

### Ozone Depletion
- Ozone layer in stratosphere
- CFCs release chlorine atoms
- Each Cl can destroy 100,000 OG�� molecules
- UV radiation increases
- Montreal Protocol: Phase out CFCs

### Conservation
1. **In-situ**: National parks, sanctuaries, biosphere reserves
2. **Ex-situ**: Zoos, botanical gardens, seed banks, cryopreservation
            `,
      flashcards: [
        {
          id: "f25",
          front: "What is 10% Law?",
          back: "Only 10% of energy transfers from one trophic level to the next. 90% is lost as heat, respiration, and waste. Given by Lindeman.",
        },
        {
          id: "f26",
          front: "What is nitrogen fixation?",
          back: "Conversion of atmospheric NG�� to ammonia (NHG��) by bacteria like Rhizobium (in legume roots) and Azotobacter (free-living).",
        },
        {
          id: "f27",
          front: "Why is pyramid of energy always upright?",
          back: "Because energy decreases at each successive trophic level due to 10% law. Cannot be inverted like biomass or numbers.",
        },
        {
          id: "f28",
          front: "What is eutrophication?",
          back: "Excessive nutrient enrichment of water bodies causing algal bloom G�� OG�� depletion G�� death of aquatic life. Caused by fertilizer runoff.",
        },
        {
          id: "f29",
          front: "What causes ozone depletion?",
          back: "CFCs (chlorofluorocarbons) release chlorine in stratosphere. One Cl atom can destroy 100,000 ozone molecules.",
        },
        {
          id: "f30",
          front: "Difference between in-situ and ex-situ conservation?",
          back: "In-situ: Conservation in natural habitat (parks, sanctuaries). Ex-situ: Conservation outside natural habitat (zoos, seed banks).",
        },
      ],
      mcqs: [
        {
          id: "mcq17",
          question: "Primary consumers are:",
          options: ["Herbivores", "Carnivores", "Decomposers", "Producers"],
          correctIndex: 0,
          explanation: "",
        },
        {
          id: "mcq18",
          question: "Which pyramid is always upright?",
          options: [
            "Pyramid of numbers",
            "Pyramid of biomass",
            "Pyramid of energy",
            "All of these",
          ],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq19",
          question: "Nitrogen fixing bacteria in legumes:",
          options: ["Nitrobacter", "Azotobacter", "Rhizobium", "Pseudomonas"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq20",
          question: "Which gas is major greenhouse gas?",
          options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
          correctIndex: 2,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r21",
          color: "#4ECDC4",
          title: "Trophic Levels",
          content:
            "Producer (1) G�� Herbivore (2) G�� Carnivore (3) G�� Top Predator (4) | Each level = 10% energy =��+=���=��+=���",
        },
        {
          id: "r22",
          color: "#45B7D1",
          title: "10% Rule Example",
          content:
            "10,000 J G�� 1,000 J G�� 100 J G�� 10 J | That's why food chains are short! G��",
        },
        {
          id: "r23",
          color: "#96CEB4",
          title: "Nitrogen Cycle Steps",
          content:
            "Fix (NG��G��NHG��) G�� Nitrify (NHG��G��NOG��G�+) G�� Assimilate G�� Ammonify G�� Denitrify (back to NG��) =���",
        },
        {
          id: "r24",
          color: "#FFEAA7",
          title: "Greenhouse Gases",
          content:
            "COG�� + CHG�� + NG��O + CFCs = Global Warming | Earth's temperature rising! =���n+�=���",
        },
        {
          id: "r25",
          color: "#DDA0DD",
          title: "Conservation Types",
          content:
            "In-situ: Parks, Sanctuaries (natural) | Ex-situ: Zoos, Seed banks (artificial) =���=��",
        },
      ],
    },
    {
      id: "bio-ch6",
      title: "Chapter 6: Respiration and Circulation",
      description: "Respiratory system and circulatory system in humans",
      summary: `
# Respiration and Circulation

## Key Concepts

### Respiration
- **Definition**: Exchange of gases and oxidation of food to release energy.
- **Types**: Aerobic (with O2) and Anaerobic (without O2).
- **Human Respiratory System**: Nose -> Pharynx -> Larynx -> Trachea -> Bronchi -> Lungs -> Alveoli.
- **Mechanism**: Inspiration (Breathing in) and Expiration (Breathing out).
- **Exchange of Gases**: Occurs at alveoli (O2 in, CO2 out) via diffusion.
- **Transport**: O2 by Hemoglobin (Oxyhemoglobin), CO2 by Plasma/Bicarbonates.

### Circulation
- **Blood**: Plasma + Blood Cells (RBC, WBC, Platelets).
- **Heart**: Pumping organ, 4 chambers (2 Atria, 2 Ventricles).
- **Double Circulation**: Pulmonary (Heart-Lungs) + Systemic (Heart-Body).
- **Cardiac Cycle**: Systole (Contraction) + Diastole (Relaxation).
- **Blood Vessels**: Arteries (Away from heart), Veins (Towards heart), Capillaries.
- **ECG**: Electrocardiogram (P wave, QRS complex, T wave).
- **Disorders**: Hypertension, Angina, Heart Attack.
            `,
      detailedNotes: `
# Detailed Notes: Respiration and Circulation

## Human Respiratory System

### Organs
1. **Nose**: Filters, warms, and moistens air.
2. **Pharynx**: Common passage for food and air.
3. **Larynx**: Voice box (Adam's apple).
4. **Trachea**: Windpipe with C-shaped cartilage rings.
5. **Bronchi**: Branches entering lungs.
6. **Lungs**: Spongy organs in thoracic cavity.
7. **Alveoli**: Tiny air sacs, site of gas exchange (high surface area).

### Mechanism of Respiration
1. **Breathing (Ventilation)**:
   - **Inspiration**: Diaphragm contracts (flattens), ribs move up/out -> Thoracic volume increases -> Pressure decreases -> Air rushes in.
   - **Expiration**: Diaphragm relaxes (dome shape), ribs move down/in -> Thoracic volume decreases -> Pressure increases -> Air rushes out.

2. **External Respiration**: Exchange of O2 and CO2 between alveoli and blood capillaries.
3. **Internal Respiration**: Exchange between blood and tissue cells.
4. **Cellular Respiration**: Oxidation of glucose in mitochondria to produce ATP.

### Transport of Gases
- **Oxygen**: 97% bound to Hemoglobin (Hb + 4O2 -> Hb(O2)4), 3% dissolved in plasma.
- **Carbon Dioxide**:
  - 7% dissolved in plasma
  - 23% as Carbamino-hemoglobin
  - 70% as Bicarbonate ions (HCO3-)

## Human Circulatory System

### Blood Composition
- **Plasma (55%)**: Water, proteins (albumin, globulin, fibrinogen), salts.
- **Formed Elements (45%)**:
  - **RBC (Erythrocytes)**: Carry O2, no nucleus, biconcave.
  - **WBC (Leukocytes)**: Immunity (Granulocytes & Agranulocytes).
  - **Platelets (Thrombocytes)**: Blood clotting.

### Structure of Heart
- Located in mediastinum.
- Covered by pericardium (protective sac).
- **Chambers**:
  - **Right Atrium**: Receives deoxygenated blood (SVC, IVC).
  - **Left Atrium**: Receives oxygenated blood (Pulmonary veins).
  - **Right Ventricle**: Pumps deoxygenated blood to lungs (Pulmonary artery).
  - **Left Ventricle**: Pumps oxygenated blood to body (Aorta) - Thickest wall.
- **Valves**: Tricuspid (Right), Bicuspid/Mitral (Left), Semilunar (Arteries).

### Double Circulation
1. **Pulmonary Circulation**: RV -> Pulmonary Artery -> Lungs -> Pulmonary Veins -> LA.
2. **Systemic Circulation**: LV -> Aorta -> Body Tissues -> Vena Cava -> RA.

### Cardiac Cycle
- **Atrial Systole (0.1s)**: Atria contract, blood to ventricles.
- **Ventricular Systole (0.3s)**: Ventricles contract, blood to arteries (Lub sound).
- **Joint Diastole (0.4s)**: All chambers relax, filling (Dub sound).
- Total duration: 0.8 seconds.

### Blood Pressure
- **Systolic**: 120 mmHg (pumping pressure).
- **Diastolic**: 80 mmHg (resting pressure).
- Measured by Sphygmomanometer.
- **Hypertension**: High BP (>140/90).
            `,
      flashcards: [
        {
          id: "f31",
          front: "What is the function of Alveoli?",
          back: "Tiny air sacs in lungs that provide a large surface area for the exchange of gases (O2 and CO2) between air and blood.",
        },
        {
          id: "f32",
          front: "Difference between Arteries and Veins?",
          back: "Arteries carry blood AWAY from heart (usually oxygenated, thick walls). Veins carry blood TOWARDS heart (usually deoxygenated, thin walls, valves).",
        },
        {
          id: "f33",
          front: "What is Double Circulation?",
          back: "Blood passes through the heart twice in one complete cycle: Pulmonary circulation (Heart-Lungs) and Systemic circulation (Heart-Body).",
        },
        {
          id: "f34",
          front: 'What causes the "Lub-Dub" sounds?',
          back: "Lub: Closure of Tricuspid and Bicuspid valves (Ventricular systole). Dub: Closure of Semilunar valves (Ventricular diastole).",
        },
        {
          id: "f35",
          front: "Role of Hemoglobin?",
          back: "Respiratory pigment in RBCs that binds with Oxygen to form Oxyhemoglobin and transports it to tissues.",
        },
        {
          id: "f36",
          front: "What is Pacemaker of the heart?",
          back: "SA Node (Sino-Atrial Node) - generates electrical impulses to initiate heart beat.",
        },
      ],
      mcqs: [
        {
          id: "mcq21",
          question: "Exchange of gases in lungs occurs in:",
          options: ["Trachea", "Bronchi", "Alveoli", "Pleura"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq22",
          question: "Pacemaker of the heart is:",
          options: ["AV Node", "SA Node", "Bundle of His", "Purkinje fibers"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq23",
          question: "Blood group universal donor is:",
          options: ["A", "B", "AB", "O"],
          correctIndex: 3,
          explanation: "",
        },
        {
          id: "mcq24",
          question:
            "Volume of air breathed in and out during normal respiration is:",
          options: [
            "Tidal volume",
            "Vital capacity",
            "Residual volume",
            "Total lung capacity",
          ],
          correctIndex: 0,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r26",
          color: "#FF7675",
          title: "Heart Chambers",
          content:
            "RA (Deoxy in) | RV (Deoxy to Lungs) | LA (Oxy in) | LV (Oxy to Body) | LV is Boss (Thickest) =S",
        },
        {
          id: "r27",
          color: "#74B9FF",
          title: "Breathing Mech",
          content:
            "Inhale: Diaphragm Down, Ribs Up (Vol ^, Press v) | Exhale: Diaphragm Up, Ribs Down (Vol v, Press ^) =",
        },
        {
          id: "r28",
          color: "#A29BFE",
          title: "Blood Composition",
          content:
            "Plasma (55%) = Water + Proteins | Cells (45%) = RBC (O2), WBC (Defense), Platelets (Clot) =",
        },
        {
          id: "r29",
          color: "#FAB1A0",
          title: "ECG Waves",
          content:
            "P wave: Atrial contraction | QRS: Ventricular contraction | T wave: Ventricular relaxation =",
        },
        {
          id: "r30",
          color: "#FD79A8",
          title: "Double Circulation",
          content:
            "Pulmonary: Heart <-> Lungs | Systemic: Heart <-> Body | Efficient O2 supply =🠽",
        },
      ],
    },
    {
      id: "bio-ch7",
      title: "Chapter 7: Control and Coordination",
      description: "Nervous system and hormonal control",
      summary: `
# Control and Coordination

## Key Concepts

### Nervous Coordination
- **Neuron**: Structural unit (Cyton, Dendrites, Axon).
- **Synapse**: Gap between neurons (Chemical/Electrical).
- **Reflex Action**: Sudden, involuntary response (Reflex Arc).

### Human Nervous System
1. **CNS (Central)**: Brain + Spinal Cord.
2. **PNS (Peripheral)**: Cranial + Spinal Nerves.
3. **ANS (Autonomic)**: Sympathetic (Fight/Flight) + Parasympathetic (Rest/Digest).

### Human Brain
- **Forebrain**: Cerebrum (Thinking, Memory), Thalamus, Hypothalamus (Temp, Hunger).
- **Midbrain**: Relay center, vision/hearing reflex.
- **Hindbrain**: Cerebellum (Balance), Pons, Medulla Oblongata (Involuntary actions).

### Chemical Coordination (Endocrine System)
- **Hormones**: Chemical messengers, ductless glands.
- **Pituitary**: Master gland (GH, TSH, FSH, LH).
- **Thyroid**: Thyroxine (Metabolism).
- **Adrenal**: Adrenaline (Emergency).
- **Pancreas**: Insulin (Sugar levels).
- **Gonads**: Testes (Testosterone), Ovaries (Estrogen).
            `,
      detailedNotes: `
# Detailed Notes: Control and Coordination

## Nervous System

### Structure of Neuron
- **Cyton (Cell Body)**: Contains nucleus, Nissl's granules.
- **Dendrites**: Receive impulses, conduct towards cyton.
- **Axon**: Long fiber, conducts away from cyton. Myelinated (faster) or Non-myelinated.
- **Synapse**: Junction between axon terminal and dendrite of next neuron. Neurotransmitters (Acetylcholine) transfer signal.

### Human Brain
Protected by skull (cranium) and meninges (Dura, Arachnoid, Pia mater).

1. **Forebrain (Prosencephalon)**
   - **Cerebrum**: Largest part (85%). Two hemispheres connected by Corpus Callosum. Seat of intelligence, memory, voluntary actions.
   - **Diencephalon**: Thalamus (Relay) + Hypothalamus (Thermostat, Hunger, Thirst, Pituitary control).

2. **Midbrain (Mesencephalon)**
   - Connects forebrain and hindbrain.
   - Corpora Quadrigemina: Visual and auditory reflexes.

3. **Hindbrain (Rhombencephalon)**
   - **Cerebellum**: "Little Brain". Balance, posture, coordination.
   - **Pons**: Respiration control (Pneumotaxic center).
   - **Medulla Oblongata**: Vital center. Heartbeat, breathing, digestion. Connects to spinal cord.

### Spinal Cord
- Cylindrical bundle of nerves in vertebral column.
- Conducts impulses to/from brain.
- Center for **Reflex Actions** (quick responses without brain thought).

## Chemical Coordination (Hormones)

### Hypothalamus & Pituitary
- Hypothalamus releases Releasing Hormones (RH) to control Pituitary.
- **Pituitary (Hypophysis)**: Sella turcica of sphenoid bone.
  - **Adenohypophysis (Anterior)**: GH (Growth), TSH (Thyroid), ACTH (Adrenal), FSH/LH (Gonads), Prolactin.
  - **Neurohypophysis (Posterior)**: Stores ADH (Water balance), Oxytocin (Birth, Milk).

### Thyroid Gland
- Located in neck.
- Secretes **Thyroxine (T4)** and **Triiodothyronine (T3)**.
- Function: Basal Metabolic Rate (BMR), physical/mental growth.
- Disorders: Goiter (Iodine deficiency), Cretinism (Hypo in kids).

### Adrenal Gland
- Located above kidneys.
- **Cortex**: Cortisol (Stress), Aldosterone (Salt).
- **Medulla**: **Adrenaline (Epinephrine)** and Noradrenaline.
  - "Fight or Flight" hormone: Increases heart rate, blood sugar, alertness during emergency.

### Pancreas
- Mixed gland (Exocrine + Endocrine).
- Islets of Langerhans:
  - **Alpha cells**: Glucagon (Increases blood sugar).
  - **Beta cells**: Insulin (Decreases blood sugar).
  - Disorder: **Diabetes Mellitus** (Lack of insulin).

### Gonads
- **Testes**: Testosterone (Male secondary characters, spermatogenesis).
- **Ovaries**: Estrogen (Female characters, cycle), Progesterone (Pregnancy).
            `,
      flashcards: [
        {
          id: "f37",
          front: "Structural and functional unit of nervous system?",
          back: "Neuron (Nerve cell).",
        },
        {
          id: "f38",
          front: "Function of Cerebellum?",
          back: "Maintains body balance, posture, and coordinates voluntary muscle movements.",
        },
        {
          id: "f39",
          front: 'Which is the "Master Gland"?',
          back: "Pituitary Gland (Hypophysis) - because it controls secretions of other endocrine glands.",
        },
        {
          id: "f40",
          front: "Function of Insulin?",
          back: "Lowers blood glucose levels by converting glucose to glycogen. Secreted by Beta cells of Pancreas.",
        },
        {
          id: "f41",
          front: "What is a Reflex Action?",
          back: "Sudden, involuntary, and automatic response to a stimulus, controlled by the spinal cord (e.g., pulling hand from hot object).",
        },
        {
          id: "f42",
          front: 'Which hormone is "Fight or Flight"?',
          back: "Adrenaline (Epinephrine) secreted by Adrenal Medulla. Prepares body for emergency.",
        },
      ],
      mcqs: [
        {
          id: "mcq25",
          question: "Which part of brain controls body temperature?",
          options: ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq26",
          question: "Gap between two neurons is called:",
          options: ["Dendrite", "Synapse", "Axon", "Impulse"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq27",
          question: "Insulin is secreted by:",
          options: ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq28",
          question: "Which hormone regulates water balance?",
          options: ["ADH", "Oxytocin", "TSH", "GH"],
          correctIndex: 0,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r31",
          color: "#6C5CE7",
          title: "Brain Parts",
          content:
            "Forebrain: Thinking (Cerebrum) | Midbrain: Reflexes | Hindbrain: Balance (Cerebellum) + Life (Medulla) =",
        },
        {
          id: "r32",
          color: "#00CEC9",
          title: "Reflex Arc",
          content:
            "Stimulus G Receptor G Sensory Neuron G Spinal Cord G Motor Neuron G Muscle G Action! (No Brain needed) =⚡",
        },
        {
          id: "r33",
          color: "#FAB1A0",
          title: "Endocrine Glands",
          content:
            "Ductless G Pour hormones in blood G Target organ G Chemical control =+",
        },
        {
          id: "r34",
          color: "#FF7675",
          title: "Adrenaline Rush",
          content:
            "Emergency! Heart rate ^, Breathing ^, Sugar ^, Digestion v. Ready to Fight or Run! =",
        },
        {
          id: "r35",
          color: "#A29BFE",
          title: "Diabetes",
          content:
            "Pancreas fails G No Insulin G High Blood Sugar G Sugar in Urine. Needs insulin shots. =",
        },
      ],
    },
  ],
};
