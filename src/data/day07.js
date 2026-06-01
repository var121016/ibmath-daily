const day07 = {
  day: 7,
  topic: "Composite Functions & Domain Chaining",
  module: "Functions, Sets & Inverse Rigor",
  color: "#0891B2",
  problems: [
    {
      num: 1, tier: "TIER 1", label: "Core Fluency",
      questionText: "Given f(x) = 3x minus 5 and g(x) = x squared + 2, find an expression for the composite function:",
      latex: "f(g(x))",
      hint: "Substitute the entire expression for g(x) into every x in f(x).",
      answerLatex: "f(g(x)) = 3x^2 + 1",
      workingLatex:
        "f(g(x)) = 3(x^2+2) - 5\\\\[4pt]" +
        "= 3x^2 + 6 - 5\\\\[4pt]" +
        "= 3x^2 + 1",
    },
    {
      num: 2, tier: "TIER 1", label: "Core Fluency",
      questionText: "For f(x) = 2/x and g(x) = x minus 4, find g(f(x)) and state its domain restriction:",
      latex: "f(x) = \\dfrac{2}{x}, \\quad g(x) = x - 4",
      hint: "Substitute f(x) into g(x). The domain restriction comes from the inner function f(x).",
      answerLatex: "g(f(x)) = \\dfrac{2}{x} - 4, \\quad \\{x \\in \\mathbb{R} \\mid x \\neq 0\\}",
      workingLatex:
        "g(f(x)) = \\frac{2}{x} - 4\\\\[4pt]" +
        "\\text{Inner function }f(x)=\\frac{2}{x}\\text{ requires }x\\neq0\\\\[4pt]" +
        "\\therefore\\left\\{x\\in\\mathbb{R}\\mid x\\neq0\\right\\}",
    },
    {
      num: 3, tier: "TIER 1", label: "Core Fluency",
      questionText: "Given f(x) = root x and g(x) = 2x + 1, find the composite expression g(f(x)):",
      latex: "f(x) = \\sqrt{x}, \\quad g(x) = 2x + 1",
      hint: "Substitute f(x) into g(x). Replace every x in g with the square root of x.",
      answerLatex: "g(f(x)) = 2\\sqrt{x} + 1, \\quad \\{x \\in \\mathbb{R} \\mid x \\geq 0\\}",
      workingLatex:
        "g(f(x)) = 2(\\sqrt{x}) + 1\\\\[4pt]" +
        "= 2\\sqrt{x} + 1",
    },
    {
      num: 4, tier: "TIER 1", label: "Core Fluency",
      questionText: "Given f(x) = e to the x and g(x) = 2x, state the composite expression f(g(x)):",
      latex: "f(x) = e^x, \\quad g(x) = 2x",
      hint: "Substitute g(x) into the exponent of f(x).",
      answerLatex: "f(g(x)) = e^{2x}",
      workingLatex:
        "f(g(x)) = e^{(2x)}\\\\[4pt]" +
        "= e^{2x}",
    },
    {
      num: 5, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Given f(x) = x squared + 3 and g(x) = root (x minus 1), find f(g(x)) and state its true domain:",
      latex: "f(x) = x^2 + 3, \\quad g(x) = \\sqrt{x-1}",
      hint: "After simplifying f(g(x)), the result looks unrestricted â€” but check the domain of the inner function g(x). That restriction survives.",
      answerLatex: "f(g(x)) = x + 2, \\quad \\{x \\in \\mathbb{R} \\mid x \\geq 1\\}",
      workingLatex:
        "f(g(x)) = (\\sqrt{x-1})^2 + 3\\\\[4pt]" +
        "= x - 1 + 3 = x + 2\\\\[4pt]" +
        "\\text{But inner }g(x)=\\sqrt{x-1}\\text{ requires }x-1\\geq0\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x\\geq1\\}",
    },
    {
      num: 6, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "For f(x) = 1/(x minus 2) and g(x) = 3/x, find f(g(x)) and identify all domain exclusions:",
      latex: "f(x) = \\dfrac{1}{x-2}, \\quad g(x) = \\dfrac{3}{x}",
      hint: "Substitute g(x) into f(x) and simplify. Then find where the inner function fails AND where the composite denominator equals zero.",
      answerLatex: "f(g(x)) = \\dfrac{x}{3-2x}, \\quad \\left\\{x \\in \\mathbb{R} \\mid x \\neq 0,\\; x \\neq \\dfrac{3}{2}\\right\\}",
      workingLatex:
        "f(g(x)) = \\frac{1}{\\frac{3}{x}-2}\\\\[4pt]" +
        "= \\frac{1}{\\frac{3-2x}{x}} = \\frac{x}{3-2x}\\\\[4pt]" +
        "\\text{Restriction 1: }g(x)\\text{ requires }x\\neq0\\\\[4pt]" +
        "\\text{Restriction 2: }3-2x\\neq0\\implies x\\neq\\tfrac{3}{2}\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x\\neq0,\\;x\\neq\\tfrac{3}{2}\\}",
    },
    {
      num: 7, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Let f(x) = ln(x) and g(x) = x squared minus 9. Construct f(g(x)) and state its valid real domain:",
      latex: "f(x) = \\ln(x), \\quad g(x) = x^2 - 9",
      hint: "The argument of ln must be strictly positive. Set x squared minus 9 greater than zero and solve the quadratic inequality.",
      answerLatex: "f(g(x)) = \\ln(x^2-9), \\quad \\{x \\in \\mathbb{R} \\mid x > 3 \\text{ or } x < -3\\}",
      workingLatex:
        "f(g(x)) = \\ln(x^2-9)\\\\[4pt]" +
        "\\text{Require }x^2-9>0\\\\[4pt]" +
        "(x-3)(x+3)>0\\\\[4pt]" +
        "\\text{Positive outside roots}\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid x<-3\\text{ or }x>3\\}",
    },
    {
      num: 8, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Given f(x) = root (x + 4) and g(x) = 3 minus x squared, find f(g(x)) and its continuous real domain:",
      latex: "f(x) = \\sqrt{x+4}, \\quad g(x) = 3 - x^2",
      hint: "Substitute g(x) into f(x) and simplify inside the radical. Then set the radicand greater than or equal to zero.",
      answerLatex: "f(g(x)) = \\sqrt{7-x^2}, \\quad \\{x \\in \\mathbb{R} \\mid -\\sqrt{7} \\leq x \\leq \\sqrt{7}\\}",
      workingLatex:
        "f(g(x)) = \\sqrt{(3-x^2)+4}\\\\[4pt]" +
        "= \\sqrt{7-x^2}\\\\[4pt]" +
        "7-x^2\\geq0\\implies x^2\\leq7\\\\[4pt]" +
        "\\therefore\\{x\\in\\mathbb{R}\\mid -\\sqrt{7}\\leq x\\leq\\sqrt{7}\\}",
    },
    {
      num: 9, tier: "TIER 3", label: "IB Examiner's Edge",
      questionText: "Let f(x) and g(x) be as defined. Find f(g(x)) and simplify into a single rational form Ax+B over Cx+D:",
      latex: "f(x) = \\dfrac{x+2}{x-1}, \\quad g(x) = \\dfrac{x}{x-3}",
      hint: "Substitute g(x) into f(x). Multiply numerator and denominator by (x minus 3) to clear the compound fractions.",
      answerLatex: "f(g(x)) = x - 2, \\quad \\{x \\in \\mathbb{R} \\mid x \\neq 3\\}",
      workingLatex:
        "f(g(x)) = \\frac{\\frac{x}{x-3}+2}{\\frac{x}{x-3}-1}\\\\[6pt]" +
        "\\text{Multiply top and bottom by }(x-3):\\\\[4pt]" +
        "= \\frac{x+2(x-3)}{x-1(x-3)}\\\\[4pt]" +
        "= \\frac{x+2x-6}{x-x+3}\\\\[4pt]" +
        "= \\frac{3x-6}{3} = x-2\\\\[4pt]\\text{Domain: }g(x)\\text{ undefined at }x=3\\\\[4pt]\\therefore\\{x\\in\\mathbb{R}\\mid x\\neq3\\}",
    },
    {
      num: 10, tier: "TIER 3", label: "IB Examiner's Edge",
      questionText: "State the composite expression g(f(x)) and its complete domain in formal set notation:",
      latex: "f(x) = \\dfrac{1}{x} \\quad \\text{and} \\quad g(x) = \\dfrac{\\sqrt{x+5}}{x-2}",
      hint: "Track three restrictions simultaneously: f(x) requires x not equal to 0, the radical requires its argument to be non-negative, and the composite denominator cannot equal zero.",
      answerLatex: "\\left\\{x \\in \\mathbb{R} \\;\\_middle|\\ x \\leq -\\dfrac{1}{5} \\text{ or } x > 0,\\; x \\neq \\dfrac{1}{2}\\right\\}",
      workingLatex:
        "g(f(x)) = \\frac{\\sqrt{\\frac{1}{x}+5}}{\\frac{1}{x}-2}\\\\[6pt]" +
        "\\text{R1: }f(x)=\\frac{1}{x}\\implies x\\neq0\\\\[4pt]" +
        "\\text{R2: }\\frac{1}{x}+5\\geq0\\implies\\frac{1+5x}{x}\\geq0\\\\[4pt]" +
        "\\text{Sign chart: }x\\leq-\\tfrac{1}{5}\\text{ or }x>0\\\\[4pt]" +
        "\\text{R3: }\\frac{1}{x}-2\\neq0\\implies x\\neq\\tfrac{1}{2}\\\\[4pt]" +
        "\\therefore\\left\\{x\\in\\mathbb{R}\\mid x\\leq-\\tfrac{1}{5}\\text{ or }x>0,\\;x\\neq\\tfrac{1}{2}\\right\\}",
    },
  ],
};

export default day07;