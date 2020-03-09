Main = {

    self: this

    , init: function () {
        this.addProperties();
        this.addControls();
        this.attachEvents();
        this.setLabels();
        this.changeColor();
    }

    , addControls: function () {
        self.$rngColorRed = document.getElementById('rngColorRed');
        self.$rngColorRed.style.width = '100%';
        self.$rngColorRed.setAttribute('min', '0');
        self.$rngColorRed.setAttribute('max', '255');
        self.$rngColorRed.setAttribute('value', self.$rgbInitialValue);

        self.$rngColorGreen = document.getElementById('rngColorGreen');
        self.$rngColorGreen.style.width = '100%';
        self.$rngColorGreen.setAttribute('min', '0');
        self.$rngColorGreen.setAttribute('max', '255');
        self.$rngColorGreen.setAttribute('value', self.$rgbInitialValue);

        self.$rngColorBlue = document.getElementById('rngColorBlue');
        self.$rngColorBlue.style.width = '100%';
        self.$rngColorBlue.setAttribute('min', '0');
        self.$rngColorBlue.setAttribute('max', '255');
        self.$rngColorBlue.setAttribute('value', self.$rgbInitialValue);

        self.$rngColorAlpha = document.getElementById('rngColorAlpha');
        self.$rngColorAlpha.style.width = '100%';
        self.$rngColorAlpha.setAttribute('min', 0);
        self.$rngColorAlpha.setAttribute('max', 10);
        self.$rngColorAlpha.setAttribute('value', self.$rgbInitialAlphaValue);

        self.$divColorPanel = document.getElementById('divColorPanel');
        self.$divColorPanel.style.height = '100px';
        self.$divColorPanel.style.width = '100%';
        self.$divColorPanel.style.border = 'black 1px solid';

        self.$spRed = document.getElementById('spRed');
        self.$spGreen = document.getElementById('spGreen');
        self.$spBlue = document.getElementById('spBlue');
        self.$spAlpha = document.getElementById('spAlpha');

        self.$btnReset = document.getElementById('btnReset');
        self.$btnReset.style.height = '30px';
        self.$btnReset.style.width = '100%';
    }

    , addProperties: function () {
        self.$rgbInitialValue = 0;
        self.$rgbInitialAlphaValue = 10;
        self.$alpha = (1.0).toFixed(1);
    }

    , attachEvents: function () {
        self.$rngColorRed.addEventListener('input', function () {
            Main.changeColor();
        });

        self.$rngColorGreen.addEventListener('input', function () {
            Main.changeColor();
        });

        self.$rngColorBlue.addEventListener('input', function () {
            Main.changeColor();
        });

        self.$rngColorAlpha.addEventListener('input', function () {
            self.$alpha = Main.chooseAlphaValueIndex(self.$rngColorAlpha.value);
            Main.changeColor();
        });

        self.$btnReset.addEventListener('click', function () {
            Main.reset();
        });
    }

    , chooseAlphaValueIndex: function (index) {
        var values = {
            0: 0.0
            , 1: 0.1
            , 2: 0.2
            , 3: 0.3
            , 4: 0.4
            , 5: 0.5
            , 6: 0.6
            , 7: 0.7
            , 8: 0.8
            , 9: 0.9
            , 10: 1.0
        };

        return values[Number(index)];
    }

    , changeColor: function () {
        Main.setLabels();
        var commandRGB =
            [
                'rgba(' + self.$rngColorRed.value
                , self.$rngColorGreen.value
                , self.$rngColorBlue.value
                , self.$alpha + ')'
            ];
        self.$divColorPanel.style.backgroundColor = commandRGB.join();
    }

    , setLabels: function () {
        self.$spRed.innerText = self.$rngColorRed.value;
        self.$spGreen.innerText = self.$rngColorGreen.value;
        self.$spBlue.innerText = self.$rngColorBlue.value;
        self.$spAlpha.innerText = Number(self.$alpha).toFixed(1);
    }

    , reset: function () {
        self.$rngColorRed.value = self.$rgbInitialValue;
        self.$rngColorGreen.value = self.$rgbInitialValue;
        self.$rngColorBlue.value = self.$rgbInitialValue;
        self.$rngColorAlpha.value = self.$rgbInitialAlphaValue;
        self.$alpha = Main.chooseAlphaValueIndex(self.$rngColorAlpha.value);
        Main.setLabels();
        Main.changeColor();
    }

}
