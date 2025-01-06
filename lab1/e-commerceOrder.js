var orders = [
  {
    orderId: 'ORD001',
    customer: 'John Doe',
    items: 'item1:2,item2:1,item3:5',
    orderDate: '2023-12-01',
    deliveryDate: '2023-12-05',
    deliveryAddress: '123, Main Street, Springfield, USA',
  },
  {
    orderId: 'ORD002',
    customer: 'Jane Smith',
    items: 'itemA:3,itemB:4',
    orderDate: '2023-11-15',
    deliveryDate: '2023-11-20',
    deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
  },
  {
    orderId: 'ORD003',
    customer: 'Alice Johnson',
    items: 'itemX:1',
    orderDate: '2023-10-10',
    deliveryDate: '2023-10-15',
    deliveryAddress: '456, Pine Lane, Denver, USA',
  }
];

function transformOrders(orders) {
  var result=orders.map(function(order){

    var totalItems=0;
    order.items.split(',').forEach(function(item,i){
      totalItems+=parseInt(item.split(':')[1]);
    });//reduce

    var address=order.deliveryAddress.split(',');

    var deliveryDuration=new Date(order.deliveryDate)-new Date(order.orderDate);
    deliveryDuration/=(60*60*24*1000);
    return{
      orderId: order.orderId,
      customer: order.customer,
      totalItems,
      orderDate: order.orderDate,
      deliveryDate:order.deliveryDate,
      deliveryDuration,
      deliveryCountry: address[3],
      deliveryCity: address[2],
      deliveryStreet: address[1],
      buildingNumber: isNaN(Number(address[0]))?address[0]:Number(address[0]),
    };
  });
  return result;
}

var formattedOrders = transformOrders(orders);
console.log(formattedOrders);
