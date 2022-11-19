export class Lot {

    constructor(lot: string, date: Date, sheed: string, quanty: number, race: string) {
        this.lot = lot;
        this.date = date;
        this.sheed = sheed;
        this.quanty = quanty;
        this.race = race;
    }
    
    lot: string;
    date: Date;
    sheed: string;
    quanty: number;
    race: string;
}