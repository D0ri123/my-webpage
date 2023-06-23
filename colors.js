var Body = {
    setColor: function(character) {
        // document.querySelector('body').style.color = character;
        $('body').css('color', character);
    },
    setBackgroundColor : function(background) {
        //document.querySelector('body').style.backgroundColor = background;
        $('body').css('backgroundColor', background);
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === '🌝') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = '🌞';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '🌝'
    }
}