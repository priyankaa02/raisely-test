/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styles from './PrimaryButton.module.scss'

const PrimaryButton = ({
  text,
  className,
  type,
  onClick,
  disabled,
  noblink,
  loading,
  cssStyle,
}) => {
  return (
    <button
      css={css`
        ${cssStyle}
      `}
      className={`${styles.button} ${noblink && styles.noblink} ${className} `}
      type={type || 'submit'}
      onClick={onClick}
      disabled={disabled}
    >
      {!loading && text}
      {loading && (
        <img
          css={css`
            height: 60%;
            width: auto;
          `}
          alt={'loading...'}
          src={require('../../images/spinner.svg')}
        />
      )}
    </button>
  )
}
export default PrimaryButton
