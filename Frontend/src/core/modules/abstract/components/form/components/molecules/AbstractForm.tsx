import { FormikProps } from 'formik';
import React from 'react';

type AbstractFormParams = {
    children : React.ReactElement | (React.ReactElement | null)[] | null;
    formik : FormikProps<any>;
}


const AbstractForm = ({children, formik} : AbstractFormParams) => {
    const loadChildren = () => {
        if (children === null) {
            return null;
        }

        if (Array.isArray(children)) {
            return (children as React.ReactElement[])
                .filter((child) => child !== null)
                .map((child) => {
                    return React.cloneElement(child, {
                        formik: formik,
                        key: child.props.id,
                    });
                });
        } else {
            return React.cloneElement(children, {
                formik: formik,
            });
        }
    }

    return (
        <div>
            {
                loadChildren()
            }
        </div>
    )
}

export default AbstractForm;