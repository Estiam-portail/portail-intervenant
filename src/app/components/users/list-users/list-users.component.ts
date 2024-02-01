import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  userData
  constructor(private fs: AngularFirestore) { }

  ngOnInit(): void {
    this.selectUsers()
  }


  selectUsers() {
    this.fs.collection('users')
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() as {} })

          )
        )
      ).subscribe(data => {
        this.userData = data;
        console.log("data docu : ", this.userData);

      });
  }

  // ***************************************************************

  onChangeStatusUser(u:any){
    console.log("user :" , u.id);
    this.fs.collection('users').doc(u.id).update({ admin:!u.admin }).then(() => {
      console.log("succcess !");
    })
    .catch(err => {
      console.error(err);
    })
    this.selectUsers()
  }


  // ****************************************************************


}
