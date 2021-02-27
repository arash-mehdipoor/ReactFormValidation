import React, { useState, useEffect } from 'react';

const useForm = (callback, ValidationInfo) => {
    const [values, setValue] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const [errors, setError] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValue({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();

        setError(ValidationInfo(values));
        setIsSubmitting(true);
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors])
    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
}

export default useForm
