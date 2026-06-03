const day09 = {
  day: 9,
  topic: "Rational Functions & Structural Graphing",
  module: "Functions, Sets & Inverse Rigor",
  color: "#0891B2",
  problems: [
    {
      num: 1, tier: "TIER 1", label: "Core Fluency",
      questionText: "State the equations of the vertical and horizontal asymptotes for the rational function:",
      latex: "f(x) = \\dfrac{4}{x - 3} + 2",
      hint: "The vertical asymptote is where the denominator equals zero. The horizontal asymptote is the value f(x) approaches as x tends to infinity.",
      answerLatex: "\\text{VA: } x = 3, \\quad \\text{HA: } y = 2",
      workingLatex:
        "\\text{VA: }x-3=0\\implies x=3\\\\[4pt]" +
        "\\text{As }x\\to\\pm\\infty:\\;\\frac{4}{x-3}\\to0\\\\[4pt]" +
        "\\therefore\\text{HA: }y=2",
    },
    {
      num: 2, tier: "TIER 1", label: "Core Fluency",
      questionText: "Express g(x) in the form A/(x+1) + B, where A and B are integers:",
      latex: "g(x) = \\dfrac{x + 5}{x + 1}",
      hint: "Rewrite the numerator by adding and subtracting 1 to create a multiple of (x+1) plus a remainder.",
      answerLatex: "g(x) = \\dfrac{4}{x+1} + 1 \\quad (A=4,\\; B=1)",
      workingLatex:
        "\\frac{x+5}{x+1} = \\frac{(x+1)+4}{x+1}\\\\[4pt]" +
        "= \\frac{x+1}{x+1} + \\frac{4}{x+1}\\\\[4pt]" +
        "= 1 + \\frac{4}{x+1}\\\\[4pt]" +
        "\\therefore A=4,\\;B=1",
    },
    {
      num: 3, tier: "TIER 1", label: "Core Fluency",
      questionText: "Find the coordinates of the x-intercept and y-intercept for the rational curve:",
      latex: "h(x) = \\dfrac{2x - 6}{x + 4}",
      hint: "For y-intercept: set x=0. For x-intercept: set the numerator equal to zero.",
      answerLatex: "x\\text{-intercept: }(3,\\,0), \\quad y\\text{-intercept: }\\left(0,\\,-\\dfrac{3}{2}\\right)",
      workingLatex:
        "y\\text{-intercept: }h(0)=\\frac{-6}{4}=-\\frac{3}{2}\\implies\\left(0,-\\frac{3}{2}\\right)\\\\[4pt]" +
        "x\\text{-intercept: }2x-6=0\\implies x=3\\implies(3,0)",
    },
    {
      num: 4, tier: "TIER 1", label: "Core Fluency",
      questionText: "State the natural domain and range for the rational function:",
      latex: "f(x) = -\\dfrac{1}{x + 2} - 5",
      hint: "The domain excludes where the denominator is zero. The range excludes the horizontal asymptote value.",
      answerLatex: "\\text{Domain: }\\{x\\in\\mathbb{R}\\mid x\\neq-2\\}, \\quad \\text{Range: }\\{y\\in\\mathbb{R}\\mid y\\neq-5\\}",
      workingLatex:
        "\\text{Domain: }x+2\\neq0\\implies x\\neq-2\\\\[4pt]" +
        "\\text{Range: }-\\frac{1}{x+2}\\text{ can never equal }0\\\\[4pt]" +
        "\\therefore f(x)\\text{ can never equal }-5\\\\[4pt]" +
        "\\text{Range: }\\{y\\in\\mathbb{R}\\mid y\\neq-5\\}",
    },
    {
      num: 5, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Express g(x) in the form A/(x+2) + B, then identify all asymptotes and axis intercepts:",
      latex: "g(x) = \\dfrac{3x + 11}{x + 2}",
      hint: "Force 3(x+2) out of the numerator to isolate the remainder. The transformed form directly reveals the asymptotes.",
      answerLatex: "g(x) = \\dfrac{5}{x+2} + 3, \\quad \\text{VA: }x=-2,\\; \\text{HA: }y=3",
      workingLatex:
        "\\frac{3x+11}{x+2} = \\frac{3(x+2)+5}{x+2}\\\\[4pt]" +
        "= \\frac{5}{x+2} + 3\\\\[4pt]" +
        "\\text{VA: }x=-2,\\quad\\text{HA: }y=3\\\\[4pt]" +
        "y\\text{-intercept: }g(0)=\\frac{11}{2}=5.5\\implies(0,\\,5.5)\\\\[4pt]" +
        "x\\text{-intercept: }3x+11=0\\implies x=-\\frac{11}{3}\\approx-3.67",
    },
    {
      num: 6, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Determine the coordinates of the centre of symmetry (intersection of asymptotes) for the rational function:",
      latex: "h(x) = \\dfrac{7 - 4x}{2x - 3}",
      hint: "Find the vertical asymptote from the denominator and the horizontal asymptote from the ratio of leading coefficients. Their intersection is the centre of symmetry.",
      answerLatex: "\\text{Centre of symmetry: }\\left(\\dfrac{3}{2},\\,-2\\right)",
      workingLatex:
        "\\text{VA: }2x-3=0\\implies x=\\frac{3}{2}\\\\[4pt]" +
        "\\text{HA: ratio of leading coefficients }=\\frac{-4}{2}=-2\\\\[4pt]" +
        "\\therefore\\text{Centre: }\\left(\\frac{3}{2},\\,-2\\right)",
    },
    {
      num: 7, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "A rational function has a vertical asymptote at x = minus 4 and a horizontal asymptote at y = 3. Find the values of a and b:",
      latex: "f(x) = \\dfrac{ax + 3}{2x + b}",
      hint: "VA gives you b by setting the denominator to zero at x=minus 4. HA gives you a by comparing leading coefficients.",
      answerLatex: "a = 6, \\quad b = 8",
      workingLatex:
        "\\text{VA at }x=-4:\\;2(-4)+b=0\\implies b=8\\\\[4pt]" +
        "\\text{HA at }y=3:\\;\\frac{a}{2}=3\\implies a=6\\\\[4pt]" +
        "\\text{Verify: }f(x)=\\frac{6x+3}{2x+8}\\implies\\text{VA }x=-4,\\;\\text{HA }y=3\\;\\checkmark",
    },
    {
      num: 8, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Find all asymptotes and any removable discontinuities (holes) for the function:",
      latex: "g(x) = \\dfrac{x^2 - 16}{x^2 - 2x - 8}",
      hint: "Factorise both numerator and denominator completely. A common factor that cancels creates a hole, not an asymptote.",
      answerLatex: "\\text{VA: }x=-2,\\; \\text{HA: }y=1,\\; \\text{Hole: }\\left(4,\\,\\dfrac{4}{3}\\right)",
      workingLatex:
        "\\text{Numerator: }(x-4)(x+4)\\\\[4pt]" +
        "\\text{Denominator: }(x-4)(x+2)\\\\[4pt]" +
        "(x-4)\\text{ cancels}\\implies\\text{hole at }x=4\\\\[4pt]" +
        "\\text{Hole height: }\\frac{4+4}{4+2}=\\frac{8}{6}=\\frac{4}{3}\\implies\\left(4,\\frac{4}{3}\\right)\\\\[4pt]" +
        "\\text{Simplified: }\\frac{x+4}{x+2}\\\\[4pt]" +
        "\\text{VA: }x+2=0\\implies x=-2\\\\[4pt]" +
        "\\text{HA: equal degrees}\\implies y=\\frac{1}{1}=1",
    },
    {
      num: 9, tier: "TIER 3", label: "IB Examiner's Edge",
      questionText: "For the rational mapping h(x) defined below: (a) find the inverse function h inverse(x), and (b) show that the asymptotes of h(x) and h inverse(x) swap roles completely:",
      latex: "h(x) = \\dfrac{2x + 1}{x - 1}, \\quad x \\neq 1",
      hint: "Swap x and y and solve for y to find the inverse. Then compare the asymptotes of h(x) with those of h inverse(x).",
      answerLatex: "h^{-1}(x) = \\dfrac{x+1}{x-2}, \\quad \\text{VA: }x=2,\\; \\text{HA: }y=1",
      workingLatex:
        "x=\\frac{2y+1}{y-1}\\implies x(y-1)=2y+1\\\\[4pt]" +
        "xy-x=2y+1\\implies y(x-2)=x+1\\\\[4pt]" +
        "h^{-1}(x)=\\frac{x+1}{x-2}\\\\[6pt]" +
        "\\text{Original }h(x):\\text{ VA }x=1,\\text{ HA }y=2\\\\[4pt]" +
        "\\text{Inverse }h^{-1}(x):\\text{ VA }x=2,\\text{ HA }y=1\\\\[4pt]" +
        "\\therefore\\text{asymptotes swap roles}\\;\\checkmark",
    },
    {
      num: 10, tier: "TIER 3", label: "IB Examiner's Edge",
      questionText: "Find all vertical, horizontal, and oblique (slant) asymptotes for the non-linear rational function:",
      latex: "f(x) = \\dfrac{x^2 + 3x - 4}{x + 2}",
      hint: "Numerator degree is 2, denominator degree is 1. Since numerator degree is exactly one more than denominator, there is an oblique asymptote. Use polynomial long division to find it.",
      answerLatex: "\\text{VA: }x=-2, \\quad \\text{Oblique asymptote: }y=x+1",
      workingLatex:
        "\\text{VA: }x+2=0\\implies x=-2\\\\[4pt]" +
        "\\text{Check: numerator at }x=-2:\\;4-6-4=-6\\neq0\\implies\\text{true VA}\\\\[4pt]" +
        "\\text{Degree 2 > degree 1}\\implies\\text{no HA}\\\\[4pt]" +
        "\\text{Long division: }\\frac{x^2+3x-4}{x+2}\\\\[4pt]" +
        "=\\frac{x(x+2)+(x-4)}{x+2}\\\\[4pt]" +
        "=\\frac{x(x+2)+1(x+2)-6}{x+2}\\\\[4pt]" +
        "=(x+1)-\\frac{6}{x+2}\\\\[4pt]" +
        "\\text{As }x\\to\\pm\\infty,\\;\\frac{6}{x+2}\\to0\\\\[4pt]" +
        "\\therefore\\text{Oblique asymptote: }y=x+1",
    },
  ],
};

export default day09;