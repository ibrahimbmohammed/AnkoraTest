import { Form, Button, Spinner } from "react-bootstrap";
import './index.scss';

const FormFrame = ({
  children,
  backButtonText,
  nextButtonText,
  onHandleSubmit,
  hasBackButton,
  handleBackButton,
  className,
  loading,
  backButtonClass,
  nextButtonClass,
  buttonsFlexArrangementClass,
  isEditable = true
}) => {
  return (
    <Form
      onSubmit={onHandleSubmit}
      className={className}
      autoComplete="off"
    >
      {children}


      {isEditable && <>
      <hr className="my-2" />
      <Form.Row className={"d-flex py-2 " + (buttonsFlexArrangementClass || 'justify-content-center')}>
        {hasBackButton && <Button
          className={"btn " + (backButtonClass || 'btn-outline-danger cancel-btn')}
          type="button"
          onClick={handleBackButton}
        >
          {backButtonText}
        </Button>}

        <Button className={"primary-btn submit-btn mx-2 " + (nextButtonClass || '')} type="submit" disabled={loading}>
          {!loading ? nextButtonText : ''}
          <span className="sr-only">Loading...</span>
          {loading && <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />}
        </Button>
      </Form.Row></>}
    </Form>
  );
};

export default FormFrame;

