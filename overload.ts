// オーバーロード p.62

type Reserve = {
  (from: Date, to: Date, destination: string): Reservation // Reservationは返り値
  (from: Date, destination: string): Reservation
}

let reserve: Reserve = (from: Date, toOrDestination:Date | string, destination?: string) => {

  return new Reservation(from, toOrDestination, destination);
  
  
}

class Reservation {
  from: Date;
  toOrDestination: Date | string;
  destination?: string

  constructor(from: Date, toOrDestination: Date | string, destination?: string) {
    this.from = from;
    this.toOrDestination = toOrDestination;
    this.destination = destination;
  }
}

console.log(reserve(new Date(), "Japan"));