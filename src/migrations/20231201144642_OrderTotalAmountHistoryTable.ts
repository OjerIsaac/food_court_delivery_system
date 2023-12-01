import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('order_total_amount_history', table => {
    table.increments('id').primary();
    table.integer('order_id').unsigned().notNullable();
    table.timestamp('kitchen_verified_time').nullable();
    table.timestamp('kitchen_completed_time').nullable();
    table.boolean('shop_accepted').defaultTo(false);
    table.boolean('shop_prepared').defaultTo(false);
    table.integer('no_of_mealbags_delivered').defaultTo(0);
    table.integer('no_of_drinks_delivered').defaultTo(0);
    table.timestamp('rider_started_time').nullable();
    table.boolean('rider_started').defaultTo(false);
    table.timestamp('rider_arrived_time').nullable();
    table.boolean('rider_arrived').defaultTo(false);
    table.boolean('is_failed_trip').defaultTo(false);
    table.json('failed_trip_details').defaultTo({});
    table.string('box_number');
    table.string('shelf_id').nullable();
    table.json('order_total_amount_history').defaultTo([]);
    table.boolean('scheduled').defaultTo(false);
    table.integer('confirmed_by_id').nullable();
    table.integer('completed_by_id').nullable();
    table.date('scheduled_delivery_date').nullable();
    table.time('scheduled_delivery_time').nullable();
    table.boolean('is_hidden').defaultTo(false);

    table.foreign('order_id').references('id').inTable('order');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('order_total_amount_history');
}
