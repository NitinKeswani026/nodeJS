exports.up = function (knex, Promise) {

    return knex.schema.createTable('students', function (table) {

        table.increments('id').primary();
        table.string('fname').notNullable();
        table.string('lname');
        table.string('enrollment_number').notNullable();
        table.string('email');
        table.string('address');
        table.string('contact_number');
        table.integer('age');

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });

};

exports.down = function (knex, Promise) {

    return knex.schema.dropTable('students');
};