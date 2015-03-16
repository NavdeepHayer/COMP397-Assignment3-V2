﻿module objects {
    export class Road extends createjs.Bitmap {

        public width: number;
        private _dx: number = 2;

        //CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("road"));

            this.width = this.getBounds().width;
            //This is x
            this.x = 0;

            this.reset();
        }
        //PUBLIC METHODS
        public update() {
            this.x -= this._dx;
            if (this.x <= -(this.width / 2) - 10) { //if road is passed certain point
                this.reset();
            }
        }

        public reset() {
            this.x = 0;
        }
    }
}     