// DESCRIPTION:
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
function openOrSenior(data) {
    const results = [];

    for (let f = 0; f < data.length; f++) {
        for (let c = 0; c < data[1].length; c++) {
            results.push(data[f][c] >= 55 && data[f][c + 1] > 7 ? 'Senior' : 'Open');
            break;
        }
    }

    return results;
}