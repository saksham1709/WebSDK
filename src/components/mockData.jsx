export const generateRealisticData = () => {
  const stateCityMap = {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirapalli", "Salem"],
    "Delhi": ["New Delhi", "Dwarka", "Rohini", "Karol Bagh", "Saket"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Noida"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Bikaner"],
    "Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"]
  };

  const firstNames = [
    "Aarav", "Vivaan", "Aditya", "Krishna", "Arjun", "Rohan", "Aryan", "Samar", "Kabir", "Ishaan",
    "Ananya", "Diya", "Ishita", "Sneha", "Sanya", "Avni", "Kriti", "Meera", "Aanya", "Riya",
    "Tanya", "Prisha", "Nisha", "Ritika", "Pooja", "Neha", "Sakshi", "Radhika", "Simran", "Aarohi",
    "Manav", "Yash", "Veer", "Shaurya", "Dev", "Harsh", "Nikhil", "Abhay", "Kunal", "Jay",
    "Aishwarya", "Shreya", "Bhavya", "Tanvi", "Vani", "Muskan", "Navya", "Chaitanya", "Ekta", "Tara"
  ];

  const lastNames = [
    "Sharma", "Verma", "Patel", "Reddy", "Iyer", "Kumar", "Singh", "Nair", "Yadav", "Chopra",
    "Joshi", "Mehta", "Mishra", "Dubey", "Thakur", "Saxena", "Ghosh", "Das", "Rao", "Jain",
    "Malhotra", "Gupta", "Bansal", "Mahajan", "Kaul", "Pillai", "Bhat", "Kapoor", "Roy", "Paul",
    "Pandey", "Tiwari", "Aggarwal", "Bajaj", "Mittal", "Arora", "Chatterjee", "Sarkar", "Sethi", "Kulkarni",
    "Shetty", "Banerjee", "Deshmukh", "Naidu", "Dutta", "Bhattacharya", "Bhaskar", "Vyas", "Dwivedi", "Khatri"
  ];

  const domains = ["gmail.com", "yahoo.com", "outlook.com", "rediffmail.com", "hotmail.com", "protonmail.com", "zoho.com"];

  const products = [
    { name: "Kurta", category: "Fashion", price: 799 },
    { name: "Saree", category: "Fashion", price: 1299 },
    { name: "Smartphone", category: "Electronics", price: 12000 },
    { name: "Cookbook", category: "Books", price: 399 },
    { name: "Mixer Grinder", category: "Home Appliances", price: 2500 },
    { name: "Sneakers", category: "Fashion", price: 1999 },
    { name: "LED TV", category: "Electronics", price: 22000 },
    { name: "Laptop", category: "Electronics", price: 55000 },
    { name: "Backpack", category: "Accessories", price: 999 },
    { name: "Formal Shoes", category: "Fashion", price: 2399 }
  ];

  const devices = ["Mobile", "Desktop", "Tablet", "Smart TV"];
  const paymentMethods = ["UPI", "Credit Card", "Cash on Delivery", "Debit Card", "Net Banking"];

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const selectedState = random(Object.keys(stateCityMap));
  const selectedCity = random(stateCityMap[selectedState]);

  const first_name = random(firstNames);
  const last_name = random(lastNames);
  const product = random(products);
  const quantity = randomInt(1, 3);
  const discount = randomInt(0, 500);
  const total = product.price * quantity - discount;

  const today = new Date();
  const order_date = today.toISOString().split("T")[0];
  const delivery_date = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  return {
    first_name,
    last_name,
    email: `${first_name.toLowerCase()}.${last_name.toLowerCase()}${randomInt(10, 99)}@${random(domains)}`,
    phone: `9${randomInt(100000000, 999999999)}`,
    gender: ["Male", "Female", "Other"][randomInt(0, 2)],
    age: randomInt(22, 45).toString(),
    city: selectedCity,
    state: selectedState,
    pincode: `${randomInt(400000, 700000)}`,
    address: `Flat No ${randomInt(1, 300)}, ${selectedCity} Lane`,
    product_id: `IND-P${randomInt(1000, 9999)}`,
    product_name: product.name,
    product_category: product.category,
    product_price: product.price.toString(),
    quantity: quantity.toString(),
    customer_id: `CUST-${first_name.slice(0, 2).toUpperCase()}${randomInt(1000, 9999)}`,
    total_amount: total.toString(),
    discount_applied: discount.toString(),
    payment_method: random(paymentMethods),
    order_id: `ORD${randomInt(10000, 99999)}`,
    order_date,
    delivery_date,
    is_repeat_customer: Math.random() > 0.5,
    preferred_device: random(devices),
    marketing_opt_in: Math.random() > 0.5,
    loyalty_points: randomInt(0, 1000).toString(),
    source_of_data: "websdk - aeptrainingform"
  };
};
