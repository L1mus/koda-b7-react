import { useState } from "react";
import Header from "../components/Header";
import { Review } from "../components/Review";
import { FormReview } from "../components/FormReview";
import Footer from "../components/Footer";

const dataReview = localStorage.getItem("data-review");
const initialDataReview = JSON.parse(dataReview) || [];
const findLastId = () => {
  if (initialDataReview.length > 0) {
    return initialDataReview[initialDataReview.length - 1].id + 1;
  } else {
    return 0;
  }
};

const lastId = findLastId();

function HomePage() {
  const [reviews, setReviews] = useState(initialDataReview);
  const [id, setId] = useState(lastId);

  localStorage.setItem("data-review", JSON.stringify(reviews));

  const handleAddReview = (nameReview, messageReview) => {
    setId((id) => id + 1);
    setReviews([
      ...reviews,
      {
        id: id,
        name: nameReview,
        message: messageReview,
      },
    ]);
  };

  return (
    <>
      <Header />
      <main className="grid place-content-center">
        <section>
          <FormReview onAddPreview={handleAddReview} />
        </section>
        <section className="mt-12 text-lg font-sans font-bold">
          <Review reviews={reviews} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
