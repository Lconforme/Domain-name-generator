function nameGenerator() {
  let alldomains = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".org", ".gov", ".net"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < domain.length; d++)
          alldomains.push(pronoun[p] + adj[a] + noun[n] + domain[d]);
      }
    }
  }
  return alldomains;
}
let all = nameGenerator();
for (let i = 0; i < all.length; i++) {
  document.getElementById("domain").innerHTML += "<p>" + all[i] + "</p>";
}
