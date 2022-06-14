// Problem A
/*
1. Create a system to show smartphones to cofla with theirs
current characteristics.
2. Every smartphone has color, weight, resolution, memory and camera.
3. Every smartphone could turn on, reboot, take photos, turn off and use camera.
*/

class Smartphone{
    constructor(color, weight, resolution, memory, camera, brand, state=false){
        this.color = color;
        this.weight = weight;
        this.resolution = resolution;
        this.memory = memory;
        this.camera = camera;
        this.brand = brand;
        this.state = state;
    }

    reboot(){
        if(!this.state){
            return;
        }
        console.log('Rebooting smartphone!');
    }

    takePhoto(){
        console.log('Taking photo!');
    }

    /**
     * @param {boolean} value
     */
    set setState(value){
        console.log(`Setting state to ${value}`);
        this.state=value;
    }

    get getState(){
        return this.state;
    }

    toString() {
        return `Smartphone ${this.brand} ${this.color}`;
    }
}

class Iphone extends Smartphone{
    constructor(color, weight, resolution, memory, camera, brand){
        super(color, weight, resolution, memory, camera, brand);
    }
    takePhoto(){
        super.takePhoto();
        console.log('You use the camera full HD of the iphone!');
    }
}

class Samsung extends Smartphone{
    constructor(color, weight, resolution, memory, camera, brand){
        super(color, weight, resolution, memory, camera, brand);
    }
    takePhoto(){
        super.takePhoto();
        console.log('You use the camera full HD of the samsung!');
    }
}

const samsung21 = new Samsung('black', '100g', '1280x720', '4GB', '12MP', 'Samsung');
const iphone11 = new Iphone('black', '100g', '1280x720', '256gb', '12MP', 'Apple');

// console.log(samsung21.takePhoto());
console.log(samsung21.toString());
// console.log(iphone11.takePhoto());
console.log(iphone11.toString());