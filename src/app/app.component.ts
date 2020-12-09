import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  checktext = false;

  tabledata: any[] = [{goal: 'Update the API', status: 'In progress', progress: '55%', due:'07/24/18', team: ['../assets/avatar-1.jpg','../assets/avatar-2.jpg','../assets/avatar-3.jpg','../assets/avatar-4.jpg']},
  {goal: 'Release v1.2-Beta', status: 'In progress', progress: '25%',due: '08/26/18', team: ['../assets/avatar-1.jpg','../assets/avatar-2.jpg','../assets/avatar-3.jpg']},
  {goal: 'GDPR Compliance', status: 'Completed', progress: '100%',due: '06/19/18', team: ['../assets/avatar-1.jpg','../assets/avatar-2.jpg','../assets/avatar-3.jpg']},
  {goal: 'v1.2 Documentation', status: 'Cancelled', progress: '0%',due: '06/25/18', team: ['../assets/avatar-1.jpg','../assets/avatar-2.jpg']},
  {goal: 'Plan design offsite', status: 'Completed', progress: '100%',due: '06/30/18', team: ['../assets/avatar-1.jpg','../assets/avatar-2.jpg','../assets/avatar-3.jpg','../assets/avatar-4.jpg']}];

  // Check list
  checklistData: any[] = [{label: 'Delete the old mess in functions files.', isSelected: false},
                          {label: 'Refactor the core social sharing modules', isSelected: false},
                          {label: 'Create the release notes for the new pages so customers get psyched.', isSelected: false},
                          {label: 'Send Dianna those meeting notes', isSelected: false},
                          {label: 'Share the documentation for the new unif ied API', isSelected: false},
                          {label: 'Clean up the Figma file with all of the avatars, buttons, and other components.', isSelected: false}];

                          changelist(ind) {
                            this.checklistData[ind].isSelected = !this.checklistData[ind].isSelected;
                            // alert(ind);
                            // if (this.checktext == false) {
                            //   this.renderer.addClass(this.checkeddata.nativeElement, 'strikeoftext');
                            //   this.checktext = true;
                            // } else {
                            //   this.renderer.removeClass(this.checkeddata.nativeElement, 'strikeoftext');
                            //   this.checktext = false;
                            // }
                          }
}
