class Card{

    primeId: 1;

    name: "";
    lifespand: 0;
    portrait: 0;

    nature: 0;
    industry: 0;
    collectivism: 0;
    individualism: 0;
    violence: 0;
    peace: 0;

    possibleMods: [];
    activeMods: [];

/*
    getCardLoc(pile){ //pile is an array of cards, like player1.playerHand[] or drawPile[]
        return pile.findIndex(i => i.primeId == this.primeId); //return the index of the card within the specified pile
    }

    moveCard(oldLoc, newLoc){    //primeId will likely be passed as cardArray[i].primeId

        

        var oldLocIndex = oldLoc.findIndex(i => i.primeId == this.primeId); //gets the index location of 

        oldLoc.splice(oldLocIndex, 1); //Remove the Card at oldLocIndex
        newLoc.push(this); //Add this to the newLoc
    }
    */
}




class A extends Card{
    primeId: 2;

    name: "";
    lifespand: 10;
    portrait: null;

    nature: 0;
    industry: 1;
    collectivism: 0;
    individualism: 0;
    violence: 2;
    peace: 0;

    possibleMods: [];
    activeMods: [];
}

class B extends Card{
    primeId: 3;

    name: "";
    lifespand: 10;
    portrait: null;

    nature: 1;
    industry: 0;
    collectivism: 0;
    individualism: 2;
    violence: 0;
    peace: 0;

    possibleMods: [];
    activeMods: [];
}

class C extends Card{
    primeId: 5;

    name: "";
    lifespand: 7;
    portrait: null;

    nature: 0;
    industry: 0;
    collectivism: 2;
    individualism: 0;
    violence: 0;
    peace: 1;

    possibleMods: [];
    activeMods: [];
}

class D extends Card{
    primeId: 7;

    name: "";
    lifespand: 7;
    portrait: null;

    nature: 0;
    industry: 0;
    collectivism: 0;
    individualism: 1;
    violence: 0;
    peace: 2;

    possibleMods: [];
    activeMods: [];
}

class E extends Card{
    primeId: 11;

    name: "";
    lifespand: 5;
    portrait: null;

    nature: 2;
    industry: 0;
    collectivism: 0;
    individualism: 0;
    violence: 1;
    peace: 0;

    possibleMods: [];
    activeMods: [];
}

class F extends Card{
    primeId: 13;

    name: "";
    lifespand: 5;
    portrait: null;

    nature: 0;
    industry: 2;
    collectivism: 1;
    individualism: 0;
    violence: 0;
    peace: 0;

    possibleMods: [];
    activeMods: [];
}

class G extends Card{
    primeId: 17;

    name: "";
    lifespand: 3;
    portrait: null;

    nature: 0;
    industry: 0;
    collectivism: 1;
    individualism: 0;
    violence: 2;
    peace: 0;

    possibleMods: [];
    activeMods: [];
}

class H extends Card{
    primeId: 19;

    name: "";
    lifespand: 3;
    portrait: null;

    nature: 0;
    industry: 0;
    collectivism: 0;
    individualism: 2;
    violence: 1;
    peace: 0;

    possibleMods: [];
    activeMods: [];
}

class I extends Card{
    primeId: 23;

    name: "";
    lifespand: 1;
    portrait: null;

    nature: 0;
    industry: 1;
    collectivism: 0;
    individualism: 0;
    violence: 0;
    peace: 2;

    possibleMods: [];
    activeMods: [];
}

class J extends Card{
    primeId: 29;

    name: "";
    lifespand: 1;
    portrait: null;

    nature: 0;
    industry: 2;
    collectivism: 0;
    individualism: 0;
    violence: 0;
    peace: 1;

    possibleMods: [];
    activeMods: [];
}

class K extends Card{
    primeId: 31;

    name: "";
    lifespand: 1;
    portrait: null;

    nature: 2;
    industry: 0;
    collectivism: 0;
    individualism: 1;
    violence: 0;
    peace: 0;

    possibleMods: [];
    activeMods: [];
}

class L extends Card{
    primeId: 37;

    name: "";
    lifespand: 1;
    portrait: null;

    nature: 1;
    industry: 0;
    collectivism: 2;
    individualism: 0;
    violence: 0;
    peace: 0;

    possibleMods: [];
    activeMods: [];
}