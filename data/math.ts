import { Subject } from "../types";
import { getReelColor } from "./helpers";

export const MATH_SUBJECT: Subject = {
  id: "math",
  name: "Mathematics",
  icon: "Calculator",
  color: "bg-indigo-600",
  syllabus:
    "1. Mathematical Logic\n2. Matrices\n3. Trigonometric Functions\n4. Pair of Straight Lines\n5. Vectors\n6. Three Dimensional Geometry\n7. Linear Programming\n8. Continuity\n9. Differentiation\n10. Applications of Derivatives\n11. Integration\n12. Applications of Integration\n13. Differential Equations\n14. Probability\n15. Binomial Distribution",
  paperPattern:
    "### Mathematics Paper Pattern (80 Marks)\n\n* **Section A (10 Marks)**: MCQs (2 marks each)\n* **Section B (16 Marks)**: Very short answers (2 marks each)\n* **Section C (18 Marks)**: Short answers (3 marks each)\n* **Section D (36 Marks)**: Long answers (4 marks each)",
  previousPapers: [
    {
      year: "2025",
      title: "HSC Mathematics Feb 2025",
      link: "/papers/math-2025.pdf",
    },
    {
      year: "2024",
      title: "HSC Mathematics Feb 2024",
      link: "/papers/math-2024.pdf",
    },
    {
      year: "2023",
      title: "HSC Mathematics Feb 2023",
      link: "/papers/math-2023.pdf",
    },
    {
      year: "2022",
      title: "HSC Mathematics Feb 2022",
      link: "/papers/math-2022.pdf",
    },
  ],
  chapters: [
    {
      id: "math1",
      title: "1. Mathematical Logic",
      description: "Statements, Connectives, Truth Tables.",
      summary:
        "**Statement**: Sentence that is either true or false\n**Connectives**: G� (and), G� (or), -� (not), G�� (implies), G�� (biconditional)\n**Tautology**: Always true\n**Contradiction**: Always false",
      detailedNotes:
        '### 1. Statements\n* A declarative sentence that is either TRUE or FALSE\n* Not both, not neither\n* Denoted by p, q, r...\n\n### 2. Logical Connectives\n| Symbol | Name | Meaning |\n|--------|------|--------|\n| -� | Negation | NOT p |\n| G� | Conjunction | p AND q |\n| G� | Disjunction | p OR q |\n| G�� | Conditional | If p then q |\n| G�� | Biconditional | p if and only if q |\n\n### 3. Truth Tables\n**Negation (-�p)**\n| p | -�p |\n|---|----|\n| T | F |\n| F | T |\n\n**Conjunction (p G� q)**: True only when BOTH are true.\n**Disjunction (p G� q)**: False only when BOTH are false.\n\n### 4. Conditional (p G�� q)\n| p | q | p G�� q |\n|---|---|-------|\n| T | T | T |\n| T | F | F |\n| F | T | T |\n| F | F | T |\n\n"If p then q" is false ONLY when p is true and q is false.\n\n### 5. Related Statements\n* **Converse**: q G�� p\n* **Inverse**: -�p G�� -�q\n* **Contrapositive**: -�q G�� -�p\n\nOriginal G�� Contrapositive\nConverse G�� Inverse\n\n### 6. Tautology & Contradiction\n* **Tautology**: Always TRUE (p G� -�p)\n* **Contradiction**: Always FALSE (p G� -�p)\n* **Contingency**: Sometimes true, sometimes false\n\n### 7. Logical Equivalence\np G�� q means p and q have same truth values\n\n### 8. Laws\n* **De Morgan\'s**: -�(p G� q) G�� -�p G� -�q; -�(p G� q) G�� -�p G� -�q\n* **Distributive**: p G� (q G� r) G�� (p G� q) G� (p G� r)',
      flashcards: [
        {
          id: "f1",
          front: "When is p G�� q false?",
          back: "Only when p is TRUE and q is FALSE.",
        },
        {
          id: "f2",
          front: "Contrapositive of p G�� q?",
          back: "-�q G�� -�p (logically equivalent to original)",
        },
        {
          id: "f3",
          front: "What is a tautology?",
          back: "A statement that is ALWAYS true. Example: p G� -�p",
        },
        {
          id: "f4",
          front: "De Morgan's Law for -�(p G� q)?",
          back: "-�(p G� q) G�� -�p G� -�q",
        },
        {
          id: "f5",
          front: "When is p G� q true?",
          back: "Only when BOTH p and q are true.",
        },
        {
          id: "f6",
          front: "When is p G� q false?",
          back: "Only when BOTH p and q are false.",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "Contrapositive of p G�� q is:",
          options: ["q G�� p", "-�p G�� -�q", "-�q G�� -�p", "p G�� -�q"],
          correctIndex: 2,
          explanation: "Contrapositive: negate both and reverse.",
        },
        {
          id: "q2",
          question: "p G� -�p is:",
          options: ["Tautology", "Contradiction", "Contingency", "None"],
          correctIndex: 0,
          explanation: "Always true regardless of p.",
        },
        {
          id: "q3",
          question: "p G� -�p is:",
          options: ["Tautology", "Contradiction", "Contingency", "None"],
          correctIndex: 1,
          explanation: "Always false regardless of p.",
        },
        {
          id: "q4",
          question: "-�(p G� q) G��",
          options: ["-�p G� -�q", "-�p G� -�q", "p G� q", "p G� q"],
          correctIndex: 1,
          explanation: "De Morgan's law.",
        },
        {
          id: "q5",
          question: "If p is false, then p G�� q is:",
          options: ["True", "False", "Depends on q", "Undefined"],
          correctIndex: 0,
          explanation: "p G�� q is true when p is false.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Connectives",
          content: "G� = AND\nG� = OR\n-� = NOT\nG�� = IF-THEN",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Conditional",
          content: "p G�� q\nFalse ONLY when:\np = T, q = F",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Contrapositive",
          content:
            "p G�� q G�� -�q G�� -�p\nAlways equivalent!\nImportant for proofs.",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "De Morgan",
          content:
            "-�(p G� q) = -�p G� -�q\n-�(p G� q) = -�p G� -�q\nBreak the bracket, flip!",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Tautology",
          content: "Always TRUE.\np G� -�p\nNo matter what!",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Contradiction",
          content: "Always FALSE.\np G� -�p\nImpossible!",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "math2",
      title: "2. Matrices",
      description: "Types, Operations, Inverse, Determinants.",
      summary:
        "**Matrix**: Rectangular array of numbers\n**Determinant**: |A| (only for square matrices)\n**Inverse**: AG�+-� = (1/|A|) +� adj(A)\n**Singular**: |A| = 0 (no inverse)",
      detailedNotes:
        "### 1. Types of Matrices\n* **Row Matrix**: 1 +� n\n* **Column Matrix**: m +� 1\n* **Square Matrix**: m +� m\n* **Diagonal Matrix**: Non-zero only on diagonal\n* **Scalar Matrix**: Diagonal with same elements\n* **Identity Matrix**: Diagonal with all 1s\n* **Zero Matrix**: All elements are 0\n* **Symmetric**: A = Aߦ�\n* **Skew-symmetric**: A = -Aߦ�\n\n### 2. Matrix Operations\n**Addition/Subtraction**: Same order, element-wise\n**Scalar Multiplication**: Multiply each element\n**Matrix Multiplication**: (m+�n) +� (n+�p) = (m+�p)\n\nProperties:\n* AB G�� BA (generally)\n* A(BC) = (AB)C\n* A(B+C) = AB + AC\n\n### 3. Transpose (Aߦ�)\n* Rows become columns\n* (AB)ߦ� = Bߦ�Aߦ�\n* (Aߦ�)ߦ� = A\n\n### 4. Determinant\nFor 2+�2: |a b; c d| = ad - bc\n\nFor 3+�3: Expand along row/column (cofactor expansion)\n\nProperties:\n* |AB| = |A||B|\n* |Aߦ�| = |A|\n* |kA| = kG�+|A| (n = order)\n* If row/column has all zeros, |A| = 0\n\n### 5. Adjoint\nadj(A) = transpose of cofactor matrix\n\n### 6. Inverse\nAG�+-� = (1/|A|) +� adj(A)\n\nConditions:\n* A must be square\n* |A| G�� 0 (non-singular)\n\nProperties:\n* AAG�+-� = AG�+-�A = I\n* (AB)G�+-� = BG�+-�AG�+-�\n* (AG�+-�)G�+-� = A\n\n### 7. Solving Linear Equations\nAX = B G�� X = AG�+-�B (Cramer's rule)",
      flashcards: [
        {
          id: "f1",
          front: "Condition for matrix multiplication?",
          back: "Number of columns of A = Number of rows of B.",
        },
        {
          id: "f2",
          front: "Determinant of 2+�2 matrix?",
          back: "|a b; c d| = ad - bc",
        },
        {
          id: "f3",
          front: "Formula for inverse?",
          back: "AG�+-� = (1/|A|) +� adj(A)",
        },
        {
          id: "f4",
          front: "When does inverse not exist?",
          back: "When |A| = 0 (singular matrix).",
        },
        {
          id: "f5",
          front: "(AB)G�+-� = ?",
          back: "BG�+-�AG�+-� (reverse order)",
        },
        {
          id: "f6",
          front: "Symmetric matrix condition?",
          back: "A = Aߦ� (equal to its transpose)",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "If A is 3+�2 and B is 2+�4, then AB is:",
          options: ["3+�2", "2+�4", "3+�4", "Not possible"],
          correctIndex: 2,
          explanation: "(3+�2) +� (2+�4) = 3+�4",
        },
        {
          id: "q2",
          question: "For singular matrix:",
          options: ["|A| = 1", "|A| = 0", "|A| = -1", "|A| > 0"],
          correctIndex: 1,
          explanation: "Singular means determinant is zero.",
        },
        {
          id: "q3",
          question: "|kA| for 3+�3 matrix:",
          options: ["k|A|", "k-�|A|", "k-�|A|", "|A|/k"],
          correctIndex: 2,
          explanation: "|kA| = kG�+|A| where n is order.",
        },
        {
          id: "q4",
          question: "If A = Aߦ�, then A is:",
          options: ["Symmetric", "Skew-symmetric", "Diagonal", "Singular"],
          correctIndex: 0,
          explanation: "Symmetric matrix equals its transpose.",
        },
        {
          id: "q5",
          question: "(AB)ߦ� = ?",
          options: ["Aߦ�Bߦ�", "Bߦ�Aߦ�", "AB", "BA"],
          correctIndex: 1,
          explanation: "Transpose reverses the order.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Matrix Types",
          content:
            "Symmetric: A = Aߦ�.\nSkew: A = -Aߦ�.\nIdentity: I (diagonal 1s).",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Multiplication",
          content:
            "(m+�n) +� (n+�p) = (m+�p).\nInner dimensions must match.\nAB G�� BA!",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "2+�2 Determinant",
          content: "|a b|\n|c d|\n= ad - bc",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Inverse",
          content: "AG�+-� = adj(A)/|A|.\n|A| G�� 0 required.\nAAG�+-� = I.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Transpose Rules",
          content: "(AB)ߦ� = Bߦ�Aߦ�.\n(AG�+-�)ߦ� = (Aߦ�)G�+-�.\nReverse order!",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Singular",
          content: "|A| = 0.\nNo inverse exists.\nInfinite or no solutions.",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "math3",
      title: "3. Differentiation",
      description: "Derivatives, Rules, Applications.",
      summary:
        "**Derivative**: Rate of change, dy/dx\n**Product Rule**: (uv)' = u'v + uv'\n**Quotient Rule**: (u/v)' = (u'v - uv')/v-�\n**Chain Rule**: dy/dx = (dy/du)(du/dx)",
      detailedNotes:
        "### 1. Definition\nf'(x) = lim[hG��0] [f(x+h) - f(x)]/h\n\n### 2. Basic Derivatives\n| f(x) | f'(x) |\n|------|-------|\n| xG�+ | nxG�+G�+-� |\n| e-� | e-� |\n| a-� | a-� ln a |\n| ln x | 1/x |\n| log_a x | 1/(x ln a) |\n| sin x | cos x |\n| cos x | -sin x |\n| tan x | sec-�x |\n| sec x | sec x tan x |\n| csc x | -csc x cot x |\n| cot x | -csc-�x |\n\n### 3. Inverse Trigonometric\n| f(x) | f'(x) |\n|------|-------|\n| sinG�+-�x | 1/G��(1-x-�) |\n| cosG�+-�x | -1/G��(1-x-�) |\n| tanG�+-�x | 1/(1+x-�) |\n\n### 4. Rules\n**Sum/Difference**: (u -� v)' = u' -� v'\n**Product Rule**: (uv)' = u'v + uv'\n**Quotient Rule**: (u/v)' = (u'v - uv')/v-�\n**Chain Rule**: dy/dx = (dy/du) +� (du/dx)\n\n### 5. Implicit Differentiation\nDifferentiate both sides, treating y as function of x.\nd/dx(y-�) = 2y(dy/dx)\n\n### 6. Logarithmic Differentiation\nFor y = uߦ� type:\nln y = v ln u\nDifferentiate both sides.\n\n### 7. Parametric Differentiation\nIf x = f(t), y = g(t):\ndy/dx = (dy/dt)/(dx/dt)\n\n### 8. Higher Derivatives\nd-�y/dx-� = d/dx(dy/dx)\nSecond derivative = rate of change of slope.",
      flashcards: [
        { id: "f1", front: "d/dx(sin x)?", back: "cos x" },
        { id: "f2", front: "d/dx(cos x)?", back: "-sin x" },
        { id: "f3", front: "d/dx(e-�)?", back: "e-�" },
        { id: "f4", front: "d/dx(ln x)?", back: "1/x" },
        { id: "f5", front: "Product rule?", back: "(uv)' = u'v + uv'" },
        { id: "f6", front: "Chain rule?", back: "dy/dx = (dy/du)(du/dx)" },
        { id: "f7", front: "d/dx(tanG�+-�x)?", back: "1/(1+x-�)" },
      ],
      mcqs: [
        {
          id: "q1",
          question: "d/dx(xG��) = ?",
          options: ["5xG��", "4xG��", "xG��", "5xG��"],
          correctIndex: 0,
          explanation: "Power rule: nxG�+G�+-�",
        },
        {
          id: "q2",
          question: "d/dx(tan x) = ?",
          options: ["sec x", "sec-�x", "cot x", "-sec-�x"],
          correctIndex: 1,
          explanation: "Derivative of tan x is sec-�x.",
        },
        {
          id: "q3",
          question: "d/dx(e-�) = ?",
          options: ["xe-�G�+-�", "e-�", "e-�G��-�", "e"],
          correctIndex: 1,
          explanation: "e-� is its own derivative.",
        },
        {
          id: "q4",
          question: "If y = sin(2x), dy/dx = ?",
          options: ["cos(2x)", "2cos(2x)", "-2cos(2x)", "sin(2x)"],
          correctIndex: 1,
          explanation: "Chain rule: cos(2x) +� 2",
        },
        {
          id: "q5",
          question: "d/dx(ln(x-�)) = ?",
          options: ["1/x-�", "2/x", "2x", "1/2x"],
          correctIndex: 1,
          explanation: "Chain rule: (1/x-�) +� 2x = 2/x",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Power Rule",
          content: "d/dx(xG�+) = nxG�+G�+-�.\nBring power down.\nReduce by 1.",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Trig Derivatives",
          content: "sin G�� cos.\ncos G�� -sin.\ntan G�� sec-�.",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Exponential",
          content:
            "d/dx(e-�) = e-�.\nd/dx(a-�) = a-� ln a.\nln derivative = 1/x.",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Product Rule",
          content:
            "(uv)' = u'v + uv'.\nFirst times derivative of second.\nPlus second times derivative of first.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Chain Rule",
          content:
            "dy/dx = dy/du +� du/dx.\nOutside +� Inside.\nComposite functions!",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Quotient Rule",
          content:
            "(u/v)' = (u'v - uv')/v-�.\nLo d-Hi minus Hi d-Lo.\nOver Lo squared.",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "math4",
      title: "4. Integration",
      description: "Antiderivatives, Definite integrals, Methods.",
      summary:
        "**Integration**: Reverse of differentiation\n**Indefinite**: G�f(x)dx + C\n**Definite**: G�[a to b]f(x)dx = F(b) - F(a)\n**Methods**: Substitution, Parts, Partial fractions",
      detailedNotes:
        "### 1. Basic Integrals\n| f(x) | G�f(x)dx |\n|------|--------|\n| xG�+ | xG�+G��-�/(n+1) + C (nG��-1) |\n| 1/x | ln|x| + C |\n| e-� | e-� + C |\n| a-� | a-�/ln a + C |\n| sin x | -cos x + C |\n| cos x | sin x + C |\n| sec-�x | tan x + C |\n| csc-�x | -cot x + C |\n| sec x tan x | sec x + C |\n\n### 2. Substitution Method\nIf G�f(g(x))g'(x)dx, let u = g(x)\ndu = g'(x)dx\nG�f(u)du\n\n### 3. Integration by Parts\nG�u dv = uv - G�v du\n\nILATE rule for choosing u:\n* I - Inverse trig\n* L - Logarithmic\n* A - Algebraic\n* T - Trigonometric\n* E - Exponential\n\n### 4. Partial Fractions\nFor rational functions:\n* Linear: A/(x-a)\n* Repeated linear: A/(x-a) + B/(x-a)-�\n* Quadratic: (Ax+B)/(x-�+bx+c)\n\n### 5. Definite Integrals\nG�[a to b]f(x)dx = F(b) - F(a)\n\nProperties:\n* G�[a to a] = 0\n* G�[a to b] = -G�[b to a]\n* G�[a to b] = G�[a to c] + G�[c to b]\n\n### 6. Important Results\nG�1/(x-�+a-�)dx = (1/a)tanG�+-�(x/a) + C\nG�1/G��(a-�-x-�)dx = sinG�+-�(x/a) + C\nG�1/(x-�-a-�)dx = (1/2a)ln|(x-a)/(x+a)| + C",
      flashcards: [
        {
          id: "f1",
          front: "G�xG�+dx = ?",
          back: "xG�+G��-�/(n+1) + C (n G�� -1)",
        },
        { id: "f2", front: "G�sin x dx = ?", back: "-cos x + C" },
        { id: "f3", front: "G�cos x dx = ?", back: "sin x + C" },
        { id: "f4", front: "G�e-�dx = ?", back: "e-� + C" },
        {
          id: "f5",
          front: "Integration by parts formula?",
          back: "G�u dv = uv - G�v du",
        },
        {
          id: "f6",
          front: "ILATE stands for?",
          back: "Inverse, Logarithmic, Algebraic, Trigonometric, Exponential",
        },
        { id: "f7", front: "G�1/x dx = ?", back: "ln|x| + C" },
      ],
      mcqs: [
        {
          id: "q1",
          question: "G�x-�dx = ?",
          options: ["xG�� + C", "xG��/4 + C", "3x-� + C", "4xG�� + C"],
          correctIndex: 1,
          explanation: "x-�G��-�/(3+1) = xG��/4 + C",
        },
        {
          id: "q2",
          question: "G�cos x dx = ?",
          options: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
          correctIndex: 0,
          explanation: "Integral of cos is sin.",
        },
        {
          id: "q3",
          question: "G�sec-�x dx = ?",
          options: ["sec x + C", "tan x + C", "cot x + C", "-tan x + C"],
          correctIndex: 1,
          explanation: "d/dx(tan x) = sec-�x.",
        },
        {
          id: "q4",
          question: "G�[0 to -�]sin x dx = ?",
          options: ["0", "1", "2", "-1"],
          correctIndex: 2,
          explanation: "[-cos x] from 0 to -� = -(-1) - (-1) = 2",
        },
        {
          id: "q5",
          question: "G�e-�-�dx = ?",
          options: ["e-�-� + C", "2e-�-� + C", "e-�-�/2 + C", "e-�-�G��-� + C"],
          correctIndex: 2,
          explanation: "Chain rule: divide by 2.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Power Rule",
          content:
            "G�xG�+dx = xG�+G��-�/(n+1).\nAdd 1 to power.\nDivide by new power.",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Trig Integrals",
          content: "G�sin = -cos.\nG�cos = sin.\nG�sec-� = tan.",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "By Parts",
          content: "G�u dv = uv - G�v du.\nILATE rule.\nFor products!",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Substitution",
          content:
            "Let u = inside function.\ndu = derivative +� dx.\nSimplify and integrate.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Definite",
          content: "G�[a,b] = F(b) - F(a).\nNo + C needed.\nActual number!",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Special",
          content: "G�1/x = ln|x|.\nG�e-� = e-�.\nG�1/(1+x-�) = tanG�+-�x.",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "math5",
      title: "5. Probability",
      description: "Basic probability, Conditional, Bayes theorem.",
      summary:
        "**Probability**: P(A) = n(A)/n(S)\n**Conditional**: P(A|B) = P(AG�B)/P(B)\n**Bayes Theorem**: P(A|B) = P(B|A)P(A)/P(B)\n**Independent**: P(AG�B) = P(A)P(B)",
      detailedNotes:
        "### 1. Basic Probability\nP(A) = Number of favorable outcomes / Total outcomes\nP(A) = n(A)/n(S)\n\nProperties:\n* 0 G�� P(A) G�� 1\n* P(S) = 1 (certain event)\n* P(G��) = 0 (impossible event)\n* P(A') = 1 - P(A) (complement)\n\n### 2. Addition Rule\nP(A G� B) = P(A) + P(B) - P(A G� B)\n\nFor mutually exclusive events:\nP(A G� B) = P(A) + P(B)\n\n### 3. Conditional Probability\nP(A|B) = P(A G� B)/P(B)\n\n\"Probability of A given B has occurred\"\n\n### 4. Multiplication Rule\nP(A G� B) = P(B) +� P(A|B) = P(A) +� P(B|A)\n\n### 5. Independent Events\nA and B are independent if:\nP(A G� B) = P(A) +� P(B)\n\nOr equivalently: P(A|B) = P(A)\n\n### 6. Bayes' Theorem\nP(Aߦ�|B) = P(B|Aߦ�) +� P(Aߦ�) / +�P(B|AG�+)P(AG�+)\n\nUsed when:\n* We know P(B|A)\n* We want P(A|B)\n\n### 7. Random Variables\n* **Discrete**: Countable values\n* **Continuous**: Any value in range\n\nExpected Value: E(X) = +�xߦ�P(xߦ�)\nVariance: Var(X) = E(X-�) - [E(X)]-�\n\n### 8. Binomial Distribution\nP(X = r) = G�+Cߦ� p-� qG�+G�+-�\n\nWhere:\n* n = number of trials\n* p = probability of success\n* q = 1 - p\n* Mean = np\n* Variance = npq",
      flashcards: [
        {
          id: "f1",
          front: "Conditional probability formula?",
          back: "P(A|B) = P(AG�B)/P(B)",
        },
        {
          id: "f2",
          front: "Addition rule?",
          back: "P(AG�B) = P(A) + P(B) - P(AG�B)",
        },
        {
          id: "f3",
          front: "When are events independent?",
          back: "When P(AG�B) = P(A) +� P(B)",
        },
        { id: "f4", front: "Bayes theorem?", back: "P(A|B) = P(B|A)P(A)/P(B)" },
        { id: "f5", front: "Mean of binomial distribution?", back: "++ = np" },
        {
          id: "f6",
          front: "Variance of binomial distribution?",
          back: "-�-� = npq",
        },
        {
          id: "f7",
          front: "Binomial probability formula?",
          back: "P(X=r) = G�+Cߦ� p-� qG�+G�+-�",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "If P(A) = 0.3, P(A') = ?",
          options: ["0.3", "0.7", "0", "1"],
          correctIndex: 1,
          explanation: "P(A') = 1 - P(A) = 0.7",
        },
        {
          id: "q2",
          question: "For mutually exclusive events:",
          options: [
            "P(AG�B) = P(A)P(B)",
            "P(AG�B) = 0",
            "P(A|B) = P(A)",
            "P(AG�B) = 0",
          ],
          correctIndex: 1,
          explanation: "No overlap, so intersection is empty.",
        },
        {
          id: "q3",
          question: "Mean of binomial distribution:",
          options: ["np", "npq", "n/p", "p/n"],
          correctIndex: 0,
          explanation: "++ = np for binomial.",
        },
        {
          id: "q4",
          question: "For independent events, P(A|B) = ?",
          options: ["P(B)", "P(A)", "P(A)P(B)", "0"],
          correctIndex: 1,
          explanation: "If independent, B doesn't affect A.",
        },
        {
          id: "q5",
          question: "If P(AG�B) = 0.2, P(B) = 0.5, then P(A|B) = ?",
          options: ["0.1", "0.4", "0.25", "0.7"],
          correctIndex: 1,
          explanation: "P(A|B) = 0.2/0.5 = 0.4",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Basic Probability",
          content:
            "P(A) = favorable/total.\n0 G�� P(A) G�� 1.\nP(A') = 1 - P(A).",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Addition Rule",
          content:
            "P(AG�B) = P(A) + P(B) - P(AG�B).\nMutually exclusive: no overlap.\nP(AG�B) = P(A) + P(B).",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Conditional",
          content:
            "P(A|B) = P(AG�B)/P(B).\nGiven B has occurred.\nRestricted sample space.",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Independent",
          content:
            "P(AG�B) = P(A)+�P(B).\nOne doesn't affect other.\nP(A|B) = P(A).",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Bayes",
          content:
            "P(A|B) = P(B|A)P(A)/P(B).\nReverse conditional.\nVery useful!",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Binomial",
          content:
            "P(X=r) = G�+Cߦ� p-� qG�+G�+-�.\nMean = np.\nVariance = npq.",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "math3_trig",
      title: "3. Trigonometric Functions",
      description:
        "Principal Solutions, General Solutions, Properties of Triangle.",
      summary:
        "**Principal Solution**: 0 G x < 2-\n**General Solution**: sin x = 0 G x = n-\n**Sine Rule**: a/sin A = b/sin B = c/sin C = 2R\n**Cosine Rule**: a- = b- + c- - 2bc cos A",
      detailedNotes:
        "### 1. Trigonometric Equations\n* **Principal Solution**: Smallest positive value of x satisfying the equation in [0, 2-).\n* **General Solution**: Formula for all possible values.\n\n### 2. General Solutions Formulas\n* **sin - = 0** G - = n-\n* **cos - = 0** G - = (2n+1)-/2\n* **tan - = 0** G - = n-\n* **sin - = sin +** G - = n- + (-1)G+ +\n* **cos - = cos +** G - = 2n- + +\n* **tan - = tan +** G - = n- + +\n\n### 3. Solution of Triangle\n**A. Sine Rule**\na/sin A = b/sin B = c/sin C = 2R\n(R = circumradius)\n\n**B. Cosine Rule**\n* a- = b- + c- - 2bc cos A\n* cos A = (b- + c- - a-) / 2bc\n\n**C. Projection Rule**\n* a = b cos C + c cos B\n* b = c cos A + a cos C\n* c = a cos B + b cos A\n\n### 4. Inverse Trigonometric Functions\n**Principal Value Branch**:\n* sinG+-x: [-/2, -/2]\n* cosG+-x: [0, -]\n* tanG+-x: (-/2, -/2)\n\n**Properties**:\n* sinG+-x + cosG+-x = -/2\n* tanG+-x + cotG+-x = -/2\n* tanG+-x + tanG+-y = tanG+-((x+y)/(1-xy))",
      flashcards: [
        {
          id: "f1",
          front: "General solution of sin - = 0?",
          back: "- = n-, n G Z",
        },
        {
          id: "f2",
          front: "General solution of cos - = cos +?",
          back: "- = 2n- + +",
        },
        {
          id: "f3",
          front: "Sine Rule formula?",
          back: "a/sin A = b/sin B = c/sin C = 2R",
        },
        {
          id: "f4",
          front: "Cosine Rule for cos A?",
          back: "cos A = (b- + c- - a-) / 2bc",
        },
        { id: "f5", front: "Range of sinG+-x?", back: "[-/2, -/2]" },
        {
          id: "f6",
          front: "tanG+-x + tanG+-y = ?",
          back: "tanG+-((x+y)/(1-xy))",
        },
        {
          id: "f7",
          front: "Projection rule for side a?",
          back: "a = b cos C + c cos B",
        },
      ],
      mcqs: [
        {
          id: "q1",
          question: "Principal value of sinG+-(1/G2) is:",
          options: ["-/4", "3-/4", "5-/4", "-/3"],
          correctIndex: 0,
          explanation: "sin(-/4) = 1/G2 and lies in [-/2, -/2].",
        },
        {
          id: "q2",
          question: "General solution of tan - = 0 is:",
          options: ["n-", "2n-", "n-/2", "(2n+1)-/2"],
          correctIndex: 0,
          explanation: "tan - = 0 implies sin - = 0, so - = n-.",
        },
        {
          id: "q3",
          question: "In +ABC, if a=3, b=4, c=5, then cos A is:",
          options: ["3/5", "4/5", "0", "1"],
          correctIndex: 1,
          explanation:
            "This is a right angled triangle (3-4-5). A is opposite 3. cos A = 4/5.",
        },
        {
          id: "q4",
          question: "Range of cosG+-x is:",
          options: ["[-/2, -/2]", "[0, -]", "(-/2, -/2)", "(0, -)"],
          correctIndex: 1,
          explanation: "Standard range for arccos.",
        },
        {
          id: "q5",
          question: "sinG+-x + cosG+-x = ?",
          options: ["-", "-/2", "0", "1"],
          correctIndex: 1,
          explanation: "Identity.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Principal Sol",
          content: "Smallest +ve value.\nBetween 0 and 2-.\nUnique!",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "General Sol",
          content: "sin - = 0 G n-\ncos - = 0 G (odd)-/2\ntan - = 0 G n-",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Sine Rule",
          content:
            "a/sinA = b/sinB = c/sinC\nEquals 2R.\nRelates sides & angles.",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Cosine Rule",
          content:
            "a- = b- + c- - 2bc cosA\nGeneralized Pythagoras!\nFinds side or angle.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Inverse Trig",
          content:
            "sinG+-x range [-/2, -/2]\ncosG+-x range [0, -]\nBe careful with domain!",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Projection",
          content:
            "a = b cosC + c cosB.\nShadow of other sides.\nSimple addition.",
          color: getReelColor(5),
        },
      ],
    },
    {
      id: "math5_vec",
      title: "5. Vectors",
      description: "Vector algebra, Dot & Cross product, Triple product.",
      summary:
        "**Dot Product**: a + b = |a||b|cos-\n**Cross Product**: a + b = |a||b|sin- n^\n**Scalar Triple**: [a b c] = Volume of parallelepiped\n**Section Formula**: r = (mb + na)/(m+n)",
      detailedNotes:
        "### 1. Vector Types\n* **Zero Vector**: Magnitude 0, arbitrary direction.\n* **Unit Vector**: Magnitude 1. n^ = a/|a|.\n* **Collinear**: Parallel (a = kb).\n* **Coplanar**: Lie in same plane.\n\n### 2. Algebra\n* **Triangle Law**: AB + BC = AC\n* **Parallelogram Law**: Resultant diagonal.\n\n### 3. Section Formula\n**Internal Division**: r = (mb + na)/(m+n)\n**External Division**: r = (mb - na)/(m-n)\n**Midpoint**: r = (a + b)/2\n**Centroid**: g = (a + b + c)/3\n\n### 4. Scalar (Dot) Product\n**a + b = |a||b| cos -**\n* i+i = j+j = k+k = 1\n* i+j = j+k = k+i = 0\n* Angle: cos - = (a + b) / (|a||b|)\n* Projection of a on b: (a + b) / |b|\n\n### 5. Vector (Cross) Product\n**a + b = (|a||b| sin -) n^**\n* Result is perpendicular to both a and b.\n* i+i = 0\n* i+j = k, j+k = i, k+i = j\n* Area of Triangle = 1/2 |a + b|\n* Area of Parallelogram = |a + b|\n\n### 6. Scalar Triple Product (STP)\n**[a b c] = a + (b + c)**\n* Represents Volume of Parallelepiped.\n* If [a b c] = 0, vectors are **Coplanar**.\n* Calculated using determinant.",
      flashcards: [
        {
          id: "f1",
          front: "Dot product formula?",
          back: "a + b = |a||b| cos -",
        },
        {
          id: "f2",
          front: "Cross product formula?",
          back: "a + b = |a||b| sin - n^",
        },
        {
          id: "f3",
          front: "Condition for perpendicular vectors?",
          back: "a + b = 0",
        },
        {
          id: "f4",
          front: "Condition for parallel vectors?",
          back: "a + b = 0 (or a = kb)",
        },
        {
          id: "f5",
          front: "Volume of parallelepiped?",
          back: "[a b c] (Scalar Triple Product)",
        },
        {
          id: "f6",
          front: "Section formula (Internal)?",
          back: "r = (mb + na)/(m+n)",
        },
        { id: "f7", front: "Projection of a on b?", back: "(a + b) / |b|" },
      ],
      mcqs: [
        {
          id: "q1",
          question: "If a + b = 0, then:",
          options: ["a || b", "a G b", "a = b", "None"],
          correctIndex: 1,
          explanation: "Dot product is zero for perpendicular vectors.",
        },
        {
          id: "q2",
          question: "i + (j + k) = ?",
          options: ["0", "1", "-1", "3"],
          correctIndex: 1,
          explanation: "j + k = i, so i + i = 1.",
        },
        {
          id: "q3",
          question: "Area of triangle with adjacent sides a and b:",
          options: ["|a + b|", "1/2 |a + b|", "a + b", "1/2 (a + b)"],
          correctIndex: 1,
          explanation: "Half the magnitude of cross product.",
        },
        {
          id: "q4",
          question: "If [a b c] = 0, then vectors are:",
          options: ["Collinear", "Coplanar", "Perpendicular", "Unit"],
          correctIndex: 1,
          explanation: "Volume is zero, so they lie in same plane.",
        },
        {
          id: "q5",
          question: "i + j = ?",
          options: ["0", "k", "-k", "1"],
          correctIndex: 1,
          explanation: "Cyclic order: i G j G k.",
        },
      ],
      reels: [
        {
          id: "r1",
          title: "Dot Product",
          content:
            "Scalar result.\na + b = ab cos -.\nPerpendicular = 0.\nWork done!",
          color: getReelColor(0),
        },
        {
          id: "r2",
          title: "Cross Product",
          content:
            "Vector result.\na + b = ab sin - n^.\nParallel = 0.\nTorque!",
          color: getReelColor(1),
        },
        {
          id: "r3",
          title: "Triple Product",
          content: "[a b c] = a + (b + c).\nVolume of box.\nCoplanar check.",
          color: getReelColor(2),
        },
        {
          id: "r4",
          title: "Section Formula",
          content:
            "Internal: (mb+na)/(m+n).\nExternal: (mb-na)/(m-n).\nMidpoint: (a+b)/2.",
          color: getReelColor(3),
        },
        {
          id: "r5",
          title: "Unit Vector",
          content: "n^ = a / |a|.\nMagnitude = 1.\nGives direction.",
          color: getReelColor(4),
        },
        {
          id: "r6",
          title: "Projection",
          content: "Shadow of a on b.\n(a + b) / |b|.\nScalar value.",
          color: getReelColor(5),
        },
      ],
    },
  ],
};
