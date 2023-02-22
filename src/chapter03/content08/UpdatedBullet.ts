class Coordinates {
  constructor(private x: number, private y: number) {
    //...
  }

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }
}

class UpdatedBullet {
    constructor(private coordinates: Coordinates, private direction: string) {
      //...
    }
  
    move() {
      //...
    }
  }
  
  // Use of the class
  new UpdatedBullet(new Coordinates(100, 200), 'Example direction')