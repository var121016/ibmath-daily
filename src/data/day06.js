const day06 = {
  day: 6,
  topic: "Formal Concept of a Function & Domain Set Restrictions",
  module: "Functions, Sets & Inverse Rigor",
  color: "#0891B2",
  problems: [
    {
      num: 1, tier: "TIER 1", label: "Core Fluency",
      questionText: "State the largest possible real domain for the rational function:",
      latex: "f(x) = \\dfrac{x^2 - 4}{x^2 + 5x + 6}",
      hint: "Factorise the denominator. The domain excludes all values where the denominator equals zero â€” even if a factor cancels with the numerator.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid x \\neq -2,\\; x \\neq -3\\}",
      workingLatex:
        "x^2+5x+6=(x+2)(x+3)\\\\[4pt]" +
        "\\text{Denominator}=0\\text{ when }x=-2\\text{ or }x=-3\\\\[4pt]" +
        "\\text{Note: }(x+2)\\text{ cancels with numerator}\\\\[4pt]" +
        "\\text{but a hole still exists at }x=-2\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x\\neq-2,\\;x\\neq-3\\}",
    },
    {
      num: 2, tier: "TIER 1", label: "Core Fluency",
      questionText: "Find the natural domain of the radical function:",
      latex: "g(x) = \\sqrt{7 - 2x}",
      hint: "For a real-valued square root, the expression inside must be greater than or equal to zero.",
      answerLatex: "\\left\\{x \\in \\mathbb{R} \\;\\_middle|\\ x \\leq \\dfrac{7}{2}\\right\\}",
      workingLatex:
        "7-2x\\geq0\\\\[4pt]" +
        "7\\geq2x\\\\[4pt]" +
        "x\\leq\\dfrac{7}{2}\\\\[4pt]" +
        "\\therefore\\left\\{x\\in\\mathbb{R}\\mid x\\leq\\tfrac{7}{2}\\right\\}",
    },
    {
      num: 3, tier: "TIER 1", label: "Core Fluency",
      questionText: "State the domain restrictions for the logarithmic function:",
      latex: "h(x) = \\ln(3x - 12)",
      hint: "The argument of a natural logarithm must be strictly positive â€” ln(0) is undefined and ln of a negative number does not exist in real numbers.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid x > 4\\}",
      workingLatex:
        "3x-12>0\\\\[4pt]" +
        "3x>12\\\\[4pt]" +
        "x>4\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x>4\\}",
    },
    {
      num: 4, tier: "TIER 1", label: "Core Fluency",
      questionText: "Determine the real domain for the absolute value rational function:",
      latex: "f(x) = \\dfrac{x+1}{|x| - 4}",
      hint: "The denominator cannot equal zero. Solve |x| = 4 to find the excluded values.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid x \\neq 4,\\; x \\neq -4\\}",
      workingLatex:
        "|x|-4\\neq0\\\\[4pt]" +
        "|x|\\neq4\\\\[4pt]" +
        "x\\neq4\\text{ and }x\\neq-4\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x\\neq\\pm4\\}",
    },
    {
      num: 5, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Determine the largest possible real domain for the combined radical function:",
      latex: "g(x) = \\dfrac{\\sqrt{2x + 6}}{x^2 - 9}",
      hint: "Two restrictions apply simultaneously: the numerator requires 2x + 6 is greater than or equal to 0, and the denominator requires x squared minus 9 is not equal to 0. Find the intersection.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid x > -3,\\; x \\neq 3\\}",
      workingLatex:
        "\\text{Numerator: }2x+6\\geq0\\implies x\\geq-3\\\\[4pt]" +
        "\\text{Denominator: }x^2-9\\neq0\\implies x\\neq\\pm3\\\\[4pt]" +
        "\\text{At }x=-3\\text{: numerator}=0,\\text{ denominator}=0\\\\[4pt]" +
        "\\therefore x=-3\\text{ is excluded by denominator}\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x>-3,\\;x\\neq3\\}",
    },
    {
      num: 6, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Find the natural domain of the radical denominator function:",
      latex: "h(x) = \\dfrac{1}{\\sqrt{x^2 - 16}}",
      hint: "The radical is in the denominator so it must be strictly greater than zero â€” not just greater than or equal to zero. Solve the resulting quadratic inequality using a sign diagram.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid x > 4 \\text{ or } x < -4\\}",
      workingLatex:
        "x^2-16>0\\text{ (strictly positive, in denominator)}\\\\[4pt]" +
        "(x-4)(x+4)>0\\\\[4pt]" +
        "\\text{Sign diagram: positive outside the roots}\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x<-4\\text{ or }x>4\\}",
    },
    {
      num: 7, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Determine the largest possible domain for the intersecting radical system:",
      latex: "f(x) = \\sqrt{x - 2} + \\sqrt{5 - x}",
      hint: "Both radicals must be defined simultaneously. Find each constraint separately then take the intersection of the two intervals.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid 2 \\leq x \\leq 5\\}",
      workingLatex:
        "\\text{Constraint 1: }x-2\\geq0\\implies x\\geq2\\\\[4pt]" +
        "\\text{Constraint 2: }5-x\\geq0\\implies x\\leq5\\\\[4pt]" +
        "\\text{Intersection: }x\\geq2\\text{ AND }x\\leq5\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid 2\\leq x\\leq5\\}",
    },
    {
      num: 8, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Determine the domain restrictions for the cubic rational expression:",
      latex: "g(x) = \\dfrac{5x}{x^3 - x}",
      hint: "Factorise the denominator completely to find all values where division by zero occurs.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid x \\neq 0,\\; x \\neq \\pm 1\\}",
      workingLatex:
        "x^3-x=x(x^2-1)=x(x-1)(x+1)\\\\[4pt]" +
        "\\text{Denominator}=0\\text{ when }x=0,\\;x=1,\\;x=-1\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x\\neq0,\\;x\\neq\\pm1\\}",
    },
    {
      num: 9, tier: "TIER 3", label: "IB Examiner's Edge",
      questionText: "Find the natural real domain for the transcendental rational function:",
      latex: "h(x) = \\dfrac{e^x}{\\sqrt{10 - 2x}}",
      hint: "e to the x is defined for all real numbers. The radical is in the denominator so 10 minus 2x must be strictly positive. Find where this fails.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid x < 5\\}",
      workingLatex:
        "\\text{Numerator: }e^x\\text{ defined for all }x\\in\\mathbb{R}\\\\[4pt]" +
        "\\text{Denominator: }10-2x>0\\text{ (strictly, in denominator)}\\\\[4pt]" +
        "10>2x\\implies x<5\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x<5\\}",
    },
    {
      num: 10, tier: "TIER 3", label: "IB Examiner's Edge",
      questionText: "State the complete domain in formal set notation for the multi-concept synthesis function:",
      latex: "f(x) = \\dfrac{\\ln(x + 2)}{\\sqrt{x} \\cdot (x - 4)}",
      hint: "Three restrictions apply simultaneously: ln argument must be positive, square root must be strictly positive (it is in the denominator), and the rational factor cannot equal zero. Find the intersection of all three.",
      answerLatex: "\\{x \\in \\mathbb{R} \\mid x > 0,\\; x \\neq 4\\}",
      workingLatex:
        "\\text{Restriction 1: }\\ln(x+2)\\implies x+2>0\\implies x>-2\\\\[4pt]" +
        "\\text{Restriction 2: }\\sqrt{x}\\text{ in denominator}\\implies x>0\\\\[4pt]" +
        "\\text{Restriction 3: }x-4\\neq0\\implies x\\neq4\\\\[4pt]" +
        "\\text{Intersection of }x>-2\\text{ and }x>0\\implies x>0\\\\[4pt]" +
        "\\text{Apply point exclusion: }x\\neq4\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x>0,\\;x\\neq4\\}",
    },
  ],
};

export default day06;