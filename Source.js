/* source file for the sort/shuffle numbers */

   ColNumbers = {
       1: '#2B8EAD', 2:'#333333', 3:'#6F98A8', 4:'#72C3DC',
       5: '#000000', 6:'#BFBFBF', 7:'#EFEFEF', 8:'#2F454E', 9:'#72C3DC'
    }

    var cdoc = document.getElementById("myCanvas");
    var ctx = cdoc.getContext("2d");

    settingBoxRegular();    // Initially loading 

    function settingBoxRegular() {

        console.clear();
        console.log("---------------------------------------------------------------")
        console.log("                  SORTING - REGULAR                            ")
        console.log("---------------------------------------------------------------")

        var r = 1, c = 1; _boxLength = 100; _boxWidth = 100;

        _colSet = 1;
        _colorArrayElement = 0;
        _textCol = 50; _numbers = 1;

        for (let i = 1; i <= 3; i++) 
        {
            _rowSet = 1;

            if (i == 3) this._colSet = 201;
           
            console.log("Parrent-Array: " + i);

            _textRow = 50;

            for (let i = 1; i <= 3; i++) {

                console.log('            --> ' +' Numbers :'+_numbers +' - Colours:' + ColNumbers[this._numbers] +   " :Child Array : "+ i);

                ctx.beginPath();
                ctx.rect(this._rowSet, this._colSet, this._boxLength, this._boxWidth);
                ctx.fillStyle = ColNumbers[_numbers];
                ctx.fill();
                ctx.font = "30pt Calibri";
                ctx.textAlign = "center";
                ctx.fillStyle = "white";
                ctx.fillText(_numbers, this._textRow, this._textCol);
                ctx.font = "13pt Arial";
                ctx.fillStyle="green";
                ctx.fillText("Suffled And Sorted by Adhi Venkatesh",260,340);

                _rowSet = _rowSet + 102;

                _colorArrayElement = _colorArrayElement + 1;

                this._textRow = this._textRow + 100;
                _numbers = _numbers + 1;
            }
            this._colSet = this._colSet + 101;
            this._textCol = this._textCol + 100;
        }
    }

    // Suffled items.

    function settingBoxSuffled()
    {
        console.clear();
        console.log("---------------------------------------------------------------")
        console.log("                  SORTING - SUFFLED                            ")
        console.log("---------------------------------------------------------------")

        var r = 1, c = 1; _boxLength = 100; _boxWidth = 100;

        _colSet = 1;
        _colorArrayElement = 9;
        _textCol = 50; _numbers = 9;

        for (let i = 1; i <= 3; i++) {
           
            _rowSet = 1;

            if (i == 3) this._colSet = 201;
            
            console.log("Parrent-Array: " + i);

            _textRow = 50;

            for (let i = 1; i <= 3; i++) {

                //fillingBoxes(i);
                console.log('            --> ' +' Numbers :'+_numbers +' - Colours:' + ColNumbers[_numbers] +   " :Child Array : "+ i);

                ctx.beginPath();
                ctx.rect(this._rowSet, this._colSet, this._boxLength, this._boxWidth);
                ctx.fillStyle = ColNumbers[_numbers];
                ctx.fill();
                ctx.font        = "30pt Calibri";
                ctx.textAlign   = "center";
                ctx.fillStyle   = "white";
                ctx.fillText(_numbers, this._textRow, this._textCol);
                

                _rowSet = _rowSet + 102;

                _colorArrayElement = _colorArrayElement - 1;

                this._textRow = this._textRow + 100;
                _numbers = _numbers - 1;
            }
        this._colSet  = this._colSet + 101;
        this._textCol = this._textCol + 100;
        }
    }

// function fillingBoxes(i){
//     console.log('            --> ' +' Numbers :'+_numbers +' - Colours:' + ColNumbers[_numbers] +   " :Child Array : "+ i);

//     ctx.beginPath();
//     ctx.rect(this._rowSet, this._colSet, this._boxLength, this._boxWidth);
//     ctx.fillStyle = ColNumbers[_numbers];
//     ctx.fill();
//     ctx.font        = "30pt Calibri";
//     ctx.textAlign   = "center";
//     ctx.fillStyle   = "white";
//     ctx.fillText(_numbers, this._textRow, this._textCol);
    
// }
