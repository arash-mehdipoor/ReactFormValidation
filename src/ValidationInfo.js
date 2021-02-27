const validationInfo = values => {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "UserName required";
    }
    if (!values.password.trim()) {
        errors.password = "Password required";
    } else if (values.password.length < 6) {
        errors.password = "Password need to be 6 characters or more";
    }
    if (!values.password2.trim()) {
        errors.password2 = "Password2 required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password2 do not match";
    }
    if (!values.email.trim()) {
        errors.email = "Email required"
    }
    else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) {
        errors.email = "Email address is invalid"
    }
    return errors;
}

export default validationInfo