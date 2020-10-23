import { Component, OnInit } from '@angular/core';
import { classeModel } from 'src/app/models/classeModel';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  isLoading: boolean;
  classes: classeModel;

  constructor(private classeService: ClasseService) { }

  ngOnInit(): void {
    this.loadClasses();
    this.isLoading = true;
  }

  public loadClasses(){
    this.classeService.getClasses().subscribe((data: classeModel)=>{
      console.log(data);
      if(!this.classes){
        this.isLoading = true;
        this.classes = data;
      }
      this.isLoading = false;
    });
  }
}
