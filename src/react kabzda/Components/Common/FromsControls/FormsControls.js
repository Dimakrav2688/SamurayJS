import { Field } from 'redux-form';
import styles from './FormsControls.module.css'


const FormControl = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}

// важно помнить что библиотека передаёт много значений в meta, по этому нужно просто заюзать мета данные
// в переменную используем значения далее, шаблон используем не только в спане но и в стилизации.......
// по этому важно изучить хорошо библиотеку

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validate, component, props = {}, text = '') => (
    <div>
        <Field placeholder={placeholder} name={name}
            validate={validate} component={component}
            {...props}
        /> {text}
    </div>
)