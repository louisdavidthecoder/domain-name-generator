  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['taylorswift','lanadelrey'];

 
  var domainGenerator = (pronoun, adj, noun) => {
  for (var i = 0; i < pronoun.length; i++ ) {
    for (var j = 0; j < adj.length; j++) {
        for (var r = 0; r < noun.length; r++) {
        console.log( pronoun[i] + adj[j] + noun[r] + ".com");
        }
    }
}
  
};
  domainGenerator(pronoun, adj, noun);