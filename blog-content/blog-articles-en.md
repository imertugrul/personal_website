# Blog Articles — English

Each article is written to stand alone as a page at a URL like
`mrertugrul.com/en/blog/[slug]/`. Suggested slugs are noted under each title.

---

## 1. How to Structure Your IB Computer Science Internal Assessment

**Slug:** `ib-cs-ia-structure`
**Meta description:** A step-by-step guide to structuring the IB DP Computer Science Internal Assessment, from proposal to final submission, based on what examiners actually reward.

Most students lose marks on the IA not because their code is bad, but because the write-up doesn't show the thinking behind it. Examiners aren't grading your program. They're grading whether you can explain a problem, justify your design choices, and evaluate your own solution honestly.

**Start with a real problem, not a cool idea.** The strongest IAs solve something specific for a specific client or user, not "an app that helps students study." Pick a problem you can describe in one sentence, and one where you can name exactly who benefits and how.

**Success criteria come before code.** Write these early and keep them concrete. "The system should be user-friendly" earns nothing. "The system should let a coach record a player's substitution in under 10 seconds" does, because it's testable.

**Document your design decisions as you make them, not after.** Screenshots of early prototypes, notes on why you rejected one data structure for another, records of client feedback. This is where most of the "personal engagement" marks live, and it's nearly impossible to fake convincingly after the fact.

**Test against your own success criteria, not general functionality.** Show the system working, and be honest about what doesn't work. A well-documented failure with a clear explanation often scores better than a vague claim that "everything works as intended."

**Evaluation is not a summary.** Go back to each success criterion individually and say whether it was met, how you know, and what you'd change with more time. This section is short in most IAs and shouldn't be.

The 35-hour time allocation goes fast once you're coding. Budget real time for the write-up, not just the build.

---

## 2. 5 Recursion Problems Every AP CS A Student Should Try

**Slug:** `ap-csa-recursion-problems`
**Meta description:** Five recursion problems that build real intuition for AP Computer Science A, ordered from foundational to exam-level difficulty.

Recursion is the topic that quietly decides how comfortable students feel walking into the AP CS A exam. It shows up in free-response questions almost every year, and it's one of the few areas where memorizing a template doesn't help, because each problem needs its own base case and recursive step.

**1. Sum of digits.** Given an integer, return the sum of its digits recursively. This is the simplest place to practice identifying a base case and reducing the problem size on each call.

**2. Reverse a string.** Write a recursive method that reverses a String without using loops. It forces you to think about what happens on the way back up the call stack, not just on the way down.

**3. Power function.** Implement `power(base, exponent)` recursively. Once this feels easy, try the faster version that halves the exponent each call. Comparing the two is a good way to understand recursive efficiency, which shows up on the exam.

**4. Array search variants.** Write recursive methods to find the maximum value in an array, and separately, to count how many times a value appears. Arrays and recursion together are a common exam pairing.

**5. Simple 2D grid traversal.** A recursive method that counts paths from one corner of a grid to another, moving only right or down. This is harder, and it's close to the level of the hardest free-response recursion questions.

Work through these on paper before typing anything. Trace the call stack by hand for at least one of them. Students who can draw what's happening usually do better under exam pressure than students who only know the pattern.

---

## 3. Pseudocode Mistakes That Cost IGCSE Marks

**Slug:** `igcse-pseudocode-mistakes`
**Meta description:** The small pseudocode habits that quietly cost IGCSE Computer Science marks, and how to fix each one.

Cambridge and Edexcel both grade pseudocode against a specific style, and small formatting habits cost more marks than most students realize. None of these mistakes are about understanding the logic. They're about how it's written down.

**Mixing assignment symbols.** Cambridge pseudocode uses `←` for assignment, not `=`. Using `=` throughout looks like a small thing, but graders are trained to flag it, and it happens on nearly every script.

**Forgetting to close loops and conditionals properly.** `IF... THEN... ENDIF`, `FOR... NEXT`, `WHILE... ENDWHILE`. Leaving these open, or closing them with the wrong keyword, reads as a structural error even when the logic inside is correct.

**Vague variable names.** `x`, `temp`, `a1` don't communicate intent. Examiners can follow `studentScore` or `totalCount` far more easily, and clearer naming reduces the chance of losing marks on unrelated questions where they're trying to trace your logic.

**Inconsistent indentation.** Pseudocode isn't graded like Python, where indentation is required to run. But consistent indentation is how examiners see the structure of your nested loops and conditionals at a glance. Flat, unindented pseudocode makes correct logic look wrong.

**Skipping the algorithm design step entirely.** Some students jump straight to writing code once they understand the logic. But a large share of IGCSE marks are allocated to the design process itself, not just the final answer, and pseudocode is where that process is shown.

None of these fixes take long to learn. They just take a habit of writing pseudocode formally from day one, rather than treating it as an afterthought before the "real" programming starts.

---

## 4. How to Approach the AP CS Principles Create Performance Task

**Slug:** `ap-csp-create-task`
**Meta description:** A practical breakdown of the AP CS Principles Create Performance Task, from choosing a program idea to writing the required responses.

The Create Performance Task is where most AP CS Principles students either pull ahead or fall behind, because it isn't graded on how impressive the program looks. It's graded on whether your written responses clearly explain what the program does and why you built it the way you did.

**Pick a program you can explain simply.** A program with one clear purpose and a manageable number of features almost always scores better than an ambitious one you can't fully document. Judges are reading your written responses closely, and vague explanations of a complex program score worse than clear explanations of a simple one.

**Identify your list early, and use it meaningfully.** The task requires a list (or comparable data structure) that plays a role in your program's logic, not one that's just declared and ignored. Decide what the list stores and how the program uses it before you start building.

**Document your procedure with a parameter that changes behavior.** You need a student-developed procedure that has at least one parameter, and that parameter needs to meaningfully affect what the procedure does. This is one of the most commonly under-explained parts of the task.

**Write the responses as you build, not after.** The video and written responses ask you to explain algorithms, abstraction, and data use in your own words. If you wait until the program is finished, you'll spend hours trying to reconstruct decisions you've already forgotten the reasoning behind.

**Keep the video under the time limit and focused.** It only needs to demonstrate the program running and the input/output behavior you're describing. It doesn't need production values.

Students who succeed here treat the written component as equal in importance to the code, not as paperwork to finish afterward.

---

## 5. What to Expect in AP Cybersecurity, College Board's Newest Course

**Slug:** `ap-cybersecurity-overview`
**Meta description:** An overview of AP Cybersecurity, College Board's newest AP course launching nationally in 2026, including structure, skills, and exam timeline.

AP Cybersecurity is College Board's newest course, part of the new AP Career Kickstart program, and it's launching nationally for the 2026 to 2027 school year with the first exam in May 2027. No prior coding experience is required, which makes it accessible to students who haven't taken AP CS A or CS Principles.

**The course is built around three core skills.** Analyzing risk, mitigating risk, and detecting attacks. Rather than teaching cybersecurity as one broad topic, the course structures everything around these three actions, applied across five units.

**It covers defense across multiple layers.** Physical spaces, networks, devices, applications, and data each get their own unit, and students learn how threats and defenses differ across each layer rather than treating cybersecurity as a single skill.

**Labs are hands-on, not just theoretical.** Students work through realistic attack scenarios and practice both defending systems and understanding how attacks are carried out, which is closer to how cybersecurity is actually practiced professionally.

**It's designed to align with industry expectations.** The course maps to the NICE Workforce Framework, the same framework used by many employers and certification bodies, so the skills taught aren't just exam skills.

**College credit and an industry credential are both on the table.** Like other AP courses, a strong exam score can earn college credit. But the course is also designed to signal readiness for entry-level cybersecurity roles or further study, which is unusual among AP courses.

Because it's brand new, there isn't yet a large bank of past exam questions the way there is for AP CS A. Early cohorts should expect the course content and skills to matter more than exam pattern-matching, at least for the first few exam cycles.
