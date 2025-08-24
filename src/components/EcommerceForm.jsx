import React, { useState, useEffect } from "react";
import { generateRealisticData } from "./mockData"; // adjust the path if mockData.js is in another folder

export default function EcommerceForm() {
  const [formData, setFormData] = useState({ ...generateRealisticData() });

  // Converts "YYYY-MM-DD" -> ISO 8601 "YYYY-MM-DDT00:00:00.000Z"
  // If it's already ISO, returns as-is.
  const toIsoIfDate = (val) => {
    if (!val) return "";
    // already looks like ISO
    if (/^\d{4}-\d{2}-\d{2}T/.test(val)) return val;
    // looks like YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(val)) return new Date(val).toISOString();
    return val;
  };


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

    // Make a copy and convert dates just before saving/sending
    const normalized = {
      ...formData,
      // keep the user-friendly date for UI/debug
      order_date_display: formData.order_date || "",
      // NEW: ISO version for AEP mapping
      order_date_iso: toIsoIfDate(formData.order_date),
    };

    // If you also want delivery_date in ISO, do the same:
    // delivery_date_display: formData.delivery_date || "",
    // delivery_date_iso: toIsoIfDate(formData.delivery_date),

    sessionStorage.setItem("ecomFormData", JSON.stringify(normalized));
    document.dispatchEvent(new CustomEvent("formSubmitComplete"));

    alert("Form submitted successfully!");
  };

  useEffect(() => {
    const generated = generateRealisticData(); //generates new mock data
    setFormData(generated); //  sets it into the form                

    // Auto submit functionality can be enabled by uncommenting the following lines:
    // const timer = setTimeout(() => {
    //   document.querySelector("form").dispatchEvent(new Event("submit", { bubbles: true }));
    // }, 10000);

    // return () => clearTimeout(timer);
  }, []);

  return (
    <div className="form-container">
      <h2 className="form-title">Web SDK testing- Saksham</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <label>First Name</label>
        <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} className="form-input" />
        <label>Last Name</label>
        <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} className="form-input" />
        <label>Email</label>
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-input" required />
        <label>Customer ID</label>
        <input name="customer_id" placeholder="Customer ID" value={formData.customer_id} onChange={handleChange} className="form-input" />
        <label>Phone</label>
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="form-input" />
        <label>Gender</label>
        <select name="Gender" value={formData.Gender} onChange={handleChange} className="form-input">
          <option value="">Select Gender</option>
          <option>Male</option><option>Female</option><option>Other</option>
        </select>
        <label>Age</label>
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="form-input" />
        <label>City</label>
        <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="form-input" />
        <label>State</label>
        <input name="state" placeholder="State" value={formData.state} onChange={handleChange} className="form-input" />
        <label>Pincode</label>
        <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="form-input" />
        <label>Address</label>
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="form-input" />
        <label>Product ID</label>
        <input name="product_id" placeholder="Product ID" value={formData.product_id} onChange={handleChange} className="form-input" />
        <label>Product Name</label>
        <input name="product_name" placeholder="Product Name" value={formData.product_name} onChange={handleChange} className="form-input" />
        <label>Product Category</label>
        <input name="product_category" placeholder="Product Category" value={formData.product_category} onChange={handleChange} className="form-input" />
        <label>Product Price</label>
        <input name="product_price" type="number" placeholder="Product Price" value={formData.product_price} onChange={handleChange} className="form-input" />
        <label>Quantity</label>
        <input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} className="form-input" />
        <label>Total Amount</label>
        <input name="total_amount" type="number" placeholder="Total Amount" value={formData.total_amount} onChange={handleChange} className="form-input" />
        <label>Discount Applied</label>
        <input name="discount_applied" type="number" placeholder="Discount Applied" value={formData.discount_applied} onChange={handleChange} className="form-input" />
        <label>Payment Method</label>
        <input name="payment_method" placeholder="Payment Method" value={formData.payment_method} onChange={handleChange} className="form-input" />
        <label>Order ID</label>
        <input name="order_id" placeholder="Order ID" value={formData.order_id} onChange={handleChange} className="form-input" />
        <label>Order Date</label>
        <input name="order_date" type="date" placeholder="Order Date" value={formData.order_date} onChange={handleChange} className="form-input" />

        <label>Delivery Date</label>
        <input name="delivery_date" type="date" placeholder="Delivery Date" value={formData.delivery_date} onChange={handleChange} className="form-input" />
        <label className="checkbox-label">
          <input type="checkbox" name="is_repeat_customer" checked={formData.is_repeat_customer} onChange={handleChange} />
          <span>Repeat Customer</span>
        </label>
        <label>Preferred Device</label>
        <select name="preferred_device" value={formData.preferred_device} onChange={handleChange} className="form-input">
          <option value="">Select Device</option>
          <option>Mobile</option><option>Desktop</option><option>Tablet</option><option>Smart TV</option>
        </select>
        <label className="checkbox-label">
          <input type="checkbox" name="marketing_opt_in" checked={formData.marketing_opt_in} onChange={handleChange} />
          <span>Marketing Opt-in</span>
        </label>
        <label>Loyalty Points</label>
        <input name="loyalty_points" type="number" placeholder="Loyalty Points" value={formData.loyalty_points} onChange={handleChange} className="form-input" />
        <label>Source of Data</label>
        <input name="source_of_data" placeholder="Source of Data" value={formData.source_of_data} readOnly className="form-input" />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
