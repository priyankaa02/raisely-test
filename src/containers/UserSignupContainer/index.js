/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import UserDetailsView from './UserSignupView'
import { useDispatch, useSelector } from 'react-redux'
import {
  actions as authActions,
  selectors as authSelectors,
} from '../../reducers/authReducer'

const UserDetailsContainer = (props) => {
  const dispatch = useDispatch()
  const loading = useSelector(authSelectors.selectLoading)
  const signUpResponse = useSelector(authSelectors.selectSignupResponse)
  const [validated, setValidated] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (signUpResponse) {
      setFirstName('')
      setLastName('')
      setEmailId('')
      setPassword('')
      setValidated(false)
    }
  }, [signUpResponse])

  const onChangeFirstName = (text) => {
    setFirstName(text)
  }

  const onChangeEmail = (text) => {
    setEmailId(text)
  }

  const onChangePassword = (text) => {
    setPassword(text)
  }

  const onChangeLastName = (text) => {
    setLastName(text)
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    if (form.checkValidity() === false || password.length < 6) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      const obj = {
        firstName: firstName,
        lastName: lastName,
        email: emailId,
        password: password,
      }
      dispatch(authActions.checkEmail(obj))
    }
    setValidated(true)
  }
  return (
    <UserDetailsView
      validated={validated}
      handleSubmit={handleSubmit}
      firstName={firstName}
      onChangeFirstName={onChangeFirstName}
      emailId={emailId}
      onChangeEmail={onChangeEmail}
      password={password}
      lastName={lastName}
      loading={loading}
      onChangeLastName={onChangeLastName}
      onChangePassword={onChangePassword}
    />
  )
}

export default UserDetailsContainer
