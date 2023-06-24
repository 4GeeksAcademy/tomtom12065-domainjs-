/* eslint-disable */

// //
// let pronoun = ["the", "our"];
// let adj = ["great", "big"];
// let noun = ["jogger", "racoon"];
// //
let generate = () => {
  let pronoun = ["the", "our", "that"];
  let adj = ["great", "big", "tiny"];
  let noun = ["jogger", "racoon", "dog"];
  let org = [".com", ".org", ".net"];

  for (let i = 0; i < pronoun.length; i++)
    for (let j = 0; j < adj.length; j++)
      for (let k = 0; k < noun.length; k++)
        for (let l = 0; l < org.length; l++)
          console.log(pronoun[i] + adj[j] + noun[k] + org[l]);
};
