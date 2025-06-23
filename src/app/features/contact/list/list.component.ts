import { Component, inject } from '@angular/core';
import { GridComponent } from '@components/grid/grid.component';
import { ColumnKeys, Contact } from '../contact.interfaces';
import { ContactService } from '../contact.service';
import {tap} from 'rxjs';


@Component({
  selector: 'app-list',
  imports: [GridComponent],
  template: `
    <section>
      @if(data){
        <app-grid [displayedColumns]="displayedColumns" [data]="data" [sortableColumns]="sortables" />

      }
      
    </section>
  `,

})
export class ListComponent {

  data! : Contact[];
  displayedColumns: ColumnKeys<Contact> = ['id', 'name', 'email', 'phone', 'action'];
  sortables: ColumnKeys<Contact> = ['id', 'name', 'email', 'phone'];


  private readonly _contactSvc = inject(ContactService);


  getAllContacts(){
    this._contactSvc.getAllContacts()
    .pipe(
      tap((contacts:Contact[]) => this.data = [...contacts])
    )
   .subscribe()
  }

}
