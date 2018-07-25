
function braces(values) {

    let results = [];

    for (i = 0; i < values.length; i++) {

        let balanced = isBalanced(values[i]);

        results.push(balanced);

    }

    console.log(results);
}

function isBalanced(braces) {

    let openBraces = []
        braceMap = {
            "{": "}",
            "[": "]",
            "(": ")"
        };

    for (i = 0; i < braces.length; i++) {

        let currentBrace = braces[i],
            isClosingBrace = !braceMap[braces[i]];

        if (!openBraces && isClosingBrace) {

            return "NO";
        }

        if (!isClosingBrace) {

            openBraces.push(currentBrace);

        } else {

            let last = openBraces.pop();

            if (braceMap[last] !== currentBrace) {

                return "NO";
            
            }
        }

    }

    if (!!openBraces.length) {

        return "NO";
    }

    return "YES";

}



let a = ['{}()[]', '{[}]', '{([(){}()])}'];

// braces(a)

console.log(isBalanced('{}()[]'));