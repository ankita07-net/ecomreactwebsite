function ShippingMethod() {
  return (
    <div className="shipping-method">
      <h4 className="section2">2. Shipping Method</h4>
      <form>
        <div className="radio_control">
          <input
            type="radio"
            name="shipping"
            id="shipping"
            required=""
            value="Standard Shipping (4-8 business days via USPS) FREE"
          />
          <label>Standard Shipping (4-8 business days via USPS) FREE</label>
        </div>
        <div className="radio_control">
          <input
            type="radio"
            name="shipping"
            id="delivery"
            required=""
            value="Express Delivery (2-5 business days via USPS) $17.95"
          />
          <label>Express Delivery (2-5 business days via USPS) $17.95</label>
        </div>
        <div className="radio_control">
          <input
            type="radio"
            name="shipping"
            id="nextday"
            required=""
            value="Next Day Delivery (Next business days via FedEx) $53.61"
          />
          <label>Next Day Delivery (Next business days via FedEx) $53.61</label>
        </div>
      </form>
    </div>
  );
}

export default ShippingMethod;
