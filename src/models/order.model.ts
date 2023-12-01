export class Order {
  id: number;

  user_id: number;

  completed: boolean;

  cancelled: boolean;

  kitchen_cancelled: boolean;

  kitchen_accepted: boolean;

  kitchen_dispatched: boolean;

  kitchen_dispatched_time: Date;

  completed_time: Date;

  rider_id: number;

  kitchen_prepared: boolean;

  rider_assigned: boolean;

  paid: boolean;

  order_code: string;

  order_change: Record<string, any> | null;

  calculated_order_id: number;

  created_at: Date;

  updated_at: Date;
}
