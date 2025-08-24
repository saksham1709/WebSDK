export const generateRealisticData = () => {
  const nameGenderPairs = [
    { name: "Prince", Gender: "Male" }, { name: "Vivaan", Gender: "Male" }, { name: "Aditya", Gender: "Male" },
    { name: "Krishna", Gender: "Male" }, { name: "Arjun", Gender: "Male" }, { name: "Rohan", Gender: "Male" },
    { name: "Aryan", Gender: "Male" }, { name: "Samar", Gender: "Male" }, { name: "Kabir", Gender: "Male" },
    { name: "Ishaan", Gender: "Male" }, { name: "Manav", Gender: "Male" }, { name: "Yash", Gender: "Male" },
    { name: "Veer", Gender: "Male" }, { name: "Shaurya", Gender: "Male" }, { name: "Dev", Gender: "Male" },
    { name: "Harsh", Gender: "Male" }, { name: "Nikhil", Gender: "Male" }, { name: "Abhay", Gender: "Male" },
    { name: "Kunal", Gender: "Male" }, { name: "Jay", Gender: "Male" },

    { name: "Ananya", Gender: "Female" }, { name: "Diya", Gender: "Female" }, { name: "Ishita", Gender: "Female" },
    { name: "Sneha", Gender: "Female" }, { name: "Sanya", Gender: "Female" }, { name: "Avni", Gender: "Female" },
    { name: "Kriti", Gender: "Female" }, { name: "Meera", Gender: "Female" }, { name: "Aanya", Gender: "Female" },
    { name: "Riya", Gender: "Female" }, { name: "Tanya", Gender: "Female" }, { name: "Prisha", Gender: "Female" },
    { name: "Nisha", Gender: "Female" }, { name: "Ritika", Gender: "Female" }, { name: "Pooja", Gender: "Female" },
    { name: "Neha", Gender: "Female" }, { name: "Sakshi", Gender: "Female" }, { name: "Radhika", Gender: "Female" },
    { name: "Simran", Gender: "Female" }, { name: "Aarohi", Gender: "Female" }, { name: "Aishwarya", Gender: "Female" },
    { name: "Shreya", Gender: "Female" }, { name: "Bhavya", Gender: "Female" }, { name: "Tanvi", Gender: "Female" },
    { name: "Vani", Gender: "Female" }, { name: "Muskan", Gender: "Female" }, { name: "Navya", Gender: "Female" },
    { name: "Ekta", Gender: "Female" }, { name: "Tara", Gender: "Female" }, { name: "Chaitanya", Gender: "Male" }
  ];

  const lastNames = [
    "Parvat","Sharma", "Verma", "Patel", "Reddy", "Iyer", "Kumar", "Singh", "Nair", "Yadav", "Chopra",
    "Joshi", "Mehta", "Mishra", "Dubey", "Thakur", "Saxena", "Ghosh", "Das", "Rao", "Jain",
    "Malhotra", "Gupta", "Bansal", "Mahajan", "Kaul", "Pillai", "Bhat", "Kapoor", "Roy", "Paul",
    "Pandey", "Tiwari", "Aggarwal", "Bajaj", "Mittal", "Arora", "Chatterjee", "Sarkar", "Sethi", "Kulkarni",
    "Shetty", "Banerjee", "Deshmukh", "Naidu", "Dutta", "Bhattacharya", "Bhaskar", "Vyas", "Dwivedi", "Khatri"
  ];
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

  const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "protonmail.com"];

  const devices = ["Mobile", "Desktop", "Tablet", "Smart TV"];
  const paymentMethods = ["UPI", "Credit Card", "Cash on Delivery", "Debit Card", "Net Banking"];

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

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // 👇 Correct Gender with name
  const { name: first_name, Gender } = random(nameGenderPairs);
  const last_name = random(lastNames);
  const selectedState = random(Object.keys(stateCityMap));
  const selectedCity = random(stateCityMap[selectedState]);
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
    Gender,
    email: `${first_name.toLowerCase()}.${last_name.toLowerCase()}${randomInt(10, 99)}@${random(domains)}`,
    phone: `9${randomInt(100000000, 999999999)}`,
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
