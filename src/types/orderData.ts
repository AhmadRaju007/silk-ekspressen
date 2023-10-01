export interface Employee {
  id: number;
  employee_id: number;
  webshipper_order_id: string;
  employee: string;
  order_id: number;
  order_channel: string;
  order_details: OrderDetails;
  start_time: string;
  end_time: string;
  total_time: number;
  fulfillment: string | null;
  status: number;
  related_orders: OrderDetails[];
}

export interface OrderDetails {
  id: number;
  order_tracking_id: string;
  shopify_order_id: string;
  payment_gateway: string;
  user_id: string | null;
  user_email: string;
  status: number;
  fulfilled: number;
  currency_code: string;
  total_bags: number;
  total_weight: number;
  promo_code: string | null;
  discount_amount: number;
  shipping_name: string;
  shipping_address: ShippingAddress;
  bag_list: BagList[];
  order_date: string;
  packaging_details: PackagingDetails;
  number_of_package: number;
  has_extra: boolean;
  extra_bag_id: string | null;
  hot_deals: string | null;
  order_summery: OrderSummery;
}

export interface ShippingAddress {
  first_name: string;
  address1: string;
  phone: string;
  city: string;
  zip: string;
  province: string | null;
  country: string;
  last_name: string;
  address2: string | null;
  company: string | null;
  latitude: number;
  longitude: number;
  name: string;
  country_code: string;
  province_code: string | null;
}

export interface BagList {
  id: number;
  bag_tracking_id: string;
  owner_id: string | null;
  cart_id: string | null;
  invitation_id: string | null;
  invited_user_id: string | null;
  icon: string | null;
  name: string;
  user_name: string;
  currency_code: string;
  bag_limit: string | null;
  total_bag_price: number;
  total_bag_weight: number;
  bag_type: string | null;
  message_card: string | null;
  status: number;
  last_date_of_mixing: string | null;
  candies: Candy[];
  missing_candies: string | null;
  owner: string | null;
  invited: string | null;
}

export interface Candy {
  id: number;
  name: string;
  shopify_id: string;
  variant_id: string;
  sku: string;
  short_code: string;
  alley_side: string;
  brand: string;
  image: string;
  currency_code: string;
  number_of_items: number;
  selling_price: number;
  weight: number;
  total_amount: number;
  total_price: number;
  total_weight: number;
  product_status: string;
}

export interface PackagingDetails {
  id: number;
  name: string;
  shopify_id: string;
  variant_id: string;
  sku: string;
  short_code: string | null;
  alley_side: string | null;
  brand: string;
  image: string;
  currency_code: string;
  number_of_items: number;
  selling_price: number;
  weight: string | null;
}

export interface OrderSummery {
  total_bags: number;
  subtotal: number;
  site_discount: number;
  delivery_charge: number;
  total: number;
  tax_amount: number;
}
