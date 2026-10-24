import React from 'react';

const Transform = () => {
    return (
      <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        <div className="container mx-auto py-40">
          <div className="flex flex-col place-items-center space-y-6">
            <h1 className="font-extrabold text-4xl">
              Ready to Transform Your Workflow?
            </h1>
            <p>
              Join thousands of professionals who are already using Digitools to
              work smarter.Start your free trial today.
            </p>
            <div className="flex gap-5">
              <button className="btn rounded-full bg-white">
                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  Explore Products
                </span>
              </button>
              <button className="btn rounded-full bg-transparent text-white">View Pricing</button>
            </div>
            <p>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>
    );
};

export default Transform;