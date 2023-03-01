import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../services/customer.service';
import { CoreService } from '../services/core.service';
import { CustAddComponent } from '../cust-add/cust-add.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title = 'cust_crud';

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'dob',
    'phoneno', 'salary', 'gender', 'account', 'loan', 'card', 'insurance', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor(
    private _dialog: MatDialog,
    private _custService: CustomerService,
    private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.getCustomerList();

  }

  openAddEditForm() {
    const dialogRef = this._dialog.open(CustAddComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCustomerList();
        }
      },
    });

  }


  getCustomerList() {
    this._custService.getCustomerList().subscribe(
      {
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,

      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCustomer(id: number) {
    this._custService.deleteCustomer(id).subscribe({
      next: (res) => {

        this._coreService.openSnackBar('Customer Details are deleted successfully!!!', 'done')
        this.getCustomerList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CustAddComponent,
      {
        data,
      });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCustomerList();
        }
      },
    });
  }

}
