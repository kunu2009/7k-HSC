import { Subject } from '../types';
import { getReelColor } from './helpers';

export const PSY_SUBJECT: Subject = {
        id: 'psy',
        name: 'Psychology',
        icon: 'Brain',
        color: 'bg-pink-500',
        syllabus: '1. Introduction to Psychology\n2. Biological Basis of Behavior\n3. Learning\n4. Memory\n5. Intelligence & Aptitude',
        paperPattern: '### Psychology Paper Pattern (80 Marks)\n\n* **Q.1 MCQs (16 Marks)**\n* **Q.2 Answer in Brief (16 Marks)**\n* **Q.3 Short Notes (16 Marks)**\n* **Q.4 Long Answers (16 Marks)**\n* **Q.5 Case Study (16 Marks)**',
        previousPapers: [{ year: '2024', title: '2024 Psychology Paper', link: '#' }, { year: '2023', title: '2023 Psychology Paper', link: '#' }],
        chapters: [
          {
            id: 'psy-ch1',
            title: 'Chapter 1: Introduction to Psychology',
            description: 'Nature, scope, and methods of psychology',
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
              { id: 'f1', front: 'What is psychology?', back: 'Scientific study of behavior and mental processes. From Greek: Psyche (soul/mind) + Logos (study).' },
              { id: 'f2', front: 'Who is the father of psychology?', back: 'Wilhelm Wundt - established first psychology laboratory in Leipzig, Germany in 1879.' },
              { id: 'f3', front: 'What are the 4 goals of psychology?', back: 'Describe (what), Explain (why), Predict (future), Control (change behavior).' },
              { id: 'f4', front: 'What is behaviorism?', back: 'School of psychology focusing only on observable behavior, ignoring mental processes. Founded by Watson. S-R (Stimulus-Response) approach.' },
              { id: 'f5', front: 'Who founded psychoanalysis?', back: 'Sigmund Freud - emphasized unconscious mind, childhood experiences, Id-Ego-Superego structure.' }
            ],
            mcqs: [
              { id: 'mcq1', question: 'First psychology lab was established by:', options: ['Freud', 'Watson', 'Wundt', 'Skinner'], correctIndex: 2, explanation: '' },
              { id: 'mcq2', question: 'Behaviorism focuses on:', options: ['Unconscious mind', 'Observable behavior', 'Dreams', 'Self-actualization'], correctIndex: 1, explanation: '' },
              { id: 'mcq3', question: 'Hierarchy of needs was given by:', options: ['Freud', 'Maslow', 'Watson', 'Wundt'], correctIndex: 1, explanation: '' },
              { id: 'mcq4', question: 'Psychology is derived from Greek words meaning:', options: ['Mind and body', 'Soul and study', 'Brain and science', 'Thought and logic'], correctIndex: 1, explanation: '' }
            ],
            reels: [
              { id: 'r1', color: '#4ECDC4', title: 'Psychology Definition', content: 'Scientific study of BEHAVIOR + MENTAL PROCESSES =���' },
              { id: 'r2', color: '#45B7D1', title: '4 Goals of Psychology', content: 'Describe G�� Explain G�� Predict G�� Control =�Ļ' },
              { id: 'r3', color: '#96CEB4', title: 'Schools Timeline', content: 'Structuralism G�� Functionalism G�� Behaviorism G�� Psychoanalysis G�� Humanistic G�� Cognitive =���' },
              { id: 'r4', color: '#FFEAA7', title: 'Father of Psychology', content: 'Wilhelm Wundt | 1879 | Leipzig, Germany | First Lab =���' }
            ]
          },
          {
            id: 'psy-ch2',
            title: 'Chapter 2: Biological Basis of Behavior',
            description: 'Brain, nervous system, and behavior',
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
              { id: 'f6', front: 'What are the parts of a neuron?', back: 'Dendrites (receive), Cell body (nucleus), Axon (transmit), Synapse (gap). Myelin sheath speeds transmission.' },
              { id: 'f7', front: 'What is the function of sympathetic nervous system?', back: 'Fight or flight response - increases heart rate, dilates pupils, releases adrenaline. Prepares body for emergency.' },
              { id: 'f8', front: 'Name the 4 lobes of cerebrum.', back: 'Frontal (thinking), Parietal (touch), Temporal (hearing), Occipital (vision). Mnemonic: FPTO.' },
              { id: 'f9', front: 'Which gland is called master gland?', back: 'Pituitary gland - controls other endocrine glands. Located at base of brain, controlled by hypothalamus.' },
              { id: 'f10', front: 'What is the function of cerebellum?', back: 'Balance, coordination, and motor learning. Located in hindbrain. Damage causes ataxia (uncoordinated movement).' }
            ],
            mcqs: [
              { id: 'mcq5', question: 'Which carries impulse away from cell body?', options: ['Dendrite', 'Axon', 'Synapse', 'Soma'], correctIndex: 1, explanation: '' },
              { id: 'mcq6', question: 'Fight or flight response is controlled by:', options: ['Parasympathetic', 'Sympathetic', 'Somatic', 'Central'], correctIndex: 1, explanation: '' },
              { id: 'mcq7', question: 'Vision is processed in which lobe?', options: ['Frontal', 'Parietal', 'Temporal', 'Occipital'], correctIndex: 3, explanation: '' },
              { id: 'mcq8', question: 'Master gland is:', options: ['Thyroid', 'Pituitary', 'Adrenal', 'Pancreas'], correctIndex: 1, explanation: '' }
            ],
            reels: [
              { id: 'r5', color: '#DDA0DD', title: 'Neuron Parts', content: 'Dendrites (receive) G�� Cell body G�� Axon (send) G�� Synapse (gap) =���' },
              { id: 'r6', color: '#98D8C8', title: 'Sympathetic vs Para', content: 'Sympathetic: Fight/Flight =�Ƭ | Parasympathetic: Rest/Digest =���' },
              { id: 'r7', color: '#F7DC6F', title: 'Brain Lobes', content: 'Frontal: Think =��� | Parietal: Touch G�� | Temporal: Hear =��� | Occipital: See =���n+�' },
              { id: 'r8', color: '#BB8FCE', title: 'Left vs Right Brain', content: 'Left: Logic, Language, Math =��� | Right: Creativity, Spatial, Art =�Ŀ' }
            ]
          },
          {
            id: 'psy-ch3',
            title: 'Chapter 3: Learning',
            description: 'Types and theories of learning',
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
              { id: 'f11', front: 'What is classical conditioning?', back: 'Learning by association. Neutral stimulus paired with unconditioned stimulus becomes conditioned stimulus. Discovered by Pavlov with dog salivation.' },
              { id: 'f12', front: 'Difference between positive and negative reinforcement?', back: 'Both INCREASE behavior. Positive: Add pleasant stimulus (praise). Negative: Remove unpleasant stimulus (turn off alarm).' },
              { id: 'f13', front: 'What is observational learning?', back: 'Learning by watching others (models). Bandura\'s theory. Steps: Attention G�� Retention G�� Reproduction G�� Motivation. Bobo doll experiment.' },
              { id: 'f14', front: 'What is extinction in conditioning?', back: 'Gradual weakening and disappearance of conditioned response when conditioned stimulus is presented without unconditioned stimulus.' },
              { id: 'f15', front: 'What is shaping in operant conditioning?', back: 'Reinforcing successive approximations toward target behavior. Used to teach complex behaviors step by step.' }
            ],
            mcqs: [
              { id: 'mcq9', question: 'Pavlov is associated with:', options: ['Operant conditioning', 'Classical conditioning', 'Observational learning', 'Insight learning'], correctIndex: 1, explanation: '' },
              { id: 'mcq10', question: 'Skinner Box is used for:', options: ['Classical conditioning', 'Operant conditioning', 'Cognitive learning', 'Social learning'], correctIndex: 1, explanation: '' },
              { id: 'mcq11', question: 'Bobo doll experiment was conducted by:', options: ['Pavlov', 'Skinner', 'Bandura', 'Kohler'], correctIndex: 2, explanation: '' },
              { id: 'mcq12', question: 'Removing unpleasant stimulus to increase behavior is:', options: ['Positive reinforcement', 'Negative reinforcement', 'Positive punishment', 'Negative punishment'], correctIndex: 1, explanation: '' }
            ],
            reels: [
              { id: 'r9', color: '#85C1E9', title: 'Classical Conditioning', content: 'Bell + Food G�� Bell alone = Salivation | Learning by ASSOCIATION =���=���' },
              { id: 'r10', color: '#FF6B6B', title: 'Reinforcement vs Punishment', content: 'Reinforcement: G�� behavior | Punishment: G�� behavior =���=���' },
              { id: 'r11', color: '#4ECDC4', title: 'Positive vs Negative', content: 'Positive: ADD something | Negative: REMOVE something GP�GP�' },
              { id: 'r12', color: '#45B7D1', title: 'Observational Learning', content: 'Attention G�� Retention G�� Reproduction G�� Motivation | Watch & Learn! =���' }
            ]
          },
          {
            id: 'psy-ch4',
            title: 'Chapter 4: Memory',
            description: 'Memory processes and types',
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
              { id: 'f16', front: 'What are the 3 processes of memory?', back: 'Encoding (convert to storable form), Storage (maintain over time), Retrieval (access stored info).' },
              { id: 'f17', front: 'What is the capacity of short-term memory?', back: '7-�2 items (Miller\'s magic number). Duration: 15-30 seconds without rehearsal. Can be improved by chunking.' },
              { id: 'f18', front: 'Difference between episodic and semantic memory?', back: 'Episodic: Personal experiences, events (your birthday). Semantic: Facts, concepts, general knowledge (India\'s capital).' },
              { id: 'f19', front: 'What is proactive interference?', back: 'Old information interferes with learning new information. Example: Old phone number interferes with remembering new one.' },
              { id: 'f20', front: 'What is procedural memory?', back: 'Implicit memory for skills and how to do things. Example: Riding bicycle, typing. Doesn\'t require conscious recall.' }
            ],
            mcqs: [
              { id: 'mcq13', question: 'Capacity of STM is:', options: ['5-�2', '7-�2', '9-�2', 'Unlimited'], correctIndex: 1, explanation: '' },
              { id: 'mcq14', question: 'Memory for personal events is:', options: ['Semantic', 'Episodic', 'Procedural', 'Implicit'], correctIndex: 1, explanation: '' },
              { id: 'mcq15', question: 'Old memories interfering with new is:', options: ['Retroactive', 'Proactive', 'Decay', 'Repression'], correctIndex: 1, explanation: '' },
              { id: 'mcq16', question: 'Riding a bicycle involves which memory?', options: ['Episodic', 'Semantic', 'Procedural', 'Sensory'], correctIndex: 2, explanation: '' }
            ],
            reels: [
              { id: 'r13', color: '#96CEB4', title: 'Memory Processes', content: 'Encode (input) G�� Store (save) G�� Retrieve (access) =��+' },
              { id: 'r14', color: '#FFEAA7', title: 'Memory Stores', content: 'Sensory (<1s) G�� STM (30s, 7-�2) G�� LTM (forever, unlimited) =���' },
              { id: 'r15', color: '#DDA0DD', title: 'Explicit vs Implicit', content: 'Explicit: Conscious (facts, events) | Implicit: Unconscious (skills) =���' },
              { id: 'r16', color: '#98D8C8', title: 'Interference', content: 'Proactive: Old blocks new | Retroactive: New blocks old =�ܽ' }
            ]
          },
          {
            id: 'psy-ch5',
            title: 'Chapter 5: Intelligence & Aptitude',
            description: 'Understanding intelligence and its measurement',
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
              { id: 'f21', front: 'What is the IQ formula?', back: 'IQ = (Mental Age / Chronological Age) +� 100. Average IQ is 100. Developed by William Stern.' },
              { id: 'f22', front: 'What are Gardner\'s 8 Multiple Intelligences?', back: 'Linguistic, Logical-Mathematical, Spatial, Musical, Bodily-Kinesthetic, Interpersonal, Intrapersonal, Naturalistic.' },
              { id: 'f23', front: 'What is Spearman\'s g-factor?', back: 'General intelligence factor common to all mental abilities. Spearman believed g-factor underlies performance on all cognitive tasks.' },
              { id: 'f24', front: 'What is Sternberg\'s Triarchic Theory?', back: 'Three types of intelligence: Analytical (academic), Creative (novel ideas), Practical (street smart, adaptation).' },
              { id: 'f25', front: 'Difference between aptitude and achievement?', back: 'Aptitude: Potential, what you CAN do, predictive. Achievement: Performance, what you HAVE done, evaluative.' }
            ],
            mcqs: [
              { id: 'mcq17', question: 'First intelligence test was developed by:', options: ['Wechsler', 'Terman', 'Binet-Simon', 'Spearman'], correctIndex: 2, explanation: '' },
              { id: 'mcq18', question: 'Average IQ is:', options: ['90', '100', '110', '120'], correctIndex: 1, explanation: '' },
              { id: 'mcq19', question: 'Multiple Intelligences theory was given by:', options: ['Spearman', 'Sternberg', 'Gardner', 'Thurstone'], correctIndex: 2, explanation: '' },
              { id: 'mcq20', question: 'Emotional Intelligence concept was popularized by:', options: ['Gardner', 'Goleman', 'Sternberg', 'Binet'], correctIndex: 1, explanation: '' }
            ],
            reels: [
              { id: 'r17', color: '#F7DC6F', title: 'IQ Formula', content: 'IQ = (Mental Age ++ Chronological Age) +� 100 | Average = 100 =���' },
              { id: 'r18', color: '#BB8FCE', title: 'Gardner\'s 8', content: 'Linguistic | Logical | Spatial | Musical | Bodily | Inter | Intra | Naturalistic =���' },
              { id: 'r19', color: '#85C1E9', title: 'Sternberg Triarchic', content: 'Analytical (academic) + Creative (new ideas) + Practical (street smart) = Success! =�Ļ' },
              { id: 'r20', color: '#FF6B6B', title: 'Aptitude vs Achievement', content: 'Aptitude: What you CAN do (potential) | Achievement: What you DID (performance) =ðŸŽ¯' }
            ]
          }
        ]
};
