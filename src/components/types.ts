export interface ApiResponse {
  results: Result[];
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Location {
  city: string;
  country: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Registered {
  date: string;
  age: number;
}

export interface Result {
  name: Name;
  location: Location;
  picture: Picture;
  registered: Registered;
  email: string;
}

export interface UserCardProps {
  user: Result;
}
