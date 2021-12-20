import styles from './FormsControls.module.css'

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
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