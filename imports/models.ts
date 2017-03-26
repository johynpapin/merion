export interface Location {
    lat: number;
    lng: number;
}

export interface Trip {
    destination: Location;
    matchpoint: Location;
    enddate: Date;
    [index: number]: string;
}