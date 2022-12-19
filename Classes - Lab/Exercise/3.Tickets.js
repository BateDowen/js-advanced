function manageTickets(arrOfData, sortCriteria) {
  class Ticket{
    constructor(destination,price,status){
        this.destination = destination;
        this.price = Number(price);
        this.status = status;

    }
  };

  let arrOfTickets = [];

  for(let line of arrOfData){
    let [destination,price,status] = line.split('|');
    let ticket = new Ticket(destination,price,status);
    arrOfTickets.push(ticket);
  };

  if (sortCriteria === 'destination') {
    arrOfTickets.sort((a,b) => {
        return a.destination.localeCompare(b.destination);
    });
  } else if (sortCriteria === 'price') {
    arrOfTickets.sort((a,b) => {
       return a.price - b.price;
    });
  } else if (sortCriteria === 'status') {
    arrOfTickets.sort((a,b) => {
      return  a.status.localeCompare(b.status);
    });
  }
  arrOfTickets.forEach((x)=>{console.log(x.destination);});
return arrOfTickets;
}
console.log(manageTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'

))