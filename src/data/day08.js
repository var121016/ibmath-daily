const day08 = {
  day: 8,
  topic: "Inverse Functions & Mapping Conditions",
  module: "Functions, Sets & Inverse Rigor",
  color: "#0891B2",
  problems: [
    {
      num: 1, tier: "TIER 1", label: "Core Fluency",
      questionText: "Given the linear function f defined on all reals by f(x) = 4x minus 7, find an expression for the inverse function:",
      latex: "f(x) = 4x - 7",
      hint: "Set y = f(x), swap x and y, then solve for y.",
      answerLatex: "f^{-1}(x) = \\dfrac{x + 7}{4}",
      workingLatex:
        "y = 4x - 7\\\\[4pt]" +
        "\\text{Swap: }x = 4y - 7\\\\[4pt]" +
        "x + 7 = 4y\\\\[4pt]" +
        "f^{-1}(x) = \\dfrac{x+7}{4}",
    },
    {
      num: 2, tier: "TIER 1", label: "Core Fluency",
      questionText: "For the restricted domain function g: [0, infinity) defined by g(x) = x squared + 3, explain why g(x) is injective (one-to-one) on this domain:",
      latex: "g: [0, \\infty) \\to \\mathbb{R}, \\quad g(x) = x^2 + 3",
      hint: "An unrestricted quadratic is not injective. Explain what the restriction to x greater than or equal to 0 does to the graph's behaviour.",
      answerLatex: "\\text{Strictly increasing on } [0,\\infty) \\implies \\text{injective} \\;\\checkmark",
      workingLatex:
        "g'(x) = 2x \\geq 0 \\text{ for all } x \\in [0,\\infty)\\\\[4pt]" +
        "\\text{Strictly increasing} \\implies \\text{no two inputs give same output}\\\\[4pt]" +
        "\\therefore \\text{passes horizontal line test} \\implies \\text{injective}\\;\\checkmark",
    },
    {
      num: 3, tier: "TIER 1", label: "Core Fluency",
      questionText: "Find the inverse function for the cube root function h defined on all reals:",
      latex: "h(x) = \\sqrt[3]{x - 1}",
      hint: "Swap x and y, then cube both sides to eliminate the cube root.",
      answerLatex: "h^{-1}(x) = x^3 + 1",
      workingLatex:
        "y = \\sqrt[3]{x-1}\\\\[4pt]" +
        "\\text{Swap: }x = \\sqrt[3]{y-1}\\\\[4pt]" +
        "x^3 = y - 1\\\\[4pt]" +
        "h^{-1}(x) = x^3 + 1",
    },
    {
      num: 4, tier: "TIER 1", label: "Core Fluency",
      questionText: "Given the reciprocal function below, determine the inverse and state its geometric relationship to f(x):",
      latex: "f(x) = \\dfrac{5}{x}, \\quad x \\neq 0",
      hint: "Swap x and y and solve for y. Compare f inverse with f itself.",
      answerLatex: "f^{-1}(x) = \\dfrac{5}{x} \\quad (\\text{self-inverse})",
      workingLatex:
        "y = \\frac{5}{x} \\implies x = \\frac{5}{y} \\implies y = \\frac{5}{x}\\\\[4pt]" +
        "f^{-1}(x) = f(x) \\implies \\text{self-inverse}\\\\[4pt]" +
        "\\text{Graph is symmetric about the line }y=x",
    },
    {
      num: 5, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "The function f: [2, infinity) to [5, infinity) is defined by f(x) = (x minus 2) squared + 5. Prove that f(x) is surjective (onto):",
      latex: "f: [2,\\infty) \\to [5,\\infty), \\quad f(x) = (x-2)^2 + 5",
      hint: "A function is surjective if its range equals its stated codomain. Find the range by analysing the vertex and direction of the parabola.",
      answerLatex: "\\text{Range} = [5,\\infty) = \\text{Codomain} \\implies \\text{surjective}\\;\\checkmark",
      workingLatex:
        "\\text{Vertex at }(2,5)\\text{ is the minimum point}\\\\[4pt]" +
        "(x-2)^2 \\geq 0 \\implies f(x) \\geq 5\\text{ for all }x \\in [2,\\infty)\\\\[4pt]" +
        "\\text{As }x\\to\\infty,\\;f(x)\\to\\infty\\\\[4pt]" +
        "\\therefore\\text{Range} = [5,\\infty) = \\text{Codomain}\\;\\checkmark",
    },
    {
      num: 6, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "For the same function f: [2, infinity) to [5, infinity), construct the algebraic rule for the inverse function:",
      latex: "f(x) = (x-2)^2 + 5",
      hint: "Swap x and y, isolate (y minus 2) squared, then take the square root. Choose the correct branch based on the original domain.",
      answerLatex: "f^{-1}(x) = 2 + \\sqrt{x-5}, \\quad \\{x \\in \\mathbb{R} \\mid x \\geq 5\\}",
      workingLatex:
        "x = (y-2)^2 + 5\\\\[4pt]" +
        "x - 5 = (y-2)^2\\\\[4pt]" +
        "y - 2 = \\pm\\sqrt{x-5}\\\\[4pt]" +
        "\\text{Original domain }x\\geq2\\implies\\text{take positive root}\\\\[4pt]" +
        "f^{-1}(x) = 2+\\sqrt{x-5}\\\\[4pt]" +
        "\\text{Domain: }\\{x\\in\\mathbb{R}\\mid x\\geq5\\}",
    },
    {
      num: 7, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Find the inverse of the rational function g(x), stating the domain restriction:",
      latex: "g(x) = \\dfrac{2x + 1}{x - 3}, \\quad x \\neq 3",
      hint: "Swap x and y, multiply both sides by (y minus 3), expand, collect y terms on one side, factorise and isolate y.",
      answerLatex: "g^{-1}(x) = \\dfrac{3x+1}{x-2}, \\quad \\{x \\in \\mathbb{R} \\mid x \\neq 2\\}",
      workingLatex:
        "x = \\frac{2y+1}{y-3}\\\\[4pt]" +
        "x(y-3) = 2y+1\\\\[4pt]" +
        "xy - 3x = 2y + 1\\\\[4pt]" +
        "xy - 2y = 3x + 1\\\\[4pt]" +
        "y(x-2) = 3x+1\\\\[4pt]" +
        "g^{-1}(x) = \\frac{3x+1}{x-2},\\quad x\\neq2",
    },
    {
      num: 8, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Find the inverse function for the restricted radical function h: [\u22121, infinity) to [0, infinity):",
      latex: "h(x) = \\sqrt{3x + 3}",
      hint: "Swap x and y, square both sides, then isolate y. The domain of the inverse equals the range of the original function.",
      answerLatex: "h^{-1}(x) = \\dfrac{x^2 - 3}{3}, \\quad \\{x \\in \\mathbb{R} \\mid x \\geq 0\\}",
      workingLatex:
        "x = \\sqrt{3y+3}\\\\[4pt]" +
        "x^2 = 3y + 3\\\\[4pt]" +
        "x^2 - 3 = 3y\\\\[4pt]" +
        "h^{-1}(x) = \\frac{x^2-3}{3}\\\\[4pt]" +
        "\\text{Domain: range of }h = [0,\\infty)\\implies x\\geq0",
    },
    {
      num: 9, tier: "TIER 3", label: "IB Examiner's Edge",
      questionText: "Show that an inverse function exists for all real x for the cubic function f:",
      latex: "f(x) = x^3 - 3x^2 + 3x + 5",
      hint: "Look for a perfect cube pattern inside the polynomial. Show the function is strictly monotonic (and hence bijective) on all reals.",
      answerLatex: "f(x) = (x-1)^3 + 6 \\implies \\text{strictly increasing} \\implies f^{-1} \\text{ exists}\\;\\checkmark",
      workingLatex:
        "x^3-3x^2+3x+5 = (x^3-3x^2+3x-1)+6\\\\[4pt]" +
        "= (x-1)^3 + 6\\\\[4pt]" +
        "f'(x) = 3(x-1)^2 \\geq 0\\text{ for all }x\\in\\mathbb{R}\\\\[4pt]" +
        "f'(x)=0\\text{ only at }x=1\\text{ (single point, not interval)}\\\\[4pt]" +
        "\\therefore\\text{ strictly increasing}\\implies\\text{injective}\\\\[4pt]" +
        "\\text{Range} = \\mathbb{R}\\implies\\text{surjective}\\\\[4pt]" +
        "\\therefore\\text{ bijective}\\implies f^{-1}\\text{ exists for all }x\\;\\checkmark",
    },
    {
      num: 10, tier: "TIER 3", label: "IB Examiner's Edge",
      questionText: "Find the inverse function and state its exact domain in formal set notation:",
      latex: "f(x) = \\dfrac{e^x + 1}{e^x - 2}",
      hint: "Swap x and y, multiply out the denominator, collect e to the y terms, factorise, then apply natural log. For the domain, find where the ln argument is strictly positive.",
      answerLatex: "f^{-1}(x) = \\ln\\!\\left(\\dfrac{2x+1}{x-1}\\right), \\quad \\left\\{x \\in \\mathbb{R} \\mid x < -\\dfrac{1}{2} \\text{ or } x > 1\\right\\}",
      workingLatex:
        "x = \\frac{e^y+1}{e^y-2}\\\\[4pt]" +
        "x(e^y-2) = e^y+1\\\\[4pt]" +
        "xe^y - 2x = e^y + 1\\\\[4pt]" +
        "e^y(x-1) = 2x+1\\\\[4pt]" +
        "e^y = \\frac{2x+1}{x-1}\\\\[4pt]" +
        "f^{-1}(x) = \\ln\\!\\left(\\frac{2x+1}{x-1}\\right)\\\\[6pt]" +
        "\\text{Domain: }\\frac{2x+1}{x-1}>0\\\\[4pt]" +
        "\\text{Critical points: }x=-\\tfrac{1}{2},\\;x=1\\\\[4pt]" +
        "\\text{Sign chart: positive when }x<-\\tfrac{1}{2}\\text{ or }x>1\\\\[4pt]" +
        "\\therefore\\left\\{x\\in\\mathbb{R}\\mid x<-\\tfrac{1}{2}\\text{ or }x>1\\right\\}",
    },
  ],
};

export default day08;