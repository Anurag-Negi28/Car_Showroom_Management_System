document.addEventListener('DOMContentLoaded', function () {
    // Dummy data
    const employees = [
        { id: 1, name: 'John Doe (Sales)', position: 'Sales Employee', status: 'Present' },
        { id: 2, name: 'Jane Smith (Sales)', position: 'Sales Employee', status: 'Absent' },
        { id: 3, name: 'Mike Johnson (Mechanic)', position: 'Mechanic', status: 'Present' },
        { id: 4, name: 'Sara Williams (Mechanic)', position: 'Mechanic', status: 'Absent' },
        // Add more random data
        { id: 5, name: 'Chris Brown (Sales)', position: 'Sales Employee', status: 'Present' },
        { id: 6, name: 'Emily Davis (Sales)', position: 'Sales Employee', status: 'Absent' },
        { id: 7, name: 'Alex Turner (Mechanic)', position: 'Mechanic', status: 'Present' },
        { id: 8, name: 'Sophia Clark (Mechanic)', position: 'Mechanic', status: 'Absent' }
    ];

    const salesTableBody = document.querySelector('#salesTable tbody');
    const mechanicTableBody = document.querySelector('#mechanicTable tbody');

    // Function to render the table with updated data
    function renderTable(type) {
        const tableBody = type === 'sales' ? salesTableBody : mechanicTableBody;
        const employeesOfType = type === 'sales' ? salesEmployees : mechanicEmployees;

        tableBody.innerHTML = '';
        employeesOfType.forEach(employee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td class="${employee.status.toLowerCase() === 'present' ? 'status-present' : 'status-absent'}">${employee.status}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Separate employees into sales and mechanic arrays
    const salesEmployees = employees.filter(employee => employee.position === 'Sales Employee');
    const mechanicEmployees = employees.filter(employee => employee.position === 'Mechanic');

    // Initial rendering
    renderTable('sales');
    renderTable('mechanic');
});
