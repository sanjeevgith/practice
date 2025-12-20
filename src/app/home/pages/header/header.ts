import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { HeaderService } from '../../services/header-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{



  @Input() homeData:any

  @Output() sendHeaderData = new EventEmitter();

  headSignal = signal<any>([]);

  headerTitle = [
    {
      id:1,
      card:"gift"
    },
    {
      id:2,
      card:"print"
    },
    {
      id:3,
      card:'abc'
    }
  ]
  
  constructor(public headerService:HeaderService){

  }

    
  ngOnInit(): void {
    this.headSignal.set(this.headerTitle)
  }

  removeHeaderTitle(id:any){
    this.headSignal.update(item=> item.filter((data:any)=>data.id !== id));
    console.log(this.headSignal());
    this.headerService.setdata(this.headSignal());
  }

  printSubjectData(){
    this.headerService.headerData$.subscribe(res=>{
      let resdata = res;
      console.log(resdata);
    })
  }


}
