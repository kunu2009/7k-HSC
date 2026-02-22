import { Subject } from "../types";
import { getReelColor } from "./helpers";

export const PSY_SUBJECT: Subject = {
  id: "psy",
  name: "Psychology",
  icon: "Brain",
  color: "bg-pink-500",
  syllabus:
    "1. Introduction to Psychology\n2. Biological Basis of Behaviour\n3. Learning\n4. Human Memory\n5. Thinking\n6. Intelligence\n7. Personality\n8. Motivation and Emotion\n9. Developmental Psychology",
  paperPattern:
    "### Psychology Paper Pattern (80 Marks)\n\n* **Q.1 MCQs (16 Marks)**\n* **Q.2 Answer in 1-2 sentences (16 Marks)**\n* **Q.3 Short Notes (16 Marks): 4 out of 6**\n* **Q.4 Long Answers (16 Marks): 2 out of 3**\n* **Q.5 Case Study Analysis (16 Marks)**",
  previousPapers: [
    { year: "2024", title: "2024 Psychology Paper", link: "#" },
    { year: "2023", title: "2023 Psychology Paper", link: "#" },
  ],
  chapters: [
    {
      id: "psy-ch1",
      title: "Chapter 1: Introduction to Psychology",
      description: "Nature, scope, and methods of psychology",
      summary: `
# Introduction to Psychology

## Key Concepts

### What is Psychology?
- Scientific study of behavior and mental processes
- Word origin: Psyche (soul) + Logos (study)
- Modern definition: Scientific study of mind and behavior

### Goals of Psychology
1. **Describe**: What is happening?
2. **Explain**: Why is it happening?
3. **Predict**: What will happen next?
4. **Control**: How can behavior be changed?

### Schools of Psychology
| School | Focus | Founder |
|--------|-------|---------|
| Structuralism | Basic elements of consciousness | Wundt |
| Functionalism | Purpose of mental processes | William James |
| Behaviorism | Observable behavior only | Watson, Skinner |
| Psychoanalysis | Unconscious mind | Freud |
| Humanistic | Self-actualization | Maslow, Rogers |
| Cognitive | Mental processes, thinking | Piaget |

### Branches of Psychology
- **Clinical**: Mental disorders treatment
- **Counseling**: Life problems, adjustment
- **Educational**: Learning, teaching
- **Industrial/Organizational**: Workplace
- **Social**: Group behavior, attitudes
- **Developmental**: Lifespan changes
            `,
      detailedNotes: `
# Detailed Notes: Introduction to Psychology

## Definition and Nature

### Etymology
- Psyche = Soul/Mind (Greek)
- Logos = Study/Science
- Earlier: Study of soul G�� Study of mind G�� Study of behavior

### Modern Definition
"Psychology is the scientific study of behavior and mental processes"
- **Scientific**: Uses systematic methods
- **Behavior**: Observable actions
- **Mental processes**: Thoughts, feelings, emotions

### Characteristics
- Empirical: Based on observation
- Systematic: Follows scientific method
- Objective: Minimizes bias

## Historical Development

### Pre-Scientific Era
- Philosophy and religion
- Soul, mind-body problem
- Introspection method

### Scientific Era (1879)
- Wilhelm Wundt: First psychology lab (Leipzig, Germany)
- Father of Experimental Psychology

## Schools of Psychology

### Structuralism (Wundt, Titchener)
- Goal: Analyze structure of consciousness
- Method: Introspection
- Break experience into basic elements (sensations, images, feelings)

### Functionalism (William James)
- Goal: Understand function of consciousness
- Influenced by Darwin's evolution
- How behavior helps adaptation

### Behaviorism (Watson, Skinner)
- Focus only on observable behavior
- Reject study of mind/consciousness
- Stimulus G�� Response
- Environment shapes behavior

### Psychoanalysis (Freud)
- Unconscious mind influences behavior
- Childhood experiences important
- Id, Ego, Superego
- Dream analysis, free association

### Humanistic (Maslow, Rogers)
- Focus on positive growth
- Self-actualization
- Free will and choice
- Client-centered therapy

### Cognitive (Piaget, Chomsky)
- Mental processes: thinking, memory, problem-solving
- Information processing model
- Computer metaphor for mind

## Research Methods

### Experimental Method
- Independent and dependent variables
- Control group vs experimental group
- Cause-effect relationship

### Observation
- Naturalistic: In natural setting
- Participant: Researcher joins group
- Non-participant: Observer only

### Survey/Questionnaire
- Large sample data
- Attitudes, opinions, behaviors
- Self-report method

### Case Study
- In-depth study of individual
- Qualitative data
- Limited generalization

### Correlation
- Relationship between variables
- Positive, negative, zero correlation
- Does not prove causation

## Branches of Psychology

| Branch | Focus Area |
|--------|------------|
| Clinical | Diagnosis and treatment of mental disorders |
| Counseling | Personal, social, vocational problems |
| Educational | Learning, teaching, classroom |
| Developmental | Changes across lifespan |
| Social | Group behavior, attitudes, influence |
| Industrial/Organizational | Workplace, productivity, selection |
| Cognitive | Thinking, memory, language |
| Sports | Performance, motivation in sports |
| Forensic | Law and criminal behavior |
| Health | Health behaviors, stress, coping |
            `,
      flashcards: [
        {
          id: "f1",
          front: "What is psychology?",
          back: "Scientific study of behavior and mental processes. From Greek: Psyche (soul/mind) + Logos (study).",
        },
        {
          id: "f2",
          front: "Who is the father of psychology?",
          back: "Wilhelm Wundt - established first psychology laboratory in Leipzig, Germany in 1879.",
        },
        {
          id: "f3",
          front: "What are the 4 goals of psychology?",
          back: "Describe (what), Explain (why), Predict (future), Control (change behavior).",
        },
        {
          id: "f4",
          front: "What is behaviorism?",
          back: "School of psychology focusing only on observable behavior, ignoring mental processes. Founded by Watson. S-R (Stimulus-Response) approach.",
        },
        {
          id: "f5",
          front: "Who founded psychoanalysis?",
          back: "Sigmund Freud - emphasized unconscious mind, childhood experiences, Id-Ego-Superego structure.",
        },
      ],
      mcqs: [
        {
          id: "mcq1",
          question: "First psychology lab was established by:",
          options: ["Freud", "Watson", "Wundt", "Skinner"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq2",
          question: "Behaviorism focuses on:",
          options: [
            "Unconscious mind",
            "Observable behavior",
            "Dreams",
            "Self-actualization",
          ],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq3",
          question: "Hierarchy of needs was given by:",
          options: ["Freud", "Maslow", "Watson", "Wundt"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq4",
          question: "Psychology is derived from Greek words meaning:",
          options: [
            "Mind and body",
            "Soul and study",
            "Brain and science",
            "Thought and logic",
          ],
          correctIndex: 1,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r1",
          color: "#4ECDC4",
          title: "Psychology Definition",
          content: "Scientific study of BEHAVIOR + MENTAL PROCESSES =���",
        },
        {
          id: "r2",
          color: "#45B7D1",
          title: "4 Goals of Psychology",
          content: "Describe G�� Explain G�� Predict G�� Control =�Ļ",
        },
        {
          id: "r3",
          color: "#96CEB4",
          title: "Schools Timeline",
          content:
            "Structuralism G�� Functionalism G�� Behaviorism G�� Psychoanalysis G�� Humanistic G�� Cognitive =���",
        },
        {
          id: "r4",
          color: "#FFEAA7",
          title: "Father of Psychology",
          content: "Wilhelm Wundt | 1879 | Leipzig, Germany | First Lab =���",
        },
      ],
    },
    {
      id: "psy-ch2",
      title: "Chapter 2: Biological Basis of Behavior",
      description: "Brain, nervous system, and behavior",
      summary: `
# Biological Basis of Behavior

## Key Concepts

### Neuron (Nerve Cell)
- Basic unit of nervous system
- Parts: Dendrites, Cell body, Axon, Synapse
- Types: Sensory, Motor, Interneurons

### Nervous System Structure
1. **Central Nervous System (CNS)**
   - Brain
   - Spinal Cord

2. **Peripheral Nervous System (PNS)**
   - Somatic (voluntary)
   - Autonomic (involuntary)
     - Sympathetic (arousal)
     - Parasympathetic (calm)

### Brain Structure
- **Forebrain**: Cerebrum, Thalamus, Hypothalamus
- **Midbrain**: Relay station
- **Hindbrain**: Cerebellum, Pons, Medulla

### Cerebral Lobes
| Lobe | Function |
|------|----------|
| Frontal | Thinking, planning, personality |
| Parietal | Touch, spatial awareness |
| Temporal | Hearing, memory |
| Occipital | Vision |

### Endocrine System
- Glands secreting hormones
- Pituitary: Master gland
- Thyroid, Adrenal, Pancreas, Gonads
            `,
      detailedNotes: `
# Detailed Notes: Biological Basis of Behavior

## The Neuron

### Structure
1. **Dendrites**: Receive messages from other neurons
2. **Cell Body (Soma)**: Contains nucleus, maintains cell
3. **Axon**: Carries impulse away from cell body
4. **Myelin Sheath**: Insulates axon, speeds transmission
5. **Terminal Buttons**: Release neurotransmitters
6. **Synapse**: Gap between neurons

### Neural Transmission
- Electrical within neuron
- Chemical across synapse
- Neurotransmitters: Dopamine, Serotonin, Acetylcholine

### Types of Neurons
| Type | Function | Direction |
|------|----------|-----------|
| Sensory (Afferent) | Carry info to brain | Receptor G�� CNS |
| Motor (Efferent) | Carry commands | CNS G�� Muscles |
| Interneurons | Connect neurons | Within CNS |

## Nervous System

### Central Nervous System (CNS)
**Brain:**
- Control center
- Protected by skull, meninges, CSF

**Spinal Cord:**
- Connects brain to PNS
- Reflex actions
- Protected by vertebrae

### Peripheral Nervous System (PNS)

**Somatic Nervous System:**
- Voluntary control
- Skeletal muscles
- Conscious movements

**Autonomic Nervous System:**
- Involuntary control
- Internal organs

| Sympathetic | Parasympathetic |
|-------------|-----------------|
| Fight or flight | Rest and digest |
| Increases heart rate | Decreases heart rate |
| Dilates pupils | Constricts pupils |
| Inhibits digestion | Stimulates digestion |
| Emergency response | Normal maintenance |

## Brain Structure

### Hindbrain
- **Medulla Oblongata**: Vital functions (breathing, heart)
- **Pons**: Bridge, sleep, arousal
- **Cerebellum**: Balance, coordination, motor learning

### Midbrain
- Relay station for sensory info
- Eye movement, auditory reflexes
- Contains reticular formation (alertness)

### Forebrain
- **Thalamus**: Sensory relay station
- **Hypothalamus**: Hunger, thirst, temperature, emotions
- **Limbic System**: Emotions, memory (Amygdala, Hippocampus)
- **Cerebrum**: Largest part, higher functions

### Cerebral Cortex (Lobes)

| Lobe | Location | Functions |
|------|----------|-----------|
| Frontal | Front | Planning, decision, personality, motor |
| Parietal | Top-back | Touch, pressure, spatial |
| Temporal | Sides | Hearing, language, memory |
| Occipital | Back | Vision |

### Hemispheres
- Left: Language, logic, analytical (controls right body)
- Right: Spatial, creativity, holistic (controls left body)
- Connected by Corpus Callosum

## Endocrine System

### Major Glands
| Gland | Hormones | Functions |
|-------|----------|-----------|
| Pituitary | Growth hormone, etc. | Master gland, controls others |
| Thyroid | Thyroxine | Metabolism |
| Adrenal | Adrenaline, Cortisol | Stress response |
| Pancreas | Insulin, Glucagon | Blood sugar |
| Gonads | Testosterone, Estrogen | Sexual development |
            `,
      flashcards: [
        {
          id: "f6",
          front: "What are the parts of a neuron?",
          back: "Dendrites (receive), Cell body (nucleus), Axon (transmit), Synapse (gap). Myelin sheath speeds transmission.",
        },
        {
          id: "f7",
          front: "What is the function of sympathetic nervous system?",
          back: "Fight or flight response - increases heart rate, dilates pupils, releases adrenaline. Prepares body for emergency.",
        },
        {
          id: "f8",
          front: "Name the 4 lobes of cerebrum.",
          back: "Frontal (thinking), Parietal (touch), Temporal (hearing), Occipital (vision). Mnemonic: FPTO.",
        },
        {
          id: "f9",
          front: "Which gland is called master gland?",
          back: "Pituitary gland - controls other endocrine glands. Located at base of brain, controlled by hypothalamus.",
        },
        {
          id: "f10",
          front: "What is the function of cerebellum?",
          back: "Balance, coordination, and motor learning. Located in hindbrain. Damage causes ataxia (uncoordinated movement).",
        },
      ],
      mcqs: [
        {
          id: "mcq5",
          question: "Which carries impulse away from cell body?",
          options: ["Dendrite", "Axon", "Synapse", "Soma"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq6",
          question: "Fight or flight response is controlled by:",
          options: ["Parasympathetic", "Sympathetic", "Somatic", "Central"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq7",
          question: "Vision is processed in which lobe?",
          options: ["Frontal", "Parietal", "Temporal", "Occipital"],
          correctIndex: 3,
          explanation: "",
        },
        {
          id: "mcq8",
          question: "Master gland is:",
          options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
          correctIndex: 1,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r5",
          color: "#DDA0DD",
          title: "Neuron Parts",
          content:
            "Dendrites (receive) G�� Cell body G�� Axon (send) G�� Synapse (gap) =���",
        },
        {
          id: "r6",
          color: "#98D8C8",
          title: "Sympathetic vs Para",
          content:
            "Sympathetic: Fight/Flight =�Ƭ | Parasympathetic: Rest/Digest =���",
        },
        {
          id: "r7",
          color: "#F7DC6F",
          title: "Brain Lobes",
          content:
            "Frontal: Think =��� | Parietal: Touch G�� | Temporal: Hear =��� | Occipital: See =���n+�",
        },
        {
          id: "r8",
          color: "#BB8FCE",
          title: "Left vs Right Brain",
          content:
            "Left: Logic, Language, Math =��� | Right: Creativity, Spatial, Art =�Ŀ",
        },
      ],
    },
    {
      id: "psy-ch3",
      title: "Chapter 3: Learning",
      description: "Types and theories of learning",
      summary: `
# Learning

## Key Concepts

### What is Learning?
- Relatively permanent change in behavior
- Due to experience or practice
- Not due to maturation, fatigue, or drugs

### Types of Learning

1. **Classical Conditioning (Pavlov)**
   - Learning by association
   - Neutral stimulus + Unconditioned stimulus
   - Dog salivation experiment
   - Terms: UCS, UCR, CS, CR

2. **Operant Conditioning (Skinner)**
   - Learning by consequences
   - Reinforcement increases behavior
   - Punishment decreases behavior
   - Skinner Box experiment

3. **Observational Learning (Bandura)**
   - Learning by watching others
   - Modeling, imitation
   - Bobo doll experiment
   - Attention G�� Retention G�� Reproduction G�� Motivation

### Key Terms
- **Reinforcement**: Strengthens behavior (positive/negative)
- **Punishment**: Weakens behavior
- **Extinction**: Response disappears when not reinforced
- **Generalization**: Similar stimuli evoke response
- **Discrimination**: Respond to specific stimulus only
            `,
      detailedNotes: `
# Detailed Notes: Learning

## Definition
Learning is a relatively permanent change in behavior or knowledge that results from experience or practice.

### Characteristics
- Relatively permanent (not temporary)
- Change in behavior or potential
- Results from experience/practice
- Not due to maturation, drugs, fatigue

## Classical Conditioning

### Pavlov's Experiment
1. Before conditioning:
   - Food (UCS) G�� Salivation (UCR)
   - Bell (Neutral) G�� No salivation

2. During conditioning:
   - Bell + Food G�� Salivation
   - Repeated pairings

3. After conditioning:
   - Bell (CS) G�� Salivation (CR)

### Key Terms
| Term | Meaning | Example |
|------|---------|---------|
| UCS (Unconditioned Stimulus) | Natural trigger | Food |
| UCR (Unconditioned Response) | Natural response | Salivation to food |
| CS (Conditioned Stimulus) | Learned trigger | Bell |
| CR (Conditioned Response) | Learned response | Salivation to bell |

### Principles
- **Acquisition**: Learning the association
- **Extinction**: CR disappears without UCS
- **Spontaneous Recovery**: CR returns after rest
- **Generalization**: Similar stimuli cause CR
- **Discrimination**: Only specific CS causes CR

### Applications
- Phobias (Little Albert experiment)
- Advertising (product + pleasant images)
- Therapy (systematic desensitization)

## Operant Conditioning

### Skinner's Approach
- Behavior shaped by consequences
- Skinner Box: Animal presses lever for food

### Types of Consequences

**Reinforcement** (Increases behavior):
| Type | Action | Example |
|------|--------|---------|
| Positive | Add pleasant | Praise for good work |
| Negative | Remove unpleasant | Turn off alarm by waking |

**Punishment** (Decreases behavior):
| Type | Action | Example |
|------|--------|---------|
| Positive | Add unpleasant | Scolding for misbehavior |
| Negative | Remove pleasant | Take away phone |

### Schedules of Reinforcement
| Schedule | Description | Example |
|----------|-------------|---------|
| Continuous | Every response rewarded | Vending machine |
| Fixed Ratio | After set number | Piece-rate work |
| Variable Ratio | After variable number | Slot machines |
| Fixed Interval | After set time | Monthly salary |
| Variable Interval | After variable time | Surprise tests |

### Shaping
- Reinforcing successive approximations
- Step-by-step toward target behavior
- Used in animal training

## Observational Learning

### Bandura's Theory
Learning by observing and imitating others (models)

### Bobo Doll Experiment
- Children watched adult hit Bobo doll
- Children imitated aggressive behavior
- Proved learning without direct reinforcement

### Four Processes
1. **Attention**: Notice model's behavior
2. **Retention**: Remember what observed
3. **Reproduction**: Able to perform behavior
4. **Motivation**: Reason to imitate

### Factors Affecting
- Model characteristics (status, similarity)
- Observer characteristics (self-efficacy)
- Consequences to model (vicarious reinforcement)

## Cognitive Learning

### Insight Learning (K+�hler)
- Sudden understanding
- Ape problem-solving with sticks
- "Aha!" experience

### Latent Learning (Tolman)
- Learning without immediate reward
- Cognitive maps
- Shown when motivation present
            `,
      flashcards: [
        {
          id: "f11",
          front: "What is classical conditioning?",
          back: "Learning by association. Neutral stimulus paired with unconditioned stimulus becomes conditioned stimulus. Discovered by Pavlov with dog salivation.",
        },
        {
          id: "f12",
          front: "Difference between positive and negative reinforcement?",
          back: "Both INCREASE behavior. Positive: Add pleasant stimulus (praise). Negative: Remove unpleasant stimulus (turn off alarm).",
        },
        {
          id: "f13",
          front: "What is observational learning?",
          back: "Learning by watching others (models). Bandura's theory. Steps: Attention G�� Retention G�� Reproduction G�� Motivation. Bobo doll experiment.",
        },
        {
          id: "f14",
          front: "What is extinction in conditioning?",
          back: "Gradual weakening and disappearance of conditioned response when conditioned stimulus is presented without unconditioned stimulus.",
        },
        {
          id: "f15",
          front: "What is shaping in operant conditioning?",
          back: "Reinforcing successive approximations toward target behavior. Used to teach complex behaviors step by step.",
        },
      ],
      mcqs: [
        {
          id: "mcq9",
          question: "Pavlov is associated with:",
          options: [
            "Operant conditioning",
            "Classical conditioning",
            "Observational learning",
            "Insight learning",
          ],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq10",
          question: "Skinner Box is used for:",
          options: [
            "Classical conditioning",
            "Operant conditioning",
            "Cognitive learning",
            "Social learning",
          ],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq11",
          question: "Bobo doll experiment was conducted by:",
          options: ["Pavlov", "Skinner", "Bandura", "Kohler"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq12",
          question: "Removing unpleasant stimulus to increase behavior is:",
          options: [
            "Positive reinforcement",
            "Negative reinforcement",
            "Positive punishment",
            "Negative punishment",
          ],
          correctIndex: 1,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r9",
          color: "#85C1E9",
          title: "Classical Conditioning",
          content:
            "Bell + Food G�� Bell alone = Salivation | Learning by ASSOCIATION =���=���",
        },
        {
          id: "r10",
          color: "#FF6B6B",
          title: "Reinforcement vs Punishment",
          content:
            "Reinforcement: G�� behavior | Punishment: G�� behavior =���=���",
        },
        {
          id: "r11",
          color: "#4ECDC4",
          title: "Positive vs Negative",
          content:
            "Positive: ADD something | Negative: REMOVE something GP�GP�",
        },
        {
          id: "r12",
          color: "#45B7D1",
          title: "Observational Learning",
          content:
            "Attention G�� Retention G�� Reproduction G�� Motivation | Watch & Learn! =���",
        },
      ],
    },
    {
      id: "psy-ch4",
      title: "Chapter 4: Memory",
      description: "Memory processes and types",
      summary: `
# Memory

## Key Concepts

### What is Memory?
- Ability to encode, store, and retrieve information
- Essential for learning and identity

### Memory Processes
1. **Encoding**: Converting info to storable form
2. **Storage**: Maintaining info over time
3. **Retrieval**: Accessing stored info

### Types of Memory (Duration)
| Type | Duration | Capacity |
|------|----------|----------|
| Sensory | <1 second | Large |
| Short-term (STM) | 15-30 seconds | 7-�2 items |
| Long-term (LTM) | Unlimited | Unlimited |

### Types of LTM
- **Explicit (Declarative)**
  - Episodic: Personal events
  - Semantic: Facts, concepts
- **Implicit (Non-declarative)**
  - Procedural: Skills (cycling)
  - Priming, conditioning

### Forgetting
- **Decay**: Memory fades over time
- **Interference**: Other memories block
- **Retrieval Failure**: Cue-dependent
- **Motivated Forgetting**: Repression
            `,
      detailedNotes: `
# Detailed Notes: Memory

## Definition
Memory is the mental process of encoding, storing, and retrieving information.

## Memory Processes

### 1. Encoding
Converting sensory input into storable form
- **Visual**: Images
- **Acoustic**: Sounds
- **Semantic**: Meaning (most durable)

### 2. Storage
Maintaining encoded information
- Structural changes in brain
- Neural connections

### 3. Retrieval
Accessing stored information
- Recall: Reproduce from memory
- Recognition: Identify previously learned

## Multi-Store Model (Atkinson & Shiffrin)

### Sensory Memory
- Duration: Fraction of second
- Capacity: Very large
- Types:
  - Iconic: Visual (<0.5 sec)
  - Echoic: Auditory (3-4 sec)

### Short-Term Memory (STM)
- Duration: 15-30 seconds (without rehearsal)
- Capacity: 7-�2 items (Miller's magic number)
- Working memory: Active processing

**Improving STM:**
- Rehearsal (repetition)
- Chunking (grouping items)

### Long-Term Memory (LTM)
- Duration: Potentially permanent
- Capacity: Unlimited
- Requires meaningful encoding

## Types of Long-Term Memory

### Explicit (Declarative) Memory
Conscious, intentional recall

| Type | Content | Example |
|------|---------|---------|
| Episodic | Personal experiences | Birthday party |
| Semantic | Facts, concepts | Capital of India |

### Implicit (Non-declarative) Memory
Unconscious, automatic

| Type | Content | Example |
|------|---------|---------|
| Procedural | Skills, habits | Riding bicycle |
| Priming | Previous exposure effect | Word completion |
| Conditioning | Learned associations | Fear response |

## Forgetting

### Theories of Forgetting

**1. Decay Theory**
- Memory trace fades over time
- Disuse leads to forgetting

**2. Interference Theory**
- Proactive: Old interferes with new
- Retroactive: New interferes with old

**3. Retrieval Failure**
- Information stored but cannot access
- Tip-of-tongue phenomenon
- Need appropriate cues

**4. Motivated Forgetting**
- Repression: Unconscious blocking
- Suppression: Conscious avoiding
- Traumatic memories

### Ebbinghaus Forgetting Curve
- Rapid initial forgetting
- Slows over time
- Most forgotten in first hour

## Improving Memory

### Encoding Strategies
- **Elaboration**: Connect to existing knowledge
- **Visual imagery**: Create mental pictures
- **Organization**: Categorize information
- **Mnemonic devices**: Memory aids

### Common Mnemonics
- Acronyms: VIBGYOR for colors
- Method of loci: Mental walk
- Pegword: Number-word associations
- Chunking: Group into units

### Study Techniques
- Spaced practice (vs massed)
- Testing effect (retrieval practice)
- Sleep consolidation
- Minimize interference
            `,
      flashcards: [
        {
          id: "f16",
          front: "What are the 3 processes of memory?",
          back: "Encoding (convert to storable form), Storage (maintain over time), Retrieval (access stored info).",
        },
        {
          id: "f17",
          front: "What is the capacity of short-term memory?",
          back: "7-�2 items (Miller's magic number). Duration: 15-30 seconds without rehearsal. Can be improved by chunking.",
        },
        {
          id: "f18",
          front: "Difference between episodic and semantic memory?",
          back: "Episodic: Personal experiences, events (your birthday). Semantic: Facts, concepts, general knowledge (India's capital).",
        },
        {
          id: "f19",
          front: "What is proactive interference?",
          back: "Old information interferes with learning new information. Example: Old phone number interferes with remembering new one.",
        },
        {
          id: "f20",
          front: "What is procedural memory?",
          back: "Implicit memory for skills and how to do things. Example: Riding bicycle, typing. Doesn't require conscious recall.",
        },
      ],
      mcqs: [
        {
          id: "mcq13",
          question: "Capacity of STM is:",
          options: ["5-�2", "7-�2", "9-�2", "Unlimited"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq14",
          question: "Memory for personal events is:",
          options: ["Semantic", "Episodic", "Procedural", "Implicit"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq15",
          question: "Old memories interfering with new is:",
          options: ["Retroactive", "Proactive", "Decay", "Repression"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq16",
          question: "Riding a bicycle involves which memory?",
          options: ["Episodic", "Semantic", "Procedural", "Sensory"],
          correctIndex: 2,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r13",
          color: "#96CEB4",
          title: "Memory Processes",
          content: "Encode (input) G�� Store (save) G�� Retrieve (access) =��+",
        },
        {
          id: "r14",
          color: "#FFEAA7",
          title: "Memory Stores",
          content:
            "Sensory (<1s) G�� STM (30s, 7-�2) G�� LTM (forever, unlimited) =���",
        },
        {
          id: "r15",
          color: "#DDA0DD",
          title: "Explicit vs Implicit",
          content:
            "Explicit: Conscious (facts, events) | Implicit: Unconscious (skills) =���",
        },
        {
          id: "r16",
          color: "#98D8C8",
          title: "Interference",
          content:
            "Proactive: Old blocks new | Retroactive: New blocks old =�ܽ",
        },
      ],
    },
    {
      id: "psy-ch5",
      title: "Chapter 5: Intelligence & Aptitude",
      description: "Understanding intelligence and its measurement",
      summary: `
# Intelligence & Aptitude

## Key Concepts

### What is Intelligence?
- Ability to learn, understand, adapt
- Problem-solving capacity
- Multiple definitions by psychologists

### IQ (Intelligence Quotient)
- IQ = (Mental Age / Chronological Age) +� 100
- Average IQ = 100
- Developed by Stern

### Intelligence Tests
- **Binet-Simon**: First IQ test (1905)
- **Stanford-Binet**: American version
- **Wechsler**: WAIS (adults), WISC (children)

### Theories of Intelligence
1. **Spearman**: g-factor (general) + s-factor (specific)
2. **Thurstone**: 7 Primary Mental Abilities
3. **Gardner**: Multiple Intelligences (8 types)
4. **Sternberg**: Triarchic (Analytical, Creative, Practical)
5. **Goleman**: Emotional Intelligence

### Multiple Intelligences (Gardner)
1. Linguistic
2. Logical-Mathematical
3. Spatial
4. Musical
5. Bodily-Kinesthetic
6. Interpersonal
7. Intrapersonal
8. Naturalistic
            `,
      detailedNotes: `
# Detailed Notes: Intelligence & Aptitude

## Definition of Intelligence

### Various Definitions
- **Binet**: Ability to judge, understand, reason
- **Wechsler**: Global capacity to act purposefully, think rationally, deal effectively with environment
- **Gardner**: Ability to solve problems or create products valued in culture

### Characteristics
- Abstract thinking
- Learning from experience
- Adapting to environment
- Problem-solving

## Measurement of Intelligence

### IQ Formula (Ratio IQ)
IQ = (Mental Age / Chronological Age) +� 100

### IQ Classification
| IQ Range | Classification |
|----------|----------------|
| Above 140 | Genius |
| 120-140 | Superior |
| 110-119 | Above average |
| 90-109 | Average |
| 80-89 | Below average |
| 70-79 | Borderline |
| Below 70 | Intellectually disabled |

### Major IQ Tests

**Binet-Simon Scale (1905)**
- First intelligence test
- Developed in France
- Measured mental age

**Stanford-Binet (1916)**
- American revision by Terman
- Introduced IQ concept
- Ages 2-adult

**Wechsler Scales**
- WAIS: Wechsler Adult Intelligence Scale
- WISC: Wechsler Intelligence Scale for Children
- WPPSI: Wechsler Preschool and Primary Scale
- Verbal + Performance IQ

## Theories of Intelligence

### Spearman's Two-Factor Theory
- **g-factor**: General intelligence (common to all tasks)
- **s-factor**: Specific abilities (unique to each task)

### Thurstone's Primary Mental Abilities
1. Verbal comprehension
2. Word fluency
3. Number facility
4. Spatial visualization
5. Associative memory
6. Perceptual speed
7. Reasoning

### Gardner's Multiple Intelligences
| Type | Description | Career Example |
|------|-------------|----------------|
| Linguistic | Words, language | Writer, lawyer |
| Logical-Mathematical | Numbers, reasoning | Scientist, accountant |
| Spatial | Visual thinking | Artist, architect |
| Musical | Rhythm, melody | Musician, composer |
| Bodily-Kinesthetic | Physical skills | Athlete, dancer |
| Interpersonal | Understanding others | Teacher, salesperson |
| Intrapersonal | Self-understanding | Philosopher |
| Naturalistic | Nature patterns | Biologist, farmer |

### Sternberg's Triarchic Theory
1. **Analytical**: Academic problem-solving
2. **Creative**: Novel solutions
3. **Practical**: Street smart, adapting

### Emotional Intelligence (Goleman)
- Self-awareness
- Self-regulation
- Motivation
- Empathy
- Social skills

## Aptitude

### Definition
Potential ability to learn or perform in specific area

### Types of Aptitude
- Verbal
- Numerical
- Spatial
- Mechanical
- Clerical
- Musical
- Artistic

### Aptitude vs Achievement
| Aptitude | Achievement |
|----------|-------------|
| Potential ability | Actual performance |
| What you CAN do | What you HAVE done |
| Predictive | Evaluative |

### Aptitude Tests
- Differential Aptitude Test (DAT)
- General Aptitude Test Battery (GATB)
- Used for career guidance, selection
            `,
      flashcards: [
        {
          id: "f21",
          front: "What is the IQ formula?",
          back: "IQ = (Mental Age / Chronological Age) +� 100. Average IQ is 100. Developed by William Stern.",
        },
        {
          id: "f22",
          front: "What are Gardner's 8 Multiple Intelligences?",
          back: "Linguistic, Logical-Mathematical, Spatial, Musical, Bodily-Kinesthetic, Interpersonal, Intrapersonal, Naturalistic.",
        },
        {
          id: "f23",
          front: "What is Spearman's g-factor?",
          back: "General intelligence factor common to all mental abilities. Spearman believed g-factor underlies performance on all cognitive tasks.",
        },
        {
          id: "f24",
          front: "What is Sternberg's Triarchic Theory?",
          back: "Three types of intelligence: Analytical (academic), Creative (novel ideas), Practical (street smart, adaptation).",
        },
        {
          id: "f25",
          front: "Difference between aptitude and achievement?",
          back: "Aptitude: Potential, what you CAN do, predictive. Achievement: Performance, what you HAVE done, evaluative.",
        },
      ],
      mcqs: [
        {
          id: "mcq17",
          question: "First intelligence test was developed by:",
          options: ["Wechsler", "Terman", "Binet-Simon", "Spearman"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq18",
          question: "Average IQ is:",
          options: ["90", "100", "110", "120"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq19",
          question: "Multiple Intelligences theory was given by:",
          options: ["Spearman", "Sternberg", "Gardner", "Thurstone"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq20",
          question: "Emotional Intelligence concept was popularized by:",
          options: ["Gardner", "Goleman", "Sternberg", "Binet"],
          correctIndex: 1,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r17",
          color: "#F7DC6F",
          title: "IQ Formula",
          content:
            "IQ = (Mental Age ++ Chronological Age) +� 100 | Average = 100 =���",
        },
        {
          id: "r18",
          color: "#BB8FCE",
          title: "Gardner's 8",
          content:
            "Linguistic | Logical | Spatial | Musical | Bodily | Inter | Intra | Naturalistic =���",
        },
        {
          id: "r19",
          color: "#85C1E9",
          title: "Sternberg Triarchic",
          content:
            "Analytical (academic) + Creative (new ideas) + Practical (street smart) = Success! =�Ļ",
        },
        {
          id: "r20",
          color: "#FF6B6B",
          title: "Aptitude vs Achievement",
          content:
            "Aptitude: What you CAN do (potential) | Achievement: What you DID (performance) =ðŸŽ¯",
        },
      ],
    },
    {
      id: "psy-ch6",
      title: "Chapter 6: Personality",
      description: "Theories, factors, and assessment of personality",
      summary: `
# Personality

## Key Concepts

### What is Personality?
- **Definition**: Unique and relatively stable pattern of thoughts, feelings, and actions.
- Derived from Latin "Persona" (Mask).
- Dynamic organization within the individual.

### Approaches to Personality
1. **Type Theories**: Classify people into types
   - Hippocrates (Fluids)
   - Sheldon (Body type)
   - Jung (Introvert/Extrovert)
   - Type A/B/C/D

2. **Trait Theories**: Characteristics
   - Allport (Cardinal, Central, Secondary)
   - Cattell (16 PF)
   - Big Five (OCEAN)

3. **Psychodynamic**: Freud (Id, Ego, Superego)
4. **Humanistic**: Rogers (Self), Maslow

### Factors Affecting Personality
- **Biological**: Heredity, Endocrine glands, Nervous system
- **Environmental**: Family, School, Culture, Mass media

### Assessment
- **Self-Report**: MMPI, 16PF
- **Projective Techniques**: Rorschach Inkblot, TAT
- **Behavioral Analysis**: Interview, Observation
            `,
      detailedNotes: `
# Detailed Notes: Personality

## Definition
"Personality is the dynamic organization within the individual of those psychophysical systems that determine his unique adjustments to his environment." - Gordon Allport

**Characteristics**:
- Unique to each person
- Relatively stable over time
- Includes physical and psychological aspects
- Influences behavior

## Theories of Personality

### 1. Type Theories (Classification)
**Hippocrates (Humors)**:
- Sanguine (Blood) - Cheerful
- Phlegmatic (Phlegm) - Calm
- Choleric (Yellow bile) - Angry
- Melancholic (Black bile) - Sad

**Sheldon (Somatotypes)**:
- Endomorph (Fat/Round) - Relaxed, social
- Mesomorph (Muscular) - Active, aggressive
- Ectomorph (Thin) - Quiet, sensitive

**Carl Jung**:
- Introvert: Inner-directed, shy
- Extrovert: Outer-directed, social
- Ambivert: Mix of both

**Friedman & Rosenman**:
- Type A: Competitive, urgent, stressed
- Type B: Relaxed, patient
- Type C: Cooperative, suppresses emotion
- Type D: Distressed, pessimistic

### 2. Trait Theories (Components)
**Allport's Traits**:
- **Cardinal**: Dominates entire life (e.g., Gandhian)
- **Central**: Major characteristics (Honesty, kindness)
- **Secondary**: Specific preferences (Food, music)

**Big Five Model (OCEAN)**:
- **O**penness to Experience
- **C**onscientiousness
- **E**xtraversion
- **A**greeableness
- **N**euroticism (Emotional Stability)

### 3. Psychodynamic Perspective (Freud)
**Structure of Personality**:
- **Id**: Pleasure principle (Unconscious, primitive desires)
- **Ego**: Reality principle (Mediator)
- **Superego**: Morality principle (Conscience)

**Defense Mechanisms**:
- Repression, Projection, Rationalization, etc.

## Measurement of Personality

### 1. Self-Report Inventories
- **MMPI**: Minnesota Multiphasic Personality Inventory (Clinical)
- **16 PF**: Cattell's 16 Personality Factors
- **NEO-PI**: Big Five Inventory

### 2. Projective Techniques
Reveal unconscious through ambiguous stimuli
- **Rorschach Inkblot Test**: 10 cards, interpretation
- **TAT (Thematic Apperception Test)**: Storytelling from pictures
- **Sentence Completion Test**: Finish incomplete sentences

### 3. Behavioral Analysis
- **Interview**: Structured/Unstructured
- **Observation**: Controlled/Naturalistic
            `,
      flashcards: [
        {
          id: "f26",
          front: 'What is the origin of word "Personality"?',
          back: 'Latin word "Persona" meaning mask used by actors.',
        },
        {
          id: "f27",
          front: 'Who gave the definition "Dynamic organization..."?',
          back: "Gordon Allport.",
        },
        {
          id: "f28",
          front: "What are the Big Five factors (OCEAN)?",
          back: "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
        },
        {
          id: "f29",
          front: "What is the Id based on?",
          back: "Pleasure Principle (immediate gratification).",
        },
        {
          id: "f30",
          front: "What is a projective test?",
          back: "Test using ambiguous stimuli (like inkblots) to reveal unconscious thoughts/feelings. Example: Rorschach, TAT.",
        },
      ],
      mcqs: [
        {
          id: "mcq21",
          question: "Persona means:",
          options: ["Person", "Mask", "Soul", "Mind"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq22",
          question: "Type A personality is:",
          options: ["Relaxed", "Competitive", "Depressed", "Introvert"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq23",
          question: "Who proposed Introvert-Extrovert types?",
          options: ["Freud", "Jung", "Sheldon", "Allport"],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq24",
          question: "Rorschach test uses:",
          options: ["Pictures", "Inkblots", "Sentences", "Questions"],
          correctIndex: 1,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r21",
          color: "#4ECDC4",
          title: "Big Five (OCEAN)",
          content:
            "Openness (Creative) | Conscientiousness (Organized) | Extraversion (Social) | Agreeableness (Friendly) | Neuroticism (Anxious) =",
        },
        {
          id: "r22",
          color: "#45B7D1",
          title: "Freud's Trio",
          content:
            'Id: "I want it now!" (Devil) | Superego: "It\'s wrong!" (Angel) | Ego: "Let\'s compromise." (Judge) =',
        },
        {
          id: "r23",
          color: "#96CEB4",
          title: "Sheldon's Body Types",
          content:
            "Endo (Round/Jolly) | Meso (Muscular/Active) | Ecto (Thin/Quiet) =",
        },
        {
          id: "r24",
          color: "#FFEAA7",
          title: "Jung's Types",
          content:
            "Introvert: Looks inward (Quiet) | Extrovert: Looks outward (Party) | Ambivert: Both! =",
        },
        {
          id: "r25",
          color: "#DDA0DD",
          title: "Projective Tests",
          content:
            "Inkblots (Rorschach) G Ambiguous pictures (TAT) G Reveal your secrets! =|",
        },
      ],
    },
    {
      id: "psy-ch7",
      title: "Chapter 7: Motivation and Emotion",
      description: "Why we do what we do and how we feel",
      summary: `
# Motivation and Emotion

## Key Concepts

### Motivation
- **Definition**: Process that initiates, guides, and maintains goal-oriented behaviors.
- **Cycle**: Need G Drive G Arousal G Goal G Reduction of arousal.
- **Types**: Biological (Hunger, Thirst) vs Psychosocial (Achievement, Power).

### Theories of Motivation
1. **Instinct**: Innate patterns (McDougall)
2. **Drive Reduction**: Homeostasis (Hull)
3. **Arousal**: Optimal level (Yerkes-Dodson)
4. **Incentive**: External rewards
5. **Maslow's Hierarchy**: Physiological to Self-actualization

### Emotion
- **Definition**: Complex psychological state involving physiological arousal, expressive behavior, and conscious experience.
- **Basic Emotions**: Anger, Fear, Disgust, Happiness, Sadness, Surprise (Ekman).

### Theories of Emotion
1. **James-Lange**: Body reaction G Emotion
2. **Cannon-Bard**: Body + Emotion simultaneous
3. **Schachter-Singer**: Body + Cognitive label G Emotion
            `,
      detailedNotes: `
# Detailed Notes: Motivation and Emotion

## Motivation

### Motivational Cycle
1. **Need**: Lack or deficit (e.g., lack of food)
2. **Drive**: Internal tension (e.g., hunger pangs)
3. **Arousal**: Action to satisfy drive (e.g., looking for food)
4. **Goal-Directed Behavior**: Eating
5. **Achievement**: Hunger satisfied
6. **Reduction of Arousal**: Homeostasis restored

### Types of Motives
1. **Biological/Physiological**:
   - Hunger, Thirst, Sleep, Sex, Temperature regulation
   - Essential for survival
   - Homeostasis-based

2. **Psychosocial**:
   - **Need for Achievement (nAch)**: Desire to excel (McClelland)
   - **Need for Affiliation**: Desire to be with others
   - **Need for Power**: Control over others
   - **Curiosity/Exploration**: Need to know

### Maslow's Hierarchy of Needs
1. **Physiological**: Food, water, shelter
2. **Safety**: Security, stability
3. **Love/Belonging**: Relationships, acceptance
4. **Esteem**: Respect, recognition
5. **Self-Actualization**: Reaching full potential

## Emotion

### Components of Emotion
1. **Physiological**: Heart rate, sweating, breathing (ANS activity)
2. **Cognitive**: Interpretation, labeling ("I am scared")
3. **Behavioral**: Facial expression, body language (Smile, running away)

### Theories of Emotion

**1. James-Lange Theory**
- "We feel sad because we cry"
- Event G Physiological Arousal G Emotion
- Body reacts first, then we feel

**2. Cannon-Bard Theory**
- Event G Thalamus G Arousal AND Emotion (Simultaneously)
- Body reaction and feeling happen together

**3. Schachter-Singer (Two-Factor) Theory**
- Event G Arousal G Cognitive Label G Emotion
- Interpretation of arousal determines emotion

### Emotional Intelligence
- Managing own and others' emotions
- Key for success and relationships
            `,
      flashcards: [
        {
          id: "f31",
          front: "What is the Motivation Cycle?",
          back: "Need G Drive G Arousal G Goal-Directed Behavior G Achievement G Reduction of Arousal.",
        },
        {
          id: "f32",
          front: "What is Homeostasis?",
          back: "The body's tendency to maintain a balanced or constant internal state (e.g., temperature, sugar).",
        },
        {
          id: "f33",
          front: "Maslow's highest need?",
          back: "Self-Actualization (realizing one's full potential).",
        },
        {
          id: "f34",
          front: "James-Lange theory states?",
          back: 'Physiological reaction comes BEFORE the emotion. "We are afraid because we tremble."',
        },
        {
          id: "f35",
          front: "What are the 6 basic emotions (Paul Ekman)?",
          back: "Happiness, Sadness, Fear, Anger, Surprise, Disgust.",
        },
      ],
      mcqs: [
        {
          id: "mcq25",
          question: "Homeostasis is related to:",
          options: [
            "Arousal theory",
            "Drive Reduction theory",
            "Instinct theory",
            "Incentive theory",
          ],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq26",
          question: "Maslow's base need is:",
          options: ["Safety", "Esteem", "Physiological", "Love"],
          correctIndex: 2,
          explanation: "",
        },
        {
          id: "mcq27",
          question: 'Theory stating "We cry, so we are sad":',
          options: [
            "Cannon-Bard",
            "James-Lange",
            "Schachter-Singer",
            "Cognitive",
          ],
          correctIndex: 1,
          explanation: "",
        },
        {
          id: "mcq28",
          question: "Need for achievement was studied by:",
          options: ["Maslow", "McClelland", "Freud", "Skinner"],
          correctIndex: 1,
          explanation: "",
        },
      ],
      reels: [
        {
          id: "r26",
          color: "#FF7675",
          title: "Motivation Cycle",
          content: "Need (Hunger) G Drive (Pangs) G Action (Eat) G Relief! =+",
        },
        {
          id: "r27",
          color: "#74B9FF",
          title: "Maslow's Pyramid",
          content:
            "Base: Food/Sleep | Top: Becoming your best self (Self-Actualization) =+",
        },
        {
          id: "r28",
          color: "#A29BFE",
          title: "James-Lange",
          content: "Bear G Run G Fear. (Action causes Emotion) =",
        },
        {
          id: "r29",
          color: "#FAB1A0",
          title: "Cannon-Bard",
          content: "Bear G Run + Fear. (Action AND Emotion happen together) =",
        },
        {
          id: "r30",
          color: "#FD79A8",
          title: "Basic Emotions",
          content:
            "Happy, Sad, Angry, Afraid, Surprised, Disgusted. Universal faces! =",
        },
      ],
    },
  ],
};
