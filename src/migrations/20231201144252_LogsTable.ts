import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('log_entries', table => {
    table.increments('id').primary();
    table.integer('order_id').unsigned().notNullable();
    table.timestamp('time').notNullable();
    table.string('description').notNullable();
    table.foreign('order_id').references('id').inTable('order');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('log_entries');
}
