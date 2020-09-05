import React from 'react'
import styles from './UserSignupContainer.module.scss'
import { Form, Col } from 'react-bootstrap'
import user from '../../images/user_icon.svg'
import email from '../../images/email.svg'
import pwd from '../../images/password.svg'
import PrimaryButton from '../../components/PrimaryButton'

const UserSignupView = ({
  validated,
  handleSubmit,
  firstName,
  onChangeFirstName,
  emailId,
  loading,
  onChangeEmail,
  password,
  lastName,
  onChangeLastName,
  onChangePassword,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h4 className={styles.text1}>Let's Sign Up</h4>
        <div className={styles.formContainer}>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{ padding: '20px' }}
          >
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <img src={user} alt="user" className={styles.iconPlaceholder} />
                <Form.Control
                  required
                  type="text"
                  placeholder=" user first name"
                  value={firstName}
                  onChange={(e) => onChangeFirstName(e.target.value)}
                  className={styles.input}
                />
                <Form.Control.Feedback type="invalid" className={styles.error}>
                  Please provide us your first name.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <img src={user} alt="user" className={styles.iconPlaceholder} />
                <Form.Control
                  required
                  type="text"
                  placeholder=" user last name"
                  value={lastName}
                  onChange={(e) => onChangeLastName(e.target.value)}
                  className={styles.input}
                />
                <Form.Control.Feedback type="invalid" className={styles.error}>
                  Please provide us your last name.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <img
                  src={email}
                  alt="email"
                  className={styles.iconPlaceholder}
                  style={{ marginTop: '2px' }}
                />
                <Form.Control
                  type="email"
                  placeholder=" email"
                  required
                  onChange={(e) => onChangeEmail(e.target.value)}
                  value={emailId}
                  className={styles.input}
                />
                <Form.Control.Feedback type="invalid" className={styles.error}>
                  Please provide your valid email id.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="formBasicPassword">
                <img
                  src={pwd}
                  alt="password"
                  className={styles.iconPlaceholder}
                />
                <Form.Control
                  required
                  onChange={(e) => onChangePassword(e.target.value)}
                  value={password}
                  className={styles.input}
                  type="password"
                  isInvalid={password && password.length < 6}
                  aria-describedby="passwordHelpBlock"
                  placeholder=" password"
                />
                <Form.Control.Feedback type="invalid" className={styles.error}>
                  Your password must be atleast 6 characters long
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <PrimaryButton
              text="Submit"
              loading={loading}
              onClick={() => {}}
              className={styles.btn}
            />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default UserSignupView
