export class Appointment {
  id: number;
  title: string;
  date: Date;

  constructor(id: number, title: string, date: Date) {
    this.id = id;
    this.title = title;
    this.date = date;
  }

  toString(): string {
    return `${this.id}  ${this.title}  ${this.date}`;
  }
}
