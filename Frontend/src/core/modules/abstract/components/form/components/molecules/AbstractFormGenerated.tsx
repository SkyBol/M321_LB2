import { useFormik } from "formik";
import AbstractForm from "./AbstractForm";
import AbstractFormTextField from "../atoms/AbstractFormTextField";
import AbstractFormSwitch from "../atoms/AbstractFormSwitch";

interface AbstractFormGeneratedProps {
    object : any;
    submitActionHandler : (val: any) => void;
    errorComponent ?: any;
}


/**
 * All Types:
 * "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
 * 
 * Important Types:
 * "string" | "number" | "boolean" | "undefined" | "object"
 * 
 * Unimportant Types:
 * "bigint" | "symbol" | "function"
 */
const typeSwitcher = (key: string, value: any) => {
    switch (typeof value) {
        case "string":
        case "number":
            return (
                <AbstractFormTextField id={key} />
            );
        case "boolean":
            return (
                <AbstractFormSwitch id={key} />
            );
        case "object":
            if (value) {
                return (<></>)
            }
        case "undefined":
        default:
            return (
                <div>
                    Not yet implemented
                </div>
            )
    }
}

/**
 * This component creates an abstract form based on the values inside the object
 * @returns A generated Abstract Form
 */
const AbstractFormGenerated = ({ object, submitActionHandler, errorComponent } : AbstractFormGeneratedProps) => {
    if (typeof object !== "object") {
        if (errorComponent) {
            return errorComponent;
        }
        return <>
            <p style={{fontSize: "15px"}}>Not an object</p>
            <p style={{fontSize: "15px"}}>TypeOf returned: '{typeof object}'</p>
            <p style={{fontSize: "11px"}}>Is your object perhaps not defined yet?</p>
            <p style={{fontSize: "11px"}}>Make this Component return whatever you want</p>
            <p style={{fontSize: "11px"}}>via the errorComponent property (supports strings, numbers, components etc.)</p>
        </>
    }


    const formik = useFormik({
        initialValues: object,
        onSubmit: submitActionHandler,
        enableReinitialize: true,
    })

    return (
        <AbstractForm formik={formik}>
            {
                Object.entries(object).map(([key, value]) => {
                    return typeSwitcher(key, value);
                })
            }
        </AbstractForm>
    )
}

export default AbstractFormGenerated;