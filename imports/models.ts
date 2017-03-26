export interface Location {
    lat: number;
    lng: number;
}

export interface Trip {
    destination: Location;
    matchpoint: Location;
    enddate: Date;
    question: string;
    transport: string;
    answer: string;
    owner: string;
    users: string[];
    _id?: string;
}