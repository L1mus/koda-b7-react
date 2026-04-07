export const Review = ({ reviews }) => {
  return (
    <>
      <ul className="gap-2 list-none grid grid-rows-4">
        {reviews.map((review) => (
          <li
            className="p-4 border-2 shadow-md shadow-gray-700 border-amber-500 rounded-2xl w-58 h-38 flex flex-col items-start justify-start gap-2"
            key={review.id}
          >
            <ListReview review={review} />
          </li>
        ))}
      </ul>
    </>
  );
};

const ListReview = ({ review }) => {
  return (
    <>
      <div className="border-b-2 w-full">
        <h2>{review.name}</h2>
      </div>
      <p className="text-sm font-">{review.message}</p>
    </>
  );
};
