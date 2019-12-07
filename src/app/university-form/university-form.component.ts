import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UniversityService } from '../services/university.service';
import { University } from '../models/university/University';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university-form',
  templateUrl: './university-form.component.html',
  styleUrls: ['./university-form.component.css']
})
export class UniversityFormComponent implements OnInit {
  action: string; // Specify form action {'create','update'}
  university: University; // get ToUpdate University informations
  universityForm:FormGroup = new FormGroup({
    'name' : new FormControl() ,
    'owner' : new FormControl() ,
    'location' : new FormControl(),
    'logoUrl' : new FormControl()
  });
  constructor(private universityServices: UniversityService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('id')) {
        this.action = 'update';
        let id = +params.get('id');
        console.log(id);
        this.universityServices.searchUniversity(id)
            .subscribe(u => {
              this.university = u;
              this.initializeFormValues(this.university);
            } );
            
      }else {
        this.action = 'create';
        console.log('Create Action.');
      }
      
    });
  }

  createUniversity(data: University) {
    this.universityServices.createUniversity(data)
    .subscribe();
  }
  updateUniversity(data: University) {
    this.universityServices.updateUniversity(data)
    .subscribe();
  }

  update() {
    if(this.action == 'create') {
      let u = this.universityForm.value;
      u.logoUrl = 'https://res.cloudinary.com/dc9b3xgwe/image/upload/v1575450574/Universities/'+u.name;
      this.createUniversity(u);
    }else if(this.action == 'update') {
      let u = this.universityForm.value;
      u.id = this.university.id;
      u.logoUrl = 'https://res.cloudinary.com/dc9b3xgwe/image/upload/v1575450574/Universities/'+u.name;
      this.updateUniversity(u);
    }else {
      console.log('Action Type Error');
    }
    
    this.router.navigate(['/university']);
  }

  initializeFormValues(data: University) {
    this.universityForm.patchValue({
      name: data.name,
      owner: data.owner,
      location: data.location
    });
  }

  filePath() {
    return 'Universities/'+this.universityForm.value.name;
  }

}
