import { Package } from '@/utils/types';

export const mockPackages: Package[] = [
  {
    package_id: 'PKG001',
    sender: {
      name: 'Cristina Campoo',
      address: 'Manhattan, New York ',
      contact_number: '+1-636-364-8002 ',
      email: 'aigiecristiana423@gmail.com'
    },
    recipient: {
      name: 'Thomas Ullrich',
      address: '1334 Warrior Road Sergeant Bluff, Iowa 51054',
      contact_number: '***_***-****',
      email: '******'
    },
    tracking_number: 'DFCE0085E33',
    package_details: {
      weight_kg: 2.5,
      dimensions_cm: {
        length: 30,
        width: 20,
        height: 15
      },
      courier: 'UPS',
      packages: 'Envelope ',
      quantity: '1',
      paymentMode: 'Cash',
      origin: 'New York',
      destination: 'Manhattan, New York ',
      comment: 'Handle with care',
      mode: 'Road',
      value_usd: 50.0
    },
    package_received_date: '2024-09-03',
    package_received_time: '12:09:00',
    in_transit_date: '2024-09-04',
    in_transit_time: '08:00:00',
    out_for_delivery_date: '2024-09-07',
    out_for_delivery_time: '11:00:00',
    on_hold_date: '',
    on_hold_time: '',
    pickup_date: '2024-09-10',
    pickup_time: '11:00:00',
    estimated_delivery_date: '2024-09-10',
    estimated_delivery_time: '12:00:00'
  }
];
