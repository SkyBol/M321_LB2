import { useFormik } from "formik";
import Bottle from "../../../models/Bottle.model.ts";
import AbstractFormButton from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextField from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTextField";
import AbstractFormDropDown from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardCountry.tsx";
import { countryList } from "../../../models/Countries.model.ts";
import AbstractCardImgDrop from "../../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardImgDrop.tsx";
import AbstractFormTextArea from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormBigTextArea.tsx";
import AbstractFormType from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormType.tsx";
import AbstractFormNumericField from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormNumericField.tsx";


import styles from "./BottleForm.module.css";
import AbstractFormTagField from "../../../../../../core/modules/abstract/components/form/components/atoms/AbstractFormTagField.tsx";

interface BottleFormProps {
    bottle: Bottle;
    submitActionHandler: (values: Bottle) => void;
}

const BottleForm = ({ bottle, submitActionHandler }: BottleFormProps) => {
    const formik = useFormik({
        initialValues: bottle,
        onSubmit: submitActionHandler,
        enableReinitialize: true,
    });

    return (
        <div className={styles.bottleFormPage}>
            <h2 className={styles.title}>Welcome to the Bar</h2>

            <div className={styles.addBottleForm}/>
            <div className={styles.formContent}>
                <div className={styles.formFields}>
                    <div className={styles.formField}>
                        <AbstractFormTextField id="name" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormType id="type" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormTextArea id="description" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormTagField id="tags" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormDropDown id="country" options={countryList} formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormNumericField id="amount" formik={formik} />
                    </div>

                    <div className={styles.formField}>
                        <AbstractFormNumericField id="rating" formik={formik} />
                    </div>
                </div>

                <div className={styles.imageDrop}>
                    <AbstractCardImgDrop id="img_id" formik={formik} />
                </div>
            </div>

            <div className={styles.submitButton}>
                <AbstractFormButton formik={formik}>Save</AbstractFormButton>
            </div>
        </div>
    );
};

export default BottleForm;
