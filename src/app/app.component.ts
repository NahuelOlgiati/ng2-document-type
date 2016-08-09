import { Component } from '@angular/core';
import { DocumentTypeListComponent } from './document-type/document-type-list/document-type-list.component';

@Component({
  moduleId: module.id,
  selector: 't-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DocumentTypeListComponent]
})
export class AppComponent {
  title = 'app works!';
}