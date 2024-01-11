import {Component, OnInit} from '@angular/core';
import {TrafficService} from "../../service/traffic.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {NavigationEnd, Router} from "@angular/router";
import {Traffic} from "../../model/Traffic";
import {MaterialModule} from "../../material.module";


@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MaterialModule
  ],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent implements OnInit{
  public arr!: Traffic[];
  mostActiveTime: string;
  public avgTime: string;
  public userForm: FormGroup = this.createUserForm();
  constructor(
    private trafficService: TrafficService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.mostActiveTime='';
    this.avgTime='';
  }

  ngOnInit(): void {
    this.getMostActiveTime().subscribe(
      (data: any) => {
        this.mostActiveTime = data ? data['most_active_time'] : null;
      }
    );

    this.getAvgTime().subscribe(
      (data: any) => {
        this.avgTime = data ? data['avg_active_time'] : null;
      }
    );

    this.userForm = this.createUserForm();
  }

  getMostActiveTime() {
    return this.trafficService.getMostActiveTime();
  }

  createUserForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.compose([Validators.required])],
    });
  }

  getAvgTime() {
    return this.trafficService.getAvgActiveTime();
  }

  submit(){
    this.arr = [];
    this.trafficService.getInfoAboutUser(
      this.userForm.value.username
    ).subscribe(
      (data) =>{
        console.log(data)
        this.arr = data
      }
    )

  }

}
