import React, { useState } from "react";

export default function EcommerceForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    product_id: "",
    product_name: "",
    product_category: "",
    product_price: "",
    quantity: "",
    total_amount: "",
    discount_applied: "",
    payment_method: "",
    order_id: "",
    order_date: "",
    delivery_date: "",
    is_repeat_customer: false,
    preferred_device: "",
    marketing_opt_in: false,
    loyalty_points: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.email) {
    alert("Email is required");
    return;
  }

  sessionStorage.setItem("ecomFormData", JSON.stringify(formData));

//This will be used in my rule as a custome event
  document.dispatchEvent(new CustomEvent("formSubmitComplete"));

  console.log("Form Data:", formData);
  alert("Form submitted successfully!");
};


  return (
    <div className="form-container">
      <h2 className="form-title">🛒 Ecommerce Form - Prince</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} className="form-input"  />
        <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} className="form-input"  />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-input" required/>
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="form-input"  />
        <select name="gender" value={formData.gender} onChange={handleChange} className="form-input" >
          <option value="">Select Gender</option>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="form-input"  />
        <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="form-input"  />
        <input name="state" placeholder="State" value={formData.state} onChange={handleChange} className="form-input"  />
        <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="form-input"  />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="form-input"  />
        <input name="product_id" placeholder="Product ID" value={formData.product_id} onChange={handleChange} className="form-input"  />
        <input name="product_name" placeholder="Product Name" value={formData.product_name} onChange={handleChange} className="form-input"  />
        <input name="product_category" placeholder="Product Category" value={formData.product_category} onChange={handleChange} className="form-input"  />
        <input name="product_price" type="number" placeholder="Product Price" value={formData.product_price} onChange={handleChange} className="form-input"  />
        <input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="form-input"  />
        <input name="total_amount" type="number" placeholder="Total Amount" value={formData.total_amount} onChange={handleChange} className="form-input"  />
        <input name="discount_applied" type="number" placeholder="Discount Applied" value={formData.discount_applied} onChange={handleChange} className="form-input"  />
        <input name="payment_method" placeholder="Payment Method" value={formData.payment_method} onChange={handleChange} className="form-input"  />
        <input name="order_id" placeholder="Order ID" value={formData.order_id} onChange={handleChange} className="form-input"  />
        <input name="order_date" type="date" placeholder="Order Date" value={formData.order_date} onChange={handleChange} className="form-input"  />
        <input name="delivery_date" type="date" placeholder="Delivery Date" value={formData.delivery_date} onChange={handleChange} className="form-input"  />
        <label className="checkbox-label">
          <input type="checkbox" name="is_repeat_customer" checked={formData.is_repeat_customer} onChange={handleChange} />
          <span>Repeat Customer</span>
        </label>
        <select name="preferred_device" value={formData.preferred_device} onChange={handleChange} className="form-input" >
          <option value="">Select Device</option>
          <option>Mobile</option><option>Desktop</option><option>Tablet</option>
        </select>
        <label className="checkbox-label">
          <input type="checkbox" name="marketing_opt_in" checked={formData.marketing_opt_in} onChange={handleChange} />
          <span>Marketing Opt-in</span>
        </label>
        <input name="loyalty_points" type="number" placeholder="Loyalty Points" value={formData.loyalty_points} onChange={handleChange} className="form-input"  />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}