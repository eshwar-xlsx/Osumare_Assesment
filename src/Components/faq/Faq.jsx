import React from 'react';
import './Faq.css';

const Faq = () => {
  return (
    <div className="">
      <h2 className="text-center fw-bold mt-5">Frequently Asked Questions</h2>
      <p className="text-muted text-center mb-5">
        Pinpoint your audience with precision, ensuring your marketing efforts reach those
        <br />
        most likely to engage with your brand.
      </p>

      <div className="accordion-container fs">
        <div className="accordion" id="accordionExample">
          {/* Accordion 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                1. How does Osumare measure campaign success?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                We believe in measurable results. Our data-driven approach means that every
                campaign's performance is tracked, analyzed, and refined for optimal outcomes. We
                provide regular reports that detail key metrics, giving you clear insights into how
                our strategies are driving growth for your brand.
              </div>
            </div>
          </div>

          {/* Accordion 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                2. What services does Osumare provide for digital marketing?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Osumare offers a comprehensive suite of digital marketing services, including SEO,
                social media management, pay-per-click advertising, email marketing, and content
                marketing. Our strategies are tailored to meet your business goals and reach the
                right audience effectively.
              </div>
            </div>
          </div>

          {/* Accordion 3 */}
          <div className="accordion-item mb-5">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                3. How does Osumare ensure ROI on campaigns?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                ROI is at the core of our digital marketing strategies. By leveraging data
                analytics, audience insights, and real-time performance tracking, we ensure that
                every campaign delivers measurable results. Regular updates and strategy
                optimization help achieve the best possible return on your investment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
