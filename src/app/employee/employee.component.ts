import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../services/employee.service';
import { EmpAddComponent } from '../emp-add/emp-add.component';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  title = "EmployeeCURD";

  displayedColumns: string[] = ['employeeName', 'mailid', 'dob', 'gender', 'designation', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: EmployeeService) { }
  ngOnInit(): void {
    this.getAllEmployee();
  }
  openDialog() {
    this.dialog.open(EmpAddComponent, {
      width: "35%"
    }).afterClosed().subscribe(val => {
      if (val === "save") {
        this.getAllEmployee();
      }
    })
  }
  getAllEmployee() {
    this.api.getEmployee()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error while fetching the Records!")
        }
      })
  }
  editEmployee(row: any) {
    this.dialog.open(EmpAddComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === "update") {
        this.getAllEmployee();
      }
    })
  }
  deleteEmployee(id: number) {
    this.api.deleteEmployee(id)
      .subscribe({
        next: (res) => {
          alert("Employee deleted Successfully!");
          this.getAllEmployee();
        },
        error: (err) => {
          alert("Error while deleting employee");
        }
      })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }  

  // Download
  fileName = 'EmployeeReport.xlsx';
  exportexcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }
}
