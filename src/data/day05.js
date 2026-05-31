const day05 = {
  day: 5,
  topic: "The Binomial Theorem",
  module: "Advanced Algebraic Manipulation",
  color: "#0369A1",
  problems: [
    {
      num: 1, tier: "TIER 1", label: "Core Tool Check",
      questionText: "Evaluate the binomial coefficient without using a calculator:",
      latex: "\\binom{6}{3}",
      hint: "Use the formula: the binomial coefficient n choose r equals n! divided by r!(n-r)!",
      answerLatex: "\\binom{6}{3} = 20",
      workingLatex:
        "\\binom{6}{3} = \\frac{6!}{3!\\cdot3!}\\\\[4pt]" +
        "= \\frac{6\\times5\\times4}{3\\times2\\times1}\\\\[4pt]" +
        "= \\frac{120}{6} = 20",
    },
    {
      num: 2, tier: "TIER 1", label: "Core Tool Check",
      questionText: "Write down the first 5 rows of Pascal's Triangle (starting from row 0):",
      latex: "\\text{Rows } 0 \\text{ to } 4",
      hint: "Each entry is the sum of the two entries directly above it. Row 0 starts with just 1.",
      answerLatex: "1 \\;\\; 4 \\;\\; 6 \\;\\; 4 \\;\\; 1 \\quad (\\text{row 4})",
      workingLatex:
        "\\text{Row 0: }\\quad 1\\\\[4pt]" +
        "\\text{Row 1: }\\quad 1\\quad 1\\\\[4pt]" +
        "\\text{Row 2: }\\quad 1\\quad 2\\quad 1\\\\[4pt]" +
        "\\text{Row 3: }\\quad 1\\quad 3\\quad 3\\quad 1\\\\[4pt]" +
        "\\text{Row 4: }\\quad 1\\quad 4\\quad 6\\quad 4\\quad 1",
    },
    {
      num: 3, tier: "TIER 1", label: "Core Tool Check",
      questionText: "Expand completely using binomial coefficients:",
      latex: "(x + 2)^3",
      hint: "Use the binomial theorem with a = x, b = 2, n = 3. The coefficients from Pascal's triangle are 1, 3, 3, 1.",
      answerLatex: "x^3 + 6x^2 + 12x + 8",
      workingLatex:
        "\\binom{3}{0}x^3 + \\binom{3}{1}x^2(2) + \\binom{3}{2}x(2)^2 + \\binom{3}{3}(2)^3\\\\[4pt]" +
        "= x^3 + 3(2)x^2 + 3(4)x + 8\\\\[4pt]" +
        "= x^3 + 6x^2 + 12x + 8",
    },
    {
      num: 4, tier: "TIER 1", label: "Core Tool Check",
      questionText: "Write down the general term formula for the expansion of (a + b) to the power n:",
      latex: "(a + b)^n",
      hint: "The general term is the (r+1)th term. It involves the binomial coefficient n choose r.",
      answerLatex: "T_{r+1} = \\binom{n}{r}\\,a^{n-r}\\,b^{r}",
      workingLatex:
        "(a+b)^n = \\sum_{r=0}^{n}\\binom{n}{r}a^{n-r}b^r\\\\[6pt]" +
        "\\text{General term: }T_{r+1} = \\binom{n}{r}a^{n-r}b^r\\\\[4pt]" +
        "\\text{where } r = 0, 1, 2, \\ldots, n",
    },
    {
      num: 5, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Find the coefficient of x\u2074 in the expansion of (3x \u2212 2)\u2076:",
      latex: "(3x - 2)^6",
      hint: "Write the general term with a = 3x, b = -2, n = 6. Set the power of x equal to 4 to find r, then calculate.",
      answerLatex: "\\text{Coefficient of } x^4 = 4860",
      workingLatex:
        "T_{r+1} = \\binom{6}{r}(3x)^{6-r}(-2)^r\\\\[4pt]" +
        "\\text{Power of }x:\\; 6-r=4 \\implies r=2\\\\[4pt]" +
        "T_3 = \\binom{6}{2}(3)^4(-2)^2\\\\[4pt]" +
        "= 15 \\times 81 \\times 4\\\\[4pt]" +
        "= 4860",
    },
    {
      num: 6, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Find the constant term (the term independent of x) in the expansion of:",
      latex: "\\left(x^2 + \\frac{2}{x}\\right)^6",
      hint: "Write the general term. The power of x in each term is 2(6-r) minus r. Set this equal to 0 to find r.",
      answerLatex: "\\text{Constant term} = 240",
      workingLatex:
        "T_{r+1} = \\binom{6}{r}(x^2)^{6-r}\\left(\\frac{2}{x}\\right)^r\\\\[4pt]" +
        "= \\binom{6}{r}\\cdot2^r\\cdot x^{12-2r-r}\\\\[4pt]" +
        "\\text{Set power of }x = 0:\\;12-3r=0\\implies r=4\\\\[4pt]" +
        "T_5 = \\binom{6}{4}\\cdot2^4 = 15\\times16 = 240",
    },
    {
      num: 7, tier: "TIER 2", label: "Multi-Step Twist",
      questionText: "Expand and simplify completely:",
      latex: "(1 + \\sqrt{2})^4",
      hint: "Apply the binomial theorem with a = 1, b = root 2, n = 4. Simplify each power of root 2.",
      answerLatex: "17 + 12\\sqrt{2}",
      workingLatex:
        "\\binom{4}{0}(1)^4 + \\binom{4}{1}(\\sqrt{2}) + \\binom{4}{2}(\\sqrt{2})^2 + \\binom{4}{3}(\\sqrt{2})^3 + \\binom{4}{4}(\\sqrt{2})^4\\\\[4pt]" +
        "= 1 + 4\\sqrt{2} + 6(2) + 4(2\\sqrt{2}) + 4\\\\[4pt]" +
        "= 1 + 4\\sqrt{2} + 12 + 8\\sqrt{2} + 4\\\\[4pt]" +
        "= 17 + 12\\sqrt{2}",
    },
    {
      num: 8, tier: "TIER 3", label: "Show That\u2026",
      questionText: "Show that the coefficient of x\u00b3 in the expansion of (1 + 2x)\u207f is:",
      latex: "\\frac{4}{3}n(n-1)(n-2)",
      hint: "Write the general term of (1 + 2x) to the n. Find the term where the power of x is 3, then simplify the binomial coefficient.",
      answerLatex: "\\text{Coefficient of }x^3 = \\tfrac{4}{3}n(n-1)(n-2)\\;\\checkmark",
      workingLatex:
        "T_{r+1} = \\binom{n}{r}(2x)^r = \\binom{n}{r}2^r x^r\\\\[4pt]" +
        "\\text{For }x^3:\\; r=3\\\\[4pt]" +
        "\\text{Coefficient} = \\binom{n}{3}\\cdot2^3 = \\frac{n!}{3!(n-3)!}\\cdot8\\\\[4pt]" +
        "= \\frac{n(n-1)(n-2)}{6}\\cdot8\\\\[4pt]" +
        "= \\frac{8n(n-1)(n-2)}{6} = \\frac{4n(n-1)(n-2)}{3}\\;\\checkmark",
    },
    {
      num: 9, tier: "TIER 3", label: "Show That\u2026",
      questionText: "By considering the binomial expansion of (1 + 1)\u207f, prove that the sum of all binomial coefficients in row n equals 2\u207f:",
      latex: "\\binom{n}{0}+\\binom{n}{1}+\\binom{n}{2}+\\cdots+\\binom{n}{n}=2^n",
      hint: "Substitute a = 1 and b = 1 into the binomial theorem formula for (a + b) to the power n.",
      answerLatex: "\\sum_{r=0}^{n}\\binom{n}{r} = 2^n\\;\\checkmark",
      workingLatex:
        "(a+b)^n = \\sum_{r=0}^{n}\\binom{n}{r}a^{n-r}b^r\\\\[4pt]" +
        "\\text{Set }a=1,\\;b=1:\\\\[4pt]" +
        "(1+1)^n = \\sum_{r=0}^{n}\\binom{n}{r}(1)^{n-r}(1)^r\\\\[4pt]" +
        "2^n = \\sum_{r=0}^{n}\\binom{n}{r}\\;\\checkmark",
    },
    {
      num: 10, tier: "TIER 4", label: "Paper 3 Investigation",
      questionText: "The Binomial Approximation. When x is very small (x much less than 1), higher powers of x become negligible and can be ignored.",
      latex: "(1 + x)^5 \\approx 1 + 5x + 10x^2 \\quad (x \\ll 1)",
      multiPart: [
        { label: "(a)", text: "Write down the first three terms of the expansion of (1 + x) to the power 5." },
        { label: "(b)", text: "Set x = 0.01 in your expression to approximate the value of (1.01) to the power 5." },
        { label: "(c)", text: "The true value of (1.01) to the power 5 is 1.0510100501. Verify this is correct." },
        { label: "(d)", text: "Calculate the percentage error of your approximation using: |Approx - True| / True times 100." },
      ],
      hint: "For (b): substitute x = 0.01 into 1 + 5x + 10x squared. For (d): the smaller x is, the more accurate the approximation.",
      answerLatex: "\\text{Approx} = 1.051,\\quad \\%\\text{ error} \\approx 0.0096\\%",
      workingLatex:
        "(a)\\;(1+x)^5 = 1+5x+10x^2+\\cdots\\\\[6pt]" +
        "(b)\\;x=0.01:\\;1+5(0.01)+10(0.0001)\\\\[4pt]" +
        "=1+0.05+0.001=1.051\\\\[6pt]" +
        "(c)\\;(1.01)^5=1.0510100501\\;\\checkmark\\\\[6pt]" +
        "(d)\\;\\%\\text{error}=\\frac{|1.051-1.0510100501|}{1.0510100501}\\times100\\\\[4pt]" +
        "=\\frac{0.0000100501}{1.0510100501}\\times100\\\\[4pt]" +
        "\\approx0.00096\\%",
    },
  ],
};

export default day05;