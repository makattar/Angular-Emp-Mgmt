import { PipeTransform, Pipe } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
    name:'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform{
    transform(employees:any[],searchTerm:string):any[]{
        if(!employees || !searchTerm){
            return employees;
        }
        return employees.filter(employee=>employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}