import React from 'react'
import {Form, Field} from 'react-final-form';
import {FORM_ERROR} from 'final-form';
import {Input} from "../Common/FormControls/FormControls";


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const required = value => (value ? undefined : 'Required');
export const Login = (props) => {
    return <Form
        onSubmit={
            (values) => {
                return props.logIn(values).then(r => {
                    if (r) {
                        return {[FORM_ERROR]: {messages: r.messages, captcha: r.captcha}}
                    }
                });

                //sleep(2000);
                //window.alert(JSON.stringify(values, 0, 2));
            }
        }
        render={({handleSubmit, form, submitting, pristine, values, submitError,}) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>E-mail</label>
                    <Field
                        name="email"
                        type="email"
                        validate={required}
                        component={Input}
                        placeholder="E-mail"
                    />

                </div>
                <div>
                    <label>Password</label>
                    <Field
                        name="password"
                        component={Input}
                        type="password"
                        validate={required}
                        placeholder="Password"
                    >
                    </Field>
                </div>
                <div>
                    <label>Remember Me?</label>
                    <Field
                        name="rememberMe"
                        component="input"
                        type="checkbox"
                        placeholder="Remember me?"
                    />
                </div>
                {submitError && submitError.messages && <div>{submitError.messages}</div>}
                {submitError && submitError.captcha && <div>
                    <img src={submitError.captcha} alt="captcha"/>
                    <div>
                        <label>Captcha</label>
                        <Field
                            name="captcha"
                            component={Input}
                            type="text"
                            validate={required}
                            placeholder="Captcha"
                        >
                        </Field>
                    </div>
                </div>}
                <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    >
                        Reset
                    </button>
                </div>
            </form>
        )}
    />
}

export const LogOutForm = (props) => {
    const onSubmit = async (props) => {
        await sleep(1000);
        props.logOut();
    }

    return <Form
        onSubmit={function () {
            onSubmit(props)
        }}
        render={({handleSubmit, form, submitting}) => (
            <form onSubmit={handleSubmit}>
                <div className="buttons">
                    <button type="submit" disabled={submitting}>
                        Выйти
                    </button>
                </div>
            </form>
        )}
    />
}