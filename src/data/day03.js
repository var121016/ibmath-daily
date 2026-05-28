const day03 = {
  day: 3,
  topic: "Simultaneous Non-Linear Systems & Substitution",
  module: "Advanced Algebraic Manipulation",
  color: "#059669",
  problems: [
    {
      num: 1, tier: "TIER 1", label: "Core Tool Check",
      questionText: "Solve the linear simultaneous system:",
      latex: "\\begin{cases} 3x - 2y = 13 \\\\ 2x + 5y = -4 \\end{cases}",
      hint: "Multiply eq 1 by 5 and eq 2 by 2 to eliminate y, then add.",
      answerLatex: "(x, y) = (3, -2)",
      workingLatex:
        "5(3x-2y)=65\\implies15x-10y=65\\\\[4pt]" +
        "2(2x+5y)=-8\\implies4x+10y=-8\\\\[4pt]" +
        "\\text{Add: }19x=57\\implies x=3\\\\[4pt]" +
        "3(3)-2y=13\\implies y=-2",
    },
    {
      num: 2, tier: "TIER 1", label: "Core Tool Check",
      questionText: "Solve the non-linear system (line meets circle):",
      latex: "\\begin{cases} y = x + 1 \\\\ x^2 + y^2 = 25 \\end{cases}",
      hint: "Substitute y = x+1 into the circle equation and simplify.",
      answerLatex: "(3,\\,4) \\text{ and } (-4,\\,-3)",
      workingLatex:
        "x^2+(x+1)^2=25\\\\[4pt]" +
        "2x^2+2x+1=25\\\\[4pt]" +
        "x^2+x-12=0\\\\[4pt]" +
        "(x+4)(x-3)=0\\\\[4pt]" +
        "x=3\\Rightarrow y=4\\quad x=-4\\Rightarrow y=-3",
    },
    {
      num: 3, tier: "TIER 1", label: "Core Tool Check",
      questionText: "Rearrange to make x the subject:",
      latex: "y = \\dfrac{2x+1}{x-3}",
      hint: "Multiply both sides by (x-3), expand, then collect x terms.",
      answerLatex: "x = \\dfrac{3y+1}{y-2}",
      workingLatex:
        "y(x-3)=2x+1\\\\[4pt]" +
        "xy-3y=2x+1\\\\[4pt]" +
        "xy-2x=3y+1\\\\[4pt]" +
        "x(y-2)=3y+1\\\\[4pt]" +
        "x=\\dfrac{3y+1}{y-2}",
    },
    {
      num: 4, tier: "TIER 1", label: "Core Tool Check",
      questionText: "Find the points of intersection:",
      latex: "y = 2x \\quad \\text{and} \\quad y = \\dfrac{8}{x}",
      hint: "Set equal: 2x = 8/x. Multiply both sides by x.",
      answerLatex: "(2,\\,4) \\text{ and } (-2,\\,-4)",
      workingLatex:
        "2x=\\dfrac{8}{x}\\implies2x^2=8\\implies x^2=4\\\\[4pt]" +
        "x=2\\Rightarrow y=4\\quad x=-2\\Rightarrow y=-4",
    },
    {
      num: 5, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Solve for x (disguised quadratic):",
      latex: "3^{2x} - 10(3^x) + 9 = 0",
      hint: "Let u = 3^x. The equation becomes u^2 - 10u + 9 = 0.",
      answerLatex: "x = 0 \\text{ or } x = 2",
      workingLatex:
        "\\text{Let }u=3^x:\\quad u^2-10u+9=0\\\\[4pt]" +
        "(u-9)(u-1)=0\\\\[4pt]" +
        "u=9\\implies3^x=3^2\\implies x=2\\\\[4pt]" +
        "u=1\\implies3^x=3^0\\implies x=0",
    },
    {
      num: 6, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Solve for positive real values of x and y:",
      latex: "\\begin{cases} xy = 12 \\\\ x^2 - y^2 = 7 \\end{cases}",
      hint: "From eq 1: y = 12/x. Substitute into eq 2 to get a quartic, then let u = xÂ².",
      answerLatex: "(x,\\,y) = (4,\\,3)",
      workingLatex:
        "y=\\dfrac{12}{x}\\implies x^2-\\dfrac{144}{x^2}=7\\\\[4pt]" +
        "x^4-7x^2-144=0\\\\[4pt]" +
        "\\text{Let }u=x^2:\\;(u-16)(u+9)=0\\\\[4pt]" +
        "u=16\\implies x=4\\;(x>0)\\\\[4pt]" +
        "y=\\dfrac{12}{4}=3",
    },
    {
      num: 7, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Find the values of m such that the line does not intersect the curve:",
      latex: "y = mx \\quad \\text{and} \\quad y = x^2 + 4",
      hint: "Set equal, rearrange to quadratic in x, then use \\Delta < 0 for no intersection.",
      answerLatex: "-4 < m < 4",
      workingLatex:
        "mx=x^2+4\\implies x^2-mx+4=0\\\\[4pt]" +
        "\\text{No intersection}\\implies\\Delta<0\\\\[4pt]" +
        "m^2-16<0\\\\[4pt]" +
        "(m-4)(m+4)<0\\\\[4pt]" +
        "-4<m<4",
    },
    {
      num: 8, tier: "TIER 3", label: "Show That\u2026",
      questionText: "Show that for the system to have real solutions, k must satisfy:",
      latex: "\\begin{cases} x + y = k \\\\ x^2 + y^2 = 8 \\end{cases} \\implies -4 \\leq k \\leq 4",
      hint: "Substitute y = k-x into the circle equation. Use \\Delta \\geq 0 for real solutions.",
      answerLatex: "k^2 \\leq 16 \\implies -4 \\leq k \\leq 4 \\;\\checkmark",
      workingLatex:
        "y=k-x\\implies x^2+(k-x)^2=8\\\\[4pt]" +
        "2x^2-2kx+(k^2-8)=0\\\\[4pt]" +
        "\\Delta\\geq0:\\;4k^2-8(k^2-8)\\geq0\\\\[4pt]" +
        "-4k^2+64\\geq0\\implies k^2\\leq16\\\\[4pt]" +
        "-4\\leq k\\leq4\\;\\checkmark",
    },
    {
      num: 9, tier: "TIER 3", label: "Show That\u2026",
      questionText: "Show that the equation reduces to a quadratic and find its valid solution:",
      latex: "\\sqrt{2x+5} - \\sqrt{x+2} = 1",
      hint: "Isolate one radical, square both sides, isolate again, square again.",
      answerLatex: "x = 2 \\;\\checkmark \\quad (x=-2 \\text{ also valid})",
      workingLatex:
        "\\sqrt{2x+5}=1+\\sqrt{x+2}\\\\[4pt]" +
        "2x+5=1+2\\sqrt{x+2}+(x+2)\\\\[4pt]" +
        "x+2=2\\sqrt{x+2}\\\\[4pt]" +
        "\\text{Let }u=\\sqrt{x+2}:\\;u^2=2u\\implies u^2-2u=0\\\\[4pt]" +
        "u(u-2)=0\\implies u=0\\text{ or }u=2\\\\[4pt]" +
        "x+2=0\\implies x=-2\\;\\checkmark\\quad x+2=4\\implies x=2\\;\\checkmark",
    },
    {
      num: 10, tier: "TIER 4", label: "Paper 3 Investigation",
      questionText: "AM-GM Inequality. Let a and b be positive real numbers. Consider: (âˆša âˆ’ âˆšb)Â² â‰¥ 0",
      multiPart: [
        { label: "(a)", text: "Expand the left-hand side." },
        { label: "(b)", text: "Rearrange to show: (a+b)/2 â‰¥ âˆš(ab)." },
        { label: "(c)", text: "When does equality hold?" },
        { label: "(d)", text: "Use AM-GM to find the minimum value of x + 4/x for positive x." },
      ],
      hint: "For (d): let a = x and b = 4/x, then apply the AM-GM result from (b).",
      answerLatex: "\\text{Min value of }x+\\dfrac{4}{x}=4\\text{ at }x=2",
      workingLatex:
        "(a)\\;a-2\\sqrt{ab}+b\\geq0\\\\[4pt]" +
        "(b)\\;a+b\\geq2\\sqrt{ab}\\implies\\dfrac{a+b}{2}\\geq\\sqrt{ab}\\;\\checkmark\\\\[4pt]" +
        "(c)\\;(\\sqrt{a}-\\sqrt{b})^2=0\\implies a=b\\\\[4pt]" +
        "(d)\\;a=x,\\;b=\\tfrac{4}{x}:\\;" +
        "\\dfrac{x+\\frac{4}{x}}{2}\\geq\\sqrt{x\\cdot\\tfrac{4}{x}}=2\\\\[4pt]" +
        "x+\\tfrac{4}{x}\\geq4\\;\\text{(equality when }x=2\\text{)}",
    },
  ],
};

export default day03;