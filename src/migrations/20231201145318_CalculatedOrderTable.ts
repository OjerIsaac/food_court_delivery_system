import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('calculated_orders', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.string('lat').notNullable();
    table.string('lng').notNullable();
    table.string('cokitchen_polygon_id');
    table.integer('cokitchen_id').notNullable();
    table.boolean('pickup').defaultTo(false);
    table.string('prev_price');

    // Address details
    table.string('address_city');
    table.string('address_name');
    table.string('address_line');
    table.string('address_building_number');

    // Meals
    table.integer('meals_amount').notNullable();
    table.integer('meals_internal_profit').notNullable();

    // Order Total Amount History
    table.json('order_total_amount_history').defaultTo([]);

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('calculated_orders');
}
