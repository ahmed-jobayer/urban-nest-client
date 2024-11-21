const Accordion = () => {
  return (
    <div className="my-10 ">
      <h2 className="text-3xl border-b-2 pb-2 mb-6">FAQs</h2>
      <div className="flex flex-col gap-2">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Can I customize the furniture before purchasing?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer customization options for select furniture items.
              You can choose different materials, colors, and dimensions to
              match your preferences. Look for the Customize option on the
              product page or contact our support team for assistance.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What is your return policy for furniture items?
          </div>
          <div className="collapse-content">
            <p>
              We accept returns within 14 days of delivery for most furniture
              items, provided they are in their original condition and
              packaging. Customized or made-to-order items are non-returnable
              unless they arrive damaged or defective. Please review our full
              return policy <a className="link link-primary">here</a>.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do you offer assembly services for furniture?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we provide assembly services for most furniture items at an
              additional cost. You can select this option during checkout, or
              contact our team to schedule professional assembly after delivery.
              Instructions for self-assembly are also included with every
              purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
