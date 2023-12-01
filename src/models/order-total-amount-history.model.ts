export class OrderTotalAmountHistory {
  id: number;

  order_id: number;

  kitchen_verified_time: Date;

  kitchen_completed_time: Date;

  shop_accepted: boolean;

  shop_prepared: boolean;

  no_of_mealbags_delivered: number;

  no_of_drinks_delivered: number;

  rider_started_time: Date;

  rider_started: boolean;

  rider_arrived_time: Date;

  rider_arrived: boolean;

  is_failed_trip: boolean;

  failed_trip_details: Record<string, any> | null;

  box_number: string;

  shelf_id: string;

  order_total_amount_history: Record<string, any> | null;

  scheduled: boolean;

  confirmed_by_id: number;

  completed_by_id: number;

  scheduled_delivery_date: Date;

  scheduled_delivery_time: Date;

  is_hidden: boolean;

  created_at: Date;

  updated_at: Date;
}
