// Index Signatures in TS

class SeatAssignment {
    [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats.A1 = 'kartik';
seats.A2 = 'premdeep';