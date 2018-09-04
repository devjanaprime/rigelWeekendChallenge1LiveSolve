$( document ).ready( readyNow );

let employees = [];
const maxMonthly = 20000;

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
    // clear the input fields
    $( '#firstNameIn' ).val( '' );
    $( '#lastNameIn' ).val( '' );
    $( '#idIn' ).val( '' );
    $( '#titleIn' ).val( '' );
    $( '#salaryIn' ).val( '' );
    displayEmployees();
} // end addEmployee

function displayEmployees(){
   // target table and get it ready
   let table = $( '#employeesOut' ); 
   table.empty();
   table.append( `
       <tr>
           <th width="20%">First Name</th>
           <th width="20%">Last Name</th>
           <th width="20%">ID (click to remove)</th>
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
               <td class="idClick">` + employee.id + `</td>
               <td>` + employee.title + `</td>
               <td>` + employee.salary + `</td>
           </tr>
       `); //end append this employee to table
   } // end for
   console.log( 'totalSalary:', totalSalary );
   let monthlySalary = totalSalary / 12;
   // put monthly salary on DOM
   let el = $( '#monthlyOut' );
   el.empty();
   el.append( monthlySalary );
   // change CSS of el to red if too high
   if( monthlySalary > maxMonthly ){
    // set bg color to red
    el.css( 'color', 'white' );
    el.css( 'background-color', 'red' );
   } // end too high
   else{
    el.css( 'color', 'black' );
    el.css( 'background-color', '' );
   } // end affordable
} // end displayEmployees

function readyNow(){
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
    $( document ).on( 'click', '.idClick', removeEmployee );
    displayEmployees();
} // end readyNow

function removeEmployee(){
    console.log( 'in removeEmployee', $( this ).text() );
    // loop through employees
    for( index in employees ){
        if( employees[ index ].id === $( this ).text() ){
            // remove employee with this id
            employees.splice( index, 1 );
        } // end match
    } // end for 
    // update display
    displayEmployees();
} //end removeEmployee