export interface GetProduct {
    code: string;
    body: Product;
}

export interface ProductSearchResponse {
    site_id: string;
    country_default_time_zone: string;
    query?: string;
    paging: SearchPaggin;
    results: Product[]
    sort: ProductSearchSort;
    available_sorts: ProductSearchSort[];
    filters: ProductSearchFilter[];
    available_filters: PSearchAvailableFilters[];
}

export interface SearchPaggin {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}


export interface ProductSearchSort {
    id: string;
    name: string;
}

export interface ProductSearchFilter {
    id: string;
    name: string;
    type: string;
    values: FilterValue[];
}

export interface FilterValue {
    id: string;
    name: string;
    path_from_root: PathFromRoot[];
}

export interface PathFromRoot {
    id: string;
    name: string;
}


export interface PSearchAvailableFilters {
    id: string;
    name: string;
    type: string;
    values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
    id: string;
    name: string;
    results: number;
}


export interface Product {
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    sale_price: number | null;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: string;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments: Installments;
    address: Address;
    shipping: Shipping;
    seller_address: SellerAddress;
    attributes: Attribute[];
    differential_pricing?: DifferentialPricing;
    original_price: number | null;
    category_id: string;
    official_store_id: null;
    domain_id: string;
    catalog_product_id: null;
    tags: string[];
    order_backend: number;
    use_thumbnail_id: boolean;
    offer_score: null;
    offer_share: null;
}

export interface Address {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
}


export interface Attribute {
    id: string;
    value_id: null | string;
    value_struct: null;
    values: AtributeValue[];
    attribute_group_id: string;
    attribute_group_name: string;
    name: string;
    value_name: null | string;
    source: number | null;
}


export interface AtributeValue {
    source: number | null;
    id: null | string;
    name: null | string;
    struct: null;
}


export interface DifferentialPricing {
    id: number;
}

export interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}


export interface Prices {
    id: string;
    prices: Price[];
    presentation: Presentation;
    payment_method_prices: any[];
    reference_prices: any[];
    purchase_discounts: any[];
}

export interface Presentation {
    display_currency: string;
}

export interface Price {
    id: string;
    type: string;
    conditions: Conditions;
    amount: number;
    regular_amount: number | null;
    currency_id: string;
    exchange_rate_context: string;
    metadata: Metadata;
    last_updated: string;
}

export interface Conditions {
    context_restrictions: string[];
    start_time: null | string;
    end_time: null | string;
    eligible: boolean;
}


export interface Metadata {
    promotion_id?: string;
    promotion_type?: string;
    campaign_id?: string;
    discount_meli_amount?: number;
    campaign_discount_percentage?: number;
    campaign_end_date?: string;
    order_item_price?: number;
}

export interface Seller {
    id: number;
    permalink: null;
    registration_date: null;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: null;
}

export interface SellerAddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: City;
    state: City;
    city: City;
    latitude: string;
    longitude: string;
}

export interface City {
    id: string;
    name: string;
}

export interface Shipping {
    free_shipping: boolean;
    mode: string;
    tags: string[];
    logistic_type: string;
    store_pick_up: boolean;
}
