class Keyboard {

    
    constructor() {
        this.LEFT = false;
        this.RIGHT = false;
        this.JUMP = false;
        this.THROW = false;


        /**
         * The buttons for mobile gaming are checked and executed in this event listener. It reacts to pressing and releasing.
         */
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.LEFT = true;
            });

            document.getElementById('btnLeft').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.LEFT = false;
            });
            
            document.getElementById('btnRight').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.RIGHT = true;
            });

            document.getElementById('btnRight').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.RIGHT = false;
            });

            document.getElementById('btnJump').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.JUMP = true;
            });

            document.getElementById('btnJump').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.JUMP = false;
            });

            document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.THROW = true;
            });

            document.getElementById('btnThrow').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.THROW = false;
            });
        });


        /**
         * In this event listener, the pressing of keys on the keyboard is registered and set to true.
         */
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 87) {
                keyboard.JUMP = true;
            }

            if (e.keyCode == 65) {
                keyboard.LEFT = true;
            }

            if (e.keyCode == 68) {
                keyboard.RIGHT = true;
            }

            if (e.keyCode == 32) {
                keyboard.THROW = true;
            }
        });


        /**
         * In this event listener, the release of keys on the keyboard is registered and set to false.
         */
        window.addEventListener('keyup', (e) => {
            if (e.keyCode == 87) {
                keyboard.JUMP = false;
            }

            if (e.keyCode == 65) {
                keyboard.LEFT = false;
            }

            if (e.keyCode == 68) {
                keyboard.RIGHT = false;
            }

            if (e.keyCode == 32) {
                keyboard.THROW = false;
            }
        });
    }
}