document.addEventListener('DOMContentLoaded', function () {
    // Dummy customer data with specific car names
    const customers = [
        { id: 1, name: 'Alice Johnson', paymentMode: 'Online', paymentStatus: 'Paid', carPurchased: 'Rolls Royce Phantom' },
        { id: 2, name: 'Bob Smith', paymentMode: 'Cash', paymentStatus: 'Pending', carPurchased: 'Rolls Royce Sweptail' },
        { id: 3, name: 'Charlie Davis', paymentMode: 'Cheque', paymentStatus: 'Paid', carPurchased: 'McLaren 720S' },
        { id: 4, name: 'David Brown', paymentMode: 'Online', paymentStatus: 'Pending', carPurchased: 'McLaren Speedtail' },
        { id: 5, name: 'Eva Miller', paymentMode: 'Cash', paymentStatus: 'Paid', carPurchased: 'McLaren Senna' },
        { id: 6, name: 'Frank Wilson', paymentMode: 'Online', paymentStatus: 'Pending', carPurchased: 'Mercedes AMG' },
        { id: 7, name: 'Grace Turner', paymentMode: 'Cheque', paymentStatus: 'Paid', carPurchased: 'Mercedes G-Wagon' },
        { id: 8, name: 'Harry White', paymentMode: 'Cash', paymentStatus: 'Paid', carPurchased: 'Rolls Royce Phantom' },
        { id: 9, name: 'Ivy Adams', paymentMode: 'Online', paymentStatus: 'Pending', carPurchased: 'Mercedes G-Wagon' },
        { id: 10, name: 'Jack Robinson', paymentMode: 'Cheque', paymentStatus: 'Pending', carPurchased: 'Rolls Royce Sweptail' }
    ];

    const customerTableBody = document.querySelector('#customerTable tbody');

    // Function to render the customer table with updated data
    function renderCustomerTable() {
        customerTableBody.innerHTML = '';
        customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.id}</td>
                <td>${customer.name}</td>
                <td>${customer.paymentMode}</td>
                <td>${customer.paymentStatus}</td>
                <td>${customer.carPurchased}</td>
            `;
            customerTableBody.appendChild(row);
        });
    }

    // Set the table header
    const tableHeader = document.querySelector('#customerTable thead tr');
    tableHeader.innerHTML += '<th>Car Purchased</th>';

    // Initial rendering
    renderCustomerTable();
});