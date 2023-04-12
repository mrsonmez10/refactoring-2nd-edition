/*
    * Remove duplication
    * Meaningful function name is easier to understand
*/

let appliesToMass = false;
for (const s of states) {
  if (s === "MA") appliesToMass = true;
}

appliesToMass = states.includes("MA")