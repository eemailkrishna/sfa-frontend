import { Component,OnInit } from '@angular/core';
import { UserDataService } from 'src/app/core/services/user/user-data.service';{}
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit{
  dtoptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
    };
  }
  public gallery: any = [];

  constructor(private api: CommonService) {
    this.api.get('user').subscribe((data: any) => {
      console.log(data);
      if (data.code == 200) {
        
      // this.gallery = data.res;
      }
    })
   }

}
