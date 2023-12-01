export class CalculatedOrders {
  id: number;

  user_id: number;

  lat: string;

  lng: string;

  cokitchen_polygon_id?: string;

  cokitchen_id: number;

  pickup: boolean;

  prev_price?: string;

  // Address details
  address_city?: string;

  address_name?: string;

  address_line?: string;

  address_building_number?: string;

  // Meals
  meals_amount: number;

  meals_internal_profit: number;

  // Order Total Amount History
  order_total_amount_history: Array<{ time: Date; total_amount: number }>;

  created_at: Date;

  updated_at: Date;
}
