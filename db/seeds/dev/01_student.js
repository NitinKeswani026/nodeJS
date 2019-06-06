exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([{
          id: 1,
          fname: 'nitin',
          lname: 'keswani',
          enrollment_number: '0801CS161053',
          email: 'nitinkeswani026@gmail.com',
          address: 'Indore',
          contact_number: '7999996440',
          age: '20'
        },
        {
          id: 2,
          fname: 'akshat',
          lname: 'jain',
          enrollment_number: '0801CS161002',
          email: 'akshat@gmail.com',
          address: 'Indore',
          contact_number: '1234567890',
          age: '20'
        },
        {
          id: 3,
          fname: 'karan',
          lname: 'soni',
          enrollment_number: '0801CS16067',
          email: 'karan@gmail.com',
          address: 'Ujjain',
          contact_number: '1234567890',
          age: '20'
        }
      ]);
    });
};