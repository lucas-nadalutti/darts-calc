$(document).ready(function() {

    $('#choose-front').click(function() {
        $('#scores').data('game', 'front');
        $('#current-game').html('Dardo frontal');
        $('#player1-total').html(301);
        $('#player2-total').html(301);
    });

    $('#choose-rear').click(function() {
        $('#scores').data('game', 'rear');
        $('#current-game').html('Dardo traseiro');
        $('#player1-total').html(0);
        $('#player2-total').html(0);
    });

    $('#submit-player1-score').click(function() {
        calcScore(1);
    });

    $('#submit-player2-score').click(function() {
        calcScore(2);
    });

    function calcScore(playerNumber, submitted, total) {
        var $scoresDiv = $('#scores');
        var submittedScore = parseInt($('#player'+playerNumber+'-score').val());
        var totalScore = parseInt($('#player'+playerNumber+'-total').html());

        if ($scoresDiv.data('game') === 'front') {
            if (totalScore - submittedScore < 0) {
                totalScore = submittedScore - totalScore
            }
            else {            
                totalScore -= submittedScore;
            }
            $('#player'+playerNumber+'-total').html(totalScore);

            if (totalScore == 0) {
                $('#winner-div').show();
                $('#winner').html(playerNumber);
            }
        }
        else if ($scoresDiv.data('game') === 'rear') {
            totalScore += submittedScore;
            $('#player'+playerNumber+'-total').html(totalScore);

            if (totalScore >= 100) {
                $('#winner-div').show();
                $('#winner').html(playerNumber);
            }
        }
        else {
            alert('Escolha um jogo!');
            throw new Error();
        }
    }

});