Act as a senior product engineer and product designer.

I need to design the questionnaire schema for a checking account recommendation app.

Goal:
Create a practical MVP questionnaire that is mostly multiple choice, easy to complete, and strong enough to produce meaningful recommendations.

I need:
1. Categories
2. 20–35 MVP questions only
3. Each question with:
   - id
   - category
   - prompt
   - description if needed
   - answer options
   - default skipped answer
   - optional scoring tags
4. Questions should support:
   - one-question-at-a-time flow
   - review/edit later
   - deterministic recommendation scoring

Focus on:
- fees
- branch access
- ATM usage
- digital banking
- halal sensitivity
- overdraft preferences
- cash deposit needs
- customer support priorities

Output as production-friendly TypeScript-ready JSON structure.