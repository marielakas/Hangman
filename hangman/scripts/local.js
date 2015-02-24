var local = (function () {

    function addPlayersScore(playerName, score){
        localStorage[playerName] = score;
    }

    function readAllScores() {
        var localScore = [];
        for (var name in localStorage) {
            localScore.push([name, localStorage[name]]);
        }
        return localScore;
    }

    function clearScore() {
        for (var index in localStorage) {
            localStorage.removeItem(index);
        }
    }

    function setTopFive() {
        for (var i = 0; i < score.length; i++) {
            localStorage[score[i][0]] = score[i][1];
        }
    }

    return{
        addPlayersScore: addPlayersScore,
        readAllScores: readAllScores,
        clearScore: clearScore,
        setTopFive: setTopFive
    }
})();