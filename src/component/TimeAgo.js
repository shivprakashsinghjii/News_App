import React, { useState, useEffect } from "react";
import moment from "moment";

const YourComponent = ({ publishedAt }) => {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const updateFormattedTime = () => {
      const now = moment();
      const targetTime = moment(publishedAt);
      const diffSeconds = now.diff(targetTime, "seconds");

      if (diffSeconds < 5) {
        setFormattedTime("Just now");
      } else {
        setFormattedTime(moment(publishedAt).fromNow());
      }
    };

    // Update the formatted time initially
    updateFormattedTime();

    // Update the formatted time every second (adjust the interval as needed)
    const intervalId = setInterval(updateFormattedTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [publishedAt]);

  return (
    <p className="published">
      <small className="text-muted">On {formattedTime}</small>
    </p>
  );
};

export default YourComponent;
