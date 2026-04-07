import { useState } from "react";

export const FormReview = ({ onAddPreview }) => {
  const [reviewName, setReviewName] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  return (
    <>
      <div className="flex flex-col items-center gap-4 justify-center border border-solid border-amber-300 p-12">
        <h1 className="text-4xl  ">Input Review</h1>
        <div className="flex gap-16 items-center">
          <label htmlFor="name-review">Name</label>
          <input
            className=" border border-solid border-black rounded-xl px-3 py-1 "
            type="text"
            name="name-review"
            id="name-review"
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
          />
        </div>
        <div className="flex gap-6 items-center">
          <label htmlFor="message-review">Message</label>
          <textarea
            className=" border border-solid border-black rounded-xl px-3 py-1 "
            type="text"
            name="message-review"
            id="message-review"
            value={reviewMessage}
            onChange={(e) => setReviewMessage(e.target.value)}
          />
        </div>

        <button
          className="border-2 rounded-md w-lg"
          onClick={() => {
            setReviewName("");
            setReviewMessage("");
            onAddPreview(reviewName, reviewMessage);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
