import { Subject } from '../types';
import { getReelColor } from './helpers';

export const GEO_SUBJECT: Subject = {
        id: 'geo',
        name: 'Geography',
        icon: 'Globe',
        color: 'bg-teal-500',
        syllabus: '1. Population Geography\n2. Migration\n3. Human Settlements\n4. Human Development\n5. Primary Activities',
        paperPattern: '### Geography Paper Pattern (80 Marks)\n\n* **Q.1 MCQs (20 Marks)**\n* **Q.2 Short Answers (16 Marks)**\n* **Q.3 Distinguish Between (12 Marks)**\n* **Q.4 Long Answers (16 Marks)**\n* **Q.5 Map Work (16 Marks)**',
        previousPapers: [{ year: '2024', title: '2024 Geography Paper', link: '#' }, { year: '2023', title: '2023 Geography Paper', link: '#' }],
        chapters: [
          {
            id: 'geo-ch1',
            title: 'Chapter 1: Population Geography',
            description: 'Distribution, density, and growth of population',
            summary: `
# Population Geography

## Key Concepts

### Population Distribution
- **Densely Populated**: Ganga plains, coastal areas, deltas
- **Sparsely Populated**: Deserts, mountains, dense forests
- 90% population on 10% land area

### Factors Affecting Distribution
1. **Physical**: Climate, water, soil, relief, minerals
2. **Economic**: Industries, agriculture, transport
3. **Social**: Historical, political, cultural

### Population Density
- Persons per sq. km
- India: ~382 persons/sq km (2011)
- Highest: Bihar (1106)
- Lowest: Arunachal Pradesh (17)

### Population Growth
- Birth Rate - Death Rate = Natural Growth
- India: 1.2% annual growth
- Demographic Transition: HighG��TransitionalG��Low

### Age Structure
- 0-14 years: Young/Dependent
- 15-64 years: Working/Productive
- 65+ years: Elderly/Dependent
- Dependency Ratio = (Young + Old) / Working +� 100
            `,
            detailedNotes: `
# Detailed Notes: Population Geography

## Population Distribution Patterns

### World Distribution
- Asia: 60% of world population
- Most populated countries: China, India, USA
- Northern Hemisphere: 90% population
- Coastal areas: 66% within 500 km of coast

### Factors Affecting Distribution

#### Physical Factors
| Factor | Favorable | Unfavorable |
|--------|-----------|-------------|
| Climate | Moderate temp, adequate rainfall | Extreme hot/cold, very dry/wet |
| Relief | Plains, plateaus | Mountains, steep slopes |
| Soil | Fertile alluvial, black soil | Rocky, sandy, marshy |
| Water | Rivers, lakes nearby | Arid regions |
| Minerals | Mineral-rich areas attract | Absence discourages |

#### Economic Factors
- Industrial centers: Dense population
- Agricultural regions: Rural settlements
- Trade centers: Urban growth
- Transport networks: Accessibility

## Population Density

### Calculation
Density = Total Population / Total Area

### Categories
- Very High: >500/sq km
- High: 200-500/sq km
- Moderate: 50-200/sq km
- Low: <50/sq km

### India's Density Pattern
- Most dense: Indo-Gangetic Plain
- Least dense: Himalayan region, Thar Desert
- Increasing trend due to population growth

## Population Growth

### Measures of Growth
1. **Birth Rate**: Births per 1000 population per year
2. **Death Rate**: Deaths per 1000 population per year
3. **Natural Growth**: Birth Rate - Death Rate
4. **Growth Rate**: Including migration effects

### Demographic Transition Theory
| Stage | Birth Rate | Death Rate | Growth |
|-------|------------|------------|--------|
| Stage 1 | High | High | Low/Stable |
| Stage 2 | High | Declining | Rapid increase |
| Stage 3 | Declining | Low | Slowing |
| Stage 4 | Low | Low | Stable/Decline |

### India's Demographic Transition
- Pre-1921: Stage 1 (Stagnant growth)
- 1921-1971: Stage 2 (Rapid growth)
- Post-1971: Stage 3 (Declining growth)

## Age Structure Pyramid

### Types
1. **Expanding**: Wide base, narrow top (developing countries)
2. **Stationary**: Uniform width (developed countries)
3. **Contracting**: Narrow base (aging population)

### Significance
- Planning for education, healthcare
- Labor force availability
- Social security needs
            `,
            flashcards: [
              { id: 'f1', front: 'What is population density?', back: 'Number of persons living per square kilometer of area. Formula: Total Population ++ Total Area.' },
              { id: 'f2', front: 'Which Indian state has highest population density?', back: 'Bihar with 1106 persons per sq km (Census 2011).' },
              { id: 'f3', front: 'What is Demographic Transition?', back: 'Theory explaining population change from high birth/death rates to low birth/death rates as country develops.' },
              { id: 'f4', front: 'What is dependency ratio?', back: 'Ratio of dependent population (0-14 and 65+) to working age population (15-64). Shows burden on workers.' },
              { id: 'f5', front: 'What is natural growth of population?', back: 'Difference between birth rate and death rate, excluding migration. Natural Growth = Birth Rate - Death Rate.' }
            ],
            mcqs: [
              { id: 'mcq1', question: 'Which factor is NOT a physical factor affecting population distribution?', options: ['Climate', 'Relief', 'Industries', 'Water'], correctIndex: 2, explanation: '' },
              { id: 'mcq2', question: 'Highest population density in India is in:', options: ['Kerala', 'West Bengal', 'Bihar', 'UP'], correctIndex: 2, explanation: '' },
              { id: 'mcq3', question: 'In demographic transition, Stage 2 has:', options: ['High birth, high death', 'High birth, declining death', 'Low birth, low death', 'Declining birth, low death'], correctIndex: 1, explanation: '' }
            ],
            reels: [
              { id: 'r1', color: '#4ECDC4', title: 'Population Density Formula', content: 'Density = Population ++ Area | India G�� 382/sq km =���' },
              { id: 'r2', color: '#45B7D1', title: 'Dense vs Sparse', content: 'Dense: Plains, Rivers, Fertile | Sparse: Mountains, Deserts, Forests =���n+�=�ţn+�' },
              { id: 'r3', color: '#96CEB4', title: 'Demographic Transition', content: 'Stage 1: High-High | Stage 2: High-Low | Stage 3: Low-Low | Stage 4: Stable =���' },
              { id: 'r4', color: '#FFEAA7', title: 'Age Pyramid Types', content: 'Expanding: Young country =��� | Stationary: Balanced =��+ | Contracting: Aging =��+' }
            ]
          },
          {
            id: 'geo-ch2',
            title: 'Chapter 2: Migration',
            description: 'Types, causes, and consequences of migration',
            summary: `
# Migration

## Key Concepts

### Definition
Movement of people from one place to another with intention to settle

### Types of Migration
1. **Internal**: Within country
   - Rural to Urban
   - Urban to Urban
   - Rural to Rural
2. **International**: Across countries
   - Immigration (into country)
   - Emigration (out of country)

### Push Factors (Why leave?)
- Unemployment, poverty
- Natural disasters
- War, conflict
- Lack of facilities

### Pull Factors (Why go there?)
- Better jobs, higher wages
- Better education, healthcare
- Peace and security
- Family reunion

### Consequences
**Positive**: Remittances, skill transfer, cultural exchange
**Negative**: Brain drain, family separation, exploitation
            `,
            detailedNotes: `
# Detailed Notes: Migration

## Classification of Migration

### Based on Distance
- **Short Distance**: Within district/state
- **Long Distance**: Inter-state, international

### Based on Duration
- **Permanent**: Settle permanently
- **Temporary**: Seasonal, short-term
- **Circular**: Regular back-and-forth

### Based on Decision
- **Voluntary**: By choice
- **Forced**: Refugees, displaced persons

## Causes of Migration

### Push Factors
| Category | Examples |
|----------|----------|
| Economic | Unemployment, low wages, poverty |
| Social | Discrimination, family disputes |
| Political | War, persecution, instability |
| Environmental | Drought, floods, disasters |
| Demographic | Overpopulation, land shortage |

### Pull Factors
| Category | Examples |
|----------|----------|
| Economic | Jobs, higher wages, opportunities |
| Social | Education, healthcare, family |
| Political | Safety, freedom, rights |
| Environmental | Better climate, amenities |

## Consequences of Migration

### For Origin Area
**Positive:**
- Reduces population pressure
- Remittances boost economy
- Return migrants bring skills

**Negative:**
- Brain drain (skilled leave)
- Labor shortage
- Family disruption

### For Destination Area
**Positive:**
- Labor supply increases
- Cultural diversity
- Economic contribution

**Negative:**
- Overcrowding
- Strain on infrastructure
- Social tensions

## Migration in India

### Major Streams
1. **Rural to Urban**: Most common, for jobs
2. **Rural to Rural**: Marriage (females)
3. **Urban to Urban**: Job transfers, education
4. **Urban to Rural**: Rare, retirement

### Key Statistics
- Maharashtra, Delhi, Gujarat: Major destinations
- UP, Bihar: Major source states
- Female migration: Mostly for marriage
            `,
            flashcards: [
              { id: 'f6', front: 'What are push factors in migration?', back: 'Factors that force people to leave origin: unemployment, poverty, war, disasters, discrimination.' },
              { id: 'f7', front: 'What are pull factors in migration?', back: 'Factors that attract people to destination: jobs, education, safety, better facilities, family.' },
              { id: 'f8', front: 'What is brain drain?', back: 'Emigration of skilled and educated people from developing to developed countries, causing loss of human capital.' },
              { id: 'f9', front: 'What is the most common migration stream in India?', back: 'Rural to Urban migration, mainly for employment opportunities in cities.' },
              { id: 'f10', front: 'What are remittances?', back: 'Money sent by migrants back to their families in origin area. Important source of income for developing countries.' }
            ],
            mcqs: [
              { id: 'mcq4', question: 'Which is a push factor?', options: ['Better jobs', 'Higher wages', 'Unemployment', 'Good schools'], correctIndex: 2, explanation: '' },
              { id: 'mcq5', question: 'Brain drain refers to:', options: ['Import of skills', 'Export of educated people', 'Return migration', 'Rural migration'], correctIndex: 1, explanation: '' },
              { id: 'mcq6', question: 'Female migration in India is mainly due to:', options: ['Employment', 'Education', 'Marriage', 'Business'], correctIndex: 2, explanation: '' }
            ],
            reels: [
              { id: 'r5', color: '#DDA0DD', title: 'Push vs Pull', content: 'PUSH: Problems at home =��� | PULL: Opportunities elsewhere =���' },
              { id: 'r6', color: '#98D8C8', title: 'Migration Types', content: 'Internal: Within country | International: Across borders =���' },
              { id: 'r7', color: '#F7DC6F', title: 'Brain Drain', content: 'Skilled workers leave G�� Origin loses talent G�� Destination gains! =���G��n+�' },
              { id: 'r8', color: '#BB8FCE', title: 'India Migration Pattern', content: 'UP/Bihar G�� Mumbai/Delhi/Gujarat | For jobs & better life =���n+�' }
            ]
          },
          {
            id: 'geo-ch3',
            title: 'Chapter 3: Human Settlements',
            description: 'Types and patterns of human settlements',
            summary: `
# Human Settlements

## Key Concepts

### Definition
Places where people build homes and live together

### Types of Settlements
1. **Rural Settlements**
   - Compact/Nucleated: Houses clustered
   - Dispersed/Scattered: Houses spread out
   - Linear: Along roads/rivers

2. **Urban Settlements**
   - Town: 5,000-1,00,000 population
   - City: 1,00,000+ population
   - Metropolis: 10,00,000+ (10 lakh)
   - Megacity: 1,00,00,000+ (1 crore)

### Site vs Situation
- **Site**: Actual location features (land, water)
- **Situation**: Location relative to surroundings

### Urbanization
- Increase in urban population percentage
- Causes: Industrialization, migration, natural growth
- India: 31% urban (2011) G�� projected 40% by 2030
            `,
            detailedNotes: `
# Detailed Notes: Human Settlements

## Rural Settlement Patterns

### Compact/Nucleated
- Houses close together
- Found in fertile plains
- Common kitchen, well, temple
- Examples: Villages in Ganga plain

### Dispersed/Scattered
- Houses spread apart
- Found in hilly, forested areas
- Individual water sources
- Examples: Himalayan villages

### Linear
- Along roads, rivers, canals
- Easy access to transport
- Examples: Coastal villages

### Semi-clustered
- Mix of compact and dispersed
- Fragmented clusters
- Examples: Gujarat villages

## Urban Settlement Classification

### By Population (India)
| Category | Population |
|----------|------------|
| Town | 5,000 - 99,999 |
| City | 1,00,000 - 9,99,999 |
| Metropolitan | 10,00,000 - 49,99,999 |
| Megacity | 50,00,000+ |

### By Function
- **Administrative**: Capitals (Delhi, state capitals)
- **Industrial**: Manufacturing centers (Jamshedpur)
- **Commercial**: Trade hubs (Mumbai)
- **Cultural**: Religious, educational (Varanasi, Pune)
- **Transport**: Ports, junctions (Chennai, Mughal Sarai)

## Site Factors

### Favorable Site Conditions
- Flat land for construction
- Water availability (river, groundwater)
- Good drainage
- Building materials nearby
- Fertile land for agriculture

### Historical Site Selection
- Defense: Hilltops, river islands
- Trade routes: Crossroads, ports
- Religious: Sacred sites

## Urbanization

### Causes
1. Rural push: Poverty, lack of jobs
2. Urban pull: Employment, education
3. Natural increase: Births in cities
4. Reclassification: Villages becoming towns

### Problems of Urbanization
- Housing shortage, slums
- Traffic congestion
- Pollution
- Water and sanitation issues
- Crime and social issues

### Solutions
- Smart city development
- Satellite towns
- Urban planning
- Improved public transport
            `,
            flashcards: [
              { id: 'f11', front: 'What is a nucleated settlement?', back: 'Settlement where houses are clustered together around a central point like temple, well, or marketplace. Common in fertile plains.' },
              { id: 'f12', front: 'What is the difference between site and situation?', back: 'Site: Physical characteristics of actual location. Situation: Location relative to surrounding areas and accessibility.' },
              { id: 'f13', front: 'What is a megacity?', back: 'Urban agglomeration with population of 10 million (1 crore) or more. Examples: Mumbai, Delhi, Kolkata.' },
              { id: 'f14', front: 'What is urbanization?', back: 'Process of increase in proportion of population living in urban areas. India is about 31% urban (2011).' },
              { id: 'f15', front: 'Name types of rural settlements.', back: 'Compact/Nucleated, Dispersed/Scattered, Linear, and Semi-clustered settlements.' }
            ],
            mcqs: [
              { id: 'mcq7', question: 'Houses clustered together is called:', options: ['Dispersed', 'Nucleated', 'Linear', 'Scattered'], correctIndex: 1, explanation: '' },
              { id: 'mcq8', question: 'A city with 10 million+ population is:', options: ['Town', 'City', 'Metropolitan', 'Megacity'], correctIndex: 3, explanation: '' },
              { id: 'mcq9', question: 'Urbanization in India (2011) was about:', options: ['21%', '31%', '41%', '51%'], correctIndex: 1, explanation: '' }
            ],
            reels: [
              { id: 'r9', color: '#85C1E9', title: 'Settlement Types', content: 'Nucleated: Together =���n+� | Dispersed: Spread out =��� | Linear: In a line =���' },
              { id: 'r10', color: '#FF6B6B', title: 'Urban Hierarchy', content: 'Town < City < Metro < Megacity | By population size =���' },
              { id: 'r11', color: '#4ECDC4', title: 'Site vs Situation', content: 'Site: What IS there | Situation: WHERE it is relative to others =���' },
              { id: 'r12', color: '#45B7D1', title: 'Urbanization Issues', content: 'Slums + Traffic + Pollution + Water crisis = Urban problems =���n+�=��+' }
            ]
          },
          {
            id: 'geo-ch4',
            title: 'Chapter 4: Human Development',
            description: 'Human Development Index and quality of life',
            summary: `
# Human Development

## Key Concepts

### Definition
Expanding choices and capabilities of people to live a dignified life

### Human Development Index (HDI)
Developed by UNDP, measures:
1. **Health**: Life expectancy at birth
2. **Education**: Mean & expected years of schooling
3. **Income**: GNI per capita (PPP)

### HDI Categories
- Very High: 0.800+
- High: 0.700-0.799
- Medium: 0.550-0.699
- Low: Below 0.550

### India's HDI
- Rank: ~132 out of 191 countries
- Category: Medium Human Development
- HDI Value: ~0.633

### Other Indices
- **GDI**: Gender Development Index
- **GII**: Gender Inequality Index
- **MPI**: Multidimensional Poverty Index
            `,
            detailedNotes: `
# Detailed Notes: Human Development

## Concept of Human Development

### Definition
"Human development is about expanding choices and capabilities of people to lead lives they value" - UNDP

### Key Aspects
1. **Longevity**: Long and healthy life
2. **Knowledge**: Access to education
3. **Decent Living**: Resources for dignified life
4. **Participation**: Social and political freedom

### Human Development vs Economic Growth
| Economic Growth | Human Development |
|-----------------|-------------------|
| Focus on GDP | Focus on people |
| Quantitative | Qualitative |
| Means | End goal |
| Income-centric | Well-being centric |

## Human Development Index (HDI)

### Components
1. **Health Dimension**
   - Indicator: Life expectancy at birth
   - Min: 20 years, Max: 85 years

2. **Education Dimension**
   - Mean years of schooling (adults)
   - Expected years of schooling (children)

3. **Living Standard**
   - GNI per capita (PPP $)
   - Min: $100, Max: $75,000

### HDI Calculation
Each dimension index = (Actual - Min) / (Max - Min)
HDI = Geometric mean of three indices

### HDI Categories
| Category | HDI Value | Examples |
|----------|-----------|----------|
| Very High | 0.800+ | Norway, Switzerland, Ireland |
| High | 0.700-0.799 | Sri Lanka, Brazil, Thailand |
| Medium | 0.550-0.699 | India, Bangladesh, Kenya |
| Low | <0.550 | Niger, Chad, Mali |

## Related Indices

### Gender Development Index (GDI)
- Ratio of female to male HDI
- Measures gender gap in development
- Higher value = less inequality

### Gender Inequality Index (GII)
- Measures gender disadvantage
- Components: Health, empowerment, labor
- Lower value = less inequality

### Multidimensional Poverty Index (MPI)
- Beyond income poverty
- 10 indicators across 3 dimensions
- Health, education, living standards

## India's Human Development

### Current Status
- HDI Rank: ~132/191
- HDI Value: ~0.633
- Category: Medium

### Challenges
- Gender inequality
- Regional disparities
- Education quality
- Healthcare access

### State-level Variations
- Highest: Kerala, Goa, Himachal Pradesh
- Lowest: Bihar, Jharkhand, UP
            `,
            flashcards: [
              { id: 'f16', front: 'What is Human Development Index (HDI)?', back: 'Composite index measuring human development through: 1) Life expectancy (health), 2) Years of schooling (education), 3) GNI per capita (income). Developed by UNDP.' },
              { id: 'f17', front: 'What are the 3 dimensions of HDI?', back: '1) Health - Life expectancy at birth, 2) Education - Mean and expected years of schooling, 3) Standard of living - GNI per capita (PPP).' },
              { id: 'f18', front: 'What is India\'s HDI rank?', back: 'India ranks around 132 out of 191 countries with HDI value of ~0.633, falling in Medium Human Development category.' },
              { id: 'f19', front: 'Which Indian state has highest HDI?', back: 'Kerala has the highest HDI in India, followed by Goa and Himachal Pradesh.' },
              { id: 'f20', front: 'What is Gender Inequality Index (GII)?', back: 'Index measuring gender-based disadvantage in reproductive health, empowerment, and labor market. Lower value means less inequality.' }
            ],
            mcqs: [
              { id: 'mcq10', question: 'HDI was developed by:', options: ['World Bank', 'IMF', 'UNDP', 'WHO'], correctIndex: 2, explanation: '' },
              { id: 'mcq11', question: 'Which is NOT a component of HDI?', options: ['Life expectancy', 'Education', 'Per capita income', 'Population growth'], correctIndex: 3, explanation: '' },
              { id: 'mcq12', question: 'India falls in which HDI category?', options: ['Very High', 'High', 'Medium', 'Low'], correctIndex: 2, explanation: '' }
            ],
            reels: [
              { id: 'r13', color: '#96CEB4', title: 'HDI Components', content: 'Health (Life expectancy) + Education (Schooling) + Income (GNI) = HDI =���' },
              { id: 'r14', color: '#FFEAA7', title: 'HDI Categories', content: 'Very High: 0.8+ | High: 0.7+ | Medium: 0.55+ | Low: <0.55 =���' },
              { id: 'r15', color: '#DDA0DD', title: 'India HDI', content: 'Rank ~132 | Value ~0.633 | Category: Medium | Best state: Kerala =��=��' },
              { id: 'r16', color: '#98D8C8', title: 'HD vs Economic Growth', content: 'Growth = More money =�Ʀ | Development = Better life =��' }
            ]
          },
          {
            id: 'geo-ch5',
            title: 'Chapter 5: Primary Activities',
            description: 'Agriculture, mining, fishing, forestry',
            summary: `
# Primary Activities

## Key Concepts

### Definition
Activities directly using natural resources
- Agriculture, Mining, Fishing, Forestry, Animal husbandry

### Types of Agriculture
1. **Subsistence**: For self-consumption
   - Primitive (shifting cultivation)
   - Intensive (rice farming)
2. **Commercial**: For sale in market
   - Plantation (tea, coffee, rubber)
   - Mixed farming
   - Dairy farming

### Green Revolution
- 1960s in India
- High Yielding Varieties (HYV)
- Punjab, Haryana leading states
- Increased wheat and rice production

### Mining
- **Surface Mining**: Open pit, quarrying
- **Underground Mining**: Shaft, drift mining
- Major minerals: Coal, iron, petroleum
            `,
            detailedNotes: `
# Detailed Notes: Primary Activities

## Types of Economic Activities

### Classification
1. **Primary**: Direct use of nature (agriculture, mining)
2. **Secondary**: Manufacturing, processing
3. **Tertiary**: Services (trade, transport)
4. **Quaternary**: Knowledge-based (IT, research)

## Agriculture

### Subsistence Agriculture
| Type | Features | Examples |
|------|----------|----------|
| Primitive Shifting | Slash and burn, migrate | Jhum (NE India) |
| Intensive Subsistence | Small plots, labor-intensive | Rice in Asia |
| Pastoral Nomadism | Herding animals, migrate | Gujjars, Bakkarwals |

### Commercial Agriculture
| Type | Features | Crops |
|------|----------|-------|
| Plantation | Large estates, single crop | Tea, coffee, rubber |
| Mixed Farming | Crops + livestock | Europe, USA |
| Dairy Farming | Milk production | Denmark, Netherlands |
| Market Gardening | Vegetables for cities | Near urban areas |

### Factors Affecting Agriculture
1. **Physical**: Climate, soil, relief, water
2. **Economic**: Market, transport, labor, capital
3. **Institutional**: Land tenure, government policy

## Green Revolution

### Features
- High Yielding Variety (HYV) seeds
- Chemical fertilizers
- Irrigation expansion
- Mechanization

### Impacts
**Positive:**
- Increased food production
- Self-sufficiency in food grains
- Improved farmer income

**Negative:**
- Regional disparity
- Groundwater depletion
- Soil degradation
- Small farmer marginalization

## Mining

### Types of Mining
1. **Surface Mining**
   - Open-pit: Large deposits near surface
   - Quarrying: Building materials
   - Placer: River deposits

2. **Underground Mining**
   - Shaft mining: Vertical access
   - Drift mining: Horizontal tunnels

### Major Minerals in India
| Mineral | Major Producing States |
|---------|----------------------|
| Coal | Jharkhand, Odisha, Chhattisgarh |
| Iron Ore | Odisha, Jharkhand, Karnataka |
| Petroleum | Mumbai High, Gujarat, Assam |
| Bauxite | Odisha, Gujarat, Jharkhand |

### Mining and Environment
- Land degradation
- Water pollution
- Air pollution
- Displacement of people
- Rehabilitation issues
            `,
            flashcards: [
              { id: 'f21', front: 'What are primary activities?', back: 'Economic activities that directly extract or harvest resources from nature: agriculture, mining, fishing, forestry, animal husbandry.' },
              { id: 'f22', front: 'What is shifting cultivation?', back: 'Primitive subsistence farming where forests are cleared by slash and burn, crops grown for few years, then area abandoned. Called Jhum in NE India.' },
              { id: 'f23', front: 'What was Green Revolution?', back: 'Agricultural transformation in 1960s using HYV seeds, fertilizers, irrigation. Made India self-sufficient in food grains. Punjab, Haryana led.' },
              { id: 'f24', front: 'Difference between surface and underground mining?', back: 'Surface: Minerals near surface extracted by open-pit/quarrying. Underground: Deep minerals accessed through shafts and tunnels.' },
              { id: 'f25', front: 'What is plantation agriculture?', back: 'Commercial farming on large estates growing single cash crop (tea, coffee, rubber) for export. Labor-intensive, colonial origin.' }
            ],
            mcqs: [
              { id: 'mcq13', question: 'Jhum cultivation is practiced in:', options: ['Punjab', 'Northeast India', 'Rajasthan', 'Maharashtra'], correctIndex: 1, explanation: '' },
              { id: 'mcq14', question: 'Green Revolution was most successful in:', options: ['Kerala', 'Bihar', 'Punjab-Haryana', 'Odisha'], correctIndex: 2, explanation: '' },
              { id: 'mcq15', question: 'Largest coal producing state in India:', options: ['West Bengal', 'Jharkhand', 'Maharashtra', 'Tamil Nadu'], correctIndex: 1, explanation: '' }
            ],
            reels: [
              { id: 'r17', color: '#F7DC6F', title: 'Primary Activities', content: 'Agriculture + Mining + Fishing + Forestry = Primary (From nature directly) =��+G��n+�=�Ƀ=��' },
              { id: 'r18', color: '#BB8FCE', title: 'Agriculture Types', content: 'Subsistence: For self | Commercial: For sale | Plantation: Single crop export =��' },
              { id: 'r19', color: '#85C1E9', title: 'Green Revolution', content: 'HYV + Fertilizers + Irrigation = Food surplus =��+ | Punjab-Haryana leaders!' },
              { id: 'r20', color: '#FF6B6B', title: 'Mining Types', content: 'Surface: Open pit (near surface) | Underground: Shafts (deep) G��n+�' }
            ]
          }
        ]
};
