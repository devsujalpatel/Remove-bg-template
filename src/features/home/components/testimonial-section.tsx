import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const TestimonialSection = () => {
  return (
    <div>
      <div>
        <h1>Discover Why Our Users Can't Stop Talking About ABC </h1>
        <div>
          <p>
            Thousands of users trust our tool to make photo editing effortless
            and fast. From eCommerce sellers to social media influencers, we’re
            proud to help people transform their images with ease.
          </p>
          <Button>View All</Button>
        </div>
        <div>
          <Image
            src="/elements/google-review.png"
            alt="Google review"
            width={200}
            height={200}
          />
          <Image
            src="/elements/trustpilot-review.png"
            alt="Trustpilot review"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div>
        <div className="card"></div>
      </div>
    </div>
  );
};
