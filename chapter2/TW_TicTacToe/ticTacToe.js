const menu = require('./menu'); // use it e.g. like menu.get_menu_option()
const board = require('./boards');
const coordinate = require('./coordinates');


const HUMAN_VS_HUMAN = 1
const RANDOM_AI_VS_RANDOM_AI = 2
const HUMAN_VS_RANDOM_AI = 3
const HUMAN_VS_UNBEATABLE_AI = 4

function main() {
    
    let gameMode = menu.getMenuOption();
    let gameBoard = board.getEmptyBoard();
    let isGameRunning = true;

    while (isGameRunning) {

        board.displayNoard(board);
        
        /*
        ### TO DO ###
        # in each new iteration of the while loop the program should 
        # alternate the value of `current_player` from `X` to `O`
        */
        let currentPlayer = 'X';
        
        /*
        ### TO DO ###
        # based on the value of the variables `game_mode` and `current_player` 
        # the programm should should choose betwen the functions
        # get_random_ai_coordinates or get_umbeatable_ai_coordinates or get_human_coordinates
        */
        let humanCoord = coordinate.getHumanCoordinates(board, current_player);
        
        gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;
        
        /*
        ### TO DO ###
        # based on the values of `winning_player` and `its_a_tie` the program
        # should either stop displaying a winning/tie message 
        # OR continue the while loop
        */
        let winningPlayer = board.getWinningPlayer(gameBoard)
        let itsATie = board.isBoardFull(gameBoard)
    }
}

main();