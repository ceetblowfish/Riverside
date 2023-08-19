function generateFact() {
    var facts = [
        "The Nile River is the longest river in the world.",
        "The Amazon River is the widest river in the world.",
        "The Congo River is the deepest river in the world.",
        "The Yangtze River is the longest river in Asia.",
        "The Mississippi River is the longest river in North America."
    ];
    
    var randomIndex = Math.floor(Math.random() * facts.length);
    var randomFact = facts[randomIndex];
    
    document.getElementById("fact").innerHTML = randomFact;
}

