import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent {
   appointmentList: Appointment[] = [
    new Appointment(1, 'Meeting 1', new Date(2024,1,1)),
    new Appointment(2, 'Meeting 2', new Date(2024,12,14)),
  ];


  
  
}
