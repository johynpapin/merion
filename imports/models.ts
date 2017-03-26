export interface Location {
    lat: number;
    lng: number;
}

export interface Trip {
    destination: Location;
    matchpoint: Location;
    enddate: Date;
    question: String;
    answer: String;
    [index: number]: string;
}