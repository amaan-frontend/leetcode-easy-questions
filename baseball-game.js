function calculateBaseballScore(ops) {
    const stack = [];
    let sum = 0;
    var ret = calPoints(param_1);

    for (const op of ops) {
        if (op === 'C') {
            const removedScore = stack.pop();
            sum -= removedScore;
        } else if (op === 'D') {
            const doubleScore = stack[stack.length - 1] * 2;
            stack.push(doubleScore);
            sum += doubleScore;
        } else if (op === '+') {
            const lastTwoScores = stack.slice(-2);
            const newScore = lastTwoScores[0] + lastTwoScores[1];
            stack.push(newScore);
            sum += newScore;
        } else {
            const score = parseInt(op);
            stack.push(score);
            sum += score;
        }
    }

    return sum;
}
