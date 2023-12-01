import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('order', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.boolean('completed').defaultTo(false);
    table.boolean('cancelled').defaultTo(false);
    table.boolean('kitchen_cancelled').defaultTo(false);
    table.boolean('kitchen_accepted').defaultTo(false);
    table.boolean('kitchen_dispatched').defaultTo(false);
    table.timestamp('kitchen_dispatched_time').nullable();
    table.timestamp('completed_time').nullable();
    table.integer('rider_id').nullable();
    table.boolean('kitchen_prepared').defaultTo(false);
    table.boolean('rider_assigned').defaultTo(false);
    table.boolean('paid').defaultTo(false);
    table.string('order_code');
    table.json('order_change').nullable();
    table.integer('calculated_order_id').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('order');
}
