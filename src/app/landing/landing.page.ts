import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  announcements: Array<any> = [{}];

  constructor() { }

  ngOnInit() {
  }

  getAnnouncements() {
    let newAnnouncements =
      [

        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"
        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        },
        {
          message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae repellendus, optio temporibus atque minima? Aut vitae at obcaecati, qui unde corrupti minima possimus eveniet, pariatur tempore consequuntur facilis. Ex.",
          date: "Jan 31, 9999"

        }

      ];


  }


}
