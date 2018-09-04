$( document ).ready( readyNow );

let employees = [];

function addEmployee(){
    console.log( 'in addEmployee' );
    // collect the form information
    let newEmployee = {
        firstName: $( '#firstNameIn' ).val(),
        lastName: $( '#lastNameIn' ).val(),
        id: $( '#idIn' ).val(),
        title: $( '#titleIn' ).val(),
        salary: $( '#salaryIn' ).val(),
    } // end newEmployee object
    // store the information 
    employees.push( newEmployee );
    // target table and get it ready
    let table = $( '#employeesOut' ); 
    table.empty();
    table.append( `
        <tr>
            <th width="20%">First Name</th>
            <th width="20%">Last Name</th>
            <th width="20%">ID</th>
            <th width="20%">Title</th>
            <th width="20%">Annual Salary</th>
        </tr>
    `); // end reset header row
    // calculate monthly costs
    let totalSalary = 0;
    for( employee of employees ){
        totalSalary += Number( employee.salary );
        // append information to the DOM
        table.append(`
            <tr>
                <td>` + employee.firstName + `</td>
                <td>` + employee.lastName + `</td>
                <td>` + employee.id + `</td>
                <td>` + employee.title + `</td>
                <td>` + employee.salary + `</td>
            </tr>
        `); //end append this employee to table
    } // end for
    console.log( 'totalSalary:', totalSalary );
    let monthlySalary = totalSalary / 12;
    console.log( 'monthlySalary:', monthlySalary );
    // put monthly salary on DOM
    let el = $( '#monthlyOut' );
    el.empty();
    el.append( monthlySalary );
    // clear the input fields
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#idIn' ).val( '' );
    $( '#titleIn' ).val( '' );
    $( '#salaryIn' ).val( '' );
} // end addEmployee

function readyNow(){
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
} // end readyNow