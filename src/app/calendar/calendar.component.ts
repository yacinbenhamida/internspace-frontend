import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarView, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FYPDefense } from '../models/fyp/fyp-defense';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  testEvent: CalendarEvent;

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  defensesList: any[]=[
    {
      start: new Date('2019-12-06 10:00:00'),
      end: new Date('2019-12-06 11:00:00'),
      title: 'Soutenance PFE JEE',
      color: colors.red,
      actions: this.actions,
      allDay: false,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];
  

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = this.defensesList;

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit() {
    this.defensesList.push( {
      start: new Date('2019-12-06 10:00:00'),
      end: new Date('2019-12-06 11:00:00'),
      title: 'Soutenance PFE JEE',
      color: colors.red,
      actions: this.actions,
      allDay: false,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    });
    this.testEvent = {
      start: new Date('2019-12-07 08:00:00'),
      end: new Date('2019-12-07 09:00:00'),
      title: 'A',
      color: colors.red,
      actions: this.actions,
      allDay: false,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    };
    //this.testEvent.start = new Date('2019-12-07 08:00:00');
    //this.testEvent.end = new Date('2019-12-07 09:00:00');
    this.defensesList.push(this.testEvent);
  }

}
