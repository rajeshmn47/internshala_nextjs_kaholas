const circle = {
    radius: 20,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  console.log(circle.diameter());
  console.log(circle.perimeter());
  console.log(Number(new Date()),'rajeshT'.replace('T',' '))