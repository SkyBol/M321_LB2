import { useFormik } from "formik";
import GuestbookService from "../../services/GuestbookService";
import AbstractFormTextField from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";
import { defaulGuestbookEntryForm, GuestbookEntryForm } from "../../models/GuestbookEntry.model";
import { useNavigate } from "react-router-dom";
import AbstractFormButton from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextArea from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormBigTextArea";
import AbstractFormType from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormType";
import AbstractCardImgDrop from "../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardImgDrop";
import AbstractFormNumericField from "../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormNumericField";
import styles from './GuestBookEntryPage.module.css';
import BottleService from "../../../bootle/services/BottleService";
import { useEffect, useState } from "react";
import Bottle from "../../../bootle/models/Bottle.model";
import ReviewService from "../../../review/services/ReviewService";
import Review from "../../../review/models/ReviewEntry.model";

export const GuestBookEntryPage = () => {
  const navigate = useNavigate();
  const [bottles, setBottles] = useState<Bottle[]>([]);

  // Function to handle form submission
  const createNewGuestBookEntry = (values: GuestbookEntryForm) => {
    const bottleToReview = bottles.find((bottle) => bottle.name === values.bottle_id);

    const addReview = async () => {
      if (!bottleToReview) {
        return Promise.resolve();
      }

      try {
        const reviews: Review[] = (await ReviewService.getAll()).data;
        const review = reviews.find((review) => review.bottle_id === bottleToReview.id);

        if (!review) {
          throw new Error();
        }

        review.bottle_review.push(values.bottle_review);
        return ReviewService.update(review, review.id)
      } catch (_e) {
        const newReview: Review = {
          id: "",
          bottle_id: bottleToReview.id,
          bottle_review: [values.bottle_review],
        }

        return ReviewService.save(newReview)
      }
    }

    Promise.all([
      GuestbookService.save(values),
      addReview(),
    ]).then(() => {
      navigate("/guestBook");
    })
  };

  // Initializing Formik for form handling
  const formik = useFormik<GuestbookEntryForm>({
    initialValues: defaulGuestbookEntryForm,
    onSubmit: createNewGuestBookEntry,
    enableReinitialize: true,
  });

  useEffect(() => {
    const getBottles = async () => {
      const bottles = await BottleService.getAllParameterized({}); // Add a page and paginated search?

      setBottles(bottles.data)
    }

    getBottles();
  }, [])

  return (
    <div className={styles.guestBookEntryPage}>
      <h2 className={styles.title}>Welcome to the Guest Book!</h2>
      
      <div className={styles.guestBookForm}>
        
        <div className={styles.formFields}>
          <div className={styles.formField}>
            <AbstractFormTextField id="name" formik={formik} />
          </div>
  
          <div className={styles.formField}>
            <AbstractFormTextArea id="description" formik={formik} />
          </div>
  
          <div className={styles.shortFormField}>
            <AbstractFormType id="bottle_id" formik={formik} options={bottles.map((bottle) => bottle.name)} />
          </div>
  
          {formik.values.bottle_id && (
            <div className={styles.formField}>
              <AbstractFormNumericField id="bottle_review" formik={formik} />
            </div>
          )}
        </div>
        <div>
          <div className={styles.imageDrop}>
            <AbstractCardImgDrop id="picture_id" formik={formik} />
          </div>
          <div className={styles.submitButton}>
            <AbstractFormButton formik={formik} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestBookEntryPage;
